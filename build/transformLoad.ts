const MAX_STAR_LEVEL = 3

import fs from 'fs/promises'

import { BonusKey, COMPONENT_ITEM_API_NAMES, COMPONENT_ITEM_IDS } from '../dist/index.js'
import type { AugmentData, AugmentTier, ChampionData, ChampionSpellData, EffectVariables, ItemData, ItemTypeKey, SpellCalculations, SpellCalculationPart, SpellCalculationSubpart, SpellVariables, TraitData, SetNumber } from '../dist/index.js'
import { AugmentGroupKey, ItemKey, TraitKey } from '../dist/aggregated.js'
import { importSetData } from '../dist/imports.js'

import { getCurrentSetNumber, getPathTo, loadHardcodedTXT } from './helpers/files.js'
import { formatJS } from './helpers/formatting.js'
import { BASE_UNIT_API_NAMES, NORMALIZE_EFFECT_KEYS, SUBSTITUTE_EFFECT_KEYS, normalizeEffects, mStatSubstitutions, spellCalculationOperatorSubstitutions } from './helpers/normalize.js'
import type { ChampionJSON, ChampionJSONType, ChampionJSONAttack, ChampionJSONSpell, ChampionJSONSpellAttack, ChampionJSONStats, ResponseJSON } from './helpers/types.js'
import { getAPIName, getAugmentNameKey, getSetDataFrom, removeSymbols } from './helpers/utils.js'

const BASE_AP_RATIO = 0.009999999776482582

const unreplacedIDs = new Set(Object.keys(SUBSTITUTE_EFFECT_KEYS))

const GLOBAL_UNUSED_AUGMENT_NAME_KEYS = ['no scope', 'eagle eye']

const MANUAL_TIER_DESIGNATIONS: Record<string, AugmentTier> = {
}

function sortByName(a: {name: string}, b: {name: string}) {
	return a.name.localeCompare(b.name)
}

function getEnumKeyFrom(apiName: string) {
	const splitIndex = apiName.indexOf('_')
	let key = splitIndex !== -1 ? apiName.slice(splitIndex + 1) : apiName.replaceAll(' ', '')
	if (key.startsWith('8')) {
		key = key.replace('8', 'Eight')
	}
	return key.replaceAll(/\/|-|\.|_/g, '')
}

// Load

const currentSetNumber = await getCurrentSetNumber()
const parentSetNumber = Math.floor(currentSetNumber) as SetNumber

let responseJSON: ResponseJSON
try {
	const raw = await fs.readFile(getPathTo(currentSetNumber, '.raw.json'), 'utf8')
	responseJSON = JSON.parse(raw)
} catch (error) {
	console.log(error)
	throw 'Missing Set data. Erase the current Set directory and re-run `prepare`.'
}
const { champions, traits } = getSetDataFrom(currentSetNumber, parentSetNumber, responseJSON)
const itemsData = (responseJSON.items as ItemData[]).filter(item => item.name != null && (item.apiName == null || (!item.apiName.startsWith('TFTTutorial_') && !item.apiName.endsWith('_DU') && !item.apiName.endsWith('HR'))))

const allItemKeys = itemsData.map(i => i.apiName)
const allTraitKeys = traits.map(t => t.apiName)

function validateTraits(item: ItemData) {
	const traits = (item.associatedTraits?.length ?? 0) ? item.associatedTraits : item.incompatibleTraits
	if (traits && traits.length) {
		for (const trait of traits) {
			if (!allTraitKeys.includes(trait)) {
				return false
			}
		}
	}
	return true
}

const baseSet = responseJSON.sets['1']
for (const apiName of BASE_UNIT_API_NAMES) {
	if (!champions.some(champion => champion.apiName === apiName)) {
		const baseUnit = baseSet.champions.find(champion => champion.apiName === apiName)
		if (baseUnit) {
			champions.push(baseUnit)
		} else {
			console.log('ERR', 'No base unit', apiName)
		}
	}
}

// Items

const { LOCKED_STAR_LEVEL, SPATULA_ITEM_IDS, RETIRED_ITEM_NAMES, RETIRED_AUGMENT_NAME_KEYS, UNUSED_AUGMENT_NAME_KEYS, TRAIT_DATA_SUBSTITUTIONS, UNPLAYABLE_CHAMPION_APINAMES } = await importSetData(currentSetNumber)

