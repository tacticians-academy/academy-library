const MAX_STAR_LEVEL = 3

import fs from 'fs/promises'

import { AugmentData, AugmentTier, BonusKey, ChampionData, ChampionSpellData, COMPONENT_ITEM_IDS, EffectVariables, ItemData, ItemTypeKey, SpellCalculations, SpellCalculationPart, SpellCalculationSubpart, SpellVariables, TraitData } from '../dist/index.js'
import { AugmentGroupKey, ChampionKey, ItemKey, TraitKey } from '../dist/aggregated.js'
import { importSetData } from '../dist/imports.js'

import { getCurrentSetNumber, getPathTo, loadHardcodedTXT } from './helpers/files.js'
import { formatJS } from './helpers/formatting.js'
import { BASE_UNIT_API_NAMES, UNRELEASED_ITEM_NAME_KEYS, NORMALIZE_EFFECT_KEYS, SUBSTITUTE_EFFECT_KEYS, normalizeEffects, mStatSubstitutions, spellCalculationOperatorSubstitutions } from './helpers/normalize.js'
import { ChampionJSON, ChampionJSONType, ChampionJSONAttack, ChampionJSONSpell, ChampionJSONSpellAttack, ChampionJSONStats, ResponseJSON } from './helpers/types.js'
import { getAPIName, getAugmentNameKey } from './helpers/utils.js'

const BASE_AP_RATIO = 0.009999999776482582

const unreplacedIDs = new Set(Object.keys(SUBSTITUTE_EFFECT_KEYS))

function sortByName(a: {name: string}, b: {name: string}) {
	return a.name.localeCompare(b.name)
}

function getEnumKeyFrom(apiName: string) {
	return apiName.includes('_') ? apiName.split('_')[1] : apiName
}

// Load

const currentSetNumber = await getCurrentSetNumber()
const parentSetNumber = Math.floor(currentSetNumber)

let responseJSON: ResponseJSON
try {
	const raw = await fs.readFile(getPathTo(currentSetNumber, '._.json'), 'utf8')
	responseJSON = JSON.parse(raw)
} catch(error) {
	console.log(error)
	throw 'Missing cache.local. Erase the `cache` directory and re-run `prepare`.'
}
const { champions, traits } = responseJSON.sets[parentSetNumber]
const itemsData = responseJSON.items as ItemData[]

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

const setData = await importSetData(currentSetNumber)
const { LOCKED_STAR_LEVEL, SPATULA_ITEM_IDS } = setData
const RETIRED_ITEM_NAMES = setData.RETIRED_ITEM_NAMES ?? []
const RETIRED_AUGMENT_NAME_KEYS = setData.RETIRED_AUGMENT_NAME_KEYS ?? []
const UNUSED_AUGMENT_NAME_KEYS = setData.UNUSED_AUGMENT_NAME_KEYS ?? []
const TRAIT_DATA_SUBSTITUTIONS = setData.TRAIT_DATA_SUBSTITUTIONS ?? {}

const currentItemsByType: Record<ItemTypeKey, ItemData[]> = {component: [], completed: [], spatula: [], duos: [], consumable: [], radiant: [], ornn: [], hexbuff: [], mercenaryDice: [], unreleased: []}

