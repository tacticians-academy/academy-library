import type { AbilityData, ChampionData } from '../index'

export enum ChampionKey { Aatrox = `TFT7_Aatrox`, Anivia = `TFT7_Anivia`, AoShin = `TFT7_AoShin`, Ashe = `TFT7_Ashe`, AurelionSol = `TFT7_AurelionSol`, Bard = `TFT7_Bard`, Braum = `TFT7_Braum`, Corki = `TFT7_Corki`, DragonBlue = `TFT7_DragonBlue`, Diana = `TFT7_Diana`, Elise = `TFT7_Elise`, Ezreal = `TFT7_Ezreal`, Gnar = `TFT7_Gnar`, Hecarim = `TFT7_Hecarim`, Heimerdinger = `TFT7_Heimerdinger`, DragonGold = `TFT7_DragonGold`, Illaoi = `TFT7_Illaoi`, JadeStatue = `TFT7_JadeStatue`, Jinx = `TFT7_Jinx`, Karma = `TFT7_Karma`, Kayn = `TFT7_Kayn`, LeeSin = `TFT7_LeeSin`, Leona = `TFT7_Leona`, Lillia = `TFT7_Lillia`, Lulu = `TFT7_Lulu`, Nami = `TFT7_Nami`, Neeko = `TFT7_Neeko`, Nidalee = `TFT7_Nidalee`, TrainerDragon = `TFT7_TrainerDragon`, Nunu = `TFT7_Nunu`, Olaf = `TFT7_Olaf`, Ornn = `TFT7_Ornn`, Pyke = `TFT7_Pyke`, Qiyana = `TFT7_Qiyana`, Ryze = `TFT7_Ryze`, Sejuani = `TFT7_Sejuani`, Senna = `TFT7_Senna`, Sett = `TFT7_Sett`, Shen = `TFT7_Shen`, DragonGreen = `TFT7_DragonGreen`, Shyvana = `TFT7_Shyvana`, Skarner = `TFT7_Skarner`, Sona = `TFT7_Sona`, Soraka = `TFT7_Soraka`, Swain = `TFT7_Swain`, DragonPurple = `TFT7_DragonPurple`, Sylas = `TFT7_Sylas`, TahmKench = `TFT7_TahmKench`, Talon = `TFT7_Talon`, TrainingDummy = `TFT_TrainingDummy`, Taric = `TFT7_Taric`, Thresh = `TFT7_Thresh`, Tristana = `TFT7_Tristana`, Twitch = `TFT7_Twitch`, Varus = `TFT7_Varus`, Vladimir = `TFT7_Vladimir`, VoidSpawn = `TFT_VoidSpawn`, Volibear = `TFT7_Volibear`, Xayah = `TFT7_Xayah`, Yasuo = `TFT7_Yasuo`, Yone = `TFT7_Yone`, Zoe = `TFT7_Zoe`, IvernMinion = `TFT7_IvernMinion` }

