import type { AbilityData, ChampionData } from '../index'

export enum ChampionKey { AoShin = `TFT7_AoShin`, Aphelios = `TFT7_Aphelios`, AurelionSol = `TFT7_AurelionSol`, Bard = `TFT7_Bard`, Braum = `TFT7_Braum`, DragonBlue = `TFT7_DragonBlue`, Diana = `TFT7_Diana`, Ezreal = `TFT7_Ezreal`, Gnar = `TFT7_Gnar`, Graves = `TFT7_Graves`, Hecarim = `TFT7_Hecarim`, Heimerdinger = `TFT7b_Heimerdinger`, DragonGold = `TFT7_DragonGold`, JadeStatue = `TFT7_JadeStatue`, Jax = `TFT7_Jax`, Jayce = `TFT7_Jayce`, Kaisa = `TFT7_Kaisa`, Karma = `TFT7_Karma`, LeeSin = `TFT7_LeeSin`, Leona = `TFT7_Leona`, Lillia = `TFT7_Lillia`, Lulu = `TFT7b_Lulu`, Lux = `TFT7_Lux`, Malphite = `TFT7_Malphite`, Nasus = `TFT7_Nasus`, Nidalee = `TFT7_Nidalee`, Nilah = `TFT7_Nilah`, Nomsy = `TFT7_Nomsy`, NomsyCannoneer = `TFT7_NomsyCannoneer`, NomsyEvoker = `TFT7_NomsyEvoker`, NomsyMage = `TFT7_NomsyMage`, Nunu = `TFT7_Nunu`, Olaf = `TFT7_Olaf`, Pantheon = `TFT7_Pantheon`, Qiyana = `TFT7_Qiyana`, Rakan = `TFT7_Rakan`, Rell = `TFT7_Rell`, Rengar = `TFT7_Rengar`, LagoonRelic = `TFT7_LagoonRelic`, Sejuani = `TFT7_Sejuani`, Senna = `TFT7_Senna`, Seraphine = `TFT7_Seraphine`, Sett = `TFT7_Sett`, DragonGreen = `TFT7_DragonGreen`, Shyvana = `TFT7_Shyvana`, Skarner = `TFT7_Skarner`, AquaticDragon = `TFT7_AquaticDragon`, Soraka = `TFT7_Soraka`, DragonPurple = `TFT7_DragonPurple`, Sylas = `TFT7_Sylas`, Taliyah = `TFT7_Taliyah`, TrainingDummy = `TFT_TrainingDummy`, DragonEarth = `TFT7_DragonEarth`, Tristana = `TFT7b_Tristana`, Twitch = `TFT7_Twitch`, DragonSwain = `TFT7_DragonSwain`, Varus = `TFT7_Varus`, Vladimir = `TFT7_Vladimir`, Voidspawn = `TFT_Voidspawn`, Volibear = `TFT7b_Volibear`, Wukong = `TFT7_Wukong`, Xayah = `TFT7_Xayah`, Yasuo = `TFT7_Yasuo`, Yone = `TFT7_Yone`, Zac = `TFT7_Zac`, Zeri = `TFT7_Zeri`, DragonGuild = `TFT7_DragonGuild`, Zoe = `TFT7_Zoe`, IvernMinion = `TFT7_IvernMinion`, Zyra = `TFT7_Zyra` }

