import type { SetNumber } from '../../dist/index.js'

import fetch from 'node-fetch'
import fs from 'fs/promises'
import path from 'path'

import { SET_DATA } from '../../dist/index.js'
import { importSetData } from '../../dist/imports.js'

import { getOutputFolderForSet, getPathToSet, getPathToPatch } from '../helpers/files.js'
import { BASE_UNIT_API_NAMES, mDataValueSubstitutions, mSpellCalculationsSubstitutions } from '../helpers/normalize.js'
import type { ChampionJSON, ChampionJSONStats, ResponseJSON } from '../helpers/types.js'
import { getAPIName, getSetDataFrom } from '../helpers/utils.js'

const UNIT_NORMALIZE_DELETE_KEYS: Record<string, string[]> = {
	SpellObject: [ 'cooldownTime', 'mClientData', 'mAnimationName' ],
	TFTCharacterRecord: [ 'attackSpeedRatio', 'healthBarHeight', 'healthBarFullParallax', 'selectionRadius', 'selectionHeight', 'expGivenOnDeath', 'goldGivenOnDeath', 'mShopData' ],
}
const UNIT_NORMALIZE_RENAME_KEYS: Record<string, Record<string, string>> = {
	TFTCharacterRecord: {
		'{e1562ee7}': 'isSpawn',
		'{8d30a918}': 'teamSize',
	},
}

export async function extractLatestPatchFor(setNumber: SetNumber) {
	await fs.mkdir(getOutputFolderForSet(setNumber), { recursive: true })
	const championsPath = getPathToSet(setNumber, 'champion')
	for (const championJSON of await getPatchFor(setNumber)) {
		await fs.mkdir(championsPath, { recursive: true })
		const pathName = Object.values(championJSON).find(entry => entry.mCharacterName)!.mCharacterName.toLowerCase()
		const outputPath = path.resolve(championsPath, pathName + '.json')
		fs.writeFile(outputPath, JSON.stringify(championJSON, undefined, '\t'))
	}
}

