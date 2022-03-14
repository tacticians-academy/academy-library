const PATCH_LINE = 'latest' // 'latest' 'pbe' '12.4'

import fetch from 'node-fetch'
import fs from 'fs/promises'
import path from 'path'

import { getPathTo, importSetData, etagPath, setNumberPath } from './helpers/files.js'
import { BASE_UNIT_API_NAMES, mDataValueSubstitutions, mSpellCalculationsSubstitutions } from './helpers/normalize.js'
import { ChampionJSON, ChampionJSONStats, ResponseJSON } from './helpers/types.js'

const baseURL = `https://raw.communitydragon.org/${PATCH_LINE}`
const url = `${baseURL}/cdragon/tft/en_us.json`
const response = await fetch(url)
if (!response.ok) { throw response }
console.log(url)

let oldEtag: string | undefined
try {
	oldEtag = await fs.readFile(etagPath, 'utf8')
} catch {
	console.log('No local hash. Reloading data.')
}
const newEtag = response.headers.get('etag')
if (newEtag != null) {
	if (newEtag === oldEtag) {
		console.log('Cached etag unchanged. Terminating.\n')
		process.exit(0)
	}
	if (oldEtag !== undefined) {
		console.log('File updated! Rebuilding data.', newEtag, oldEtag)
	}
	fs.writeFile(etagPath, newEtag)
} else {
	console.log('No cache etag for resource, reloading data.')
}
console.log('')

const responseJSON = await response.json() as ResponseJSON
const currentSetNumber = Object.keys(responseJSON.sets).reduce((previous, current) => Math.max(previous, parseInt(current, 10)), 0)
const { champions } = responseJSON.sets[currentSetNumber]

fs.writeFile(getPathTo(currentSetNumber, '._.json'), JSON.stringify(responseJSON, undefined, '\t'))
fs.writeFile(setNumberPath, currentSetNumber.toString())
console.log('Loading set', currentSetNumber, 'from', PATCH_LINE.toUpperCase(), '...', 'Units:', champions.length, '\n')

const { TRAIT_DATA_SUBSTITUTIONS } = await importSetData(currentSetNumber)

// Champions

const deleteNormalizations: Record<string, string[]> = {
	SpellObject: [ 'cooldownTime', 'mClientData', 'mAnimationName' ],
	TFTCharacterRecord: [ 'attackSpeedRatio', 'healthBarHeight', 'healthBarFullParallax', 'selectionRadius', 'selectionHeight', 'expGivenOnDeath', 'goldGivenOnDeath', 'mShopData' ],
}
const renameNormalizations: Record<string, Record<string, string>> = {
	TFTCharacterRecord: {
		'{e1562ee7}': 'isSpawn',
		'{8d30a918}': 'teamSize',
	},
}

const championsPath = getPathTo(currentSetNumber, 'champion')
await fs.mkdir(championsPath, { recursive: true })
const apiNames = champions.map(champion => champion.apiName)
for (const apiName of BASE_UNIT_API_NAMES) {
	if (!apiNames.includes(apiName)) {
		apiNames.push(apiName)
	}
}

await Promise.all(apiNames.map(async apiName => {
	const pathName = apiName.toLowerCase()
	const outputPath = path.resolve(championsPath, pathName + '.json')
	const url = `${baseURL}/game/data/characters/${pathName}/${pathName}.bin.json`
	// console.log('Loading champion', apiName, url)
	const response = await fetch(url)
	if (!response.ok) {
		throw response
	}
	const json = await response.json() as ChampionJSON
	for (const rootKey in json) { // Remove and rename keys
		const entry = json[rootKey]
		if (entry.__type === 'SkinCharacterMetaDataProperties') {
			delete json[rootKey]
			continue
		}

		const deleting = deleteNormalizations[entry.__type]
		if (deleting != null) {
			let deleteFrom = entry
			if (entry.__type === 'SpellObject') {
				deleteFrom = deleteFrom.mSpell
				if (deleteFrom == null) {
					delete json[rootKey]
				} else {
					if (deleteFrom.mEffectAmount != null) {
						deleteFrom.mEffectAmount = deleteFrom.mEffectAmount.filter((effect: Object) => Object.keys(effect).length > 1)
					}
					const spellCalculations = deleteFrom.mSpellCalculations
					for (const key in spellCalculations) {
						const mSpellCalculationsSubstitution = mSpellCalculationsSubstitutions[key]
						const value = spellCalculations[key]
						if (mSpellCalculationsSubstitution != null) {
							delete spellCalculations[key]
							spellCalculations[mSpellCalculationsSubstitution] = value
						} else if (key.startsWith('{')) {
							console.log('UNKNOWN mSpellCalculationsSubstitution', key, 'for', apiName)
						}
						for (const mFormulaPart of value.mFormulaParts) {
							let childArray: any[]
							if (mFormulaPart.mPart1) {
								childArray = [mFormulaPart.mPart1, mFormulaPart.mPart2, mFormulaPart.mPart3, mFormulaPart.mPart4, , mFormulaPart.mPart5]
									.filter((subpart): subpart is Record<string, any> => !!subpart)
							} else if (mFormulaPart.mSubparts) {
								childArray = mFormulaPart.mSubparts as Record<string, any>[]
							} else {
								childArray = [mFormulaPart]
							}
							for (const child of childArray) {
								const subPart = child.mSubpart != null ? child.mSubpart : child
								const value = subPart.mDataValue as string
								if (value !== undefined) {
									const mDataValueSubstitution = mDataValueSubstitutions[value]
									if (mDataValueSubstitution != null) {
										subPart.mDataValue = mDataValueSubstitution
									} else if (value.startsWith('{')) {
										console.log('UNKNOWN mDataValueSubstitution', value, 'for', apiName)
									}
								}
							}
						}
					}
				}
			}
			if (deleteFrom != null) {
				for (const key of deleting) {
					delete deleteFrom[key]
				}
			}
		}
		const renaming = renameNormalizations[entry.__type]
		if (renaming != null) {
			for (const renameKey in renaming) {
				const value = entry[renameKey]
				delete entry[renameKey]
				entry[renaming[renameKey]] = value
			}
		}
		if (entry.__type === 'TFTCharacterRecord') {
			const stats = entry as ChampionJSONStats
			stats.mLinkedTraits?.forEach(traitEntry => {
				const rawTrait = traitEntry.TraitData
				traitEntry.TraitData = TRAIT_DATA_SUBSTITUTIONS[rawTrait]
			})
		}
	}
	fs.writeFile(outputPath, JSON.stringify(json, undefined, '\t'))
}))