export const champions: ChampionData[] = [
	{
		apiName: `TFT7_Aatrox`,
		name: `Aatrox`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Aatrox.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shimmerscale`, `Warrior`],
		stats: {
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 650,
			initialMana: 50,
			magicResist: 45,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: {
			name: `TFT7_AatroxP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'PercentAttackDamage': [0, 280, 290, 300],
				'Heal': [0, 250, 325, 400],
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
									starValues: [0, 280, 290, 300],
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
									starValues: [0, 250, 325, 400],
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
		spells: [],
		missiles: [],
	},
	{
		apiName: `TFT7_Anivia`,
		name: `Anivia`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Anivia.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Evoker`, `Legend`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 650,
			initialMana: 45,
			magicResist: 25,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT7_AniviaR`,
				castTime: undefined,
				missile: {
					width: 45,
					travelTime: undefined,
					speedInitial: 1850,
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
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 300, 400, 600],
					'Duration': [3, 3, 3, 3],
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
										starValues: [0, 300, 400, 600],
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
		apiName: `TFT7_AoShin`,
		name: `Ao Shin`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_AoShin.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Tempest`, `Dragon`],
		stats: {
			armor: 50,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 950,
			initialMana: 0,
			magicResist: 50,
			mana: 160,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 4000,
		critAttackMissileSpeed: 4000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_AoShinSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 250, 450, 2500],
					'NumStrikes': [0, 20, 20, 20],
					'ManaDrain': [0, 20, 20, 20],
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
										starValues: [0, 250, 450, 2500],
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
				name: `TFT7_AoShinSpellMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.8999999761581421,
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
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT7_Ashe`,
		name: `Ashe`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Ashe.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Dragonmancer`, `Swiftshot`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 600,
			initialMana: 40,
			magicResist: 20,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_AsheW`,
				castTime: undefined,
				missile: {
					width: 45,
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
							__type: `DestroyOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 125, 175, 250],
					'NumOfArrows': [6, 6, 6, 6],
					'ASReduction': [30, 30, 30, 30],
					'Duration': [3, 3, 3, 3],
					'DragonmancerDamageMultiplier': [0, 3, 3, 3],
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
										starValues: [0, 125, 175, 250],
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
				name: `TFT7_AsheWMissile`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 1800,
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
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_AsheWMissileDragonmancer`,
				castTime: undefined,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 1800,
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
							__type: `DestroyOnMovementComplete`,
						},
						{
							__type: `{e357c116}`,
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
		apiName: `TFT7_AurelionSol`,
		name: `Aurelion Sol`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_AurelionSol.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Astral`, `Evoker`, `Dragon`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 950,
			initialMana: 60,
			magicResist: 50,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 4000,
		critAttackMissileSpeed: 4000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_AurelionSolSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'SpellDamage': [0, 200, 300, 5000],
					'PercentSizeIncrease': [0.5, 0.5, 0.5, 0.5],
					'DazzlePercent': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'DazzleDuration': [5, 5, 5, 5],
				},
				calculations: {
					'{e42c86ed}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SpellDamage`,
										starValues: [0, 200, 300, 5000],
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
				name: `TFT7_AurelionSolBlackholeCharging_2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
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
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_AurelionSolBlackholeCharging_3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
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
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_AurelionSolBlackholeCharging`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.4000000059604645,
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
		apiName: `TFT7_Bard`,
		name: `Bard`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Bard.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Guild`, `Mystic`, `Bard`],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 850,
			initialMana: 160,
			magicResist: 40,
			mana: 240,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_BardR`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 1,
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
					'StasisDuration': [2, 1.25, 2, 15],
					'DamageAmpRatio': [0, 0.15000000596046448, 0.20000000298023224, 99.98999786376953],
					'GuildBonus': [2, 2, 2, 2],
				},
				calculations: {
					'{096af6da}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{907723a5}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT7_Braum`,
		name: `Braum`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Braum.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Scalescorn`, `Guardian`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.5,
			damage: 40,
			hp: 800,
			initialMana: 30,
			magicResist: 60,
			mana: 60,
			moveSpeed: 550,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_BraumE`,
				castTime: 0.009999999776482582,
				missile: undefined,
				variables: {
					'ShieldDR': [0.5, 0.6000000238418579, 0.699999988079071, 0.800000011920929],
					'ShieldDuration': [4, 4, 4, 4],
				},
				calculations: {
					'ShieldDR': {
						asPercent: true,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `ShieldDR`,
										starValues: [0.5, 0.6000000238418579, 0.699999988079071, 0.800000011920929],
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
		missiles: [
			{
				name: `TFT7_BraumBasicAttackShieldOverride`,
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
		apiName: `TFT7_Corki`,
		name: `Corki`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Corki.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Revel`, `Cannoneer`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 75,
			hp: 750,
			initialMana: 20,
			magicResist: 30,
			mana: 80,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_CorkiR`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 500,
					speedMin: 500,
					speedMax: 5000,
					acceleration: 2500,
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
				variables: {
					'PercentAttackDamage': [0.5, 0.5, 0.699999988079071, 2],
					'NumMissiles': [4, 4, 4, 4],
					'MagicDamage': [50, 90, 140, 600],
					'BigPercentAttackDamage': [0, 1.5499999523162842, 1.850000023841858, 4],
					'BigOneHexRadius': [2, 2, 2, 2],
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
										starValues: [0.5, 0.5, 0.699999988079071, 2],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{ae76e1bc}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [50, 90, 140, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `{271deddf}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [50, 90, 140, 600],
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
				name: `TFT7_CorkiRBigOne`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 0,
					speedMin: undefined,
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
				name: `TFT7_CorkiRMissile`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 500,
					speedMin: 500,
					speedMax: 5000,
					acceleration: 2500,
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
		],
	},
	{
		apiName: `TFT7_DragonBlue`,
		name: `Daeja`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_MirageDragon.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Mirage`, `Dragon`],
		stats: {
			armor: 30,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 20,
			hp: 900,
			initialMana: 0,
			magicResist: 30,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT7_DragonBlueSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PassiveDamage': [0, 20, 35, 150],
					'MRReduction': [0, 5, 5, 5],
					'BlastDamage': [0, 275, 375, 1800],
				},
				calculations: {
					'{78291e66}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PassiveDamage`,
										starValues: [0, 20, 35, 150],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{31ab4ab1}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BlastDamage`,
										starValues: [0, 275, 375, 1800],
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
				name: `TFT7_DragonBlueBarrageAttack2`,
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
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonBlueQ`,
				castTime: undefined,
				missile: {
					width: 270,
					travelTime: undefined,
					speedInitial: 1300,
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
				uninterruptable: true,
			},
			{
				name: `TFT7_DragonBlueBarrageAttack`,
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
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonBlueQ2`,
				castTime: undefined,
				missile: {
					width: 270,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT7_Diana`,
		name: `Diana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Diana.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Scalescorn`, `Assassin`],
		stats: {
			armor: 35,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 700,
			initialMana: 50,
			magicResist: 35,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_DianaW`,
				castTime: 0.5,
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
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `CircleMovement`,
				},
				variables: {
					'Orbs': [2, 5, 6, 7],
					'OrbDamage': [70, 90, 105, 120],
					'ShieldValue': [50, 300, 350, 400],
					'ShieldDuration': [6, 6, 6, 6],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `OrbDamage`,
										starValues: [70, 90, 105, 120],
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
										variable: `ShieldValue`,
										starValues: [50, 300, 350, 400],
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
				name: `TFT7_DianaWMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 900,
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
					type: `CircleMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT7_Elise`,
		name: `Elise`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Elise.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Whispers`, `Shapeshifter`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 700,
			initialMana: 0,
			magicResist: 30,
			mana: 40,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT7_EliseR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 230, 270, 310],
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
										starValues: [0, 230, 270, 310],
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
				name: `TFT7_EliseRBite`,
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
		apiName: `TFT7_Ezreal`,
		name: `Ezreal`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Ezreal.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Swiftshot`],
		stats: {
			armor: 15,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 35,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 40,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_EzrealQ`,
				castTime: 0.25,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 2000,
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
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'ASBoost': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'MaxStacks': [5, 5, 5, 5],
					'MagicDamage': [70, 200, 250, 325],
				},
				calculations: {
					'ASBoost': {
						asPercent: true,
						parts: [
							{
								operator: `product`,
								subparts: [
									{
										variable: `MaxStacks`,
										starValues: [5, 5, 5, 5],
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: `ASBoost`,
										starValues: [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [70, 200, 250, 325],
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
		apiName: `TFT7_Gnar`,
		name: `Gnar`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Gnar.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Shapeshifter`],
		stats: {
			armor: 40,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 700,
			initialMana: 0,
			magicResist: 40,
			mana: 70,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: {
			name: `TFT7_GnarP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'AttackDamage': [0, 50, 80, 150],
				'Armor': [0, 40, 50, 75],
				'StunDuration': [1, 1, 1, 1],
			},
			calculations: {
				'{9af7da17}': {
					asPercent: false,
					parts: [
						{
							operator: `scale`,
							subparts: [
								{
									variable: `AttackDamage`,
									starValues: [0, 50, 80, 150],
									stat: `AP`,
									ratio: 0.009999999776482582,
								},
							],
						},
					],
				},
				'{4651b159}': {
					asPercent: false,
					parts: [
						{
							operator: `scale`,
							subparts: [
								{
									variable: `Armor`,
									starValues: [0, 40, 50, 75],
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
		spells: [
			{
				name: `TFT7_GnarPTransform`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'AttackDamage': [0, 50, 90, 135],
					'Armor': [0, 40, 50, 75],
				},
				calculations: {
					'{9af7da17}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AttackDamage`,
										starValues: [0, 50, 90, 135],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{4651b159}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Armor`,
										starValues: [0, 40, 50, 75],
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
		apiName: `TFT7_Hecarim`,
		name: `Hecarim`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Hecarim.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Cavalier`],
		stats: {
			armor: 60,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 900,
			initialMana: 60,
			magicResist: 60,
			mana: 105,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_HecarimR`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 1100,
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
					'Damage': [0, 150, 250, 1000],
					'StunDuration': [0, 1.5, 2, 8],
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
										starValues: [0, 150, 250, 1000],
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
				name: `TFT7_HecarimRMissile`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 1100,
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
		apiName: `TFT7_Heimerdinger`,
		name: `Heimerdinger`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Heimerdinger.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Trainer`, `Mage`],
		stats: {
			armor: 15,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 500,
			initialMana: 40,
			magicResist: 15,
			mana: 80,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_HeimerdingerE`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
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
					_missileSpeed: 3000,
				},
				variables: {
					'MagicDamage': [0, 225, 300, 400],
					'StunDuration': [0, 2, 2.25, 2.5],
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
										starValues: [0, 225, 300, 400],
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
				name: `TFT7_HeimerdingerEBounce`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.3499999940395355,
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
					type: `FixedTimeMovement`,
				},
				variables: {
					'MagicDamage': [0, 230, 300, 850],
					'StunDuration': [0, 1.5, 2, 3],
					'StunIncrease': [1, 1, 1, 1],
					'HexRadius': [1, 1, 1, 1],
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
										starValues: [0, 230, 300, 850],
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
	},
	{
		apiName: `TFT7_DragonGold`,
		name: `Idas`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_ShimmerscaleDragon.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Shimmerscale`, `Dragon`, `Guardian`],
		stats: {
			armor: 60,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 100,
			hp: 1100,
			initialMana: 80,
			magicResist: 60,
			mana: 160,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_DragonGoldR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'DefenseDuration': [2, 2, 2, 2],
					'DamageReduction': [0, 35, 55, 300],
					'Heal': [0, 450, 600, 3000],
					'ASBonusBase': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'RoarDuration': [5, 5, 5, 5],
					'ShieldValue': [0, 180, 275, 2000],
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
										starValues: [0, 450, 600, 3000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{da4aa444}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldValue`,
										starValues: [0, 180, 275, 2000],
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
		apiName: `TFT7_Illaoi`,
		name: `Illaoi`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Illaoi.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Bruiser`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 800,
			initialMana: 50,
			magicResist: 50,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT7_IllaoiR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MagicDamage': [0, 125, 175, 250],
					'Tentacles': [0, 3, 3, 3],
					'PercentAD': [0, 1, 1.100000023841858, 1.2000000476837158],
					'ResistStealPercent': [15, 15, 15, 15],
					'Duration': [6, 6, 6, 6],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [0, 1, 1.100000023841858, 1.2000000476837158],
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
		apiName: `TFT7_JadeStatue`,
		name: `Jade Statue`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_JadeStatue.TFT_Set7.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 15,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 10,
			hp: 1,
			initialMana: 0,
			magicResist: 15,
			mana: 0,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT7_JadeStatueSpellTooltipOnly`,
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
		apiName: `TFT7_Jinx`,
		name: `Jinx`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Jinx.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Revel`, `Cannoneer`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 550,
			initialMana: 60,
			magicResist: 20,
			mana: 120,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2750,
		critAttackMissileSpeed: 2750,
		passive: undefined,
		spells: [
			{
				name: `TFT7_JinxE`,
				castTime: 0.10000000149011612,
				missile: {
					width: 10,
					travelTime: 0.5,
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
				variables: {
					'MagicDamage': [0, 300, 400, 550],
					'StunDuration': [0, 1.5, 1.5, 2],
					'ManaRefund': [10, 10, 10, 10],
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
										starValues: [0, 300, 400, 550],
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
				name: `TFT7_JinxEMissile`,
				castTime: 0.10000000149011612,
				missile: {
					width: 10,
					travelTime: 0.5,
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
				variables: {
					'MagicDamage': [0, 325, 450, 675],
					'StunDuration': [1, 1.5, 2, 2.5],
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
										starValues: [0, 325, 450, 675],
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
		apiName: `TFT7_Karma`,
		name: `Karma`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Karma.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Dragonmancer`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 500,
			initialMana: 0,
			magicResist: 20,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_KarmaQ`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1950,
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
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 0,
				},
				variables: {
					'MagicDamage': [0, 210, 280, 350],
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
										starValues: [0, 210, 280, 350],
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
		apiName: `TFT7_Kayn`,
		name: `Kayn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Kayn.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Shimmerscale`, `Assassin`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 700,
			initialMana: 0,
			magicResist: 25,
			mana: 45,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_KaynW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ADRatio': [1.7999999523162842, 1.7999999523162842, 1.7999999523162842, 1.7999999523162842],
					'BaseBonusDamage': [0.5, 100, 150, 225],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADRatio`,
										starValues: [1.7999999523162842, 1.7999999523162842, 1.7999999523162842, 1.7999999523162842],
										stat: `AD`,
										ratio: 1,
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
										variable: `{d5eeac4e}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT7_LeeSin`,
		name: `Lee Sin`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_LeeSin.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Dragonmancer`],
		stats: {
			armor: 45,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 800,
			initialMana: 30,
			magicResist: 45,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_LeeSinR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StunDuration': [0, 1.5, 1.5, 1.5],
					'MagicDamage': [0, 295, 375, 495],
					'DragonmancerASPercent': [0, 50, 50, 50],
					'DragonmancerASDuration': [0, 5, 5, 5],
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
										starValues: [0, 295, 375, 495],
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
		apiName: `TFT7_Leona`,
		name: `Leona`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Leona.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mirage`, `Guardian`],
		stats: {
			armor: 45,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 65,
			hp: 700,
			initialMana: 40,
			magicResist: 45,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_LeonaW`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 828.5,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'FlatDamageReduction': [0, 30, 40, 80],
					'Duration': [4, 4, 4, 4],
				},
				calculations: {
					'{d3bdf870}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{cb4cd428}`,
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
		apiName: `TFT7_Lillia`,
		name: `Lillia`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Lillia.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Scalescorn`, `Cavalier`, `Mage`],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 750,
			initialMana: 0,
			magicResist: 40,
			mana: 50,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_LilliaW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MagicDamage': [0, 215, 275, 350],
					'CenterBonusMagicDamage': [0, 190, 240, 320],
					'StunDuration': [1, 1, 1, 1],
				},
				calculations: {
					'{fa95628c}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{b7873cbb}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [0, 215, 275, 350],
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
		apiName: `TFT7_Lulu`,
		name: `Lulu`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Lulu.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Trainer`, `Mystic`, `Evoker`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 650,
			initialMana: 75,
			magicResist: 25,
			mana: 150,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 1450,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT7_LuluW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumTargets': [2, 3, 4, 5],
					'AttackSpeedPercent': [8, 0.699999988079071, 0.800000011920929, 1.2000000476837158],
					'AllyBuffDuration': [0, 5, 5, 5],
					'PolymorphDuration': [0, 1.5, 1.5, 1.5],
					'DamageAmp': [20, 20, 20, 20],
				},
				calculations: {
					'{5ba7c96e}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{a8ca7859}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_LuluDummyMissile`,
				castTime: undefined,
				missile: {
					width: 120,
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
		apiName: `TFT7_Nami`,
		name: `Nami`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nami.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Mage`, `Mystic`],
		stats: {
			armor: 20,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 600,
			initialMana: 50,
			magicResist: 20,
			mana: 90,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NamiW`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.699999988079071,
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
					type: `FixedTimeMovement`,
				},
				variables: {
					'MagicDamage': [0, 150, 180, 210],
					'Healing': [0, 170, 190, 210],
					'BounceCount': [2, 2, 2, 2],
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
										starValues: [0, 150, 180, 210],
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
										starValues: [0, 170, 190, 210],
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
				name: `TFT7_NamiWRecast`,
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
				variables: {
					'MagicDamage': [0, 250, 350, 650],
					'Healing': [0, 250, 350, 650],
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
										starValues: [0, 250, 350, 650],
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
										starValues: [0, 250, 350, 650],
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
				name: `TFT7_NamiWDamageMissile`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.699999988079071,
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
					type: `FixedTimeMovement`,
				},
				variables: {
					'MagicDamage': [0, 250, 350, 650],
					'Healing': [0, 250, 350, 650],
					'BounceCount': [2, 2, 2, 2],
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
										starValues: [0, 250, 350, 650],
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
										starValues: [0, 250, 350, 650],
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
				name: `TFT7_NamiWHealMissile`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.699999988079071,
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
					type: `FixedTimeMovement`,
				},
				variables: {
					'MagicDamage': [0, 250, 350, 650],
					'Healing': [0, 250, 350, 650],
					'BounceCount': [2, 2, 2, 2],
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
										starValues: [0, 250, 350, 650],
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
										starValues: [0, 250, 350, 650],
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
	},
	{
		apiName: `TFT7_Neeko`,
		name: `Neeko`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Neeko.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Shapeshifter`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 1000,
			initialMana: 0,
			magicResist: 20,
			mana: 150,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NeekoPassive`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MagicDamage': [0, 300, 425, 1500],
					'StunDuration': [1.5, 1.5, 1.5, 1.5],
					'StatRatio': [0.6000000238418579, 0.800000011920929, 1, 1.5],
					'HealthRatio': [0.6000000238418579, 0.10000000149011612, 0.20000000298023224, 0.5],
					'OnHitBonusDamage': [0, 40, 80, 200],
					'ShieldBase': [0, 275, 400, 2000],
				},
				calculations: {
					'{26eac852}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldBase`,
										starValues: [0, 275, 400, 2000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [0, 300, 425, 1500],
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
				name: `TFT7_NeekoR`,
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
		apiName: `TFT7_Nidalee`,
		name: `Nidalee`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nidalee.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Shapeshifter`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 550,
			initialMana: 0,
			magicResist: 30,
			mana: 50,
			moveSpeed: 550,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NidaleeR`,
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
				variables: {
					'BaseAS': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'ADRatio': [2.25, 2.25, 2.25, 2.25],
					'NumAttacks': [3, 3, 3, 3],
					'BufferTime': [0.5, 0.5, 0.5, 0.5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADRatio`,
										starValues: [2.25, 2.25, 2.25, 2.25],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ASBoost': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{2acb3e58}`,
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
		missiles: [
			{
				name: `TFT7_NidaleeCougarCritAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_NidaleeCougarBasicAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_NidaleeRTakedown`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT7_NidaleeCougarBasicAttack2`,
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
		apiName: `TFT7_TrainerDragon`,
		name: `Nomsy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nomsy.TFT_Set7.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 0,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.5,
			damage: 0,
			hp: 700,
			initialMana: 90,
			magicResist: 0,
			mana: 140,
			moveSpeed: 550,
			range: 2,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TrainerDragonQ`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [75, 100, 125, 150],
					'BurnDuration': [8, 8, 8, 8],
					'TooltipBurnPercent': [0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.009999999776482582],
					'ShieldAmount': [50, 150, 250, 350],
					'FireballSize': [1, 1, 1, 2],
					'ShouldBurn': [1, 1, 1, 1],
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
										starValues: [75, 100, 125, 150],
										stat: `AP`,
										ratio: 0.009999999776482582,
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
										variable: `ShieldAmount`,
										starValues: [50, 150, 250, 350],
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
				name: `TFT7_TrainerDragonQ2_TooltipOnly`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [25, 50, 75, 100],
					'BurnDuration': [6, 6, 6, 6],
					'TooltipBurnPercent': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'StunDuration': [2, 2, 2, 2],
					'ShieldAmount': [50, 150, 250, 350],
					'ShieldDuration': [8, 8, 8, 8],
					'FireballSize': [0, 1, 1, 2],
					'ShouldBurn': [0, 0, 1, 1],
					'ShouldStun': [0, 0, 0, 1],
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
										starValues: [25, 50, 75, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
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
										variable: `ShieldAmount`,
										starValues: [50, 150, 250, 350],
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
				name: `TFT7_TrainerDragonQ4_TooltipOnly`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [25, 50, 75, 100],
					'BurnDuration': [6, 6, 6, 6],
					'TooltipBurnPercent': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'StunDuration': [2, 2, 2, 2],
					'ShieldAmount': [50, 150, 250, 350],
					'ShieldDuration': [8, 8, 8, 8],
					'FireballSize': [0, 1, 1, 2],
					'ShouldBurn': [0, 0, 1, 1],
					'ShouldStun': [0, 0, 0, 1],
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
										starValues: [25, 50, 75, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
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
										variable: `ShieldAmount`,
										starValues: [50, 150, 250, 350],
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
				name: `TFT7_TrainerDragonQFireball`,
				castTime: undefined,
				missile: {
					width: 250,
					travelTime: undefined,
					speedInitial: 1200,
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
				name: `TFT7_TrainerDragonQBeamMissile`,
				castTime: undefined,
				missile: {
					width: 150,
					travelTime: undefined,
					speedInitial: 4500,
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
				uninterruptable: true,
			},
			{
				name: `TFT7_TrainerDragonQ3_TooltipOnly`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [25, 50, 75, 100],
					'BurnDuration': [6, 6, 6, 6],
					'TooltipBurnPercent': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'StunDuration': [2, 2, 2, 2],
					'ShieldAmount': [50, 150, 250, 350],
					'ShieldDuration': [8, 8, 8, 8],
					'FireballSize': [0, 1, 1, 2],
					'ShouldBurn': [0, 0, 1, 1],
					'ShouldStun': [0, 0, 0, 1],
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
										starValues: [25, 50, 75, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
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
										variable: `ShieldAmount`,
										starValues: [50, 150, 250, 350],
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
				name: `TFT7_TrainerDragonQ1_TooltipOnly`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [25, 50, 75, 100],
					'BurnDuration': [6, 6, 6, 6],
					'TooltipBurnPercent': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'StunDuration': [2, 2, 2, 2],
					'ShieldAmount': [50, 150, 250, 350],
					'ShieldDuration': [8, 8, 8, 8],
					'FireballSize': [0, 1, 1, 2],
					'ShouldBurn': [0, 0, 1, 1],
					'ShouldStun': [0, 0, 0, 1],
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
										starValues: [25, 50, 75, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
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
										variable: `ShieldAmount`,
										starValues: [50, 150, 250, 350],
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
	},
	{
		apiName: `TFT7_Nunu`,
		name: `Nunu & Willump`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nunu.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mirage`, `Cavalier`],
		stats: {
			armor: 50,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 850,
			initialMana: 40,
			magicResist: 50,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NunuQ`,
				castTime: 0.4000000059604645,
				missile: undefined,
				variables: {
					'Damage': [200, 300, 450, 900],
					'DamageAmp': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
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
										starValues: [200, 300, 450, 900],
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
		apiName: `TFT7_Olaf`,
		name: `Olaf`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Olaf.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Scalescorn`, `Bruiser`, `Warrior`],
		stats: {
			armor: 50,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 800,
			initialMana: 50,
			magicResist: 50,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_OlafE`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'AttackDamageRatio': [0, 2, 2, 2],
					'AttackSpeedRatio': [0.30000001192092896, 0.3499999940395355, 0.5, 0.75],
					'BuffDuration': [0, 6, 6, 6],
					'HealthPercentThreshold': [0, 50, 50, 50],
					'StackingAD': [5, 5, 5, 5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{a5fb74cb}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{15b66688}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{60c51c2b}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT7_Ornn`,
		name: `Ornn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Ornn.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Bruiser`, `Legend`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 1000,
			initialMana: 80,
			magicResist: 60,
			mana: 180,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_OrnnR`,
				castTime: 0.75,
				missile: undefined,
				variables: {
					'Damage': [0, 150, 250, 1000],
					'StunDuration': [1, 1.25, 1.75, 8],
					'SlowDuration': [2, 2, 2, 2],
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
										starValues: [0, 150, 250, 1000],
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
				name: `TFT7_OrnnRWave`,
				castTime: 0.25,
				missile: {
					width: 250,
					travelTime: undefined,
					speedInitial: 850,
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
					_missileSpeed: 450,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT7_OrnnRWave2`,
				castTime: 0.25,
				missile: {
					width: 200,
					travelTime: undefined,
					speedInitial: 1650,
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
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT7_Pyke`,
		name: `Pyke`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Pyke.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Whispers`, `Assassin`],
		stats: {
			armor: 40,
			attackSpeed: 1,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 70,
			hp: 900,
			initialMana: 0,
			magicResist: 40,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_PykeR`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 700,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [75, 375, 475, 15000],
					'SecondaryDamage': [1, 180, 250, 15000],
					'HealthThreshold': [0, 25, 33, 1],
					'HealingReduction': [50, 50, 50, 50],
					'HealingReductionDuration': [8, 8, 8, 8],
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
										starValues: [75, 375, 475, 15000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{42de401d}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondaryDamage`,
										starValues: [1, 180, 250, 15000],
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
		apiName: `TFT7_Qiyana`,
		name: `Qiyana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Qiyana.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Assassin`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 650,
			initialMana: 40,
			magicResist: 30,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_QiyanaQ`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'BaseDamage': [50, 200, 275, 375],
					'CCDuration': [1.25, 1.5, 1.75, 2],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [50, 200, 275, 375],
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
				name: `TFT7_QiyanaQMis`,
				castTime: 0.5,
				missile: {
					width: 140,
					travelTime: undefined,
					speedInitial: 900,
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
		apiName: `TFT7_Ryze`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Ryze.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Guild`, `Mage`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 600,
			initialMana: 0,
			magicResist: 25,
			mana: 20,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2400,
		critAttackMissileSpeed: 2400,
		passive: undefined,
		spells: [
			{
				name: `TFT7_RyzeQ`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2200,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: 0.02500000037252903,
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
					'NumOfOrbs': [1, 1, 1, 1],
					'PercentMana': [0, 180, 260, 420],
					'ManaIncrease': [20, 20, 20, 20],
					'OrbIncrease': [1, 1, 1, 1],
					'GuildBonus': [10, 10, 10, 10],
					'PercentManaCalc': [0, 2, 3, 5],
				},
				calculations: {
					'{f8beeca4}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{49123935}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{171b7823}': {
						asPercent: false,
						parts: [
							{
								operator: `product`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: 1,
									},
									{
										variable: `{bec29c44}`,
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
		missiles: [
			{
				name: `TFT7_RyzeQMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2200,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: 0.02500000037252903,
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
					'NumOfOrbs': [1, 1, 1, 1],
					'PercentMana': [0, 600, 900, 2000],
					'ManaIncrease': [20, 20, 20, 20],
					'OrbIncrease': [1, 1, 1, 1],
				},
				calculations: {
					'{f8beeca4}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{49123935}`,
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
	},
	{
		apiName: `TFT7_Sejuani`,
		name: `Sejuani`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Sejuani.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Guild`, `Cavalier`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 650,
			initialMana: 50,
			magicResist: 40,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SejuaniW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'FractionMaxHealth': [0.05999999865889549, 0.05999999865889549, 0.05999999865889549, 0.05999999865889549],
					'StunDuration': [0, 1.5, 1.75, 2],
					'GuildBonus': [100, 100, 100, 100],
				},
				calculations: {
					'SpellDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{1013572d}`,
										starValues: undefined,
										stat: `HP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{e8743c47}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{1013572d}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT7_Senna`,
		name: `Senna`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Senna.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Cannoneer`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 500,
			initialMana: 30,
			magicResist: 15,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 8000,
		critAttackMissileSpeed: 8000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SennaW`,
				castTime: undefined,
				missile: {
					width: 45,
					travelTime: undefined,
					speedInitial: 1200,
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
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'BonusMagicDamage': [0, 300, 500, 700],
					'PercentAttackDamage': [0, 200, 200, 200],
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
										starValues: [0, 200, 200, 200],
										stat: `AD`,
										ratio: 1,
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
										variable: `{93bd0e7e}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_SennaQ`,
				castTime: undefined,
				missile: {
					width: 160,
					travelTime: undefined,
					speedInitial: 20000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: 0.5,
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
					'PercentAD': [1.75, 1.75, 1.75, 1.75],
					'PercentHealing': [0.5, 0.5, 0.5, 0.5],
					'BaseHealing': [0, 100, 150, 200],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [1.75, 1.75, 1.75, 1.75],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'PercentHealing': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentHealing`,
										starValues: [0.5, 0.5, 0.5, 0.5],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'UNUSED': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseHealing`,
										starValues: [0, 100, 150, 200],
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
		apiName: `TFT7_Sett`,
		name: `Sett`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Sett.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Dragonmancer`],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 65,
			hp: 650,
			initialMana: 30,
			magicResist: 40,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 20,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SettQ`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BaseResistAmount': [15, 50, 60, 80],
					'ADRatio': [0, 1.600000023841858, 1.600000023841858, 1.600000023841858],
					'Duration': [4, 4, 4, 4],
				},
				calculations: {
					'BonusDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADRatio`,
										starValues: [0, 1.600000023841858, 1.600000023841858, 1.600000023841858],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{ee90a3b4}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{0ee71306}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT7_Shen`,
		name: `Shen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Shen.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Bruiser`, `Warrior`],
		stats: {
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 800,
			initialMana: 60,
			magicResist: 45,
			mana: 105,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ShenW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ZoneDuration': [2, 2.5, 3, 4],
					'MagicResist': [0, 50, 75, 100],
				},
				calculations: {
					'{b1147ecd}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicResist`,
										starValues: [0, 50, 75, 100],
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
		apiName: `TFT7_DragonGreen`,
		name: `Shi Oh Yu`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_DragonGreen.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Jade`, `Mystic`, `Dragon`],
		stats: {
			armor: 60,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 90,
			hp: 900,
			initialMana: 30,
			magicResist: 60,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 1000,
		passive: {
			name: `TFT7_DragonGreenP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'DamageReduction': [0.20000000298023224, 0.15000000596046448, 0.20000000298023224, 0.5],
				'Stun': [1.25, 1.25, 1.25, 1.25],
				'PercentAttackDamage': [0, 250, 275, 1000],
			},
			calculations: {
				'{d3bdf870}': {
					asPercent: true,
					parts: [
						{
							operator: undefined,
							subparts: [
								{
									variable: `DamageReduction`,
									starValues: [0.20000000298023224, 0.15000000596046448, 0.20000000298023224, 0.5],
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
							operator: `sum`,
							subparts: [
								{
									variable: `PercentAttackDamage`,
									starValues: [0, 250, 275, 1000],
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
		spells: [],
		missiles: [
			{
				name: `TFT7_DragonGreenAttack1`,
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
				name: `TFT7_DragonGreenAttack3`,
				castTime: undefined,
				missile: {
					width: 140,
					travelTime: undefined,
					speedInitial: 1000,
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
							mMaximumDistance: 500,
							mTargeterDefinition: {
								__type: `TargeterDefinitionSkipTerrain`,
							},
							__type: `FixedDistanceIgnoringTerrain`,
						},
						{
							__type: `{e357c116}`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1200,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonGreenAttack2`,
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
		],
	},
	{
		apiName: `TFT7_Shyvana`,
		name: `Shyvana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Shyvana.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Ragewing`, `Shapeshifter`, `Dragon`],
		stats: {
			armor: 70,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 140,
			hp: 1000,
			initialMana: 15,
			magicResist: 70,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ShyvanaR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'InitialDamage': [0, 100, 175, 500],
					'PercentMaxHealth': [0, 60, 75, 999],
					'StunDuration': [0, 1.5, 1.5, 1.5],
					'LingerDuration': [0, 1.5, 1.5, 1.5],
					'FlameBreathDuration': [3.75, 3.75, 3.75, 3.75],
					'FlameBreathDamage': [1500, 1050, 1650, 30000],
				},
				calculations: {
					'{92cd10ab}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `InitialDamage`,
										starValues: [0, 100, 175, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{95c1122d}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{82a4720a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{c209f33e}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{0852737f}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_ShyvanaRFlameBreath`,
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
		apiName: `TFT7_Skarner`,
		name: `Skarner`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Skarner.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Bruiser`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 650,
			initialMana: 40,
			magicResist: 45,
			mana: 90,
			moveSpeed: 550,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SkarnerW`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'ShieldAmount': [225, 300, 360, 420],
					'Duration': [8, 8, 8, 8],
					'AttackSpeed': [1.399999976158142, 1.600000023841858, 1.7999999523162842, 2],
				},
				calculations: {
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldAmount`,
										starValues: [225, 300, 360, 420],
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
		apiName: `TFT7_Sona`,
		name: `Sona`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Sona.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Revel`, `Evoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 750,
			initialMana: 80,
			magicResist: 30,
			mana: 160,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SonaR`,
				castTime: undefined,
				missile: {
					width: 175,
					travelTime: undefined,
					speedInitial: 2300,
					speedMin: 1000,
					speedMax: 9000,
					acceleration: -1200,
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
					type: `AcceleratingMovement`,
					_missileSpeed: 2000,
				},
				variables: {
					'MagicDamage': [0, 200, 300, 1000],
					'StunDuration': [0, 1.5, 2, 8],
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
		apiName: `TFT7_Soraka`,
		name: `Soraka`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Soraka.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Starcaller`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 800,
			initialMana: 100,
			magicResist: 30,
			mana: 200,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SorakaR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Healing': [0, 120, 180, 1000],
					'Stars': [14, 14, 14, 14],
					'Duration': [2, 2, 2, 2],
					'ManaPerAttack': [15, 15, 15, 15],
					'HealthThreshold': [50, 50, 50, 50],
				},
				calculations: {
					'Healing': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Healing`,
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
		],
		missiles: [],
	},
	{
		apiName: `TFT7_Swain`,
		name: `Swain`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Swain.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Dragonmancer`, `Shapeshifter`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 45,
			hp: 600,
			initialMana: 0,
			magicResist: 30,
			mana: 45,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SwainR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'FireballDamage': [0, 65, 105, 165],
					'PercentBonusDamage': [0, 100, 100, 100],
				},
				calculations: {
					'{abc2f776}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{e44b92d9}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_SwainRFireballAttack`,
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
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT7_DragonPurple`,
		name: `Sy'fen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_WhispersDragon.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Whispers`, `Bruiser`, `Dragon`],
		stats: {
			armor: 70,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 110,
			hp: 1100,
			initialMana: 120,
			magicResist: 70,
			mana: 200,
			moveSpeed: 600,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT7_DragonPurpleAbility`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ADRatio': [0, 2, 2, 2],
					'BiteADRatio': [0, 4, 5, 10],
					'ArmorPenPercent': [0, 50, 50, 50],
					'ChargeDistance': [2, 2, 2, 2],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADRatio`,
										starValues: [0, 2, 2, 2],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{64644ad6}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{dd9c6c39}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{68a7cc15}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{2aee64b4}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_DragonPurpleSpellAttack`,
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
		apiName: `TFT7_Sylas`,
		name: `Sylas`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Sylas.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Whispers`, `Mage`, `Bruiser`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 800,
			initialMana: 70,
			magicResist: 50,
			mana: 140,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1750,
		critAttackMissileSpeed: 1750,
		passive: {
			name: `TFT7_SylasP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'Damage': [0, 110, 170, 240],
				'Shield': [0, 365, 415, 475],
				'ShieldDuration': [0, 6, 6, 6],
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
									starValues: [0, 110, 170, 240],
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
									starValues: [0, 365, 415, 475],
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
		spells: [],
		missiles: [],
	},
	{
		apiName: `TFT7_TahmKench`,
		name: `Tahm Kench`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_TahmKench.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Revel`, `Bruiser`],
		stats: {
			armor: 40,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 70,
			hp: 700,
			initialMana: 60,
			magicResist: 40,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TahmKenchE`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BaseShield': [0, 250, 325, 450],
					'MagicDamage': [0, 50, 75, 125],
					'ShieldDuration': [6, 6, 6, 6],
					'ShieldHealthRatio': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
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
										starValues: [0, 50, 75, 125],
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
										variable: `BaseShield`,
										starValues: [0, 250, 325, 450],
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
		apiName: `TFT7_Talon`,
		name: `Talon`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Talon.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Guild`, `Assassin`],
		stats: {
			armor: 40,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 70,
			hp: 800,
			initialMana: 50,
			magicResist: 40,
			mana: 125,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TalonR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StealthDuration': [1.5, 1.5, 1.5, 1.5],
					'BaseDamage': [0, 120, 200, 600],
					'ADRatio': [4.800000190734863, 4.800000190734863, 4.800000190734863, 4.800000190734863],
					'SecondaryRatio': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'DashHexRange': [4, 4, 4, 4],
					'GuildBonus': [10, 10, 10, 10],
					'NumBlades': [12, 12, 12, 12],
					'RingOffsetDistance': [550, 550, 550, 550],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 120, 200, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `ADRatio`,
										starValues: [4.800000190734863, 4.800000190734863, 4.800000190734863, 4.800000190734863],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{678683de}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 120, 200, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{afd7414c}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{3fdfc378}`,
										starValues: undefined,
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
				name: `TFT7_TalonRMisOne`,
				castTime: undefined,
				missile: {
					width: 140,
					travelTime: undefined,
					speedInitial: 2400,
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
			{
				name: `TFT7_TalonRMisTwo`,
				castTime: undefined,
				missile: {
					width: 140,
					travelTime: undefined,
					speedInitial: 2000,
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
		apiName: `TFT_TrainingDummy`,
		name: `Target Dummy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFTDebug_Dummy.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 40,
			attackSpeed: 0.20000000298023224,
			critChance: null,
			critMultiplier: 0,
			damage: 0,
			hp: 700,
			initialMana: 0,
			magicResist: 40,
			mana: 0,
			moveSpeed: 0,
			range: 0,
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
		apiName: `TFT7_Taric`,
		name: `Taric`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Taric.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Guardian`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 700,
			initialMana: 0,
			magicResist: 45,
			mana: 50,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TaricW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Armor': [0, 30, 60, 120],
					'Duration': [6, 6, 6, 6],
				},
				calculations: {
					'{4651b159}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Armor`,
										starValues: [0, 30, 60, 120],
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
		apiName: `TFT7_Thresh`,
		name: `Thresh`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Thresh.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Whispers`, `Guardian`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 70,
			hp: 750,
			initialMana: 150,
			magicResist: 45,
			mana: 150,
			moveSpeed: 550,
			range: 2,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ThreshQ`,
				castTime: undefined,
				missile: {
					width: 70,
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
					type: `FixedSpeedMovement`,
					_missileSpeed: 800,
				},
				variables: {
					'Damage': [0, 250, 400, 800],
					'PullDuration': [2, 2, 2, 2],
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
										starValues: [0, 250, 400, 800],
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
		apiName: `TFT7_Tristana`,
		name: `Tristana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Tristana.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Trainer`, `Cannoneer`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 600,
			initialMana: 0,
			magicResist: 20,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2250,
		critAttackMissileSpeed: 2250,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TristanaE`,
				castTime: 0.30000001192092896,
				missile: {
					width: 45,
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
							__type: `DestroyOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [0, 130, 160, 200],
					'NumOfCharges': [2, 2, 2, 2],
					'HexRadius': [1, 1, 1, 1],
					'Duration': [1, 1, 1, 1],
					'PercentAD': [1.600000023841858, 1.399999976158142, 1.7000000476837158, 2.0999999046325684],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [1.600000023841858, 1.399999976158142, 1.7000000476837158, 2.0999999046325684],
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
				name: `TFT7_TristanaEMissile`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.4000000059604645,
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
		apiName: `TFT7_Twitch`,
		name: `Twitch`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Twitch.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Guild`, `Swiftshot`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 550,
			initialMana: 40,
			magicResist: 20,
			mana: 80,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TwitchW`,
				castTime: 0.20000000298023224,
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
					'BaseDamage': [0, 40, 80, 150],
					'ADRatio': [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
					'TooltipShredMult': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'ShredDuration': [5, 5, 5, 5],
					'GuildBonus': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
				},
				calculations: {
					'{678683de}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 40, 80, 150],
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
								operator: `sum`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 40, 80, 150],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `ADRatio`,
										starValues: [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
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
		apiName: `TFT7_Varus`,
		name: `Varus`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Varus.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Swiftshot`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 650,
			initialMana: 75,
			magicResist: 25,
			mana: 150,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_VarusR`,
				castTime: undefined,
				missile: {
					width: 40,
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
					_missileSpeed: 3200,
				},
				variables: {
					'ADPercent': [0, 250, 250, 250],
					'StunDuration': [0, 1.5, 1.75, 2],
					'SpreadCount': [3, 3, 3, 3],
					'MagicDamage': [0, 100, 180, 300],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [0, 250, 250, 250],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [0, 100, 180, 300],
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
				name: `TFT7_VarusRSpread`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
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
					type: `FixedSpeedMovement`,
					_missileSpeed: 3200,
				},
				variables: {
					'ADPercent': [0, 190, 200, 210],
					'StunDuration': [0, 1.5, 2, 3],
					'SpreadCount': [3, 3, 3, 3],
					'MagicDamage': [0, 160, 200, 260],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [0, 190, 200, 210],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [0, 160, 200, 260],
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
	},
	{
		apiName: `TFT7_Vladimir`,
		name: `Vladimir`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Vladimir.TFT_Set7.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Mage`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 700,
			initialMana: 0,
			magicResist: 45,
			mana: 70,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1400,
		passive: undefined,
		spells: [
			{
				name: `TFT7_VladimirQ`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1400,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [75, 275, 325, 375],
					'Heal': [0, 270, 300, 330],
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
										starValues: [75, 275, 325, 375],
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
										starValues: [0, 270, 300, 330],
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
				name: `TFT7_VladimirQHeal`,
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
		apiName: `TFT_VoidSpawn`,
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
		apiName: `TFT7_Volibear`,
		name: `Volibear`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Volibear.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shimmerscale`, `Dragonmancer`, `Legend`],
		stats: {
			armor: 45,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 750,
			initialMana: 0,
			magicResist: 45,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 0,
		passive: {
			name: `TFT7_VolibearP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'BonusHealth': [0, 375, 650, 1200],
				'NumTargets': [0, 4, 4, 4],
				'DamagePerTarget': [0, 110, 160, 225],
				'NumAttacks': [3, 3, 3, 3],
			},
			calculations: {
				'{9e90f75f}': {
					asPercent: false,
					parts: [
						{
							operator: `scale`,
							subparts: [
								{
									variable: `{f96b5c0a}`,
									starValues: undefined,
									stat: `AP`,
									ratio: 0.009999999776482582,
								},
							],
						},
					],
				},
				'BonusHealth': {
					asPercent: false,
					parts: [
						{
							operator: `identity`,
							subparts: [
								{
									variable: `BonusHealth`,
									starValues: [0, 375, 650, 1200],
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
		spells: [],
		missiles: [],
	},
	{
		apiName: `TFT7_Xayah`,
		name: `Xayah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Xayah.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Swiftshot`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 700,
			initialMana: 0,
			magicResist: 25,
			mana: 75,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT7_XayahW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumBonusAttacks': [0, 2, 2, 3],
					'BonusAttackDamageReduction': [0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066],
					'PullbackDamagePerFeather': [0, 10, 12, 30],
					'RecallAD': [0.3499999940395355, 0.3499999940395355, 0.3499999940395355, 0.3499999940395355],
					'Duration': [4, 4, 4, 4],
				},
				calculations: {
					'{9cd1f94c}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{5656a196}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{72978f00}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{bd7ddc56}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{0ac2e775}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{d94f1225}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `{5656a196}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_XayahE_mis`,
				castTime: undefined,
				missile: {
					width: 140,
					travelTime: undefined,
					speedInitial: 4000,
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
			{
				name: `TFT7_XayahW_mis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 4000,
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
				name: `TFT7_XayahW_Passthrough_mis`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: undefined,
					speedInitial: 4000,
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
		apiName: `TFT7_Yasuo`,
		name: `Yasuo`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Yasuo.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mirage`, `Dragonmancer`, `Warrior`],
		stats: {
			armor: 50,
			attackSpeed: 1,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 90,
			hp: 1000,
			initialMana: 0,
			magicResist: 50,
			mana: 25,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_YasuoE`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ShieldAmount': [0, 180, 240, 2500],
					'ShieldDuration': [0, 2, 2, 20],
					'PercentAttackDamage': [0, 150, 180, 3000],
					'StunDuration': [0, 1.5, 1.5, 1.5],
					'EmpoweredDamagePct': [0, 250, 250, 250],
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
										starValues: [0, 150, 180, 3000],
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
										variable: `ShieldAmount`,
										starValues: [0, 180, 240, 2500],
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
		apiName: `TFT7_Yone`,
		name: `Yone`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Yone.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mirage`, `Warrior`],
		stats: {
			armor: 40,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 800,
			initialMana: 0,
			magicResist: 40,
			mana: 0,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_YonePassive`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BonusDamage': [0, 90, 140, 215],
					'PercentAD': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
				},
				calculations: {
					'{fda1f1fc}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
										stat: `AD`,
										ratio: 1,
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
										variable: `BonusDamage`,
										starValues: [0, 90, 140, 215],
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
		apiName: `TFT7_Zoe`,
		name: `Zoe`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Zoe.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shimmerscale`, `Spell Thief`, `Mage`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 45,
			hp: 800,
			initialMana: 30,
			magicResist: 20,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1900,
		critAttackMissileSpeed: 2200,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ZoeW`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT7_Zoe_TFT6_LuxR`,
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
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [200, 375, 575, 9001],
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
										starValues: [200, 375, 575, 9001],
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
				name: `TFT7_Zoe_TFT_KayleR`,
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
				variables: {
					'ShieldDuration': [1.5, 1.5, 1.5, 1.5],
					'Targets': [0, 2, 3, 10],
					'ResistAmount': [0, 20, 40, 500],
				},
				calculations: {
					'{ee90a3b4}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{ef274473}`,
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
				name: `TFT7_Zoe_TFT3_JannaQ`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1166.6669921875,
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
					_missileSpeed: 0,
				},
				variables: {
					'PercentAttackSpeed': [0, 0.20000000298023224, 0.4000000059604645, 5],
					'BuffDuration': [0, 5, 5, 5],
					'StunDuration': [0, 1.25, 1.25, 8],
				},
				calculations: {
					'{98aa80a6}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{db1859c9}`,
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
				name: `TFT7_Zoe_TFT3_JannaQMissile`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1166.6669921875,
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
				uninterruptable: true,
			},
			{
				name: `TFT7_Zoe_TFT5_IvernR`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 20,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'DaisyBonusAPConversion': [1, 1, 1, 1],
					'DaisyHealth': [0, 1600, 2800, 25000],
					'TooltipDaisyDamage': [0, 500, 1000, 10000],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT7_IvernMinion`,
		name: `Zoe's Daisy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_IvernMinion.TFT_Set7.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 60,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 120,
			hp: undefined,
			initialMana: 0,
			magicResist: 60,
			mana: 0,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 4000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_IvernMinionSpell`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'Damage': [250, 750, 1500, 10000],
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
										starValues: [250, 750, 1500, 10000],
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
]

export const otherUnits: ChampionData[] = [
	{
		apiName: `TFT6_TheGoldenEgg`,
		name: `The Golden Egg`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT6_TheGoldenEgg.TFT_Set6_Stage2.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 10,
			attackSpeed: 1,
			critChance: null,
			critMultiplier: 0,
			damage: 10,
			hp: 10,
			initialMana: 0,
			magicResist: 10,
			mana: 100,
			moveSpeed: 0,
			range: NaN,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT6_TheGoldenEgg`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'EggTurns': [10, 10, 10, 10],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
]

export const abilities: Record<string, AbilityData> = {
	'TFT7_Aatrox': {
		desc: `Aatrox strikes his target for <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAttackDamage@% Attack Damage %i:scaleAD%) and heals himself for @ModifiedHeal@.`,
		icon: `ASSETS/Characters/Aatrox/HUD/Icons2D/Aatrox_Passive.dds`,
		name: `Deathbringer Strike`,
		variables: {
			'PercentAttackDamage': [0, 275, 305, 385],
			'Heal': [0, 300, 350, 400],
		},
	},
	'TFT7_Anivia': {
		desc: `Anivia summons a prismatic storm around her target, dealing @ModifiedDamage@ magic damage over @Duration@ seconds. Enemies in the storm have their Magic Resist reduced by 40%. `,
		icon: `ASSETS/Characters/Anivia/HUD/Icons2D/Anivia_R.dds`,
		name: `Prismatic Storm`,
		variables: {
			'Damage': [0, 325, 475, 750],
			'Duration': [3, 3, 3, 3],
		},
	},
	'TFT7_AoShin': {
		desc: `Ao Shin fires a barrage of @NumStrikes@ lightning strikes at random enemies. Each strike deals @ModifiedDamage@ magic damage and reduces @ManaDrain@ current Mana from his target.`,
		icon: `ASSETS/Characters/TFT7_AoShin/HUD/Icons2D/TFT7_AoShin_Spell.TFT_Set7.dds`,
		name: `Lightning Rain`,
		variables: {
			'Damage': [0, 225, 385, 2500],
			'NumStrikes': [0, 20, 20, 20],
			'ManaDrain': [0, 10, 10, 10],
		},
	},
	'TFT7_Ashe': {
		desc: `Ashe fires a volley of @NumOfArrows@ arrows. Enemies hit take @ModifiedDamage@ magic damage and suffer @ASReduction@% reduced Attack Speed for @Duration@ seconds.`,
		icon: `ASSETS/Characters/Ashe/HUD/Icons2D/Ashe_W.dds`,
		name: `Volley`,
		variables: {
			'Damage': [0, 125, 175, 250],
			'NumOfArrows': [6, 6, 6, 6],
			'ASReduction': [30, 30, 30, 30],
			'Duration': [3, 3, 3, 3],
			'DragonmancerDamageMultiplier': [0, 3, 3, 3],
		},
	},
	'TFT7_AurelionSol': {
		desc: `Aurelion Sol summons an unstable black hole underneath a random enemy. After 2 seconds it implodes, dealing @ModifiedSpellDamage@ magic damage to all enemies in the area and increasing their damage taken by @DebuffPercent*100@% for @DebuffDuration@ seconds.<br><br>Black holes generated after @AscendTimer@ seconds of combat are larger and deal @AscendDamageIncrease*100@% more damage.`,
		icon: `ASSETS/Characters/AurelionSol/HUD/Icons2D/AurelionSol_Q_Explode.dds`,
		name: `Black Hole`,
		variables: {
			'SpellDamage': [0, 375, 625, 5000],
			'DebuffPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'DebuffDuration': [10, 10, 10, 10],
			'AscendTimer': [18, 18, 18, 18],
			'AscendDamageIncrease': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
		},
	},
	'TFT7_Bard': {
		desc: `Bard sends magical energy toward the largest group of enemies, stunning them for @StasisDuration@ seconds and causing them to take @ModifiedDamageAmpRatio@ increased damage while stunned. If he hits at least 1 enemy, Bard dances in celebration.`,
		icon: `ASSETS/Characters/Bard/HUD/Icons2D/Bard_R.dds`,
		name: `Tempered Fate`,
		variables: {
			'StasisDuration': [2, 1.25, 2, 15],
			'DamageAmpRatio': [0, 0.15000000596046448, 0.20000000298023224, 99.98999786376953],
			'GuildBonus': [2, 2, 2, 2],
		},
	},
	'TFT7_Braum': {
		desc: `Braum puts up his shield for @ShieldDuration@ seconds, reducing his damage taken from that direction by @ModifiedShieldDR@. `,
		icon: `ASSETS/Characters/Braum/HUD/Icons2D/Braum_E.dds`,
		name: `Unbreakable`,
		variables: {
			'ShieldDR': [0.5, 0.6000000238418579, 0.699999988079071, 0.800000011920929],
			'ShieldDuration': [4, 4, 4, 4],
		},
	},
	'TFT7_Corki': {
		desc: `Corki launches a barrage of @NumMissiles@ missiles at his target, each dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAttackDamage*100@% Attack Damage %i:scaleAD%). The final missile is instead The Big One and deals <scaleAD>@TotalBigDamage@</scaleAD> physical damage (@BigPercentAttackDamage*100@% Attack Damage %i:scaleAD% + @ModifiedMagicDamage@) in a large area.`,
		icon: `ASSETS/Characters/Corki/HUD/Icons2D/Corki_R_BigOne.dds`,
		name: `Missile Barrage`,
		variables: {
			'PercentAttackDamage': [0.5, 0.5, 0.699999988079071, 2],
			'NumMissiles': [4, 4, 4, 4],
			'MagicDamage': [50, 90, 140, 600],
			'BigPercentAttackDamage': [0, 1.5499999523162842, 1.850000023841858, 4],
			'BigOneHexRadius': [2, 2, 2, 2],
		},
	},
	'TFT7_DragonBlue': {
		desc: `Passive: Daeja's attacks launch three barrages that each deal @ModifiedPassiveDamage@ bonus magic damage and reduce the target's Magic Resist by @MRReduction@.<br><br>Active: Daeja sends a wind blast toward the largest group of enemies, dealing @ModifiedBlastDamage@ magic damage.`,
		icon: `ASSETS/Characters/Ezreal/HUD/Icons2D/Ezreal_MysticShot.dds`,
		name: `Windblast`,
		variables: {
			'PassiveDamage': [0, 20, 35, 150],
			'MRReduction': [0, 5, 5, 5],
			'BlastDamage': [0, 275, 375, 1800],
		},
	},
	'TFT7_Diana': {
		desc: `Diana shields herself against @ModifiedShield@ damage over @ShieldDuration@ seconds and summons @Orbs@ orbs to orbit around her. These orbs explode for @ModifiedDamage@ magic damage when they hit an enemy, refreshing her Shield when the final one explodes.`,
		icon: `ASSETS/Characters/Diana/HUD/Icons2D/Diana_W_LunarShower.dds`,
		name: `Pale Cascade`,
		variables: {
			'Orbs': [2, 5, 6, 7],
			'OrbDamage': [70, 90, 105, 120],
			'ShieldValue': [50, 300, 350, 400],
			'ShieldDuration': [6, 6, 6, 6],
		},
	},
	'TFT7_Elise': {
		desc: `Elise transforms into Spider Form for the rest of combat, reducing her Attack Range to 1 and replacing her ability with Venomous Bite, which she immediately casts.<br><br>Venomous Bite: Elise's next attack deals @ModifiedDamage@ bonus magic damage. If this kills her target she ascends, becoming untargetable before dropping near the lowest Health enemy and immediately casting Venomous Bite again.`,
		icon: `ASSETS/Characters/Elise/HUD/Icons2D/EliseR.DDS`,
		name: `Spider Form`,
		variables: {
			'Damage': [0, 230, 270, 310],
		},
	},
	'TFT7_Ezreal': {
		desc: `Ezreal fires an energy bolt towards his target. The first enemy hit takes @ModifiedMagicDamage@ magic damage and grants Ezreal @ModifiedAS@ bonus Attack Speed, stacking up to @MaxStacks@ times.`,
		icon: `ASSETS/Characters/Ezreal/HUD/Icons2D/Ezreal_Q.dds`,
		name: `Mystic Shot`,
		variables: {
			'ASBoost': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'MaxStacks': [5, 5, 5, 5],
			'MagicDamage': [70, 200, 250, 325],
		},
	},
	'TFT7_Gnar': {
		desc: `Gnar transforms into Mega Form, jumping to his target and knocking up nearby enemies for @StunDuration@ second. Gnar also gains @ModifiedAD@ Attack Damage and @ModifiedArmor@ Armor, but reduces his Attack Range to 1.`,
		icon: `ASSETS/Characters/Gnar/HUD/Icons2D/Gnar_Passive.dds`,
		name: `Mega Gnar`,
		variables: {
			'AttackDamage': [0, 50, 80, 150],
			'Armor': [0, 40, 50, 75],
			'StunDuration': [1, 1, 1, 1],
		},
	},
	'TFT7_Hecarim': {
		desc: `Hecarim summons spectral riders that charge through his target, dealing @ModifiedDamage@ magic damage and stunning enemies hit for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Hecarim/HUD/Icons2D/Hecarim_OnslaughtofShadows.dds`,
		name: `Onslaught of Shadows`,
		variables: {
			'Damage': [0, 150, 250, 1000],
			'StunDuration': [0, 1.5, 2, 8],
		},
	},
	'TFT7_Heimerdinger': {
		desc: `Heimerdinger lobs an egg at the highest percent Health enemy, dealing @ModifiedDamage@ magic damage and stunning them for @StunDuration@ seconds. `,
		icon: `ASSETS/Characters/Heimerdinger/HUD/Icons2D/Heimerdinger_E1.dds`,
		name: `Egg Toss`,
		variables: {
			'MagicDamage': [0, 225, 325, 475],
			'StunDuration': [0, 1.5, 1.5, 1.5],
		},
	},
	'TFT7_DragonGold': {
		desc: `Idas hardens her scales for @DefenseDuration@ seconds, reducing incoming damage by @DamageReduction@. She then roars, healing herself for @ModifiedHeal@ Health and shielding other allies for @ModifiedShieldValue@ for @RoarDuration@ seconds. The shield grants @ASBonusBase*100@% Attack Speed while it holds. `,
		icon: `ASSETS/Characters/JarvanIV/HUD/Icons2D/JarvanIV_GoldenAegis.dds`,
		name: `Golden Scales`,
		variables: {
			'DefenseDuration': [2, 2, 2, 2],
			'DamageReduction': [0, 35, 55, 300],
			'Heal': [0, 450, 600, 3000],
			'ASBonusBase': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'RoarDuration': [5, 5, 5, 5],
			'ShieldValue': [0, 180, 275, 2000],
		},
	},
	'TFT7_Illaoi': {
		desc: `Illaoi slams her idol into the ground, summoning @Tentacles@ tentacles that lash out, dealing @ModifiedDamage@ magic damage to enemies in a cone. Illaoi steals @ResistStealPercent@% Armor and Magic Resist from each enemy hit for @Duration@ seconds.`,
		icon: `ASSETS/Characters/Illaoi/HUD/Icons2D/Illaoi_P.dds`,
		name: `Cosmic Lash`,
		variables: {
			'MagicDamage': [0, 125, 175, 250],
			'Tentacles': [0, 3, 3, 3],
			'PercentAD': [0, 1, 1.100000023841858, 1.2000000476837158],
			'ResistStealPercent': [33, 33, 33, 33],
			'Duration': [5, 5, 5, 5],
		},
	},
	'TFT7_JadeStatue': {
		desc: `When its Health is depleted, the Jade Statue will explode.`,
		icon: `ASSETS/Characters/TFT7_JadeStatue/HUD/Icons2D/TFT7_JadeStatue_EyeOfTheStorm.TFT_Set7.dds`,
		name: `Shatter`,
		variables: {},
	},
	'TFT7_Jinx': {
		desc: `Jinx summons a line of traps centered on her target. Traps detonate after a brief delay, dealing @ModifiedDamage@ magic damage and stunning enemies hit for @StunDuration@ second(s). Jinx gains @ManaRefund@ mana for each empty trap. `,
		icon: `ASSETS/Characters/Jinx/HUD/Icons2D/Jinx_E.dds`,
		name: `Flame Chompers`,
		variables: {
			'MagicDamage': [0, 250, 400, 600],
			'StunDuration': [0, 1.5, 1.5, 2],
			'ManaRefund': [25, 25, 25, 25],
		},
	},
	'TFT7_Karma': {
		desc: `Karma fires a burst of energy towards her target, dealing @ModifiedDamage@ magic damage in a small area around the first enemy hit.`,
		icon: `ASSETS/Characters/Karma/HUD/Icons2D/Karma_Q1.dds`,
		name: `Inner Flame`,
		variables: {
			'MagicDamage': [0, 210, 280, 350],
		},
	},
	'TFT7_Kayn': {
		desc: `Kayn sweeps his scythe in a line through his target, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% Attack Damage %i:scaleAD%) to all enemies and an additional @ModifiedBonusDamage@ magic damage to the first enemy hit.`,
		icon: `ASSETS/Characters/Kayn/HUD/Icons2D/Kayn_W_Primary.dds`,
		name: `Blade's Reach`,
		variables: {
			'ADRatio': [2.75, 2.75, 2.75, 2.75],
			'BaseBonusDamage': [0.5, 90, 150, 275],
		},
	},
	'TFT7_LeeSin': {
		desc: `Lee Sin kicks his target, stunning them for @StunDuration@ seconds and knocking them back. The target and all enemies they hit take @ModifiedMagicDamage@ magic damage.`,
		icon: `ASSETS/Characters/LeeSin/HUD/Icons2D/BlindMonkR.dds`,
		name: `Dragon's Rage`,
		variables: {
			'StunDuration': [0, 1.5, 1.5, 1.5],
			'MagicDamage': [0, 295, 375, 495],
			'DragonmancerASPercent': [0, 50, 50, 50],
			'DragonmancerASDuration': [0, 5, 5, 5],
		},
	},
	'TFT7_Leona': {
		desc: `Leona creates a barrier around herself, reducing all incoming damage by @ModifiedDamageReduction@ for 4 seconds.`,
		icon: `ASSETS/Characters/Leona/HUD/Icons2D/LeonaSolarBarrier.dds`,
		name: `Solar Barrier`,
		variables: {
			'FlatDamageReduction': [0, 30, 40, 60],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT7_Lillia': {
		desc: `Lillia strikes a small area around her target's current location, dealing @ModifiedMagicDamage@ magic damage spread amongst all enemies hit and @ModifiedCenterBonusMagicDamage@ bonus magic damage to the enemy at the center of the blast. `,
		icon: `ASSETS/Characters/Lillia/HUD/Icons2D/Lillia_Icon_W.dds`,
		name: `Watch Out!`,
		variables: {
			'MagicDamage': [0, 215, 275, 350],
			'CenterBonusMagicDamage': [0, 190, 240, 320],
			'StunDuration': [1, 1, 1, 1],
		},
	},
	'TFT7_Lulu': {
		desc: `Lulu enchants the @NumTargets@ units nearest to her. Enchanted allies gain @ModifiedAttackSpeedPercent@ bonus Attack Speed for @AllyBuffDuration@ seconds. Enchanted enemies are stunned and transformed into a docile feline for @PolymorphDuration@ seconds, taking @DamageAmp@% increased damage. If there are less than 3 units nearby, Lulu will enchant herself.`,
		icon: `ASSETS/Characters/Lulu/HUD/Icons2D/Lulu_Whimsy.dds`,
		name: `Whimsy`,
		variables: {
			'NumTargets': [2, 3, 4, 5],
			'AttackSpeedPercent': [8, 0.699999988079071, 0.800000011920929, 1.2000000476837158],
			'AllyBuffDuration': [0, 5, 5, 5],
			'PolymorphDuration': [0, 1.5, 1.5, 1.5],
			'DamageAmp': [20, 20, 20, 20],
		},
	},
	'TFT7_Nami': {
		desc: `Nami launches a stream of water at her target that bounces up to @BounceCount@ additional targets, prioritizing low Health targets and alternating between enemies and allies. Enemies hit take @ModifiedDamage@ magic damage and allies hit heal for @ModifiedHealing@.`,
		icon: `ASSETS/Characters/Nami/HUD/Icons2D/NamiW.dds`,
		name: `Ebb and Flow`,
		variables: {
			'MagicDamage': [0, 150, 180, 210],
			'Healing': [0, 170, 190, 210],
			'BounceCount': [2, 2, 2, 2],
		},
	},
	'TFT7_Neeko': {
		desc: `Each Combat: Neeko disguises herself as the nearest allied champion, adding their bonus Attack Damage and Attack Speed to her own and copying all other stats except Health. She then gains a shield for @ModifiedShieldBase@ plus @HealthRatio*100@% of her ally's Health.<br><br>When the shield breaks, she transforms into Neeko Form, reverts back to her own stats, and casts Pop Blossom, dealing @ModifiedMagicDamage@ magic damage to nearby enemies and stunning them for @StunDuration@ seconds. Neeko then casts Pop Blossom each time she reaches maximum mana.`,
		icon: `ASSETS/Characters/Neeko/HUD/Icons2D/Neeko_P.dds`,
		name: `Inherent Glamour`,
		variables: {
			'MagicDamage': [0, 300, 425, 1500],
			'StunDuration': [1.5, 1.5, 1.5, 1.5],
			'StatRatio': [0.6000000238418579, 0.800000011920929, 1, 1.5],
			'HealthRatio': [0.6000000238418579, 0.10000000149011612, 0.20000000298023224, 0.5],
			'OnHitBonusDamage': [0, 40, 80, 200],
			'ShieldBase': [0, 275, 400, 2000],
		},
	},
	'TFT7_Nidalee': {
		desc: `Nidalee transforms into Cougar Form for the rest of combat, reducing her Attack Range to 1 and gaining bonus movement speed and @ModifiedAS@ Attack Speed. While in cougar form, every @NumAttacks@rd attack swipes her target for <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% Attack Damage %i:scaleAD%).`,
		icon: `ASSETS/Characters/Nidalee/HUD/Icons2D/Nidalee_R2.dds`,
		name: `Primal Surge`,
		variables: {
			'BaseAS': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'ADRatio': [2.25, 2.25, 2.25, 2.25],
			'NumAttacks': [3, 3, 3, 3],
			'BufferTime': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT7_TrainerDragon': {
		desc: `Nomsy breathes fire towards its target, dealing @ModifiedDamage@ magic damage to enemies hit and burning them for @TooltipBurnPercent*100@% of their maximum Health true damage per second over @BurnDuration@ seconds. Burned enemies suffer @GrievousWoundsPercent@% reduced healing.`,
		icon: `ASSETS/Characters/Brand/HUD/Icons2D/BrandQ.dds`,
		name: `Fireball!`,
		variables: {
			'Damage': [50, 85, 105, 125],
			'BurnDuration': [8, 8, 8, 8],
			'TooltipBurnPercent': [0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.009999999776482582],
			'StunDuration': [],
			'ShieldAmount': [50, 150, 250, 350],
			'ShieldDuration': [],
			'FireballSize': [1, 1, 1, 2],
			'ShouldBurn': [1, 1, 1, 1],
			'ShouldStun': [],
			'GrievousWoundsPercent': [0, 50, 50, 50],
		},
	},
	'TFT7_Nunu': {
		desc: `Nunu encourages Willump to bite his target, dealing @ModifiedDamage@ magic damage. If Willump's target has less Health than he does before the bite, it deals an additional @DamageAmp*100@% damage and becomes true damage.`,
		icon: `ASSETS/Characters/Nunu/HUD/Icons2D/NunuQ.dds`,
		name: `Consume`,
		variables: {
			'Damage': [200, 350, 500, 800],
			'DamageAmp': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
		},
	},
	'TFT7_Olaf': {
		desc: `Passive: Olaf seeks glorious death, permanently gaining %i:scaleAD% @StackingAD@ Attack Damage (@StackingAD*2@ in Hyper Roll) whenever he dies (Current Bonus: %i:scaleAD% @TFTUnitProperty.:TFT7_OlafPassiveBonusAD@ Attack Damage).<br><br>Active: Olaf strikes his target, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@AttackDamageRatio*100@% Attack Damage %i:scaleAD%) and gaining @ModifiedAttackSpeedRatio@ Attack Speed for @BuffDuration@ seconds. If he's below @HealthPercentThreshold@% Health, the Attack Speed is doubled.`,
		icon: `ASSETS/Characters/Olaf/HUD/Icons2D/Olaf_E.dds`,
		name: `Recklessness`,
		variables: {
			'AttackDamageRatio': [0, 2, 2, 2],
			'AttackSpeedRatio': [0.30000001192092896, 0.3499999940395355, 0.5, 0.75],
			'BuffDuration': [0, 6, 6, 6],
			'HealthPercentThreshold': [0, 50, 50, 50],
			'StackingAD': [5, 5, 5, 5],
		},
	},
	'TFT7_Ornn': {
		desc: `Ornn summons an elemental that charges towards Ornn through the farthest enemy, dealing @ModifiedDamage@ magic damage to enemies hit and slowing their Attack Speed by 50% for @SlowDuration@ seconds. When the elemental reaches Ornn he redirects it towards another distant enemy, dealing @ModifiedDamage@ magic damage to enemies hit and stunning them for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Ornn/HUD/Icons2D/OrnnR1.dds`,
		name: `Stampede`,
		variables: {
			'Damage': [0, 150, 250, 1000],
			'StunDuration': [1, 1.25, 1.75, 8],
			'SlowDuration': [2, 2, 2, 2],
		},
	},
	'TFT7_Pyke': {
		desc: `Pyke dives toward the lowest Health enemy and slashes in an X, dealing @ModifiedDamage@ magic damage to his target and @ModifiedSecondaryDamage@ to other enemies struck. Enemies hit suffer @HealingReduction@% reduced healing for @HealingReductionDuration@ seconds.<br><br>If Pyke hits an enemy at or below @HealthThreshold@% Health he executes them and immediately recasts Death From Below.`,
		icon: `ASSETS/Characters/Pyke/HUD/Icons2D/PykeR.dds`,
		name: `Death From Below`,
		variables: {
			'Damage': [75, 375, 475, 15000],
			'SecondaryDamage': [1, 180, 250, 15000],
			'HealthThreshold': [0, 25, 33, 1],
			'HealingReduction': [50, 50, 50, 50],
			'HealingReductionDuration': [8, 8, 8, 8],
		},
	},
	'TFT7_Qiyana': {
		desc: `Qiyana dashes to the best position to strike enemies with her blade, dealing @ModifiedDamage@ magic damage in a short line and disarming enemies hit for @CCDuration@ seconds.`,
		icon: `ASSETS/Characters/Qiyana/HUD/Icons2D/Qiyana_Q1.dds`,
		name: `Elemental Blade`,
		variables: {
			'BaseDamage': [50, 200, 275, 375],
			'CCDuration': [1.25, 1.5, 1.75, 2],
		},
	},
	'TFT7_Ryze': {
		desc: `Ryze hurls @NumOfOrbs@ arcane orb at his target, dealing <scaleAP>@SingleOrbDamage@</scaleAP> magic damage (@ModifiedPercentMana@%%i:scaleAP% maximum Mana %i:scaleMana%). Each cast increases his maximum Mana by @ManaIncrease@ and the number of orbs thrown by @OrbIncrease@.`,
		icon: `ASSETS/Characters/Ryze/HUD/Icons2D/Ryze_Q.dds`,
		name: `Overload`,
		variables: {
			'NumOfOrbs': [1, 1, 1, 1],
			'PercentMana': [0, 180, 260, 420],
			'ManaIncrease': [20, 20, 20, 20],
			'OrbIncrease': [1, 1, 1, 1],
			'GuildBonus': [10, 10, 10, 10],
			'PercentManaCalc': [0, 2, 3, 5],
		},
	},
	'TFT7_Sejuani': {
		desc: `Sejuani swings her mace wide, hitting all enemies in a cone for <magicDamage>@SpellDamage@</magicDamage> %i:scaleHealth% magic damage (<scaleAP>@TooltipModifiedFractionMaxHealth@</scaleAP>  maximum Health). She quickly strikes again, repeating the damage on her target and the enemy directly behind it and stunning them for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Sejuani/HUD/Icons2D/Sejuani_W.dds`,
		name: `Warrior's Wrath`,
		variables: {
			'FractionMaxHealth': [0.05999999865889549, 0.05999999865889549, 0.05999999865889549, 0.05999999865889549],
			'StunDuration': [0, 1.5, 1.75, 2],
			'GuildBonus': [100, 100, 100, 100],
		},
	},
	'TFT7_Senna': {
		desc: `Senna launches black mist toward the farthest enemy, striking the first enemy hit and dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAttackDamage@% Attack Damage %i:scaleAD%) on a small area and an additional @ModifiedBonusDamage@ magic damage to the target hit.`,
		icon: `ASSETS/Characters/Senna/HUD/Icons2D/Senna_W.dds`,
		name: `Last Embrace`,
		variables: {
			'BonusMagicDamage': [0, 300, 500, 700],
			'PercentAttackDamage': [0, 200, 200, 200],
		},
	},
	'TFT7_Sett': {
		desc: `For the next @Duration@ seconds, Sett gains @ModifiedResistAmount@ Armor and Magic Resist, and every other punch deals <scaleAD>@TotalBonusDamage@</scaleAD> bonus physical damage (@ADRatio*100@% Attack Damage %i:scaleAD%).`,
		icon: `ASSETS/Characters/Sett/HUD/Icons2D/Sett_Q.dds`,
		name: `Knuckle Down`,
		variables: {
			'BaseResistAmount': [15, 50, 60, 80],
			'ADRatio': [0, 1.600000023841858, 1.600000023841858, 1.600000023841858],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT7_Shen': {
		desc: `Shen creates a zone around himself for @ZoneDuration@ seconds, in which all nearby allies dodge physical damage. While it's active, Shen gains @ModifiedMR@ Magic Resist.`,
		icon: `ASSETS/Characters/Shen/HUD/Icons2D/Shen_W.dds`,
		name: `Flame's Refuge`,
		variables: {
			'ZoneDuration': [2, 2.5, 3, 4],
			'IfZoneDurChangesCheckLUA': [],
			'MagicResist': [0, 50, 75, 100],
		},
	},
	'TFT7_DragonGreen': {
		desc: `Shi Oh Yu enters Jade stance, gaining @ModifiedDamageReduction@ damage reduction, immunity to crowd control, and empowering her next 3 attacks with special effects that deal @TotalDamage@ damage (@PercentAttackDamage@% Attack Damage %i:scaleAD%).<br><br>Attack 1: Deals <scaleAD>@TotalDamage@</scaleAD> physical damage and knocks the target into the air for @Stun@ seconds.<br>Attack 2: Deals <trueDamage>@TotalDamage@</trueDamage> true damage.<br>Attack 3: Ends the stance, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage to all enemies in a line and knocking them up for @Stun@ seconds.`,
		icon: `ASSETS/Characters/Karma/HUD/Icons2D/Karma_Passive.dds`,
		name: `Jade Form`,
		variables: {
			'DamageReduction': [0.20000000298023224, 0.15000000596046448, 0.20000000298023224, 0.5],
			'Stun': [1.25, 1.25, 1.25, 1.25],
			'PercentAttackDamage': [0, 250, 275, 1000],
		},
	},
	'TFT7_Shyvana': {
		desc: `Shyvana transforms into Dragon Form for the rest of combat, replacing her ability with Flame Breath. She then becomes untargetable before dive-bombing the largest group of enemies, dealing @ModifiedInitialDamage@ magic damage and stunning them for @StunDuration@ seconds. After landing, Shyvana casts Flame Breath again immediately.<br><br>Flame Breath: Shyvana breathes fire in a cone, dealing up to @ModifiedFlameBreathDamage@ magic damage. While breathing fire, Shyvana is always enraged.`,
		icon: `ASSETS/Characters/Shyvana/HUD/Icons2D/ShyvanaDragonsDescent.dds`,
		name: `Dragon's Descent`,
		variables: {
			'InitialDamage': [0, 100, 175, 500],
			'PercentMaxHealth': [0, 60, 75, 999],
			'StunDuration': [0, 1.5, 1.5, 1.5],
			'LingerDuration': [0, 1.5, 1.5, 1.5],
			'FlameBreathDuration': [3.75, 3.75, 3.75, 3.75],
			'FlameBreathDamage': [1500, 1050, 1650, 30000],
		},
	},
	'TFT7_Skarner': {
		desc: `Skarner shields himself for @ModifiedShield@ for @Duration@ seconds, and gains @AttackSpeed*100@% Attack Speed while it holds.`,
		icon: `ASSETS/Characters/Skarner/HUD/Icons2D/Skarner_W.dds`,
		name: `Crystalline Exoskeleton`,
		variables: {
			'ShieldAmount': [225, 300, 360, 420],
			'Duration': [8, 8, 8, 8],
			'AttackSpeed': [1.399999976158142, 1.600000023841858, 1.7999999523162842, 2],
		},
	},
	'TFT7_Sona': {
		desc: `Sona plays her ultimate chord toward the farthest enemy, dealing @ModifiedDamage@ magic damage to enemies and stunning them for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Sona/HUD/Icons2D/Sona_R.dds`,
		name: `Crescendo`,
		variables: {
			'MagicDamage': [0, 250, 375, 1000],
			'StunDuration': [0, 1, 1, 4],
		},
	},
	'TFT7_Soraka': {
		desc: `Passive: While any ally is below @HealthThreshold@% Health, Soraka gains an additional @ManaPerAttack@ mana per attack. <br><br>Active: Soraka calls down a shower of stars over the next @Duration@ seconds. Allies are healed for @ModifiedHealing@ each time a star hits them.`,
		icon: `ASSETS/Characters/Soraka/HUD/Icons2D/Soraka_R.dds`,
		name: `Starfall`,
		variables: {
			'Healing': [0, 120, 180, 1000],
			'Stars': [14, 14, 14, 14],
			'Duration': [2, 2, 2, 2],
			'ManaPerAttack': [15, 15, 15, 15],
			'HealthThreshold': [50, 50, 50, 50],
		},
	},
	'TFT7_Swain': {
		desc: `Swain transforms into Dragon Form, replacing his attacks with fireballs that deal @ModifiedFireballDamage@ magic damage and replacing his Ability with Greater Fireball.<br><br>Greater Fireball: Swain's next fireball deals @PercentBonusDamage@% more damage and explodes in an area around his target.`,
		icon: `ASSETS/Characters/Swain/HUD/Icons2D/Swain_R.dds`,
		name: `Draconic Ascension`,
		variables: {
			'FireballDamage': [0, 65, 105, 165],
			'PercentBonusDamage': [0, 100, 100, 100],
		},
	},
	'TFT7_DragonPurple': {
		desc: `Sy'fen charges toward the farthest enemy within @ChargeDistance@ hexes, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% of Attack Damage %i:scaleAD%) and knocking up enemies he passes through.<br><br>After charging, Sy'fen bites an enemy, dealing <scaleAD>@TotalBiteDamage@</scaleAD> physical damage (@BiteADRatio*100@% Attack Damage %i:scaleAD%) and ignoring @ModifiedArmorPenPercent@% of the target's Armor. This bite cannot be dodged.`,
		icon: `ASSETS/Characters/TFT7_DragonPurple/HUD/Icons2D/TFT7_DragonPurple_Ability.TFT_Set7.dds`,
		name: `Rampage`,
		variables: {
			'ADRatio': [0, 1.5, 1.7000000476837158, 4.5],
			'BiteADRatio': [0, 5, 6, 30],
			'ArmorPenPercent': [0, 50, 50, 50],
			'ChargeDistance': [2.5, 2.5, 2.5, 2.5],
		},
	},
	'TFT7_Sylas': {
		desc: `Sylas whirls his chains, dealing @ModifiedDamage@ magic damage to enemies hit and shielding himself for @ModifiedShield@ for @ShieldDuration@ seconds. If Sylas has already shielded himself, he hits in a larger area and applies Mana-Reave to enemies hit, increasing the cost of their next ability by 35%.`,
		icon: `ASSETS/Characters/Sylas/HUD/Icons2D/SylasP.dds`,
		name: `Petricite Burst`,
		variables: {
			'Damage': [0, 110, 170, 240],
			'Shield': [0, 365, 415, 475],
			'ShieldDuration': [0, 6, 6, 6],
		},
	},
	'TFT7_TahmKench': {
		desc: `Tahm Kench shields himself for @ModifiedShield@ + @ShieldHealthRatio*100@% maximum Health for @ShieldDuration@ seconds. The next @NumAttacks@ enemy attacks he receives during this duration deal @ModifiedDamage@ magic damage to the attacker.`,
		icon: `ASSETS/Characters/TahmKench/HUD/Icons2D/TahmKenchE.dds`,
		name: `Thicker Skin`,
		variables: {
			'BaseShield': [0, 240, 250, 275],
			'MagicDamage': [0, 75, 100, 125],
			'ShieldDuration': [6, 6, 6, 6],
			'ShieldHealthRatio': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'NumAttacks': [3, 3, 3, 3],
		},
	},
	'TFT7_Talon': {
		desc: `Talon stealths for @StealthDuration@ seconds and flings out a ring of blades, dealing <scaleAD>@SecondaryTotalDamage@</scaleAD> physical damage (@SecondaryRatio*100@% Attack Damage %i:scaleAD%) to enemies hit. He then leaps to the farthest enemy within 4 hexes and recalls the blades, dealing that damage again and dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% Attack Damage %i:scaleAD% + @ModifiedBaseDamage@) to his target.`,
		icon: `ASSETS/Characters/Talon/HUD/Icons2D/TalonQ.dds`,
		name: `Shadow Assault`,
		variables: {
			'StealthDuration': [1.5, 1.5, 1.5, 1.5],
			'BaseDamage': [0, 120, 200, 1200],
			'ADRatio': [3.25, 3.25, 3.25, 3.25],
			'SecondaryRatio': [0.5, 0.75, 1, 3],
			'DashHexRange': [4, 4, 4, 4],
			'GuildBonus': [10, 10, 10, 10],
			'NumBlades': [12, 12, 12, 12],
			'RingOffsetDistance': [550, 550, 550, 550],
		},
	},
	'TFT_TrainingDummy': {
		desc: `The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.`,
		icon: `ASSETS/Characters/TFTDebug_Dummy/HUD/Icons2D/TFTDebug_Dummy_DoNothing.dds`,
		name: `On Duty!`,
		variables: {},
	},
	'TFT7_Taric': {
		desc: `Taric grants himself and his closest ally a protective rune that increases Armor by @ModifiedArmor@ for @Duration@ seconds.`,
		icon: `ASSETS/Characters/Taric/HUD/Icons2D/Taric_W2.dds`,
		name: `Bastion`,
		variables: {
			'Armor': [0, 30, 60, 120],
			'Duration': [6, 6, 6, 6],
		},
	},
	'TFT6_TheGoldenEgg': {
		desc: `This egg will soon hatch into tons of loot! Victorious player combats accelerate the hatch timer by an additional turn.`,
		icon: `ASSETS/Characters/TFT6_TheGoldenEgg/HUD/TFT6_TheGoldenEgg_Square.TFT_Set6_Stage2.dds`,
		name: `Hatching`,
		variables: {
			'EggTurns': [10, 10, 10, 10],
		},
	},
	'TFT7_Thresh': {
		desc: `Thresh hooks the farthest enemy, dealing @ModifiedDamage@ magic damage, stunning them for @PullDuration@ seconds and pulling them towards himself over the duration.`,
		icon: `ASSETS/Characters/Thresh/HUD/Icons2D/Thresh_Q.dds`,
		name: `Death Sentence`,
		variables: {
			'Damage': [0, 250, 400, 800],
			'PullDuration': [2, 2, 2, 2],
		},
	},
	'TFT7_Tristana': {
		desc: `Tristana fires up to @NumOfCharges@ explosive charges, prioritizing the closest targets without a charge. Charges detonate after @Duration@ seconds, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAD*100@% Attack Damage %i:scaleAD%) to nearby enemies and an additional @ModifiedDamage@ magic damage to the target.`,
		icon: `ASSETS/Characters/Tristana/HUD/Icons2D/Tristana_E.dds`,
		name: `Explosive Charge`,
		variables: {
			'Damage': [0, 130, 160, 200],
			'NumOfCharges': [2, 2, 2, 2],
			'HexRadius': [1, 1, 1, 1],
			'Duration': [1, 1, 1, 1],
			'PercentAD': [1.600000023841858, 1.399999976158142, 1.7000000476837158, 2.0999999046325684],
		},
	},
	'TFT7_Twitch': {
		desc: `Twitch hurls an exploding flask at his target, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% Attack Damage %i:scaleAD% + @ModifiedBaseDamage@) in an area and reducing the Armor of enemies hit by @TooltipShredMult*100@% for @ShredDuration@ seconds.`,
		icon: `ASSETS/Characters/Twitch/HUD/Icons2D/Twitch_W.dds`,
		name: `Blast Potion`,
		variables: {
			'BaseDamage': [0, 40, 80, 150],
			'ADRatio': [1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158],
			'TooltipShredMult': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'ShredDuration': [5, 5, 5, 5],
			'GuildBonus': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		},
	},
	'TFT7_Varus': {
		desc: `Varus sends out a cosmic tendril towards his target that strikes the first enemy hit, dealing <scaleAD>@TooltipDamage@</scaleAD> physical damage (@ADPercent@% Attack Damage %i:scaleAD%) and stunning them for @StunDuration@ seconds. Tendrils then spread to @SpreadCount@ nearby enemies, dealing @ModifiedMagicDamage@ magic damage and stunning them for the same duration.`,
		icon: `ASSETS/Characters/Varus/HUD/Icons2D/VarusR.dds`,
		name: `Chain of Constellations`,
		variables: {
			'ADPercent': [0, 250, 250, 250],
			'StunDuration': [0, 1.5, 1.75, 2],
			'SpreadCount': [3, 3, 3, 3],
			'MagicDamage': [0, 100, 180, 300],
		},
	},
	'TFT7_Vladimir': {
		desc: `Vladimir deals @ModifiedDamage@ magic damage to the target and heals for @ModifiedHeal@ Health.`,
		icon: `ASSETS/Characters/Vladimir/HUD/Icons2D/VladimirQ.dds`,
		name: `Transfusion`,
		variables: {
			'Damage': [75, 275, 325, 375],
			'Heal': [0, 270, 300, 330],
		},
	},
	'TFT_VoidSpawn': {
		desc: `The Voidspawn gains bonus Health and Attack Damage based on the current Stage. `,
		icon: `ASSETS/Characters/TFT_VoidSpawn/HUD/Voidspawn_square.dds`,
		name: `Voidborn`,
		variables: {},
	},
	'TFT7_Volibear': {
		desc: `Volibear rages, gaining @ModifiedBonusHealth@ bonus Health. For the rest of combat, every @NumAttacks@rd attack deals @ModifiedDamagePerTarget@ magic bonus magic damage to the target, and @ModifiedDamagePerTarget@ magic damage to up to @NumTargets@ additional enemies.`,
		icon: `ASSETS/Characters/Volibear/HUD/Icons2D/Volibear_Icon_P.dds`,
		name: `Relentless Storm`,
		variables: {
			'BonusHealth': [0, 375, 650, 1200],
			'NumTargets': [0, 4, 4, 4],
			'DamagePerTarget': [0, 110, 160, 225],
			'NumAttacks': [3, 3, 3, 3],
		},
	},
	'TFT7_Xayah': {
		desc: `For @Duration@ seconds, whenever Xayah attacks she fires a feather behind her target and @NumBonusAttacks@ nearby enemies.<br><br>At the end of this duration Xayah recalls her feathers, dealing <scaleAD>@ModifiedPullbackDamagePerFeather@</scaleAD> physical damage (@RecallAD*100@% Attack Damage %i:scaleAD% + @TooltipRecallAP@) per feather to enemies struck.`,
		icon: `ASSETS/Characters/Xayah/HUD/Icons2D/XayahW.dds`,
		name: `Feathers FLY!`,
		variables: {
			'NumBonusAttacks': [0, 2, 2, 4],
			'PullbackDamagePerFeather': [0, 15, 20, 60],
			'RecallAD': [0.18000000715255737, 0.18000000715255737, 0.18000000715255737, 0.18000000715255737],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT7_Yasuo': {
		desc: `Yasuo shields himself for @ModifiedShieldAmount@ for @ShieldDuration@ second and dashes through his target, slashing nearby enemies for <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAttackDamage@% Attack Damage %i:scaleAD%).<br><br>Every third cast his slash deals @EmpoweredDamagePct@% damage, hits a larger area, and knocks up enemies for @StunDuration@ seconds. If Yasuo hits only the last enemy left alive, he repeatedly slashes them until they die.`,
		icon: `ASSETS/Characters/Yasuo/HUD/Icons2D/Yasuo_E.dds`,
		name: `Sweeping Blade`,
		variables: {
			'ShieldAmount': [0, 180, 240, 2500],
			'ShieldDuration': [0, 2, 2, 20],
			'PercentAttackDamage': [0, 150, 180, 3000],
			'StunDuration': [0, 1.5, 1.5, 1.5],
			'EmpoweredDamagePct': [0, 250, 250, 250],
		},
	},
	'TFT7_Yone': {
		desc: `Passive: Yone's attacks alternate between dealing @ModifiedBonusDamage@ bonus magic damage and dealing <scaleAD>@BonusPhysicalDamage@</scaleAD> bonus physical damage (@PercentAD*100@% Attack Damage %i:scaleAD%).`,
		icon: `ASSETS/Characters/Yone/HUD/Icons2D/YonePassive.dds`,
		name: `Way of the Hunter`,
		variables: {
			'BonusDamage': [0, 90, 140, 215],
			'PercentAD': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
		},
	},
	'TFT7_IvernMinion': {
		desc: `Daisy smashes the ground around her target, dealing @ModifiedDamage@ magic damage.`,
		icon: `ASSETS/Characters/IvernMinion/HUD/Daisy_Sq.dds`,
		name: `Smash`,
		variables: {
			'Damage': [250, 750, 1500, 10000],
		},
	},
	'TFT7_Zoe': {
		desc: `Zoe nabs a spell from another dimension and casts it as if it were her own.`,
		icon: `ASSETS/Characters/Zoe/HUD/Icons2D/Zoe_W.dds`,
		name: `Spell Thief`,
		variables: {
			'BaseDamage': [],
		},
	},
}
