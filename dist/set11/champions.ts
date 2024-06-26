import type { AbilityData, ChampionData } from '../index'

export enum ChampionKey { Aatrox = `TFT11_Aatrox`, Ahri = `TFT11_Ahri`, Alune = `TFT11_Alune`, Amumu = `TFT11_Amumu`, Annie = `TFT11_Annie`, Aphelios = `TFT11_Aphelios`, Ashe = `TFT11_Ashe`, Azir = `TFT11_Azir`, Bard = `TFT11_Bard`, Caitlyn = `TFT11_Caitlyn`, ChoGath = `TFT11_ChoGath`, Darius = `TFT11_Darius`, Diana = `TFT11_Diana`, Galio = `TFT11_Galio`, Garen = `TFT11_Garen`, Gnar = `TFT11_Gnar`, Hwei = `TFT11_Hwei`, Illaoi = `TFT11_Illaoi`, Irelia = `TFT11_Irelia`, Janna = `TFT11_Janna`, Jax = `TFT11_Jax`, Kaisa = `TFT11_Kaisa`, Kayle = `TFT11_Kayle`, Kayn = `TFT11_Kayn`, KhaZix = `TFT11_KhaZix`, Kindred = `TFT11_Kindred`, FortuneYord = `TFT11_FortuneYord`, KogMaw = `TFT11_KogMaw`, LeeSin = `TFT11_LeeSin`, Lillia = `TFT11_Lillia`, Lissandra = `TFT11_Lissandra`, Lux = `TFT11_Lux`, Malphite = `TFT11_Malphite`, Morgana = `TFT11_Morgana`, Nautilus = `TFT11_Nautilus`, Neeko = `TFT11_Neeko`, Ornn = `TFT11_Ornn`, Qiyana = `TFT11_Qiyana`, Rakan = `TFT11_Rakan`, RakanBenchDummy = `TFT11_RakanBenchDummy`, RekSai = `TFT11_RekSai`, Riven = `TFT11_Riven`, Senna = `TFT11_Senna`, Sett = `TFT11_Sett`, Shen = `TFT11_Shen`, ExaltedCore = `TFT11_ExaltedCore`, FortuneProp = `TFT11_FortuneProp`, Sivir = `TFT11_Sivir`, Soraka = `TFT11_Soraka`, Sylas = `TFT11_Sylas`, Syndra = `TFT11_Syndra`, TahmKench = `TFT11_TahmKench`, TrainingDummy = `TFT_TrainingDummy`, Teemo = `TFT11_Teemo`, Thresh = `TFT11_Thresh`, Tibbers = `TFT11_Tibbers`, Tristana = `TFT11_Tristana`, Udyr = `TFT11_Udyr`, Voidspawn = `TFT_Voidspawn`, Volibear = `TFT11_Volibear`, WuKong = `TFT11_WuKong`, Xayah = `TFT11_Xayah`, XayahBenchDummy = `TFT11_XayahBenchDummy`, XayahRakanDummy = `TFT11_XayahRakanDummy`, Yasuo = `TFT11_Yasuo`, Yone = `TFT11_Yone`, Yorick = `TFT11_Yorick`, Zoe = `TFT11_Zoe`, Zyra = `TFT11_Zyra` }

