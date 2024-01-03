import type { StreakData, UnitPools } from '../index'

export const shopBadLuckProtection: Record<string, number> | undefined = {
	'ForceFunctionMax': 35,
	'ForceFunctionDivisor': 2,
	'Tier1StopForce': 17,
	'Tier2StopForce': 13,
	'Tier3StopForce': 8,
	'Tier4StopForce': 6,
	'Tier5StopForce': 6,
	'StopTrackingTier1AtThisLevel': 7,
	'StopTrackingTier2AtThisLevel': 9,
	'BeginTrackingTier2AtThisLevel': 3,
	'BeginTrackingTier3AtThisLevel': 5,
	'BeginTrackingTier4AtThisLevel': 7,
	'BeginTrackingTier5AtThisLevel': 9,
}

export const headlinerSystemParameters: Record<string, number> | undefined = undefined

export const dropRates: Record<string, number[][]> = {
	'Shop': [
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[0.75, 0.25, 0, 0, 0],
		[0.550000011920929, 0.30000001192092896, 0.15000000596046448, 0, 0],
		[0.44999998807907104, 0.33000001311302185, 0.20000000298023224, 0.019999999552965164, 0],
		[0.25, 0.4000000059604645, 0.30000001192092896, 0.05000000074505806, 0],
		[0.1899999976158142, 0.30000001192092896, 0.3499999940395355, 0.15000000596046448, 0.009999999776482582],
		[0.1599999964237213, 0.20000000298023224, 0.3499999940395355, 0.25, 0.03999999910593033],
		[0.09000000357627869, 0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 0.1599999964237213],
		[0.05000000074505806, 0.10000000149011612, 0.20000000298023224, 0.4000000059604645, 0.25],
		[0.009999999776482582, 0.019999999552965164, 0.11999999731779099, 0.5, 0.3499999940395355],
	],
	'Shop_PlusOneLevel': [
		[1, 0, 0, 0, 0],
		[0.75, 0.25, 0, 0, 0],
		[0.550000011920929, 0.30000001192092896, 0.15000000596046448, 0, 0],
		[0.44999998807907104, 0.33000001311302185, 0.20000000298023224, 0.019999999552965164, 0],
		[0.25, 0.4000000059604645, 0.30000001192092896, 0.05000000074505806, 0],
		[0.1899999976158142, 0.30000001192092896, 0.3499999940395355, 0.15000000596046448, 0.009999999776482582],
		[0.15000000596046448, 0.20000000298023224, 0.3499999940395355, 0.25, 0.05000000074505806],
		[0.10000000149011612, 0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 0.15000000596046448],
		[0.05000000074505806, 0.10000000149011612, 0.20000000298023224, 0.4000000059604645, 0.25],
		[0.009999999776482582, 0.019999999552965164, 0.11999999731779099, 0.5, 0.3499999940395355],
		[0.009999999776482582, 0.019999999552965164, 0.11999999731779099, 0.5, 0.3499999940395355],
	],
}

export const winStreaks: StreakData[] = [
	{
		mMinimumStreakLength: 2,
		mMaximumStreakLength: 3,
		mGoldRewardAmount: 1,
	},
	{
		mMinimumStreakLength: 4,
		mMaximumStreakLength: 4,
		mGoldRewardAmount: 2,
	},
	{
		mMinimumStreakLength: 5,
		mMaximumStreakLength: null,
		mGoldRewardAmount: 3,
	},
]

export const lossStreaks: StreakData[] = [
	{
		mMinimumStreakLength: 2,
		mMaximumStreakLength: 3,
		mGoldRewardAmount: 1,
	},
	{
		mMinimumStreakLength: 4,
		mMaximumStreakLength: 4,
		mGoldRewardAmount: 2,
	},
	{
		mMinimumStreakLength: 5,
		mMaximumStreakLength: null,
		mGoldRewardAmount: 3,
	},
]

export const tierBags: UnitPools = {
	'Set6_TierBag1': {
		'TFT6_Graves': 29,
		'TFT6_Singed': 29,
		'TFT6_Twitch': 29,
		'TFT6_Camille': 29,
		'TFT6_Caitlyn': 29,
		'TFT6_Darius': 29,
		'TFT6_Illaoi': 29,
		'TFT6_TwistedFate': 29,
		'TFT6_Ezreal': 29,
		'TFT6_Poppy': 29,
		'TFT6_Kassadin': 29,
		'TFT6_Garen': 29,
		'TFT6_Ziggs': 29,
	},
	'Set6_TierBag2': {
		'TFT6_Katarina': 22,
		'TFT6_Tristana': 22,
		'TFT6_Warwick': 22,
		'TFT6_Zilean': 22,
		'TFT6_Vi': 22,
		'TFT6_Zyra': 22,
		'TFT6_Blitzcrank': 22,
		'TFT6_Trundle': 22,
		'TFT6_Lulu': 22,
		'TFT6_KogMaw': 22,
		'TFT6_Swain': 22,
		'TFT6_Quinn': 22,
		'TFT6_Talon': 22,
	},
	'Set6_TierBag3': {
		'TFT6_Leona': 18,
		'TFT6_Zac': 18,
		'TFT6_Lissandra': 18,
		'TFT6_Shaco': 18,
		'TFT6_Gangplank': 18,
		'TFT6_Samira': 18,
		'TFT6_MissFortune': 18,
		'TFT6_Ekko': 18,
		'TFT6_Vex': 18,
		'TFT6_Heimerdinger': 18,
		'TFT6_Malzahar': 18,
		'TFT6_ChoGath': 18,
		'TFT6_Taric': 18,
	},
	'Set6_TierBag4': {
		'TFT6_Lux': 12,
		'TFT6_Yone': 12,
		'TFT6_DrMundo': 12,
		'TFT6_Jhin': 12,
		'TFT6_Seraphine': 12,
		'TFT6_Orianna': 12,
		'TFT6_Janna': 12,
		'TFT6_Urgot': 12,
		'TFT6_Sion': 12,
		'TFT6_Fiora': 12,
		'TFT6_Braum': 12,
	},
	'Set6_TierBag5': {
		'TFT6_Yuumi': 10,
		'TFT6_Viktor': 10,
		'TFT6_TahmKench': 10,
		'TFT6_Jayce': 10,
		'TFT6_Galio': 10,
		'TFT6_Jinx': 10,
		'TFT6_Kaisa': 10,
		'TFT6_Akali': 10,
	},
}