const currentItemsByType: Record<ItemTypeKey, ItemData[]> = {component: [], completed: [], spatula: [], shadow: [], radiant: [], ornn: [], support: [], shimmerscale: [], consumable: [], hexbuff: [], mod: [], unreleased: []}

const foundItemIDs: number[] = []
itemsData.reverse().forEach(item => {
	if (!item.name || item.desc == null || RETIRED_ITEM_NAMES?.includes(item.name) || (item.id != null && foundItemIDs.includes(item.id)) || item.desc.toLowerCase().startsWith('tft_item_')) {
		return
	}
	if (!validateTraits(item)) {
		return
	}
	if (item.desc) {
		for (const normalize in NORMALIZE_EFFECT_KEYS) {
			item.desc = item.desc.replaceAll(normalize, NORMALIZE_EFFECT_KEYS[normalize])
		}
	}
	normalizeEffects(item.effects, unreplacedIDs)
	const name = item.name.toLowerCase()
	const iconNormalized = item.icon.toLowerCase()
	if (iconNormalized.includes('/augments/') || iconNormalized.includes('/set6_mercenary/') || iconNormalized.includes('/mercenary/') || iconNormalized.includes('/pairs/') || iconNormalized.includes('tft_item_unknown') || iconNormalized.includes('tft_item_emptyslot')) {
		return
	}
	if (item.apiName != null) {
		if (item.apiName.includes('_Augment_') || item.apiName.includes('_HyperRollAugment_') || item.apiName.startsWith('TFT_Assist_') || item.apiName.startsWith('TFTEvent_') || item.apiName.startsWith('TFT_Item_Free') || item.apiName.startsWith('TFT_Item_Grant')) {
			return
		}
		if (item.apiName.endsWith('Slot')) {
			return
		}
	}
	let typeKey: ItemTypeKey | undefined
	if (iconNormalized.includes('tft_item_hex_')) {
		typeKey = 'hexbuff'
	} else if (iconNormalized.includes('/radiant/')) {
		typeKey = 'radiant'
	} else if (iconNormalized.includes('ornnitem') || iconNormalized.includes('ornn_item')) {
		typeKey = 'ornn'
	} else if (iconNormalized.includes('_supportitems/')) {
		typeKey = 'support'
	} else if (iconNormalized.includes('shimmerscale/')) {
		typeKey = 'shimmerscale'
	} else if (name.includes('item_name')) {
		typeKey = 'unreleased'
	} else if (item.apiName != null) { // Set >= 5
		if (item.apiName === 'TFT_Item_ForceOfNature' || item.apiName === 'TFT_Item_TitanicHydra' || item.apiName === 'TFT_Item_SeraphsEmbrace') {
			return
		}
		if (currentSetNumber > 1 && (item.apiName === 'TFT_Item_KnightsVow' || item.apiName === 'TFT_Item_YoumuusGhostblade')) { // Old emblems
			return
		}

		if (item.name.startsWith(`Choncc's `)) {
			typeKey = 'unreleased'

		// Mods
		} else if (item.apiName === 'TFT7_Item_TrainerSnax') {
			if (currentSetNumber !== 7) {
				return
			}
			typeKey = 'mod'
		} else if (item.apiName === 'TFT7_Item_DarkflightEssence') {
			if (currentSetNumber !== 7.5) {
				return
			}
			typeKey = 'mod'
		} else if (item.apiName.endsWith('_GenAE')) {
			if (parentSetNumber !== 8) {
				return
			}
			typeKey = 'mod'
		} else if (item.apiName === 'TFT9_Item_CrownOfDemacia' || item.apiName.startsWith('TFT9_Consumable_Chempunk_') || item.apiName.startsWith('TFT9_HeimerUpgrade_')) {
			if (parentSetNumber !== 9) {
				return
			}
			typeKey = 'mod'

		} else if (COMPONENT_ITEM_API_NAMES.includes(item.apiName) == true) {
			typeKey = 'component'
		} else if (item.apiName.endsWith('Emblem') || item.apiName.endsWith('EmblemItem') || item.apiName.endsWith('SpatulaItem')) {
			if (!item.apiName.startsWith(`TFT${parentSetNumber}_`)) {
				return
			}
			typeKey = 'spatula'
		} else if (iconNormalized.includes('/shadow/') || iconNormalized.includes('_shadow.')) {
			typeKey = 'shadow'
		} else if (item.apiName.includes('_Consumable_')) {
			typeKey = 'consumable'
		} else {
			if (iconNormalized.includes('_miscitems/') || item.apiName.startsWith('TFT8_Item_Arsenal') || item.apiName.startsWith('TFT9_Item_Piltover')) {
				return
			}
			typeKey = 'completed'
		}
	} else if (item.id != null) { // Set < 5
		if (!item.from) {
			// console.error('Invalid item', item)
			return
		}
		if (iconNormalized.includes('consumable')) {
			typeKey = 'consumable'
		} else if (item.from.length) {
			if (item.id !== 88 && item.from.includes(8)) {
				if (SPATULA_ITEM_IDS != null && item.id != null && !SPATULA_ITEM_IDS.includes(item.id)) {
					return
				}
				typeKey = 'spatula'
			} else if (item.from.every(itemID => COMPONENT_ITEM_IDS.includes(itemID))) {
				typeKey = 'completed'
			}
		} else {
			if (iconNormalized.includes('/hexcore/')) {
				return false
			}
			if (SPATULA_ITEM_IDS?.includes(item.id)) {
				typeKey = 'spatula'
			} else if (COMPONENT_ITEM_IDS.includes(item.id)) {
				typeKey = 'component'
			} else if (!typeKey) {
				if (SPATULA_ITEM_IDS == null) {
					console.log('Unknown emblem item', item)
				}
				return false
			}
		}
	}
	if (typeKey) {
		if (item.id != null) {
			foundItemIDs.push(item.id)
		}
		currentItemsByType[typeKey].push(item)
	}
})

