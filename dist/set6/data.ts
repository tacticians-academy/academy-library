import type { AugmentTierProbability } from '../index'

export const augmentTierProbabilities: AugmentTierProbability = [100, [
	[65, [
		[60, [
			[0], [77], [23],
		]],
		[34, [
			[0], [82], [18],
		]],
		[6, [
			[75], [0], [25],
		]],
	]],
	[29, [
		[55, [
			[0], [75], [25],
		]],
		[38, [
			[0], [64], [36],
		]],
		[7, [
			[0], [0], [100],
		]],
	]],
	[6, [
		[50, [
			[0], [67], [33],
		]],
		[33, [
			[0], [100], [0],
		]],
		[17, [
			[0], [0], [100],
		]],
	]],
]]

export const LOCKED_STAR_LEVEL: Record<string, number> = {
	TFT6_MalzaharVoidling: 1,
	TFT6_Tibbers: 2,
	TFT6_HexTechDragon: 3,
}

export const RETIRED_ITEM_NAMES = [
	`Battlecast Plating`,
	`Inferno's Cinder`,
	`Ironclad Emblem`,
	`Legionnaire Emblem`,
	`Spellweaver Emblem`,
	`Spirit of the Dragon`,
	`Vanguard's Cuirass`,
]

export const EMBLEM_ITEM_IDS = [
	18, // Imperial
	28, // Challenger
	38, // Arcanist
	48, // Academy
	58, // Bodyguard
	68, // Syndicate
	78, // Chemtech
	89, // Assassin
	2190, // Mutant
	2191, // Clockwork
	2192, // Mercenary
	2193, // Socialite
	2194, // Enforcer
	2195, // Scrap
	2196, // Protector
	2197, // Bruiser
	2198, // Innovator
	2199, // Sniper
	2200, // Scholar
]

export const RETIRED_AUGMENT_NAME_KEYS = [
	'academy soul',
	'arcanist soul',
	'assassin soul',
	'bodyguard soul',
	'bruiser soul',
	'challenger soul',
	'chemtech soul',
	'clockwork crest',
	'imperial soul',
	'mutant soul',
	'protector soul',
	'sniper soul',
	'syndicate soul',
]

export const UNUSED_AUGMENT_NAME_KEYS = [
	'scoped weapons',
	'tinker',
]