export const champions: ChampionData[] = [
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
			armor: 35,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 800,
			initialMana: 0,
			magicResist: 35,
			mana: 190,
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
					'Damage': [0, 185, 275, 2000],
					'NumStrikes': [0, 20, 20, 100],
					'ManaDrain': [0, 10, 10, 10],
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
		apiName: `TFT7_Aphelios`,
		name: `Aphelios`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Aphelios.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Darkflight`, `Cannoneer`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 500,
			initialMana: 80,
			magicResist: 20,
			mana: 175,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ApheliosInfernumQ`,
				castTime: 0.009999999776482582,
				missile: undefined,
				variables: {
					'BoltNumber': [1, 5, 5, 7],
					'BoltTravelDistance': [1200, 1200, 1200, 1200],
					'BoltAngle': [8.5, 8.5, 8.5, 8.5],
					'StunDuration': [1, 1.25, 1.5, 1.75],
					'PercentAD': [2.5, 3.25, 3.5, 4],
					'ShotgunDamageFalloff': [1, 1, 1, 1],
				},
				calculations: {
					'{e42c86ed}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [2.5, 3.25, 3.5, 4],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{fa17feab}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{2d234db3}`,
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
				name: `TFT7_ApheliosW`,
				castTime: 0.009999999776482582,
				missile: undefined,
				variables: {
					'BonusAD': [0, 0.10000000149011612, 0.20000000298023224, 0.30000001192092896],
					'EmpoweredAttackNumber': [1, 1, 1, 1],
					'BoltNumber': [3, 4, 5, 6],
					'PercentAD': [0.25, 0.25, 0.25, 0.25],
					'BoltTravelDistance': [890, 890, 890, 890],
					'BoltAngle': [8, 10, 12, 14],
					'StunDuration': [0.75, 1, 1.25, 2],
					'StunDelay': [1.5, 1.5, 1.5, 1.5],
				},
				calculations: {
					'{1c794646}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [0.25, 0.25, 0.25, 0.25],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BoltDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{e53241a0}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `StunDuration`,
										starValues: [0.75, 1, 1.25, 2],
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: `{9ffd2e94}`,
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
				uninterruptable: true,
			},
			{
				name: `TFT7_ApheliosBasicAttackInfernum`,
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
			{
				name: `TFT7_ApheliosInfernumSplitMis`,
				castTime: undefined,
				missile: {
					width: 30,
					travelTime: undefined,
					speedInitial: 2200,
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
				name: `TFT7_ApheliosCritAttack`,
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
			{
				name: `TFT7_ApheliosCannonSplitBuff`,
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
			{
				name: `TFT7_ApheliosBasicAttack2`,
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
		apiName: `TFT7_AurelionSol`,
		name: `Aurelion Sol`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_AurelionSol.TFT_Set7.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Astral`, `Evoker`, `Dragon`],
		stats: {
			armor: 35,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 800,
			initialMana: 0,
			magicResist: 35,
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
					'SpellDamage': [0, 370, 600, 4000],
					'DebuffPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'DebuffDuration': [10, 10, 10, 10],
					'AscendTimer': [18, 18, 18, 18],
					'AscendDamageIncrease': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
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
										starValues: [0, 370, 600, 4000],
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
			critMultiplier: 1.2999999523162842,
			damage: 85,
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
					'ShieldDR': [0.699999988079071, 0.699999988079071, 0.75, 0.8500000238418579],
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
										starValues: [0.699999988079071, 0.699999988079071, 0.75, 0.8500000238418579],
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
			hp: 800,
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
					'PassiveDamage': [0, 25, 40, 150],
					'MRReduction': [0, 5, 5, 5],
					'BlastDamage': [0, 250, 335, 1350],
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
										starValues: [0, 25, 40, 150],
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
										starValues: [0, 250, 335, 1350],
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
			damage: 55,
			hp: 700,
			initialMana: 30,
			magicResist: 35,
			mana: 90,
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
			attackSpeed: 0.699999988079071,
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
					'MagicDamage': [70, 200, 275, 415],
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
										starValues: [70, 200, 275, 415],
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
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 750,
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
				'AttackDamage': [0, 60, 90, 150],
				'Armor': [0, 40, 60, 90],
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
									starValues: [0, 60, 90, 150],
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
									starValues: [0, 40, 60, 90],
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
		apiName: `TFT7_Graves`,
		name: `Graves`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Graves.TFT_Set7_Stage2.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Cannoneer`],
		stats: {
			armor: 30,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 65,
			hp: 800,
			initialMana: 0,
			magicResist: 30,
			mana: 40,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 3000,
		critAttackMissileSpeed: 3000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_GravesE`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [0, 65, 65, 145],
					'Resists': [0, 30, 40, 80],
					'ResistDuration': [0, 4, 4, 4],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0, 65, 65, 145],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{e3d4b5e1}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Resists`,
										starValues: [0, 30, 40, 80],
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
				name: `TFT7_GravesCannonball`,
				castTime: undefined,
				missile: {
					width: 30,
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
			{
				name: `TFT7_GravesPMissile`,
				castTime: undefined,
				missile: {
					width: 30,
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
			hp: 1000,
			initialMana: 30,
			magicResist: 60,
			mana: 90,
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
					'Damage': [0, 200, 300, 1500],
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
										starValues: [0, 200, 300, 1500],
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
		apiName: `TFT7b_Heimerdinger`,
		name: `Heimerdinger`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7b_Heimerdinger.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Mage`],
		stats: {
			armor: 25,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 600,
			initialMana: 50,
			magicResist: 25,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT7b_HeimerdingerE`,
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
					'MagicDamage': [0, 225, 325, 475],
					'StunDuration': [0, 0.5, 0.5, 0.5],
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
										starValues: [0, 225, 325, 475],
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
				name: `TFT7b_HeimerdingerEBounce`,
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
			damage: 90,
			hp: 950,
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
					'DamageReduction': [0, 30, 50, 300],
					'Heal': [0, 450, 600, 3000],
					'ASBonusBase': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'RoarDuration': [5, 5, 5, 5],
					'ShieldValue': [0, 150, 250, 1200],
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
										starValues: [0, 150, 250, 1200],
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
		apiName: `TFT7_Jax`,
		name: `Jax`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Jax.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Shimmerscale`, `Bruiser`],
		stats: {
			armor: 45,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 750,
			initialMana: 70,
			magicResist: 45,
			mana: 140,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 400,
		critAttackMissileSpeed: 400,
		passive: undefined,
		spells: [
			{
				name: `TFT7_JaxE`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1450,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Duration': [2, 2, 2, 2],
					'Damage': [50, 225, 350, 750],
					'AttackRadius': [1, 1, 1, 1],
					'StunDuration': [0.75, 1, 1.25, 1.5],
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
										starValues: [50, 225, 350, 750],
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
		apiName: `TFT7_Jayce`,
		name: `Jayce`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Jayce.TFT_Set7_Stage2.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Guild`, `Shapeshifter`],
		stats: {
			armor: 25,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 900,
			initialMana: 20,
			magicResist: 25,
			mana: 80,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_JayceQ`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BaseHeal': [200, 100, 150, 500],
					'BonusHealRatio': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'StunDuration': [1.25, 1.25, 1.25, 1.25],
					'BaseMagicDamage': [0, 300, 400, 1500],
					'BaseSecondMagicDamage': [150, 225, 275, 1200],
					'BaseSmiteDamage': [450, 400, 550, 2000],
					'Resists': [40, 40, 40, 40],
				},
				calculations: {
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseHeal`,
										starValues: [200, 100, 150, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{dcbfcee8}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{e5060fae}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{e3840ec3}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{04d11775}`,
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
										variable: `{5b68a63a}`,
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
				name: `TFT7_JayceCritAttack`,
				castTime: 0.10670000314712524,
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
			{
				name: `TFT7_JayceQTransformed`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_JayceBasicAttackRanged`,
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
		apiName: `TFT7_Kaisa`,
		name: `Kai'Sa`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Kaisa.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Dragonmancer`],
		stats: {
			armor: 25,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 35,
			hp: 550,
			initialMana: 0,
			magicResist: 25,
			mana: 45,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_KaisaQ`,
				castTime: 1,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2500,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'NumMissiles': [4, 4, 4, 4],
					'Damage': [50, 40, 55, 85],
					'MissileCap': [12, 12, 12, 12],
					'PerMissileDelay': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'PerCastMissile': [2, 2, 2, 2],
					'PercentBonusDamage': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'SecondaryTargetCap': [2, 2, 2, 2],
					'SpellRange': [4, 4, 4, 4],
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
										starValues: [50, 40, 55, 85],
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
										variable: `Damage`,
										starValues: [50, 40, 55, 85],
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
				name: `TFT7_KaisaQRightMissile1_Empowered`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQLeftMissile1_Empowered`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQLeftMissile3_Empowered`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQRightMissile2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQRightMissile3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQRightMissile1`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQLeftMissile3`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQLeftMissile2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQLeftMissile1`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQLeftMissile2_Empowered`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQRightMissile2_Empowered`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
				name: `TFT7_KaisaQRightMissile3_Empowered`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
					'MagicDamage': [0, 200, 265, 380],
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
										starValues: [0, 200, 265, 380],
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
		apiName: `TFT7_LeeSin`,
		name: `Lee Sin`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_LeeSin.TFT_Set7.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Dragonmancer`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 800,
			initialMana: 30,
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
				name: `TFT7_LeeSinR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StunDuration': [0, 1.25, 1.25, 1.25],
					'MagicDamage': [0, 215, 285, 385],
					'DragonmancerASPercent': [0, 50, 50, 50],
					'DragonmancerASDuration': [0, 5, 5, 5],
					'ShredDuration': [5, 5, 5, 5],
					'TooltipMRShred': [40, 40, 40, 40],
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
										starValues: [0, 215, 285, 385],
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
			damage: 75,
			hp: 650,
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
					'FlatDamageReduction': [0, 35, 45, 70],
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
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 750,
			initialMana: 0,
			magicResist: 50,
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
					'MagicDamage': [0, 215, 275, 370],
					'CenterBonusMagicDamage': [0, 190, 240, 340],
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
										starValues: [0, 215, 275, 370],
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
		apiName: `TFT7b_Lulu`,
		name: `Lulu`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7b_Lulu.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Evoker`],
		stats: {
			armor: 25,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 600,
			initialMana: 50,
			magicResist: 25,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1450,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT7b_LuluW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumTargets': [2, 3, 3, 3],
					'AttackSpeedPercent': [8, 0.4000000059604645, 0.5, 0.699999988079071],
					'AllyBuffDuration': [0, 5, 5, 5],
					'PolymorphDuration': [0, 1, 1, 1],
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
				name: `TFT7b_LuluDummyMissile`,
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
		apiName: `TFT7_Lux`,
		name: `Lux`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Lux.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Astral`, `Mage`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 30,
			hp: 600,
			initialMana: 0,
			magicResist: 20,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT7_LuxQ`,
				castTime: undefined,
				missile: {
					width: 110,
					travelTime: undefined,
					speedInitial: 1850,
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
							__type: `{e357c116}`,
						},
						{
							__type: `DestroyOnHit`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1600,
				},
				variables: {
					'BaseDamage': [0, 325, 410, 525],
					'LesserDamage': [0, 175, 210, 240],
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
										starValues: [0, 325, 410, 525],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{ecc821ed}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{acd0b85e}`,
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
				name: `TFT7_LuxQ_mis2`,
				castTime: undefined,
				missile: {
					width: 100,
					travelTime: undefined,
					speedInitial: 1850,
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
							__type: `{e357c116}`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
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
		apiName: `TFT7_Malphite`,
		name: `Malphite`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Malphite.TFT_Set7_Stage2.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Bruiser`],
		stats: {
			armor: 40,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 80,
			hp: 700,
			initialMana: 90,
			magicResist: 40,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: {
			name: `TFT7_MalphiteP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'ShieldPercentHealth': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
				'ShieldDuration': [5, 5, 5, 5],
				'ShieldBase': [150, 200, 250, 325],
			},
			calculations: {
				'{fea1e20f}': {
					asPercent: false,
					parts: [
						{
							operator: `scale`,
							subparts: [
								{
									variable: `ShieldBase`,
									starValues: [150, 200, 250, 325],
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
									variable: `ShieldBase`,
									starValues: [150, 200, 250, 325],
									stat: `AP`,
									ratio: 0.009999999776482582,
								},
								{
									variable: `{73a7fbf3}`,
									starValues: undefined,
									stat: `HP`,
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
		spells: [],
		missiles: [],
	},
	{
		apiName: `TFT7_Nasus`,
		name: `Nasus`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nasus.TFT_Set7_Stage2.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shimmerscale`, `Guardian`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 600,
			initialMana: 30,
			magicResist: 40,
			mana: 90,
			moveSpeed: 550,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NasusR`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 779.9000244140625,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'BonusHealth': [100, 225, 350, 650],
					'Damage': [30, 70, 100, 205],
					'Duration': [6, 6, 6, 6],
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
										starValues: [30, 70, 100, 205],
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
								operator: `scale`,
								subparts: [
									{
										variable: `BonusHealth`,
										starValues: [100, 225, 350, 650],
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
			damage: 60,
			hp: 600,
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
					'BaseAS': [0.4000000059604645, 0.4000000059604645, 0.44999998807907104, 0.5],
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
		apiName: `TFT7_Nilah`,
		name: `Nilah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nilah.TFT_Set7_Stage2.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Assassin`],
		stats: {
			armor: 45,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 70,
			hp: 800,
			initialMana: 0,
			magicResist: 45,
			mana: 50,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NilahR`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentShield': [0.6000000238418579, 0.800000011920929, 1, 3],
					'Damage': [0, 130, 200, 700],
					'ShieldStealDuration': [4, 4, 4, 4],
					'ADPercent': [0, 2, 2.25, 5],
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
										starValues: [0, 130, 200, 700],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `ADPercent`,
										starValues: [0, 2, 2.25, 5],
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
				name: `TFT7_NilahEmpAttack`,
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
			{
				name: `TFT7_NilahEmpAttack2`,
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
		apiName: `TFT7_Nomsy`,
		name: `Nomsy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nomsy.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 650,
			initialMana: 0,
			magicResist: 30,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NomsySpell`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: 0.75,
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
					'MagicDamage': [0, 190, 270, 420],
					'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0, 190, 270, 420],
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
				name: `TFT7_NomsySpellBounce`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.5,
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
			{
				name: `TFT7_NomsySpell`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: 0.75,
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
					'MagicDamage': [0, 190, 270, 420],
					'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0, 190, 270, 420],
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
		apiName: `TFT7_NomsyCannoneer`,
		name: `Nomsy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nomsy.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Prodigy`, `Dragon`, `Cannoneer`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 650,
			initialMana: 0,
			magicResist: 30,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NomsyCannoneerSpell`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: 0.75,
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
					'MagicDamage': [0, 190, 270, 420],
					'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0, 190, 270, 420],
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
				name: `TFT7_NomsyCannoneerSpellBounce`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.5,
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
		apiName: `TFT7_NomsyEvoker`,
		name: `Nomsy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nomsy.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Prodigy`, `Dragon`, `Evoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 650,
			initialMana: 0,
			magicResist: 30,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NomsyEvokerSpell`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: 0.75,
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
					'MagicDamage': [0, 190, 270, 420],
					'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0, 190, 270, 420],
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
				name: `TFT7_NomsyEvokerSpellBounce`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.5,
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
		apiName: `TFT7_NomsyMage`,
		name: `Nomsy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Nomsy.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Prodigy`, `Dragon`, `Mage`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 650,
			initialMana: 0,
			magicResist: 30,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_NomsyMageSpell`,
				castTime: undefined,
				missile: {
					width: 120,
					travelTime: 0.75,
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
					'MagicDamage': [0, 190, 270, 420],
					'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0, 190, 270, 420],
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
				name: `TFT7_NomsyMageSpellBounce`,
				castTime: 0.30000001192092896,
				missile: {
					width: 120,
					travelTime: 0.5,
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
			damage: 65,
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
					'Damage': [200, 375, 525, 925],
					'DamageAmp': [0.5, 0.5, 0.5, 0.5],
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
										starValues: [200, 375, 525, 925],
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
			initialMana: 30,
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
					'AttackDamageRatio': [0, 2.200000047683716, 2.299999952316284, 2.4000000953674316],
					'AttackSpeedRatio': [0.30000001192092896, 0.3499999940395355, 0.44999998807907104, 0.6000000238418579],
					'BuffDuration': [0, 6, 6, 6],
					'HealthPercentThreshold': [0, 50, 50, 50],
					'StackingAD': [4, 4, 4, 4],
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
		apiName: `TFT7_Pantheon`,
		name: `Pantheon`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Pantheon.TFT_Set7_Stage2.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Whispers`, `Warrior`],
		stats: {
			armor: 50,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 1000,
			initialMana: 30,
			magicResist: 50,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_PantheonE`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'DamageReductionPercent': [0, 0.20000000298023224, 0.25, 0.4000000059604645],
					'PercentAttackDamage': [3, 2.6500000953674316, 2.799999952316284, 3.799999952316284],
					'Duration': [0, 2, 2, 2],
					'HealingReduction': [0, 50, 50, 50],
					'HealingReductionDuration': [0, 3, 3, 3],
					'BonusAD': [50, 50, 50, 50],
					'BaseDamage': [0, 70, 110, 700],
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
										starValues: [3, 2.6500000953674316, 2.799999952316284, 3.799999952316284],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseDamage`,
										starValues: [0, 70, 110, 700],
										stat: `AP`,
										ratio: 0.009999999776482582,
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
										starValues: [0, 70, 110, 700],
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
		apiName: `TFT7_Qiyana`,
		name: `Qiyana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Qiyana.TFT_Set7.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Tempest`, `Assassin`],
		stats: {
			armor: 35,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 700,
			initialMana: 30,
			magicResist: 35,
			mana: 90,
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
					'BaseDamage': [50, 225, 300, 450],
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
										starValues: [50, 225, 300, 450],
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
		apiName: `TFT7_Rakan`,
		name: `Rakan`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Rakan.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ragewing`, `Guardian`, `Mystic`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 55,
			hp: 800,
			initialMana: 15,
			magicResist: 50,
			mana: 75,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_RakanW`,
				castTime: 0.5299999713897705,
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
					'Radius': [1, 1, 1, 1],
					'ShieldAmount': [0, 230, 350, 650],
					'DisarmDuration': [1.5, 1.5, 1.5, 1.5],
					'ShieldDuration': [4, 4, 4, 4],
					'BaseBonusShield': [50, 50, 70, 100],
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
										starValues: [0, 230, 350, 650],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{28509b80}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{6d2cf71e}`,
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
		apiName: `TFT7_Rell`,
		name: `Rell`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Rell.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Darkflight`, `Cavalier`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 700,
			initialMana: 0,
			magicResist: 45,
			mana: 70,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_RellE`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Resists': [30, 35, 40, 50],
					'Damage': [100, 160, 240, 440],
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
										starValues: [100, 160, 240, 440],
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
		apiName: `TFT7_Rengar`,
		name: `Rengar`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Rengar.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Darkflight`, `Assassin`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 70,
			hp: 700,
			initialMana: 70,
			magicResist: 30,
			mana: 140,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: undefined,
		passive: {
			name: `TFT7_RengarP`,
			castTime: 0.25,
			missile: undefined,
			variables: {
				'ADPercent': [2.450000047683716, 2.4000000953674316, 2.450000047683716, 2.75],
				'FlatDamage': [40, 60, 80, 100],
				'ASGain': [2, 2, 2, 2],
				'NumEmpoweredAttacks': [2, 2, 2, 2],
			},
			calculations: {
				'{eaae6e99}': {
					asPercent: false,
					parts: [
						{
							operator: `sum`,
							subparts: [
								{
									variable: `ADPercent`,
									starValues: [2.450000047683716, 2.4000000953674316, 2.450000047683716, 2.75],
									stat: `AD`,
									ratio: 1,
								},
								{
									variable: `FlatDamage`,
									starValues: [40, 60, 80, 100],
									stat: `AP`,
									ratio: 0.009999999776482582,
								},
							],
						},
					],
				},
				'{0c6d7d61}': {
					asPercent: true,
					parts: [
						{
							operator: `identity`,
							subparts: [
								{
									variable: `{4e129646}`,
									starValues: undefined,
									stat: undefined,
									ratio: undefined,
								},
							],
						},
					],
				},
				'{a1aa3ee9}': {
					asPercent: true,
					parts: [
						{
							operator: `identity`,
							subparts: [
								{
									variable: `{6047dc32}`,
									starValues: undefined,
									stat: undefined,
									ratio: undefined,
								},
							],
						},
					],
				},
				'{fda1f1fc}': {
					asPercent: false,
					parts: [
						{
							operator: `scale`,
							subparts: [
								{
									variable: `FlatDamage`,
									starValues: [40, 60, 80, 100],
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
		missiles: [
			{
				name: `TFT7_RengarCritAttack`,
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
		apiName: `TFT7_LagoonRelic`,
		name: `Seastone`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_WaterRelic.TFT_Set7_Stage2.dds`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 0,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 10,
			hp: 1,
			initialMana: 0,
			magicResist: 20,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT7_LagoonRelicQ`,
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
			initialMana: 25,
			magicResist: 40,
			mana: 75,
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
			initialMana: 15,
			magicResist: 15,
			mana: 75,
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
					'BonusMagicDamage': [0, 300, 450, 650],
					'PercentAttackDamage': [0, 200, 240, 300],
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
										starValues: [0, 200, 240, 300],
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
		apiName: `TFT7_Seraphine`,
		name: `Seraphine`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Seraphine.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Evoker`, `Mystic`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 750,
			initialMana: 100,
			magicResist: 30,
			mana: 175,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT7_SeraphineW`,
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
					'Shield': [300, 160, 220, 300],
					'Duration': [4, 4, 4, 4],
					'Hex': [2, 2, 2, 2],
					'AttackSpeed': [0.20000000298023224, 0.20000000298023224, 0.30000001192092896, 0.5],
					'ManaGain': [2, 5, 7, 10],
					'OnHit': [0, 20, 35, 65],
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
										starValues: [300, 160, 220, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{1fbe4bec}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{f13551e5}`,
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
			damage: 60,
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
					'ADRatio': [0, 1.5, 1.5499999523162842, 1.7000000476837158],
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
										starValues: [0, 1.5, 1.5499999523162842, 1.7000000476837158],
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
			damage: 75,
			hp: 850,
			initialMana: 30,
			magicResist: 60,
			mana: 100,
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
				'DamageReduction': [0.20000000298023224, 0.20000000298023224, 0.25, 0.4000000059604645],
				'Stun': [1, 1, 1, 1],
				'PercentAttackDamage': [0, 250, 300, 1000],
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
									starValues: [0.20000000298023224, 0.20000000298023224, 0.25, 0.4000000059604645],
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
									starValues: [0, 250, 300, 1000],
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
			damage: 120,
			hp: 900,
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
					'InitialDamage': [0, 80, 150, 1500],
					'PercentMaxHealth': [0, 60, 75, 999],
					'StunDuration': [0, 1.25, 1.25, 10],
					'LingerDuration': [0, 1.5, 1.5, 1.5],
					'FlameBreathDuration': [3.75, 3.75, 3.75, 3.75],
					'FlameBreathDamage': [1500, 700, 1200, 20000],
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
										starValues: [0, 80, 150, 1500],
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
			damage: 60,
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
					'ShieldAmount': [225, 300, 375, 450],
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
										starValues: [225, 300, 375, 450],
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
		apiName: `TFT7_AquaticDragon`,
		name: `Sohm`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Sohm.TFT_Set7_Stage2.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Lagoon`, `Mage`, `Dragon`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 30,
			hp: 800,
			initialMana: 0,
			magicResist: 30,
			mana: 40,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 4000,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_AquaticDragonQ`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: 0.4699999988079071,
					speedInitial: undefined,
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
					type: `FixedTimeSplineMovement`,
				},
				variables: {
					'BaseDamage': [100, 165, 225, 600],
					'NormalCastCount': [3, 3, 3, 3],
					'ReducedDamageRatio': [1, 1, 1, 1],
					'BaseExplodeDamage': [150, 285, 400, 1400],
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
										starValues: [100, 165, 225, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{ff590726}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{a188b398}`,
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
				name: `TFT7_AquaticDragonQMissile`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: 0.4699999988079071,
					speedInitial: 1700,
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
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT7_AquaticDragonCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 4000,
					speedMin: 1500,
					speedMax: 4000,
					acceleration: -15000,
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
					type: `AcceleratingMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_AquaticDragonQWaveMissile`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: undefined,
					speedInitial: 1500,
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
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2500,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT7_AquaticDragonQMissileEnemy`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: 0.5,
					speedInitial: 1700,
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
					type: `FixedTimeSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
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
					'Healing': [0, 105, 165, 1000],
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
										starValues: [0, 105, 165, 1000],
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
		apiName: `TFT7_DragonPurple`,
		name: `Sy'fen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_WhispersDragon.TFT_Set7.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Whispers`, `Bruiser`, `Dragon`],
		stats: {
			armor: 60,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 90,
			hp: 900,
			initialMana: 100,
			magicResist: 60,
			mana: 170,
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
					'ADRatio': [0, 1.5, 1.7000000476837158, 4.5],
					'BiteADRatio': [0, 4.5, 5.5, 25],
					'ArmorPenPercent': [0, 33, 33, 33],
					'ChargeDistance': [2.5, 2.5, 2.5, 2.5],
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
										starValues: [0, 1.5, 1.7000000476837158, 4.5],
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
			initialMana: 60,
			magicResist: 50,
			mana: 120,
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
				'Damage': [0, 140, 200, 320],
				'Shield': [0, 365, 415, 525],
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
									starValues: [0, 140, 200, 320],
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
									starValues: [0, 365, 415, 525],
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
		apiName: `TFT7_Taliyah`,
		name: `Taliyah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Taliyah.TFT_Set7_Stage2.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Mage`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 30,
			hp: 550,
			initialMana: 0,
			magicResist: 15,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2100,
		critAttackMissileSpeed: 2200,
		passive: undefined,
		spells: [
			{
				name: `TFT7_TaliyahQ`,
				castTime: 0.25,
				missile: {
					width: 60,
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
							__type: `DestroyOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'Damage': [80, 160, 240, 380],
				},
				calculations: {
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [80, 160, 240, 380],
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
				name: `TFT7_TaliyahQMIssile`,
				castTime: 0.25,
				missile: {
					width: 50,
					travelTime: undefined,
					speedInitial: 1750,
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
				variables: {
					'Damage': [80, 130, 190, 230],
				},
				calculations: {
					'MagicDamage': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [80, 130, 190, 230],
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
		apiName: `TFT7_DragonEarth`,
		name: `Terra`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_DragonEarth.TFT_Set7_Stage2.dds`,
		cost: 5,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Monolith`, `Dragon`],
		stats: {
			armor: 100,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 80,
			hp: 1050,
			initialMana: 30,
			magicResist: 100,
			mana: 70,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_DragonEarthSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ArmorAndMRPercent': [0, 150, 200, 2500],
					'AttackDamagePercent': [0, 200, 200, 200],
					'ResistBuff': [0, 130, 165, 4000],
					'ResistDuration': [0, 8, 8, 8],
				},
				calculations: {
					'{ba387fa9}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{33a7309a}`,
										starValues: undefined,
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
										variable: `{498753a7}`,
										starValues: undefined,
										stat: `Armor`,
										ratio: 1,
									},
									{
										variable: `{498753a7}`,
										starValues: undefined,
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: `{14f704f9}`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT7b_Tristana`,
		name: `Tristana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7b_Tristana.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Cannoneer`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 600,
			initialMana: 50,
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
				name: `TFT7b_TristanaE`,
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
					'NumOfCharges': [1, 1, 1, 1],
					'HexRadius': [1, 1, 1, 1],
					'Duration': [1, 1, 1, 1],
					'PercentAD': [1.2000000476837158, 1.399999976158142, 1.7000000476837158, 2.0999999046325684],
					'NomsyAttackDamage': [0, 50, 75, 120],
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
										starValues: [1.2000000476837158, 1.399999976158142, 1.7000000476837158, 2.0999999046325684],
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
				name: `TFT7b_TristanaEMissile`,
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
					'ADRatio': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
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
										starValues: [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
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
		apiName: `TFT7_DragonSwain`,
		name: `Tyrant Swain`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_DragonSwain.TFT_Set7_Stage2.dds`,
		cost: 4,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Darkflight`, `Dragon`],
		stats: {
			armor: 70,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 900,
			initialMana: 60,
			magicResist: 70,
			mana: 110,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT7_DragonSwainSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumDragonlings': [0, 8, 8, 8],
					'Damage': [0, 90, 130, 600],
					'HealPercent': [0, 12, 12, 12],
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
										starValues: [0, 90, 130, 600],
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
				name: `TFT7_DragonSwainSpellDmgMis6`,
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
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonSwainSpellDmgMis4`,
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
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonSwainSpellDmgMis5`,
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
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonSwainSpellDmgMis2`,
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
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonSwainSpellDmgMis3`,
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
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonSwainSpellDmgMis1`,
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
					type: `FixedSpeedSplineMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT7_DragonSwainSpellHealMis1`,
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
					'ADPercent': [0, 300, 300, 300],
					'StunDuration': [0, 1.5, 1.75, 2],
					'SpreadCount': [3, 3, 3, 3],
					'MagicDamage': [0, 150, 250, 400],
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
										starValues: [0, 300, 300, 300],
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
										starValues: [0, 150, 250, 400],
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
					'Heal': [0, 275, 325, 375],
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
										starValues: [0, 275, 325, 375],
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
		apiName: `TFT7b_Volibear`,
		name: `Volibear`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7b_Volibear.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shimmerscale`, `Dragonmancer`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 50,
			hp: 800,
			initialMana: 0,
			magicResist: 50,
			mana: 40,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 0,
		passive: {
			name: `TFT7b_VolibearP`,
			castTime: undefined,
			missile: undefined,
			variables: {
				'BonusHealth': [0, 400, 700, 1200],
				'NumTargets': [0, 4, 4, 4],
				'DamagePerTarget': [0, 130, 185, 250],
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
									starValues: [0, 400, 700, 1200],
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
		apiName: `TFT7_Wukong`,
		name: `Wukong`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Wukong.TFT_Set7_Stage2.dds`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Jade`, `Warrior`],
		stats: {
			armor: 45,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 65,
			hp: 650,
			initialMana: 0,
			magicResist: 45,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT7_WukongQ`,
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
					'PercentAD': [1.5, 1.850000023841858, 2, 2.5],
					'Duration': [1.5, 1, 1.25, 1.5],
					'BaseDamage': [25, 50, 75, 100],
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
										starValues: [25, 50, 75, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `PercentAD`,
										starValues: [1.5, 1.850000023841858, 2, 2.5],
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
										starValues: [25, 50, 75, 100],
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
			damage: 70,
			hp: 750,
			initialMana: 0,
			magicResist: 25,
			mana: 60,
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
					'NumBonusAttacks': [0, 2, 2, 4],
					'PullbackDamagePerFeather': [0, 13, 20, 75],
					'RecallAD': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.30000001192092896],
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
					travelTime: 0.20000000298023224,
					speedInitial: undefined,
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
					type: `FixedTimeMovement`,
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
					travelTime: 0.30000001192092896,
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
					'BonusDamage': [0, 85, 125, 180],
					'PercentAD': [0.33000001311302185, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0.33000001311302185, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
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
										starValues: [0, 85, 125, 180],
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
		apiName: `TFT7_Zac`,
		name: `Zac`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Zac.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Guardian`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 60,
			hp: 800,
			initialMana: 0,
			magicResist: 45,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ZacW`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'AoERadius': [2, 2, 2, 2],
					'PercentHealthDamage': [0, 0.10000000149011612, 0.11999999731779099, 0.18000000715255737],
					'Heal': [0, 220, 250, 300],
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
										starValues: [0, 220, 250, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{d8673fb0}': {
						asPercent: true,
						parts: [
							{
								operator: `identity`,
								subparts: [
									{
										variable: `PercentHealthDamage`,
										starValues: [0, 0.10000000149011612, 0.11999999731779099, 0.18000000715255737],
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
				name: `TFT7_ZacCritAttack`,
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
		apiName: `TFT7_Zeri`,
		name: `Zeri`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Zeri.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Lagoon`, `Cannoneer`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 65,
			hp: 600,
			initialMana: 20,
			magicResist: 20,
			mana: 70,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ZeriW`,
				castTime: undefined,
				missile: {
					width: 50,
					travelTime: undefined,
					speedInitial: 2200,
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
					'Damage': [200, 275, 375, 525],
					'StunDuration': [0.75, 0.75, 0.75, 0.75],
					'PercentAD': [1.2000000476837158, 1.100000023841858, 1.149999976158142, 1.2000000476837158],
					'RangeCheck': [3, 3, 3, 3],
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
										starValues: [200, 275, 375, 525],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{cefd4529}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [1.2000000476837158, 1.100000023841858, 1.149999976158142, 1.2000000476837158],
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
				name: `TFT7_ZeriCritAttack`,
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
					_missileSpeed: 347.79998779296875,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT7_DragonGuild`,
		name: `Zippy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Zippy.TFT_Set7_Stage2.dds`,
		cost: 3,
		starLevel: undefined,
		teamSize: 2,
		isSpawn: false,
		traits: [`Guild`, `Dragon`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 85,
			hp: 800,
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
				name: `TFT7_DragonGuildSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ShieldAmount': [0, 375, 450, 650],
					'AttackDamageRatio': [0, 4, 4.25, 6],
					'ShieldDuration': [0, 2, 2, 2],
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
					'ShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldAmount`,
										starValues: [0, 375, 450, 650],
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
			initialMana: 40,
			magicResist: 20,
			mana: 110,
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
					'ResistAmount': [0, 20, 40, 1000],
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
					'BuffDuration': [0, 5, 5, 30],
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
					'Damage': [250, 500, 1000, 10000],
				},
				calculations: {
					'{af204103}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [250, 500, 1000, 10000],
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
		apiName: `TFT7_Zyra`,
		name: `Zyra`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT7_Zyra.TFT_Set7_Stage2.dds`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Whispers`, `Evoker`],
		stats: {
			armor: 20,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.2999999523162842,
			damage: 40,
			hp: 600,
			initialMana: 50,
			magicResist: 20,
			mana: 125,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1700,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT7_ZyraQ`,
				castTime: 0.10000000149011612,
				missile: {
					width: 10,
					travelTime: 0.20000000298023224,
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
					'Damage': [0, 225, 325, 550],
					'StunDuration': [0.75, 1, 1.25, 1.5],
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
										starValues: [0, 225, 325, 550],
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
	'TFT7_AoShin': {
		desc: `Ao Shin fires a barrage of @NumStrikes@ lightning strikes at random enemies. Each strike deals @ModifiedDamage@ magic damage and reduces @ManaDrain@ current Mana from his target.`,
		icon: `ASSETS/Characters/TFT7_AoShin/HUD/Icons2D/TFT7_AoShin_Spell.TFT_Set7.dds`,
		name: `Lightning Rain`,
		variables: {
			'Damage': [0, 185, 275, 2000],
			'NumStrikes': [0, 20, 20, 100],
			'ManaDrain': [0, 10, 10, 10],
		},
	},
	'TFT7_Aphelios': {
		desc: `Aphelios fires @TotalBoltNumber@ bolts in a cone, each deaing <scaleAD>@ModifiedSpellDamage@</scaleAD> physical damage (@PercentAD*100@% Attack Damage %i:scaleAD%). Enemies can only take damage from one bolt. He then stuns all enemies hit for @StunDuration@ second.`,
		icon: `ASSETS/Characters/TFT7_Aphelios/HUD/Icons2D/Infernum_M.TFT_Set7_Stage2.dds`,
		name: `Binding Eclipse<br>`,
		variables: {
			'BoltNumber': [1, 5, 5, 7],
			'BoltTravelDistance': [1200, 1200, 1200, 1200],
			'BoltAngle': [8.5, 8.5, 8.5, 8.5],
			'StunDuration': [1, 1.25, 1.5, 1.75],
			'PercentAD': [2.5, 3.25, 3.5, 4],
			'ShotgunDamageFalloff': [1, 1, 1, 1],
		},
	},
	'TFT7_AurelionSol': {
		desc: `Aurelion Sol summons an unstable black hole underneath a random enemy. After 2 seconds it implodes, dealing @ModifiedSpellDamage@ magic damage to all enemies in the area and increasing their damage taken by @DebuffPercent*100@% for @DebuffDuration@ seconds.<br><br>Black holes generated after @AscendTimer@ seconds of combat are larger and deal @AscendDamageIncrease*100@% more damage.`,
		icon: `ASSETS/Characters/AurelionSol/HUD/Icons2D/AurelionSol_Q_Explode.dds`,
		name: `Black Hole`,
		variables: {
			'SpellDamage': [0, 370, 600, 4000],
			'DebuffPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'DebuffDuration': [10, 10, 10, 10],
			'AscendTimer': [18, 18, 18, 18],
			'AscendDamageIncrease': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
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
		desc: `Braum raises his shield towards the largest group of enemies for @ShieldDuration@ seconds, reducing his damage taken from that direction by @ModifiedShieldDR@. `,
		icon: `ASSETS/Characters/Braum/HUD/Icons2D/Braum_E.dds`,
		name: `Unbreakable`,
		variables: {
			'ShieldDR': [0.699999988079071, 0.699999988079071, 0.75, 0.8500000238418579],
			'ShieldDuration': [4, 4, 4, 4],
		},
	},
	'TFT7_DragonBlue': {
		desc: `Passive: Daeja's attacks launch three barrages that each deal @ModifiedPassiveDamage@ bonus magic damage and reduce the target's Magic Resist by @MRReduction@.<br><br>Active: Daeja sends a wind blast toward the most enemies in a line, dealing @ModifiedBlastDamage@ magic damage.`,
		icon: `ASSETS/Characters/Ezreal/HUD/Icons2D/Ezreal_MysticShot.dds`,
		name: `Windblast`,
		variables: {
			'PassiveDamage': [0, 25, 40, 150],
			'MRReduction': [0, 5, 5, 5],
			'BlastDamage': [0, 250, 335, 1350],
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
	'TFT7_Ezreal': {
		desc: `Ezreal fires an energy bolt towards his target. The first enemy hit takes @ModifiedMagicDamage@ magic damage and grants Ezreal @ModifiedAS@ bonus Attack Speed, stacking up to @MaxStacks@ times.`,
		icon: `ASSETS/Characters/Ezreal/HUD/Icons2D/Ezreal_Q.dds`,
		name: `Mystic Shot`,
		variables: {
			'ASBoost': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'MaxStacks': [5, 5, 5, 5],
			'MagicDamage': [70, 200, 275, 415],
		},
	},
	'TFT7_Gnar': {
		desc: `Gnar transforms into Mega Form, jumping to his target and knocking up nearby enemies for @StunDuration@ second. Gnar also gains @ModifiedAD@ Attack Damage and @ModifiedArmor@ Armor, but reduces his Attack Range to 1.`,
		icon: `ASSETS/Characters/Gnar/HUD/Icons2D/Gnar_Passive.dds`,
		name: `Mega Gnar`,
		variables: {
			'AttackDamage': [0, 60, 90, 150],
			'Armor': [0, 40, 60, 90],
			'StunDuration': [1, 1, 1, 1],
		},
	},
	'TFT7_Graves': {
		desc: `Passive: Graves' attacks spread in a cone of 4 bullets in front of him, each striking the first enemy hit for @PercentAttackDamage@% of his Attack Damage (damage per bullet: @TotalDamage@).<br><br>Active: Graves dashes towards his target, quickly fires two attacks, and grants himself @ModifiedResists@ Armor and Magic Resist for @ResistDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT7_Graves/HUD/Icons2D/TFT7_GravesQuickDraw.TFT_Set7_Stage2.dds`,
		name: `Quickdraw`,
		variables: {
			'PercentAttackDamage': [0, 65, 65, 145],
			'Resists': [0, 30, 40, 80],
			'ResistDuration': [0, 4, 4, 4],
		},
	},
	'TFT7_Hecarim': {
		desc: `Hecarim summons spectral riders that charge through his target, dealing @ModifiedDamage@ magic damage and stunning enemies hit for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Hecarim/HUD/Icons2D/Hecarim_OnslaughtofShadows.dds`,
		name: `Onslaught of Shadows`,
		variables: {
			'Damage': [0, 200, 300, 1500],
			'StunDuration': [0, 1.5, 2, 8],
		},
	},
	'TFT7b_Heimerdinger': {
		desc: `Heimerdinger lobs an egg at the highest percent Health enemy, dealing @ModifiedDamage@ magic damage and stunning them for @StunDuration@ seconds. `,
		icon: `ASSETS/Characters/Heimerdinger/HUD/Icons2D/Heimerdinger_E1.dds`,
		name: `Egg Toss`,
		variables: {
			'MagicDamage': [0, 225, 325, 475],
			'StunDuration': [0, 0.5, 0.5, 0.5],
		},
	},
	'TFT7_DragonGold': {
		desc: `Idas hardens her scales for @DefenseDuration@ seconds, reducing incoming damage by @DamageReduction@. She then roars, healing herself for @ModifiedHeal@ Health and shielding other allies for @ModifiedShieldValue@ for @RoarDuration@ seconds. The shield grants @ASBonusBase*100@% Attack Speed while it holds. `,
		icon: `ASSETS/Characters/JarvanIV/HUD/Icons2D/JarvanIV_GoldenAegis.dds`,
		name: `Golden Scales`,
		variables: {
			'DefenseDuration': [2, 2, 2, 2],
			'DamageReduction': [0, 30, 50, 300],
			'Heal': [0, 450, 600, 3000],
			'ASBonusBase': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'RoarDuration': [5, 5, 5, 5],
			'ShieldValue': [0, 150, 250, 1200],
		},
	},
	'TFT7_JadeStatue': {
		desc: `When its Health is depleted, the Jade Statue will explode.`,
		icon: `ASSETS/Characters/TFT7_JadeStatue/HUD/Icons2D/TFT7_JadeStatue_EyeOfTheStorm.TFT_Set7.dds`,
		name: `Shatter`,
		variables: {},
	},
	'TFT7_Jax': {
		desc: `Jax dodges all incoming attacks for @Duration@ seconds, then strikes all nearby enemies, dealing @ModifiedDamage@ magic damage and stunning them for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Jax/HUD/Icons2D/Armsmaster_CoupDeGrace.dds`,
		name: `Counter Strike`,
		variables: {
			'Duration': [2, 2, 2, 2],
			'Damage': [50, 225, 350, 750],
			'AttackRadius': [1, 1, 1, 1],
			'StunDuration': [0.75, 1, 1.25, 1.5],
		},
	},
	'TFT7_Jayce': {
		desc: `Jayce transforms into his melee form, then slams the ground around his target, dealing @ModifiedMagicDamage@ magic damage and gaining @Resists@ Armor and Magic Resist. He replaces his Ability with Mercurial Judgement for the rest of combat.<br><br>Mercurial Judgment: Jayce calls lightning upon his target, smiting them for @ModifiedSmiteDamage@ magic damage and dealing an additional @ModifiedSecondMagicDamage@ magic damage to other enemies in the area. He then heals for @ModifiedHeal@ health and an additional @BonusHealRatio*100@% per enemy struck.`,
		icon: `ASSETS/Characters/TFT7_Jayce/HUD/Icons2D/TFT7_Jayce_Q1.TFT_Set7_Stage2.dds`,
		name: `Mercurial Justice`,
		variables: {
			'BaseHeal': [200, 100, 150, 500],
			'BonusHealRatio': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'StunDuration': [1.25, 1.25, 1.25, 1.25],
			'BaseMagicDamage': [0, 300, 400, 1500],
			'BaseSecondMagicDamage': [150, 225, 275, 1200],
			'BaseSmiteDamage': [450, 400, 550, 2000],
			'Resists': [40, 40, 40, 40],
		},
	},
	'TFT7_Kaisa': {
		desc: `Kai'Sa fires @NumMissiles@ missiles split between her target and up to @SecondaryTargetCap@ other targets within her attack range that each deal @ModifiedDamage@ magic damage. This increases by @PerCastMissile@ missiles each cast, up to @MissileCap@.`,
		icon: `ASSETS/Characters/TFT7_Kaisa/HUD/Icons2D/TFT7_Kaisa_Q.TFT_Set7_Stage2.dds`,
		name: `Tidal Burst`,
		variables: {
			'NumMissiles': [4, 4, 4, 4],
			'Damage': [50, 40, 55, 85],
			'MissileCap': [12, 12, 12, 12],
			'PerMissileDelay': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'PerCastMissile': [2, 2, 2, 2],
			'PercentBonusDamage': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'SecondaryTargetCap': [2, 2, 2, 2],
			'SpellRange': [4, 4, 4, 4],
		},
	},
	'TFT7_Karma': {
		desc: `Karma fires a burst of energy towards her target, dealing @ModifiedDamage@ magic damage in a small area around the first enemy hit.`,
		icon: `ASSETS/Characters/Karma/HUD/Icons2D/Karma_Q1.dds`,
		name: `Inner Flame`,
		variables: {
			'MagicDamage': [0, 200, 265, 380],
		},
	},
	'TFT7_LeeSin': {
		desc: `Lee Sin kicks his target, stunning them for @StunDuration@ seconds and knocking them back. The target and all enemies they hit take @ModifiedMagicDamage@ magic damage and have their Magic Resist reduced by @TooltipMRShred@% for @ShredDuration@ seconds.`,
		icon: `ASSETS/Characters/LeeSin/HUD/Icons2D/BlindMonkR.dds`,
		name: `Dragon's Rage`,
		variables: {
			'StunDuration': [0, 1.25, 1.25, 1.25],
			'MagicDamage': [0, 215, 285, 385],
			'DragonmancerASPercent': [0, 50, 50, 50],
			'DragonmancerASDuration': [0, 5, 5, 5],
			'ShredDuration': [5, 5, 5, 5],
			'TooltipMRShred': [40, 40, 40, 40],
		},
	},
	'TFT7_Leona': {
		desc: `Leona creates a barrier around herself, reducing all incoming damage by @ModifiedDamageReduction@ for 4 seconds.`,
		icon: `ASSETS/Characters/Leona/HUD/Icons2D/LeonaSolarBarrier.dds`,
		name: `Solar Barrier`,
		variables: {
			'FlatDamageReduction': [0, 35, 45, 70],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT7_Lillia': {
		desc: `Lillia strikes a small area around her target's current location, dealing @ModifiedMagicDamage@ magic damage spread amongst all enemies hit and @ModifiedCenterBonusMagicDamage@ bonus magic damage to the enemy at the center of the blast. `,
		icon: `ASSETS/Characters/Lillia/HUD/Icons2D/Lillia_Icon_W.dds`,
		name: `Watch Out!`,
		variables: {
			'MagicDamage': [0, 215, 275, 370],
			'CenterBonusMagicDamage': [0, 190, 240, 340],
			'StunDuration': [1, 1, 1, 1],
		},
	},
	'TFT7b_Lulu': {
		desc: `Lulu enchants the @NumTargets@ units nearest to her. Enchanted allies gain @ModifiedAttackSpeedPercent@ bonus Attack Speed for @AllyBuffDuration@ seconds. Enchanted enemies are stunned and transformed into a docile feline for @PolymorphDuration@ seconds, taking @DamageAmp@% increased damage. If there are less than 3 units nearby, Lulu will enchant herself.`,
		icon: `ASSETS/Characters/Lulu/HUD/Icons2D/Lulu_Whimsy.dds`,
		name: `Whimsy`,
		variables: {
			'NumTargets': [2, 3, 3, 3],
			'AttackSpeedPercent': [8, 0.4000000059604645, 0.5, 0.699999988079071],
			'AllyBuffDuration': [0, 5, 5, 5],
			'PolymorphDuration': [0, 1, 1, 1],
			'DamageAmp': [20, 20, 20, 20],
		},
	},
	'TFT7_Lux': {
		desc: `Lux fires a star towards the farthest enemy, dealing @ModifiedDamage@ magic damage to the first enemy struck, and @LesserModifiedDamage@ magic damage to subsequent enemies.`,
		icon: `ASSETS/Characters/Lux/HUD/Icons2D/LuxLightStrikeKugel.dds`,
		name: `Cosmic Flare`,
		variables: {
			'BaseDamage': [0, 325, 410, 525],
			'LesserDamage': [0, 175, 210, 240],
		},
	},
	'TFT7_Malphite': {
		desc: `Malphite shields himself for <magicDamage>@TotalShield@</magicDamage> %i:scaleHealth% (@ModifiedBase@ + @ShieldPercentHealth*100@% maximum health) for @ShieldDuration@ seconds.`,
		icon: `ASSETS/Characters/Malphite/HUD/Icons2D/Malphite_GraniteShield.dds`,
		name: `Coral Shield`,
		variables: {
			'ShieldPercentHealth': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'ShieldDuration': [5, 5, 5, 5],
			'ShieldBase': [150, 200, 250, 325],
		},
	},
	'TFT7_Nasus': {
		desc: `Nasus surrounds himself in light for @Duration@ seconds, gaining @BonusHealth@ maximum health and dealing @ModifiedDamage@ magic damage to adjacent enemies every second.`,
		icon: `ASSETS/Characters/Nasus/HUD/Icons2D/Nasus_R.dds`,
		name: `Fury of the Dawn`,
		variables: {
			'BonusHealth': [100, 225, 350, 650],
			'Damage': [30, 70, 100, 205],
			'Duration': [6, 6, 6, 6],
		},
	},
	'TFT7_Nidalee': {
		desc: `Nidalee transforms into Cougar Form for the rest of combat, reducing her Attack Range to 1 and gaining bonus movement speed and @ModifiedAS@ Attack Speed. While in cougar form, every @NumAttacks@rd attack swipes her target for <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% Attack Damage %i:scaleAD%).`,
		icon: `ASSETS/Characters/Nidalee/HUD/Icons2D/Nidalee_R2.dds`,
		name: `Primal Surge`,
		variables: {
			'BaseAS': [0.4000000059604645, 0.4000000059604645, 0.44999998807907104, 0.5],
			'ADRatio': [2.25, 2.25, 2.25, 2.25],
			'NumAttacks': [3, 3, 3, 3],
			'BufferTime': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT7_Nilah': {
		desc: `Nilah cracks her whip-blade at her target, dashing through them and dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADPercent*100@% Attack Damage %i:scaleAD% + @ModifiedDamage@). If this does damage to a shield, she gains a shield equal to @PercentShield*100@% of the damage she deals to it for @ShieldStealDuration@ seconds. She instantly recasts if the target is killed or remains shielded.`,
		icon: `ASSETS/Characters/TFT7_Nilah/HUD/Icons2D/TFT7_NilahE.TFT_Set7_Stage2.dds`,
		name: `Slipstream`,
		variables: {
			'PercentShield': [0.6000000238418579, 0.800000011920929, 1, 3],
			'Damage': [0, 130, 200, 700],
			'ShieldStealDuration': [4, 4, 4, 4],
			'ADPercent': [0, 2, 2.25, 5],
		},
	},
	'TFT7_Nomsy': {
		desc: `Nomsy bellows, lobbing a massive fireball towards a random enemy that explodes on impact, dealing @ModifiedDamage@ magic damage to enemies within 1 hex, and bouncing additional fireballs outward that deal @PercentDamage*100@% of the damage.`,
		icon: `ASSETS/Characters/Brand/HUD/Icons2D/BrandPyroclasm.dds`,
		name: `Fireballs!`,
		variables: {
			'MagicDamage': [0, 190, 270, 420],
			'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
		},
	},
	'TFT7_NomsyCannoneer': {
		desc: `Nomsy bellows, lobbing a massive fireball towards a random enemy that explodes on impact, dealing @ModifiedDamage@ magic damage to enemies within 1 hex, and bouncing additional fireballs outward that deal @PercentDamage*100@% of the damage.`,
		icon: `ASSETS/Characters/Brand/HUD/Icons2D/BrandPyroclasm.dds`,
		name: `Fireballs!`,
		variables: {
			'MagicDamage': [0, 190, 270, 420],
			'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
		},
	},
	'TFT7_NomsyEvoker': {
		desc: `Nomsy bellows, lobbing a massive fireball towards a random enemy that explodes on impact, dealing @ModifiedDamage@ magic damage to enemies within 1 hex, and bouncing additional fireballs outward that deal @PercentDamage*100@% of the damage.`,
		icon: `ASSETS/Characters/Brand/HUD/Icons2D/BrandPyroclasm.dds`,
		name: `Fireballs!`,
		variables: {
			'MagicDamage': [0, 190, 270, 420],
			'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
		},
	},
	'TFT7_NomsyMage': {
		desc: `Nomsy bellows, lobbing a massive fireball towards a random enemy that explodes on impact, dealing @ModifiedDamage@ magic damage to enemies within 1 hex, and bouncing additional fireballs outward that deal @PercentDamage*100@% of the damage.`,
		icon: `ASSETS/Characters/Brand/HUD/Icons2D/BrandPyroclasm.dds`,
		name: `Fireballs!`,
		variables: {
			'MagicDamage': [0, 190, 270, 420],
			'PercentDamage': [0, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
		},
	},
	'TFT7_Nunu': {
		desc: `Nunu encourages Willump to bite his target, dealing @ModifiedDamage@ magic damage. If Willump's target has less Health than he does before the bite, it deals an additional @DamageAmp*100@% damage.`,
		icon: `ASSETS/Characters/Nunu/HUD/Icons2D/NunuQ.dds`,
		name: `Consume`,
		variables: {
			'Damage': [200, 375, 525, 925],
			'DamageAmp': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT7_Olaf': {
		desc: `Passive: Olaf seeks glorious death, permanently gaining %i:scaleAD% @StackingAD@ Attack Damage (@StackingAD*2@ in Hyper Roll) whenever he dies (Current Bonus: %i:scaleAD% @TFTUnitProperty.:TFT7_OlafPassiveBonusAD@ Attack Damage).<br><br>Active: Olaf strikes his target, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@AttackDamageRatio*100@% Attack Damage %i:scaleAD%) and gaining @ModifiedAttackSpeedRatio@ Attack Speed for @BuffDuration@ seconds. If he's below @HealthPercentThreshold@% Health, the Attack Speed is doubled.`,
		icon: `ASSETS/Characters/Olaf/HUD/Icons2D/Olaf_E.dds`,
		name: `Recklessness`,
		variables: {
			'AttackDamageRatio': [0, 2.200000047683716, 2.299999952316284, 2.4000000953674316],
			'AttackSpeedRatio': [0.30000001192092896, 0.3499999940395355, 0.44999998807907104, 0.6000000238418579],
			'BuffDuration': [0, 6, 6, 6],
			'HealthPercentThreshold': [0, 50, 50, 50],
			'StackingAD': [4, 4, 4, 4],
		},
	},
	'TFT7_Pantheon': {
		desc: `Passive: Pantheon takes @DamageReductionPercent*100@% less damage.<br><br>Active: Pantheon braces his shield for @Duration@ seconds, doubling the effectiveness of his passive and dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAttackDamage*100@% Attack Damage %i:scaleAD% + @ModifiedBaseDamage@) in the area in front of him over the duration. Enemies hit have their incoming healing reduced by @HealingReduction@% for @HealingReductionDuration@ seconds.`,
		icon: `ASSETS/Characters/Pantheon/HUD/Icons2D/Pantheon_E2.dds`,
		name: `Aegis Assault`,
		variables: {
			'DamageReductionPercent': [0, 0.20000000298023224, 0.25, 0.4000000059604645],
			'PercentAttackDamage': [3, 2.6500000953674316, 2.799999952316284, 3.799999952316284],
			'Duration': [0, 2, 2, 2],
			'HealingReduction': [0, 50, 50, 50],
			'HealingReductionDuration': [0, 3, 3, 3],
			'BonusAD': [50, 50, 50, 50],
			'BaseDamage': [0, 70, 110, 700],
		},
	},
	'TFT7_Qiyana': {
		desc: `Qiyana dashes to the best position to strike enemies with her blade, dealing @ModifiedDamage@ magic damage in a short line and disarming enemies hit for @CCDuration@ seconds.`,
		icon: `ASSETS/Characters/Qiyana/HUD/Icons2D/Qiyana_Q1.dds`,
		name: `Elemental Blade`,
		variables: {
			'BaseDamage': [50, 225, 300, 450],
			'CCDuration': [1.25, 1.5, 1.75, 2],
		},
	},
	'TFT7_Rakan': {
		desc: `Rakan dashes to the furthest enemy within his attack range, disarming all units he passes through for @DisarmDuration@ seconds, and taunting his target.<br><br>Then for @ShieldDuration@ seconds, Rakan creates a shield with @ModifiedShield@ health on himself and his attacks grant him an additional @ModifiedBonusShield@ health shield.`,
		icon: `ASSETS/Characters/TFT7_Rakan/HUD/Icons2D/TFT7_Rakan_R.TFT_Set7_Stage2.dds`,
		name: `Disarming Diversion`,
		variables: {
			'Radius': [1, 1, 1, 1],
			'ShieldAmount': [0, 230, 350, 650],
			'DisarmDuration': [1.5, 1.5, 1.5, 1.5],
			'ShieldDuration': [4, 4, 4, 4],
			'BaseBonusShield': [50, 50, 70, 100],
		},
	},
	'TFT7_Rell': {
		desc: `Rell forms a tether between herself and her lowest percent health ally, dealing @ModifiedDamage@ magic damage to all enemies between herself and her bound ally. She also grants herself and her bound ally @Resists@% of Rell's current Armor and Magic Resist for @Duration@ seconds.`,
		icon: `ASSETS/Characters/TFT7_Rell/HUD/Icons2D/TFT7_RellE.TFT_Set7_Stage2.dds`,
		name: `Iron Bond`,
		variables: {
			'Resists': [30, 35, 40, 50],
			'Damage': [100, 160, 240, 440],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT7_Rengar': {
		desc: `Rengar leaps to the lowest armor enemy, dealing <scaleAD>@TotalPhysicalDamage@</scaleAD> physical damage (@ADPercent*100@% Attack Damage %i:scaleAD% + @BonusPhysicalDamage@). He then gains a burst of attack speed for his next @NumEmpoweredAttacks@ attacks.<br>`,
		icon: `ASSETS/Characters/TFT7_Rengar/HUD/Icons2D/TFT7_RengarQEmp.TFT_Set7_Stage2.dds`,
		name: `Unseen Predator`,
		variables: {
			'ADPercent': [2.450000047683716, 2.4000000953674316, 2.450000047683716, 2.75],
			'FlatDamage': [40, 60, 80, 100],
			'ASGain': [2, 2, 2, 2],
			'CritChanceGain': [],
			'NumEmpoweredAttacks': [2, 2, 2, 2],
		},
	},
	'TFT7_LagoonRelic': {
		desc: `The Seastone periodically grants loot as Lagoon units cast more Abilities.<br><br>Total casts: <active>@TFTUnitProperty.:TFT7_LagoonCount@</active><br>Gold granted: <active>@TFTUnitProperty.:TFT7_LagoonRewardCountGold@</active><br>Rewards granted: <active>@TFTUnitProperty.:TFT7_LagoonRewardCount@</active>`,
		icon: `ASSETS/Characters/TFT7_LagoonRelic/HUD/Icons2D/TFT7_LagoonRelic_AbilityIcon.dds`,
		name: `Sea Blessing`,
		variables: {},
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
			'BonusMagicDamage': [0, 300, 450, 650],
			'PercentAttackDamage': [0, 200, 240, 300],
		},
	},
	'TFT7_Seraphine': {
		desc: `Seraphine sings a serenade of the seas, granting a @ModifiedShield@ shield and @ModifiedOnHit@ magic damage on attacks to all allies within @Hex@ hexes for @Duration@ seconds.`,
		icon: `ASSETS/Characters/TFT7_Seraphine/HUD/Icons2D/TFT7_Seraphine_W1.TFT_Set7_Stage2.dds`,
		name: `Serenade of the Seas`,
		variables: {
			'Shield': [300, 160, 220, 300],
			'Duration': [4, 4, 4, 4],
			'Hex': [2, 2, 2, 2],
			'AttackSpeed': [0.20000000298023224, 0.20000000298023224, 0.30000001192092896, 0.5],
			'ManaGain': [2, 5, 7, 10],
			'OnHit': [0, 20, 35, 65],
		},
	},
	'TFT7_Sett': {
		desc: `For the next @Duration@ seconds, Sett gains @ModifiedResistAmount@ Armor and Magic Resist, and every other punch deals <scaleAD>@TotalBonusDamage@</scaleAD> bonus physical damage (@ADRatio*100@% Attack Damage %i:scaleAD%).`,
		icon: `ASSETS/Characters/Sett/HUD/Icons2D/Sett_Q.dds`,
		name: `Knuckle Down`,
		variables: {
			'BaseResistAmount': [15, 50, 60, 80],
			'ADRatio': [0, 1.5, 1.5499999523162842, 1.7000000476837158],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT7_DragonGreen': {
		desc: `Shi Oh Yu enters Jade stance, gaining @ModifiedDamageReduction@ damage reduction, immunity to crowd control, and empowering her next 3 attacks with special effects that deal @TotalDamage@ damage (@PercentAttackDamage@% Attack Damage %i:scaleAD%).<br><br>Attack 1: Deals <scaleAD>@TotalDamage@</scaleAD> physical damage and knocks the target into the air for @Stun@ seconds.<br>Attack 2: Deals <trueDamage>@TotalDamage@</trueDamage> true damage.<br>Attack 3: Ends the stance, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage to all enemies in a line and knocking them up for @Stun@ seconds.`,
		icon: `ASSETS/Characters/Karma/HUD/Icons2D/Karma_Passive.dds`,
		name: `Jade Form`,
		variables: {
			'DamageReduction': [0.20000000298023224, 0.20000000298023224, 0.25, 0.4000000059604645],
			'Stun': [1, 1, 1, 1],
			'PercentAttackDamage': [0, 250, 300, 1000],
		},
	},
	'TFT7_Shyvana': {
		desc: `Shyvana transforms into Dragon Form for the rest of combat, replacing her ability with Flame Breath. She then becomes untargetable before dive-bombing the largest group of enemies, dealing @ModifiedInitialDamage@ magic damage and stunning them for @StunDuration@ seconds. After landing, Shyvana casts Flame Breath again immediately.<br><br>Flame Breath: Shyvana breathes fire in a cone, dealing up to @ModifiedFlameBreathDamage@ magic damage. While breathing fire, Shyvana is always enraged.`,
		icon: `ASSETS/Characters/Shyvana/HUD/Icons2D/ShyvanaDragonsDescent.dds`,
		name: `Dragon's Descent`,
		variables: {
			'InitialDamage': [0, 80, 150, 1500],
			'PercentMaxHealth': [0, 60, 75, 999],
			'StunDuration': [0, 1.25, 1.25, 10],
			'LingerDuration': [0, 1.5, 1.5, 1.5],
			'FlameBreathDuration': [3.75, 3.75, 3.75, 3.75],
			'FlameBreathDamage': [1500, 700, 1200, 20000],
		},
	},
	'TFT7_Skarner': {
		desc: `Skarner shields himself for @ModifiedShield@ for @Duration@ seconds, and gains @AttackSpeed*100@% Attack Speed while it holds.`,
		icon: `ASSETS/Characters/Skarner/HUD/Icons2D/Skarner_W.dds`,
		name: `Crystalline Exoskeleton`,
		variables: {
			'ShieldAmount': [225, 300, 375, 450],
			'Duration': [8, 8, 8, 8],
			'AttackSpeed': [1.399999976158142, 1.600000023841858, 1.7999999523162842, 2],
		},
	},
	'TFT7_AquaticDragon': {
		desc: `Sohm sends out a wave to an unmarked target, marking them with a Tideblossom and dealing @ModifiedDamage@ magic damage to enemies along the way. Tideblossoms transfer to a nearby target if the enemy dies.<br><br>After @NormalCastCount@ casts, his next cast instead summons a vortex under each Tideblossom, dealing @ModifiedExplodeDamage@ magic damage to enemies in the area.`,
		icon: `ASSETS/Characters/Nilah/HUD/Icons2D/NilahR.Nilah.dds`,
		name: `Tideblossom`,
		variables: {
			'BaseDamage': [100, 165, 225, 600],
			'NormalCastCount': [3, 3, 3, 3],
			'ReducedDamageRatio': [1, 1, 1, 1],
			'BaseExplodeDamage': [150, 285, 400, 1400],
		},
	},
	'TFT7_Soraka': {
		desc: `Passive: While any ally is below @HealthThreshold@% Health, Soraka gains an additional @ManaPerAttack@ mana per attack. <br><br>Active: Soraka calls down a shower of @stars@ stars over the next @Duration@ seconds. Allies are healed for @ModifiedHealing@ each time a star hits them.`,
		icon: `ASSETS/Characters/Soraka/HUD/Icons2D/Soraka_R.dds`,
		name: `Starfall`,
		variables: {
			'Healing': [0, 105, 165, 1000],
			'Stars': [14, 14, 14, 14],
			'Duration': [2, 2, 2, 2],
			'ManaPerAttack': [15, 15, 15, 15],
			'HealthThreshold': [50, 50, 50, 50],
		},
	},
	'TFT7_DragonPurple': {
		desc: `Sy'fen charges toward the farthest enemy within @ChargeDistance@ hexes, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% of Attack Damage %i:scaleAD%) and knocking up enemies he passes through.<br><br>After charging, Sy'fen bites an enemy, dealing <scaleAD>@TotalBiteDamage@</scaleAD> physical damage (@BiteADRatio*100@% Attack Damage %i:scaleAD%) and ignoring @ModifiedArmorPenPercent@% of the target's Armor. This bite cannot be dodged.`,
		icon: `ASSETS/Characters/TFT7_DragonPurple/HUD/Icons2D/TFT7_DragonPurple_Ability.TFT_Set7.dds`,
		name: `Rampage`,
		variables: {
			'ADRatio': [0, 1.5, 1.7000000476837158, 4.5],
			'BiteADRatio': [0, 4.5, 5.5, 25],
			'ArmorPenPercent': [0, 33, 33, 33],
			'ChargeDistance': [2.5, 2.5, 2.5, 2.5],
		},
	},
	'TFT7_Sylas': {
		desc: `Sylas whirls his chains, dealing @ModifiedDamage@ magic damage to enemies hit and shielding himself for @ModifiedShield@ for @ShieldDuration@ seconds. If Sylas has already shielded himself, he hits in a larger area and applies Mana-Reave to enemies hit, increasing the cost of their next ability by 35%.`,
		icon: `ASSETS/Characters/Sylas/HUD/Icons2D/SylasP.dds`,
		name: `Petricite Burst`,
		variables: {
			'Damage': [0, 140, 200, 320],
			'Shield': [0, 365, 415, 525],
			'ShieldDuration': [0, 6, 6, 6],
		},
	},
	'TFT7_Taliyah': {
		desc: `Taliyah throws 3 stones at her target, each dealing @ModifiedMagicDamage@ to the first enemy hit.`,
		icon: `ASSETS/Characters/TFT7_Taliyah/HUD/Icons2D/TFT7_Taliyah_Q.TFT_Set7_Stage2.dds`,
		name: `Flowing Volley`,
		variables: {
			'Damage': [80, 160, 240, 380],
		},
	},
	'TFT_TrainingDummy': {
		desc: `The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.`,
		icon: `ASSETS/Characters/TFTDebug_Dummy/HUD/Icons2D/TFTDebug_Dummy_DoNothing.dds`,
		name: `On Duty!`,
		variables: {},
	},
	'TFT7_DragonEarth': {
		desc: `Terra stomps three times causing an earthquake around them, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ArmorAndMRPercent@% of their combined %i:scaleArmor% Armor and %i:scaleMR% Magic Resist plus @AttackDamagePercent@% of their Attack Damage.) At the end of the earthquake Terra's scales are hardened for @ResistDuration@ seconds, granting @ModifiedResistBuff@ Armor and Magic Resist.`,
		icon: `ASSETS/Characters/Taliyah/HUD/Icons2D/Taliyah_E.dds`,
		name: `Earthquake`,
		variables: {
			'ArmorAndMRPercent': [0, 150, 200, 2500],
			'AttackDamagePercent': [0, 200, 200, 200],
			'ResistBuff': [0, 130, 165, 4000],
			'ResistDuration': [0, 8, 8, 8],
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
	'TFT7b_Tristana': {
		desc: `Tristana fires up to @NumOfCharges@ explosive charges, prioritizing the closest targets without a charge. Charges detonate after @Duration@ seconds, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@PercentAD*100@% Attack Damage %i:scaleAD%) to nearby enemies and an additional @ModifiedDamage@ magic damage to the target.`,
		icon: `ASSETS/Characters/Tristana/HUD/Icons2D/Tristana_E.dds`,
		name: `Explosive Charge`,
		variables: {
			'Damage': [0, 130, 160, 200],
			'NumOfCharges': [1, 1, 1, 1],
			'HexRadius': [1, 1, 1, 1],
			'Duration': [1, 1, 1, 1],
			'PercentAD': [1.2000000476837158, 1.399999976158142, 1.7000000476837158, 2.0999999046325684],
			'NomsyAttackDamage': [0, 50, 75, 120],
		},
	},
	'TFT7_Twitch': {
		desc: `Twitch hurls an exploding flask at his target, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@ADRatio*100@% Attack Damage %i:scaleAD% + @ModifiedBaseDamage@) in an area and reducing the Armor of enemies hit by @TooltipShredMult*100@% for @ShredDuration@ seconds.`,
		icon: `ASSETS/Characters/Twitch/HUD/Icons2D/Twitch_W.dds`,
		name: `Blast Potion`,
		variables: {
			'BaseDamage': [0, 40, 80, 150],
			'ADRatio': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
			'TooltipShredMult': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'ShredDuration': [5, 5, 5, 5],
			'GuildBonus': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		},
	},
	'TFT7_DragonSwain': {
		desc: `Swain releases his dragonling flock, launching @NumDragonlings@ dragonlings toward nearby enemies that each deal @ModifiedDamage@ magic damage to their target, then return to Swain and heal him for @HealPercent@% of his missing Health.`,
		icon: `ASSETS/Characters/Swain/HUD/Icons2D/Swain_P.dds`,
		name: `Dragon Master's Decree`,
		variables: {
			'NumDragonlings': [0, 8, 8, 8],
			'Damage': [0, 90, 130, 600],
			'HealPercent': [0, 12, 12, 12],
		},
	},
	'TFT7_Varus': {
		desc: `Varus sends out a cosmic tendril towards his target that strikes the first enemy hit, dealing <scaleAD>@TooltipDamage@</scaleAD> physical damage (@ADPercent@% Attack Damage %i:scaleAD%) and stunning them for @StunDuration@ seconds. Tendrils then spread to @SpreadCount@ nearby enemies, dealing @ModifiedMagicDamage@ magic damage and stunning them for the same duration.`,
		icon: `ASSETS/Characters/Varus/HUD/Icons2D/VarusR.dds`,
		name: `Chain of Constellations`,
		variables: {
			'ADPercent': [0, 300, 300, 300],
			'StunDuration': [0, 1.5, 1.75, 2],
			'SpreadCount': [3, 3, 3, 3],
			'MagicDamage': [0, 150, 250, 400],
		},
	},
	'TFT7_Vladimir': {
		desc: `Vladimir deals @ModifiedDamage@ magic damage to the target and heals for @ModifiedHeal@ Health.`,
		icon: `ASSETS/Characters/Vladimir/HUD/Icons2D/VladimirQ.dds`,
		name: `Transfusion`,
		variables: {
			'Damage': [75, 275, 325, 375],
			'Heal': [0, 275, 325, 375],
		},
	},
	'TFT_Voidspawn': {
		desc: `The Voidspawn gains bonus Health and Attack Damage based on the current Stage. `,
		icon: `ASSETS/Characters/TFT_VoidSpawn/HUD/Voidspawn_square.dds`,
		name: `Voidborn`,
		variables: {},
	},
	'TFT7b_Volibear': {
		desc: `Volibear rages, gaining @ModifiedBonusHealth@ bonus Health. For the rest of combat, every @NumAttacks@rd attack deals @ModifiedDamagePerTarget@ magic bonus magic damage to the target, and @ModifiedDamagePerTarget@ magic damage to up to @NumTargets@ additional enemies.`,
		icon: `ASSETS/Characters/Volibear/HUD/Icons2D/Volibear_Icon_P.dds`,
		name: `Relentless Storm`,
		variables: {
			'BonusHealth': [0, 400, 700, 1200],
			'NumTargets': [0, 4, 4, 4],
			'DamagePerTarget': [0, 130, 185, 250],
			'NumAttacks': [3, 3, 3, 3],
		},
	},
	'TFT7_Wukong': {
		desc: `Wukong slams his target with his staff, dealing <scaleAD>@ModifiedDamage@</scaleAD> physical damage (@PercentAD*100@% Attack Damage %i:scaleAD% plus @TooltipBaseDamage@) and stunning them for @Duration@ seconds.`,
		icon: `ASSETS/Characters/MonkeyKing/HUD/Icons2D/MonkeyKingCrushingBlow.dds`,
		name: `Crushing Blow`,
		variables: {
			'PercentAD': [1.5, 1.850000023841858, 2, 2.5],
			'Duration': [1.5, 1, 1.25, 1.5],
			'BaseDamage': [25, 50, 75, 100],
		},
	},
	'TFT7_Xayah': {
		desc: `For @Duration@ seconds, whenever Xayah attacks she fires a feather behind her target and @NumBonusAttacks@ nearby enemies.<br><br>At the end of this duration Xayah recalls her feathers, dealing <scaleAD>@ModifiedPullbackDamagePerFeather@</scaleAD> physical damage (@RecallAD*100@% Attack Damage %i:scaleAD% + @TooltipRecallAP@) per feather to enemies struck.`,
		icon: `ASSETS/Characters/Xayah/HUD/Icons2D/XayahW.dds`,
		name: `Feathers FLY!`,
		variables: {
			'NumBonusAttacks': [0, 2, 2, 4],
			'PullbackDamagePerFeather': [0, 13, 20, 75],
			'RecallAD': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.30000001192092896],
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
			'BonusDamage': [0, 85, 125, 180],
			'PercentAD': [0.33000001311302185, 0.30000001192092896, 0.3499999940395355, 0.4000000059604645],
		},
	},
	'TFT7_Zac': {
		desc: `Zac explodes outward towards enemies within @AoERadius@ hexes, dealing @ModifiedPercentHealthDamage@ of their maximum Health as magic damage and healing himself for @ModifiedHeal@.`,
		icon: `ASSETS/Characters/TFT7_Zac/HUD/Icons2D/TFT7_ZacW.TFT_Set7_Stage2.dds`,
		name: `Unstable Current`,
		variables: {
			'AoERadius': [2, 2, 2, 2],
			'PercentHealthDamage': [0, 0.10000000149011612, 0.11999999731779099, 0.18000000715255737],
			'Heal': [0, 220, 250, 300],
		},
	},
	'TFT7_Zeri': {
		desc: `Zeri fires a water pulse at the closest enemy within @RangeCheck@ hexes, or at the centermost enemy, stunning them briefly for @StunDuration@ seconds. When the pulse explodes it deals <scaleAD>@TargetDamage@</scaleAD> physical damage (@PercentAD*100@% Attack Damage %i:scaleAD%) and creates a laser behind the target that deals @ModifiedDamage@ magic damage to all enemies hit.`,
		icon: `ASSETS/Characters/TFT7_Zeri/HUD/Icons2D/TFT7_ZeriW.TFT_Set7_Stage2.dds`,
		name: `Watershock Laser`,
		variables: {
			'Damage': [200, 275, 375, 525],
			'StunDuration': [0.75, 0.75, 0.75, 0.75],
			'PercentAD': [1.2000000476837158, 1.100000023841858, 1.149999976158142, 1.2000000476837158],
			'RangeCheck': [3, 3, 3, 3],
		},
	},
	'TFT7_DragonGuild': {
		desc: `Zippy shields himself for @ModifiedShieldAmount@ for @ShieldDuration@ seconds and somersaults toward the highest percent health enemy, dealing <scaleAD>@TotalDamage@</scaleAD> physical damage (@AttackDamageRatio*100@% Attack Damage %i:scaleAD%) and knocking them back slightly.`,
		icon: `ASSETS/Characters/Kled/HUD/Icons2D/Kled_P_Cooldown.dds`,
		name: `Somersault Assault`,
		variables: {
			'ShieldAmount': [0, 375, 450, 650],
			'AttackDamageRatio': [0, 4, 4.25, 6],
			'ShieldDuration': [0, 2, 2, 2],
		},
	},
	'TFT7_IvernMinion': {
		desc: `Daisy smashes the ground around her target, dealing @TooltipDaisyDamage@ magic damage.`,
		icon: `ASSETS/Characters/IvernMinion/HUD/Daisy_Sq.dds`,
		name: `Smash`,
		variables: {
			'Damage': [250, 500, 1000, 10000],
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
	'TFT7_Zyra': {
		desc: `Zyra summons vines in the row with the most enemies, dealing @ModifiedDamage@ magic damage and stunning them for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/Zyra/HUD/Icons2D/ZyraQ.dds`,
		name: `Grasping Spines`,
		variables: {
			'Damage': [0, 225, 325, 550],
			'StunDuration': [0.75, 1, 1.25, 1.5],
		},
	},
}