// Normalize Traits/Items

const allItems = []
for (const key in currentItemsByType) {
	allItems.push(...currentItemsByType[key as ItemTypeKey])
}

allItems.forEach((item: ItemData) => {
	item.unique = item.unique || item.desc!.toLowerCase().includes('[unique - only')
	if (item.name === ItemKey.HandOfJustice) {
		const invalidKey = 'BonusAD'
		if (item.effects[invalidKey] != null) {
			delete item.effects[invalidKey]
		} else {
			console.log('Normalize', ItemKey.HandOfJustice, invalidKey, 'missing', item.effects)
		}
	}
})

traits.sort(sortByName)

traits.forEach((trait: TraitData) => {
	for (const normalize in NORMALIZE_EFFECT_KEYS) {
		trait.desc = trait.desc.replaceAll(normalize, NORMALIZE_EFFECT_KEYS[normalize])
	}
	trait.effects.forEach((effect, index) => {
		if (effect.style == null) {
			effect.style = index + 1
		}
		normalizeEffects(effect.variables, unreplacedIDs)
	})
})

function toKey(name: string) {
	return removeSymbols(name.replaceAll(/\+/g, 'plus')).split(' ').map(word => word[0]?.toUpperCase() + word.slice(1)).join('')
}

const outputItemSections = []
for (const key in currentItemsByType) {
	const itemKey = key as ItemTypeKey
	currentItemsByType[itemKey].sort((a, b) => a.name.localeCompare(b.name))
	const itemsData = currentItemsByType[itemKey]
	outputItemSections.push(`export const ${itemKey}Items: ItemData[] = ` + (itemsData.length ? formatJS(itemsData) : '[]'))
}
const currentItemNames = ['completedItems', 'spatulaItems']
if (currentSetNumber === 4.5 || currentSetNumber >= 6) {
	currentItemNames.splice(2, 0, 'ornnItems')
}
if (currentSetNumber === 5) {
	currentItemNames.splice(1, 0, 'shadowItems')
} else if (currentSetNumber >= 5.5) {
	currentItemNames.splice(1, 0, 'radiantItems')
}
if (currentSetNumber >= 7 && currentSetNumber < 9.5) {
	currentItemNames.splice(2, 0, 'shimmerscaleItems')
}
if (currentSetNumber >= 9.5) {
	currentItemNames.splice(2, 0, 'supportItems')
}
outputItemSections.push(`export const currentItems: ItemData[] = componentItems.concat(${currentItemNames.join(', ')})`)