const foundItemIDs: number[] = []
itemsData.reverse().forEach(item => {
	if (RETIRED_ITEM_NAMES.includes(item.name) || foundItemIDs.includes(item.id)) {
		return
	}
	for (const normalize in NORMALIZE_EFFECT_KEYS) {
		item.desc = item.desc.replaceAll(normalize, NORMALIZE_EFFECT_KEYS[normalize])
	}
	normalizeEffects(item.effects, unreplacedIDs)
	const name = item.name.toLowerCase()
	const icon = item.icon.toLowerCase()
	if (icon.includes('/augments/')) {
		return
	}
	const from = item.from as number[]
	let typeKey: ItemTypeKey | undefined
	if (icon.includes('_hex_')) {
		typeKey = 'hexbuff'
	} else if (item.desc === 'tft_item_description_Mercenary_Dice') {
		typeKey = 'mercenaryDice'
	} else if (item.id < 0 || UNRELEASED_ITEM_NAME_KEYS.includes(name) || name.includes('item_name')) {
		typeKey = 'unreleased'
	} else if (from.length) {
		if (item.id !== 88 && from.includes(8)) {
			if (SPATULA_ITEM_IDS && !SPATULA_ITEM_IDS.includes(item.id)) {
				return
			}
			typeKey = 'spatula'
		} else if (from.every(itemID => COMPONENT_ITEM_IDS.includes(itemID))) {
			typeKey = 'completed'
		}
	} else {
		if (icon.includes('/hexcore/')) {
			return false
		}
		if (SPATULA_ITEM_IDS?.includes(item.id)) {
			typeKey = 'spatula'
		} else if (COMPONENT_ITEM_IDS.includes(item.id)) {
			typeKey = 'component'
		} else if (icon.includes('/pairs/')) {
			typeKey = 'duos'
		} else if (icon.includes('/radiant/')) {
			typeKey = 'radiant'
		} else if (icon.includes('ornnitem')) {
			typeKey = 'ornn'
		} else if (icon.includes('consumable')) {
			typeKey = 'consumable'
		} else if (!typeKey) {
			if (!SPATULA_ITEM_IDS) {
				console.log('Unknown emblem item', item)
			}
			return false
		}
	}
	if (typeKey) {
		foundItemIDs.push(item.id)
		currentItemsByType[typeKey].push(item)
	}
})

// Normalize Traits/Items

const allItems = []
for (const key in currentItemsByType) {
	allItems.push(...currentItemsByType[key as ItemTypeKey])
}

