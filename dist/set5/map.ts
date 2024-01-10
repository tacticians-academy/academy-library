import type { StreakData, UnitPools } from '../index'

export const shopBadLuckProtection: Record<string, number> | undefined = undefined

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
		[0.15000000596046448, 0.20000000298023224, 0.3499999940395355, 0.25, 0.05000000074505806],
		[0.10000000149011612, 0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 0.15000000596046448],
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

export const tierBags: UnitPools = {}