// Augments

const activeAugments: AugmentData[] = []
const inactiveAugments: AugmentData[] = []
const choiceAugments: AugmentData[] = []

const parentSetName = `tft_set${parentSetNumber}`

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

for (const item of itemsData.sort((a, b) => a.name.localeCompare(b.name))) {
	const iconNormalized = item.icon.toLowerCase()
	const pathComponents = iconNormalized.split('/')
	const pathNameComponent = pathComponents[pathComponents.length - 1]
	const pathCategoryComponent = pathComponents[pathComponents.length - 3]
	const isAugment = pathCategoryComponent === 'augments' || (item.apiName != null && item.apiName.includes('_Augment_'))
	const [ pathName, setKey ] = pathNameComponent.split('.')
	if (isAugment && item.apiName != null) {
		if (item.apiName.includes('_Legend_') && allItemKeys.includes(item.apiName.replace('Legend_', ''))) {
			continue
		}
		if (!validateTraits(item)) {
			continue
		}
		if (item.from != null && item.from.length > 0) {
			console.log('Augment should not have components', item)
		}
		const nameNormalized = item.name.toLowerCase()
		if (RETIRED_AUGMENT_NAME_KEYS != null && RETIRED_AUGMENT_NAME_KEYS.includes(nameNormalized)) {
			continue
		}
		let tier: AugmentTier | undefined = getTierFromWord(nameNormalized.split(' ').pop()!)
		const lastNumber = parseInt(pathName.slice(-1), 10)
		const addedAugments: string[] = []
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
		if (nameNormalized.endsWith(' heart')) {
			if (tier && tier !== 1) {
				if (currentSetNumber < 9 && nameNormalized !== 'innovator heart' && nameNormalized !== 'hextech heart') {
					console.log('ERR Multiple tier designations for heart', tier, 1, item)
				}
			} else {
				tier = 1
			}
		} else if (nameNormalized.endsWith(' crest')) {
			if (tier && tier !== 2) {
				console.log('ERR Multiple tier designations for crest', tier, 2, item)
			} else {
				tier = 2
			}
		} else if (nameNormalized.endsWith(' crown')) {
			if (tier && tier !== 3) {
				console.log('ERR Multiple tier designations for crown', tier, 3, item)
			} else {
				tier = 3
			}
		}
		const manualTier = MANUAL_TIER_DESIGNATIONS[item.name]
		if (manualTier) {
			if (tier) {
				console.log('Multiple tier designations manually overwritten', tier, manualTier, item)
			}
			tier = manualTier
		}
		if (!tier) {
			console.error('No tier for augment item entry: ' + JSON.stringify(item))
			tier = 3
		}
		const effects = item.effects
		for (const key in effects) {
			const keyHash = key.slice(1, -1)
			const substitution = SUBSTITUTE_EFFECT_KEYS[keyHash]
			if (substitution) {
				const value = effects[key]
				delete effects[key]
				effects[substitution] = value
			} else if (effects[key] as unknown === "null") {
				delete effects[key]
			}
		}
		const key = toKey(getAugmentNameKey(item))
		const data: AugmentData = {
			tier: tier!,
			name: item.name,
			groupID: key[0].toLowerCase() + key.slice(1),
			desc: item.desc!,
			effects: effects as EffectVariables,
			icon: item.icon,
		}

		const keyID = nameNormalized + data.desc //JSON.stringify(data)
		if (addedAugments.includes(keyID)) {
			continue
		}
		addedAugments.push(keyID)

		const isUnused = GLOBAL_UNUSED_AUGMENT_NAME_KEYS.includes(nameNormalized) || UNUSED_AUGMENT_NAME_KEYS.includes(nameNormalized) || iconNormalized.includes('/missing-t')
		if (data.desc == null) {
			data.desc = ''
		}
		const hasInternalName = nameNormalized.startsWith('tft')
		if (!isUnused && (iconNormalized.includes('/choiceui/admin_armorery_') || hasInternalName)) {
			choiceAugments.push(data)
		} else if (hasInternalName) {
			continue
		} else if (isUnused || !tier) {
			inactiveAugments.push(data)
		} else {
			activeAugments.push(data)
		}
	}
}