export async function getPatchFor(loadSet: SetNumber, customPatchLine?: string) {
	const patchLine = customPatchLine ?? SET_DATA[loadSet].patchLine
	const baseURL = `https://raw.communitydragon.org/${patchLine}`
	const gameURL = `${baseURL}/cdragon/tft/en_us.json`
	const mapURL = `${baseURL}/game/data/maps/shipping/map22/map22.bin.json`
	const gameResponse = await fetch(gameURL)
	const mapResponse = await fetch(mapURL)
	if (!gameResponse.ok) { throw gameResponse }
	if (!mapResponse.ok) { throw mapResponse }

	// const etagPath = getPathToPatch(patchLine, `.etag.local`)
	const etagPath = getPathToSet(loadSet, `.etag.local`)
	let oldEtag: string | undefined
	try {
		oldEtag = await fs.readFile(etagPath, 'utf8')
	} catch {
		console.log('No local hash. Reloading data from:', gameURL)
	}
	const newEtag = mapResponse.headers.get('etag')
	if (newEtag != null) {
		if (newEtag === oldEtag) {
			return []
		}
		console.log(oldEtag === undefined ? 'Loading new Set' : 'File updated! Rebuilding data.', newEtag, oldEtag)
		await fs.writeFile(etagPath, newEtag)
	} else {
		console.log('No cache etag for resource, reloading data.')
	}
	console.log('')

	const mapResponseJSON = await mapResponse.json() as Record<string, Record<string, any>>
	for (const rootKey in mapResponseJSON) {
		const childObject = mapResponseJSON[rootKey]
		const deleteTypes = ['BankUnitList', 'VfxSystemDefinitionData']
		if (childObject.complexEmitterDefinitionData != null || (childObject.mScriptName != null && (childObject.mScriptName as string).startsWith('TFT_PlayerDamage_')) || deleteTypes.includes(childObject.__type)) {
			delete mapResponseJSON[rootKey]
		}
	}

	const gameResponseJSON = await gameResponse.json() as ResponseJSON
	const parentSetNumber = getLatestSetNumberFrom(gameResponseJSON.sets)

	const currentSetNumber = parentSetNumber === Math.floor(loadSet) ? loadSet : parentSetNumber
	if (SET_DATA[currentSetNumber] == null) {
		throw 'New Set!! ' + currentSetNumber
	}
	const { champions } = getSetDataFrom(loadSet, parentSetNumber, gameResponseJSON)

	await fs.mkdir(getPathToSet(currentSetNumber, 'hardcoded'), { recursive: true })

	// await fs.writeFile(getPathToPatch(patchLine, '.game.raw.json'), JSON.stringify(gameResponseJSON, undefined, '\t'))
	await fs.writeFile(getPathToSet(currentSetNumber, '.game.raw.json'), JSON.stringify(gameResponseJSON, undefined, '\t'))
	await fs.writeFile(getPathToSet(currentSetNumber, '.map.raw.json'), JSON.stringify(mapResponseJSON, undefined, '\t'))
	console.log('Loading set', currentSetNumber, 'patch', patchLine.toUpperCase(), '...', 'Units:', champions.length, '\n')

	const setData = await importSetData(currentSetNumber)
	const TRAIT_DATA_SUBSTITUTIONS = setData?.TRAIT_DATA_SUBSTITUTIONS ?? {}

	// Champions

	const apiNames = champions.map(champion => getAPIName(champion))
	if (parentSetNumber >= 5) {
		for (const apiName of BASE_UNIT_API_NAMES) {
			if (!apiNames.includes(apiName)) {
				apiNames.push(apiName)
			}
		}
	}

	return Promise.all(apiNames.map(async apiName => {
		const pathName = apiName.toLowerCase()
		const url = `${baseURL}/game/data/characters/${pathName}/${pathName}.bin.json`
		// console.log('Loading champion', apiName, url)
		const response = await fetch(url)
		if (!response.ok) {
			console.error(response)
			throw `ERR ${pathName} Unable to load`
		}
		const json = await response.json() as ChampionJSON
		for (const rootKey in json) { // Remove and rename keys
			const entry = json[rootKey]
			if (entry.__type === 'SkinCharacterMetaDataProperties') {
				delete json[rootKey]
				continue
			}

			const entryKey = entry.__type ?? ('mSpell' in entry ? 'SpellObject' : ('mLinkedTraits' in entry ? 'TFTCharacterRecord' : undefined))
			const deleting = UNIT_NORMALIZE_DELETE_KEYS[entryKey]
			if (deleting != null) {
				let deleteFrom = entry
				if (entryKey === 'SpellObject') {
					deleteFrom = deleteFrom.mSpell
					if (deleteFrom == null) {
						delete json[rootKey]
					} else {
						replaceKey(deleteFrom, 'mSpellCalculations', '{94572284}')
						if (deleteFrom.mEffectAmount != null) {
							deleteFrom.mEffectAmount = deleteFrom.mEffectAmount.filter((effect: Object) => Object.keys(effect).length > 1)
						}
						const spellCalculations = deleteFrom.mSpellCalculations
						for (const key in spellCalculations) {
							const mSpellCalculationsSubstitution = mSpellCalculationsSubstitutions[key]
							const value = spellCalculations[key]
							replaceKey(value, 'mFormulaParts', '{50f145c0}')
							if (mSpellCalculationsSubstitution != null) {
								delete spellCalculations[key]
								spellCalculations[mSpellCalculationsSubstitution] = value
							} else if (key.startsWith('{')) {
								console.log('UNKNOWN mSpellCalculationsSubstitution', key, 'for', apiName)
							}
							if (value.mFormulaParts != null) {
								for (const mFormulaPart of value.mFormulaParts) {
									replaceKey(mFormulaPart, 'mRatio', '{b8dcfcbb}')
									replaceKey(mFormulaPart, 'mStyleTag', '{992cd7eb}')
									replaceKey(mFormulaPart, 'mSubpart', '{1cd83c4b}')
									let childArray: any[]
									if (mFormulaPart.mPart1 != null) {
										childArray = [mFormulaPart.mPart1, mFormulaPart.mPart2, mFormulaPart.mPart3, mFormulaPart.mPart4, mFormulaPart.mPart5]
											.filter((subpart): subpart is Record<string, any> => subpart != null)
									} else if (mFormulaPart.mSubparts != null) {
										childArray = mFormulaPart.mSubparts as Record<string, any>[]
									} else {
										childArray = [mFormulaPart]
									}
									for (const child of childArray) {
										const subPart = child.mSubpart != null ? child.mSubpart : child
										replaceKey(subPart, 'mRatio', '{b8dcfcbb}')
										replaceKey(subPart, 'mStyleTag', '{992cd7eb}')
										replaceKey(subPart, 'mSubpart', '{1cd83c4b}')
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
				}
				if (deleteFrom != null) {
					for (const key of deleting) {
						delete deleteFrom[key]
					}
				}
			}
			const renaming = UNIT_NORMALIZE_RENAME_KEYS[entryKey]
			if (renaming != null) {
				for (const renameKey in renaming) {
					const value = entry[renameKey]
					delete entry[renameKey]
					entry[renaming[renameKey]] = value
				}
			}
			if (entryKey === 'TFTCharacterRecord') {
				const stats = entry as ChampionJSONStats
				stats.mLinkedTraits?.forEach(traitEntry => {
					const rawTrait = traitEntry.TraitData ?? traitEntry['{053a1f33}']!
					traitEntry.TraitData = TRAIT_DATA_SUBSTITUTIONS[rawTrait] ?? rawTrait
					delete traitEntry['{053a1f33}']
				})
			}
		}
		return json
	}))
}

export function getLatestSetNumberFrom(data: Record<SetNumber, any>): SetNumber {
	return Object.keys(data).reduce((previous, current) => Math.max(previous, parseFloat(current)) as SetNumber, 0 as SetNumber)
}

function replaceKey(object: Record<string, any>, key: string, substituted: string) {
	if (!(key in object) && substituted in object) {
		object[key] = object[substituted]
		delete object[substituted]
	}
}
