const PATCH_LINE = 'pbe' // 'latest' 'pbe' '12.4'
const MAX_STAR_LEVEL = 3

import fetch from 'node-fetch'
import fs from 'fs/promises'
import path from 'path'

import { getPathTo, importItems, importSetData, etagPath, setNumberPath } from './helpers/files.js'
import { formatJS } from './helpers/formatting.js'
import { mStatSubstitutions, mDataValueSubstitutions, mSpellCalculationsSubstitutions, UNRELEASED_ITEM_NAME_KEYS, AUGMENT_EFFECTS_SUBSTITUTIONS, NORMALIZE_EFFECT_KEYS, SUBSTITUTE_EFFECT_KEYS } from './helpers/normalize.js'

import { COMPONENT_ITEM_IDS } from '../dist/index.js'
import type { AugmentData, AugmentTier, ChampionData, ChampionSpellData, EffectVariables, ItemData, SpellVariables, TraitData } from '../dist/index.js'

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
		console.log('Cached etag unchanged. Terminating.')
		process.exit(0)
	}
	console.log('File updated! Rebuilding data.', newEtag, oldEtag)
	fs.writeFile(etagPath, newEtag)
} else {
	console.log('No cache etag for resource, reloading data.')
}

const responseJSON = await response.json() as Record<string, any>

const currentSetNumber = Object.keys(responseJSON.sets).reduce((previous, current) => Math.max(previous, parseInt(current, 10)), 0)
fs.writeFile(setNumberPath, currentSetNumber.toString())
const { champions, traits } = (responseJSON as any).sets[currentSetNumber]
console.log('Loading set', currentSetNumber, 'from', PATCH_LINE.toUpperCase(), '...', 'Units:', champions.length, 'Traits:', traits.length)

// Items

const { ItemKey } = await importItems(currentSetNumber)
const { SPATULA_ITEM_IDS, RETIRED_AUGMENT_NAME_KEYS, UNUSED_AUGMENT_NAME_KEYS, TRAIT_DATA_SUBSTITUTIONS } = await importSetData(currentSetNumber)

const currentItemsByType = {
	component: [] as ItemData[],
	completed: [] as ItemData[],
	spatula: [] as ItemData[],
	duos: [] as ItemData[],
	consumable: [] as ItemData[],
	shadow: [] as ItemData[],
	radiant: [] as ItemData[],
	ornn: [] as ItemData[],
	hexbuff: [] as ItemData[],
	mercenaryDice: [] as ItemData[],
	unreleased: [] as ItemData[],
}
type ItemTypeKey = keyof typeof currentItemsByType

const itemsData = responseJSON.items as ItemData[]
const foundItemIDs: number[] = []
itemsData.reverse().forEach(item => {
	if (foundItemIDs.includes(item.id)) {
		return
	}
	const name = (item.name as string).toLowerCase()
	// if (name.startsWith('tft_')) {
	// 	return
	// }
	const icon = (item.icon as string).toLowerCase()
	if (icon.includes('/augments/')) {
		return
	}
	const from = item.from as number[]
	let typeKey: ItemTypeKey | undefined
	if (item.id < 0 || UNRELEASED_ITEM_NAME_KEYS.includes(name)) {
		typeKey = 'unreleased'
	} else if (from.length) {
		if (item.id !== 88 && from.includes(8)) {
			if (SPATULA_ITEM_IDS.includes(item.id)) {
				typeKey = 'spatula'
			} else {
				// console.log('Unknown spatula item', item)
				return
			}
		} else if (from.every(itemID => COMPONENT_ITEM_IDS.includes(itemID))) {
			typeKey = 'completed'
		}
	} else {
		if (icon.includes('/hexcore/')) {
			return false
		}
		if (SPATULA_ITEM_IDS.includes(item.id)) {
			typeKey = 'spatula'
		} else if (item.desc === 'tft_item_description_Mercenary_Dice') {
			typeKey = 'mercenaryDice'
		} else if (COMPONENT_ITEM_IDS.includes(item.id)) {
			typeKey = 'component'
		} else if (icon.includes('/pairs/')) {
			typeKey = 'duos'
		} else if (icon.includes('/shadow/')) {
			typeKey = 'shadow'
		} else if (icon.includes('/radiant/')) {
			typeKey = 'radiant'
		} else if (icon.includes('ornnitem')) {
			typeKey = 'ornn'
		} else if (icon.includes('consumable')) {
			typeKey = 'consumable'
		} else if (icon.includes('_hex_')) {
			typeKey = 'hexbuff'
		} else {
			// console.log('Unknown spatula item', item)
			return false
		}
	}
	if (typeKey) {
		foundItemIDs.push(item.id)
		currentItemsByType[typeKey].push(item)
	}
})

