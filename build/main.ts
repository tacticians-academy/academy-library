const PATCH_LINE = 'pbe' // 'latest' 'pbe' '12.4'
const MAX_STAR_LEVEL = 3

import fetch from 'node-fetch'
import fs from 'fs/promises'
import path from 'path'

import { BonusKey } from '../dist/index'
import type { AugmentData, AugmentTier, ChampionData, ChampionSpellData, ItemData, TraitData } from '../dist/index'
import { ItemKey } from '../dist/set6/items.js'

const baseURL = `https://raw.communitydragon.org/${PATCH_LINE}`
const url = `${baseURL}/cdragon/tft/en_us.json`
const response = await fetch(url)
if (!response.ok) { throw response }
console.log(url)

const tagPath = path.resolve('build', 'cdragon_etag.local')
let oldEtag: string | undefined
try {
	oldEtag = await fs.readFile(tagPath, 'utf8')
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
	fs.writeFile(tagPath, newEtag)
} else {
	console.log('No cache etag for resource, reloading data.')
}

const responseJSON = await response.json() as Record<string, any>

const currentSetNumber = Object.keys(responseJSON.sets).reduce((previous, current) => Math.max(previous, parseInt(current, 10)), 0)
const { champions, traits } = (responseJSON as any).sets[currentSetNumber]
const outputFolder = `dist/set${currentSetNumber}/`
console.log('Loading set', currentSetNumber, 'from', PATCH_LINE.toUpperCase(), '...', 'Units:', champions.length, 'Traits:', traits.length)

// Items

interface ResponseItem {
	id: number
	effects: Record<string, number | "null">,
	icon: string
	from: number[]
	name: string
	desc: string
}

const itemsData = responseJSON.items as ResponseItem[]
const standardComponents = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const retiredItems = [15]
const spatulaItemKey = `/spatula/set${currentSetNumber}/`
const foundItemIDs: number[] = []
const currentItems = (itemsData as ItemData[]).reverse().filter(item => {
	if (foundItemIDs.includes(item.id) || retiredItems.includes(item.id)) {
		return false
	}
	const name = (item.name as string).toLowerCase()
	if (name.startsWith('tft_')) {
		return false
	}
	const icon = (item.icon as string).toLowerCase()
	const from = item.from as number[]
	let isCurrentItem = false
	if (from.length) {
		if (from.includes(8) && !icon.includes(spatulaItemKey)) {
			return false
		}
		isCurrentItem = from.every(itemID => standardComponents.includes(itemID))
	} else {
		isCurrentItem = standardComponents.includes(item.id) || icon.includes(spatulaItemKey)
	}
	if (isCurrentItem) {
		foundItemIDs.push(item.id)
	}
	return isCurrentItem
})

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
const traitDataSubstitutions: Record<string, string> = {
	'{e41d146c}': 'TFT6_Arcanist',
	'{568f4f5c}': 'TFT6_Assassin',
	'{161a5685}': 'TFT6_Syndicate',
	'{b7403726}': 'TFT6_Bodyguard',
	'{dbb82b57}': 'TFT6_Bruiser',
	'{d392bf9c}': 'TFT6_Challenger',
	'{9450bffc}': 'TFT6_Chemtech',
	'{42e1fbf0}': 'TFT6_Clockwork',
	'{7b9d79e4}': 'TFT6_Colossus',
	'{32c4c2eb}': 'TFT6_Debonair',
	'{4f6f1a9d}': 'TFT6_Enchanter',
	'{0907e6f1}': 'TFT6_Enforcer',
	'{7a7004b4}': 'TFT6_Glutton',
	'{c51ec5be}': 'TFT6_Hextech',
	'{cac372b9}': 'TFT6_Innovator',
	'{407dfc2b}': 'TFT6_Mastermind',
	'{de28b133}': 'TFT6_Mercenary',
	'{5dfaa4aa}': 'TFT6_Mutant',
	'{e6a2f180}': 'TFT6_Rivals',
	'{bd30b5b9}': 'TFT6_Scholar',
	'{8b9f7f1a}': 'TFT6_Scrap',
	'{3e362a6e}': 'TFT6_Sniper',
	'{8e9af226}': 'TFT6_Socialite',
	'{b3cf9aef}': 'TFT6_Striker',
	'{69d4c0d0}': 'TFT6_Transformer',
	'{b669014b}': 'TFT6_Twinshot',
	'{7c57b394}': 'TFT6_Yordle',
	'{396d5623}': 'TFT6_YordleLord',
}

