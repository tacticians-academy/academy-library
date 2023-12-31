import type { UnitPools } from '../index'

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
	'Headliner': [
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[0.800000011920929, 0.20000000298023224, 0, 0, 0],
		[0.30000001192092896, 0.699999988079071, 0, 0, 0],
		[0, 0.75, 0.25, 0, 0],
		[0, 0.4000000059604645, 0.6000000238418579, 0, 0],
		[0, 0, 0.699999988079071, 0.30000001192092896, 0],
		[0, 0, 0, 0.8999999761581421, 0.10000000149011612],
		[0, 0, 0, 0.30000001192092896, 0.699999988079071],
	],
	'Headliner_PlusOneLevel': [
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[0.800000011920929, 0.20000000298023224, 0, 0, 0],
		[0.30000001192092896, 0.699999988079071, 0, 0, 0],
		[0, 0.75, 0.25, 0, 0],
		[0, 0.4000000059604645, 0.6000000238418579, 0, 0],
		[0, 0, 0.699999988079071, 0.30000001192092896, 0],
		[0, 0, 0, 0.8999999761581421, 0.10000000149011612],
		[0, 0, 0, 0.30000001192092896, 0.699999988079071],
		[0, 0, 0, 0.10000000149011612, 0.8999999761581421],
	],
}

export const tierBags: UnitPools = {
	'1': {
		'TFT10_Evelynn': 22,
		'TFT10_Corki': 22,
		'TFT10_KSante': 22,
		'TFT10_Lillia': 22,
		'TFT10_Jinx': 22,
		'TFT10_Taric': 22,
		'TFT10_Vi': 22,
		'TFT10_Yasuo': 22,
		'TFT10_Annie': 22,
		'TFT10_Olaf': 22,
		'TFT10_Kennen': 22,
		'TFT10_TahmKench': 22,
		'TFT10_Nami': 22,
	},
	'2': {
		'TFT10_Gnar': 20,
		'TFT10_Seraphine': 20,
		'TFT10_Pantheon': 20,
		'TFT10_Bard': 20,
		'TFT10_Kayle': 20,
		'TFT10_Twitch': 20,
		'TFT10_Jax': 20,
		'TFT10_Senna': 20,
		'TFT10_Kaisa': 20,
		'TFT10_Gragas': 20,
		'TFT10_Aphelios': 20,
		'TFT10_Katarina': 20,
		'TFT10_Garen': 20,
	},
	'3': {
		'TFT10_Amumu': 17,
		'TFT10_Vex': 17,
		'TFT10_Neeko': 17,
		'TFT10_Lux': 17,
		'TFT10_Mordekaiser': 17,
		'TFT10_Lulu': 17,
		'TFT10_Yone': 17,
		'TFT10_Samira': 17,
		'TFT10_MissFortune': 17,
		'TFT10_Sett': 17,
		'TFT10_Urgot': 17,
		'TFT10_Riven': 17,
		'TFT10_Ekko': 17,
	},
	'4': {
		'TFT10_Ezreal': 10,
		'TFT10_Caitlyn': 10,
		'TFT10_Ahri': 10,
		'TFT10_Zac': 10,
		'TFT10_Zed': 10,
		'TFT10_Karthus': 10,
		'TFT10_Viego': 10,
		'TFT10_Poppy': 10,
		'TFT10_Thresh': 10,
		'TFT10_TwistedFate': 10,
		'TFT10_Akali': 10,
		'TFT10_Blitzcrank': 10,
	},
	'5': {
		'TFT10_Illaoi': 9,
		'TFT10_Jhin': 9,
		'TFT10_Qiyana': 9,
		'TFT10_Lucian': 9,
		'TFT10_Sona': 9,
		'TFT10_Yorick': 9,
		'TFT10_Ziggs': 9,
		'TFT10_Kayn': 9,
	},
}
