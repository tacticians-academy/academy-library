export type SpellVariables = Record<string, number[]>
export type EffectVariables = {[key in string]?: number | null}

export type AugmentTier = 1 | 2 | 3

export interface AugmentData {
	tier: AugmentTier
	name: string
	groupID: string
	desc: string
	icon: string
	effects: EffectVariables
}

export interface ItemData {
	apiName?: string
	desc: string | null
	effects: EffectVariables
	from: number[] | null
	icon: string
	id: number | null
	name: string
	unique: boolean
	composition?: string[]
	incompatibleTraits?: string[]
	associatedTraits?: never[]
}

export type AugmentTierProbability = [probability: number, children?: [AugmentTierProbability, AugmentTierProbability, AugmentTierProbability]]

export type ItemTypeKey = 'component' | 'completed' | 'emblem' | 'shadow' | 'radiant' | 'ornn' | 'support' | 'shimmerscale' | 'consumable' | 'hexbuff' | 'mod' | 'unreleased'

export interface AugmentFlashcard {
	id: string
	name: string
	tiers: AugmentTier[]
	description: string
	icons: string[]
}
export interface ItemFlashcard {
	id: string
	name: string
	type: ItemTypeKey
	description: string
	icon: string
	from: number[]
	unique: boolean
}
export interface ChampionFlashcard {
	id: string
	name: string
	icon: string
	stats: ChampionStats
	ability: {
		name: string
		description: string
		variables: SpellVariables
		icon: string
	}
}

export enum BonusKey {
	Armor = 'Armor',
	ArmorShred = 'ArmorShred',
	AttackAccuracy = 'AttackAccuracy',
	AttackDamage = 'AD',
	AttackSpeed = 'AS',
	AbilityPower = 'AP',
	CritChance = 'CritChance',
	CritMultiplier = 'CritDamage',
	CritReduction = 'CritReduction',
	DamageIncrease = 'DamagePercent',
	DamageReduction = 'DamageReduction',
	DodgeChance = 'DodgeChance',
	HexRangeIncrease = 'HexRangeIncrease',
	Health = 'HP',
	HealShieldBoost = 'HealShieldBoost',
	CurrentHealth = 'CurrentHP',
	MissingHealth = 'MissingHP',
	CurrentHealthPercent = 'CurrentHPPercent',
	MissingHealthPercent = 'MissingHPPercent',
	MagicResist = 'MR',
	MagicResistShred = 'MRShred',
	Mana = 'Mana',
	ManaRestore = 'ManaRestore',
	ManaRestorePerAttack = 'FlatManaRestore',
	ManaReduction = 'ManaCost',
	ManaReductionPercent = 'PercentManaReduction',
	MoveSpeed = 'MoveSpeed',
	VampOmni = 'VampAllSources',
	VampPhysical = 'LifeSteal',
	VampSpell = 'OmniVamp',
}

export interface ChampionSpellMissileData {
	width?: number
	travelTime?: number
	speedInitial?: number
	_missileSpeed?: number
	speedMin?: number
	speedMax?: number
	acceleration?: number
	startDelay?: number
	tracksTarget?: boolean
}

export interface ChampionSpellData {
	name: string
	castTime?: number
	missile?: ChampionSpellMissileData
	variables: SpellVariables
	calculations: SpellCalculations
	cantCastWhileRooted?: true
	uninterruptable?: true
}

export const enum DamageType {
	physical = 'physical', magic = 'magic', true = 'true', heal = 'heal'
}

export type SpellCalculations = Record<string, SpellCalculation>
export interface SpellCalculationSubpart {
	variable?: string
	starValues?: number[]
	stat?: string
	statFromTarget?: boolean
	ratio?: number
	max?: number
}
export interface SpellCalculationPart {
	operator?: string
	subparts: SpellCalculationSubpart[]
}
export interface SpellCalculation {
	damageType?: DamageType
	parts: SpellCalculationPart[]
	asPercent?: boolean
}

export interface ChampionStats {
	armor: number
	attackSpeed: number
	critChance: number | null
	critMultiplier: number
	damage: number
	hp: number | undefined
	initialMana: number
	magicResist: number
	mana: number
	moveSpeed: number
	range: number
}

export interface ChampionData {
	apiName: string
	name: string
	ability?: AbilityDataRaw
	icon: string
	cost?: number
	starLevel?: number
	isSpawn: boolean
	traits: string[]
	teamSize?: number
	stats: ChampionStats
	basicAttackMissileSpeed?: number
	critAttackMissileSpeed?: number
	passive: ChampionSpellData | undefined
	spells: ChampionSpellData[]
	missiles: ChampionSpellData[]
}

export interface AbilityDataRaw {
	desc: string | null
	icon: string | null
	name: string | null
	variables: {name: string, value: number[]}[]
}
export interface AbilityData {
	desc: string
	icon: string
	name: string
	variables: SpellVariables
}

export interface StreakData {
	mMinimumStreakLength: number
	mMaximumStreakLength: number | null
	mGoldRewardAmount: number
}

export interface TraitEffectData {
	maxUnits: number
	minUnits: number
	style: number
	variables: EffectVariables
}
export interface TraitData {
	apiName?: string
	desc: string
	effects: TraitEffectData[]
	icon: string
	name: string
}

export type UnitPools = Record<string, Record<string, number | undefined>>
