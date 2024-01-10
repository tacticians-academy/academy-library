import type { StreakData, UnitPools } from '../index'

export const shopBadLuckProtection: Record<string, number> | undefined = {
	'ForceFunctionMax': 30,
	'ForceFunctionDivisor': 2,
	'Tier1StopForce': 15,
	'Tier2StopForce': 11,
	'Tier3StopForce': 7,
	'Tier4StopForce': 5,
	'Tier5StopForce': 5,
	'StopTrackingTier1AtThisLevel': 7,
	'StopTrackingTier2AtThisLevel': 9,
	'BeginTrackingTier2AtThisLevel': 3,
	'BeginTrackingTier3AtThisLevel': 5,
	'BeginTrackingTier4AtThisLevel': 7,
	'BeginTrackingTier5AtThisLevel': 9,
}

export const headlinerSystemParameters: Record<string, number> | undefined = {
	'RecentTraitNoRepeatNum': 4,
	'ChosenActivationStage': 1,
	'ChosenActivationRound': 3,
	'HeadlinerFrequency': 4,
	'1CostCurationRollThreshold': 4,
	'2CostCurationRollThreshold': 4,
	'3CostCurationRollThreshold': 4,
	'4CostCurationRollThreshold': 4,
	'5CostCurationRollThreshold': 4,
	'1CostChampNoRepeatNum': 7,
	'2CostChampNoRepeatNum': 7,
	'3CostChampNoRepeatNum': 7,
	'4CostChampNoRepeatNum': 5,
	'5CostChampNoRepeatNum': 4,
}

export const dropRates: Record<string, number[][]> = {
	'Shop': [
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[0.75, 0.25, 0, 0, 0],
		[0.550000011920929, 0.30000001192092896, 0.15000000596046448, 0, 0],
		[0.44999998807907104, 0.33000001311302185, 0.20000000298023224, 0.019999999552965164, 0],
		[0.30000001192092896, 0.4000000059604645, 0.25, 0.05000000074505806, 0],
		[0.1899999976158142, 0.3499999940395355, 0.3499999940395355, 0.10000000149011612, 0.009999999776482582],
		[0.18000000715255737, 0.25, 0.36000001430511475, 0.18000000715255737, 0.029999999329447746],
		[0.10000000149011612, 0.20000000298023224, 0.25, 0.3499999940395355, 0.10000000149011612],
		[0.05000000074505806, 0.10000000149011612, 0.20000000298023224, 0.4000000059604645, 0.25],
		[0.009999999776482582, 0.019999999552965164, 0.11999999731779099, 0.5, 0.3499999940395355],
	],
}

export const winStreaks: StreakData[] = [
	{
		mMinimumStreakLength: 3,
		mMaximumStreakLength: 4,
		mGoldRewardAmount: 1,
	},
	{
		mMinimumStreakLength: 5,
		mMaximumStreakLength: 5,
		mGoldRewardAmount: 2,
	},
	{
		mMinimumStreakLength: 6,
		mMaximumStreakLength: null,
		mGoldRewardAmount: 3,
	},
]

export const lossStreaks: StreakData[] = [
	{
		mMinimumStreakLength: 3,
		mMaximumStreakLength: 4,
		mGoldRewardAmount: 1,
	},
	{
		mMinimumStreakLength: 5,
		mMaximumStreakLength: 5,
		mGoldRewardAmount: 2,
	},
	{
		mMinimumStreakLength: 6,
		mMaximumStreakLength: null,
		mGoldRewardAmount: 3,
	},
]

export const tierBags: UnitPools = {
	'1': {
		'TFT3_Malphite': 50,
		'TFT3_Ziggs': 50,
		'TFT3_Fiora': 50,
		'TFT3_TwistedFate': 50,
		'TFT3_Poppy': 50,
		'TFT3_Graves': 50,
		'TFT3_Caitlyn': 50,
		'TFT3_Leona': 50,
		'TFT3_Zoe': 50,
		'TFT3_JarvanIV': 50,
		'TFT3_Xayah': 50,
		'TFT3_Illaoi': 50,
		'TFT3_Nocturne': 50,
	},
	'2': {
		'TFT3_Yasuo': 50,
		'TFT3_Darius': 50,
		'TFT3_Shen': 50,
		'TFT3_Ahri': 50,
		'TFT3_Blitzcrank': 50,
		'TFT3_Annie': 50,
		'TFT3_Lucian': 50,
		'TFT3_Rakan': 50,
		'TFT3_XinZhao': 50,
		'TFT3_Mordekaiser': 50,
		'TFT3_Nautilus': 50,
		'TFT3_Zed': 50,
		'TFT3_KogMaw': 50,
	},
	'3': {
		'TFT3_Ezreal': 50,
		'TFT3_Jayce': 50,
		'TFT3_MasterYi': 50,
		'TFT3_Vi': 50,
		'TFT3_Neeko': 50,
		'TFT3_Syndra': 50,
		'TFT3_Rumble': 50,
		'TFT3_Bard': 50,
		'TFT3_Shaco': 50,
		'TFT3_Ashe': 50,
		'TFT3_Vayne': 50,
		'TFT3_Cassiopeia': 50,
		'TFT3_Karma': 50,
	},
	'4': {
		'TFT3_Jinx': 50,
		'TFT3_Irelia': 50,
		'TFT3_Soraka': 50,
		'TFT3_WuKong': 50,
		'TFT3_Fizz': 50,
		'TFT3_Jhin': 50,
		'TFT3_Gnar': 50,
		'TFT3_Teemo': 50,
		'TFT3_Viktor': 50,
		'TFT3_Riven': 50,
	},
	'5': {
		'TFT3_AurelionSol': 50,
		'TFT3_Ekko': 50,
		'TFT3_Thresh': 50,
		'TFT3_Gangplank': 50,
		'TFT3_Lulu': 50,
		'TFT3_Xerath': 50,
		'TFT3_Urgot': 50,
		'TFT3_Janna': 50,
	},
}
