const MAX_STAR_LEVEL = 3

import fs from 'fs/promises'

import { BonusKey } from '../../dist/index.js'
import type { ChampionData, ChampionSpellData, SpellCalculations, SpellCalculationPart, SpellCalculationSubpart, SpellVariables, SetNumber, AbilityData } from '../../dist/index.js'
import { importSetData } from '../../dist/imports.js'

import { getPathToSet } from '../helpers/files.js'
import { formatJS } from '../helpers/formatting.js'
import { mStatSubstitutions, spellCalculationOperatorSubstitutions } from '../helpers/normalize.js'
import type { ChampionJSON, ChampionJSONType, ChampionJSONAttack, ChampionJSONSpell, ChampionJSONSpellAttack, ChampionJSONStats } from '../helpers/types.js'
import { getAPIName, sortByName } from '../helpers/utils.js'

const BASE_AP_RATIO = 0.009999999776482582

const GLOBAL_IGNORE_UNIT_APINAMES = [
	'TFT5_DraconicEgg',
	'TFT5_EmblemArmoryKey',
	'TFT6_TheGoldenEgg',
]
const INVALID_SYMBOL_STARTING_REPLACEMENTS: Record<string, string> = {
	'8': 'Eight',
}

export async function transformChampions(setNumber: SetNumber, parentSetNumber: SetNumber, champions: ChampionData[]) {
	const { LOCKED_STAR_LEVEL, IGNORE_UNIT_APINAMES } = await importSetData(setNumber)

	const playableUnits = champions
		.filter(unit => {
			if (!unit.icon || unit.stats.attackSpeed == null) {
				return false
			}
			unit.apiName = getAPIName(unit)
			return !unit.apiName.includes('ArmoryKey') && !IGNORE_UNIT_APINAMES?.includes(unit.apiName) && unit.apiName !== 'TFT9_SLIME_Crab'
		})
		.sort(sortByName)

	const abilities: [key: string, ability: AbilityData, sortBy: string][] = []

	const formattedUnits = await Promise.all(playableUnits.map(async (unit): Promise<ChampionData> => {
		const apiName = unit.apiName
		// const path = getPathToPatch(patchLine, `champion/${apiName.toLowerCase()}.json`)
		const path = getPathToSet(setNumber, `champion/${apiName.toLowerCase()}.json`)
		const json = JSON.parse(await fs.readFile(path, 'utf8')) as ChampionJSON
		const characterRecord = getCharacterRecord(json)
		if (characterRecord == null) {
			console.log(apiName, path, json)
		}
		if (characterRecord.baseStaticHPRegen !== 0) {
			console.error('ERR HP Regen', apiName, characterRecord.baseStaticHPRegen)
		}
		let totalMana = characterRecord.primaryAbilityResource.arBase ?? unit.stats.mana
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

		const isSpawn = characterRecord.isSpawn || unit.stats.hp == null || unit.cost === 8 || unit.cost === 11
		const traits = unit.traits
		if (unit.ability?.desc != null) {
			const variables: SpellVariables = {}
			unit.ability.variables.forEach(({ name, value }) => {
				variables[name] = value == null ? [] : value.slice(0, 4)
			})
			const outputAbility = unit.ability as unknown as AbilityData
			outputAbility.variables = variables
			abilities.push([apiName, outputAbility, unit.name + unit.apiName])
		}

		return {
			apiName,
			name: unit.name,
			icon: unit.icon,
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

	const outputChampions: ChampionData[] = []
	const outputOtherUnits: ChampionData[] = []
	formattedUnits
		.sort(sortByName)
		.forEach(unit => {
			if (GLOBAL_IGNORE_UNIT_APINAMES.includes(unit.apiName)) {
				outputOtherUnits.push(unit)
			} else {
				outputChampions.push(unit)
			}
		})
	abilities.sort((a, b) => a[2].localeCompare(b[2]))

	return [
		`import type { AbilityData, ChampionData } from '../index'`,
		`export enum ChampionKey { ${outputChampions.map(c => `${getEnumKeyFrom(c.apiName)} = \`${c.apiName}\``).join(', ')} }`,
		`export const champions: ChampionData[] = ${formatJS(outputChampions)}`,
		`export const otherUnits: ChampionData[] = ${formatJS(outputOtherUnits)}`,
		`export const abilities: Record<string, AbilityData> = ${formatJS(Object.fromEntries(abilities))}`,
	]
}

// Helpers

function getEnumKeyFrom(apiName: string) {
	const splitIndex = apiName.indexOf('_')
	let key = splitIndex !== -1 ? apiName.slice(splitIndex + 1) : apiName.replaceAll(' ', '')
	for (const replaceStartKey in INVALID_SYMBOL_STARTING_REPLACEMENTS) {
		if (key.startsWith(replaceStartKey)) {
			key = key.replace(replaceStartKey, INVALID_SYMBOL_STARTING_REPLACEMENTS[replaceStartKey])
		}
	}
	return key.replaceAll(/\/|-|\.|_/g, '')
}

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
		const totalPrefix = 'Total'
		const prefixes = ['Tooltip', 'Modified', totalPrefix]
		for (const calculationKey in sourceCalculations) {
			const prefix = prefixes.find(prefix => calculationKey.startsWith(prefix))
			if (prefix == null) {
				// console.log('No prefix for', spellName, calculationKey)
			}
			const variableName = prefix != null ? calculationKey.replace(prefix, '') : calculationKey
			const sourceCalculation = sourceCalculations[calculationKey]
			if (variables[variableName] == null) {
				if (variableName !== 'UNUSED') {
					// console.error('ERR', 'Missing variable for calculation', spellName, variableName, Object.keys(variables))
				}
			}
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
						if (!operator) { console.error('ERR Unknown operator', spellName, sourceOperator) }
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
								// console.error('ERR', 'Unknown variableName', spellName, calculationKey, subpart)
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
									console.error('ERR', 'Assume base AP ratio', spellName, calculationKey, stat)
									ratio = BASE_AP_RATIO
								} else {
									ratio = 1
								}
							}
							const starValues = variableName != null ? variables[variableName] : undefined
							if (variableName != null && !starValues && calculationKey !== 'UNUSED') {
								// console.error('ERR', 'Missing variable', spellName, calculationKey, variableName, variables) //TODO
							}
							return {
								variable: variableName,
								starValues,
								stat,
								ratio,
							}
						})
					if (subparts.length > 1 && operator !== 'product' && operator !== 'sum') {
						console.error('ERR', 'Multipart unsupported operator', spellName, calculationKey, operator, subparts)
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
				behaviors: missileSpec?.behaviors ?? [],
				type: missileMovement?.__type,
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