if (activeAugments.length) {
	const emptyImplementationAugments = (await loadHardcodedTXT(currentSetNumber, 'augments-empty'))
		?.filter(id => {
			const exists = Object.values(AugmentGroupKey).includes(id as AugmentGroupKey)
			if (!exists) { console.log('ERR', 'augments-empty', 'invalid', id) }
			return exists
		})
		.map(id => `AugmentGroupKey.${id[0].toUpperCase() + id.slice(1)}`).join(', ')
	const outputAugmentSections = [
		`import { AugmentGroupKey } from '../index.js'\nimport type { AugmentData } from '../index'`,
		`export const emptyImplementationAugments: AugmentGroupKey[] = [${emptyImplementationAugments ?? ''}]`,
		`export const activeAugments: AugmentData[] = ${formatJS(activeAugments)}`,
		`export const inactiveAugments: AugmentData[] = ${formatJS(inactiveAugments)}`,
		`export const choiceAugments: AugmentData[] = ${formatJS(choiceAugments)}`,
	]
	fs.writeFile(getPathTo(currentSetNumber, 'augments.ts'), outputAugmentSections.join('\n\n'))
}

// Champions

function getByType(type: ChampionJSONType, alternateKey: string, json: ChampionJSON) {
	for (const key in json) {
		const entry = json[key]
		if (entry.__type != null ? entry.__type === type : alternateKey in entry) {
			return entry
		}
	}
}
function getCharacterRecord(json: ChampionJSON) {
	return getByType('TFTCharacterRecord', 'mCharacterName', json) as ChampionJSONStats
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
function reduceAttacks(attacks: ChampionJSONAttack[], json: ChampionJSON) {
	const attackSpeeds = attacks
		.map(attack => parseAttack(attack, json))
		.filter((speed): speed is number => speed != null)
	return attackSpeeds.length ? Math.max(...attackSpeeds) : undefined
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
	return spellContainer.mSpell
}

const unplayableAPINames = ['TFT5_EmblemArmoryKey', 'TFT5_DraconicEgg', 'TFT6_MercenaryChest', 'TFT6_TheGoldenEgg', 'TFT6_DragonEgg']

const playableChampions = champions
	.filter(champion => {
		champion.apiName = getAPIName(champion)
		if (champion.apiName == null || unplayableAPINames.includes(champion.apiName)) {
			return false
		}
		if (!champion.icon) {
			return false
		}
		return true
	})
	.sort(sortByName)

const outputChampions = await Promise.all(playableChampions.map(async (champion): Promise<ChampionData> => {
	const apiName = champion.apiName
	const path = getPathTo(currentSetNumber, `champion/${apiName.toLowerCase()}.json`)
	const json = JSON.parse(await fs.readFile(path, 'utf8')) as ChampionJSON
	const characterRecord = getCharacterRecord(json)
	if (characterRecord == null) {
		console.log(apiName, path, json)
	}
	if (characterRecord.baseStaticHPRegen !== 0) {
		console.log('ERR HP Regen', apiName, characterRecord.baseStaticHPRegen)
	}
	let totalMana = characterRecord.primaryAbilityResource.arBase ?? champion.stats.mana
	let initialMana = characterRecord.mInitialMana ?? 0
	if (totalMana == null) {
		totalMana = initialMana
		initialMana = 0
	}
	const stats = {
		armor: characterRecord.baseArmor ?? 0,
		attackSpeed: characterRecord.attackSpeed,
		critChance: characterRecord.baseCritChance ?? null,
		critMultiplier: characterRecord.critDamageMultiplier,
		damage: characterRecord.baseDamage ?? 10,
		hp: characterRecord.baseHP,
		initialMana,
		magicResist: characterRecord.baseSpellBlock ?? 0,
		mana: totalMana,
		moveSpeed: characterRecord.baseMoveSpeed,
		range: Math.floor(characterRecord.attackRange / 180),
	}
	const spellNames = characterRecord.spellNames
	if (characterRecord.extraSpells) {
		spellNames.push(...characterRecord.extraSpells)
	}
	spellNames.push('TFT6b_Vi_Spell_ThirdCast')

	const passiveName = apiName + 'P'
	const passiveSpell = spellNames.includes(passiveName) ? getSpell(passiveName, json) : undefined
	const passive = passiveSpell ? transformSpellData(passiveName, passiveSpell, json) : undefined
	let isFirstSpell = !passive
	const spells = spellNames
		.filter(name => name && name !== 'BaseSpell' && name !== passiveName)
		.map(spellName => {
			const spell = getSpell(spellName, json)
			return spell ? [spellName, spell] as [string, ChampionJSONSpell] : undefined
		})
		.filter((spellNameEntry): spellNameEntry is [string, ChampionJSONSpell] => {
			if (!spellNameEntry) {
				return false
			}
			if (isFirstSpell) {
				isFirstSpell = false
			}
			const [spellName, spellData] = spellNameEntry
			if (spellData.mDataValues == null) {
				if (isFirstSpell && spellName !== 'TFT_TrainingDummy_Spell' && spellName !== 'TFT_VoidSpawn_Passive') {
					console.log('!mDataValues', spellName)
				}
				if (spellData.mCastTime == null) {
					return false
				}
			}
			return true
		})
		.map(([spellName, spellData]) => transformSpellData(spellName, spellData, json))
	let basicAttacks: ChampionJSONAttack[] = []
	if (characterRecord.basicAttack) {
		if (characterRecord.basicAttack.mAttackName == null) {
			characterRecord.basicAttack.mAttackName = `${apiName}BasicAttack`
		}
		basicAttacks.push(characterRecord.basicAttack)
	}
	if (characterRecord.extraAttacks) {
		basicAttacks.push(...characterRecord.extraAttacks)
	}
	let critAttacks = characterRecord.critAttacks ?? []

	basicAttacks = basicAttacks.filter(attack => attack.mAttackName)
	critAttacks = critAttacks.filter(attack => attack.mAttackName)

	const needsBasicAttacks = !basicAttacks.length
	const needsCritAttacks = !basicAttacks.length
	for (const key in json) {
		const entry = json[key as keyof typeof json]
		const scriptName = entry.mScriptName as string | undefined
		if (scriptName == null) {
			continue
		}
		if (scriptName.startsWith(`${apiName}BasicAttack`)) {
			if (needsBasicAttacks) {
				basicAttacks.push({ mAttackName: scriptName })
			}
		} else if (scriptName.startsWith(`${apiName}CritAttack`)) {
			if (needsCritAttacks) {
				critAttacks.push({ mAttackName: scriptName })
			}
		}
	}

	const basicAttackMissileSpeed = reduceAttacks(basicAttacks, json)
	const critAttackMissileSpeed = critAttacks.length ? reduceAttacks(critAttacks, json) : undefined

	const missiles: ChampionSpellData[] = []
	for (const key in json) {
		const entry = json[key as keyof typeof json]
		const scriptName = entry.mScriptName
		if (passiveName === scriptName || spells.some(spell => spell.name === scriptName)) {
			continue
		}
		if ([...basicAttacks, ...critAttacks].some(attack => attack.mAttackName === scriptName)) {
			continue
		}

		const spellData = getSpell(scriptName, json)
		if (spellData) {
			missiles.push(transformSpellData(scriptName, spellData, json))
		}
	}

	const knownTraits = Object.values(TRAIT_DATA_SUBSTITUTIONS)
	const isSpawn = characterRecord.isSpawn ?? BASE_UNIT_API_NAMES.includes(apiName)
	const traits = characterRecord.mLinkedTraits?.map(traitData => {
		const traitAPIName = traitData.TraitData!
		if (traitAPIName.startsWith('{')) {
			console.log('ERR Unknown trait', apiName, traitAPIName, champion.traits.filter(t => !knownTraits.includes(t)))
			return traitAPIName
		}
		const enumKey = getEnumKeyFrom(traitAPIName)
		return TraitKey != null ? TraitKey[enumKey as keyof typeof TraitKey] ?? enumKey : enumKey
	}) ?? []
	return {
		apiName,
		name: champion.name,
		icon: champion.icon,
		cost: characterRecord.tier,
		starLevel: LOCKED_STAR_LEVEL?.[apiName],
		teamSize: characterRecord.teamSize,
		isSpawn,
		traits,
		stats,
		basicAttackMissileSpeed,
		critAttackMissileSpeed,
		passive,
		spells,
		missiles,
	}
}))

// Output

await Promise.all([
	fs.writeFile(getPathTo(currentSetNumber, 'champions.ts'), `import type { ChampionData } from '../index'\n\nexport enum ChampionKey { ${outputChampions.map(c => `${getEnumKeyFrom(c.apiName)} = \`${c.apiName}\``).join(', ')} }\n\nexport const champions: ChampionData[] = ${formatJS(outputChampions)}\n`),
	// .map(c => { c.apiName = `ChampionKey.${getEnumKeyFrom(c.apiName)}` as ChampionKey; return c })
	fs.writeFile(getPathTo(currentSetNumber, 'traits.ts'), `import { TraitKey } from '../index.js'\nimport type { TraitData } from '../index'\n\nexport const traits: TraitData[] = ${formatJS(traits)}\n`),
	fs.writeFile(getPathTo(currentSetNumber, 'items.ts'), `import type { ItemData } from '../index'\n\n${outputItemSections.join('\n\n')}\n`),
])

// Transform

function transformSpellData(spellName: string, spellData: ChampionJSONSpell, json: ChampionJSON) {
	const missileName = spellName + 'Missile'
	const missileSpell = getSpell(missileName, json)
	const missileSpec = spellData.mMissileSpec ?? missileSpell?.mMissileSpec
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
	const calculations: SpellCalculations = {}
	const sourceCalculations = spellData.mSpellCalculations
	if (sourceCalculations) {
		const prefixes = ['Tooltip', 'Modified', 'Total']
		for (const calculationKey in sourceCalculations) {
			const prefix = prefixes.find(prefix => calculationKey.startsWith(prefix))
			if (prefix == null) {
				// console.log('No prefix for', spellName, calculationKey)
			}
			const variableName = prefix != null ? calculationKey.replace(prefix, '') : calculationKey
			const sourceCalculation = sourceCalculations[calculationKey]
			if (variables[variableName] == null) {
				if (variableName !== 'UNUSED') {
					// console.log('ERR', 'Missing variable for calculation', spellName, variableName, Object.keys(variables))
				}
			}
			const totalPrefix = 'Total'
			if (prefix !== totalPrefix && sourceCalculations[`${totalPrefix}${variableName}`] != null) {
				// console.log(sourceCalculation, sourceCalculations[`Total${variableName}`])
				continue
			}
			const parts = (sourceCalculation.mFormulaParts ?? [sourceCalculation.mMultiplier])
				.map((part): SpellCalculationPart => {
					let sourceSubparts: Record<string, any>[]
					const sourceOperator = part['__type'] as string
					let operator: string | undefined
					if (sourceOperator) {
						operator = spellCalculationOperatorSubstitutions[sourceOperator]
						if (!operator) { console.log('ERR Unknown operator', spellName, sourceOperator) }
					} else if (sourceCalculation.mMultiplier) {
						operator = 'product'
					}
					if (part.mPart1 != null) {
						sourceSubparts = [part.mPart1, part.mPart2, part.mPart3, part.mPart4, part.mPart5]
							.filter((subpart): subpart is Record<string, any> => subpart != null)
					} else if (part.mSubparts != null) {
						sourceSubparts = part.mSubparts as Record<string, any>[]
					} else {
						sourceSubparts = [part]
					}
					const subparts: SpellCalculationSubpart[] = sourceSubparts
						.map(subpart => {
							const variableName: string | undefined = subpart.mDataValue ?? subpart.mSubpart?.mDataValue
							if (variableName == null || variableName?.startsWith('{')) {
								// console.log('ERR', 'Unknown variableName', spellName, calculationKey, subpart)
							}
							const mStat: number | undefined = subpart.mSubpart?.mStat ?? subpart.mStat
							let stat: string | undefined = mStat != null ? mStatSubstitutions[mStat] : undefined
							let ratio: number | undefined = subpart.mRatio ?? subpart.mCoefficient
							if (stat === undefined) {
								if (spellName === 'TFT6_GnarR' && variableName === 'ADPercent') {
									ratio = 1
									stat = BonusKey.AttackDamage
								} else {
									const scaleString = subpart['{a5749b52}']?.toLowerCase()
									if (subpart.mRatio === BASE_AP_RATIO) {
										if (scaleString === 'scaleap' || scaleString == null || (spellName === 'TFT6_DravenSpinning' && variableName === 'Damage')) {
											stat = BonusKey.AbilityPower
										} else {
											console.log('Unknown scale', spellName, calculationKey, subpart)
										}
									} else if (operator !== 'identity') {
										console.log('Unknown stat for ratio', spellName, calculationKey, operator, stat, ratio, subpart)
									}
								}
							}
							if (stat != null && ratio == null) {
								if (stat === BonusKey.AbilityPower) {
									console.log('ERR', 'Assume base AP ratio', spellName, calculationKey, stat)
									ratio = BASE_AP_RATIO
								} else {
									ratio = 1
								}
							}
							const starValues = variableName != null ? variables[variableName] : undefined
							if (variableName != null && !starValues && calculationKey !== 'UNUSED') {
								// console.log('ERR', 'Missing variable', spellName, calculationKey, variableName, variables) //TODO
							}
							return {
								variable: variableName,
								starValues,
								stat,
								ratio,
							}
						})
					if (subparts.length > 1 && operator !== 'product' && operator !== 'sum') {
						console.log('ERR', 'Multipart unsupported operator', spellName, calculationKey, operator, subparts)
					}
					return {
						operator,
						subparts,
					}
				})
			calculations[variableName] = {
				asPercent: sourceCalculation.mDisplayAsPercent != null,
				parts,
			}
		}
	}
	const missileSpeed = spellData.missileSpeed
	const missileMovementSpeed = missileMovement?.mInitialSpeed ?? missileMovement?.mSpeed ?? missileSpeed
	const spell: ChampionSpellData = {
		name: spellName,
		castTime: spellData.mCastTime ?? missileSpell?.mCastTime,
		missile: !missileSpec && missileSpeed == null
			? undefined
			: {
				width: missileSpec?.mMissileWidth,
				travelTime: missileMovement?.mTravelTime,
				speedInitial: missileMovementSpeed ?? missileSpeed!,
				speedMin: missileMovement?.mMinSpeed,
				speedMax: missileMovement?.mMaxSpeed,
				acceleration: missileMovement?.mAcceleration,
				startDelay: missileMovement?.mStartDelay,
				tracksTarget: missileMovement?.mTracksTarget !== false,
			},
		variables,
		calculations,
		cantCastWhileRooted: spellData.cantCastWhileRooted,
		uninterruptable: spellData.mCantCancelWhileWindingUp,
	}
	if (spell.missile && missileSpeed != null && missileSpeed !== missileMovementSpeed) {
		spell.missile._missileSpeed = missileSpeed
	}
	// if (spellData.mCastTime == null) { //TODO verify these aren't supposed to instacast?
	// 	console.log('!mCastTime', spellName)
	// }
	// if (spell.missile && spell.missile.speedMin == null && spell.missile.travelTime == null) {
	// 	console.log('!missile', spellName)
	// }
	return spell
}

// Aggregated

if (activeAugments != null) {
	const augmentKeys = activeAugments
		.filter(augment => !(toKey(getAugmentNameKey(augment)) in AugmentGroupKey))
		.sort((a, b) => a.groupID.localeCompare(b.groupID))
		.map(augment => `${toKey(getAugmentNameKey(augment))} = '${augment.groupID}'`)
	if (augmentKeys.length) {
		console.log(`AGGREGATE AugmentGroupKey: ${Array.from(new Set(augmentKeys)).join(', ')}`)
	}
}

const itemKeys = currentItemsByType['component'].concat(currentItemsByType['completed'])
	.filter(item => !(toKey(item.name) in ItemKey))
	.sort((a, b) => toKey(a.name).localeCompare(toKey(b.name)))
	.map(({name}) => `${toKey(name)} = \`${name}\``)
if (itemKeys.length) {
	console.log(`AGGREGATE ItemKey: ${itemKeys.join(', ')}`)
}

const traitKeys = traits
	.filter(trait => !(getEnumKeyFrom(trait.apiName ?? trait.name) in TraitKey))
	.map(trait => `${getEnumKeyFrom(trait.apiName ?? trait.name)} = \`${trait.name}\``)
if (traitKeys.length) {
	console.log(`AGGREGATE TraitKey: ${traitKeys.join(', ')}`)
}