export const champions: ChampionData[] = [
	{
		apiName: `TFT11_Aatrox`,
		name: `Aatrox`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Aatrox.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ghostly`, `Inkshadow`, `Bruiser`],
		stats: {
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 700,
			initialMana: 40,
			magicResist: 45,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AatroxSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 260, 390, 600],
					'FlatHealing': [0, 200, 250, 300],
					'Duration': [4, 4, 4, 4],
					'ShredTooltipOnly': [20, 20, 20, 20],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 260, 390, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Healing': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `FlatHealing`,
										starValues: [0, 200, 250, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Ahri`,
		name: `Ahri`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Ahri.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Arcanist`],
		stats: {
			armor: 15,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 30,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1750,
		critAttackMissileSpeed: 1750,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AhriSpell`,
				castTime: 0.25,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1400,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 280, 420, 630],
					'NumAllies': [1, 1, 1, 1],
					'FatedBonus': [30, 30, 30, 30],
					'NumSeconds': [2, 2, 2, 2],
					'SecondaryDamage': [0, 130, 195, 295],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 280, 420, 630],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondaryDamage`,
										starValues: [0, 130, 195, 295],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_AhriSpellMissile`,
				castTime: 0.25,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1400,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Alune`,
		name: `Alune`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Alune.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Umbral`, `Invoker`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 650,
			initialMana: 0,
			magicResist: 25,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AluneSpell`,
				castTime: undefined,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 4000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2000,
				},
				variables: {
					'MagicDamage': [0, 360, 540, 860],
					'ShredDuration': [6, 6, 6, 6],
					'ShredPercent': [20, 20, 20, 20],
					'PrimaryMagicDamage': [0, 160, 240, 380],
					'AttackSpeed': [0.4000000059604645, 0.20000000298023224, 0.25, 0.30000001192092896],
					'AttackSpeedDuration': [5, 5, 5, 5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [0, 360, 540, 860],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'PrimaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PrimaryMagicDamage`,
										starValues: [0, 160, 240, 380],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_AluneSpellMissileHit`,
				castTime: 0.25,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_AluneSpellMissile`,
				castTime: undefined,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 4000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 4500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_AluneSpellAllyMissile`,
				castTime: undefined,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 4000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 4500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Amumu`,
		name: `Amumu`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Amumu.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Porcelain`, `Warden`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 900,
			initialMana: 40,
			magicResist: 50,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AmumuSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'Duration': [3, 3, 3, 3],
					'SelfHealingAmount': [0, 250, 300, 375],
					'AllyHealingAmount': [0, 80, 100, 125],
					'Damage': [50, 150, 225, 360],
				},
				calculations: {
					'SelfHealingAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SelfHealingAmount`,
										starValues: [0, 250, 300, 375],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AllyHealingAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AllyHealingAmount`,
										starValues: [0, 80, 100, 125],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [50, 150, 225, 360],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_AmumuCritAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Annie`,
		name: `Annie`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Annie.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fortune`, `Invoker`],
		stats: {
			armor: 60,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 850,
			initialMana: 70,
			magicResist: 60,
			mana: 140,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1200,
		critAttackMissileSpeed: 1200,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AnnieSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'HealthRatio': [1, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
					'StunDuration': [1.5, 1.5, 1.5, 1.5],
					'Damage': [0, 150, 225, 2500],
					'DebuffDuration': [8, 8, 8, 8],
					'APHealth': [0, 300, 350, 1500],
					'HealRatio': [0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806],
					'HexRange': [2, 2, 2, 2],
				},
				calculations: {
					'BonusHealth': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `APHealth`,
										starValues: [0, 300, 350, 1500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `HealthRatio`,
										starValues: [1, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
										stat: `HP`,
										ratio: 1,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 150, 225, 2500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'PassiveHeal': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `HealRatio`,
										starValues: [0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806],
										stat: `HP`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Aphelios`,
		name: `Aphelios`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Aphelios.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Sniper`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 650,
			initialMana: 40,
			magicResist: 25,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2250,
		critAttackMissileSpeed: 2250,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ApheliosSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0.5, 1.850000023841858, 1.850000023841858, 1.9500000476837158],
					'Duration': [7, 7, 7, 7],
					'ConeRadius': [45, 22, 22, 22],
					'FatedBonus': [0.25, 0.25, 0.25, 0.25],
					'SunderTooltipPercent': [20, 20, 20, 20],
					'NumShots': [3, 3, 3, 3],
					'BaseDamage': [0, 30, 45, 70],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0.5, 1.850000023841858, 1.850000023841858, 1.9500000476837158],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseDamage`,
										starValues: [0, 30, 45, 70],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{dfe3af6d}': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0.5, 1.850000023841858, 1.850000023841858, 1.9500000476837158],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'BaseDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 30, 45, 70],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_ApheliosInfernumQMis`,
				castTime: 0.10000000149011612,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 2400,
					speedMin: 2500,
					speedMax: 20000,
					acceleration: -4000,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `CastOnHit`,
						},
					],
					type: `AcceleratingMovement`,
					_missileSpeed: 1500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_ApheliosCalibrumAttackMis`,
				castTime: undefined,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 3000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `CastOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Ashe`,
		name: `Ashe`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Ashe.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Porcelain`, `Sniper`],
		stats: {
			armor: 30,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 700,
			initialMana: 25,
			magicResist: 30,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AsheSpell`,
				castTime: 1,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 1],
					'ArrowBaseDamage': [0, 4, 6, 20],
					'StartingArrows': [15, 15, 15, 15],
					'ArrowOnAttackThreshold': [0, 1, 1, 3],
					'AttackThreshold': [3, 3, 3, 3],
					'NumOfAdditionalEnemies': [3, 3, 3, 3],
					'TotalSpellTime': [0.8999999761581421, 0.8999999761581421, 0.8999999761581421, 0.8999999761581421],
					'NumEnemiesMinusTarget': [3, 3, 3, 3],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 1],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `ArrowBaseDamage`,
										starValues: [0, 4, 6, 20],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_AsheSpellSkyMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Azir`,
		name: `Azir`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Azir.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dryad`, `Invoker`],
		stats: {
			armor: 35,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 800,
			initialMana: 70,
			magicResist: 35,
			mana: 130,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT11_AzirSpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2600,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'LaserDamage': [0, 500, 750, 5000],
					'SoldierHealth': [0, 1100, 1500, 8000],
				},
				calculations: {
					'LaserDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `LaserDamage`,
										starValues: [0, 500, 750, 5000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_Azir_SunDiscBasicAttack3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 3000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_AzirLaserMis`,
				castTime: undefined,
				missile: {
					width: 180,
					travelTime: undefined,
					speedInitial: 800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Bard`,
		name: `Bard`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Bard.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Trickshot`],
		stats: {
			armor: 25,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 650,
			initialMana: 0,
			magicResist: 25,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_BardSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [6, 6, 6, 6],
					'PercentAttackDamage': [0.800000011920929, 0.6499999761581421, 0.6499999761581421, 0.699999988079071],
					'APDamage': [200, 24, 36, 60],
					'AOEDamageMultiplier': [2, 2, 2, 2],
					'HexDistance': [2, 2, 2, 2],
				},
				calculations: {
					'PhysicalDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0.800000011920929, 0.6499999761581421, 0.6499999761581421, 0.699999988079071],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ScaledDuration': {
						asPercent: false,
						parts: [
							{
								operator: `identity`,
								subparts: [
									{
										variable: `Duration`,
										starValues: [6, 6, 6, 6],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `APDamage`,
										starValues: [200, 24, 36, 60],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'TOOLTIPTotalSpellDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `APDamage`,
										starValues: [200, 24, 36, 60],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `PercentAttackDamage`,
										starValues: [0.800000011920929, 0.6499999761581421, 0.6499999761581421, 0.699999988079071],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_BardSharpshooterBounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1300,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_BardMeepToss`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1300,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1750,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_BardMeepTossSharpshooterBounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1750,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Caitlyn`,
		name: `Caitlyn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Caitlyn.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ghostly`, `Sniper`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 105,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT11_CaitlynSpell`,
				castTime: 1.100000023841858,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 3200,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'PercentAttackDamage': [7, 7, 7, 7],
					'APDamage': [0, 100, 150, 225],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [7, 7, 7, 7],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `APDamage`,
										starValues: [0, 100, 150, 225],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BonusDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `APDamage`,
										starValues: [0, 100, 150, 225],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: true,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_ChoGath`,
		name: `Cho'Gath`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_ChoGath.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Behemoth`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 650,
			initialMana: 40,
			magicResist: 40,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ChoGathSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BurnWoundDuration': [9, 9, 9, 9],
					'Damage': [0, 200, 300, 450],
					'Shield': [0, 280, 350, 420],
					'ShieldDuration': [4, 4, 4, 4],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 200, 300, 450],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Shield`,
										starValues: [0, 280, 350, 420],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Darius`,
		name: `Darius`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Darius.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Umbral`, `Duelist`],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 650,
			initialMana: 0,
			magicResist: 40,
			mana: 30,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_DariusSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0.5, 200, 300, 450],
					'ManaRefund': [15, 15, 15, 15],
					'DamageOnHit': [15, 90, 135, 200],
					'Duration': [4, 4, 4, 4],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0.5, 200, 300, 450],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'DamageOnHit': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DamageOnHit`,
										starValues: [15, 90, 135, 200],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_DariusSpellDamageOnHit`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Diana`,
		name: `Diana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Diana.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dragonlord`, `Sage`],
		stats: {
			armor: 55,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 900,
			initialMana: 70,
			magicResist: 55,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_DianaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 75, 110, 170],
					'Duration': [4, 4, 4, 4],
					'DR': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'Heal': [0, 275, 300, 375],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 75, 110, 170],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 275, 300, 375],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Galio`,
		name: `Galio`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Galio.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Storyweaver`, `Bruiser`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1100,
			initialMana: 70,
			magicResist: 60,
			mana: 140,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_GalioSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BaseResists': [2, 130, 160, 1000],
					'BonusResistsPct': [0.5, 0.5, 0.5, 0.5],
					'Duration': [4, 4, 4, 2],
					'HexRadius': [3, 3, 3, 3],
					'Damage': [100, 100, 150, 1800],
					'ShieldPercent': [0.10000000149011612, 160, 200, 2000],
					'ShieldDuration': [4, 4, 4, 4],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [100, 100, 150, 1800],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Armor': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `BonusResistsPct`,
										starValues: [0.5, 0.5, 0.5, 0.5],
										stat: `Armor`,
										ratio: 1,
									},
									{
										variable: `BaseResists`,
										starValues: [2, 130, 160, 1000],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
					'MagicResist': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `BonusResistsPct`,
										starValues: [0.5, 0.5, 0.5, 0.5],
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: `BaseResists`,
										starValues: [2, 130, 160, 1000],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
					'ShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldPercent`,
										starValues: [0.10000000149011612, 160, 200, 2000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Garen`,
		name: `Garen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Garen.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Storyweaver`, `Warden`],
		stats: {
			armor: 40,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 600,
			initialMana: 30,
			magicResist: 40,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_GarenSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentHealthShield': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
					'Duration': [5, 5, 5, 5],
					'ShieldBase': [0, 250, 275, 300],
					'ADPercent': [4.5, 4.5, 4.5, 4.5],
				},
				calculations: {
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ShieldBase`,
										starValues: [0, 250, 275, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AdditionalDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [4.5, 4.5, 4.5, 4.5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{860d638e}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldBase`,
										starValues: [0, 250, 275, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_GarenSpellAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 347.79998779296875,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Gnar`,
		name: `Gnar`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Gnar.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dryad`, `Warden`],
		stats: {
			armor: 45,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 700,
			initialMana: 10,
			magicResist: 45,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_GnarSpell`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 2100,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'PercentAttackDamage': [0, 3.0999999046325684, 3.0999999046325684, 3.200000047683716],
					'ADGain': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'MaxStacks': [50, 50, 50, 50],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0, 3.0999999046325684, 3.0999999046325684, 3.200000047683716],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ADGain': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ADGain`,
										starValues: [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{c7aadee7}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ADGain`,
										starValues: [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Hwei`,
		name: `Hwei`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Hwei.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Artist`],
		stats: {
			armor: 40,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 800,
			initialMana: 30,
			magicResist: 40,
			mana: 105,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2800,
		critAttackMissileSpeed: 2800,
		passive: undefined,
		spells: [
			{
				name: `TFT11_HweiSpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 200, 300, 2000],
					'Healing': [0, 40, 60, 1000],
					'EndHeal': [0, 100, 150, 1000],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 200, 300, 2000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Healing': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Healing`,
										starValues: [0, 40, 60, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'EndHeal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `EndHeal`,
										starValues: [0, 100, 150, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_HweiSpell3Star`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.5,
					speedInitial: undefined,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeMovement`,
				},
				variables: {
					'Damage': [0, 220, 330, 1000],
					'Healing': [0, 40, 60, 1000],
					'EndHeal': [0, 120, 180, 1000],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 220, 330, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Healing': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Healing`,
										starValues: [0, 40, 60, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'EndHeal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `EndHeal`,
										starValues: [0, 120, 180, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_Hwei_ArtistMis`,
				castTime: 0.25,
				missile: {
					width: 70,
					travelTime: undefined,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Illaoi`,
		name: `Illaoi`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Illaoi.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ghostly`, `Arcanist`, `Warden`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 900,
			initialMana: 30,
			magicResist: 50,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT11_IllaoiSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [4, 4, 4, 4],
					'Damage': [0.10000000149011612, 80, 120, 190],
					'Shield': [0, 325, 400, 500],
					'Heal': [0, 50, 60, 70],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0.10000000149011612, 80, 120, 190],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Shield`,
										starValues: [0, 325, 400, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'HealAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 50, 60, 70],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Irelia`,
		name: `Irelia`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Irelia.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Storyweaver`, `Duelist`],
		stats: {
			armor: 40,
			attackSpeed: 0.8999999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 900,
			initialMana: 0,
			magicResist: 40,
			mana: 8,
			moveSpeed: 500,
			range: 10,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_IreliaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumOfBlades': [7, 7, 7, 7],
					'BladeHitAD': [0, 1.5, 1.5, 14],
					'AttacksToCast_MustMatchResourceMaximum': [8, 8, 8, 8],
					'SpellAPDamage': [100, 100, 100, 100],
					'SpellHitAD': [0, 3, 3, 20],
					'AttackSpeedToDamage': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
					'AttackSpeedToBladeSpeed': [0.25, 0.25, 0.25, 0.25],
					'NumSpellBlades': [3, 3, 3, 3],
					'NumSpellHIts': [3, 3, 3, 3],
					'SunderDuration': [5, 5, 5, 5],
				},
				calculations: {
					'Damage_BladeHit': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `BladeHitAD`,
										starValues: [0, 1.5, 1.5, 14],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'Damage_SpellHit': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `SpellHitAD`,
										starValues: [0, 3, 3, 20],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `SpellAPDamage`,
										starValues: [100, 100, 100, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{5dcd4f06}': {
						asPercent: false,
						parts: [
							{
								operator: `product`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_Irelia_BA_SplineMis`,
				castTime: undefined,
				missile: {
					width: 30,
					travelTime: undefined,
					speedInitial: 700,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							'{9aa2fc4c}': true,
							__type: `CastOnHit`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							__type: `TriggerOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 30,
							__type: `TriggerOnDelay`,
						},
						{
							mTriggerName: `ReturnBlade`,
							mDelay: 0.09399999678134918,
							__type: `TriggerFromScript`,
						},
					],
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_Irelia_Spell_SplineMis`,
				castTime: undefined,
				missile: {
					width: 30,
					travelTime: 0.75,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							'{9aa2fc4c}': true,
							__type: `CastOnHit`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							__type: `TriggerOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 10,
							__type: `TriggerOnDelay`,
						},
						{
							mTriggerName: `ReturnBlade`,
							mDelay: 0.09399999678134918,
							__type: `TriggerFromScript`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_Irelia_Spell_BladeMis`,
				castTime: undefined,
				missile: {
					width: 30,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							'{9aa2fc4c}': true,
							__type: `CastOnHit`,
						},
						{
							mActions: [
								{
									'{f73a559d}': true,
									mOverrideMovement: {
										mSplineInfo: {
											__type: `HermiteSplineInfo`,
										},
										mSpeed: 1000,
										__type: `FixedSpeedSplineMovement`,
									},
									__type: `ClearTargetAndKeepMoving`,
								},
							],
							mTriggerName: `StartArc`,
							mDelay: 0,
							__type: `TriggerFromScript`,
						},
						{
							__type: `{72f86c81}`,
						},
					],
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Janna`,
		name: `Janna`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Janna.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dragonlord`, `Invoker`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 600,
			initialMana: 25,
			magicResist: 20,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT11_JannaSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'Duration': [4, 4, 4, 4],
					'NumTargets': [2, 2, 2, 2],
					'Shield': [0, 120, 150, 200],
					'BaseDamage': [0, 180, 270, 415],
					'NumShieldTargets': [2, 2, 2, 2],
				},
				calculations: {
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Shield`,
										starValues: [0, 120, 150, 200],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 180, 270, 415],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_JannaWMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 3000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_JannaWMisDamage`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 3000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Jax`,
		name: `Jax`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Jax.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Inkshadow`, `Warden`],
		stats: {
			armor: 40,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 650,
			initialMana: 20,
			magicResist: 40,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 400,
		critAttackMissileSpeed: 400,
		passive: undefined,
		spells: [
			{
				name: `TFT11_JaxSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'Duration': [2, 2, 2, 2],
					'Damage': [0, 250, 375, 560],
					'StunDuration': [1.5, 1.5, 1.5, 1.5],
					'Resists': [60, 60, 60, 60],
					'ICD': [0.9900000095367432, 0.9900000095367432, 0.9900000095367432, 0.9900000095367432],
					'AOEDamage': [0, 100, 150, 225],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 250, 375, 560],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AOEDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AoEDamage`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Kaisa`,
		name: `Kai'Sa`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Kaisa.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Inkshadow`, `Trickshot`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 700,
			initialMana: 20,
			magicResist: 30,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_KaisaSpell`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0, 0.44999998807907104, 0.44999998807907104, 1],
					'NumHits_Do_NOT_Change': [20, 20, 20, 20],
					'Mana': [4, 4, 4, 4],
					'SpellDurationTOOLTIPONLY': [2, 2, 2, 2],
					'BaseDamage': [0, 10, 15, 45],
					'AmpedPercentAD': [0, 0.699999988079071, 0.699999988079071, 1.399999976158142],
					'HitThreshold': [10, 10, 10, 10],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0, 0.44999998807907104, 0.44999998807907104, 1],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseDamage`,
										starValues: [0, 10, 15, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'ManaRestore': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Mana`,
										starValues: [4, 4, 4, 4],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AmplifiedDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `AmpedPercentAD`,
										starValues: [0, 0.699999988079071, 0.699999988079071, 1.399999976158142],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseDamage`,
										starValues: [0, 10, 15, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_KaisaSharpshooterBounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1300,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_KaisaQLeftMissile1`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaisaQLeftMissile3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaisaQLeftMissile2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaisaQRightMissile1`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaisaQRightMissile2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaisaQRightMissile3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
					speedInitial: 1800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaisaQStraightBlast`,
				castTime: 4,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 3500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							mTriggerName: `ClearTargets`,
							__type: `TriggerFromScript`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 0,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_KaisaCosmeticRangefinder`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 0,
					speedMin: 50000,
					speedMax: 50000,
					acceleration: 1000,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `DestroyOnHit`,
						},
					],
					type: `AcceleratingMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_KaisaQStraightBlastSharpshooter`,
				castTime: 4,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 0,
					speedMin: 3000,
					speedMax: 5000,
					acceleration: 1000,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `DestroyOnHit`,
						},
					],
					type: `AcceleratingMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_KaisaBasicAttack3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Kayle`,
		name: `Kayle`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Kayle.TFT_Set11.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 30,
			hp: 450,
			initialMana: 0,
			magicResist: 25,
			mana: 100,
			moveSpeed: 500,
			range: 6,
		},
		basicAttackMissileSpeed: 5000,
		critAttackMissileSpeed: 5000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_KayleSpell`,
				castTime: undefined,
				missile: {
					width: 200,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 150, 225, 375],
					'OnHitDamage': [0, 20, 30, 40],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 150, 225, 375],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'OnHitDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `OnHitDamage`,
										starValues: [0, 20, 30, 40],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_KayleSpellWideDouble`,
				castTime: undefined,
				missile: {
					width: 200,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_KayleSpellWide`,
				castTime: undefined,
				missile: {
					width: 280,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_KayleSpellDouble`,
				castTime: undefined,
				missile: {
					width: 200,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Kayn`,
		name: `Kayn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Kayn.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ghostly`, `Reaper`],
		stats: {
			armor: 70,
			attackSpeed: 0.8999999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 1000,
			initialMana: 0,
			magicResist: 70,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_KaynSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'IncreasedPercent': [10, 10, 10, 10],
					'TransformADPercent': [0.10000000149011612, 4, 4, 10],
					'CritChance': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'SwipeADPercent': [2, 2.4000000953674316, 2.4000000953674316, 6],
					'SingleTargetDamageAmp': [1, 1, 1, 1],
					'SwipeFlatDamage': [0, 30, 45, 135],
				},
				calculations: {
					'SwipeDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `SwipeADPercent`,
										starValues: [2, 2.4000000953674316, 2.4000000953674316, 6],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `SwipeFlatDamage`,
										starValues: [0, 30, 45, 135],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'TransformDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `TransformADPercent`,
										starValues: [0.10000000149011612, 4, 4, 10],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_KaynSpellSwipe`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'IncreasedPercent': [10, 10, 10, 10],
					'TransformADPercent': [0.10000000149011612, 4, 4, 12],
					'CritChance': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'SwipeADPercent': [2, 2, 2, 6],
					'SingleTargetDamageAmp': [0.5, 0.5, 0.5, 0.5],
					'SwipeFlatDamage': [0, 30, 45, 135],
				},
				calculations: {
					'SwipeDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `SwipeADPercent`,
										starValues: [2, 2, 2, 6],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `SwipeFlatDamage`,
										starValues: [0, 30, 45, 135],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'TransformDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `TransformADPercent`,
										starValues: [0.10000000149011612, 4, 4, 12],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KaynSpin`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 347.79998779296875,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_KhaZix`,
		name: `Kha'Zix`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_KhaZix.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Heavenly`, `Reaper`],
		stats: {
			armor: 35,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 600,
			initialMana: 0,
			magicResist: 35,
			mana: 40,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_KhaZixSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [3.0999999046325684, 3.0999999046325684, 3.0999999046325684, 3.0999999046325684],
					'APDamage': [0, 20, 30, 45],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [3.0999999046325684, 3.0999999046325684, 3.0999999046325684, 3.0999999046325684],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `APDamage`,
										starValues: [0, 20, 30, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_KhaZixSpellAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0, 3, 3, 3],
					'APDamage': [0, 20, 30, 40],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0, 3, 3, 3],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `APDamage`,
										starValues: [0, 20, 30, 40],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Kindred`,
		name: `Kindred`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Kindred.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Dryad`, `Reaper`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 550,
			initialMana: 0,
			magicResist: 20,
			mana: 30,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_KindredSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 115, 175, 260],
					'SecondaryDamage': [0, 65, 100, 155],
					'AP': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'FatedAS': [0.18000000715255737, 0.18000000715255737, 0.18000000715255737, 0.18000000715255737],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 115, 175, 260],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondaryDamage`,
										starValues: [0, 65, 100, 155],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_KindredSpellMinorArrow`,
				castTime: 0.25,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'DataValue': [0, 1, 2, 10],
					'OtherValue': [0, 100, 200, 1000],
				},
				calculations: {
					'{d678dbfb}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{8ccd541a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_KindredSpellArrow`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_FortuneYord`,
		name: `Kobuko`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Kobuko.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fortune`, `Bruiser`],
		stats: {
			armor: 30,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 600,
			initialMana: 30,
			magicResist: 30,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_FortuneYordSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PermanentHealthPerInterest': [30, 10, 12, 20],
					'Duration': [2, 2, 2, 2],
					'Heal': [60, 350, 400, 475],
					'DamageHPPercent': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'HRHealthPerRound': [15, 60, 80, 200],
				},
				calculations: {
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [60, 350, 400, 475],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'DamageAmount': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `DamageHPPercent`,
										starValues: [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
										stat: `HP`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_KogMaw`,
		name: `Kog'Maw`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_KogMaw.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Invoker`, `Sniper`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 30,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 30,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT11_KogMawSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 160, 225, 315],
					'AttackRangeIncrease': [1, 1, 1, 1],
					'MaxStacks': [50, 50, 50, 50],
					'NumCasts': [2, 2, 2, 2],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 160, 225, 315],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_LeeSin`,
		name: `Lee Sin`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_LeeSin.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dragonlord`, `Duelist`],
		stats: {
			armor: 55,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 950,
			initialMana: 40,
			magicResist: 55,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_LeeSinSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ShieldDuration': [3, 3, 3, 3],
					'PhysDamageADRatio': [2, 4.5, 4.5, 9],
					'Shield': [0, 200, 250, 1000],
					'AOEDamageADRatio': [1.5, 1.5, 1.5, 4.5],
					'TooltipReave': [30, 30, 30, 30],
					'DamageMultiplerPerBonusAS': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PhysDamageADRatio`,
										starValues: [2, 4.5, 4.5, 9],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'AOEDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `AOEDamageADRatio`,
										starValues: [1.5, 1.5, 1.5, 4.5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Shield`,
										starValues: [0, 200, 250, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BonusDamageFromAS': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `DamageMultiplerPerBonusAS`,
										starValues: [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Lillia`,
		name: `Lillia`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Lillia.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 700,
			initialMana: 0,
			magicResist: 30,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1200,
		critAttackMissileSpeed: 1200,
		passive: undefined,
		spells: [
			{
				name: `TFT11_LilliaSpell`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 1150,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `{e357c116}`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 220, 330, 900],
					'SecondaryTargetDamage': [0, 100, 150, 350],
					'NumOfOrbs': [3, 3, 3, 5],
					'MegaDamage': [0, 360, 540, 1600],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 220, 330, 900],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondaryTargetDamage`,
										starValues: [0, 100, 150, 350],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MegaDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MegaDamage`,
										starValues: [0, 360, 540, 1600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_LilliaSpellMissileAirMega`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: 0.5,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `{e357c116}`,
						},
					],
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_LilliaSpellBig`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 250, 375, 1100],
					'SecondaryTargetDamage': [0, 100, 150, 400],
					'NumOfOrbs': [3, 3, 3, 3],
					'MegaDamage': [0, 350, 525, 1350],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 250, 375, 1100],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondaryTargetDamage`,
										starValues: [0, 100, 150, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MegaDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MegaDamage`,
										starValues: [0, 350, 525, 1350],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_LilliaSpellMissileBig`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 1150,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnHit`,
						},
						{
							__type: `{e357c116}`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 700,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_LilliaSpellMissileMegaBounce`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 700,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_LilliaSpellMissileMega`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: undefined,
					speedInitial: 1150,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `{e357c116}`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 700,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_LilliaSpellMissileAirBig`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1400,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT11_LilliaBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1200,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_LilliaSpellMissile`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 1150,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `{e357c116}`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 700,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Lissandra`,
		name: `Lissandra`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Lissandra.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Porcelain`, `Arcanist`],
		stats: {
			armor: 55,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1000,
			initialMana: 40,
			magicResist: 55,
			mana: 100,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 2200,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_LissandraSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumOfUnits': [0, 1, 1, 15],
					'Damage': [0, 640, 960, 8888],
					'Duration': [0, 3, 3, 15],
					'AOEDamage': [0, 150, 225, 600],
					'LootChancePercent': [0, 50, 50, 50],
					'ItemGuarenteeThreshold': [0, 5, 5, 5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 640, 960, 8888],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AOEDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AoEDamage`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Lux`,
		name: `Lux`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Lux.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Porcelain`, `Arcanist`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 550,
			initialMana: 15,
			magicResist: 20,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT11_LuxSpell`,
				castTime: 0.25,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1400,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `CastOnHit`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 210, 315, 480],
					'StunDuration': [0, 1.5, 1.5, 1.5],
					'TargetNum': [2, 2, 2, 2],
					'AOEDamage': [0, 80, 120, 185],
					'ReducedDamagePercent': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 210, 315, 480],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AOEDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AoEDamage`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Malphite`,
		name: `Malphite`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Malphite.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Heavenly`, `Behemoth`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 650,
			initialMana: 40,
			magicResist: 40,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_MalphiteSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Armor': [0, 75, 90, 110],
					'Duration': [8, 8, 8, 8],
					'PercentArmorDamage': [1.5, 0.8999999761581421, 1.2000000476837158, 1.600000023841858],
				},
				calculations: {
					'Armor': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Armor`,
										starValues: [0, 75, 90, 110],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentArmorDamage`,
										starValues: [1.5, 0.8999999761581421, 1.2000000476837158, 1.600000023841858],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_MalphiteSpellAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Armor': [0, 60, 90, 120],
					'Duration': [4, 4, 4, 4],
					'PercentArmorDamage': [2.5, 2.5, 2.5, 2.5],
				},
				calculations: {
					'Armor': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Armor`,
										starValues: [0, 60, 90, 120],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentArmorDamage`,
										starValues: [2.5, 2.5, 2.5, 2.5],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Morgana`,
		name: `Morgana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Morgana.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ghostly`, `Sage`],
		stats: {
			armor: 40,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 750,
			initialMana: 0,
			magicResist: 40,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT11_MorganaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 250, 375, 1600],
					'Duration': [3, 3, 3, 3],
					'HexRadius': [2, 2, 2, 2],
					'ChillDuration': [1, 1, 1, 1],
					'TOOLTIPONLYChillAmount': [10, 10, 10, 10],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 250, 375, 1600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_MorganaSpellMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.30000001192092896,
					speedInitial: undefined,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Nautilus`,
		name: `Nautilus`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Nautilus.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Warden`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 1000,
			initialMana: 80,
			magicResist: 60,
			mana: 180,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_NautilusSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StunDuration': [0, 1.75, 2, 8],
					'Damage': [0, 150, 225, 1000],
					'NumOfWaves': [3, 3, 3, 3],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 150, 225, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Neeko`,
		name: `Neeko`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Neeko.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Heavenly`, `Arcanist`],
		stats: {
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 800,
			initialMana: 40,
			magicResist: 45,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_NeekoSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Heal': [0, 275, 300, 350],
					'BuffDuration': [2, 2, 2, 2],
					'Damage': [0, 200, 300, 475],
					'DR': [0, 0.30000001192092896, 0.30000001192092896, 0.3499999940395355],
					'DamageIncreasePerEnemy': [1, 1, 1, 1],
				},
				calculations: {
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 275, 300, 350],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 200, 300, 475],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_NeekoBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Ornn`,
		name: `Ornn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Ornn.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dryad`, `Behemoth`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 80,
			magicResist: 60,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_OrnnSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ChannelDuration': [2, 2, 2, 2],
					'ShieldDuration': [4, 4, 4, 4],
					'MagicDamage': [0, 300, 450, 1500],
					'BaseShieldValue': [0, 300, 350, 1200],
					'PercentHealthShield': [0, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
				},
				calculations: {
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [0, 300, 450, 1500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{4151b72f}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseShieldValue`,
										starValues: [0, 300, 350, 1200],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'TotalShieldValue': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `BaseShieldValue`,
										starValues: [0, 300, 350, 1200],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `PercentHealthShield`,
										starValues: [0, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
										stat: `HP`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Qiyana`,
		name: `Qiyana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Qiyana.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Heavenly`, `Duelist`],
		stats: {
			armor: 35,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 700,
			initialMana: 0,
			magicResist: 35,
			mana: 20,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_QiyanaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 20, 30, 45],
					'Duration': [4, 4, 4, 4],
					'SecondaryTargetPercentage': [0, 0.75, 0.75, 0.75],
					'PercentAttackDamage': [1.2999999523162842, 1.350000023841858, 1.350000023841858, 1.350000023841858],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [1.2999999523162842, 1.350000023841858, 1.350000023841858, 1.350000023841858],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `Damage`,
										starValues: [0, 20, 30, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [1.2999999523162842, 1.350000023841858, 1.350000023841858, 1.350000023841858],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `Damage`,
										starValues: [0, 20, 30, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_Qiyana_FlameDisc_Mis`,
				castTime: undefined,
				missile: {
					width: 100,
					travelTime: undefined,
					speedInitial: 1500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2800,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_Qiyana_FlameDisc_Attack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 0,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_QiyanaCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 0,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_Qiyana_FlameDisc_SplineMis`,
				castTime: undefined,
				missile: {
					width: 400,
					travelTime: undefined,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `CastOnHit`,
						},
						{
							mActions: [
								{
									'{f73a559d}': true,
									mOverrideMovement: {
										mTracksTarget: false,
										mStartBoneName: ``,
										mProjectTargetToCastRange: true,
										mSpeed: 1000,
										__type: `FixedSpeedMovement`,
									},
									__type: `ClearTargetAndKeepMoving`,
								},
							],
							mTriggerName: `ReleaseMissile`,
							__type: `TriggerFromScript`,
						},
					],
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 2800,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Rakan`,
		name: `Rakan`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Rakan.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dragonlord`, `Lovers`, `Altruist`],
		stats: {
			armor: 60,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1100,
			initialMana: 30,
			magicResist: 60,
			mana: 90,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_RakanSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 185, 275, 2000],
					'HexRange': [2, 2, 2, 2],
					'DamageReductionPercent': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'DebuffDuration': [4, 4, 4, 4],
					'ShieldPercentDamage': [1, 1, 1, 1],
					'ShieldDuration': [2, 2, 2, 2],
					'BaseShieldAmount': [0, 160, 200, 600],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 185, 275, 2000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseShieldAmount`,
										starValues: [0, 160, 200, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_RakanBenchDummy`,
		name: `Rakan`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Rakan.TFT_Set11.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 0,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 10,
			hp: undefined,
			initialMana: 0,
			magicResist: 20,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_RakanBenchDummySpell`,
				castTime: undefined,
				missile: {
					width: 65,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							mActions: [
								{
									mSpeedValue: 5000,
									__type: `ChangeMissileSpeed`,
								},
							],
							mTriggerName: `MissileYeet`,
							__type: `TriggerFromScript`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 2,
							__type: `TriggerOnDelay`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'LoversTargets': [3, 3, 3, 3],
					'LoversHealAmt': [0, 150, 250, 1000],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_RekSai`,
		name: `Rek'Sai`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_RekSai.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dryad`, `Bruiser`],
		stats: {
			armor: 45,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 650,
			initialMana: 40,
			magicResist: 45,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_RekSaiSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentHPDamage': [0.11999999731779099, 0.11999999731779099, 0.11999999731779099, 0.11999999731779099],
					'Duration': [5, 5, 5, 5],
					'DefensesGained': [50, 50, 50, 50],
					'Damage': [0, 70, 90, 120],
					'StunDuration': [1, 1, 1, 1],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 70, 90, 120],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `PercentHPDamage`,
										starValues: [0.11999999731779099, 0.11999999731779099, 0.11999999731779099, 0.11999999731779099],
										stat: `HP`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_RekSaiSpell_HealMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Riven`,
		name: `Riven`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Riven.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Storyweaver`, `Altruist`, `Bruiser`],
		stats: {
			armor: 40,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 700,
			initialMana: 0,
			magicResist: 40,
			mana: 25,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_RivenSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [1.2000000476837158, 1.5, 1.5, 1.5499999523162842],
					'PercentAttackDamageBoosted': [3.5999999046325684, 3, 3, 3.0999999046325684],
					'Heal': [0, 150, 180, 220],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [1.2000000476837158, 1.5, 1.5, 1.5499999523162842],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 150, 180, 220],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BoostedModifiedDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamageBoosted`,
										starValues: [3.5999999046325684, 3, 3, 3.0999999046325684],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_RivenSpellQ1`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
					'PercentAttackDamageBoosted': [3, 3, 3, 3],
					'Heal': [0, 250, 300, 400],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 250, 300, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BoostedModifiedDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamageBoosted`,
										starValues: [3, 3, 3, 3],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_RivenSpellQ3`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
					'PercentAttackDamageBoosted': [3, 3, 3, 3],
					'Heal': [0, 250, 300, 400],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 250, 300, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BoostedModifiedDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamageBoosted`,
										starValues: [3, 3, 3, 3],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Senna`,
		name: `Senna`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Senna.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Inkshadow`, `Sniper`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 600,
			initialMana: 20,
			magicResist: 20,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 3500,
		critAttackMissileSpeed: 3500,
		passive: undefined,
		spells: [
			{
				name: `TFT11_SennaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BonusAttackDamage': [0, 20, 25, 30],
					'PercentAttackDamage': [2, 2.450000047683716, 2.450000047683716, 2.549999952316284],
					'Duration': [4, 4, 4, 4],
					'BonusRange': [2, 2, 2, 2],
					'BaseDamageAPScaling': [0, 20, 30, 45],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [2, 2.450000047683716, 2.450000047683716, 2.549999952316284],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseDamageAPScaling`,
										starValues: [0, 20, 30, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{75f83832}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamageAPScaling`,
										starValues: [0, 20, 30, 45],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_SennaPassive_Soul`,
				castTime: undefined,
				missile: {
					width: 35,
					travelTime: 0.5,
					speedInitial: 1700,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `DestroyOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Sett`,
		name: `Sett`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Sett.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Umbral`, `Warden`],
		stats: {
			armor: 70,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 1100,
			initialMana: 100,
			magicResist: 70,
			mana: 180,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 20,
		passive: undefined,
		spells: [
			{
				name: `TFT11_SettSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'AttackDamagePerThreshold': [2, 2, 2, 2],
					'HealthSquatThreshold': [1000, 1000, 1000, 1000],
					'PercentADPrimary': [6, 2.700000047683716, 2.700000047683716, 90.01000213623047],
					'PercentHealth': [80, 0.07999999821186066, 0.11999999731779099, 10],
					'PercentADSecondary': [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
					'FatedBonus': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
					'PercentAPSecondary': [0, 30, 45, 2000],
				},
				calculations: {
					'AoEDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentADSecondary`,
										starValues: [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `PercentAPSecondary`,
										starValues: [0, 30, 45, 2000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'PrimaryDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentADPrimary`,
										starValues: [6, 2.700000047683716, 2.700000047683716, 90.01000213623047],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Shen`,
		name: `Shen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Shen.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ghostly`, `Behemoth`],
		stats: {
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 800,
			initialMana: 25,
			magicResist: 45,
			mana: 75,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ShenSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [4, 4, 4, 4],
					'FlatDamageReduction': [0, 15, 20, 30],
					'AttackCount': [3, 3, 3, 3],
					'PercentArmorDamage': [2.5, 1, 1.5, 2.3499999046325684],
					'ShenSelfishReduction': [0, 40, 50, 90],
				},
				calculations: {
					'FlatDamageReduction': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `FlatDamageReduction`,
										starValues: [0, 15, 20, 30],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'TrueDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentArmorDamage`,
										starValues: [2.5, 1, 1.5, 2.3499999046325684],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ShenSelfishReduction': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShenSelfishReduction`,
										starValues: [0, 40, 50, 90],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_ExaltedCore`,
		name: `SightWard`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT_Template.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 0,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 10,
			hp: undefined,
			initialMana: 0,
			magicResist: 20,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ExaltedCoreSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_FortuneProp`,
		name: `SightWard`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT_Template.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 88,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 0,
			hp: 88888,
			initialMana: 0,
			magicResist: 88,
			mana: 100,
			moveSpeed: 500,
			range: 138,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_FortuneProp`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'RoundsToHatch': [2, 2, 2, 2],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_FortuneProp_HR`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'RoundsToHatch': [2, 2, 2, 2],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Sivir`,
		name: `Sivir`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Sivir.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Storyweaver`, `Trickshot`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1750,
		critAttackMissileSpeed: 1750,
		passive: undefined,
		spells: [
			{
				name: `TFT11_SivirSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0.44999998807907104, 0.949999988079071, 0.949999988079071, 1],
					'Duration': [8, 8, 8, 8],
					'AttackSpeed': [0.20000000298023224, 0.15000000596046448, 0.20000000298023224, 0.25],
				},
				calculations: {
					'AttackSpeed': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AttackSpeed`,
										starValues: [0.20000000298023224, 0.15000000596046448, 0.20000000298023224, 0.25],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_SivirEmpoweredSharpshooterBounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1300,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_SivirSharpshooterBounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1300,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_SivirEmpoweredBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1750,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							mTriggerName: `Ricochet`,
							mDelay: 0,
							__type: `TriggerFromScript`,
						},
						{
							__type: `CastOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 4,
							__type: `TriggerOnDelay`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Soraka`,
		name: `Soraka`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Soraka.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Heavenly`, `Altruist`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 650,
			initialMana: 0,
			magicResist: 25,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_SorakaSpell`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'Damage': [0, 220, 330, 510],
					'AoEDamage': [0, 110, 165, 255],
					'APPerThreshold': [6, 6, 6, 6],
					'PercentHealthLost': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'APPerHealthLoss': [8, 8, 8, 8],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 220, 330, 510],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AOEDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AoEDamage`,
										starValues: [0, 110, 165, 255],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Sylas`,
		name: `Sylas`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Sylas.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Umbral`, `Bruiser`],
		stats: {
			armor: 50,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1000,
			initialMana: 0,
			magicResist: 50,
			mana: 40,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1750,
		critAttackMissileSpeed: 1750,
		passive: undefined,
		spells: [
			{
				name: `TFT11_SylasSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 200, 300, 1000],
					'AOEDamage': [0, 90, 135, 450],
					'Heal': [0, 120, 140, 500],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 200, 300, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AOEDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AoEDamage`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Heal`,
										starValues: [0, 120, 140, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Syndra`,
		name: `Syndra`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Syndra.TFT_Set11.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Arcanist`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 700,
			initialMana: 0,
			magicResist: 30,
			mana: 30,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT11_SyndraSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumStartingButt': [7, 7, 7, 10],
					'DamagePerButt': [0, 40, 60, 180],
					'FatedBonus': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'NumCastsPerButt': [1, 1, 1, 1],
				},
				calculations: {
					'DamagePerButt': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DamagePerButt`,
										starValues: [0, 40, 60, 180],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_SyndraRMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1,
					speedMin: 1,
					speedMax: 10000,
					acceleration: 7500,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							mTriggerName: `ClearTargets`,
							mDelay: 0.05000000074505806,
							__type: `TriggerFromScript`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 2,
							__type: `TriggerOnDelay`,
						},
					],
					type: `AcceleratingMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_SyndraRMissileNonVisual`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1,
					speedMin: 1,
					speedMax: 10000,
					acceleration: 7500,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							mTriggerName: `ClearTargets`,
							mDelay: 0.05000000074505806,
							__type: `TriggerFromScript`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 2,
							__type: `TriggerOnDelay`,
						},
					],
					type: `AcceleratingMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_SyndraCollectButtMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
					speedInitial: undefined,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_TahmKench`,
		name: `Tahm Kench`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_TahmKench.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mythic`, `Bruiser`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 850,
			initialMana: 40,
			magicResist: 45,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_TahmKenchSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 300, 450, 700],
					'PercentHealthShield': [0, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'Duration': [3, 3, 3, 3],
					'BonusShield': [0, 200, 250, 300],
					'BonusPercentDamage': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 300, 450, 700],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentHealthShield`,
										starValues: [0, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
										stat: `HP`,
										ratio: 1,
									},
								],
							},
						],
					},
					'BonusModifiedShield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusShield`,
										starValues: [0, 200, 250, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BonusModifiedDamage': {
						asPercent: false,
						parts: [
							{
								operator: `identity`,
								subparts: [
									{
										variable: `BonusPercentDamage`,
										starValues: [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT_TrainingDummy`,
		name: `Target Dummy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFTDebug_Dummy.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 30,
			attackSpeed: 0.20000000298023224,
			critChance: null,
			critMultiplier: 0,
			damage: 50,
			hp: 550,
			initialMana: 0,
			magicResist: 30,
			mana: 0,
			moveSpeed: 1,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT_TrainingDummy_Spell`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Teemo`,
		name: `Teemo`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Teemo.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fortune`, `Trickshot`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 550,
			initialMana: 0,
			magicResist: 20,
			mana: 30,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT11_TeemoSpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1400,
				},
				variables: {
					'Duration': [8, 8, 8, 8],
					'Damage': [0, 420, 630, 1000],
					'TickRate': [0.5, 0.5, 0.5, 0.5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 420, 630, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_TeemoSharpshooterBounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1300,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Thresh`,
		name: `Thresh`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Thresh.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Behemoth`],
		stats: {
			armor: 50,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 900,
			initialMana: 30,
			magicResist: 50,
			mana: 90,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ThreshSpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Shield': [0, 360, 400, 450],
					'Damage': [0, 100, 150, 250],
					'ShieldDuration': [4, 4, 4, 4],
					'ResistShareDuration': [6, 6, 6, 6],
					'PercentArmorAndMR': [0, 0.30000001192092896, 0.30000001192092896, 0.3499999940395355],
					'FatedDefenses': [20, 20, 20, 20],
				},
				calculations: {
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Shield`,
										starValues: [0, 360, 400, 450],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 100, 150, 250],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_ThreshSpellMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Tibbers`,
		name: `Tibbers`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Tibbers.TFT_Set11.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: 0,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 70,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.5,
			damage: 50,
			hp: 850,
			initialMana: 50,
			magicResist: 70,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_TibbersSpell`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'StunDuration': [0, 1.75, 2.5, 8],
					'Damage': [0, 200, 300, 1000],
					'PercentMaximumHealthDamage': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 200, 300, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Tristana`,
		name: `Tristana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Tristana.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fortune`, `Duelist`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 700,
			initialMana: 40,
			magicResist: 25,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2250,
		critAttackMissileSpeed: 2250,
		passive: undefined,
		spells: [
			{
				name: `TFT11_TristanaSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0, 2.6500000953674316, 2.6500000953674316, 2.700000047683716],
					'AttackDamage': [0, 0.44999998807907104, 0.44999998807907104, 0.5],
					'Duration': [6, 6, 6, 6],
					'BaseSpellDamage': [0, 75, 115, 185],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0, 2.6500000953674316, 2.6500000953674316, 2.700000047683716],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseSpellDamage`,
										starValues: [0, 75, 115, 185],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BaseDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseSpellDamage`,
										starValues: [0, 75, 115, 185],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Udyr`,
		name: `Udyr`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Udyr.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Inkshadow`, `Behemoth`, `Spirit Walker`],
		stats: {
			armor: 50,
			attackSpeed: 0.949999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 950,
			initialMana: 30,
			magicResist: 50,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_UdyrSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'HexDistance': [0, 2, 2, 10],
					'Damage': [0, 300, 450, 4800],
					'ShieldAmt': [0, 300, 375, 5000],
					'ShieldDuration': [3, 3, 3, 10],
					'ASPercent': [1.5, 0.6000000238418579, 0.699999988079071, 5],
					'BuffDuration': [4, 6, 6, 30],
					'BounceCount': [0, 4, 4, 6],
					'ShurikenDamage': [0, 150, 225, 4500],
					'BearWearManaCost': [40, 40, 40, 40],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 300, 450, 4800],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldAmt`,
										starValues: [0, 300, 375, 5000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'ShurikenDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShurikenDamage`,
										starValues: [0, 150, 225, 4500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_UdyrShurikenBounceMis2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.1899999976158142,
					speedInitial: 600,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_UdyrShurikenBounceMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.1899999976158142,
					speedInitial: 600,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT_Voidspawn`,
		name: `Voidspawn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT_Voidspawn.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 20,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 0,
			hp: undefined,
			initialMana: 0,
			magicResist: 20,
			mana: 0,
			moveSpeed: 550,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT_VoidSpawn_Passive`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Volibear`,
		name: `Volibear`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Volibear.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Inkshadow`, `Duelist`],
		stats: {
			armor: 50,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 900,
			initialMana: 0,
			magicResist: 50,
			mana: 50,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_VolibearSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StunDuration': [1, 1, 1, 1],
					'SmallDamage': [0, 35, 50, 80],
					'LargeDamage': [0, 80, 120, 185],
					'HealthRatio': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'HealAmount': [0, 140, 170, 210],
				},
				calculations: {
					'SmallDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SmallDamage`,
										starValues: [0, 35, 50, 80],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'LargeDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `HealthRatio`,
										starValues: [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
										stat: `HP`,
										ratio: 1,
									},
									{
										variable: `LargeDamage`,
										starValues: [0, 80, 120, 185],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `HealAmount`,
										starValues: [0, 140, 170, 210],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_VolibearSpellStunAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_VolibearSpellAttackStart`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 467,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_VolibearSpellAttack1`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 467,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_VolibearSpellAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 467,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_WuKong`,
		name: `Wukong`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_WuKong.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Great`, `Heavenly`, `Sage`],
		stats: {
			armor: 65,
			attackSpeed: 0.8999999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 1200,
			initialMana: 0,
			magicResist: 65,
			mana: 30,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_WuKongSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StunPercentAttackDamage': [0, 3, 3, 9],
					'SpinPercentAttackDamage': [0, 3, 3, 9],
					'BonkPercentAttackDamage': [0, 3, 3, 15],
					'DashHexRange': [2, 2, 2, 2],
					'BonkDamage': [0, 70, 105, 155],
					'StunDuration': [2, 1.5, 1.5, 8],
					'SpinHexRange': [1, 1, 1, 1],
					'BonkHexRange': [3, 3, 3, 3],
					'StunDurationPerGreat': [1, 1, 1, 1],
					'SpinHexRangePerGreat': [1, 1, 1, 1],
					'BonkHexRangePerGreat': [2, 2, 2, 2],
					'TootChance': [5, 5, 5, 5],
				},
				calculations: {
					'SpinDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `SpinPercentAttackDamage`,
										starValues: [0, 3, 3, 9],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'BonkDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `BonkPercentAttackDamage`,
										starValues: [0, 3, 3, 15],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BonkDamage`,
										starValues: [0, 70, 105, 155],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'StunDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `StunPercentAttackDamage`,
										starValues: [0, 3, 3, 9],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Xayah`,
		name: `Xayah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_XayahRakan.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Dragonlord`, `Lovers`, `Trickshot`],
		stats: {
			armor: 40,
			attackSpeed: 0.8999999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 850,
			initialMana: 30,
			magicResist: 40,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT11_XayahSpell`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 10,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							mActions: [
								{
									mSpeedValue: 5000,
									__type: `ChangeMissileSpeed`,
								},
							],
							mTriggerName: `MissileYeet`,
							__type: `TriggerFromScript`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 2,
							__type: `TriggerOnDelay`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'NumClosestTargets': [4, 4, 4, 4],
					'FeatherDamage': [0, 0.699999988079071, 0.699999988079071, 5],
					'FeatherRecallDamage': [0, 0.5, 0.5, 5],
					'FeatherRecallBaseDamage': [0, 15, 25, 75],
					'FeatherCount': [0, 12, 12, 30],
				},
				calculations: {
					'FeatherDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `FeatherDamage`,
										starValues: [0, 0.699999988079071, 0.699999988079071, 5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{f834bbe1}': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `FeatherRecallDamage`,
										starValues: [0, 0.5, 0.5, 5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{aef1cdd0}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `FeatherRecallBaseDamage`,
										starValues: [0, 15, 25, 75],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'FeatherRecallDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `FeatherRecallBaseDamage`,
										starValues: [0, 15, 25, 75],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `FeatherRecallDamage`,
										starValues: [0, 0.5, 0.5, 5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_XayahSpellMissile`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 10,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							mActions: [
								{
									mSpeedValue: 5000,
									__type: `ChangeMissileSpeed`,
								},
							],
							mTriggerName: `MissileYeet`,
							__type: `TriggerFromScript`,
						},
						{
							mActions: [
								{
									__type: `Destroy`,
								},
							],
							mDelay: 2,
							__type: `TriggerOnDelay`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT11_XayahReturnMissile`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 4800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_XayahBenchDummy`,
		name: `Xayah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Xayah.TFT_Set11.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 0,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 10,
			hp: undefined,
			initialMana: 0,
			magicResist: 20,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT11_XayahBenchDummySpell`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'LoversDamage': [3, 200, 300, 800],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_XayahBenchDummySpell_Left`,
				castTime: undefined,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_XayahRakanDummy`,
		name: `Xayah & Rakan`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_XayahRakan.TFT_Set11.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lovers`, `Dragonlord`, `Trickshot/Altruist`],
		stats: {
			armor: 0,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 10,
			hp: 800,
			initialMana: 0,
			magicResist: 20,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT11_XayahRakanDummySpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Yasuo`,
		name: `Yasuo`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Yasuo.TFT_Set11.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fated`, `Duelist`],
		stats: {
			armor: 45,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 35,
			hp: 600,
			initialMana: 0,
			magicResist: 45,
			mana: 70,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_YasuoSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [200, 200, 300, 450],
					'ShieldDuration': [5, 5, 5, 5],
					'BaseShield': [0, 175, 200, 250],
					'ShieldResistPct': [0, 1, 1.100000023841858, 1.25],
					'ShieldDamage': [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 0.44999998807907104],
					'FatedBonus': [300, 300, 300, 300],
				},
				calculations: {
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ShieldResistPct`,
										starValues: [0, 1, 1.100000023841858, 1.25],
										stat: `Armor`,
										ratio: 1,
									},
									{
										variable: `ShieldResistPct`,
										starValues: [0, 1, 1.100000023841858, 1.25],
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: `BaseShield`,
										starValues: [0, 175, 200, 250],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [200, 200, 300, 450],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'ShieldDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ShieldDamage`,
										starValues: [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 0.44999998807907104],
										stat: `Armor`,
										ratio: 1,
									},
									{
										variable: `ShieldDamage`,
										starValues: [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 0.44999998807907104],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT11_YasuoKanmeiMis`,
				castTime: 0.5,
				missile: {
					width: 90,
					travelTime: undefined,
					speedInitial: 1500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT11_Yone`,
		name: `Yone`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Yone.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Umbral`, `Reaper`],
		stats: {
			armor: 50,
			attackSpeed: 0.8999999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 800,
			initialMana: 0,
			magicResist: 50,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT11_YoneSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ADRatio': [0, 1.649999976158142, 1.649999976158142, 1.75],
					'Shield': [0, 280, 340, 400],
					'ShieldDuration': [3, 3, 3, 3],
					'ASBonus': [0.75, 0.75, 0.75, 0.75],
					'WoundDuration': [5, 5, 5, 5],
					'HexRange': [3, 3, 3, 3],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `ADRatio`,
										starValues: [0, 1.649999976158142, 1.649999976158142, 1.75],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Shield`,
										starValues: [0, 280, 340, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Yorick`,
		name: `Yorick`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Yorick.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Umbral`, `Behemoth`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 800,
			initialMana: 40,
			magicResist: 50,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT11_YorickSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [3, 3, 3, 3],
					'NumOfEnemies': [2, 2, 2, 2],
					'Damage': [0, 160, 240, 375],
					'HealthGain': [0, 300, 360, 420],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 160, 240, 375],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT11_Zoe`,
		name: `Zoe`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Zoe.TFT_Set11.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Fortune`, `Storyweaver`, `Arcanist`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 650,
			initialMana: 0,
			magicResist: 25,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1900,
		critAttackMissileSpeed: 2200,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ZoeSpell`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: 1000,
					speedMax: 5000,
					acceleration: 5000,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							mTriggerName: `ClearTargets`,
							__type: `TriggerFromScript`,
						},
					],
					type: `AcceleratingMovement`,
				},
				variables: {
					'Damage': [0, 275, 415, 640],
					'BounceRange': [2, 2, 2, 2],
					'SecondarySpellDamage': [100, 90, 135, 215],
					'RicochetsPerKill': [1, 1, 1, 1],
					'TOOLTIPBounceRange': [2, 2, 2, 2],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 275, 415, 640],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondarySpellDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondarySpellDamage`,
										starValues: [100, 90, 135, 215],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT11_ZoeQMissile`,
				castTime: 0.25,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: 1000,
					speedMax: 5000,
					acceleration: 5000,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
						{
							mActions: [
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							mTriggerName: `ClearTargets`,
							__type: `TriggerFromScript`,
						},
					],
					type: `AcceleratingMovement`,
					_missileSpeed: 1200,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT11_Zyra`,
		name: `Zyra`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT11_Zyra.TFT_Set11.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Storyweaver`, `Sage`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 600,
			initialMana: 30,
			magicResist: 20,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1700,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT11_ZyraSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [0, 3, 3, 3],
					'Damage': [0, 90, 135, 210],
					'WoundDuration': [6, 6, 6, 6],
					'NumPlants': [0, 2, 2, 2],
					'NumPlantAutos': [3, 3, 3, 3],
					'WoundAmount': [33, 33, 33, 33],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 90, 135, 210],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
]

export const otherUnits: ChampionData[] = []

export const abilities: Record<string, AbilityData> = {
	'TFT11_Aatrox': {
		desc: `@ShredTooltipOnly@% <TFTKeyword>Shred</TFTKeyword> the current target for @Duration@&nbsp;seconds and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to them. Heal <scaleHealth>@ModifiedHealing@&nbsp;(%i:scaleAP%)</scaleHealth> Health.<br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist</rules>`,
		icon: `ASSETS/Characters/TFT11_Aatrox/HUD/Icons2D/TFT11_Aatrox_Ability.tex`,
		name: `Phantom Blade`,
		variables: {
			'Damage': [0, 260, 390, 600],
			'FlatHealing': [0, 200, 250, 300],
			'Duration': [4, 4, 4, 4],
			'ShredTooltipOnly': [20, 20, 20, 20],
		},
	},
	'TFT11_Ahri': {
		desc: `Deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current target and <magicDamage>@ModifiedSecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to adjacent enemies.<br><br>Fated Bonus: Gain <TFTBonus>@FatedBonus@&nbsp;%i:scaleAP%</TFTBonus>.<br>`,
		icon: `ASSETS/Characters/TFT11_Ahri/HUD/Icons2D/TFT11_Ahri_Ability.tex`,
		name: `Love Bomb`,
		variables: {
			'Damage': [0, 280, 420, 630],
			'NumAllies': [1, 1, 1, 1],
			'FatedBonus': [30, 30, 30, 30],
			'NumSeconds': [2, 2, 2, 2],
			'SecondaryDamage': [0, 130, 195, 295],
		},
	},
	'TFT11_Alune': {
		desc: `Rain meteors through the row with the most total enemy Health. Meteors deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage split between all enemies hit. Deal <magicDamage>@ModifiedPrimaryDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current target. All enemies hit are @ShredPercent@%&nbsp;<TFTKeyword>Shredded</TFTKeyword> for @ShredDuration@&nbsp;seconds. <br><br>Grant <TFTBonus>@AttackSpeed*100@%</TFTBonus>&nbsp;Attack Speed split amongst allies in Alune's row for @AttackSpeedDuration@&nbsp;seconds.<br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist</rules>`,
		icon: `ASSETS/Characters/TFT11_Alune/HUD/Icons2D/TFT11_Alune_Ability.tex`,
		name: `Lunar Barrage`,
		variables: {
			'MagicDamage': [0, 360, 540, 860],
			'ShredDuration': [6, 6, 6, 6],
			'ShredPercent': [20, 20, 20, 20],
			'PrimaryMagicDamage': [0, 160, 240, 380],
			'AttackSpeed': [0.4000000059604645, 0.20000000298023224, 0.25, 0.30000001192092896],
			'AttackSpeedDuration': [5, 5, 5, 5],
		},
	},
	'TFT11_Amumu': {
		desc: `Over the next @Duration@&nbsp;seconds, heal <scaleHealth>@ModifiedSelfHealingAmount@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health per second and cry on adjacent units. Every second, tears heal allies for <scaleHealth>@ModifiedAllyHealingAmount@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies..`,
		icon: `ASSETS/Characters/TFT11_Amumu/HUD/Icons2D/TFT11_Amumu_Ability.tex`,
		name: `Herbal Tea-rs`,
		variables: {
			'Duration': [3, 3, 3, 3],
			'SelfHealingAmount': [0, 250, 300, 375],
			'AllyHealingAmount': [0, 80, 100, 125],
			'Damage': [50, 150, 225, 360],
		},
	},
	'TFT11_Annie': {
		desc: `<spellPassive>Passive</spellPassive>: Heal <scaleHealth>@PassiveHeal@&nbsp;(%i:scaleHealth%)</scaleHealth>&nbsp;Health when damaging a <TFTKeyword>Burning</TFTKeyword> enemy.<br><br><spellActive>Active</spellActive>: On first cast, hop on Tibbers, gaining <scaleHealth>@BonusHealth@&nbsp;(%i:scaleHealth%)</scaleHealth> max Health and <TFTKeyword>Stunning</TFTKeyword> enemies within 2 hexes for @StunDuration@&nbsp;seconds. <br><br>Deal <magicDamage>@TotalDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage, <TFTKeyword>Burn</TFTKeyword>, and <TFTKeyword>Wound</TFTKeyword> enemies within 2 hexes for @DebuffDuration@&nbsp;seconds.<br><br><rules>Burn: Deal 1% of the target's max Health as true damage every second</rules><br><rules>Wound: Reduce healing received by 33%</rules>`,
		icon: `ASSETS/Characters/TFT11_Annie/HUD/Icons2D/TFT11_Annie_Ability.tex`,
		name: `Get 'em, Tibbers!`,
		variables: {
			'HealthRatio': [1, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
			'StunDuration': [1.5, 1.5, 1.5, 1.5],
			'Damage': [0, 150, 225, 2500],
			'DebuffDuration': [8, 8, 8, 8],
			'APHealth': [0, 300, 350, 1500],
			'HealRatio': [0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806],
			'HexRange': [2, 2, 2, 2],
		},
	},
	'TFT11_Aphelios': {
		desc: `@SunderTooltipPercent@% <TFTKeyword>Sunder</TFTKeyword> the nearest @NumShots@ enemies for @Duration@&nbsp;seconds. Then fire @NumShots@&nbsp;shots at them, dealing <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage each.<br><br>Fated Bonus: Gain <TFTBonus>@FatedBonus*100@%&nbsp;%i:scaleAD%</TFTBonus>.<br><br><rules><tftbold>Sunder:</tftbold> Reduce Armor</rules>`,
		icon: `ASSETS/Characters/TFT11_Aphelios/HUD/Icons2D/TFT11_Aphelios_Ability.tex`,
		name: `Duskwave`,
		variables: {
			'PercentAttackDamage': [0.5, 1.850000023841858, 1.850000023841858, 1.9500000476837158],
			'Duration': [7, 7, 7, 7],
			'ConeRadius': [45, 22, 22, 22],
			'FatedBonus': [0.25, 0.25, 0.25, 0.25],
			'SunderTooltipPercent': [20, 20, 20, 20],
			'NumShots': [3, 3, 3, 3],
			'BaseDamage': [0, 30, 45, 70],
		},
	},
	'TFT11_Ashe': {
		desc: `<spellPassive>Passive</spellPassive>: Start with @StartingArrows@&nbsp;arrows. Gain <scaleLevel>@ArrowOnAttackThreshold@</scaleLevel>&nbsp;every @AttackThreshold@&nbsp;attacks. (Current arrows: <TFTBonus>@TFTUnitProperty.:TFT11_Unit_AsheArrows@</TFTBonus>)<br><br><spellActive>Active</spellActive>: Fire a volley split between the current target and the @NumEnemiesMinusTarget@&nbsp;closest enemies within range, dealing <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage per stored arrow for a total of <physicalDamage>@TFTUnitProperty.:TFT11_Unit_AsheTotalSpellDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage.`,
		icon: `ASSETS/Characters/TFT11_Ashe/HUD/Icons2D/TFT11_Ashe_Ability.tex`,
		name: `Rain of Shards`,
		variables: {
			'PercentAttackDamage': [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 1],
			'ArrowBaseDamage': [0, 4, 6, 20],
			'StartingArrows': [15, 15, 15, 15],
			'ArrowOnAttackThreshold': [0, 1, 1, 3],
			'AttackThreshold': [3, 3, 3, 3],
			'NumOfAdditionalEnemies': [3, 3, 3, 3],
			'TotalSpellTime': [0.8999999761581421, 0.8999999761581421, 0.8999999761581421, 0.8999999761581421],
			'NumEnemiesMinusTarget': [3, 3, 3, 3],
			'ArrowsPerCast': [],
		},
	},
	'TFT11_Azir': {
		desc: `Fire a beam through the current target, dealing <magicDamage>@ModifiedLaserDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies hit. Spawn a Guardian adjacent to the first enemy hit with <scaleHealth>@SoldierHealth@</scaleHealth> Health. The Guardian does not move or attack.`,
		icon: `ASSETS/Characters/TFT11_Azir/HUD/Icons2D/TFT11_Azir_Passive.TFT_Set11.tex`,
		name: `Blight`,
		variables: {
			'LaserDamage': [0, 500, 750, 5000],
			'SoldierHealth': [0, 1100, 1500, 8000],
		},
	},
	'TFT11_Bard': {
		desc: `For the next @ScaledDuration@ seconds, attacks instead throw 2 Meeps, each dealing <physicalDamage>@ModifiedPhysicalDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage and <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage.`,
		icon: `ASSETS/Characters/TFT11_Bard/HUD/Icons2D/TFT11_Bard_Ability.tex`,
		name: `Meep Meep!`,
		variables: {
			'Duration': [6, 6, 6, 6],
			'PercentAttackDamage': [0.800000011920929, 0.6499999761581421, 0.6499999761581421, 0.699999988079071],
			'APDamage': [200, 24, 36, 60],
			'AOEDamageMultiplier': [2, 2, 2, 2],
			'HexDistance': [2, 2, 2, 2],
		},
	},
	'TFT11_Caitlyn': {
		desc: `Fire a bullet towards the farthest enemy, dealing <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to the first enemy hit.`,
		icon: `ASSETS/Characters/TFT11_Caitlyn/HUD/Icons2D/TFT11_Caitlyn_Ability.tex`,
		name: `Ace in the Hole`,
		variables: {
			'PercentAttackDamage': [7, 7, 7, 7],
			'APDamage': [0, 100, 150, 225],
		},
	},
	'TFT11_ChoGath': {
		desc: `Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Shield for @ShieldDuration@&nbsp;seconds and breathe a cone of fire, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage,  <TFTKeyword>Burning</TFTKeyword>, and <TFTKeyword>Wounding</TFTKeyword> enemies hit for @BurnWoundDuration@&nbsp;seconds. <br><br><rules>Burn: Deal 1% of the target's max Health as true damage every second<br>Wound: Reduce healing received by 33%</rules>`,
		icon: `ASSETS/Characters/TFT11_ChoGath/HUD/Icons2D/TFT11_ChoGath_Ability.tex`,
		name: `Eruption`,
		variables: {
			'BurnWoundDuration': [9, 9, 9, 9],
			'Damage': [0, 200, 300, 450],
			'Shield': [0, 280, 350, 420],
			'ShieldDuration': [4, 4, 4, 4],
		},
	},
	'TFT11_Darius': {
		desc: `Deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to adjacent enemies. For the next @Duration@&nbsp;seconds, attacks deal <magicDamage>@ModifiedDamageOnHit@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;bonus magic damage.`,
		icon: `ASSETS/Characters/TFT11_Darius/HUD/Icons2D/TFT11_Darius_Ability.tex`,
		name: `Decimate`,
		variables: {
			'Damage': [0.5, 200, 300, 450],
			'ManaRefund': [15, 15, 15, 15],
			'DamageOnHit': [15, 90, 135, 200],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT11_Diana': {
		desc: `Heal <scaleHealth>@ModifiedHeal@</scaleHealth>&nbsp;(%i:scaleAP%) Health and create a 1-hex sacred zone around Diana for @Duration@&nbsp;seconds, taking <TFTBonus>@DR*100@%</TFTBonus>&nbsp;reduced damage from enemies outside the zone. While the zone is up, Diana's attacks deal <magicDamage>@TotalDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;bonus magic damage.`,
		icon: `ASSETS/Characters/TFT11_Diana/HUD/Icons2D/TFT11_Diana_Ability.tex`,
		name: `Purification Rites`,
		variables: {
			'Damage': [0, 75, 110, 170],
			'Duration': [4, 4, 4, 4],
			'DR': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'Heal': [0, 275, 300, 375],
		},
	},
	'TFT11_Galio': {
		desc: `<TFTKeyword>Taunt</TFTKeyword> enemies within @HexRadius@&nbsp;hexes and gain <TFTBonus>@ModifiedArmor@&nbsp;(%i:scaleArmor%)</TFTBonus>&nbsp;Armor and <TFTBonus>@ModifiedMagicResist@&nbsp;(%i:scaleMR%)</TFTBonus>&nbsp;Magic Resist for @Duration@&nbsp;seconds. Galio is immobile and unstoppable during this time.<br><br>After, deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to all enemies in range and grant <TFTBonus>@ModifiedShieldAmount@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Shield to allies in range for @ShieldDuration@&nbsp;seconds.<br><br><tftitemrules><tftbold>Taunt</tftbold>: enemies that are able and in range must attack the taunter</tftitemrules>`,
		icon: `ASSETS/Characters/TFT11_Galio/HUD/Icons2D/TFT11_Galio_Ability.tex`,
		name: `Savior's Protection`,
		variables: {
			'BaseResists': [2, 130, 160, 1000],
			'BonusResistsPct': [0.5, 0.5, 0.5, 0.5],
			'Duration': [4, 4, 4, 2],
			'HexRadius': [3, 3, 3, 3],
			'Damage': [100, 100, 150, 1800],
			'ShieldPercent': [0.10000000149011612, 160, 200, 2000],
			'ShieldDuration': [4, 4, 4, 4],
		},
	},
	'TFT11_Garen': {
		desc: `Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus> Shield for @Duration@&nbsp;seconds. Garen's next attack deals <physicalDamage>@AdditionalDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage.`,
		icon: `ASSETS/Characters/TFT11_Garen/HUD/Icons2D/TFT11_Garen_Ability.tex`,
		name: `Courage`,
		variables: {
			'PercentHealthShield': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
			'Duration': [5, 5, 5, 5],
			'ShieldBase': [0, 250, 275, 300],
			'ADPercent': [4.5, 4.5, 4.5, 4.5],
		},
	},
	'TFT11_Gnar': {
		desc: `<spellPassive>Passive</spellPassive>: Gain <TFTBonus>@ModifiedADGain@%&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Attack&nbsp;Damage upon attacking or getting hit, up to @MaxStacks@ times. (Current bonus: <TFTBonus>@TFTUnitProperty.:TFT11_Gnar_CurrentADBonus@%</TFTBonus>)<br><br><spellActive>Active</spellActive>: Fling a boulder at the current target, dealing <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to targets in a line.`,
		icon: `ASSETS/Characters/TFT11_Gnar/HUD/Icons2D/TFT11_Gnar_Ability.tex`,
		name: `Boulder Toss`,
		variables: {
			'PercentAttackDamage': [0, 3.0999999046325684, 3.0999999046325684, 3.200000047683716],
			'ADGain': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
			'MaxStacks': [50, 50, 50, 50],
		},
	},
	'TFT11_Hwei': {
		desc: `Create an expanding paint pool around the most units that heals allies within for <scaleHealth>@ModifiedHealing@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health every second for 3 seconds. After 3 seconds, it explodes, healing allies within for <scaleHealth>@ModifiedEndHeal@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health and dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies.`,
		icon: `ASSETS/Characters/TFT11_Hwei/HUD/Icons2D/TFT11_Hwei_Ability.tex`,
		name: `A Brush with Fate`,
		variables: {
			'Damage': [0, 200, 300, 2000],
			'Healing': [0, 40, 60, 1000],
			'EndHeal': [0, 100, 150, 1000],
		},
	},
	'TFT11_Illaoi': {
		desc: `Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus> Shield and summon a tentacle near the current target for @Duration@&nbsp;seconds. The tentacle slams every second, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage in a&nbsp;line and healing Illaoi for <scaleHealth>@ModifiedHealAmount@&nbsp;(%i:scaleAP%)</scaleHealth> Health.`,
		icon: `ASSETS/Characters/TFT11_Illaoi/HUD/Icons2D/TFT11_Illaoi_Ability.tex`,
		name: `Prophet of Spirits`,
		variables: {
			'Duration': [4, 4, 4, 4],
			'Damage': [0.10000000149011612, 80, 120, 190],
			'Shield': [0, 325, 400, 500],
			'Heal': [0, 50, 60, 70],
		},
	},
	'TFT11_Irelia': {
		desc: `<spellPassive>Passive</spellPassive>: Attacks send blades that dart between enemies, dealing <physicalDamage>@Damage_BladeHit@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage and 30% <TFTKeyword>Sunder</TFTKeyword> for @SunderDuration@ seconds. Cast every @AttacksToCast_MustMatchResourceMaximum@&nbsp;attacks.<br><br><spellActive>Active</spellActive>: Command the blades to swiftly strike the three lowest Health enemies, dealing <physicalDamage>@Damage_SpellHit@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical&nbsp;damage and applying on-hit effects.<br><br><rules>Irelia converts @AttackSpeedToBladeSpeed*100@%&nbsp;of bonus attack&nbsp;speed into faster blade movement, and @AttackSpeedToDamage*100@% into Attack Damage.</rules><br><br><tftitemrules><tftbold>Sunder:</tftbold> Reduce Armor</tftitemrules>`,
		icon: `ASSETS/Characters/TFT11_Irelia/HUD/Icons2D/TFT11_Irelia_Ability.tex`,
		name: `Blade Dance`,
		variables: {
			'NumOfBlades': [7, 7, 7, 7],
			'BladeHitAD': [0, 1.5, 1.5, 14],
			'AttacksToCast_MustMatchResourceMaximum': [8, 8, 8, 8],
			'SpellAPDamage': [100, 100, 100, 100],
			'SpellHitAD': [0, 3, 3, 20],
			'AttackSpeedToDamage': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
			'AttackSpeedToBladeSpeed': [0.25, 0.25, 0.25, 0.25],
			'NumSpellBlades': [3, 3, 3, 3],
			'NumSpellHIts': [3, 3, 3, 3],
			'SunderDuration': [5, 5, 5, 5],
		},
	},
	'TFT11_Janna': {
		desc: `Grant <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Shield to the @NumShieldTargets@ lowest Health allies for @Duration@ seconds. Then, deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the @NumTargets@&nbsp;nearest enemies.`,
		icon: `ASSETS/Characters/TFT11_Janna/HUD/Icons2D/TFT11_Janna_Ability.tex`,
		name: `Heavenly Winds`,
		variables: {
			'Duration': [4, 4, 4, 4],
			'NumTargets': [2, 2, 2, 2],
			'Shield': [0, 120, 150, 200],
			'BaseDamage': [0, 180, 270, 415],
			'NumShieldTargets': [2, 2, 2, 2],
		},
	},
	'TFT11_Jax': {
		desc: `Gain <TFTBonus>@Resists@</TFTBonus>&nbsp;Armor and Magic Resist for the next @Duration@&nbsp;seconds. Afterwards, deal <magicDamage>@ModifiedAOEDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to adjacent enemies. The current target takes <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage and is Stunned for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT11_Jax/HUD/Icons2D/TFT11_Jax_Ability.tex`,
		name: `Counter Strike`,
		variables: {
			'Duration': [2, 2, 2, 2],
			'Damage': [0, 250, 375, 560],
			'StunDuration': [1.5, 1.5, 1.5, 1.5],
			'Resists': [60, 60, 60, 60],
			'ICD': [0.9900000095367432, 0.9900000095367432, 0.9900000095367432, 0.9900000095367432],
			'AOEDamage': [0, 100, 150, 225],
		},
	},
	'TFT11_Kaisa': {
		desc: `Fire @NumHits_Do_NOT_Change@&nbsp;waves at the current target over @SpellDurationTOOLTIPONLY@&nbsp;seconds, each dealing <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to the first enemy hit. If an enemy is hit by @HitThreshold@&nbsp;waves, they take <physicalDamage>@AmplifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;damage per wave instead.`,
		icon: `ASSETS/Characters/TFT11_Kaisa/HUD/Icons2D/TFT11_Kaisa_Ability.tex`,
		name: `Inkstorm`,
		variables: {
			'PercentAttackDamage': [0, 0.44999998807907104, 0.44999998807907104, 1],
			'NumHits_Do_NOT_Change': [20, 20, 20, 20],
			'Mana': [4, 4, 4, 4],
			'SpellDurationTOOLTIPONLY': [2, 2, 2, 2],
			'BaseDamage': [0, 10, 15, 45],
			'AmpedPercentAD': [0, 0.699999988079071, 0.699999988079071, 1.399999976158142],
			'HitThreshold': [10, 10, 10, 10],
		},
	},
	'TFT11_Kayn': {
		desc: `On first cast, transform, dealing <physicalDamage>@TotalTransformDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to nearby enemies. While transformed, gain <TFTBonus>@CritChance*100@%</TFTBonus>&nbsp;Critical&nbsp;Strike&nbsp;Chance and critical attacks damage adjacent enemies. If the spin only hits one enemy, the damage is increased by <TFTBonus>@SingleTargetDamageAmp*100@%</TFTBonus>.<br><br>Subsequent casts deal <physicalDamage>@TotalSwipeDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to units in a line through the target instead. `,
		icon: `ASSETS/Characters/TFT11_Kayn/HUD/Icons2D/TFT11_Kayn_Ability.tex`,
		name: `Shadow Assassin`,
		variables: {
			'IncreasedPercent': [10, 10, 10, 10],
			'TransformADPercent': [0.10000000149011612, 4, 4, 10],
			'CritChance': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'SwipeADPercent': [2, 2.4000000953674316, 2.4000000953674316, 6],
			'SingleTargetDamageAmp': [1, 1, 1, 1],
			'SwipeFlatDamage': [0, 30, 45, 135],
		},
	},
	'TFT11_KhaZix': {
		desc: `Leap towards the lowest Health enemy within 3 hexes and deal <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage.`,
		icon: `ASSETS/Characters/TFT11_KhaZix/HUD/Icons2D/TFT11_KhaZix_Ability.tex`,
		name: `Leap!`,
		variables: {
			'PercentAttackDamage': [3.0999999046325684, 3.0999999046325684, 3.0999999046325684, 3.0999999046325684],
			'APDamage': [0, 20, 30, 45],
		},
	},
	'TFT11_Kindred': {
		desc: `Dash away from the current target and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to them and <magicDamage>@ModifiedSecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the nearest enemy.<br><br>Fated Bonus: Gain <TFTBonus>@FatedAS*100@%</TFTBonus>&nbsp;Attack Speed.`,
		icon: `ASSETS/Characters/TFT11_Kindred/HUD/Icons2D/TFT11_Kindred_Ability.tex`,
		name: `Flourish of Arrows`,
		variables: {
			'Damage': [0, 115, 175, 260],
			'SecondaryDamage': [0, 65, 100, 155],
			'AP': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'FatedAS': [0.18000000715255737, 0.18000000715255737, 0.18000000715255737, 0.18000000715255737],
		},
	},
	'TFT11_FortuneYord': {
		desc: `<spellPassive>Passive</spellPassive>: Gain <scaleHealth>@PermanentHealthPerInterest@</scaleHealth>&nbsp;permanent Health for each gold gained from interest. (Total:&nbsp;@TFTUnitProperty.:TFT11_Unit_FortuneYordle_Health@)<br><br><spellActive>Active</spellActive>: Heal <scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health over @Duration@&nbsp;seconds. Kobuko's next attack deals <magicDamage>@ModifiedDamageAmount@&nbsp;(%i:scaleHealth%)</magicDamage>&nbsp;bonus magic damage.<br><br><rules>In Hyper Roll, instead gain @HRHealthPerRound@ permanent Health per Round.</rules><br><br>`,
		icon: `ASSETS/Characters/TFT11_FortuneYord/HUD/Icons2D/TFT11_FortuneYord_Ability.TFT_Set11.tex`,
		name: `Money Dance`,
		variables: {
			'PermanentHealthPerInterest': [30, 10, 12, 20],
			'Duration': [2, 2, 2, 2],
			'Heal': [60, 350, 400, 475],
			'DamageHPPercent': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'HRHealthPerRound': [15, 60, 80, 200],
		},
	},
	'TFT11_KogMaw': {
		desc: `Deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the lowest Health enemy within range. Every @NumCasts@&nbsp;casts, gain +<TFTBonus>@AttackRangeIncrease@</TFTBonus>&nbsp;Attack Range.`,
		icon: `ASSETS/Characters/TFT11_KogMaw/HUD/Icons2D/TFT11_KogMaw_Ability.tex`,
		name: `Raining Artillery`,
		variables: {
			'Damage': [0, 160, 225, 315],
			'AttackRangeIncrease': [1, 1, 1, 1],
			'MaxStacks': [50, 50, 50, 50],
			'NumCasts': [2, 2, 2, 2],
		},
	},
	'TFT11_LeeSin': {
		desc: `Kick the target's spirit out of their body, dealing <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%%i:scaleAS%)</physicalDamage>&nbsp;physical damage, @TooltipReave@% <TFTKeyword>Mana Reaving</TFTKeyword> them, and Stunning them. Enemies hit by the spirit take <physicalDamage>@ModifiedAOEDamage@&nbsp;(%i:scaleAD%%i:scaleAS%)</physicalDamage>&nbsp;physical damage. Gain <TFTBonus>@ModifiedShieldAmount@&nbsp;(%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds.<br><br><rules><tftbold>Mana Reave</tftbold>: Increase max Mana until the next cast</rules>`,
		icon: `ASSETS/Characters/TFT11_LeeSin/HUD/Icons2D/TFT11_LeeSin_Ability.tex`,
		name: `Dragon's Dance`,
		variables: {
			'ShieldDuration': [3, 3, 3, 3],
			'PhysDamageADRatio': [2, 4.5, 4.5, 9],
			'Shield': [0, 200, 250, 1000],
			'AOEDamageADRatio': [1.5, 1.5, 1.5, 4.5],
			'TooltipReave': [30, 30, 30, 30],
			'DamageMultiplerPerBonusAS': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
		},
	},
	'TFT11_Lillia': {
		desc: `Hurl an orb towards the current target, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the first enemy hit and adjacent enemies. It continues rolling as a smaller orb, dealing <magicDamage>@SecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies it hits. <br><br>Every third cast launches a mega orb at her target that deals <magicDamage>@ModifiedMegaDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage and splits into @NumOfOrbs@ smaller orbs that roll towards the farthest enemies.<br>`,
		icon: `ASSETS/Characters/TFT11_Lillia/HUD/Icons2D/TFT11_Lillia_Ability.tex`,
		name: `Eep!`,
		variables: {
			'Damage': [0, 220, 330, 900],
			'SecondaryTargetDamage': [0, 100, 150, 350],
			'NumOfOrbs': [3, 3, 3, 5],
			'MegaDamage': [0, 360, 540, 1600],
		},
	},
	'TFT11_Lissandra': {
		desc: `Steep the current target in a teapot, <TFTKeyword>Stunning</TFTKeyword> and dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage over <scaleLevel>@Duration@</scaleLevel>&nbsp;seconds. If they die, there's a @LootChancePercent@% chance that Lissandra turns them into a loot orb. Otherwise, Lissandra throws the teapot at the largest group of enemies, dealing <magicDamage>@ModifiedAOEDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to all enemies hit. <rules>(Rewards are doubled in Hyper Roll)</rules><br><br>If the target is the last enemy remaining, kill them instantly.`,
		icon: `ASSETS/Characters/TFT11_Lissandra/HUD/Icons2D/TFT11_Lissandra_Ability.tex`,
		name: `Let 'em Brew`,
		variables: {
			'NumOfUnits': [0, 1, 1, 15],
			'Damage': [0, 640, 960, 8888],
			'Duration': [0, 3, 3, 15],
			'AOEDamage': [0, 150, 225, 600],
			'LootChancePercent': [0, 50, 50, 50],
			'ItemGuarenteeThreshold': [0, 5, 5, 5],
		},
	},
	'TFT11_Lux': {
		desc: `Throw a spirit bunny towards the farthest enemy, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies along the way, reduced by @ReducedDamagePercent*100@% each time it hits an enemy. The first @TargetNum@ enemies hit are <TFTKeyword>Stunned</TFTKeyword> for @StunDuration@ seconds. `,
		icon: `ASSETS/Characters/TFT11_Lux/HUD/Icons2D/TFT11_Lux_Ability.tex`,
		name: `Bunny Binding`,
		variables: {
			'Damage': [0, 210, 315, 480],
			'StunDuration': [0, 1.5, 1.5, 1.5],
			'TargetNum': [2, 2, 2, 2],
			'AOEDamage': [0, 80, 120, 185],
			'ReducedDamagePercent': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
		},
	},
	'TFT11_Malphite': {
		desc: `For @Duration@ seconds, gain <TFTBonus>@ModifiedArmor@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Armor and attacks deal <magicDamage>@TotalDamage@&nbsp;(%i:scaleArmor%)</magicDamage>&nbsp;magic damage to enemies in a cone.`,
		icon: `ASSETS/Characters/TFT11_Malphite/HUD/Icons2D/TFT11_Malphite_Ability.tex`,
		name: `Topaz Skin`,
		variables: {
			'Armor': [0, 75, 90, 110],
			'Duration': [8, 8, 8, 8],
			'PercentArmorDamage': [1.5, 0.8999999761581421, 1.2000000476837158, 1.600000023841858],
		},
	},
	'TFT11_Morgana': {
		desc: `Create a blizzard around a random enemy that deals <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage over @Duration@&nbsp;seconds and <TFTKeyword>Chills</TFTKeyword> for @ChillDuration@&nbsp;second.<br><br><rules><tftbold>Chill:</tftbold> Reduce Attack Speed by @TOOLTIPONLYChillAmount@%</rules>`,
		icon: `ASSETS/Characters/TFT11_Morgana/HUD/Icons2D/TFT11_Morgana_Ability.tex`,
		name: `The Tempest's Torment`,
		variables: {
			'Damage': [0, 250, 375, 1600],
			'Duration': [3, 3, 3, 3],
			'HexRadius': [2, 2, 2, 2],
			'ChillDuration': [1, 1, 1, 1],
			'TOOLTIPONLYChillAmount': [10, 10, 10, 10],
		},
	},
	'TFT11_Nautilus': {
		desc: `Send @NumOfWaves@&nbsp;shockwaves towards the most enemies in a line, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage and <TFTKeyword>Stunning</TFTKeyword> all enemies hit for <scaleLevel>@StunDuration@</scaleLevel>&nbsp;seconds.`,
		icon: `ASSETS/Characters/TFT11_Nautilus/HUD/TFT11_Nautilus_R.TFT_Set11.tex`,
		name: `Depth Charge`,
		variables: {
			'StunDuration': [0, 1.75, 2, 8],
			'Damage': [0, 150, 225, 1000],
			'NumOfWaves': [3, 3, 3, 3],
		},
	},
	'TFT11_Neeko': {
		desc: `Hop into the air, reducing damage taken by <scaleLevel>@DR*100@%</scaleLevel> and Healing <scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health over @BuffDuration@&nbsp;seconds. After, slam down and deal <magicDamage>@TotalDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to adjacent enemies.`,
		icon: `ASSETS/Characters/TFT11_Neeko/HUD/Icons2D/TFT11_Neeko_Ability.tex`,
		name: `Hop Blossom`,
		variables: {
			'Heal': [0, 275, 300, 350],
			'BuffDuration': [2, 2, 2, 2],
			'Damage': [0, 200, 300, 475],
			'DR': [0, 0.30000001192092896, 0.30000001192092896, 0.3499999940395355],
			'DamageIncreasePerEnemy': [1, 1, 1, 1],
		},
	},
	'TFT11_Ornn': {
		desc: `Gain <TFTBonus>@ModifiedTotalShieldValue@&nbsp;(%i:scaleAP%%i:scaleHealth%)</TFTBonus>&nbsp;shield for @ShieldDuration@&nbsp;seconds. Channel and forge unstoppably over @ChannelDuration@&nbsp;seconds, dealing <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to adjacent enemies over the duration. After, toss an <TFTBonus>ephemeral Completed item</TFTBonus> to the nearest ally.`,
		icon: `ASSETS/Characters/TFT11_Ornn/HUD/Icons2D/TFT11_Ornn_Ability.tex`,
		name: `Forge of the Forest`,
		variables: {
			'ChannelDuration': [2, 2, 2, 2],
			'ShieldDuration': [4, 4, 4, 4],
			'MagicDamage': [0, 300, 450, 1500],
			'BaseShieldValue': [0, 300, 350, 1200],
			'PercentHealthShield': [0, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
		},
	},
	'TFT11_Qiyana': {
		desc: `For @Duration@ seconds, attacks deal <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;bonus physical damage to the target and <physicalDamage>@SecondaryDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to enemies behind them. Qiyana will dash to find the best angle.`,
		icon: `ASSETS/Characters/TFT11_Qiyana/HUD/Icons2D/TFT11_Qiyana_Ability.tex`,
		name: `Supreme Display of Talent`,
		variables: {
			'Damage': [0, 20, 30, 45],
			'Duration': [4, 4, 4, 4],
			'SecondaryTargetPercentage': [0, 0.75, 0.75, 0.75],
			'PercentAttackDamage': [1.2999999523162842, 1.350000023841858, 1.350000023841858, 1.350000023841858],
		},
	},
	'TFT11_Rakan': {
		desc: `Dash into the largest group of enemies and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies in a @HexRange@-hex range. Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Shield for each enemy hit for @ShieldDuration@&nbsp;seconds and reduce their damage by <TFTBonus>@DamageReductionPercent*100@%</TFTBonus>&nbsp;for @DebuffDuration@&nbsp;seconds.`,
		icon: `ASSETS/Characters/TFT11_Rakan/HUD/Icons2D/TFT11_Rakan_Ability.tex`,
		name: `Grand Entrance`,
		variables: {
			'Damage': [0, 185, 275, 2000],
			'HexRange': [2, 2, 2, 2],
			'DamageReductionPercent': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'DebuffDuration': [4, 4, 4, 4],
			'ShieldPercentDamage': [1, 1, 1, 1],
			'ShieldDuration': [2, 2, 2, 2],
			'BaseShieldAmount': [0, 160, 200, 600],
		},
	},
	'TFT11_RakanBenchDummy': {
		desc: `Rakan throws feathers at the @LoversTargets@ lowest Health allies, healing them for <scaleHealth>@LoversHealAmt@</scaleHealth> Health.<br><br><rules>This is affected by Trickshot.</rules>`,
		icon: `ASSETS/Characters/TFT11_XayahRakanDummy/HUD/Icons2D/TFT11_XayahRakanDummyFeather.TFT_Set11.tex`,
		name: `Gleaming Quill`,
		variables: {
			'LoversTargets': [3, 3, 3, 3],
			'LoversHealAmt': [0, 150, 250, 1000],
		},
	},
	'TFT11_RekSai': {
		desc: `Gain <TFTBonus>@DefensesGained@</TFTBonus> Armor and Magic Resist for @Duration@&nbsp;seconds. <TFTKeyword>Stun</TFTKeyword> nearby enemies for @StunDuration@&nbsp;second and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleHealth%%i:scaleAP%)</magicDamage>&nbsp;magic damage.`,
		icon: `ASSETS/Characters/TFT11_RekSai/HUD/Icons2D/TFT11_RekSai_Ability.tex`,
		name: `Uproot`,
		variables: {
			'PercentHPDamage': [0.11999999731779099, 0.11999999731779099, 0.11999999731779099, 0.11999999731779099],
			'Duration': [5, 5, 5, 5],
			'DefensesGained': [50, 50, 50, 50],
			'Damage': [0, 70, 90, 120],
			'StunDuration': [1, 1, 1, 1],
		},
	},
	'TFT11_Riven': {
		desc: `Deal <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to the current target. Every 3rd cast, instead deal <physicalDamage>@BoostedModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to the current target and enemies adjacent to them, then heal for <scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health. `,
		icon: `ASSETS/Characters/TFT11_Riven/HUD/Icons2D/TFT11_Riven_Ability.tex`,
		name: `Broken Wings`,
		variables: {
			'PercentAttackDamage': [1.2000000476837158, 1.5, 1.5, 1.5499999523162842],
			'PercentAttackDamageBoosted': [3.5999999046325684, 3, 3, 3.0999999046325684],
			'Heal': [0, 150, 180, 220],
		},
	},
	'TFT11_Senna': {
		desc: `Fire a laser @BonusRange@ Hexes beyond the current target, dealing <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to enemies hit. Grant <TFTBonus>@BonusAttackDamage@%</TFTBonus>&nbsp;Attack Damage to Senna and allies to the left and right for @Duration@&nbsp;seconds.`,
		icon: `ASSETS/Characters/TFT11_Senna/HUD/Icons2D/TFT11_Senna_Ability.tex`,
		name: `Absolution`,
		variables: {
			'BonusAttackDamage': [0, 20, 25, 30],
			'PercentAttackDamage': [2, 2.450000047683716, 2.450000047683716, 2.549999952316284],
			'Duration': [4, 4, 4, 4],
			'BonusRange': [2, 2, 2, 2],
			'BaseDamageAPScaling': [0, 20, 30, 45],
		},
	},
	'TFT11_Sett': {
		desc: `<spellPassive>Passive</spellPassive>: At the start of combat, squat adjacent units in the same row. Permanently gain <TFTBonus>@AttackDamagePerThreshold@%</TFTBonus>&nbsp;Attack Damage for each @HealthSquatThreshold@&nbsp;Health squatted. <rules>Gains are doubled in Hyper Roll</rules> (Net gains: <TFTBonus>@TFTUnitProperty.:TFT11_Unit_SettADGained@</TFTBonus>%)<br><br><spellActive>Active</spellActive>: Slam the current target forward, <TFTKeyword>Stunning</TFTKeyword> them and dealing <physicalDamage>@TotalPrimaryDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage. Deal <physicalDamage>@TotalAoEDamage@&nbsp;(%i:scaleAD%) plus @PercentHealth*100@% of the target's maximum health</physicalDamage> as physical damage to enemies within 2.5 hexes.<br><br>Fated Bonus: Gain <TFTBonus>@FatedBonus*100@%</TFTBonus> Omnivamp.`,
		icon: `ASSETS/Characters/TFT11_Sett/HUD/Icons2D/TFT11_Sett_Ability.tex`,
		name: `Light and Shadow`,
		variables: {
			'AttackDamagePerThreshold': [2, 2, 2, 2],
			'HealthSquatThreshold': [1000, 1000, 1000, 1000],
			'PercentADPrimary': [6, 2.700000047683716, 2.700000047683716, 90.01000213623047],
			'PercentHealth': [80, 0.07999999821186066, 0.11999999731779099, 10],
			'PercentADSecondary': [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
			'FatedBonus': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
			'PercentAPSecondary': [0, 30, 45, 2000],
		},
	},
	'TFT11_Shen': {
		desc: `For @Duration@ seconds, reduce damage taken by <TFTBonus>@ModifiedShenSelfishReduction@&nbsp;(%i:scaleAP%)</TFTBonus> for Shen and <TFTBonus>@ModifiedFlatDamageReduction@&nbsp;(%i:scaleAP%)</TFTBonus> for adjacent allies. Shen's next @AttackCount@ attacks deal <trueDamage>@ModifiedTrueDamage@&nbsp;(%i:scaleArmor%)</trueDamage>&nbsp;bonus true damage.`,
		icon: `ASSETS/Characters/TFT11_Shen/HUD/Icons2D/TFT11_Shen_Ability.tex`,
		name: `Spirit's Refuge`,
		variables: {
			'Duration': [4, 4, 4, 4],
			'FlatDamageReduction': [0, 15, 20, 30],
			'AttackCount': [3, 3, 3, 3],
			'PercentArmorDamage': [2.5, 1, 1.5, 2.3499999046325684],
			'ShenSelfishReduction': [0, 40, 50, 90],
		},
	},
	'TFT11_Sivir': {
		desc: `Gain <TFTBonus>@PercentAttackDamage*100@%</TFTBonus>&nbsp;Attack Damage and grant <TFTBonus>@ModifiedAttackSpeed@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Attack Speed to self and adjacent allies for @Duration@&nbsp;seconds. 						<br>										`,
		icon: `ASSETS/Characters/TFT11_Sivir/HUD/Icons2D/TFT11_Sivir_Ability.tex`,
		name: `On the Hunt`,
		variables: {
			'PercentAttackDamage': [0.44999998807907104, 0.949999988079071, 0.949999988079071, 1],
			'Duration': [8, 8, 8, 8],
			'AttackSpeed': [0.20000000298023224, 0.15000000596046448, 0.20000000298023224, 0.25],
		},
	},
	'TFT11_Soraka': {
		desc: `<spellPassive>Passive:</spellPassive> Each time your team loses @PercentHealthLost*100@%&nbsp;of their total Health, gain <TFTBonus>@APPerHealthLoss@</TFTBonus>&nbsp;Ability Power for the rest of combat.<br><br><spellPassive>Active:</spellPassive> <TFTKeyword>Mana Reave</TFTKeyword> the largest group of enemies within range. Deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the center enemy and <magicDamage>@ModifiedAoEDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to adjacent enemies.<br><br><tftitemrules><tftbold>Mana Reave</tftbold>: Increase max Mana by 20% until the next cast</tftitemrules>`,
		icon: `ASSETS/Characters/TFT11_Soraka/HUD/Icons2D/TFT11_Soraka_Ability.tex`,
		name: `Divine Judgement`,
		variables: {
			'Damage': [0, 220, 330, 510],
			'AoEDamage': [0, 110, 165, 255],
			'APPerThreshold': [6, 6, 6, 6],
			'PercentHealthLost': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'APPerHealthLoss': [8, 8, 8, 8],
		},
	},
	'TFT11_Sylas': {
		desc: `Dash around the target and slam, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage and healing for <scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health. Then, swipe twice, dealing <magicDamage>@ModifiedAOEDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to nearby enemies.<br>`,
		icon: `ASSETS/Characters/TFT11_Sylas/HUD/Icons2D/TFT11_Sylas_Ability.tex`,
		name: `Unchain The Demon`,
		variables: {
			'Damage': [0, 200, 300, 1000],
			'AOEDamage': [0, 90, 135, 450],
			'Heal': [0, 120, 140, 500],
		},
	},
	'TFT11_Syndra': {
		desc: `<spellPassive>Passive</spellPassive>: Start combat with <TFTBonus>@NumStartingButt@</TFTBonus> butterflies and gain one every @NumCastsPerButt@&nbsp;casts.<br><br><spellActive>Active</spellActive>: Throw all butterflies at the current target, dealing <magicDamage>@ModifiedDamagePerButt@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage for each butterfly.<br><br>Fated Bonus: Deal <TFTBonus>@FatedBonus*100@%</TFTBonus> more damage.`,
		icon: `ASSETS/Characters/TFT11_Syndra/HUD/Icons2D/TFT11_Syndra_Ability.tex`,
		name: `Phantom Butterflies`,
		variables: {
			'NumStartingButt': [7, 7, 7, 10],
			'DamagePerButt': [0, 40, 60, 180],
			'FatedBonus': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'NumCastsPerButt': [1, 1, 1, 1],
		},
	},
	'TFT11_TahmKench': {
		desc: `Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleHealth%)</TFTBonus> Shield for @Duration@&nbsp;seconds and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the current target. If Tahm Kench has more Health than them, deal <magicDamage>@BonusModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage instead. Otherwise, gain <TFTBonus>@BonusModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;more Shield.`,
		icon: `ASSETS/Characters/TFT11_TahmKench/HUD/Icons2D/TFT11_TahmKench_Ability.tex`,
		name: `Tongue Lash`,
		variables: {
			'Damage': [0, 300, 450, 700],
			'PercentHealthShield': [0, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'Duration': [3, 3, 3, 3],
			'BonusShield': [0, 200, 250, 300],
			'BonusPercentDamage': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
		},
	},
	'TFT_TrainingDummy': {
		desc: `The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.`,
		icon: `ASSETS/Characters/TFT_TrainingDummy/HUD/Icons2D/TFTDebug_Dummy_DoNothing.tex`,
		name: `On Duty!`,
		variables: {},
	},
	'TFT11_Teemo': {
		desc: `Throw a spoiled dumpling at the nearest non-poisoned enemy, poisoning them for <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage over @Duration@ seconds.`,
		icon: `ASSETS/Characters/TFT11_Teemo/HUD/Icons2D/TFT11_Teemo_Ability.tex`,
		name: `Dim-Sum Delivery`,
		variables: {
			'Duration': [8, 8, 8, 8],
			'Damage': [0, 420, 630, 1000],
			'TickRate': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT11_Thresh': {
		desc: `Grant <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Shield to Thresh and the lowest Health ally for @ShieldDuration@&nbsp;seconds and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies adjacent to both. Thresh shares <TFTBonus>@PercentArmorAndMR*100@%</TFTBonus>&nbsp;of his Armor and Magic Resist with the shielded ally for @ResistShareDuration@ seconds.<br><br>Fated Bonus: Gain <TFTBonus>@FatedDefenses@</TFTBonus> Armor and Magic Resist.`,
		icon: `ASSETS/Characters/TFT11_Thresh/HUD/Icons2D/TFT11_Thresh_Ability.tex`,
		name: `Guided Passage`,
		variables: {
			'Shield': [0, 360, 400, 450],
			'Damage': [0, 100, 150, 250],
			'ShieldDuration': [4, 4, 4, 4],
			'ResistShareDuration': [6, 6, 6, 6],
			'PercentArmorAndMR': [0, 0.30000001192092896, 0.30000001192092896, 0.3499999940395355],
			'FatedDefenses': [20, 20, 20, 20],
		},
	},
	'TFT11_Tibbers': {
		desc: `Deal <magicDamage>@ModifiedDamage@</magicDamage> magic damage to enemies in a semi-circle and <TFTKeyword>Stun</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/TFT11_Tibbers/HUD/Icons2D/TFT11_Tibbers_Ability.tex`,
		name: `Childhood Rage`,
		variables: {
			'StunDuration': [0, 1.75, 2.5, 8],
			'Damage': [0, 200, 300, 1000],
			'PercentMaximumHealthDamage': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		},
	},
	'TFT11_Tristana': {
		desc: `Gain <TFTBonus>@AttackDamage*100@%</TFTBonus>&nbsp;Attack Damage for @Duration@&nbsp;seconds. Jump on the current target and deal <physicalDamage>@ModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to adjacent enemies, before bouncing to a safe location.`,
		icon: `ASSETS/Characters/TFT11_Tristana/HUD/Icons2D/TFT11_Tristana_Ability.tex`,
		name: `Firecracker Frenzy`,
		variables: {
			'PercentAttackDamage': [0, 2.6500000953674316, 2.6500000953674316, 2.700000047683716],
			'AttackDamage': [0, 0.44999998807907104, 0.44999998807907104, 0.5],
			'Duration': [6, 6, 6, 6],
			'BaseSpellDamage': [0, 75, 115, 185],
		},
	},
	'TFT11_Udyr': {
		desc: `<spellActive>Ram Slam:</spellActive> Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Shield for @ShieldDuration@&nbsp;seconds and charge through the current target, briefly knocking up any enemies he hits. Grab the nearest enemy and slam them into the ground, dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;total magic damage to them and adjacent enemies.<br><br><spellActive>Tiger Strikes:</spellActive> Gain <TFTBonus>@ASPercent*100@%</TFTBonus>&nbsp;Attack Speed and empower Udyr's attacks for the next @BuffDuration@&nbsp;seconds to strike @BounceCount@ additional times dealing <magicDamage>@ModifiedShurikenDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;bonus magic damage.`,
		icon: `ASSETS/Characters/TFT11_Udyr/HUD/Icons2D/TFT11_Udyr_Ability.tex`,
		name: `Ram Slam / Tiger Strikes`,
		variables: {
			'HexDistance': [0, 2, 2, 10],
			'Damage': [0, 300, 450, 4800],
			'ShieldAmt': [0, 300, 375, 5000],
			'ShieldDuration': [3, 3, 3, 10],
			'ASPercent': [1.5, 0.6000000238418579, 0.699999988079071, 5],
			'BuffDuration': [4, 6, 6, 30],
			'BounceCount': [0, 4, 4, 6],
			'ShurikenDamage': [0, 150, 225, 4500],
			'OmnivampPercent': [],
			'BearWearManaCost': [40, 40, 40, 40],
		},
	},
	'TFT_Voidspawn': {
		desc: `The Voidspawn gains bonus Health and Attack Damage based on the current Stage. `,
		icon: `ASSETS/Characters/TFT_VoidSpawn/HUD/Icons2D/Voidspawn_SquareFixed.tex`,
		name: `Voidborn`,
		variables: {},
	},
	'TFT11_Volibear': {
		desc: `Empower the next three attacks. The first two heal for <scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth>&nbsp;Health and deal <magicDamage>@ModifiedSmallDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;bonus magic damage. The final attack deals <magicDamage>@ModifiedLargeDamage@&nbsp;(%i:scaleHealth%%i:scaleAP%)</magicDamage> magic damage and <TFTKeyword>Stuns</TFTKeyword> the target for @StunDuration@ second.`,
		icon: `ASSETS/Characters/TFT11_Volibear/HUD/Icons2D/TFT11_Volibear_Ability.tex`,
		name: `Ink Smash`,
		variables: {
			'StunDuration': [1, 1, 1, 1],
			'SmallDamage': [0, 35, 50, 80],
			'LargeDamage': [0, 80, 120, 185],
			'HealthRatio': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'HealAmount': [0, 140, 170, 210],
		},
	},
	'TFT11_WuKong': {
		desc: `Cycle through the following abilities;<br><br>Throw staff out, dealing <physicalDamage>@ModifiedStunDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage to the current target and <TFTKeyword>Stunning</TFTKeyword> them for @StunDuration@ seconds.<br><br>Spin, dealing <physicalDamage>@ModifiedSpinDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to enemies within @SpinHexRange@-hex range. <br><br>Dash to hit the most enemies in a @BonkHexRange@-hex line, then slam down staff dealing <physicalDamage>@ModifiedBonkDamage@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage>&nbsp;physical damage to enemies hit.`,
		icon: `ASSETS/Characters/TFT11_WuKong/HUD/Icons2D/TFT11_WuKong_Ability.tex`,
		name: `Legendary Prowess`,
		variables: {
			'StunPercentAttackDamage': [0, 3, 3, 9],
			'SpinPercentAttackDamage': [0, 3, 3, 9],
			'BonkPercentAttackDamage': [0, 3, 3, 15],
			'DashHexRange': [2, 2, 2, 2],
			'BonkDamage': [0, 70, 105, 155],
			'StunDuration': [2, 1.5, 1.5, 8],
			'SpinHexRange': [1, 1, 1, 1],
			'BonkHexRange': [3, 3, 3, 3],
			'StunDurationPerGreat': [1, 1, 1, 1],
			'SpinHexRangePerGreat': [1, 1, 1, 1],
			'BonkHexRangePerGreat': [2, 2, 2, 2],
			'TootChance': [5, 5, 5, 5],
		},
	},
	'TFT11_XayahRakanDummy': {
		desc: `Xayah fires feathers at the nearest enemies, dealing physical damage.<br><br>Rakan dashes towards the largest clump of units, deals magic damage to and debuffs them, and gains a shield for each enemy hit. `,
		icon: `ASSETS/Characters/TFT11_XayahRakanDummy/HUD/Icons2D/TFT11_XayahRakanDummyUlt.TFT_Set11.tex`,
		name: `Dynamic Duo`,
		variables: {},
	},
	'TFT11_Xayah': {
		desc: `Throw @FeatherCount@ feathers at the @NumClosestTargets@&nbsp;closest enemies, each dealing <physicalDamage>@ModifiedFeatherDamage@&nbsp;(%i:scaleAD%)</physicalDamage>&nbsp;physical damage. Then, recall the feathers, dealing <physicalDamage>@TotalFeatherRecallDamage@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage>&nbsp;physical damage to enemies they pass through.`,
		icon: `ASSETS/Characters/TFT11_Xayah/HUD/Icons2D/TFT11_Xayah_Ability.tex`,
		name: `Feathers Fly!`,
		variables: {
			'NumClosestTargets': [4, 4, 4, 4],
			'FeatherDamage': [0, 0.699999988079071, 0.699999988079071, 5],
			'FeatherRecallDamage': [0, 0.5, 0.5, 5],
			'FeatherRecallBaseDamage': [0, 15, 25, 75],
			'FeatherCount': [0, 12, 12, 30],
		},
	},
	'TFT11_XayahBenchDummy': {
		desc: ` Xayah deals <physicalDamage>@LoversDamage@</physicalDamage> physical damage to all enemies hit by Rakan's ability.`,
		icon: `ASSETS/Characters/TFT11_XayahRakanDummy/HUD/Icons2D/TFT11_XayahRakanDummyQ.TFT_Set11.tex`,
		name: `Deadly Plumage`,
		variables: {
			'LoversDamage': [3, 200, 300, 800],
		},
	},
	'TFT11_Yasuo': {
		desc: `<spellPassive>Passive:</spellPassive> Attacks while Shielded deal <magicDamage>@ModifiedShieldDamage@&nbsp;(%i:scaleArmor%%i:scaleMR%)</magicDamage> bonus magic damage.<br><br><spellActive>Active:</spellActive> Gain <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleArmor%%i:scaleMR%)</TFTBonus>&nbsp;Shield for @ShieldDuration@ seconds and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target. <br><br>Fated Bonus: Gain <TFTBonus>@FatedBonus@</TFTBonus> Shield at the start of combat.`,
		icon: `ASSETS/Characters/TFT11_Yasuo/HUD/Icons2D/TFT11_Yasuo_Ability.tex`,
		name: `Steel Tempest`,
		variables: {
			'Damage': [200, 200, 300, 450],
			'ShieldDuration': [5, 5, 5, 5],
			'BaseShield': [0, 175, 200, 250],
			'ShieldResistPct': [0, 1, 1.100000023841858, 1.25],
			'ShieldDamage': [0.30000001192092896, 0.4000000059604645, 0.4000000059604645, 0.44999998807907104],
			'FatedBonus': [300, 300, 300, 300],
		},
	},
	'TFT11_Yone': {
		desc: `Dash in spirit form to the farthest enemy within <TFTBonus>@TFTUnitProperty.:TFT11_Unit_YoneDashRange@</TFTBonus> Hexes for @ShieldDuration@ seconds, dealing <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage and <TFTKeyword>Wounding</TFTKeyword> enemies along the way for @WoundDuration@ seconds. While in spirit form, gain <TFTBonus>@ShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield and @ASBonus*100@% Attack Speed. Afterwards, Yone returns to his starting position.<br><br>Each cast this combat increases his dash range by 1 Hex.<br><br><rules>Wound: Reduce healing received by 33%</rules>`,
		icon: `ASSETS/Characters/TFT11_Yone/HUD/Icons2D/TFT11_Yone_Ability.tex`,
		name: `Fate Sealed`,
		variables: {
			'ADRatio': [0, 1.649999976158142, 1.649999976158142, 1.75],
			'Shield': [0, 280, 340, 400],
			'ShieldDuration': [3, 3, 3, 3],
			'ASBonus': [0.75, 0.75, 0.75, 0.75],
			'WoundDuration': [5, 5, 5, 5],
			'HexRange': [3, 3, 3, 3],
		},
	},
	'TFT11_Yorick': {
		desc: `Sap power from the @NumOfEnemies@&nbsp;nearest enemies, gaining <scaleHealth>@HealthGain@</scaleHealth>&nbsp;max Health and dealing <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to them over @Duration@&nbsp;seconds.`,
		icon: `ASSETS/Characters/TFT11_Yorick/HUD/Icons2D/TFT11_Yorick_Ability.tex`,
		name: `Dark Despoil`,
		variables: {
			'Duration': [3, 3, 3, 3],
			'NumOfEnemies': [2, 2, 2, 2],
			'Damage': [0, 160, 240, 375],
			'HealthGain': [0, 300, 360, 420],
		},
	},
	'TFT11_Zoe': {
		desc: `<spellPassive>Passive</spellPassive>: Kills increase the number of ricochets by @RicochetsPerKill@&nbsp;for the rest of combat.<br><br><spellActive>Active</spellActive>: Fire a missile dealing <magicDamage>@TotalDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to the current target. The missile ricochets to the farthest unit within @TOOLTIPBounceRange@&nbsp;hexes, dealing <magicDamage>@ModifiedSecondarySpellDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage.`,
		icon: `ASSETS/Characters/TFT11_Zoe/HUD/Icons2D/TFT11_Zoe_Ability.tex`,
		name: `Calculated!`,
		variables: {
			'Damage': [0, 275, 415, 640],
			'BounceRange': [2, 2, 2, 2],
			'SecondarySpellDamage': [100, 90, 135, 215],
			'RicochetsPerKill': [1, 1, 1, 1],
			'TOOLTIPBounceRange': [2, 2, 2, 2],
		},
	},
	'TFT11_Zyra': {
		desc: `Summon @NumPlants@&nbsp;Vine Lashers that attack the nearest enemy @NumPlantAutos@&nbsp;times. Their attacks deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage and <TFTKeyword>Wound</TFTKeyword>&nbsp;their targets for @WoundDuration@&nbsp;seconds.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by @WoundAmount@%</rules>`,
		icon: `ASSETS/Characters/TFT11_Zyra/HUD/Icons2D/TFT11_Zyra_Ability.tex`,
		name: `Paper Thorns`,
		variables: {
			'Duration': [0, 3, 3, 3],
			'Damage': [0, 90, 135, 210],
			'WoundDuration': [6, 6, 6, 6],
			'NumPlants': [0, 2, 2, 2],
			'NumPlantAutos': [3, 3, 3, 3],
			'WoundAmount': [33, 33, 33, 33],
		},
	},
}
