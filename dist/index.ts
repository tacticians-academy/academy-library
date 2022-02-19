export type AugmentTier = 1 | 2 | 3

export interface AugmentData {
	tier?: AugmentTier,
	name: string
	desc: string
	icon: string
	effects: Record<string, number>,
}

export type AugmentTierProbability = [probability: number, children?: [AugmentTierProbability, AugmentTierProbability, AugmentTierProbability]]

export const enum BonusKey {
	Armor = 'Armor',
	AttackDamage = 'AD',
	AttackSpeed = 'AS',
	AbilityPower = 'AP',
	CritChance = 'CritChance',
	CritMultiplier = 'CritDamage',
	CritReduction = 'CritReduction',
	HexRangeIncrease = 'HexRangeIncrease',
	Health = 'HP',
	MagicResist = 'MR',
	Mana = 'Mana'
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
	variables: Record<string, number[]>
	cantCastWhileRooted?: true
	uninterruptable?: true
}

export interface ChampionData {
	ability?: ChampionAbility
	spells: ChampionSpellData[]
	basicAttackMissileSpeed?: number
	critAttackMissileSpeed?: number
	apiName: string
	cost?: number
	isSpawn: boolean
	starLevel?: number
	teamSize?: number
	icon: string
	name: string
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
	traits: string[]
}

export interface TraitEffectData {
	maxUnits: number
	minUnits: number
	style: number
	variables: Record<string, number | null>
}
export interface TraitData {
	apiName: string
	desc: string
	effects: TraitEffectData[]
	icon: string
	name: string
}

export interface ItemData {
	desc: string
	effects: Record<string, number>
	from: number[]
	icon: string
	id: number
	name: string
	unique: boolean
}
