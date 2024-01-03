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
		[0.1599999964237213, 0.20000000298023224, 0.3499999940395355, 0.25, 0.03999999910593033],
		[0.09000000357627869, 0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 0.1599999964237213],
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
	'1': {
		'TFT8_Sylas': 29,
		'TFT8_Nasus': 29,
		'TFT8_Galio': 29,
		'TFT8_Ashe': 29,
		'TFT8_Lux': 29,
		'TFT8_Lulu': 29,
		'TFT8_Talon': 29,
		'TFT8_Kayle': 29,
		'TFT8_Blitzcrank': 29,
		'TFT8_Gangplank': 29,
		'TFT8_Poppy': 29,
		'TFT8_Renekton': 29,
		'TFT8_WuKong': 29,
	},
	'2': {
		'TFT8_Jinx': 22,
		'TFT8_Sivir': 22,
		'TFT8_Rell': 22,
		'TFT8_Draven': 22,
		'TFT8_Fiora': 22,
		'TFT8_Vi': 22,
		'TFT8_Annie': 22,
		'TFT8_Camille': 22,
		'TFT8_LeeSin': 22,
		'TFT8_Malphite': 22,
		'TFT8_Yuumi': 22,
		'TFT8_Yasuo': 22,
		'TFT8_Ezreal': 22,
	},
	'3': {
		'TFT8_Vayne': 18,
		'TFT8_Riven': 18,
		'TFT8_Nilah': 18,
		'TFT8_Jax': 18,
		'TFT8_Alistar': 18,
		'TFT8_Sona': 18,
		'TFT8_Zoe': 18,
		'TFT8_Velkoz': 18,
		'TFT8_Chogath': 18,
		'TFT8_Rammus': 18,
		'TFT8_Kaisa': 18,
		'TFT8_Senna': 18,
		'TFT8_Leblanc': 18,
	},
	'4': {
		'TFT8_MissFortune': 12,
		'TFT8_Ekko': 12,
		'TFT8_Taliyah': 12,
		'TFT8_Zed': 12,
		'TFT8_Samira': 12,
		'TFT8_Viego': 12,
		'TFT8_AurelionSol': 12,
		'TFT8_BelVeth': 12,
		'TFT8_Zac': 12,
		'TFT8_Sett': 12,
		'TFT8_Sejuani': 12,
		'TFT8_Soraka': 12,
	},
	'5': {
		'TFT8_Janna': 10,
		'TFT8_Syndra': 10,
		'TFT8_Leona': 10,
		'TFT8_Mordekaiser': 10,
		'TFT8_Aphelios': 10,
		'TFT8_Nunu': 10,
		'TFT8_Fiddlesticks': 10,
		'TFT8_Urgot': 10,
	},
}
