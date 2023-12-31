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
	'Debutant': [
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[0.800000011920929, 0.20000000298023224, 0, 0, 0],
		[0.4000000059604645, 0.550000011920929, 0.05000000074505806, 0, 0],
		[0, 0.6000000238418579, 0.4000000059604645, 0, 0],
		[0, 0.4000000059604645, 0.5799999833106995, 0.019999999552965164, 0],
		[0, 0, 0.6000000238418579, 0.4000000059604645, 0],
		[0, 0, 0, 0.6000000238418579, 0.4000000059604645],
	],
}

export const tierBags: Record<string, Record<string, number>> = {
	'1': {
		'TFT6_Singed': 29,
		'TFT6_Twitch': 29,
		'TFT6_Camille': 29,
		'TFT6_Caitlyn': 29,
		'TFT6_Darius': 29,
		'TFT6_Illaoi': 29,
		'TFT6_Ezreal': 29,
		'TFT6_Poppy': 29,
		'TFT6_Kassadin': 29,
		'TFT6_Ziggs': 29,
		'TFT6_Nocturne': 29,
		'TFT6_Brand': 29,
		'TFT6_JarvanIV': 29,
	},
	'2': {
		'TFT6_Warwick': 22,
		'TFT6_Zilean': 22,
		'TFT6_Zyra': 22,
		'TFT6_Blitzcrank': 22,
		'TFT6_Lulu': 22,
		'TFT6_Quinn': 22,
		'TFT6_Talon': 22,
		'TFT6_Sejuani': 22,
		'TFT6_Swain': 22,
		'TFT6_RekSai': 22,
		'TFT6_Syndra': 22,
		'TFT6_Ashe': 22,
		'TFT6_Corki': 22,
	},
	'3': {
		'TFT6_Leona': 18,
		'TFT6_Zac': 18,
		'TFT6_Gangplank': 18,
		'TFT6_MissFortune': 18,
		'TFT6_Ekko': 18,
		'TFT6_Vex': 18,
		'TFT6_Malzahar': 18,
		'TFT6_ChoGath': 18,
		'TFT6_Lucian': 18,
		'TFT6_Tryndamere': 18,
		'TFT6_Gnar': 18,
		'TFT6_Morgana': 18,
		'TFT6_Senna': 18,
	},
	'4': {
		'TFT6_Jhin': 12,
		'TFT6_Seraphine': 12,
		'TFT6_Orianna': 12,
		'TFT6_Braum': 12,
		'TFT6_Sivir': 12,
		'TFT6_Draven': 12,
		'TFT6_KhaZix': 12,
		'TFT6_Ahri': 12,
		'TFT6_Irelia': 12,
		'TFT6b_Vi': 12,
		'TFT6_Alistar': 12,
		'TFT6_Renata': 12,
	},
	'5': {
		'TFT6_Viktor': 10,
		'TFT6_TahmKench': 10,
		'TFT6_Jayce': 10,
		'TFT6_Galio': 10,
		'TFT6_Jinx': 10,
		'TFT6_Kaisa': 10,
		'TFT6_Silco': 10,
		'TFT6_Zeri': 10,
	},
}
