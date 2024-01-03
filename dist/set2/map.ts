import type { StreakData, UnitPools } from '../index'

export const shopBadLuckProtection: Record<string, number> | undefined = undefined

export const headlinerSystemParameters: Record<string, number> | undefined = undefined

export const dropRates: Record<string, number[][]> = {}

export const winStreaks: StreakData[] = [
	{
		mMinimumStreakLength: 2,
		mMaximumStreakLength: 3,
		mGoldRewardAmount: 1,
	},
	{
		mMinimumStreakLength: 4,
		mMaximumStreakLength: 6,
		mGoldRewardAmount: 2,
	},
	{
		mMinimumStreakLength: 7,
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
		mMaximumStreakLength: 6,
		mGoldRewardAmount: 2,
	},
	{
		mMinimumStreakLength: 7,
		mMaximumStreakLength: null,
		mGoldRewardAmount: 3,
	},
]

export const tierBags: UnitPools = {}