allItems.forEach((item: ItemData) => {
	item.unique = item.unique ?? false
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
	return name.replaceAll(/['.+\-!]/g, '').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')
}

const outputItemSections = []
for (const key in currentItemsByType) {
	const itemKey = key as ItemTypeKey
	currentItemsByType[itemKey].sort((a, b) => a.id - b.id)
	const itemsData = currentItemsByType[itemKey]
	outputItemSections.push(`export const ${itemKey}Items: ItemData[] = ` + (itemsData.length ? formatJS(itemsData) : '[]'))
}
outputItemSections.push(`export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)`)

// Augments

const activeAugments: AugmentData[] = []
const unreleasedAugments: AugmentData[] = []

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

const MANUAL_TIER_DESIGNATIONS: Record<string, AugmentTier> = {
	'High Five': 3,
}

for (const item of itemsData.sort((a, b) => a.name.localeCompare(b.name))) {
	const icon = item.icon.toLowerCase()
	const pathComponents = icon.split('/')
	const pathNameComponent = pathComponents[pathComponents.length - 1]
	const pathCategoryComponent = pathComponents[pathComponents.length - 3]
	const isAugment = pathCategoryComponent === 'augments'
	const [ pathName, setKey ] = pathNameComponent.split('.')
	if (!setKey.startsWith(parentSetName)) {
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
				if (nameKey !== 'innovator heart') {
					console.log('ERR Multiple tier designations for heart', tier, 1, item)
				}
			} else {
				tier = 1
			}
		} else if (nameKey.endsWith(' crest')) {
			if (tier && tier !== 2) {
				console.log('ERR Multiple tier designations for crest', tier, 2, item)
			} else {
				tier = 2
			}
		} else if (nameKey.endsWith(' crown')) {
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
			throw 'No tier for item: ' + JSON.stringify(item)
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
		`export const emptyImplementationAugments: AugmentGroupKey[] =  [${emptyImplementationAugments}]`,
		`export const activeAugments: AugmentData[] = ` + formatJS(activeAugments),
		`export const inactiveAugments: AugmentData[] = ` + formatJS(unreleasedAugments),
	]
	fs.writeFile(getPathTo(currentSetNumber, 'augments.ts'), outputAugmentSections.join('\n\n'))
}

// Champions

function getByType(type: ChampionJSONType, alternateKey: string, json: ChampionJSON) {
	for (const key in json) {
		const entry = json[key]
		if (entry.__type ? entry.__type === type : alternateKey in entry) {
			return entry
		}
	}
}
function getCharacterRecord(json: ChampionJSON) {
	return getByType('TFTCharacterRecord', 'mLinkedTraits', json) as ChampionJSONStats
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
	return attackSpeeds[0]
	// return attackSpeeds.length === 0 ? undefined : attackSpeeds.reduce((acc, value) => acc + value, 0) / attackSpeeds.length
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

const unplayableAPINames = ['TFT5_EmblemArmoryKey', 'TFT6_MercenaryChest', 'TFT6_TheGoldenEgg']

const playableChampions = champions
	.filter(champion => {
		champion.apiName = getAPIName(champion)
		if (unplayableAPINames.includes(champion.apiName)) {
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
	.sort(sortByName)

const outputChampions = await Promise.all(playableChampions.map(async (champion): Promise<ChampionData> => {
	const apiName = champion.apiName!
	const path = getPathTo(currentSetNumber, `champion/${apiName.toLowerCase()}.json`)
	const json = JSON.parse(await fs.readFile(path, 'utf8')) as ChampionJSON
	const characterRecord = getCharacterRecord(json)
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
		armor: characterRecord.baseArmor,
		attackSpeed: characterRecord.attackSpeed,
		critChance: characterRecord.baseCritChance ?? null,
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
	const passiveName = apiName + 'P'
	const passiveSpell = spellNames.includes(passiveName) ? getSpell(passiveName, json) : undefined
	const passive = passiveSpell ? transformSpellData(passiveName, passiveSpell, json) : undefined
	const spells = spellNames
		.filter(name => name && name !== 'BaseSpell' && name !== passiveName)
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
		.map(([spellName, spellData]) => transformSpellData(spellName, spellData, json))
	if (!spells.length) {
		console.log('No spells for', apiName)
	}
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
		const scriptName = entry.mScriptName
		if (!scriptName) {
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
		const enumKey = getEnumKeyFrom(traitData.TraitData!)
		return TraitKey ? TraitKey[enumKey as keyof typeof TraitKey] : enumKey
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
	fs.writeFile(getPathTo(currentSetNumber, 'champions.ts'), `import { ChampionKey } from '../index.js'\nimport type { ChampionData } from '../index'\n\nexport const champions: ChampionData[] = ` + formatJS(outputChampions)),
	fs.writeFile(getPathTo(currentSetNumber, 'traits.ts'), `import { TraitKey } from '../index.js'\nimport type { TraitData } from '../index'\n\nexport const traits: TraitData[] = ` + formatJS(traits)),
	fs.writeFile(getPathTo(currentSetNumber, 'items.ts'), `import { ItemKey } from '../index.js'\nimport type { ItemData } from '../index'\n\n` + outputItemSections.join('\n\n')),
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
			if (!prefix) {
				// console.log('No prefix for', spellName, calculationKey)
			}
			const variableName = prefix ? calculationKey.replace(prefix, '') : calculationKey
			const sourceCalculation = sourceCalculations[calculationKey]
			if (!variables[variableName]) {
				if (variableName !== 'UNUSED') {
					// console.log('ERR', 'Missing variable for calculation', spellName, variableName, Object.keys(variables))
				}
			}
			const totalPrefix = 'Total'
			if (prefix !== totalPrefix && sourceCalculations[`${totalPrefix}${variableName}`]) {
				// console.log(sourceCalculation, sourceCalculations[`Total${variableName}`])
				continue
			}
			const parts = sourceCalculation.mFormulaParts
				.map((part): SpellCalculationPart => {
					let sourceSubparts: Record<string, any>[]
					const sourceOperator = part['__type'] as string
					let operator: string | undefined
					if (sourceOperator) {
						operator = spellCalculationOperatorSubstitutions[sourceOperator]
						if (!operator) { console.log('ERR Unknown operator', spellName, sourceOperator) }
					}
					if (part.mPart1) {
						sourceSubparts = [part.mPart1, part.mPart2, part.mPart3, part.mPart4, , part.mPart5]
							.filter((subpart): subpart is Record<string, any> => !!subpart)
					} else if (part.mSubparts) {
						sourceSubparts = part.mSubparts as Record<string, any>[]
					} else {
						sourceSubparts = [part]
					}
					const subparts: SpellCalculationSubpart[] = sourceSubparts
						.map(subpart => {
							const variableName: string | undefined = subpart.mDataValue ?? subpart.mSubpart?.mDataValue
							if (!variableName || variableName?.startsWith('{')) {
								// console.log('ERR', 'Unknown variableName', spellName, calculationKey, subpart)
							}
							const mStat: number | undefined = subpart.mSubpart?.mStat ?? subpart.mStat
							let stat: string | undefined = mStat ? mStatSubstitutions[mStat] : undefined
							let ratio: number | undefined = subpart.mRatio ?? subpart.mCoefficient
							if (stat === undefined) {
								if (spellName === 'TFT6_GnarR' && variableName === 'ADPercent') {
									ratio = 1
									stat = BonusKey.AttackDamage
								}
								const scaleString = subpart['{a5749b52}']?.toLowerCase()
								if (subpart.mRatio === BASE_AP_RATIO) {
									if (scaleString === 'scaleap' || scaleString == null || (spellName === 'TFT6_DravenSpinning' && variableName === 'Damage')) {
										stat = BonusKey.AbilityPower
									} else {
										console.log('Unknown scale', spellName, calculationKey, subpart)
									}
								} else {
									console.log('Unknown mRatio', spellName, calculationKey, subpart)
								}
							}
							if (stat && !ratio) {
								if (stat === BonusKey.AbilityPower) {
									console.log('ERR', 'Assume base AP ratio', spellName, calculationKey, stat)
									ratio = BASE_AP_RATIO
								} else {
									ratio = 1
								}
							}
							const starValues = variableName ? variables[variableName] : undefined
							if (variableName && !starValues) {
								console.log('ERR', 'Missing variable', spellName, calculationKey, variableName, variables)
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
				asPercent: !!sourceCalculation.mDisplayAsPercent,
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
	if (spell.missile && missileSpeed && missileSpeed !== missileMovementSpeed) {
		spell.missile._missileSpeed = missileSpeed
	}
	// if (spellData.mCastTime == null) { //TODO verify these aren't supposed to instacast?
	// 	console.log('!mCastTime', spellName)
	// }
	// if (!spell.missile) { //TODO multipart spells (TFT6_ViktorE, TFT6_JhinR, etc)
	// if (spell.missile && spell.missile.speedMin == null && spell.missile.travelTime == null) {
	// 	console.log('!missile', spellName)
	// }
	return spell
}

// Aggregated

console.log('\n')

if (activeAugments) {
	const augmentKeys = activeAugments
		.filter(augment => !(toKey(getAugmentNameKey(augment)) in AugmentGroupKey))
		.sort((a, b) => a.groupID.localeCompare(b.groupID))
		.map(augment => `${toKey(getAugmentNameKey(augment))} = '${augment.groupID}'`)
	if (augmentKeys.length) {
		console.log(`AGGREGATE AugmentGroupKey: ${Array.from(new Set(augmentKeys)).join(', ')}`)
	}
}

const championKeys = playableChampions
	.filter(champion => !(getEnumKeyFrom(champion.apiName!) in ChampionKey))
	.map(champion => `${getEnumKeyFrom(champion.apiName!)} = \`${champion.name}\``)
if (championKeys.length) {
	console.log(`AGGREGATE ChampionKey: ${championKeys.join(', ')}`)
}

const itemKeys = currentItemsByType['component'].concat(currentItemsByType['completed'], currentItemsByType['spatula'])
	.filter(item => !(toKey(item.name) in ItemKey))
	.sort((a, b) => toKey(a.name).localeCompare(toKey(b.name)))
	.map(({name}) => `${toKey(name)} = \`${name}\``)
	.join(', ')
if (itemKeys.length) {
	console.log(`AGGREGATE ItemKey: ${itemKeys}`)
}

const traitKeys = (traits as TraitData[])
	.filter(trait => !(getEnumKeyFrom(trait.apiName ?? trait.name) in TraitKey))
	.map(trait => `${getEnumKeyFrom(trait.apiName ?? trait.name)} = \`${trait.name}\``)
if (traitKeys.length) {
	console.log(`AGGREGATE TraitKey: ${traitKeys.join(', ')}`)
}