// Normalize Traits/Items

const unreplacedIDs = new Set(Object.keys(SUBSTITUTE_EFFECT_KEYS))

const allItems = []
for (const key in currentItemsByType) {
	allItems.push(...currentItemsByType[key as ItemTypeKey])
}

allItems.forEach((item: ItemData) => {
	if (item.id === ItemKey.HandOfJustice) {
		const invalidKey = 'BonusAD'
		if (item.effects[invalidKey] != null) {
			delete item.effects[invalidKey]
		} else {
			console.log('Normalize', ItemKey.HandOfJustice, invalidKey, 'missing', item.effects)
		}
	}
	for (const normalize in NORMALIZE_EFFECT_KEYS) {
		item.desc = item.desc.replace(normalize, NORMALIZE_EFFECT_KEYS[normalize])
	}
	Object.keys(item.effects).forEach(key => {
		const originalValue = item.effects[key]
		if (key.startsWith('{')) {
			const keyHash = key.slice(1, -1)
			const replacement = SUBSTITUTE_EFFECT_KEYS[keyHash]
			if (replacement) {
				unreplacedIDs.delete(keyHash)
				delete item.effects[key]
				key = replacement
				item.effects[key] = originalValue
			}
		}
		for (const normalize in NORMALIZE_EFFECT_KEYS) {
			delete item.effects[key]
			key = key.replace(normalize, NORMALIZE_EFFECT_KEYS[normalize])
			item.effects[key] = originalValue
		}
	})
})

const traitKeys = (traits as TraitData[])
	.map(trait => {
		const nameKey = trait.apiName.split('_')[1]
		return `${nameKey} = '${nameKey}'`
	})
	.sort((a, b) => a.localeCompare(b))
	.join(', ')

traits.forEach((trait: TraitData) => {
	for (const normalize in NORMALIZE_EFFECT_KEYS) {
		trait.desc = trait.desc.replace(normalize, NORMALIZE_EFFECT_KEYS[normalize])
	}
	trait.effects.forEach(effect => {
		Object.keys(effect.variables).forEach(key => {
			const originalValue = effect.variables[key]
			if (key.startsWith('{')) {
				const keyHash = key.slice(1, -1)
				const replacement = SUBSTITUTE_EFFECT_KEYS[keyHash]
				if (replacement) {
					unreplacedIDs.delete(keyHash)
					delete effect.variables[key]
					key = replacement
					effect.variables[key] = originalValue
				}
			}
			for (const normalize in NORMALIZE_EFFECT_KEYS) {
				delete effect.variables[key]
				key = key.replace(normalize, NORMALIZE_EFFECT_KEYS[normalize])
				effect.variables[key] = originalValue
			}
		})
	})
})
const traitKeysString = `export enum TraitKey {\n\t${traitKeys}\n}`

