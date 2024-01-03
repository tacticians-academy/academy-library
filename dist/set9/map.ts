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
		'TFT9_Tristana': 29,
		'TFT9_Irelia': 29,
		'TFT9_Orianna': 29,
		'TFT9_Poppy': 29,
		'TFT9_ChoGath': 29,
		'TFT9_Renekton': 29,
		'TFT9_Maokai': 29,
		'TFT9_Kayle': 29,
		'TFT9_Samira': 29,
		'TFT9_Jhin': 29,
		'TFT9_Viego': 29,
		'TFT9_Malzahar': 29,
		'TFT9_Cassiopeia': 29,
	},
	'2': {
		'TFT9_Jinx': 22,
		'TFT9_Galio': 22,
		'TFT9_Kled': 22,
		'TFT9_Sett': 22,
		'TFT9_Swain': 22,
		'TFT9_Teemo': 22,
		'TFT9_Warwick': 22,
		'TFT9_Zed': 22,
		'TFT9_Vi': 22,
		'TFT9_Soraka': 22,
		'TFT9_Kassadin': 22,
		'TFT9_Taliyah': 22,
		'TFT9_Ashe': 22,
	},
	'3': {
		'TFT9_Akshan': 18,
		'TFT9_Kalista': 18,
		'TFT9_Darius': 18,
		'TFT9_Ekko': 18,
		'TFT9_Garen': 18,
		'TFT9_Jayce': 18,
		'TFT9_Karma': 18,
		'TFT9_Lissandra': 18,
		'TFT9_RekSai': 18,
		'TFT9_Katarina': 18,
		'TFT9_Taric': 18,
		'TFT9_Sona': 18,
		'TFT9_VelKoz': 18,
	},
	'4': {
		'TFT9_Sejuani': 12,
		'TFT9_Gwen': 12,
		'TFT9_KaiSa': 12,
		'TFT9_JarvanIV': 12,
		'TFT9_Urgot': 12,
		'TFT9_Shen': 12,
		'TFT9_Zeri': 12,
		'TFT9_Aphelios': 12,
		'TFT9_Yasuo': 12,
		'TFT9_Azir': 12,
		'TFT9_Lux': 12,
		'TFT9_Nasus': 12,
	},
	'5': {
		'TFT9_Aatrox': 10,
		'TFT9_Ahri': 10,
		'TFT9_Heimerdinger': 10,
		'TFT9_KSante': 10,
		'TFT9_BelVeth': 10,
		'TFT9_Senna': 10,
		'TFT9_Sion': 10,
		'TFT9_Ryze': 10,
		'TFT9_RyzeBandleCity': undefined,
		'TFT9_RyzeDemacia': undefined,
		'TFT9_RyzeFreljord': undefined,
		'TFT9_RyzeIonia': undefined,
		'TFT9_RyzeNoxus': undefined,
		'TFT9_RyzePiltover': undefined,
		'TFT9_RyzeShadowIsles': undefined,
		'TFT9_RyzeShurima': undefined,
		'TFT9_RyzeTargon': undefined,
		'TFT9_RyzeZaun': undefined,
	},
}