const mSpellCalculationsSubstitutions: Record<string, string> = {
	'{197fbc1c}': 'UNKNOWN', // Unused on Tibbers ModifiedAllyPercentASBase?
	'{5c260301}': 'TotalASBoost',
	'{a7f7ee8e}': 'ModifiedASBoost',
	'{7fd62dab}': 'ModifiedAttackDamage',
	'{7ad6f313}': 'ModifiedBaseHealing', // Unused on Senna
	'{e7712601}': 'ModifiedBonusAttackSpeed',
	'{a9241a3b}': 'ModifiedBonusAS',
	'{5b31e270}': 'ModifiedBonusDamage', //TODO Galio uses CritBonusDamage so these need to be disambiguated
	'{4f553e5f}': 'ModifiedBonusHealth',
	'{eeac92d1}': 'ModifiedBonusLightningDamage',
	'{2694e795}': 'ModifiedBonusOnHit',
	'{2cac12ec}': 'ModifiedBuffDuration',
	'{9e7b214b}': 'ModifiedDamageAmount',
	'{08a55045}': 'ModifiedDamageFinal',
	'{446c04fa}': 'ModifiedDamagePerSecond',
	'{605f22d8}': 'ModifiedHealAmount',
	'{822057e4}': 'ModifiedMagicDamage', //TODO unify with ModifiedDamage? ModifiedDamage already groups MagicDamage
	'{3a39e14f}': 'ModifiedPercentHealing',
	'{6fd94775}': 'ModifiedPercentHealth',
	'{bed1d1a3}': 'ModifiedReducedDamageToCC', // Unused on Tahm Kench
	'{8ccbbddb}': 'ModifiedShieldAmount',
	'{1012a6c0}': 'ModifiedRangedASBoost',
	'{a808e8d9}': 'ModifiedShieldDR',
	'{1321b8c9}': 'ModifiedShielding',
	'{f2f64370}': 'ModifiedTransformHealth',
}
const mDataValueSubstitutions: Record<string, string> = {
	'{6ad2d2c9}': 'UNKNOWN', // Unused on Tibbers AllyPercentASBase?
	'{fcfce396}': 'ADMult',
	'{bc3d5e29}': 'ADPercent',
	'{000f6884}': 'ASBoost',
	'{fab7c982}': 'ASPercent', //TODO ModifiedASBoost
	'{8832edd1}': 'BaseSpinDamage', //TODO ModifiedDamage
	'{35783862}': 'BonusOnHit',
	'{c976d37b}': 'BonusLightningDamage',
	'{f7adf19d}': 'CritBonusDamage',
	'{26aa1808}': 'DamageFinal',
	'{0fca4668}': 'HealingPerAttack', //TODO ModifiedHealing
	'{f12d8928}': 'MaxHealthPercent',
	'{fa6d190b}': 'MeleeDamagePercent', //TODO TotalDamage
	'{15d27f09}': 'RangedADPercentBase', //TODO TotalDamage
	'{df3d2f5f}': 'PercentAD',
	'{608d099c}': 'PercentArmorDamage',
	'{7ac38453}': 'PercentAttackDamage',
	'{6f755c2e}': 'PercentPercentADDamage',
	'{112cdf9c}': 'PercentHealing',
	'{b8dc87fd}': 'RangedASBoost',
	'{a95a0f9b}': 'RocketLauncherPercentAD',
	'{0f565fe1}': 'ShieldDamage',
	'{31367dd8}': 'Shielding',
	'{ac0b3494}': 'SpinDamage',
	'{2dac49dd}': 'TransformHealth',
	'{3118f99b}': 'ReducedDamageToCC', // Tahm Kench unused
	'{a6febc4a}': 'ShieldDR',
}
const mStatSubstitutions: Record<number, BonusKey> = {
	1: BonusKey.Armor,
	2: BonusKey.AttackDamage,
	11: BonusKey.Health,
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

const championsPath = path.resolve(outputFolder, 'champion')
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
				traitEntry.TraitData = traitDataSubstitutions[rawTrait]
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
			const variables: Record<string, number[]> = {}
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

// Normalize Traits/Items

const normalizeKeys: Record<string, BonusKey> = {
	AbilityPower: BonusKey.AbilityPower,
	SP: BonusKey.AbilityPower,
	BaseAP: BonusKey.AbilityPower,
	AttackDamage: BonusKey.AttackDamage,
	BaseAD: BonusKey.AttackDamage,
	ADBoost: `Bonus${BonusKey.AttackDamage}` as BonusKey,
	AttackSpeed: BonusKey.AttackSpeed,
	Health: BonusKey.Health,
	MagicResist: BonusKey.MagicResist,
	CritChanceAmpPercent: BonusKey.CritChance,
	CritDamageAmp: BonusKey.CritMultiplier,
	CritAmpPercent: BonusKey.CritMultiplier,
}

const stringIDReplacements: Record<string, string> = {
	'b4a90a5d': 'ProcChance',
	// '0acd95c2': 'ImperialBonusDamage',
	// 'f469c9e6': 'TyrantTooltipBonusDamage',
	'45564848': 'InnovationStarLevel', //TODO actual string
	'97ea7bfc': 'InnovatorStarLevelMultiplier', //TODO actual string
	'5263ba40': 'JinxEmpoweredAS',
	'2a50526a': 'JinxASDuration',
	'a859d7b0': 'ViManaReduction',
	'3b173c39': 'ViPunchRange', //TODO verify
	'471b1a16': 'TickRate',
	'd0539890': 'ManaPerTick',
	'6c155e99': 'OmnivampPercent',
	'f9f3a081': 'ManaPerSecond',
	// '65722d9c': 'ADAPBase',
	// '96ca059f': 'ADAPPerCast',
	// 'b3105623': 'ManaPerAllyAttack',
	'70ed38c6': 'DetainDuration',
	'd2b7f6f1': 'DetainCount', //TODO actual string
	'2f744e2b': 'TeamAbilityPower',
	'faa12163': 'ArcanistAbilityPower',
	'51aec5d2': 'BonusPerAugment',
	'cbb3a34f': 'AttackSpeedBonus',
	'ed1f9fc2': 'PercentManaReduction',
	'268f634e': 'CritAmpPercent',
	'9f2eb1e2': 'CritChanceAmpPercent',
	'5cc08b27': 'NumComponents',
	'94c6a08c': 'HPShieldAmount',
	'47343861': 'MagicResist',
	'98396b21': 'HealShieldBoost',
	'16394c87': BonusKey.HexRangeIncrease,
	'75994f47': 'PercentDamageIncrease',
	'17cfa971': 'BurstDuration',
	'867bc055': 'SyndicateIncrease',
	'45c7ed6b': 'BonusCritDmgPerCritAbove100',
	'd34ac151': 'BonusCritDamage',
	'5cc52ba8': 'HexRadius',
	'a861afa0': 'CostIncrease',
	'c4b5579c': 'DodgeChance',
	'c9f222c0': 'HealTickRate',
	'7b6cc2f7': 'MissingHealthHeal',
	'033de552': 'AoEDamageReduction',
	'510fdb6a': 'BanishDuration',
	'9b1e8f37': 'HexRange',
	'fe079f34': 'MRShred',
	'b223097c': 'MRShredDuration',
	'df6f64b9': 'ManaRatio',
	'c3360f16': 'DamageCap', //TODO actual name
	// 'c425872e': 'StasisDuration',
	'7c694b41': 'ArmorPerEnemy', //TODO monitor. unverifiable MRPerEnemy/ArmorPerEnemy
	'7ba8c0e3': 'MRPerEnemy', //TODO monitor. unverifiable MRPerEnemy/ArmorPerEnemy
	'1ee760be': '1StarAoEDamage',
	'a3b999e9': '2StarAoEDamage',
	'156febb8': '3StarAoEDamage',
	'b5c2a66b': '4StarAoEDamage',
	'6688a0d5': 'CritDamageBlock', //TODO actual name
	'deada01e': 'SmallBonusPct',
	'b8ae7546': 'LargeBonusPct',
	'ad16f688': 'OmniVamp',
	'12a15e9e': '1StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'15144cec': '2StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'440f813d': '3StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'79e2ec7b': '4StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'a2b76524': 'SpellShieldDuration',
	'f924a46e': '1StarAD', //TODO actual name
	'82618485': '2StarAD', //TODO actual name
	'1b738810': '3StarAD', //TODO actual name
	'eb990bd7': '4StarAD', //TODO verify
	'8c7c8547': 'Tooltip1StarBonusAD',
	'd4afa164': 'Tooltip2StarBonusAD',
	'edb2fb99': 'Tooltip3StarBonusAD',
	'd49caf5d': 'BonusAP',
	'57706a69': 'BurnPercent',
	'97e52ce8': 'BurnDuration',
	'2161bfa2': 'GrievousWoundsPercent',
	'b3b8f644': 'StackingAD', //TODO monitor. unverifiable StackingAP
	'cb9689ca': 'StackingAP', //TODO actual name, monitor. unverifiable StackingAD
	'9396f00d': 'StackCap', //TODO monitor. unverifiable BonusResistsAtStackCap
	'b55019fa': 'BonusResistsAtStackCap', //TODO monitor. unverifiable StackCap
	'276ba2c8': 'MultiplierForDamage',
	'0034a6ef': 'ShieldHealthPercent',
	'5deb4eb2': 'APPerInterval',
	'a7db7345': 'IntervalSeconds',
	'7ff4f3b6': 'SummonedStatReduction',
	'4b9a3b61': 'FlatManaRestore',
	'6fb9af6a': '1StarShieldValue',
	'0d46330d': '2StarShieldValue',
	'829e6cec': '3StarShieldValue',
	'c78af25f': '4StarShieldValue',
	'5100c273': 'TooltipBonusAS',
	'9f5117db': 'AttackAccuracy', //TODO actual name
	'5079c7a2': 'ArmorReductionPercent',
	'cc9fefa7': 'ArmorBreakDuration',
	'353ede36': 'CritDamageAmp',
	'5200c406': 'TooltipBonusAP',
	'19a89153': 'BaseAD', //TODO monitor. unverifiable BaseAP
	'41cb628d': 'BaseAP', //TODO monitor. unverifiable BaseAD
	'ae49cc70': 'AdditionalAD', //TODO actual name, monitor. unverifiable BonusAP
	'c0c9af7f': 'AdditionalAP', //TODO actual name, monitor. unverifiable BonusAD
	'f2474447': 'TooltipBonus',
	'9fd37c1c': 'UNUSED_APTimer', //TODO verify https://leagueoflegends.fandom.com/wiki/Chalice_of_Power_(Teamfight_Tactics)
	'fa1ef605': 'UNUSED_MagicDamageReductionMultiplier', //TODO verify https://leagueoflegends.fandom.com/wiki/Dragon%27s_Claw_(Teamfight_Tactics)
	'79a4455a': 'CritReduction',
	'b1442c34': 'StealthDuration', //TODO verify
	'5c51b509': 'Colossus/Mutant/Socialite', //TODO ??
	'7f1304b2': 'AbilityPower',
	'df962703': 'ADBoost',
	'c9b0e3af': 'PercentOmnivamp',
	'ce492058': 'ManaGrant',
	'2fb31c01': 'Frequency',
	'e86b1aa9': 'BonusHealthTooltip',

	'76882e8f': 'MutantCyberHealth',
	'190fb0a2': 'MutantMetamorphosisArmorMR',
}

const unreplacedIDs = new Set(Object.keys(stringIDReplacements))

const traitKeys = (traits as TraitData[])
	.map(trait => {
		const nameKey = trait.apiName.split('_')[1]
		return `${nameKey} = '${nameKey}'`
	})
	.sort((a, b) => a.localeCompare(b))
	.join(', ')

traits.forEach((trait: TraitData) => {
	for (const normalize in normalizeKeys) {
		trait.desc = trait.desc.replace(normalize, normalizeKeys[normalize])
	}
	trait.effects.forEach(effect => {
		Object.keys(effect.variables).forEach(key => {
			const originalValue = effect.variables[key]
			if (key.startsWith('{')) {
				const keyHash = key.slice(1, -1)
				const replacement = stringIDReplacements[keyHash]
				if (replacement) {
					unreplacedIDs.delete(keyHash)
					delete effect.variables[key]
					key = replacement
					effect.variables[key] = originalValue
				}
			}
			for (const normalize in normalizeKeys) {
				delete effect.variables[key]
				key = key.replace(normalize, normalizeKeys[normalize])
				effect.variables[key] = originalValue
			}
		})
	})
})
const traitKeysString = `export enum TraitKey {\n\t${traitKeys}\n}`

currentItems.forEach((item: ItemData) => {
	if (item.id === ItemKey.HandOfJustice) {
		const invalidKey = 'BonusAD'
		if (item.effects[invalidKey] != null) {
			delete item.effects[invalidKey]
		} else {
			console.log('Normalize', ItemKey.HandOfJustice, invalidKey, 'missing', item.effects)
		}
	}
	for (const normalize in normalizeKeys) {
		item.desc = item.desc.replace(normalize, normalizeKeys[normalize])
	}
	Object.keys(item.effects).forEach(key => {
		const originalValue = item.effects[key]
		if (key.startsWith('{')) {
			const keyHash = key.slice(1, -1)
			const replacement = stringIDReplacements[keyHash]
			if (replacement) {
				unreplacedIDs.delete(keyHash)
				delete item.effects[key]
				key = replacement
				item.effects[key] = originalValue
			}
		}
		for (const normalize in normalizeKeys) {
			delete item.effects[key]
			key = key.replace(normalize, normalizeKeys[normalize])
			item.effects[key] = originalValue
		}
	})
})
const itemKeys = currentItems
	.sort((a, b) => a.id - b.id)
	.map(({name, id}) => {
		const key = name.replace(/['.]/g, '').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')
		return `${key} = ${id}`
	})
	.join(', ')
const itemKeysString = `export enum ItemKey {\n\t${itemKeys}\n}`

if (unreplacedIDs.size) {
	console.log('Unused substitutions', unreplacedIDs)
}

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

const RETIRED_AUGMENT_NAME_KEYS = [
	'clockwork crest',
	'arcanist soul',
	'academy crown',
	'assassin soul',
	'bodyguard soul',
	'bruiser soul',
	'challenger soul',
	'chemtech soul',
	'enforcer soul',
	'imperial crown',
	'mutant soul',
	'sniper soul',
	'syndicate soul',
	'chemical overload iii',
	'runic shield iii',
	'thrill of the hunt iii',

	'academy heart',
	'imperial heart',
	'dual rule',
	'protector heart',
	'academy crest',
	'cram session',
	'imperial crest',
	'all for one',
	'protector crest',
	'academy soul',
	'imperial soul',
	'protector soul',
	'protector crown',
]

const UNUSED_AUGMENT_NAME_KEYS = [
	'scoped weapons',
	'radiant grab bag',
	'high five',
	`archangel's embrace i`,
	`archangel's embrace iii`,
]

const EFFECTS_SUBSTITUTIONS: Record<string, string> = {
	'{927ebb75}': 'APShield',
	'{4e39b1d2}': 'MaxHealthShield',
	'{043ce1d5}': 'MissingHPHeal',
	'{6a311cec}': 'Stats',
	'{69247755}': 'InvulnDuration',
	'{cbe45061}': 'HealthThreshold1',
	'{4ed1f1d8}': 'Delay',
	'{6c216145}': 'NumItems',
	'{ec9a04d1}': 'MaxArmySizeIncrease',
	'{cb270598}': 'DodgeIncrease',
	'{516374d5}': 'XP',
	'{c43e4438}': 'RerollPercent',
	'{d1da1e25}': 'NumBlueOrbs',
	'{d6f612f7}': 'NumGoldOrbs',
	'{25083082}': 'NumGrayOrbs',
	'{4d2cb08a}': 'BounceReduction',
	'{1c1b4e2d}': 'NumGloves',
	'{4bff7d1c}': 'TooltipMaxHealth',
	'{65358e6c}': 'NumRemovers',
	'{d8f646f3}': 'ManaRegen',
	'{9292a6c1}': 'Chance',
	'{aec10c49}': 'NumDummies',
	'{57de426e}': 'PercentManaReave',
	'{682e31d9}': 'Augment1Gold',
	'{8e9f969c}': 'Augment2Gold',
	'{248fb55f}': 'Augment3Gold',
	'{cc06ab16}': 'Combats',
	'{23f2b648}': 'DamageCap',
	'{4d66b1e0}': 'GoldIncrement',
	'{35be99a8}': 'CloneHealth',
	'{ad16f688}': 'Omnivamp',
	'{9c9fe9fd}': 'MaxAmp',
	'{5cc08b27}': 'NumComponents',
	'{513ad265}': 'HP',
	'{b15c83f9}': 'PercentStats',
	'{1848d006}': 'DefenseBonus',
	'{589ea6c0}': 'DefensePercent',
	'{2526f0eb}': 'PerSurvivingUnit',
	'{d49caf5d}': 'BonusAP',
	'{7adc1220}': 'RegenPerTick',
	'{c3360f16}': 'ShieldHealth',
	'{78bc82ef}': 'NumChamps',
	'{009085db}': 'ManaPercent',
	'{0cb95e9d}': 'HealReductionPercent',
	'{2aee64b4}': 'ArmorPenPercent',
	'{ea6108de}': 'ItemChance',
	'{d9291863}': 'ADPerStarLevel',
	'{4f70b3d1}': 'TotalBurnPercent',
	'{2161bfa2}': 'GrievousWoundsPercent',
	'{ffea5c28}': 'ManaReavePercent',
	'{9e368069}': 'InterestCap',
	'{0b39c7c2}': 'HealShieldIncrease',
	'{5d23d997}': 'MagicPen',
	'{5332680a}': 'HealingReduction',
	'{83e12d6f}': 'BonusStats',
	'{33268c65}': 'MissingHeal',
	'{2e2d4a01}': 'HealCap',
	'{d358c94e}': 'ThresholdGold',
	'{5b299902}': 'CD',
	'{1b64eb90}': 'NumDice',
	'{e3d58c55}': 'NumTomes',
	'{962760a9}': 'PercentAbilityPower',
	'{a13cb3fa}': 'EggTurns',
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
			tier = 2
		}
		const manualTier = MANUAL_TIER_DESIGNATIONS[item.name]
		if (manualTier) {
			if (tier) {
				console.log('Multiple tier designations manually overwritten', tier, manualTier, item)
			}
			tier = manualTier
		}
		if (!tier) {
			console.log(item)
		}
		const effects = item.effects
		for (const key in effects) {
			const substitution = EFFECTS_SUBSTITUTIONS[key]
			if (substitution) {
				const value = effects[key]
				delete effects[key]
				effects[substitution] = value
			} else if (effects[key] === "null") {
				delete effects[key]
			}
		}
		const data: AugmentData = {
			tier,
			name: item.name,
			desc: item.desc,
			effects: effects as Record<string, number>,
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
	`export const activeAugments: AugmentData[] = ` + JSON.stringify(activeAugments, undefined, '\t'),
	`export const inactiveAugments: AugmentData[] = ` + JSON.stringify(unreleasedAugments, undefined, '\t'),
]

// Output

await Promise.all([
	fs.writeFile(path.resolve(outputFolder, 'augments.ts'), outputAugmentSections.join('\n\n')),
	fs.writeFile(path.resolve(outputFolder, 'champions.ts'), `import type { ChampionData } from '../index'\n\nexport const champions: ChampionData[] = ` + JSON.stringify(outputChampions, undefined, '\t')),
	fs.writeFile(path.resolve(outputFolder, 'traits.ts'), `import type { TraitData } from '../index'\n\n${traitKeysString}\n\nexport const traits: TraitData[] = ` + JSON.stringify(traits, undefined, '\t').replace(/"null"/g, 'null')),
	fs.writeFile(path.resolve(outputFolder, 'items.ts'), `import type { ItemData } from '../index'\n\n${itemKeysString}\n\nexport const items: ItemData[] = ` + JSON.stringify(currentItems, undefined, '\t')),
])

// Validation

const knownAugmentNames = (await fs.readFile(path.resolve(outputFolder, 'augments-known.txt'), 'utf8'))
	.toLowerCase()
	.split('\n')
	.filter(name => name)
const remainingKnownAugmentNames = new Set(knownAugmentNames)
const foundAugmentNames = activeAugments.map(augment => augment.name.toLowerCase())
const remainingFoundAugmentNames = new Set(foundAugmentNames)
for (const foundName of foundAugmentNames) {
	if (remainingKnownAugmentNames.delete(foundName)) {
		remainingFoundAugmentNames.delete(foundName)
	}
}

if (remainingKnownAugmentNames.size || remainingFoundAugmentNames.size) {
	console.log('Augments missing', remainingKnownAugmentNames, remainingFoundAugmentNames)
}

const uniqueActiveAugments: Record<string, [AugmentData | undefined, AugmentData | undefined, AugmentData | undefined]> = {}
activeAugments.forEach(augment => {
	if (!augment.tier) {
		console.log(augment)
		return
	}
	const nameKey = augment.name.replace(/ I+$/, '')
	if (uniqueActiveAugments[nameKey] === undefined) {
		uniqueActiveAugments[nameKey] = [undefined, undefined, undefined]
	}
	if (uniqueActiveAugments[nameKey][augment.tier - 1]) {
		console.log('Multiple augments at tier', augment, uniqueActiveAugments[nameKey][augment.tier - 1])
	}
	uniqueActiveAugments[nameKey][augment.tier - 1] = augment
})
const uniqueActiveAugmentNames = Object.keys(uniqueActiveAugments)
console.log('Augments Active:', activeAugments.length, '/', 'Unique:', uniqueActiveAugmentNames.length, '/', 'Unreleased:', unreleasedAugments.length)
