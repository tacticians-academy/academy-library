import type { UnitPools } from '../index'

export const shopBadLuckProtection: Record<string, number> | undefined = {
	'ForceFunctionMax': 40,
	'ForceFunctionDivisor': 2,
	'Tier1StopForce': 17,
	'Tier2StopForce': 13,
	'Tier3StopForce': 9,
	'Tier4StopForce': 7,
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
		[0.15000000596046448, 0.20000000298023224, 0.3499999940395355, 0.25, 0.05000000074505806],
		[0.10000000149011612, 0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 0.15000000596046448],
	],
}

export const tierBags: UnitPools = {}
