export type SpellVariables = Record<string, number[]>
export type EffectVariables = Record<string, number | null>

export type AugmentTier = 1 | 2 | 3

export interface AugmentData {
	tier: AugmentTier,
	name: string
	desc: string
	icon: string
	effects: EffectVariables,
}

export interface ItemData {
	desc: string
	effects: EffectVariables
	from: number[]
	icon: string
	id: number
	name: string
	unique: boolean
}

export type AugmentTierProbability = [probability: number, children?: [AugmentTierProbability, AugmentTierProbability, AugmentTierProbability]]

export type ItemTypeKey = 'component' | 'completed' | 'spatula' | 'duos' | 'consumable' | 'radiant' | 'ornn' | 'hexbuff' | 'mercenaryDice' | 'unreleased'

export interface AugmentFlashcard {
	id: string
	name: string
	tiers: AugmentTier[]
	description: string
	icons: string[]
}
export interface ItemFlashcard {
	id: number
	name: string
	type: ItemTypeKey
	description: string
	icon: string
	from: number[]
	unique: boolean
}

export enum BonusKey {
	Armor = 'Armor',
	AttackDamage = 'AD',
	AttackSpeed = 'AS',
	AbilityPower = 'AP',
	CritChance = 'CritChance',
	CritMultiplier = 'CritDamage',
	CritReduction = 'CritReduction',
	DamageReduction = 'DamageReduction',
	HexRangeIncrease = 'HexRangeIncrease',
	Health = 'HP',
	MagicResist = 'MR',
	Mana = 'Mana',
	VampOmni = 'VampAllSources',
	VampPhysical = 'LifeSteal',
	VampSpell = 'OmniVamp',
}

export interface ChampionAbilityVariable {
	name: string
	value: number[] | null
}
export interface ChampionAbility {
	desc: string | null
	icon: string
	name: string | null
	variables: ChampionAbilityVariable[]
}

export interface ChampionSpellMissileData {
	width?: number
	travelTime?: number
	speedInitial?: number
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
	cantCastWhileRooted?: true
	uninterruptable?: true
}

export interface ChampionData {
	apiName: string
	name: string
	icon: string
	cost?: number
	starLevel?: number
	isSpawn: boolean
	traits: string[]
	teamSize?: number
	stats: {
		armor: number
		attackSpeed: number
		critChance: number | null
		critMultiplier: number
		damage: number
		hp: number
		initialMana: number
		magicResist: number
		mana: number
		moveSpeed: number
		range: number
	},
	basicAttackMissileSpeed?: number
	critAttackMissileSpeed?: number
	spells: ChampionSpellData[]
}

export interface TraitEffectData {
	maxUnits: number
	minUnits: number
	style: number
	variables: EffectVariables
}
export interface TraitData {
	apiName: string
	desc: string
	effects: TraitEffectData[]
	icon: string
	name: string
}