const itemKeys = currentItemsByType['component'].concat(currentItemsByType['completed'], currentItemsByType['spatula'])
	.sort((a, b) => a.id - b.id)
	.map(({name, id}) => {
		const key = name.replace(/['.\+-]/g, '').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')
		return `${key} = ${id}`
	})
	.join(', ')
const itemKeysString = `export enum ItemKey {\n\t${itemKeys}\n}`

if (unreplacedIDs.size) {
	console.log('Unused substitutions', unreplacedIDs)
}

const outputItemSections = []
for (const key in currentItemsByType) {
	const itemKey = key as ItemTypeKey
	currentItemsByType[itemKey].sort((a, b) => a.id - b.id)
	outputItemSections.push(`export const ${itemKey}Items: ItemData[] = ` + formatJS(currentItemsByType[itemKey]))
}
outputItemSections.push(`export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)`)

// Champions

const unplayableNames = ['TFT5_EmblemArmoryKey', 'TFT6_MercenaryChest', 'TFT6_TheGoldenEgg']
const playableChampions = (champions as ChampionData[])
	.filter(champion => {
		if (unplayableNames.includes(champion.apiName)) {
			return false
		}
		if (!champion.icon) {
			if (champion.apiName !== 'TFT6_Annie') {
				console.log('No icon for champion, excluding.', champion)
			}
			return false
		}
		return true
	})
	.sort((a, b) => a.name.localeCompare(b.name))

type ChampionJSON = Record<string, Record<string, any>>
type ChampionJSONType = 'SpellObject' | 'TFTCharacterRecord'
interface ChampionJSONAttack {
	mAttackName?: string
	mAttackProbability?: number
	mAttackCastTime?: number
	mAttackDelayCastOffsetPercent?: number
	mAttackTotalTime?: number
}
interface ChampionJSONStats {
	PortraitIcon: string
	tier?: number
	mLinkedTraits?: {TraitData: string}[]
	baseStaticHPRegen: number
	baseCritChance: number
	critDamageMultiplier: number
	baseArmor: number
	attackRange: number
	attackSpeed: number
	baseDamage: number
	baseHP: number
	baseSpellBlock: number
	mInitialMana?: number
	primaryAbilityResource: {
		arBase?: number
	}
	baseMoveSpeed: number
	spellNames: string[]
	extraSpells?: string[]
	isSpawn?: true
	teamSize: number
	basicAttack?: ChampionJSONAttack
	extraAttacks?: ChampionJSONAttack[]
	critAttacks?: ChampionJSONAttack[]
}

interface ChampionJSONSpellAttack {
	missileSpeed?: number
	mMissileSpec?: {
		mMissileWidth: number
		movementComponent: {
			mSpeed: number
		}
	}
}

interface ChampionJSONSpell {
	mCastTime?: number
	mDataValues?: {
		mName: string
		mValues?: number[]
	}[]
	mSpellCalculations?: {
		mName: string
		mValues?: number[]
	}[]
	mCantCancelWhileWindingUp?: true
	missileSpeed?: number
	mMissileSpec?: {
		mMissileWidth: number
		movementComponent: {
			mTravelTime?: number
			mSpeed?: number
			mInitialSpeed?: number
			mMinSpeed?: number
			mMaxSpeed?: number
			mAcceleration?: number
			mStartDelay?: number
			mTracksTarget?: false
		}
	}
	cantCastWhileRooted?: true
}
function getByType(type: ChampionJSONType, json: ChampionJSON) {
	for (const key in json) {
		const entry = json[key]
		if (entry.__type === type) {
			return entry
		}
	}
}
function getCharacterRecord(json: ChampionJSON) {
	return getByType('TFTCharacterRecord', json) as ChampionJSONStats
}
function getByScriptName(name: string, json: ChampionJSON) {
	for (const key in json) {
		const entry = json[key]
		if (entry.mScriptName === name) {
			return entry
		}
	}
}
function getSpell(name: string, json: ChampionJSON): ChampionJSONSpell | undefined {
	const spellContainer = getByScriptName(name, json)
	if (!spellContainer) {
		// console.log('No spell', name)
		return undefined
	}
	for (const key in spellContainer) {
		if (key !== 'mScriptName' && key !== 'mSpell' && key !== 'mBuff' && key !== 'mScript' && key !== '__type') {
			console.log('Unknown spell key', key, name)
		}
	}
	return spellContainer.mSpell
}

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

function reduceAttacks(attacks: ChampionJSONAttack[], json: ChampionJSON) {
	const attackSpeeds = attacks
		.map(attack => parseAttack(attack, json))
		.filter((speed): speed is number => speed != null)
	return attackSpeeds[0]
	// return attackSpeeds.length === 0 ? undefined : attackSpeeds.reduce((acc, value) => acc + value, 0) / attackSpeeds.length
}
function parseAttack(attack: ChampionJSONAttack, json: ChampionJSON) {
	const spell = getSpell(attack.mAttackName!, json)
	if (!spell) { return undefined }
	const attackSpell = spell as ChampionJSONSpellAttack
	const speed = attackSpell.mMissileSpec?.movementComponent.mSpeed ?? attackSpell.missileSpeed
	return speed
	// return {
	// 	probability: attack.mAttackProbability,
	// 	width: attackSpell.mMissileSpec?.mMissileWidth,
	// 	speed,
	// }
}

const championsPath = getPathTo(currentSetNumber, 'champion')
await fs.mkdir(championsPath, { recursive: true })
const outputChampions = await Promise.all(playableChampions.map(async champion => {
	const apiName = champion.apiName
	const pathName = champion.apiName.toLowerCase()
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
							const childArray = mFormulaPart.mSubparts != null ? mFormulaPart.mSubparts : [ mFormulaPart.mSubpart ?? mFormulaPart ]
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

	const characterRecord = getCharacterRecord(json)
	if (characterRecord.baseStaticHPRegen !== 0) {
		console.log('ERR HP Regen', apiName, characterRecord.baseStaticHPRegen)
	}
	let totalMana = characterRecord.primaryAbilityResource.arBase
	let initialMana = characterRecord.mInitialMana ?? 0
	if (totalMana == null) {
		totalMana = initialMana
		initialMana = 0
	}
	const stats = {
		armor: characterRecord.baseArmor,
		attackSpeed: characterRecord.attackSpeed,
		critChance: characterRecord.baseCritChance,
		critMultiplier: characterRecord.critDamageMultiplier,
		damage: characterRecord.baseDamage,
		hp: characterRecord.baseHP,
		initialMana,
		magicResist: characterRecord.baseSpellBlock,
		mana: totalMana,
		moveSpeed: characterRecord.baseMoveSpeed,
		range: Math.floor(characterRecord.attackRange / 180),
	}
	const spellNames = characterRecord.spellNames
	if (characterRecord.extraSpells) {
		spellNames.push(...characterRecord.extraSpells)
	}
	// if (apiName === 'TFT6_Gnar') {
	// }
	let isFirstSpell = true
	const spells = spellNames
		.filter(name => name && name !== 'BaseSpell')
		.map(spellName => {
			const spell = getSpell(spellName, json)
			return spell ? [spellName, spell] as [string, ChampionJSONSpell] : undefined
		})
		.filter((spellData): spellData is [string, ChampionJSONSpell] => {
			if (!spellData) {
				return false
			}
			if (isFirstSpell) {
				isFirstSpell = false
				if (spellData[1]?.mDataValues == null) {
					const spellName = spellData[0]
					if (spellName !== 'TFT6_JayceR') {
						console.log('!mDataValues', spellName)
					}
					return false
				}
			}
			return true
		})
		.map(([spellName, spellData]) => {
			const missileSpec = spellData.mMissileSpec
			const missileMovement = missileSpec?.movementComponent
			// const variables: {name: string, values: number[]}[] = []
			const variables: SpellVariables = {}
			if (spellData.mDataValues) {
				for (const dataValues of spellData.mDataValues) {
					if (dataValues.mValues) {
						// variables.push({ name: dataValues.mName, values: dataValues.mValues })
						variables[dataValues.mName] = dataValues.mValues.slice(0, MAX_STAR_LEVEL + 1)
					}
				}
			}
			const missileSpeed = spellData.missileSpeed
			const spell: ChampionSpellData = {
				name: spellName,
				castTime: spellData.mCastTime,
				missile: !missileSpec && missileSpeed == null
					? undefined
					: {
						width: missileSpec?.mMissileWidth,
						travelTime: missileMovement?.mTravelTime,
						speedInitial: missileMovement?.mInitialSpeed ?? missileMovement?.mSpeed ?? missileSpeed!,
						speedMin: missileMovement?.mMinSpeed,
						speedMax: missileMovement?.mMaxSpeed,
						acceleration: missileMovement?.mAcceleration,
						startDelay: missileMovement?.mStartDelay,
						tracksTarget: missileMovement?.mTracksTarget !== false,
					},
				variables,
				cantCastWhileRooted: spellData.cantCastWhileRooted,
				uninterruptable: spellData.mCantCancelWhileWindingUp,
			}
			if (spellData.mCastTime == null) { //TODO verify these aren't supposed to instacast?
				console.log('!mCastTime', spellName)
			}
			// if (!spell.missile) { //TODO multipart spells (TFT6_ViktorE, TFT6_JhinR, etc)
			// if (spell.missile && spell.missile.speedMin == null && spell.missile.travelTime == null) {
			// 	console.log('!missile', spellName)
			// }
			return spell
		})
	if (!spells.length) {
		console.log('No spells for', apiName)
	} else if (spells.length > 1 && apiName !== 'TFT6_Jayce') {
		console.log('Multiple spells for', apiName, spells.map(spell => spell.name))
	}
	const basicAttacks = []
	if (characterRecord.basicAttack) {
		if (characterRecord.basicAttack.mAttackName == null) {
			characterRecord.basicAttack.mAttackName = `${apiName}BasicAttack`
		}
		basicAttacks.push(characterRecord.basicAttack)
	}
	if (characterRecord.extraAttacks) {
		basicAttacks.push(...characterRecord.extraAttacks)
	}
	const basicAttackMissileSpeed = reduceAttacks(basicAttacks.filter(attack => attack.mAttackName), json)
	const critAttacks = characterRecord.critAttacks
	const critAttackMissileSpeed = critAttacks ? reduceAttacks(critAttacks.filter(attack => attack.mAttackName), json) : undefined

	const isSpawn = characterRecord.isSpawn ?? false
	const traits = characterRecord.mLinkedTraits?.map(traitData => {
		if (traitData.TraitData.startsWith('{')) {
			console.log('ERR Unknown trait', apiName, traitData)
		}
		return traitData.TraitData.split('_')[1] //TODO
	}) ?? []
	return {
		spells,
		apiName,
		cost: characterRecord.tier,
		isSpawn,
		starLevel: apiName === 'TFT6_HexTechDragon' ? 3 : (apiName === 'TFT6_Tibbers' ? 2 : (apiName === 'TFT6_MalzaharVoidling' ? 1 : undefined)),
		teamSize: characterRecord.teamSize,
		icon: champion.icon,
		name: champion.name,
		basicAttackMissileSpeed,
		critAttackMissileSpeed,
		stats,
		traits,
	}
}))

// Augments

const activeAugments: AugmentData[] = []
const unreleasedAugments: AugmentData[] = []

const currentSetName = `tft_set${currentSetNumber}`

function getTierFromWord(word: string): AugmentTier | undefined {
	if (word === 'i') {
		return 1
	}
	if (word === 'ii') {
		return 2
	}
	if (word === 'iii') {
		return 3
	}
	return undefined
}

const MANUAL_TIER_DESIGNATIONS: Record<string, AugmentTier> = {
	'High Five': 3,
}

for (const item of itemsData) {
	const icon = item.icon.toLowerCase()
	const pathComponents = icon.split('/')
	const pathNameComponent = pathComponents[pathComponents.length - 1]
	const pathCategoryComponent = pathComponents[pathComponents.length - 3]
	const isAugment = pathCategoryComponent === 'augments'
	const [ pathName, setKey ] = pathNameComponent.split('.')
	if (!setKey.startsWith(currentSetName)) {
		if (isAugment) {
			console.log('Augment with invalid set marker', pathNameComponent)
		}
		continue
	}
	if (isAugment) {
		if (item.from.length) {
			console.log('Augment should not have components', item)
		}
		const nameKey = item.name.toLowerCase()
		if (RETIRED_AUGMENT_NAME_KEYS.includes(nameKey)) {
			continue
		}
		let tier: AugmentTier | undefined = getTierFromWord(nameKey.split(' ').pop()!)
		const lastNumber = parseInt(pathName.slice(-1), 10)
		if (!isNaN(lastNumber)) {
			if (lastNumber && lastNumber !== tier) {
				if (tier && tier !== lastNumber - 1) {
					console.log('Multiple tier designations', tier, lastNumber, item)
				}
				tier = lastNumber as AugmentTier
			}
		} else {
			const wordTier = getTierFromWord(pathName.split('-').pop()!)
			if (wordTier && wordTier !== tier) {
				if (tier && tier !== wordTier - 1) {
					console.log('Multiple tier designations', tier, wordTier, item)
				}
				tier = wordTier
			}
		}
		if (nameKey.endsWith(' heart')) {
			if (tier && tier !== 1) {
				console.log('Multiple tier designations for heart', tier, 1, item)
			}
			tier = 1
		} else if (nameKey.endsWith(' crest')) {
			if (tier && tier !== 2) {
				console.log('Multiple tier designations for crest', tier, 2, item)
			}
			tier = 2
		} else if (nameKey.endsWith(' crown')) {
			if (tier && tier !== 3) {
				console.log('Multiple tier designations for crown', tier, 3, item)
			}
			tier = 3
		}
		const manualTier = MANUAL_TIER_DESIGNATIONS[item.name]
		if (manualTier) {
			if (tier) {
				console.log('Multiple tier designations manually overwritten', tier, manualTier, item)
			}
			tier = manualTier
		}
		if (!tier) {
			throw 'No tier for item: ' + JSON.stringify(item)
		}
		const effects = item.effects
		for (const key in effects) {
			const substitution = AUGMENT_EFFECTS_SUBSTITUTIONS[key]
			if (substitution) {
				const value = effects[key]
				delete effects[key]
				effects[substitution] = value
			} else if (effects[key] as unknown === "null") {
				delete effects[key]
			}
		}
		const data: AugmentData = {
			tier,
			name: item.name,
			desc: item.desc,
			effects: effects as EffectVariables,
			icon: item.icon,
		}
		if (UNUSED_AUGMENT_NAME_KEYS.includes(nameKey) || icon.includes('/missing-t')) {
			unreleasedAugments.push(data)
		} else {
			activeAugments.push(data)
		}
	}
}

const outputAugmentSections = [
	`import type { AugmentData } from '../index'`,
	`export const activeAugments: AugmentData[] = ` + formatJS(activeAugments),
	`export const inactiveAugments: AugmentData[] = ` + formatJS(unreleasedAugments),
]

// Output

await Promise.all([
	fs.writeFile(getPathTo(currentSetNumber, 'augments.ts'), outputAugmentSections.join('\n\n')),
	fs.writeFile(getPathTo(currentSetNumber, 'champions.ts'), `import type { ChampionData } from '../index'\n\nexport const champions: ChampionData[] = ` + formatJS(outputChampions)),
	fs.writeFile(getPathTo(currentSetNumber, 'traits.ts'), `import type { TraitData } from '../index'\n\n${traitKeysString}\n\nexport const traits: TraitData[] = ` + formatJS(traits)),
	fs.writeFile(getPathTo(currentSetNumber, 'items.ts'), `import type { ItemData } from '../index'\n\n${itemKeysString}\n\n` + outputItemSections.join('\n\n')),
])
