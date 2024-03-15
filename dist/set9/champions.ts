import type { AbilityData, ChampionData } from '../index'

export enum ChampionKey { Aatrox = `TFT9_Aatrox`, Ahri = `TFT9_Ahri`, Akshan = `TFT9_Akshan`, HeimerdingerTurret = `TFT9_HeimerdingerTurret`, Aphelios = `TFT9_Aphelios`, Ashe = `TFT9_Ashe`, Azir = `TFT9_Azir`, BaronNashor = `TFT9_BaronNashor`, BelVeth = `TFT9_BelVeth`, Cassiopeia = `TFT9_Cassiopeia`, ChoGath = `TFT9_ChoGath`, Darius = `TFT9_Darius`, Ekko = `TFT9_Ekko`, Galio = `TFT9_Galio`, Garen = `TFT9_Garen`, Gwen = `TFT9_Gwen`, Heimerdinger = `TFT9_Heimerdinger`, Irelia = `TFT9_Irelia`, JarvanIV = `TFT9_JarvanIV`, Jayce = `TFT9_Jayce`, Jhin = `TFT9_Jhin`, Jinx = `TFT9_Jinx`, KSante = `TFT9_KSante`, KaiSa = `TFT9_KaiSa`, Kalista = `TFT9_Kalista`, Karma = `TFT9_Karma`, Kassadin = `TFT9_Kassadin`, Katarina = `TFT9_Katarina`, Kayle = `TFT9_Kayle`, Kled = `TFT9_Kled`, Lissandra = `TFT9_Lissandra`, Lux = `TFT9_Lux`, Malzahar = `TFT9_Malzahar`, Maokai = `TFT9_Maokai`, Nasus = `TFT9_Nasus`, NoxianFlag = `TFT9_NoxianFlag`, Orianna = `TFT9_Orianna`, Poppy = `TFT9_Poppy`, RekSai = `TFT9_RekSai`, Renekton = `TFT9_Renekton`, RiftHerald = `TFT9_RiftHerald`, Ryze = `TFT9_Ryze`, RyzeBandleCity = `TFT9_RyzeBandleCity`, RyzeDemacia = `TFT9_RyzeDemacia`, RyzeFreljord = `TFT9_RyzeFreljord`, RyzeIonia = `TFT9_RyzeIonia`, RyzeNoxus = `TFT9_RyzeNoxus`, RyzePiltover = `TFT9_RyzePiltover`, RyzeShadowIsles = `TFT9_RyzeShadowIsles`, RyzeShurima = `TFT9_RyzeShurima`, RyzeTargon = `TFT9_RyzeTargon`, RyzeZaun = `TFT9_RyzeZaun`, Samira = `TFT9_Samira`, Sejuani = `TFT9_Sejuani`, Senna = `TFT9_Senna`, Sett = `TFT9_Sett`, Shen = `TFT9_Shen`, Sion = `TFT9_Sion`, Sona = `TFT9_Sona`, Soraka = `TFT9_Soraka`, AscendedSunDisc = `TFT9_AscendedSunDisc`, Swain = `TFT9_Swain`, THex = `TFT9_THex`, Taliyah = `TFT9_Taliyah`, TrainingDummy = `TFT_TrainingDummy`, Taric = `TFT9_Taric`, Teemo = `TFT9_Teemo`, Tristana = `TFT9_Tristana`, Urgot = `TFT9_Urgot`, VelKoz = `TFT9_VelKoz`, Vi = `TFT9_Vi`, Viego = `TFT9_Viego`, VoidRemora = `TFT9_VoidRemora`, Voidspawn = `TFT_Voidspawn`, Warwick = `TFT9_Warwick`, Yasuo = `TFT9_Yasuo`, Zed = `TFT9_Zed`, Zeri = `TFT9_Zeri` }

export const champions: ChampionData[] = [
	{
		apiName: `TFT9_Aatrox`,
		name: `Aatrox`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Aatrox.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Darkin`, `Slayer`, `Juggernaut`],
		stats: {
			armor: 70,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 1100,
			initialMana: 0,
			magicResist: 70,
			mana: 50,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT9_AatroxSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [10, 12, 12, 30],
					'Omnivamp': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
					'GreatswordADRatio': [0, 2.75, 2.75, 25],
					'ADPerASConversion': [0.800000011920929, 0.800000011920929, 0.800000011920929, 0.800000011920929],
					'MovementSpeed': [700, 700, 700, 700],
				},
				calculations: {
					'{f43feb6a}': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `{99221af5}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{ebad1c97}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{ad16f688}`,
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
				name: `TFT9_AatroxQ1`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AatroxQ2`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AatroxQ3`,
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
		apiName: `TFT9_Ahri`,
		name: `Ahri`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ahri.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Sorcerer`],
		stats: {
			armor: 40,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 850,
			initialMana: 0,
			magicResist: 40,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1750,
		critAttackMissileSpeed: 1750,
		passive: undefined,
		spells: [
			{
				name: `TFT9_AhriSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MagicDamage': [0, 230, 350, 1888],
					'EssenceDamage': [0, 90, 135, 1000],
					'NumCastsToBoom': [2, 2, 2, 0],
					'EssenceStolenMultiplier': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
					'TooltipIoniaBonus': [3, 3, 3, 3],
					'TooltipReave': [20, 20, 20, 20],
				},
				calculations: {
					'{c84577bb}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{7b78fab7}`,
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
					'{270780d1}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{5a596368}`,
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
										starValues: [0, 230, 350, 1888],
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
				name: `TFT9_AhriDrainMisR1`,
				castTime: undefined,
				missile: {
					width: undefined,
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
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AhriDrainMisR2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 950,
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
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AhriDrainMisC`,
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
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AhriWCircleMissile`,
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
					behaviors: [],
					type: `CircleMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_AhriSpell_BigBoom`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AhriDrainMisL2`,
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
					behaviors: [
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
				name: `TFT9_AhriDrainMisL1`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 600,
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
					type: `FixedSpeedSplineMovement`,
					_missileSpeed: 1600,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_Akshan`,
		name: `Akshan`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Akshan.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Deadeye`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 700,
			initialMana: 30,
			magicResist: 25,
			mana: 110,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_AkshanSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumBullets': [6, 6, 6, 6],
					'ADRatio': [1.25, 1.25, 1.25, 1.25],
					'BaseDamage': [0, 20, 35, 60],
					'RocketsPerSimulatedLaunchAttack': [2, 2, 2, 2],
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
										starValues: [1.25, 1.25, 1.25, 1.25],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BaseDamage`,
										starValues: [0, 20, 35, 60],
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
										variable: `BaseDamage`,
										starValues: [0, 20, 35, 60],
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
				name: `TFT9_AkshanR_mis`,
				castTime: 0.125,
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
							__type: `CastOnMovementComplete`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 3200,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_AkshanR_ammo`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: undefined,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [
						{
							mActions: [
								{
									__type: `Cast`,
								},
							],
							__type: `TriggerOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `SyncCircleMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_HeimerdingerTurret`,
		name: `Apex Turret`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_HeimerdingerTurret.TFT_Set9.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 60,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 800,
			initialMana: 0,
			magicResist: 60,
			mana: 100,
			moveSpeed: 500,
			range: 23,
		},
		basicAttackMissileSpeed: 1599.39990234375,
		critAttackMissileSpeed: 1599.39990234375,
		passive: undefined,
		spells: [
			{
				name: `TFT9_HeimerdingerTurretSpell`,
				castTime: 0.5,
				missile: {
					width: 160,
					travelTime: undefined,
					speedInitial: 1650,
					speedMin: 1200,
					speedMax: 1650,
					acceleration: -1000,
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
							mActions: [
								{
									__type: `CallOnMissileBounce`,
								},
								{
									__type: `ClearAlreadyHitTracking`,
								},
							],
							__type: `TriggerOnMovementComplete`,
						},
					],
					type: `DecelToLocationMovement`,
				},
				variables: {
					'Damage': [0, 185, 275, 4000],
					'MicroRocketDamage': [100, 100, 100, 100],
					'ShieldRegenTime': [6, 6, 6, 6],
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
										starValues: [0, 185, 275, 4000],
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
				name: `TFT9_HeimerTurretMicroRocketMis`,
				castTime: undefined,
				missile: {
					width: 40,
					travelTime: undefined,
					speedInitial: 750,
					speedMin: 750,
					speedMax: 3000,
					acceleration: 4000,
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
		apiName: `TFT9_Aphelios`,
		name: `Aphelios`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Aphelios.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Targon`, `Deadeye`],
		stats: {
			armor: 30,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 750,
			initialMana: 70,
			magicResist: 30,
			mana: 120,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_ApheliosSpell`,
				castTime: 0.5,
				missile: {
					width: 125,
					travelTime: undefined,
					speedInitial: 2500,
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
					_missileSpeed: 1000,
				},
				variables: {
					'BlastPercentAD': [1.7999999523162842, 2, 2, 5.5],
					'ChakramDuration': [7, 7, 7, 7],
					'ChakramPercentAD': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.30000001192092896],
					'ChakramHealing': [0.5, 0.5, 0.5, 0.5],
					'BaseChakramNumber': [3, 3, 3, 3],
					'BlastSize': [2, 2, 2, 2],
					'MaxChakrams': [10, 10, 12, 20],
				},
				calculations: {
					'{8a2f58bc}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{bdff4233}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{c3c7988f}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{337d737e}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{71cd7e73}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{854d054c}`,
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
				name: `TFT9_ApheliosCrescendumMiniAttack`,
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
				name: `TFT9_ApheliosCrescendumMiniAttackReturn`,
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
					_missileSpeed: 1000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_ApheliosCrescendumOrbitMissile`,
				castTime: undefined,
				missile: {
					width: 50,
					travelTime: undefined,
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
					type: `SyncCircleMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_ApheliosCrescendumMiniGenerator`,
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
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_ApheliosCrescendumAttackReturn`,
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
							__type: `CastOnHit`,
						},
						{
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 1000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_Ashe`,
		name: `Ashe`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ashe.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Freljord`, `Deadeye`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 600,
			initialMana: 20,
			magicResist: 20,
			mana: 70,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT9_AsheSpell`,
				castTime: 0.30000001192092896,
				missile: undefined,
				variables: {
					'ADPercent': [0, 1.600000023841858, 1.600000023841858, 1.7000000476837158],
					'BonusDamage': [10, 10, 10, 10],
					'Shots': [0, 8, 8, 8],
					'Duration': [2, 2, 2, 2],
					'Chill': [30, 30, 30, 30],
				},
				calculations: {
					'{b1925ae3}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [0, 1.600000023841858, 1.600000023841858, 1.7000000476837158],
										stat: `AD`,
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
										variable: `BonusDamage`,
										starValues: [10, 10, 10, 10],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Duration': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Duration`,
										starValues: [2, 2, 2, 2],
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
				name: `TFT9_AsheSpellMis`,
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
		],
	},
	{
		apiName: `TFT9_Azir`,
		name: `Azir`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Azir.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Strategist`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 30,
			hp: 750,
			initialMana: 40,
			magicResist: 30,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2600,
		critAttackMissileSpeed: 2800,
		passive: undefined,
		spells: [
			{
				name: `TFT9_AzirSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BaseMagicDamage': [35, 105, 160, 550],
					'Duration': [90, 90, 90, 90],
					'MaxSummons': [3, 3, 3, 3],
					'BonusRatio': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
				},
				calculations: {
					'{2e670f8b}': {
						asPercent: false,
						parts: [
							{
								operator: `product`,
								subparts: [
									{
										variable: `{5b68a63a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `{d04ae9af}`,
										starValues: undefined,
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
			{
				name: `TFT9_AzirSpell_MC`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'BaseMagicDamage': [70, 80, 120, 1000],
					'Duration': [90, 90, 90, 90],
					'MaxSummons': [4, 4, 4, 4],
					'BonusRatio': [0.5, 0.5, 0.5, 0.5],
				},
				calculations: {
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
		missiles: [],
	},
	{
		apiName: `TFT9_BaronNashor`,
		name: `Baron Nashor`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_BaronNashor.TFT_Set9.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 150,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 300,
			hp: 1250,
			initialMana: 0,
			magicResist: 150,
			mana: 2,
			moveSpeed: 500,
			range: 9,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_BaronNashorAcidBall`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [175, 175, 175, 175],
					'TooltipShred': [60, 60, 60, 60],
					'DebuffDuration': [4, 4, 4, 4],
					'CastCadence': [2, 2, 2, 2],
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
										starValues: [175, 175, 175, 175],
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
				name: `TFT9_BaronNashorAcidBall_Proj`,
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
				name: `TFT9_BaronNashorTail`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [60, 60, 60, 60],
					'KnockupDuration': [1.5, 1.5, 1.5, 1.5],
					'CastCadence': [2, 2, 2, 2],
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
										starValues: [60, 60, 60, 60],
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
				name: `TFT9_BaronNashorDeathBreath_Proj`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_BaronNashorDeathBreath`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [100, 100, 100, 100],
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
										starValues: [100, 100, 100, 100],
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
				name: `TFT9_BaronNashorChomp`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [666, 666, 666, 666],
					'MaxHealthPct': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'CastCadence': [2, 2, 2, 2],
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
										starValues: [666, 666, 666, 666],
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
		apiName: `TFT9_BelVeth`,
		name: `Bel'Veth`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_BelVeth.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Empress`],
		stats: {
			armor: 50,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 1100,
			initialMana: 20,
			magicResist: 50,
			mana: 70,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT9_BelVethSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [1.5, 1.5, 1.5, 4],
					'NumStrikes': [5, 6, 6, 30],
					'PercentAD': [0.6499999761581421, 0.6499999761581421, 0.6499999761581421, 0.6499999761581421],
					'PercentHealthTrueDamage': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'BonusFlatDamage': [15, 18, 30, 50],
					'StrikesPer100BonusAS': [5, 5, 5, 5],
				},
				calculations: {
					'{588a9429}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{011db30e}`,
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
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAD`,
										starValues: [0.6499999761581421, 0.6499999761581421, 0.6499999761581421, 0.6499999761581421],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{291a269a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{0c668f30}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{291a269a}`,
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
			{
				name: `TFT9_BelVethR`,
				castTime: 1,
				missile: undefined,
				variables: {
					'PassiveASRatio': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'MagicDamageRatio': [0.25, 0.25, 0.25, 0.25],
					'BonusHealth': [0, 200, 350, 600],
				},
				calculations: {
					'{5d0b4afa}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{84a219bc}`,
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
		apiName: `TFT9_Cassiopeia`,
		name: `Cassiopeia`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Cassiopeia.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Shurima`, `Invoker`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 500,
			initialMana: 0,
			magicResist: 20,
			mana: 30,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1200,
		critAttackMissileSpeed: 1200,
		passive: undefined,
		spells: [
			{
				name: `TFT9_CassiopeiaSpell`,
				castTime: 0.44999998807907104,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1850,
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
				variables: {
					'BaseDamage': [0, 170, 255, 385],
					'DamageAmp': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'WoundDuration': [5, 5, 5, 5],
					'TooltipWound': [50, 50, 50, 50],
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
										starValues: [0, 170, 255, 385],
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
								operator: `product`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 170, 255, 385],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `DamageAmp`,
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
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT9_CassiopeiaSpellMis`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1850,
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
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT9_ChoGath`,
		name: `Cho'Gath`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_ChoGath.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Bruiser`],
		stats: {
			armor: 30,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 700,
			initialMana: 30,
			magicResist: 30,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_ChoGathSpell`,
				castTime: 0.5299999713897705,
				missile: undefined,
				variables: {
					'PercentMaximumHealthDamage': [0.14000000059604645, 0.14000000059604645, 0.14000000059604645, 0.14000000059604645],
					'BonusDamage': [140, 250, 335, 450],
					'BonusHealthOnKill': [25, 30, 35, 40],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `BonusDamage`,
										starValues: [140, 250, 335, 450],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `{7a01df57}`,
										starValues: undefined,
										stat: `HP`,
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
										starValues: [140, 250, 335, 450],
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
		apiName: `TFT9_Darius`,
		name: `Darius`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Darius.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Juggernaut`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 750,
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
				name: `TFT9_DariusSpell`,
				castTime: 0.6000000238418579,
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
					'AttackDamagePercent': [3.5, 3.5, 3.5, 3.5],
					'FearDuration': [1, 1, 1, 1],
					'AbilityScaleDamage': [100, 100, 120, 150],
					'PercentDamageFalloff': [0, 0.8199999928474426, 0.8500000238418579, 0.8999999761581421],
				},
				calculations: {
					'{fac096d7}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{966831c0}`,
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
										variable: `{966831c0}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
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
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT9_Ekko`,
		name: `Ekko`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ekko.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Zaun`, `Piltover`, `Rogue`],
		stats: {
			armor: 40,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 800,
			initialMana: 0,
			magicResist: 40,
			mana: 45,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_EkkoSpell`,
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
					'Damage': [0, 300, 450, 725],
					'HealPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'RewindTime': [4, 4, 4, 4],
					'RollDuration': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
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
										starValues: [0, 300, 450, 725],
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
		apiName: `TFT9_Galio`,
		name: `Galio`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Galio.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Invoker`],
		stats: {
			armor: 45,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 800,
			initialMana: 60,
			magicResist: 45,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_GalioSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'DamageResist': [0.20000000298023224, 0.25, 0.25, 0.3499999940395355],
					'Duration': [4, 4, 4, 4],
					'Heal': [0, 350, 400, 450],
					'Damage': [0, 200, 300, 450],
					'HexRadius': [1, 1, 1, 1],
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
										starValues: [0, 350, 400, 450],
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
										starValues: [0, 200, 300, 450],
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
		apiName: `TFT9_Garen`,
		name: `Garen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Garen.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Juggernaut`],
		stats: {
			armor: 45,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 850,
			initialMana: 0,
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
				name: `TFT9_GarenSpell`,
				castTime: undefined,
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
					'SpinDuration': [4, 4, 4, 4],
					'BaseTicks': [2, 2, 2, 2],
					'DamagePerTick': [15, 0.800000011920929, 0.8199999928474426, 0.8500000238418579],
					'ASPerTickTooltip': [50, 50, 50, 50],
					'SpinsPerLaunchAttack': [3, 3, 3, 3],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `DamagePerTick`,
										starValues: [15, 0.800000011920929, 0.8199999928474426, 0.8500000238418579],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{c30c4324}': {
						asPercent: true,
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
										variable: `SpinDuration`,
										starValues: [4, 4, 4, 4],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{50a938a5}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{55959392}`,
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
					'Duration': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SpinDuration`,
										starValues: [4, 4, 4, 4],
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
		apiName: `TFT9_Gwen`,
		name: `Gwen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Gwen.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shadow Isles`, `Slayer`],
		stats: {
			armor: 50,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 1000,
			initialMana: 0,
			magicResist: 50,
			mana: 35,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_GwenSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Snips': [3, 3, 3, 3],
					'MagicDamage': [0, 100, 150, 400],
					'MistDuration': [3, 3, 3, 5],
					'CastCountForMist': [3, 3, 3, 3],
					'MistResists': [150, 120, 120, 300],
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
										starValues: [0, 100, 150, 400],
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
		apiName: `TFT9_Heimerdinger`,
		name: `Heimerdinger`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Heimerdinger.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Piltover`, `Yordle`, `Technogenius`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
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
				name: `TFT9_HeimerdingerSpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1450.4000244140625,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Damage': [0, 150, 225, 3141],
					'StunDuration': [3, 1.5, 2, 15],
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
										starValues: [0, 150, 225, 3141],
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
				name: `TFT9_HeimerdingerSpell_Grenade`,
				castTime: undefined,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT9_Irelia`,
		name: `Irelia`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Irelia.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Challenger`],
		stats: {
			armor: 40,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 700,
			initialMana: 40,
			magicResist: 40,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_IreliaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ShieldDuration': [3, 3, 3, 3],
					'ShieldHealth': [200, 350, 400, 450],
					'StrikeBaseDamage': [50, 70, 100, 150],
					'PercentShieldDamage': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'TooltipIoniaBonus': [25, 25, 25, 25],
				},
				calculations: {
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{c3360f16}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{a6a27a90}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{5f1c3fbf}`,
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
		apiName: `TFT9_JarvanIV`,
		name: `Jarvan IV`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_JarvanIV.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Strategist`],
		stats: {
			armor: 60,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 100,
			magicResist: 60,
			mana: 180,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_JarvanIVSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StunDuration': [2.5, 1.75, 2.25, 8],
					'SearchRange': [3, 3, 3, 3],
					'Damage': [0, 140, 210, 800],
					'HexRadius': [2, 2, 2, 2],
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
										starValues: [0, 140, 210, 800],
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
		apiName: `TFT9_Jayce`,
		name: `Jayce`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Jayce.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Piltover`, `Gunner`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 700,
			initialMana: 40,
			magicResist: 25,
			mana: 120,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2250,
		critAttackMissileSpeed: 2250,
		passive: undefined,
		spells: [
			{
				name: `TFT9_JayceSpell`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: undefined,
					speedInitial: 2800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `DestroyOnHit`,
						},
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
					'PercentAttackSpeed': [0.5, 0.20000000298023224, 0.25, 0.30000001192092896],
					'Duration': [3, 3, 3, 3],
					'PercentAttackDamage': [0, 2.4000000953674316, 2.4000000953674316, 2.5],
					'HexRange': [1, 1, 1, 1],
					'TooltipPercentAttackDamage': [0, 240, 240, 250],
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
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0, 2.4000000953674316, 2.4000000953674316, 2.5],
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
				name: `TFT9_JayceSpellMis`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: undefined,
					speedInitial: 2800,
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
						{
							__type: `CastOnHit`,
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
		apiName: `TFT9_Jhin`,
		name: `Jhin`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Jhin.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Deadeye`],
		stats: {
			armor: 14,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 54,
			hp: 504,
			initialMana: 44,
			magicResist: 14,
			mana: 144,
			moveSpeed: 500,
			range: 3,
		},
		basicAttackMissileSpeed: 2600,
		critAttackMissileSpeed: 3000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_JhinSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentAttackDamage': [7.440000057220459, 7.440000057220459, 7.440000057220459, 7.440000057220459],
					'MissingHealthPercentBonus': [0, 0.23999999463558197, 0.3400000035762787, 0.4399999976158142],
					'TooltipIoniaBonus': [25, 25, 25, 25],
					'AimDuration': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
					'FalloffPercent': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'Damage': [0, 60, 90, 135],
				},
				calculations: {
					'{7cd71e4c}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{db2ccd31}`,
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
										variable: `PercentAttackDamage`,
										starValues: [7.440000057220459, 7.440000057220459, 7.440000057220459, 7.440000057220459],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `Damage`,
										starValues: [0, 60, 90, 135],
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
										starValues: [0, 60, 90, 135],
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
		missiles: [
			{
				name: `TFT9_JhinRShotMis`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 5000,
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
					_missileSpeed: 10000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT9_Jinx`,
		name: `Jinx`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Jinx.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Zaun`, `Gunner`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 600,
			initialMana: 0,
			magicResist: 20,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2750,
		critAttackMissileSpeed: 2750,
		passive: undefined,
		spells: [
			{
				name: `TFT9_JinxSpell`,
				castTime: 0.6000000238418579,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 600,
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
							__type: `DestroyOnHit`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'NumberOfRockets': [5, 5, 5, 5],
					'HexRadius': [2, 2, 2, 2],
					'PercentAttackDamage': [0, 1.5, 1.5, 1.600000023841858],
					'AbilityScaleDamage': [20, 10, 15, 25],
					'RocketsPerSimulatedLaunchAttack': [2, 2, 2, 2],
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
										starValues: [0, 1.5, 1.5, 1.600000023841858],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{966831c0}`,
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
				name: `TFT9_JinxRocketAttack`,
				castTime: 0.6000000238418579,
				missile: {
					width: 60,
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
					_missileSpeed: 6000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_KSante`,
		name: `K'Sante`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_KSante.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Bastion`],
		stats: {
			armor: 60,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 0,
			magicResist: 60,
			mana: 60,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KSanteSpell`,
				castTime: 0.4000000059604645,
				missile: undefined,
				variables: {
					'Damage': [0, 250, 400, 1000],
					'StunDuration': [0, 2, 2.5, 10],
					'SecondaryStunDuration': [0, 1, 1.25, 5],
					'CollisionPercent': [0.5, 0.5, 0.5, 0.5],
					'PercentHealthHeal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
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
										starValues: [0, 250, 400, 1000],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{9ce7b15e}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Damage`,
										starValues: [0, 250, 400, 1000],
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
										variable: `PercentHealthHeal`,
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
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT9_KaiSa`,
		name: `Kai'Sa`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_KaiSa.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Challenger`],
		stats: {
			armor: 35,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 850,
			initialMana: 30,
			magicResist: 35,
			mana: 125,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT9_KaisaSpell2`,
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
					behaviors: [],
					type: undefined,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_KaiSaQRightMissile2`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KaiSaQRightMissile3`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KaiSaQRightMissile1`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KaisaSpell`,
				castTime: 0.20000000298023224,
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
					'NumMissiles': [12, 15, 15, 25],
					'BaseDamage': [0, 75, 111, 240],
					'NumTargets': [4, 4, 4, 4],
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
										starValues: [0, 75, 111, 240],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{c9f34916}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: 0.004000000189989805,
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
				uninterruptable: true,
			},
			{
				name: `TFT9_KaisaBasicAttack3`,
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
				name: `TFT9_KaiSaQLeftMissile3`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KaisaQLeftMissile2`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KaiSaQLeftMissile1`,
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
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_Kalista`,
		name: `Kalista`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Kalista.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shadow Isles`, `Challenger`],
		stats: {
			armor: 25,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 650,
			initialMana: 0,
			magicResist: 25,
			mana: 80,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2600,
		critAttackMissileSpeed: 2600,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KalistaSpell`,
				castTime: 0.25,
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
					'Damage': [16, 18, 27, 45],
					'NumSpears': [6, 6, 6, 6],
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
										starValues: [16, 18, 27, 45],
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
				name: `TFT9_KalistaSpellPierce`,
				castTime: 0.10000000149011612,
				missile: {
					width: undefined,
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
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 4000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_KalistaSpellPierceMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
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
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 2000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_Karma`,
		name: `Karma`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Karma.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Invoker`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 700,
			initialMana: 0,
			magicResist: 25,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KarmaSpell`,
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
					'MagicDamage': [0, 170, 255, 420],
					'TooltipIoniaBonus': [20, 20, 20, 20],
					'EmpoweredBursts': [3, 3, 3, 3],
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
										starValues: [0, 170, 255, 420],
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
				name: `TFT9_KarmaSpellMissile`,
				castTime: undefined,
				missile: {
					width: 80,
					travelTime: undefined,
					speedInitial: 1950,
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
					_missileSpeed: 0,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_KarmaSpellEmpowered`,
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
							__type: `CastOnMovementComplete`,
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
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT9_Kassadin`,
		name: `Kassadin`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Kassadin.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Bastion`],
		stats: {
			armor: 45,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 800,
			initialMana: 50,
			magicResist: 45,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KassadinSpell`,
				castTime: 0.25,
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
					'Damage': [100, 135, 200, 300],
					'DisarmDuration': [3, 1.5, 1.75, 2],
					'ShieldAmount': [0, 250, 300, 400],
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
										starValues: [100, 135, 200, 300],
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
										variable: `ShieldAmount`,
										starValues: [0, 250, 300, 400],
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
		apiName: `TFT9_Katarina`,
		name: `Katarina`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Katarina.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Rogue`],
		stats: {
			armor: 40,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 800,
			initialMana: 20,
			magicResist: 40,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KatarinaSpell`,
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
					'Damage': [0, 130, 195, 320],
					'WoundPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
					'WoundDuration': [6, 6, 6, 6],
					'BonusSpellRange': [1, 1, 1, 1],
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
										starValues: [0, 130, 195, 320],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{c9f34916}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: 0.004999999888241291,
									},
									{
										variable: `{a3dca3cb}`,
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
				name: `TFT9_KatarinaSpellArcMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.800000011920929,
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
			{
				name: `TFT9_KatarinaSpellBounceMissile`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.800000011920929,
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
						{
							__type: `CastOnMovementComplete`,
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
				name: `TFT9_KatarinaSpellBlinkTrailMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 5000,
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
		apiName: `TFT9_Kayle`,
		name: `Kayle`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Kayle.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Slayer`],
		stats: {
			armor: 15,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 30,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 0,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 5000,
		critAttackMissileSpeed: 5000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KayleSpell`,
				castTime: undefined,
				missile: {
					width: 70,
					travelTime: undefined,
					speedInitial: 2800,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: false,
					behaviors: [
						{
							__type: `DestroyOnHit`,
						},
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
					'Damage': [0, 35, 50, 75],
					'ShredAmount': [40, 40, 40, 40],
					'FirstAscensionLevel': [6, 6, 6, 6],
					'SecondAscensionLevel': [9, 9, 9, 9],
					'ShredDuration': [3, 3, 3, 3],
					'AscensionDamage': [0, 25, 30, 45],
				},
				calculations: {
					'{851f35f7}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{2f9d5f21}`,
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
										variable: `Damage`,
										starValues: [0, 35, 50, 75],
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
				name: `TFT9_KayleWaveMis`,
				castTime: undefined,
				missile: {
					width: 200,
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
					],
					type: `FixedSpeedMovement`,
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
		apiName: `TFT9_Kled`,
		name: `Kled`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Kled.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Yordle`, `Slayer`],
		stats: {
			armor: 40,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 58,
			hp: 550,
			initialMana: 0,
			magicResist: 40,
			mana: 175,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_KledSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ShieldPercent': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'AttackSpeedPercent': [0.6000000238418579, 0.6499999761581421, 0.699999988079071, 0.75],
					'ExecuteThreshold': [25, 25, 25, 25],
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
					'Shield': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `ShieldPercent`,
										starValues: [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
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
				name: `TFT9_KledExecuteAttack_Mounted`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KledPAttackMounted`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KledPAttack`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_KledExecuteAttack_Dismounted`,
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
		apiName: `TFT9_Lissandra`,
		name: `Lissandra`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Lissandra.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Freljord`, `Invoker`],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 800,
			initialMana: 30,
			magicResist: 40,
			mana: 90,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 2200,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_LissandraSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 160, 240, 400],
					'StunDuration': [2, 2, 2, 2],
					'DebuffDuration': [4, 4, 4, 4],
					'DamageAmp': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
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
										starValues: [0, 160, 240, 400],
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
		apiName: `TFT9_Lux`,
		name: `Lux`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Lux.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Sorcerer`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 750,
			initialMana: 0,
			magicResist: 30,
			mana: 40,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1600,
		critAttackMissileSpeed: 1600,
		passive: undefined,
		spells: [
			{
				name: `TFT9_LuxSpell`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 1600,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'Duration': [3, 3, 3, 3],
					'Damage': [0, 735, 1100, 2750],
					'Shred': [0, 15, 15, 40],
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
										starValues: [0, 735, 1100, 2750],
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
		apiName: `TFT9_Malzahar`,
		name: `Malzahar`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Malzahar.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Sorcerer`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_MalzaharSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 205, 310, 460],
					'PercentShieldDestruction': [0.5, 0.5, 0.5, 0.5],
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
										starValues: [0, 205, 310, 460],
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
				name: `TFT9_MalzaharSpellMis`,
				castTime: 6,
				missile: {
					width: 85,
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
		apiName: `TFT9_Maokai`,
		name: `Maokai`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Maokai.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shadow Isles`, `Bastion`],
		stats: {
			armor: 40,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 700,
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
				name: `TFT9_MaokaiSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'HealAmount': [200, 220, 260, 300],
					'BonusManaOnCast': [5, 5, 5, 5],
					'PassiveHexRange': [10, 10, 10, 10],
				},
				calculations: {
					'Heal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `HealAmount`,
										starValues: [200, 220, 260, 300],
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
				name: `TFT9_MaokaiPAttack`,
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
		apiName: `TFT9_Nasus`,
		name: `Nasus`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Nasus.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Juggernaut`],
		stats: {
			armor: 60,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 70,
			magicResist: 60,
			mana: 150,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_NasusSpell`,
				castTime: 0.20000000298023224,
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
					'PercentHealthSteal': [0.10000000149011612, 0.05000000074505806, 0.05000000074505806, 0.15000000596046448],
					'PercentADSteal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'FlatResistanceSteal': [3, 5, 5, 30],
					'Duration': [8, 8, 8, 8],
					'EmpoweredDamagePct': [3.5, 3.5, 3.5, 7],
					'NumEnemies': [3, 4, 5, 9],
				},
				calculations: {
					'Duration': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `Duration`,
										starValues: [8, 8, 8, 8],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'EmpoweredDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `{c0db585b}`,
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
				name: `TFT9_NasusSpellAttack`,
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
				name: `TFT9_NasusSpellVFXMissile`,
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
					_missileSpeed: 1000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_NoxianFlag`,
		name: `Noxian Banner`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_NoxianFlag.TFT_Set9.dds`,
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
		spells: [],
		missiles: [],
	},
	{
		apiName: `TFT9_Orianna`,
		name: `Orianna`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Orianna.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Piltover`, `Sorcerer`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 500,
			initialMana: 50,
			magicResist: 15,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1450,
		critAttackMissileSpeed: 1450,
		passive: undefined,
		spells: [
			{
				name: `TFT9_OriannaSpell`,
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
							__type: `DestroyOnMovementComplete`,
						},
					],
					type: `FixedSpeedMovement`,
					_missileSpeed: 0,
				},
				variables: {
					'ShieldHealth': [200, 225, 250, 325],
					'ShieldDuration': [4, 4, 4, 4],
					'MagicDamage': [50, 260, 390, 585],
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
										starValues: [50, 260, 390, 585],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'Shielding': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{c3360f16}`,
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
		apiName: `TFT9_Poppy`,
		name: `Poppy`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Poppy.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Yordle`, `Demacia`, `Bastion`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 600,
			initialMana: 90,
			magicResist: 40,
			mana: 150,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_PoppySpell`,
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
					'ShieldAmount': [120, 310, 330, 350],
					'ShieldDuration': [3, 3, 3, 3],
					'StunDuration': [0.25, 0.25, 0.25, 0.25],
					'CollisionDamagePercent': [15, 15, 15, 15],
					'HexRadius': [0, 0, 0, 0],
					'Damage': [0, 140, 210, 315],
					'PercentHealthDamage': [33, 33, 33, 33],
				},
				calculations: {
					'ShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldAmount`,
										starValues: [120, 310, 330, 350],
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
										variable: `Damage`,
										starValues: [0, 140, 210, 315],
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
		apiName: `TFT9_RekSai`,
		name: `Rek'Sai`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_RekSai.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Bruiser`],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 800,
			initialMana: 30,
			magicResist: 40,
			mana: 75,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RekSaiSpell`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 4000,
					speedMin: undefined,
					speedMax: undefined,
					acceleration: undefined,
					startDelay: undefined,
					tracksTarget: true,
					behaviors: [],
					type: undefined,
				},
				variables: {
					'PercentOfAD': [2.5, 3.1500000953674316, 3.1500000953674316, 3.1500000953674316],
					'PercentMaxHealthHeal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'HealthThreshold': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
					'EmpoweredDamageAmp': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{11a96dee}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{728ad1db}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `HealthThreshold`,
										starValues: [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
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
										variable: `{8b4a02cc}`,
										starValues: undefined,
										stat: `HP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{435fa3bd}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{8b4a02cc}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{dfe8af3d}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{53539a52}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{da1a0b4e}': {
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
					'{ae88ed52}': {
						asPercent: true,
						parts: [
							{
								operator: `sum`,
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
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT9_Renekton`,
		name: `Renekton`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Renekton.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Bruiser`],
		stats: {
			armor: 45,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 650,
			initialMana: 50,
			magicResist: 45,
			mana: 110,
			moveSpeed: 550,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RenektonSpell`,
				castTime: 0.6000000238418579,
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
					'Damage': [25, 180, 270, 400],
					'InitialHeal': [170, 220, 270, 320],
					'KickerHeal': [30, 30, 30, 30],
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
										variable: `Damage`,
										starValues: [25, 180, 270, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{c31747a0}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `InitialHeal`,
										starValues: [170, 220, 270, 320],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{9db4f5c9}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{df2816be}`,
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
		apiName: `TFT9_RiftHerald`,
		name: `Rift Herald`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_RiftHerald.TFT_Set9.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 100,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 250,
			hp: 1050,
			initialMana: 80,
			magicResist: 100,
			mana: 120,
			moveSpeed: 550,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RiftHeraldSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MagicDamage': [240, 240, 240, 240],
					'StunDuration': [2, 2, 2, 2],
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
										starValues: [240, 240, 240, 240],
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
		apiName: `TFT9_Ryze`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 40,
			magicResist: 30,
			mana: 999,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellZaun`,
				castTime: 1,
				missile: undefined,
				variables: {
					'NumPortals': [1, 5, 8, 25],
					'Damage': [100, 110, 200, 2006],
					'DebuffDuration': [6, 6, 6, 6],
					'SplashDamagePercent': [0.5, 0.5, 0.5, 0.5],
					'Breakpoint1Gold': [25, 25, 25, 25],
					'Breakpoint2Gold': [50, 50, 50, 50],
					'Breakpoint1BonusPortals': [1, 1, 1, 1],
					'Breakpoint2BonusPortalsPerGold': [1, 1, 1, 1],
					'GoldPerPortal': [20, 20, 20, 20],
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
										starValues: [100, 110, 200, 2006],
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
				name: `TFT9_RyzeZaunBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellZaunBolt`,
				castTime: 0.25,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 3300,
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
				name: `TFT9_RyzeZaunCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellZaunAxe`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeSpellZaunBulletsExtra`,
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
					_missileSpeed: 3000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeSpellZaunRocket`,
				castTime: 0.25,
				missile: {
					width: undefined,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeSpellZaunBullets`,
				castTime: 0.25,
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
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeZaunBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeBandleCity`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 30,
			hp: 1111,
			initialMana: 30,
			magicResist: 30,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellBandleCity`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'BonusMana': [0, 25, 70, 200],
					'FiveCostSummonOdds': [0, 0.30000001192092896, 0.699999988079071, 1],
					'FourCostSummonOdds': [0, 0.4000000059604645, 0.30000001192092896, 0],
					'BaseStarLevelSummon': [0, 1, 1, 3],
				},
				calculations: {
					'{1c2ec27a}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{43012963}`,
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
				name: `TFT9_RyzeBandleCityBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeBandleCityCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeBandleCityBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeDemacia`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 50,
			magicResist: 30,
			mana: 110,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellDemacia`,
				castTime: 1,
				missile: undefined,
				variables: {
					'Shield': [300, 600, 900, 9999],
					'Heal': [0, 250, 375, 9999],
					'Damage': [125, 300, 450, 999],
					'PortalDuration': [2, 2, 2, 5],
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
										starValues: [0, 250, 375, 9999],
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
										starValues: [300, 600, 900, 9999],
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
										starValues: [125, 300, 450, 999],
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
				name: `TFT9_RyzeDemaciaCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeDemaciaBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeDemaciaBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeFreljord`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 30,
			magicResist: 30,
			mana: 65,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellFreljord`,
				castTime: 1,
				missile: undefined,
				variables: {
					'Damage': [0, 300, 450, 3500],
					'PortalDuration': [2, 2, 2, 2],
					'AttackSpeedSlow': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
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
										starValues: [0, 300, 450, 3500],
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
				name: `TFT9_RyzeFreljordBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeFreljordCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeFreljordBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeIonia`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 50,
			magicResist: 30,
			mana: 125,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellIonia`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'NumUnits': [5, 5, 7, 20],
					'BonusAttackSpeed': [0.30000001192092896, 0.30000001192092896, 0.4000000059604645, 3],
					'Heal': [200, 400, 500, 3000],
					'BuffDuration': [6, 6, 6, 6],
					'StunDuration': [1.5, 2, 2.5, 20],
					'Damage': [150, 175, 275, 1500],
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
										starValues: [200, 400, 500, 3000],
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
										starValues: [150, 175, 275, 1500],
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
				name: `TFT9_RyzeIoniaBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeIoniaCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeIoniaBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeNoxus`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 70,
			magicResist: 30,
			mana: 120,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellNoxus`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'NumItems': [2, 3, 4, 10],
					'NumAxes': [3, 4, 5, 12],
					'MagicDamage': [200, 150, 225, 2000],
					'DamageAmp': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
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
										starValues: [200, 150, 225, 2000],
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
				name: `TFT9_RyzeNoxusCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellNoxus_AxeMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 1,
					speedInitial: 1700,
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
			{
				name: `TFT9_RyzeNoxusBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeNoxusBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellNoxus_ItemMis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 1,
					speedInitial: 1700,
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
		apiName: `TFT9_RyzePiltover`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 30,
			magicResist: 30,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellPiltover`,
				castTime: 0.8999999761581421,
				missile: undefined,
				variables: {
					'Damage': [0.20000000298023224, 275, 425, 3000],
					'PercentSharedDamage': [0.15000000596046448, 0.15000000596046448, 0.30000001192092896, 5],
					'AreaDuration': [4, 3, 4, 8],
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
										starValues: [0.20000000298023224, 275, 425, 3000],
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
				name: `TFT9_RyzePiltoverCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellPiltover_Grenade`,
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
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzePiltoverBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzePiltoverBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeShadowIsles`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 40,
			magicResist: 30,
			mana: 80,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellShadowIsles`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'PercentHealthOnReturn': [0, 0.4000000059604645, 0.800000011920929, 3],
					'NumAllies': [1, 1, 1, 10],
				},
				calculations: {
					'{684e3a7b}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{aee31a83}`,
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
				name: `TFT9_RyzeShadowIslesBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeShadowIslesCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeShadowIslesBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeShurima`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 90,
			magicResist: 30,
			mana: 150,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellShurima`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'Damage': [0, 175, 275, 2500],
					'KnockupDuration': [0.75, 1, 1.25, 3],
					'NumberOfLootRolls': [3, 3, 3, 3],
					'ChanceToSpawnGold': [0.25, 0.20000000298023224, 0.3499999940395355, 1],
					'ChanceToSpawnItem': [0.25, 0.019999999552965164, 0.05000000074505806, 0.30000001192092896],
					'MinGold': [1, 1, 1, 1],
					'MaxGold': [4, 4, 4, 4],
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
										starValues: [0, 175, 275, 2500],
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
				name: `TFT9_RyzeShurimaBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeShurimaCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellShurimaCoinRise`,
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
							__type: `CastOnMovementComplete`,
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
			{
				name: `TFT9_RyzeSpellShurimaCoinMis`,
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
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeShurimaBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeTargon`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 30,
			magicResist: 30,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellTargon`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PercentMaxHealth': [0.20000000298023224, 0.18000000715255737, 0.30000001192092896, 1],
					'DamageHexRadius': [2, 2, 2, 4],
					'KnockUpRadius': [1, 1, 1, 2],
					'StunDuration': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'ThreeStarStarfallDamage': [0, 0, 0, 999],
				},
				calculations: {
					'{95c1122d}': {
						asPercent: true,
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
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT9_RyzeTargonBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellTargon_MeteorMis`,
				castTime: undefined,
				missile: {
					width: 1,
					travelTime: undefined,
					speedInitial: 145,
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
				name: `TFT9_RyzeTargonCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeTargonBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_RyzeZaun`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 40,
			magicResist: 30,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellZaun`,
				castTime: 1,
				missile: undefined,
				variables: {
					'NumPortals': [1, 5, 8, 25],
					'Damage': [100, 110, 200, 2006],
					'DebuffDuration': [6, 6, 6, 6],
					'SplashDamagePercent': [0.5, 0.5, 0.5, 0.5],
					'Breakpoint1Gold': [25, 25, 25, 25],
					'Breakpoint2Gold': [50, 50, 50, 50],
					'Breakpoint1BonusPortals': [1, 1, 1, 1],
					'Breakpoint2BonusPortalsPerGold': [1, 1, 1, 1],
					'GoldPerPortal': [20, 20, 20, 20],
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
										starValues: [100, 110, 200, 2006],
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
				name: `TFT9_RyzeZaunBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellZaunBolt`,
				castTime: 0.25,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 3300,
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
				name: `TFT9_RyzeZaunCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
				name: `TFT9_RyzeSpellZaunAxe`,
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
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeSpellZaunBulletsExtra`,
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
					_missileSpeed: 3000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeSpellZaunRocket`,
				castTime: 0.25,
				missile: {
					width: undefined,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeSpellZaunBullets`,
				castTime: 0.25,
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
					type: `FixedSpeedMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_RyzeZaunBasicAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2400,
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
		apiName: `TFT9_Samira`,
		name: `Samira`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Samira.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Challenger`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 500,
			initialMana: 0,
			magicResist: 15,
			mana: 30,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2800,
		critAttackMissileSpeed: 2800,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SamiraSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ADPercent': [2.0999999046325684, 2, 2, 2.0999999046325684],
					'ArmorShred': [0, 10, 15, 20],
				},
				calculations: {
					'{84ba2311}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{826ded1e}`,
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
								operator: `scale`,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [2.0999999046325684, 2, 2, 2.0999999046325684],
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
				name: `TFT9_SamiraQGun`,
				castTime: 0.25,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2600,
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
						{
							__type: `DestroyOnHit`,
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
		apiName: `TFT9_Sejuani`,
		name: `Sejuani`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Sejuani.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Freljord`, `Bruiser`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 60,
			magicResist: 60,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SejuaniSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Shield': [0, 600, 700, 2000],
					'Damage': [0, 160, 240, 1200],
					'ShieldDuration': [4, 4, 4, 4],
					'PercentHealth': [0.014999999664723873, 0.014999999664723873, 0.014999999664723873, 0.10000000149011612],
					'ChillDuration': [4, 4, 4, 4],
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
										starValues: [0, 600, 700, 2000],
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
										starValues: [0, 160, 240, 1200],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{9169335e}': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentHealth`,
										starValues: [0.014999999664723873, 0.014999999664723873, 0.014999999664723873, 0.10000000149011612],
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
		apiName: `TFT9_Senna`,
		name: `Senna`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Senna.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shadow Isles`, `Gunner`, `Redeemer`],
		stats: {
			armor: 30,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 900,
			initialMana: 75,
			magicResist: 30,
			mana: 150,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 8000,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SennaSpell`,
				castTime: undefined,
				missile: {
					width: 300,
					travelTime: undefined,
					speedInitial: 20000,
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
					'ADRatio': [0, 2.3499999046325684, 2.5, 20],
					'ShieldAmount': [0, 200, 275, 4000],
					'ShieldDuration': [4, 4, 4, 15],
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
										starValues: [0, 2.3499999046325684, 2.5, 20],
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
										starValues: [0, 200, 275, 4000],
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
				name: `TFT9_SennaR_Ally`,
				castTime: undefined,
				missile: {
					width: 1200,
					travelTime: undefined,
					speedInitial: 20000,
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
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_SennaCritAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 8000,
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
		apiName: `TFT9_Sett`,
		name: `Sett`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Sett.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Juggernaut`],
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
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 20,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SettSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Damage': [0, 180, 270, 420],
					'StunDuration': [1, 1.25, 1.5, 2],
					'SoloBonus': [0.5, 0.5, 0.5, 0.5],
					'TooltipIoniaBonus': [200, 200, 200, 200],
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
										starValues: [0, 180, 270, 420],
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
				name: `TFT9_SettQ`,
				castTime: 0.3499999940395355,
				missile: undefined,
				variables: {
					'BaseResistAmount': [15, 50, 60, 80],
					'ADRatio': [0, 2, 2, 2],
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
										starValues: [0, 2, 2, 2],
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
	},
	{
		apiName: `TFT9_Shen`,
		name: `Shen`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Shen.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Bastion`, `Invoker`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 70,
			magicResist: 60,
			mana: 150,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_ShenSpell`,
				castTime: undefined,
				missile: {
					width: 120,
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
					_missileSpeed: 2000,
				},
				variables: {
					'MagicDamage': [0, 240, 360, 2500],
					'AllyShieldAmount': [0, 225, 275, 1500],
					'SelfShieldAmount': [0, 350, 450, 2000],
					'ShieldDuration': [4, 4, 4, 4],
					'ChillDuration': [3, 3, 3, 3],
					'ChillAmount': [40, 40, 40, 40],
					'TooltipIoniaBonus': [9, 9, 9, 9],
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
										starValues: [0, 240, 360, 2500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{ee9eae65}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{f82b0e8a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{0546af49}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{0ecc6c1a}`,
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
				name: `TFT9_ShenSpellMissile`,
				castTime: undefined,
				missile: {
					width: 120,
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
					_missileSpeed: 2000,
				},
				variables: {
					'MagicDamage': [0, 250, 450, 800],
					'AllyShieldAmount': [0, 250, 375, 600],
					'SelfShieldAmount': [0, 350, 550, 800],
					'ShieldDuration': [4, 4, 4, 4],
					'ChillDuration': [3, 3, 3, 3],
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
										starValues: [0, 250, 450, 800],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{ee9eae65}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{f82b0e8a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{0546af49}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{0ecc6c1a}`,
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
		apiName: `TFT9_Sion`,
		name: `Sion`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Sion.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Bruiser`],
		stats: {
			armor: 60,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 1000,
			initialMana: 70,
			magicResist: 60,
			mana: 160,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SionSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ADPercent': [0, 2.25, 2.3499999046325684, 5],
					'StunDuration': [0, 1.25, 1.5, 15],
					'ReviveHealthPct': [1, 1, 1, 1],
					'DecayHealthPct': [0, 0.20000000298023224, 0.12999999523162842, 0],
					'AttackSpeedPct': [1.5, 1.5, 1.5, 10],
					'MoveSpeed': [400, 400, 400, 800],
					'DashRangeBonus': [3, 3, 3, 3],
					'ThreeStarBonusAD': [0, 0, 0, 4],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [0, 2.25, 2.3499999046325684, 5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{9498a61c}': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{380996ff}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{3b26e559}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: 0.004999999888241291,
									},
									{
										variable: `{9a14d685}`,
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
				name: `TFT9_SionPassive_BasicAttack`,
				castTime: 0.3666999936103821,
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
				name: `TFT9_SionPassive_BasicAttack2`,
				castTime: 0.3666999936103821,
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
				name: `TFT9_SionPassive_CritAttack`,
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
		apiName: `TFT9_Sona`,
		name: `Sona`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Sona.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Multicaster`],
		stats: {
			armor: 25,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 700,
			initialMana: 40,
			magicResist: 25,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SonaSpell`,
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
					],
					type: `AcceleratingMovement`,
					_missileSpeed: 2000,
				},
				variables: {
					'MagicDamage': [0, 105, 155, 255],
					'AttackSpeed': [0, 35, 40, 45],
					'Duration': [5, 5, 5, 5],
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
										starValues: [0, 105, 155, 255],
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
				name: `TFT9_SonaSpell_MC`,
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
					],
					type: `AcceleratingMovement`,
					_missileSpeed: 2000,
				},
				variables: {
					'MagicDamage': [0, 50, 75, 125],
					'AttackSpeed': [0, 15, 22.5, 35],
					'Duration': [5, 5, 5, 5],
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
				},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [],
	},
	{
		apiName: `TFT9_Soraka`,
		name: `Soraka`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Soraka.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Targon`, `Invoker`],
		stats: {
			armor: 25,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 700,
			initialMana: 30,
			magicResist: 25,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SorakaSpell`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.10000000149011612,
					speedInitial: 0,
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
					'Heal': [0, 170, 190, 220],
					'EmpoweredHealPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
					'EmpoweredHealThreshold': [0.5, 0.5, 0.5, 0.5],
					'MagicDamage': [60, 125, 185, 290],
					'Duration': [5, 5, 5, 5],
					'NumberOfStars': [5, 5, 5, 5],
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
										starValues: [0, 170, 190, 220],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{f94619a5}': {
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
										variable: `{a3cc5b24}`,
										starValues: undefined,
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
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamage`,
										starValues: [60, 125, 185, 290],
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
				name: `TFT9_SorakaSpell_Star`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.33000001311302185,
					speedInitial: 0,
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
					'Heal': [0, 200, 250, 300],
					'EmpoweredHealPercent': [0.5, 0.5, 0.5, 0.5],
					'EmpoweredHealThreshold': [0.5, 0.5, 0.5, 0.5],
					'MagicDamage': [60, 240, 360, 560],
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
										starValues: [0, 200, 250, 300],
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
										starValues: [60, 240, 360, 560],
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
		apiName: `TFT9_AscendedSunDisc`,
		name: `Sun Disc`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_AscendedSunDisc.TFT_Set9.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 50,
			attackSpeed: 0.5,
			critChance: null,
			critMultiplier: 1.399999976158142,
			damage: 0,
			hp: undefined,
			initialMana: 0,
			magicResist: 50,
			mana: 0,
			moveSpeed: 500,
			range: 16,
		},
		basicAttackMissileSpeed: 1200,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [],
		missiles: [
			{
				name: `TFT9_AscendedSunDiscBasicAttack2`,
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
				name: `TFT9_AscendedSunDiscTooltip`,
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
		apiName: `TFT9_Swain`,
		name: `Swain`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Swain.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Strategist`, `Sorcerer`],
		stats: {
			armor: 50,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 800,
			initialMana: 20,
			magicResist: 50,
			mana: 70,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 1800,
		critAttackMissileSpeed: 1800,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SwainSpell`,
				castTime: 0.6600000262260437,
				missile: undefined,
				variables: {
					'BuffDuration': [5, 5, 5, 5],
					'DamagePerTick': [0, 35, 50, 75],
					'BonusMaxHealth': [200, 375, 450, 650],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DamagePerTick`,
										starValues: [0, 35, 50, 75],
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
										variable: `{f780b9d8}`,
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
		apiName: `TFT9_THex`,
		name: `T-Hex`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_THex.TFT_Set9.tex`,
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
			damage: 40,
			hp: undefined,
			initialMana: 20,
			magicResist: 25,
			mana: 80,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 2750,
		critAttackMissileSpeed: 2750,
		passive: undefined,
		spells: [
			{
				name: `TFT9_THexSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'LingerDuration': [1.5, 1.5, 1.5, 1.5],
					'FlameBreathDuration': [3, 3, 3, 3],
					'FlameBreathDamage': [325, 325, 325, 325],
				},
				calculations: {
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
				name: `TFT9_THexSpell_NoPower`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'PowerRequirement': [20, 20, 20, 20],
				},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_THexSpellBreath`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_THexBasicAttack2`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2750,
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
		apiName: `TFT9_Taliyah`,
		name: `Taliyah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Taliyah.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Multicaster`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 550,
			initialMana: 0,
			magicResist: 20,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2100,
		critAttackMissileSpeed: 2200,
		passive: undefined,
		spells: [
			{
				name: `TFT9_TaliyahSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'KnockupDuration': [1, 2, 2, 2],
					'SpellDamage': [100, 160, 240, 370],
					'BoulderDamage': [100, 125, 190, 290],
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
										starValues: [100, 160, 240, 370],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{7d6d0a3e}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{4dd34fff}`,
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
			{
				name: `TFT9_TaliyahSpell_MC`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'KnockupDuration': [1, 1.5, 1.75, 2.25],
					'Damage': [0, 200, 300, 450],
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
				},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT9_TaliyahBigRock`,
				castTime: undefined,
				missile: {
					width: 75,
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
			damage: 50,
			hp: 700,
			initialMana: 0,
			magicResist: 40,
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
		apiName: `TFT9_Taric`,
		name: `Taric`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Taric.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Targon`, `Bastion`, `Sorcerer`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 800,
			initialMana: 0,
			magicResist: 50,
			mana: 65,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_TaricSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'ShieldAmount': [0, 550, 650, 750],
					'Duration': [4, 4, 4, 4],
				},
				calculations: {
					'ShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShieldAmount`,
										starValues: [0, 550, 650, 750],
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
		apiName: `TFT9_Teemo`,
		name: `Teemo`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Teemo.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Yordle`, `Strategist`, `Multicaster`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 500,
			initialMana: 0,
			magicResist: 20,
			mana: 50,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1300,
		critAttackMissileSpeed: 1300,
		passive: undefined,
		spells: [
			{
				name: `TFT9_TeemoSpell`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: 0.75,
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
					'Damage': [0, 260, 390, 585],
					'DetonationDelay': [0.5, 0.5, 0.5, 0.5],
					'Duration': [3, 3, 3, 3],
					'TickRate': [0.5, 0.5, 0.5, 0.5],
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
										variable: `Damage`,
										starValues: [0, 260, 390, 585],
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
				name: `TFT9_TeemoSpell_MC`,
				castTime: 0.5,
				missile: {
					width: undefined,
					travelTime: 0.75,
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
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
		],
		missiles: [
			{
				name: `TFT9_TeemoSpell_MC_Bounce`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.75,
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
			{
				name: `TFT9_TeemoBasicAttack2`,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_Tristana`,
		name: `Tristana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Tristana.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Yordle`, `Gunner`],
		stats: {
			armor: 15,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 400,
			initialMana: 0,
			magicResist: 15,
			mana: 40,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2250,
		critAttackMissileSpeed: 2250,
		passive: undefined,
		spells: [
			{
				name: `TFT9_TristanaSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'AttackSpeed': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
					'Duration': [4, 4, 4, 4],
					'PercentAttackDamage': [0.6000000238418579, 0.6000000238418579, 0.6000000238418579, 0.6000000238418579],
					'EmpoweredBonus': [1, 1, 1, 1],
					'ExplosionPercent': [0.5, 0.5, 0.5, 0.5],
					'NumberOfAttacks': [10, 10, 10, 10],
					'HexRadius': [1, 1, 1, 1],
				},
				calculations: {
					'ExplosionDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `{1d65f6f1}`,
										starValues: undefined,
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
								operator: undefined,
								subparts: [
									{
										variable: `PercentAttackDamage`,
										starValues: [0.6000000238418579, 0.6000000238418579, 0.6000000238418579, 0.6000000238418579],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{0692ef0e}': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `{3a9475c8}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'BonusAttackSpeed': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AttackSpeed`,
										starValues: [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
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
				name: `TFT9_TristanaRicochet`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.75,
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
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_Tristana4StarSpellAttack`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 2250,
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
		apiName: `TFT9_Urgot`,
		name: `Urgot`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Urgot.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Zaun`, `Deadeye`],
		stats: {
			armor: 60,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 1000,
			initialMana: 40,
			magicResist: 60,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT9_UrgotSpell`,
				castTime: 0.6000000238418579,
				missile: undefined,
				variables: {
					'Cooldown': [4, 4, 4, 1],
					'PercentOfAttackDamage': [2.200000047683716, 2.200000047683716, 2.200000047683716, 2.200000047683716],
					'BaseDamage': [100, 40, 60, 500],
					'StunDuration': [1.5, 1.5, 1.5, 1.5],
					'ShieldAmount': [0, 350, 450, 1200],
					'ShieldDuration': [5, 5, 5, 5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `{97d115c2}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [100, 40, 60, 500],
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
										starValues: [0, 350, 450, 1200],
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
		apiName: `TFT9_VelKoz`,
		name: `Vel'Koz`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_VelKoz.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Multicaster`, `Sorcerer`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 700,
			initialMana: 0,
			magicResist: 30,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 8000,
		critAttackMissileSpeed: 8000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_VelKozSpell`,
				castTime: undefined,
				missile: {
					width: 50,
					travelTime: undefined,
					speedInitial: 1300,
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
				variables: {
					'MagicDamage': [0, 230, 345, 560],
					'FalloffPercent': [0.5, 0.5, 0.5, 0.5],
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
										starValues: [0, 230, 345, 560],
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
				name: `TFT9_VelKozSpellMis`,
				castTime: undefined,
				missile: {
					width: 50,
					travelTime: undefined,
					speedInitial: 1300,
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
			{
				name: `TFT9_VelKozSpellSplit`,
				castTime: undefined,
				missile: {
					width: 60,
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
			{
				name: `TFT9_VelKozSpellSplit_MC`,
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
				name: `TFT9_VelKozSpell_MC`,
				castTime: undefined,
				missile: {
					width: 50,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_Vi`,
		name: `Vi`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Vi.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Piltover`, `Bruiser`],
		stats: {
			armor: 50,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 800,
			initialMana: 0,
			magicResist: 50,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_ViSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ShieldAmount': [0, 325, 350, 400],
					'ShieldDuration': [4, 4, 4, 4],
					'ArmorShredPercent': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'ArmorShredDuration': [4, 4, 4, 4],
					'ADPercent': [2, 2, 2, 2],
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
										starValues: [2, 2, 2, 2],
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
										starValues: [0, 325, 350, 400],
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
				name: `TFT9_Vi_Spell_ThirdCast`,
				castTime: 0.699999988079071,
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
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT9_Viego`,
		name: `Viego`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Viego.TFT_Set9.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shadow Isles`, `Rogue`],
		stats: {
			armor: 30,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 600,
			initialMana: 0,
			magicResist: 30,
			mana: 50,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 20,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_ViegoSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'StabDamage': [0, 110, 165, 250],
					'Duration': [60, 60, 60, 60],
					'StackingDamage': [0, 20, 30, 45],
				},
				calculations: {
					'{da3e5d67}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `StabDamage`,
										starValues: [0, 110, 165, 250],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{d4eb666b}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{ab1d5674}`,
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
		apiName: `TFT9_VoidRemora`,
		name: `Void Remora`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_VoidRemora.TFT_Set9.tex`,
		cost: undefined,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: true,
		traits: [],
		stats: {
			armor: 40,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 400,
			initialMana: 50,
			magicResist: 40,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_VoidRemoraSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [2, 2, 2, 2],
					'Shield': [200, 200, 200, 200],
					'Damage': [125, 125, 125, 125],
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
										starValues: [200, 200, 200, 200],
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
										starValues: [125, 125, 125, 125],
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
		apiName: `TFT9_Warwick`,
		name: `Warwick`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Warwick.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Zaun`, `Juggernaut`, `Challenger`],
		stats: {
			armor: 50,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 800,
			initialMana: 40,
			magicResist: 50,
			mana: 90,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT9_WarwickSpell`,
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
					behaviors: [],
					type: undefined,
				},
				variables: {
					'HealAmount': [35, 30, 35, 40],
					'Duration': [2.5, 2.5, 2.5, 2.5],
					'StunDuration': [0, 1.25, 1.5, 2],
					'IncreaseHealRatio': [0.5, 0.5, 0.5, 0.5],
				},
				calculations: {
					'HealAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `HealAmount`,
										starValues: [35, 30, 35, 40],
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
		apiName: `TFT9_Yasuo`,
		name: `Yasuo`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Yasuo.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Challenger`],
		stats: {
			armor: 50,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 1000,
			initialMana: 50,
			magicResist: 50,
			mana: 110,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT9_YasuoSpell`,
				castTime: undefined,
				missile: {
					width: 150,
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
					type: `FixedSpeedMovement`,
				},
				variables: {
					'KnockupDuration': [0, 1, 1, 1],
					'ADPercent': [0, 5, 5, 15],
					'BonusDamage': [0, 55, 85, 300],
					'HexRange': [3, 3, 3, 3],
					'AttackCount': [3, 3, 3, 3],
					'TornadoKnockupDuration': [0.5, 0.5, 0.5, 0.5],
					'TooltipIoniaBonus': [15, 15, 15, 15],
					'AOEADPercent': [2, 3, 3, 7.5],
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
										starValues: [0, 5, 5, 15],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BonusDamage`,
										starValues: [0, 55, 85, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{cdbc7d90}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{f9bc7f3e}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{c498838d}': {
						asPercent: false,
						parts: [
							{
								operator: `identity`,
								subparts: [
									{
										variable: `{9b1e8f37}`,
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
		],
		missiles: [],
	},
	{
		apiName: `TFT9_Zed`,
		name: `Zed`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Zed.TFT_Set9.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Rogue`, `Slayer`],
		stats: {
			armor: 35,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 600,
			initialMana: 0,
			magicResist: 35,
			mana: 70,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT9_ZedSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'DamagePercent': [0, 1.399999976158142, 1.399999976158142, 1.5],
					'ShadowRange': [2, 2, 2, 2],
					'BaseDamage': [0, 25, 40, 50],
					'TooltipIoniaBonus': [15, 15, 15, 15],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `DamagePercent`,
										starValues: [0, 1.399999976158142, 1.399999976158142, 1.5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 25, 40, 50],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{c498838d}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: 0.004999999888241291,
									},
									{
										variable: `{73569f2e}`,
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
				name: `TFT9_ZedSpellShadowMis`,
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
		apiName: `TFT9_Zeri`,
		name: `Zeri`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Zeri.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Zaun`, `Gunner`],
		stats: {
			armor: 25,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 750,
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
				name: `TFT9_ZeriSpell`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'NumBullets': [3, 3, 3, 3],
					'ADRatioPerBullet': [0.3400000035762787, 0.3400000035762787, 0.3400000035762787, 0.3400000035762787],
					'OverchargeDuration': [9, 8, 8, 15],
					'OverchargeChainRatio': [0.4000000059604645, 0.44999998807907104, 0.44999998807907104, 1],
					'ExecuteThresholdBase': [0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066],
					'EnemyCount': [3, 3, 3, 5],
					'ExecuteThresholdAP': [0.03999999910593033, 0.03999999910593033, 0.03999999910593033, 0.03999999910593033],
				},
				calculations: {
					'{964dcfb2}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{35d51666}`,
										starValues: undefined,
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'{f8f787a4}': {
						asPercent: true,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{96f2d0a6}`,
										starValues: undefined,
										stat: undefined,
										ratio: undefined,
									},
									{
										variable: `{5cfd7c1a}`,
										starValues: undefined,
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{9d82943b}': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{78646acf}`,
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
		missiles: [
			{
				name: `TFT9_ZeriZap`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: undefined,
					speedInitial: 8000,
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
				name: `TFT9_ZeriRMis`,
				castTime: undefined,
				missile: {
					width: 50,
					travelTime: undefined,
					speedInitial: 3500,
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
							__type: `DestroyOnHit`,
						},
						{
							mActions: [
								{
									__type: `AttackEvents`,
								},
								{
									'{9aa2fc4c}': true,
									__type: `Cast`,
								},
							],
							__type: `TriggerOnHit`,
						},
					],
					type: `FixedSpeedMovement`,
				},
				variables: {
					'BaseDamage': [-5, 5, 15, 25],
					'CDRefund': [1.5, 1.5, 1.5, 1.5],
					'CDRefundUrf': [0.5, 0.5, 0.5, 0.5],
					'AttackSpeed': [0.30000001192092896, 0.44999998807907104, 0.6000000238418579, 0.75],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `identity`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [-5, 5, 15, 25],
										stat: undefined,
										ratio: undefined,
									},
								],
							},
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
							{
								operator: `scale`,
								subparts: [
									{
										variable: undefined,
										starValues: undefined,
										stat: undefined,
										ratio: 0.15000000596046448,
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
				name: `TFT9_ZeriQMis`,
				castTime: undefined,
				missile: {
					width: 50,
					travelTime: undefined,
					speedInitial: 3500,
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
							mActions: [
								{
									__type: `AttackEvents`,
								},
								{
									'{9aa2fc4c}': true,
									__type: `Cast`,
								},
							],
							__type: `TriggerOnHit`,
						},
						{
							__type: `DestroyOnHit`,
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
]

export const otherUnits: ChampionData[] = []

export const abilities: Record<string, AbilityData> = {
	'TFT9_Aatrox': {
		desc: `Transform for @Duration@ seconds, gaining <TFTBonus>@ModifiedOmnivamp@ (%i:scaleAP%)</TFTBonus> <TFTKeyword>Omnivamp</TFTKeyword> and converting @ADPerASConversion*100@% of bonus Attack Speed to Attack Damage. While transformed, attacks deal <physicalDamage>@GreatswordDamage@ (%i:scaleAD%)</physicalDamage> physical damage in an area.<br><br><rules><tftbold>Omnivamp:</tftbold> Heal for percentage of damage dealt</rules>`,
		icon: `ASSETS/Characters/TFT9_Aatrox/HUD/Icons2D/TFT9_Aatrox_R.TFT_Set9.dds`,
		name: `World Ender`,
		variables: {
			'Duration': [10, 12, 12, 30],
			'Omnivamp': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
			'GreatswordADRatio': [0, 2.75, 2.75, 25],
			'ADPerASConversion': [0.800000011920929, 0.800000011920929, 0.800000011920929, 0.800000011920929],
			'MovementSpeed': [700, 700, 700, 700],
		},
	},
	'TFT9_Ahri': {
		desc: `Steal essence from enemies around the current target, dealing <magicDamage>@ModifiedEssenceDamage@ (%i:scaleAP%)</magicDamage> magic damage and @TooltipReave@% <TFTKeyword>Mana Reaving</TFTKeyword> them. <br><br>Every <scaleLevel>@ActualBoomTooltip@</scaleLevel> casts, unleash a wave that deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to all enemies hit. This deals <magicDamage>@EssenceStolenMultiplier*100@%</magicDamage> more damage to enemies whose essence has been stolen.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@</TFTBonus> Mana per second<br><br><rules><tftbold>Mana Reave</tftbold>: Increase max Mana until the next cast</rules>`,
		icon: `ASSETS/Characters/TFT9_Ahri/HUD/Icons2D/Icons_TFT9_Ahri_R.TFT_Set9.dds`,
		name: `Essence Thief`,
		variables: {
			'MagicDamage': [0, 230, 350, 1888],
			'EssenceDamage': [0, 90, 135, 1000],
			'NumCastsToBoom': [2, 2, 2, 0],
			'EssenceStolenMultiplier': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
			'TooltipIoniaBonus': [3, 3, 3, 3],
			'TooltipReave': [20, 20, 20, 20],
		},
	},
	'TFT9_Akshan': {
		desc: `Lock on to the farthest enemy and unleash a hail of @NumBullets@ shots toward them. Each deals<br><physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to the first enemy hit.`,
		icon: `ASSETS/Characters/TFT9_Akshan/HUD/Icons2D/TFT9_Akshan_R.TFT_Set9.dds`,
		name: `Comeuppance`,
		variables: {
			'NumBullets': [6, 6, 6, 6],
			'ADRatio': [1.25, 1.25, 1.25, 1.25],
			'BaseDamage': [0, 20, 35, 60],
			'RocketsPerSimulatedLaunchAttack': [2, 2, 2, 2],
		},
	},
	'TFT9_HeimerdingerTurret': {
		desc: `Fire a laser beam at the current target. Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies it passes through.`,
		icon: `ASSETS/Characters/TFT9_HeimerdingerTurret/HUD/TFT9_HeimerdingerTurret_Square.TFT_Set9.dds`,
		name: `H-28G Laser Beam`,
		variables: {
			'Damage': [0, 185, 275, 4000],
			'MicroRocketDamage': [100, 100, 100, 100],
			'ShieldRegenTime': [6, 6, 6, 6],
		},
	},
	'TFT9_Aphelios': {
		desc: `Fire a moon blast at the largest group of enemies that deals <physicalDamage>@TotalBlastDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies within @BlastSize@ hexes. <br><br>For @ChakramDuration@ seconds, equip @BaseChakramNumber@ Chakram, plus 1 more for each enemy hit by the blast. Attacks deal <physicalDamage>@TotalChakramDamage@ (%i:scaleAD%)</physicalDamage> bonus physical damage for each Chakram equipped. Aphelios heals for <scaleHealth>@ModifiedChakramHealing@ (%i:scaleAP%)</scaleHealth> of damage dealt by Chakrams.`,
		icon: `ASSETS/Characters/TFT9_Aphelios/HUD/Icons2D/TFT9_ApheliosR.TFT_Set9.dds`,
		name: `Moonlight Vigil`,
		variables: {
			'BlastPercentAD': [1.7999999523162842, 2, 2, 5.5],
			'ChakramDuration': [7, 7, 7, 7],
			'ChakramPercentAD': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.30000001192092896],
			'ChakramHealing': [0.5, 0.5, 0.5, 0.5],
			'BaseChakramNumber': [3, 3, 3, 3],
			'BlastSize': [2, 2, 2, 2],
			'MaxChakrams': [10, 10, 12, 20],
		},
	},
	'TFT9_Ashe': {
		desc: `Fire @Shots@ arrows in a cone, each dealing <physicalDamage>@ArrowDamage@ (%i:scaleAD%)</physicalDamage> physical damage to the first enemy hit and <TFTKeyword>Chilling</TFTKeyword> them for <TFTBonus>@ModifiedDuration@ (%i:scaleAP%)</TFTBonus> seconds.<br><br><rules><tftbold>Chill:</tftbold> Reduce Attack Speed by @Chill@%</rules>`,
		icon: `ASSETS/Characters/TFT9_Ashe/HUD/Icons2D/TFT9_Ashe_W.TFT_Set9.dds`,
		name: `Volley`,
		variables: {
			'ADPercent': [0, 1.600000023841858, 1.600000023841858, 1.7000000476837158],
			'BonusDamage': [10, 10, 10, 10],
			'Shots': [0, 8, 8, 8],
			'Duration': [2, 2, 2, 2],
			'Chill': [30, 30, 30, 30],
		},
	},
	'TFT9_Azir': {
		desc: `<spellPassive>Passive:</spellPassive> Every third attack, a Sand Soldier deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to their target.<br><br><spellActive>Active:</spellActive> Summon a Sand Soldier to attack your target. If Azir already has @MaxSummons@ Soldiers, they all immediately deal <magicDamage>@MaxSoldierStrike@ (%i:scaleAP%)</magicDamage> magic damage instead.`,
		icon: `ASSETS/Characters/TFT9_Azir/HUD/Icons2D/TFT9_Azir_W.TFT_Set9.dds`,
		name: `Arise!`,
		variables: {
			'BaseMagicDamage': [35, 105, 160, 550],
			'Duration': [90, 90, 90, 90],
			'MaxSummons': [3, 3, 3, 3],
			'BonusRatio': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
		},
	},
	'TFT9_BaronNashor': {
		desc: `<spellPassive>Passive:</spellPassive> Cast every @CastCadence@ attacks and cycle between 3 different Abilities: this, <tftbonus>Voracious Bite</tftbonus> (damage an enemy and heal), and <tftbonus>Void Tentacle</tftbonus> (damage and Stun a group).<br><br><spellActive>Active:</spellActive> Lob three pools of acid towards the largest group of enemies, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and @TooltipShred@% <TFTKeyword>Shredding</TFTKeyword> and <TFTKeyword>Sundering</TFTKeyword> for @DebuffDuration@ seconds.<br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist<br><tftbold>Sunder:</tftbold> Reduce Armor</rules>`,
		icon: `ASSETS/Characters/TFT9_BaronNashor/HUD/TFT9_BaronNashor_Square.TFT_Set9.dds`,
		name: `Corrosive Acid`,
		variables: {
			'Damage': [175, 175, 175, 175],
			'TooltipShred': [60, 60, 60, 60],
			'DebuffDuration': [4, 4, 4, 4],
			'CastCadence': [2, 2, 2, 2],
		},
	},
	'TFT9_BelVeth': {
		desc: `Lash out at the lowest Health enemy in range <TFTBonus>@ModifiedNumStrikes@ (%i:scaleAS%)</TFTBonus> times. Each lash deals <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage and <trueDamage>@PercentHealthTrueDamage*100@%</trueDamage> of the target's max Health as true damage.`,
		icon: `ASSETS/Characters/TFT9_BelVeth/HUD/Icons2D/TFT9_BelVethE.TFT_Set9.dds`,
		name: `Royal Maelstrom`,
		variables: {
			'Duration': [1.5, 1.5, 1.5, 4],
			'NumStrikes': [5, 6, 6, 30],
			'PercentAD': [0.6499999761581421, 0.6499999761581421, 0.6499999761581421, 0.6499999761581421],
			'PercentHealthTrueDamage': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
			'BonusFlatDamage': [15, 18, 30, 50],
			'StrikesPer100BonusAS': [5, 5, 5, 5],
		},
	},
	'TFT9_Cassiopeia': {
		desc: `Deal <magicDamage>@ModifiedBaseDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target and <TFTKeyword>Wound</TFTKeyword> them for @WoundDuration@ seconds. If they are already <TFTKeyword>Wounded</TFTKeyword>, deal <magicDamage>@BonusDamage@ (%i:scaleAP%)</magicDamage> bonus magic damage.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by 33%</rules>`,
		icon: `ASSETS/Characters/Cassiopeia/HUD/Icons2D/Cassiopeia_E.dds`,
		name: `Twin Fang`,
		variables: {
			'BaseDamage': [0, 170, 255, 385],
			'DamageAmp': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'WoundDuration': [5, 5, 5, 5],
			'TooltipWound': [50, 50, 50, 50],
		},
	},
	'TFT9_ChoGath': {
		desc: `Deal <magicDamage>@TotalDamage@ (%i:scaleHealth%%i:scaleAP%)</magicDamage> magic damage to the lowest Health enemy in range. If this kills them, devour them and permanently gain <scaleHealth>@BonusHealthOnKill@</scaleHealth> maximum Health <rules>(doubled in Hyper Roll)</rules>. <br><br><rules>(Current Bonus: +@TFTUnitProperty.:TFT9_ChoGathBonusHealth@ Health)</rules>`,
		icon: `ASSETS/Characters/Chogath/HUD/Icons2D/GreenTerror_Feast.dds`,
		name: `Feast`,
		variables: {
			'PercentMaximumHealthDamage': [0.14000000059604645, 0.14000000059604645, 0.14000000059604645, 0.14000000059604645],
			'BonusDamage': [140, 250, 335, 450],
			'BonusHealthOnKill': [25, 30, 35, 40],
		},
	},
	'TFT9_Darius': {
		desc: `Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to the current target. If they die, immediately cast this again with <scaleLevel>@PercentDamageFalloff*100@%</scaleLevel> damage.`,
		icon: `ASSETS/Characters/Darius/HUD/Icons2D/Darius_Icon_Sudden_Death.dds`,
		name: `Noxian Guillotine`,
		variables: {
			'AttackDamagePercent': [3.5, 3.5, 3.5, 3.5],
			'FearDuration': [1, 1, 1, 1],
			'AbilityScaleDamage': [100, 100, 120, 150],
			'PercentDamageFalloff': [0, 0.8199999928474426, 0.8500000238418579, 0.8999999761581421],
		},
	},
	'TFT9_Ekko': {
		desc: `Heal <scaleHealth>@HealPercent*100@%</scaleHealth> of damage taken in the last @RewindTime@ seconds and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target.`,
		icon: `ASSETS/Characters/TFT9_Ekko/HUD/Icons2D/TFT9_Ekko_E.TFT_Set9.dds`,
		name: `Phase Dive`,
		variables: {
			'Damage': [0, 300, 450, 725],
			'HealPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'RewindTime': [4, 4, 4, 4],
			'RollDuration': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
		},
	},
	'TFT9_Galio': {
		desc: `Reduce damage taken by @DamageResist*100@% and heal for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth> over @Duration@ seconds. After, deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies.`,
		icon: `ASSETS/Characters/TFT9_Galio/HUD/Icons2D/TFT9_Galio_W.TFT_Set9.dds`,
		name: `Shield of Durand`,
		variables: {
			'DamageResist': [0.20000000298023224, 0.25, 0.25, 0.3499999940395355],
			'Duration': [4, 4, 4, 4],
			'Heal': [0, 350, 400, 450],
			'Damage': [0, 200, 300, 450],
			'HexRadius': [1, 1, 1, 1],
		},
	},
	'TFT9_Garen': {
		desc: `Spin <TFTBonus>@SpinsTooltip@ (%i:scaleAS%)</TFTBonus> times every second for the next <TFTBonus>@ModifiedDuration@ (%i:scaleAP%)</TFTBonus> seconds. Each spin deals <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to adjacent enemies.`,
		icon: `ASSETS/Characters/Garen/HUD/Icons2D/Garen_E1.dds`,
		name: `Judgement`,
		variables: {
			'SpinDuration': [4, 4, 4, 4],
			'BaseTicks': [2, 2, 2, 2],
			'DamagePerTick': [15, 0.800000011920929, 0.8199999928474426, 0.8500000238418579],
			'ASPerTickTooltip': [50, 50, 50, 50],
			'SpinsPerLaunchAttack': [3, 3, 3, 3],
		},
	},
	'TFT9_Gwen': {
		desc: `Dash around the current target and snip @Snips@ times in a cone, each dealing <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies hit.<br><br>Every @CastCountForMist@ casts, gain <TFTBonus>@MistResists@</TFTBonus> Armor and Magic Resist for <scaleLevel>@MistDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/Gwen/HUD/Icons2D/Gwen_E.dds`,
		name: `Snip Snip!`,
		variables: {
			'Snips': [3, 3, 3, 3],
			'MagicDamage': [0, 100, 150, 400],
			'MistDuration': [3, 3, 3, 5],
			'CastCountForMist': [3, 3, 3, 3],
			'MistResists': [150, 120, 120, 300],
		},
	},
	'TFT9_Heimerdinger': {
		desc: `Hurl a grenade towards the largest group of enemies, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies in a large area and Stunning them for <scaleLevel>@StunDuration@</scaleLevel> seconds.<br><br>4-Star Upgrade: YES YES YES, IT WORKS!!!`,
		icon: `ASSETS/Characters/TFT9_Heimerdinger/HUD/Icons2D/TFT9_Heimerdinger_E1.TFT_Set9.dds`,
		name: `CH-3X Lightning Grenade`,
		variables: {
			'Damage': [0, 150, 225, 3141],
			'StunDuration': [3, 1.5, 2, 15],
		},
	},
	'TFT9_Irelia': {
		desc: `Enter a defensive stance and gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield that rapidly decays over @ShieldDuration@ seconds. When it expires, deal <magicDamage>@ModifiedBaseStrikeDamage@ (%i:scaleAP%)</magicDamage> magic damage + <magicDamage>@PercentShieldDamage*100@%</magicDamage> of the damage absorbed to enemies around and in front of Irelia.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@</TFTBonus> Armor and Magic Resist`,
		icon: `ASSETS/Characters/TFT9_Irelia/HUD/Icons2D/TFT9_Irelia_Passive.TFT_Set9.dds`,
		name: `Defiant Dance`,
		variables: {
			'ShieldDuration': [3, 3, 3, 3],
			'ShieldHealth': [200, 350, 400, 450],
			'StrikeBaseDamage': [50, 70, 100, 150],
			'PercentShieldDamage': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'TooltipIoniaBonus': [25, 25, 25, 25],
		},
	},
	'TFT9_JarvanIV': {
		desc: `Leap on a nearby enemy. Deal <magicDamage>@TotalDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within @HexRadius@ hexes and Stun them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/TFT9_JarvanIV/HUD/Icons2D/TFT9_JarvanIV_Cataclysm.TFT_Set9.dds`,
		name: `Cataclysm`,
		variables: {
			'StunDuration': [2.5, 1.75, 2.25, 8],
			'SearchRange': [3, 3, 3, 3],
			'Damage': [0, 140, 210, 800],
			'HexRadius': [2, 2, 2, 2],
		},
	},
	'TFT9_Jayce': {
		desc: `Grant <TFTBonus>@ModifiedPercentAttackSpeed@ (%i:scaleAP%)</TFTBonus> Attack Speed to Jayce and allies on his left and right for @Duration@ seconds. Fire a blast at the current target that explodes on the first enemy hit. It deals <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies near the blast.`,
		icon: `ASSETS/Characters/TFT9_Jayce/HUD/Icons2D/TFT9_Jayce_ShotBlast.TFT_Set9.dds`,
		name: `Acceleration Blast`,
		variables: {
			'PercentAttackSpeed': [0.5, 0.20000000298023224, 0.25, 0.30000001192092896],
			'Duration': [3, 3, 3, 3],
			'PercentAttackDamage': [0, 2.4000000953674316, 2.4000000953674316, 2.5],
			'HexRange': [1, 1, 1, 1],
			'TooltipPercentAttackDamage': [0, 240, 240, 250],
		},
	},
	'TFT9_Jhin': {
		desc: `Take aim at the current target and deal <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to enemies in a line; each hit reduces damage by @FalloffPercent*100@%.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@%</TFTBonus> Attack Damage`,
		icon: `ASSETS/Characters/Jhin/HUD/Icons2D/Jhin_R.dds`,
		name: `Curtain Call`,
		variables: {
			'PercentAttackDamage': [7.440000057220459, 7.440000057220459, 7.440000057220459, 7.440000057220459],
			'MissingHealthPercentBonus': [0, 0.23999999463558197, 0.3400000035762787, 0.4399999976158142],
			'TooltipIoniaBonus': [25, 25, 25, 25],
			'AimDuration': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
			'FalloffPercent': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'Damage': [0, 60, 90, 135],
		},
	},
	'TFT9_Jinx': {
		desc: `Fire @NumberOfRockets@ rockets at random enemies within @HexRadius@ hexes of the current target. Each rocket deals <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage.`,
		icon: `ASSETS/Characters/TFT9_Jinx/HUD/Icons2D/TFT9_Jinx_Q1.TFT_Set9.dds`,
		name: `Fishbones!`,
		variables: {
			'NumberOfRockets': [5, 5, 5, 5],
			'HexRadius': [2, 2, 2, 2],
			'PercentAttackDamage': [0, 1.5, 1.5, 1.600000023841858],
			'AbilityScaleDamage': [20, 10, 15, 25],
			'RocketsPerSimulatedLaunchAttack': [2, 2, 2, 2],
		},
	},
	'TFT9_KSante': {
		desc: `Heal for <scaleHealth>@HealAmount@ (%i:scaleHealth%)</scaleHealth>, then knock up the current target before smashing them to the edge of the battlefield. Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and Stun them for <scaleLevel>@StunDuration@</scaleLevel> seconds. Deal <magicDamage>@CollisionDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies the target collides with and Stun them for <scaleLevel>@SecondaryStunDuration@</scaleLevel> seconds.<br><br>If the target can't be pushed back any further, knock them off the battlefield. Otherwise, K'Sante will chase after them.`,
		icon: `ASSETS/Characters/TFT9_KSante/HUD/Icons2D/Icons_TFT9_KSante_R2.TFT_Set9.dds`,
		name: `All Out Strike`,
		variables: {
			'Damage': [0, 250, 400, 1000],
			'StunDuration': [0, 2, 2.5, 10],
			'SecondaryStunDuration': [0, 1, 1.25, 5],
			'CollisionPercent': [0.5, 0.5, 0.5, 0.5],
			'PercentHealthHeal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		},
	},
	'TFT9_KaiSa': {
		desc: `Dash away from all enemies, then fire <scaleLevel>@NumMissiles@</scaleLevel> missiles split across the @NumTargets@ nearest enemies. Each missile deals <magicDamage>@TotalDamage@ (%i:scaleAP%)</magicDamage> magic damage.`,
		icon: `ASSETS/Characters/TFT9_KaiSa/HUD/Icons2D/TFT9_KaiSa_W.TFT_Set9.dds`,
		name: `Icathian Rain`,
		variables: {
			'NumMissiles': [12, 15, 15, 25],
			'BaseDamage': [0, 75, 111, 240],
			'NumTargets': [4, 4, 4, 4],
		},
	},
	'TFT9_Kalista': {
		desc: `<spellPassive>Passive:</spellPassive> Attacks impale a spear in the target, which deals <trueDamage>@ModifiedDamage@ (%i:scaleAP%)</trueDamage> true damage when removed. Kalista rips the spears out if it would kill the target.<br><br><spellActive>Active:</spellActive> Impale @NumSpears@ spears in the current target.`,
		icon: `ASSETS/Characters/Kalista/HUD/Icons2D/Kalista_E.dds`,
		name: `Pierce and Rend`,
		variables: {
			'Damage': [16, 18, 27, 45],
			'NumSpears': [6, 6, 6, 6],
		},
	},
	'TFT9_Karma': {
		desc: `Fire a burst of energy that explodes upon impact, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies. Every third cast launches @EmpoweredBursts@ bursts.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@</TFTBonus> Ability Power`,
		icon: `ASSETS/Characters/TFT9_Karma/HUD/Icons2D/TFT9_Karma_Q1.TFT_Set9.dds`,
		name: `Inner Flame`,
		variables: {
			'MagicDamage': [0, 170, 255, 420],
			'TooltipIoniaBonus': [20, 20, 20, 20],
			'EmpoweredBursts': [3, 3, 3, 3],
		},
	},
	'TFT9_Kassadin': {
		desc: `Gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies in a cone and <TFTKeyword>Disarm</TFTKeyword> them for <scaleLevel>@DisarmDuration@</scaleLevel> seconds.<br><br><tftitemrules><tftbold>Disarm:</tftbold> Cannot move or attack, but CAN cast spells</tftitemrules>`,
		icon: `ASSETS/Characters/Kassadin/HUD/Icons2D/Kassadin_E.dds`,
		name: `Force Pulse`,
		variables: {
			'Damage': [100, 135, 200, 300],
			'DisarmDuration': [3, 1.5, 1.75, 2],
			'ShieldAmount': [0, 250, 300, 400],
			'ShieldDuration': [4, 4, 4, 4],
		},
	},
	'TFT9_Katarina': {
		desc: `Throw three daggers that land next to enemies within <TFTBonus>@SpellRange@ (%i:scaleRange%)</TFTBonus> hexes. Then, teleport to each and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies and <TFTKeyword>Wound</TFTKeyword> them for @WoundDuration@ seconds.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by @WoundPercent*100@%</rules>`,
		icon: `ASSETS/Characters/TFT9_Katarina/HUD/Icons2D/TFT9_Katarina_W.TFT_Set9.dds`,
		name: `Voracity`,
		variables: {
			'Damage': [0, 130, 195, 320],
			'WoundPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
			'WoundDuration': [6, 6, 6, 6],
			'BonusSpellRange': [1, 1, 1, 1],
		},
	},
	'TFT9_Kayle': {
		desc: `<spellPassive>Passive:</spellPassive> Gains new Passive effects as your Tactician levels up.<br><spellActive>Level 1:</spellActive> Attacks deal <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> bonus magic damage.<br><spellActive>Level @FirstAscensionLevel@:</spellActive> Every 3rd attack launches a wave that deals <magicDamage>@AscensionModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage and @ShredAmount@% <TFTKeyword>Shreds</TFTKeyword> enemies for @ShredDuration@ seconds.<br><spellActive>Level @SecondAscensionLevel@:</spellActive> Every attack launches a wave and they travel farther.<br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist</rules>`,
		icon: `ASSETS/Characters/Kayle/HUD/Icons2D/Kayle_P.dds`,
		name: `Divine Ascent`,
		variables: {
			'Damage': [0, 35, 50, 75],
			'ShredAmount': [40, 40, 40, 40],
			'FirstAscensionLevel': [6, 6, 6, 6],
			'SecondAscensionLevel': [9, 9, 9, 9],
			'ShredDuration': [3, 3, 3, 3],
			'AscensionDamage': [0, 25, 30, 45],
		},
	},
	'TFT9_Kled': {
		desc: `<spellPassive>Passive:</spellPassive> Start combat with <TFTBonus>@Shield@ (%i:scaleHealth%)</TFTBonus> Shield. When it expires, dismount and gain <TFTBonus>@ModifiedAttackSpeedPercent@ (%i:scaleAP%)</TFTBonus> stacking Attack Speed for the rest of combat.<br><br><spellActive>Active:</spellActive> Remount and gain <TFTBonus>@Shield@ (%i:scaleHealth%)</TFTBonus> Shield.<br><br>4-Star Upgrade: Execute enemies under @ExecuteThreshold@% Health.`,
		icon: `ASSETS/Characters/Kled/HUD/Icons2D/Kled_R.dds`,
		name: `Skaaaaaaarl!`,
		variables: {
			'ShieldPercent': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
			'AttackSpeedPercent': [0.6000000238418579, 0.6499999761581421, 0.699999988079071, 0.75],
			'ExecuteThreshold': [25, 25, 25, 25],
		},
	},
	'TFT9_Lissandra': {
		desc: `Stun the current target for @StunDuration@ seconds and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within 2 hexes of them. They take @DamageAmp*100@% more damage for the next @DebuffDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT9_Lissandra/HUD/Icons2D/TFT9_Lissandra_R.TFT_Set9.dds`,
		name: `Frozen Tomb`,
		variables: {
			'Damage': [0, 160, 240, 400],
			'StunDuration': [2, 2, 2, 2],
			'DebuffDuration': [4, 4, 4, 4],
			'DamageAmp': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		},
	},
	'TFT9_Lux': {
		desc: `Channel a barrage of light at the current target that deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage over <scaleLevel>@Duration@</scaleLevel> seconds, reducing their Magic Resist by <scaleLevel>@Shred@</scaleLevel> every second. If they die, shift to a new target.`,
		icon: `ASSETS/Characters/Lux/HUD/Icons2D/LuxFinaleFunkeln.dds`,
		name: `Torrent of Light`,
		variables: {
			'Duration': [3, 3, 3, 3],
			'Damage': [0, 735, 1100, 2750],
			'Shred': [0, 15, 15, 40],
		},
	},
	'TFT9_Malzahar': {
		desc: `Open two portals near the current target. Destroy @PercentShieldDestruction*100@% of Shields and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to all enemies caught between the portals.`,
		icon: `ASSETS/Characters/TFT9_Malzahar/HUD/Icons2D/TFT9_Malzahar_Q.TFT_Set9.dds`,
		name: `Call of the Void`,
		variables: {
			'Damage': [0, 205, 310, 460],
			'PercentShieldDestruction': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_Maokai': {
		desc: `<spellPassive>Passive:</spellPassive> Whenever an enemy uses their Ability, gain <TFTBonus>@BonusManaOnCast@</TFTBonus> Mana.<br><br><spellActive>Active:</spellActive> On next attack, heal for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth>.`,
		icon: `ASSETS/Characters/Maokai/HUD/Icons2D/Maokai_Passive.dds`,
		name: `Sap Magic`,
		variables: {
			'HealAmount': [200, 220, 260, 300],
			'BonusManaOnCast': [5, 5, 5, 5],
			'PassiveHexRange': [10, 10, 10, 10],
		},
	},
	'TFT9_Nasus': {
		desc: `Steal <scaleLevel>@PercentHealthSteal*100@%</scaleLevel> maximum Health, <TFTBonus>@PercentADSteal*100@%</TFTBonus> Attack Damage, <scaleLevel>@FlatResistanceSteal@</scaleLevel> Armor, and <scaleLevel>@FlatResistanceSteal@</scaleLevel> Magic Resist from the nearest <scaleLevel>@NumEnemies@</scaleLevel> enemies for <TFTBonus>@ModifiedDuration@ (%i:scaleAP%)</TFTBonus> seconds.<br><br>While empowered, every third attack deals <physicalDamage>@EmpoweredDamage@ (%i:scaleAD%)</physicalDamage> physical damage.`,
		icon: `ASSETS/Characters/TFT9_Nasus/HUD/Icons2D/TFT9_Nasus_Passive.TFT_Set9.dds`,
		name: `Soul Eater`,
		variables: {
			'PercentHealthSteal': [0.10000000149011612, 0.05000000074505806, 0.05000000074505806, 0.15000000596046448],
			'PercentADSteal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'FlatResistanceSteal': [3, 5, 5, 30],
			'Duration': [8, 8, 8, 8],
			'EmpoweredDamagePct': [3.5, 3.5, 3.5, 7],
			'NumEnemies': [3, 4, 5, 9],
		},
	},
	'TFT9_Orianna': {
		desc: `Grant the lowest Health ally <TFTBonus>@ModifiedShielding@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds and empowers Orianna's next attack to deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> bonus magic damage.`,
		icon: `ASSETS/Characters/TFT9_Orianna/HUD/Icons2D/TFT9_OriannaCommandAttack.TFT_Set9.dds`,
		name: `Command: Protect`,
		variables: {
			'ShieldHealth': [200, 225, 250, 325],
			'ShieldDuration': [4, 4, 4, 4],
			'MagicDamage': [50, 260, 390, 585],
		},
	},
	'TFT9_Poppy': {
		desc: `Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target.<br><br>4-Star Upgrade: Knock the target into the largest clump of enemies, dealing <magicDamage>@PercentHealthDamage@%</magicDamage> of the target's max Health as magic damage to the target and <magicDamage>@CollisionDamagePercent@%</magicDamage> of that amount to the clump. Stun them for @StunDuration@ second.`,
		icon: `ASSETS/Characters/TFT9_Poppy/HUD/Icons2D/TFT9_Poppy_Q.TFT_Set9.dds`,
		name: `Steadfast Hammer`,
		variables: {
			'ShieldAmount': [120, 310, 330, 350],
			'ShieldDuration': [3, 3, 3, 3],
			'StunDuration': [0.25, 0.25, 0.25, 0.25],
			'CollisionDamagePercent': [15, 15, 15, 15],
			'HexRadius': [0, 0, 0, 0],
			'Damage': [0, 140, 210, 315],
			'PercentHealthDamage': [33, 33, 33, 33],
		},
	},
	'TFT9_RekSai': {
		desc: `Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to the current target. If they are below @HealthThreshold*100@% Health, deal <br><trueDamage>@TooltipExecuteDamage@ (%i:scaleAD%%i:scaleAP%)</trueDamage> true damage instead.<br><br>If this kills the target, rip through them 1 hex and heal for <scaleHealth>@HealAmount@ (%i:scaleAP%%i:scaleHealth%)</scaleHealth>.`,
		icon: `ASSETS/Characters/RekSai/HUD/Icons2D/RekSai_E1.dds`,
		name: `Furious Bite`,
		variables: {
			'PercentOfAD': [2.5, 3.1500000953674316, 3.1500000953674316, 3.1500000953674316],
			'PercentMaxHealthHeal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'HealthThreshold': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
			'EmpoweredDamageAmp': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
		},
	},
	'TFT9_Renekton': {
		desc: `Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies. Heal <scaleHealth>@ModifiedInitialHeal@ (%i:scaleAP%)</scaleHealth> for the first enemy hit and another <scaleHealth>@ModifiedKickerHeal@ (%i:scaleAP%)</scaleHealth> for each additional one.`,
		icon: `ASSETS/Characters/Renekton/HUD/Icons2D/Renekton_Q.dds`,
		name: `Cull the Meek`,
		variables: {
			'Damage': [25, 180, 270, 400],
			'InitialHeal': [170, 220, 270, 320],
			'KickerHeal': [30, 30, 30, 30],
			'HexRadius': [1, 1, 1, 1],
		},
	},
	'TFT9_RiftHerald': {
		desc: `Charge toward the furthest enemy and crash into the first enemy hit. Deal <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies adjacent to the impact and Stun them for @StunDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT9_RiftHerald/HUD/TFT9_RiftHerald_Square.TFT_Set9.dds`,
		name: `Void Charge`,
		variables: {
			'MagicDamage': [240, 240, 240, 240],
			'StunDuration': [2, 2, 2, 2],
		},
	},
	'TFT9_Ryze': {
		desc: `Create a portal to Bandle City under the most expensive unit on your bench. They are summoned to the battlefield with @ModifiedBonusMana@ (%i:scaleAP%) bonus Mana and are...slightly smaller?<br><br>If there are no units left on your bench, Ryze summons a random high tier unit instead.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Bandle City`,
		variables: {},
	},
	'TFT9_RyzeBandleCity': {
		desc: `Create a portal to Bandle City under the most expensive unit on your bench. They are summoned to the battlefield with @ModifiedBonusMana@ (%i:scaleAP%) bonus Mana and are...slightly smaller?<br><br>If there are no units left on your bench, Ryze summons a random high tier unit instead.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Bandle City`,
		variables: {
			'BonusMana': [0, 25, 70, 200],
			'FiveCostSummonOdds': [0, 0.30000001192092896, 0.699999988079071, 1],
			'FourCostSummonOdds': [0, 0.4000000059604645, 0.30000001192092896, 0],
			'BaseStarLevelSummon': [0, 1, 1, 3],
		},
	},
	'TFT9_RyzeDemacia': {
		desc: `Create a portal to Demacia that protects allies for @PortalDuration@ seconds. Allies within the zone gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield. If an ally leaves the safety of the portal, they are healed for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth>.<br><br>When the portal expires, enemies within are dealt <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage.<br>`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Demacia`,
		variables: {
			'Shield': [300, 600, 900, 9999],
			'Heal': [0, 250, 375, 9999],
			'Damage': [125, 300, 450, 999],
			'PortalDuration': [2, 2, 2, 5],
		},
	},
	'TFT9_RyzeFreljord': {
		desc: `Create a portal to the Freljord under a random group of enemies for @PortalDuration@ seconds. The freezing winds deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within two hexes over the duration and apply Permafrost, a permanent <TFTKeyword>Chill</TFTKeyword>.<br><br>If enemies are already affected by Permafrost, they are instead Stunned for the duration.<br><br><tftitemrules><tftbold>Chill:</tftbold> Reduce Attack Speed by @AttackSpeedSlow*100@%</tftitemrules>`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Freljord`,
		variables: {
			'Damage': [0, 300, 450, 3500],
			'PortalDuration': [2, 2, 2, 2],
			'AttackSpeedSlow': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
		},
	},
	'TFT9_RyzeIonia': {
		desc: `Create a portal to Ionia in the center of the battlefield, summoning forth a Spirit Tree that affects the <scaleLevel>@NumUnits@</scaleLevel> closest units. Allies gain <TFTBonus>@BonusAttackSpeed*100@%</TFTBonus> Attack Speed for @BuffDuration@ seconds and are healed for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth> over the duration. Enemies dance, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and Stunning them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Ionia`,
		variables: {
			'NumUnits': [5, 5, 7, 20],
			'BonusAttackSpeed': [0.30000001192092896, 0.30000001192092896, 0.4000000059604645, 3],
			'Heal': [200, 400, 500, 3000],
			'BuffDuration': [6, 6, 6, 6],
			'StunDuration': [1.5, 2, 2.5, 20],
			'Damage': [150, 175, 275, 1500],
		},
	},
	'TFT9_RyzeNoxus': {
		desc: `Create a portal to Noxus that spews out a torrent of weapons and armor, granting <scaleLevel>@NumItems@</scaleLevel> completed items to random allies with open slots, and throwing <scaleLevel>@NumAxes@</scaleLevel> axes towards random enemies that deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage each.<br><br>If an ally would recieve an item while all slots are full, they instead gain a stacking @DamageAmp*100@% damage increase for the rest of combat.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Noxus`,
		variables: {
			'NumItems': [2, 3, 4, 10],
			'NumAxes': [3, 4, 5, 12],
			'MagicDamage': [200, 150, 225, 2000],
			'DamageAmp': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		},
	},
	'TFT9_RyzePiltover': {
		desc: `Create a portal to Piltover that launches an enforcer grenade towards the largest clump of enemies, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within two hexes and creating a containment area for <scaleLevel>@AreaDuration@</scaleLevel> seconds. Enemies are unable to leave the area, and <scaleLevel>@PercentSharedDamage*100@%</scaleLevel> of the damage dealt to them is also dealt to all other enemies within.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Piltover`,
		variables: {
			'Damage': [0.20000000298023224, 275, 425, 3000],
			'PercentSharedDamage': [0.15000000596046448, 0.15000000596046448, 0.30000001192092896, 5],
			'AreaDuration': [4, 3, 4, 8],
		},
	},
	'TFT9_RyzeShadowIsles': {
		desc: `Mark the @NumAllies@ ally's soul(s) with the lowest current health to be reclaimed by the Shadow Isles. After they die, they return to the battlefield with <scaleHealth>@ModifiedHealthOnReturn@ (%i:scaleAP%)</scaleHealth> of their maximum Health.<br><br>If all living allies are already marked, Ryze instead resurrects a deceased ally.<br><br> Ryze cannot resurrect himself.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Shadow Isles`,
		variables: {
			'PercentHealthOnReturn': [0, 0.4000000059604645, 0.800000011920929, 3],
			'NumAllies': [1, 1, 1, 10],
		},
	},
	'TFT9_RyzeShurima': {
		desc: `Create a portal to Shurima, summoning a sand tornado that travels across the battlefield, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies hit and knocking them up, Stunning them for <scaleLevel>@KnockupDuration@</scaleLevel> second.<br><br>The tornado has a chance to unearth buried treasures and gold as it travels.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Shurima`,
		variables: {
			'Damage': [0, 175, 275, 2500],
			'KnockupDuration': [0.75, 1, 1.25, 3],
			'NumberOfLootRolls': [3, 3, 3, 3],
			'ChanceToSpawnGold': [0.25, 0.20000000298023224, 0.3499999940395355, 1],
			'ChanceToSpawnItem': [0.25, 0.019999999552965164, 0.05000000074505806, 0.30000001192092896],
			'MinGold': [1, 1, 1, 1],
			'MaxGold': [4, 4, 4, 4],
		},
	},
	'TFT9_RyzeTargon': {
		desc: `Create a portal to the skies above Mount Targon that beckons the current target. After a few seconds, they descend from the heavens as a meteor towards the largest group of enemies, dealing <magicDamage>@ModifiedPercentMaxHealth@ (%i:scaleAP%)</magicDamage> of the initial target's maximum Health as magic damage. Enemies in the epicenter are briefly knocked up.<br><br>If the target is the only enemy remaining, they never descend.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Targon`,
		variables: {
			'PercentMaxHealth': [0.20000000298023224, 0.18000000715255737, 0.30000001192092896, 1],
			'DamageHexRadius': [2, 2, 2, 4],
			'KnockUpRadius': [1, 1, 1, 2],
			'StunDuration': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'ThreeStarStarfallDamage': [0, 0, 0, 999],
		},
	},
	'TFT9_RyzeZaun': {
		desc: `Create <scaleLevel>@NumPortals@</scaleLevel> portals to Zaun, causing hired guns to fire at nearby enemies. Deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and <TFTKeyword>Wounds</TFTKeyword>, 40% <TFTKeyword>Shreds</TFTKeyword>, and 40% <TFTKeyword>Sunders</TFTKeyword> for @DebuffDuration@ seconds. The more gold you have, the more powerful the portals become.<br><br><spellPassive>@Breakpoint1Gold@ Gold:</spellPassive> +@Breakpoint1BonusPortals@ portal. Portals fire a rocket that deals @SplashDamagePercent*100@% damage in a one-hex radius.<br><spellPassive>@Breakpoint2Gold@ Gold:</spellPassive> Double the portals. Summon @Breakpoint2BonusPortalsPerGold@ additional portals for every @GoldPerPortal@ Gold more.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by 50%<br><tftbold>Shred:</tftbold> Reduce Magic Resist<br><tftbold>Sunder:</tftbold> Reduce Armor</rules>`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Zaun`,
		variables: {
			'NumPortals': [1, 5, 8, 25],
			'Damage': [100, 110, 200, 2006],
			'DebuffDuration': [6, 6, 6, 6],
			'SplashDamagePercent': [0.5, 0.5, 0.5, 0.5],
			'Breakpoint1Gold': [25, 25, 25, 25],
			'Breakpoint2Gold': [50, 50, 50, 50],
			'Breakpoint1BonusPortals': [1, 1, 1, 1],
			'Breakpoint2BonusPortalsPerGold': [1, 1, 1, 1],
			'GoldPerPortal': [20, 20, 20, 20],
		},
	},
	'TFT9_Samira': {
		desc: `Shoot at the current target and deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> to the first enemy hit. Reduce their Armor by <TFTBonus>@ModifiedArmorShred@ (%i:scaleAP%)</TFTBonus> for the rest of combat.`,
		icon: `ASSETS/Characters/Samira/HUD/Icons2D/SamiraQ.dds`,
		name: `Flair`,
		variables: {
			'ADPercent': [2.0999999046325684, 2, 2, 2.0999999046325684],
			'ArmorShred': [0, 10, 15, 20],
		},
	},
	'TFT9_Sejuani': {
		desc: `<spellPassive>Passive:</spellPassive> Whenever an ally attacks a <TFTKeyword>Chilled</TFTKeyword> enemy, they deal <trueDamage>@HealthDamage@ (%i:scaleHealth%)</trueDamage> bonus true damage.<br><br><spellActive>Active:</spellActive> Gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to nearby enemies and <TFTKeyword>Chill</TFTKeyword> them for @ShieldDuration@ seconds.<br><br><tftitemrules><tftbold>Chill:</tftbold> Reduce Attack Speed by 30%</tftitemrules>`,
		icon: `ASSETS/Characters/TFT9_Sejuani/HUD/Icons2D/TFT9_Sejuani_passive.TFT_Set9.dds`,
		name: `Fury of the North`,
		variables: {
			'Shield': [0, 600, 700, 2000],
			'Damage': [0, 160, 240, 1200],
			'ShieldDuration': [4, 4, 4, 4],
			'PercentHealth': [0.014999999664723873, 0.014999999664723873, 0.014999999664723873, 0.10000000149011612],
			'ChillDuration': [4, 4, 4, 4],
		},
	},
	'TFT9_Senna': {
		desc: `Fire a massive beam at the furthest enemy, dealing <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to all enemies hit. Any allies hit gain <TFTBonus>@TotalShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT9_Senna/HUD/Icons2D/TFT9_Senna_R.TFT_Set9.dds`,
		name: `Dawning Shadow`,
		variables: {
			'ADRatio': [0, 2.3499999046325684, 2.5, 20],
			'ShieldAmount': [0, 200, 275, 4000],
			'ShieldDuration': [4, 4, 4, 15],
		},
	},
	'TFT9_Sett': {
		desc: `Grab an enemy from either side and slam them together, knocking them up. Deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and Stuns them for <scaleLevel>@StunDuration@</scaleLevel> seconds. <br><br>If only one enemy is grabbed, the damage and Stun duration are increased by @SoloBonus*100@%.<br><br>Ionia Bonus: <scaleHealth>+@TooltipIoniaBonus@</scaleHealth> maximum Health`,
		icon: `ASSETS/Characters/Sett/HUD/Icons2D/Sett_Q.dds`,
		name: `Facebreaker`,
		variables: {
			'Damage': [0, 180, 270, 420],
			'StunDuration': [1, 1.25, 1.5, 2],
			'SoloBonus': [0.5, 0.5, 0.5, 0.5],
			'TooltipIoniaBonus': [200, 200, 200, 200],
		},
	},
	'TFT9_Shen': {
		desc: `Gain <TFTBonus>@ModifiedSelfShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield and grant <TFTBonus>@ModifiedAllyShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield to the 2 lowest-Health allies for @ShieldDuration@ seconds. After shielding his allies, Shen's Shield refreshes with a burst, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@%</TFTBonus> Damage Reduction`,
		icon: `ASSETS/Characters/Shen/HUD/Icons2D/Shen_Passive.dds`,
		name: `Ki Barrier`,
		variables: {
			'MagicDamage': [0, 240, 360, 2500],
			'AllyShieldAmount': [0, 225, 275, 1500],
			'SelfShieldAmount': [0, 350, 450, 2000],
			'ShieldDuration': [4, 4, 4, 4],
			'ChillDuration': [3, 3, 3, 3],
			'ChillAmount': [40, 40, 40, 40],
			'TooltipIoniaBonus': [9, 9, 9, 9],
		},
	},
	'TFT9_Sion': {
		desc: `<spellPassive>Passive:</spellPassive> Upon death, reanimate with <scaleHealth>@ReviveHealthPct*100@%</scaleHealth> Health, decaying at <scaleLevel>@DecayHealthPct*100@%</scaleLevel> maximum Health per second. Sion can no longer use his Ability, but is immune to crowd control and gains <br><TFTBonus>@ModifiedAttackSpeedPct@ (%i:scaleAP%)</TFTBonus> Attack Speed.<br><br><spellActive>Active:</spellActive> Charge towards the most enemies within <TFTBonus>@DashRangeTooltip@ (%i:scaleRange%)</TFTBonus> hexes. Deal <physicalDamage>@ModifiedDamage@ (%i:scaleAD%)</physicalDamage> physical damage to any enemies along the way and knock them up, Stunning them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/TFT9_Sion/HUD/Icons2D/TFT9_Sion_E.TFT_Set9.dds`,
		name: `Glory in Death`,
		variables: {
			'ADPercent': [0, 2.25, 2.3499999046325684, 5],
			'StunDuration': [0, 1.25, 1.5, 15],
			'ReviveHealthPct': [1, 1, 1, 1],
			'DecayHealthPct': [0, 0.20000000298023224, 0.12999999523162842, 0],
			'AttackSpeedPct': [1.5, 1.5, 1.5, 10],
			'MoveSpeed': [400, 400, 400, 800],
			'DashRangeBonus': [3, 3, 3, 3],
			'ThreeStarBonusAD': [0, 0, 0, 4],
		},
	},
	'TFT9_Sona': {
		desc: `Send a wave of sound at the largest clump of enemies and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies hit. Allies hit by the wave gain <TFTBonus>@AttackSpeed@%</TFTBonus> Attack Speed for @Duration@ seconds.`,
		icon: `ASSETS/Characters/TFT9_Sona/HUD/Icons2D/TFT9_Sona_R.TFT_Set9.dds`,
		name: `Crescendo`,
		variables: {
			'MagicDamage': [0, 105, 155, 255],
			'AttackSpeed': [0, 35, 40, 45],
			'Duration': [5, 5, 5, 5],
		},
	},
	'TFT9_Soraka': {
		desc: `Heal the lowest health ally for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth>. If the ally is below @EmpoweredHealThreshold*100@% Health, heal them for an additional <scaleHealth>@TooltipBonusHeal@ (%i:scaleAP%)</scaleHealth>. <br><br>Over the next @Duration@ seconds, @NumberOfStars@ stars hit the enemy closest to them. Each deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage.`,
		icon: `ASSETS/Characters/Soraka/HUD/Icons2D/Soraka_W.dds`,
		name: `Astral Infusion`,
		variables: {
			'Heal': [0, 170, 190, 220],
			'EmpoweredHealPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
			'EmpoweredHealThreshold': [0.5, 0.5, 0.5, 0.5],
			'MagicDamage': [60, 125, 185, 290],
			'Duration': [5, 5, 5, 5],
			'NumberOfStars': [5, 5, 5, 5],
		},
	},
	'TFT9_Swain': {
		desc: `Transform and gain <scaleHealth>@ModifiedBonusHealth@ (%i:scaleAP%)</scaleHealth> max Health for @BuffDuration@ seconds. While transformed, deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within 2 hexes every second.`,
		icon: `ASSETS/Characters/TFT9_Swain/HUD/Icons2D/TFT9_Swain_R.TFT_Set9.dds`,
		name: `Demonflare`,
		variables: {
			'BuffDuration': [5, 5, 5, 5],
			'DamagePerTick': [0, 35, 50, 75],
			'BonusMaxHealth': [200, 375, 450, 650],
		},
	},
	'TFT9_THex': {
		desc: `T-Hex is still powering up and has no Ability. Once she reaches @PowerRequirement@ Power, gain <spellActive>Hextech Breath</spellActive>.<br><br><spellActive>Hextech Breath:</spellActive> Unleash a huge laser dealing magic damage.`,
		icon: `ASSETS/Characters/TFT9_THex/HUD/TFT9_THex_Square.TFT_Set9.dds`,
		name: `Powering Up`,
		variables: {
			'LingerDuration': [1.5, 1.5, 1.5, 1.5],
			'FlameBreathDuration': [3, 3, 3, 3],
			'FlameBreathDamage': [325, 325, 325, 325],
		},
	},
	'TFT9_Taliyah': {
		desc: `<spellPassive>Passive:</spellPassive> Whenever an enemy is knocked up or back by anything, throw a boulder towards them. It deals <magicDamage>@ModifiedBoulderDamage@ (%i:scaleAP%)</magicDamage> magic damage to the first enemy hit.<br><br><spellActive>Active:</spellActive> Deal <magicDamage>@ModifiedSpellDamage@ (%i:scaleAP%)</magicDamage> magic damage to your target and knock them up, Stunning them for @KnockupDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT9_Taliyah/HUD/Icons2D/TFT9_Taliyah_W.TFT_Set9.dds`,
		name: `Seismic Shove`,
		variables: {
			'KnockupDuration': [1, 2, 2, 2],
			'SpellDamage': [100, 160, 240, 370],
			'BoulderDamage': [100, 125, 190, 290],
		},
	},
	'TFT_TrainingDummy': {
		desc: `The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.`,
		icon: `ASSETS/Characters/TFTDebug_Dummy/HUD/Icons2D/TFTDebug_Dummy_DoNothing.dds`,
		name: `On Duty!`,
		variables: {},
	},
	'TFT9_Taric': {
		desc: `Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @Duration@ seconds. It absorbs damage received by adjacent allies.`,
		icon: `ASSETS/Characters/TFT9_Taric/HUD/Icons2D/TFT9_Taric_W.TFT_Set9.dds`,
		name: `Radiance`,
		variables: {
			'ShieldAmount': [0, 550, 650, 750],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT9_Teemo': {
		desc: `Hurl an explosive heat-seeking mushroom at the current target. When it detonates, enemies within 1 hex are <TFTKeyword>Wounded</TFTKeyword> and dealt <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage over @Duration@ seconds.<br><br>4-Star Upgrade: Increase the explosion radius by 1 hex.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by 33%</rules>`,
		icon: `ASSETS/Characters/TFT9_Teemo/HUD/Icons2D/TFT9_Teemo_R.TFT_Set9.dds`,
		name: `Noxious Trap`,
		variables: {
			'Damage': [0, 260, 390, 585],
			'DetonationDelay': [0.5, 0.5, 0.5, 0.5],
			'Duration': [3, 3, 3, 3],
			'TickRate': [0.5, 0.5, 0.5, 0.5],
			'HexRadius': [1, 1, 1, 1],
		},
	},
	'TFT9_Tristana': {
		desc: `Gain <TFTBonus>@ModifiedAttackSpeed@ (%i:scaleAP%)</TFTBonus> Attack Speed for @Duration@ seconds. For the duration, attacks explode on impact and deal <physicalDamage>@BonusDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies within 1 hex.<br><br>4-Star Upgrade: Every @NumberOfAttacks@th attack deals <physicalDamage>@4StarShotDamage@ (%i:scaleAD%)</physicalDamage> bonus physical damage and ricochets to the largest clump of enemies, dealing <physicalDamage>@ExplosionDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies within 1 hex.`,
		icon: `ASSETS/Characters/TFT9_Tristana/HUD/Icons2D/TFT9_Tristana_Q.TFT_Set9.dds`,
		name: `Rapid Fire`,
		variables: {
			'AttackSpeed': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
			'Duration': [4, 4, 4, 4],
			'PercentAttackDamage': [0.6000000238418579, 0.6000000238418579, 0.6000000238418579, 0.6000000238418579],
			'EmpoweredBonus': [1, 1, 1, 1],
			'ExplosionPercent': [0.5, 0.5, 0.5, 0.5],
			'NumberOfAttacks': [10, 10, 10, 10],
			'HexRadius': [1, 1, 1, 1],
		},
	},
	'TFT9_Urgot': {
		desc: `<spellPassive>Passive:</spellPassive> Whenever an enemy enters Attack Range, fire a blast from the leg facing that direction that deals <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage. Each of Urgot's 6 legs has a <scaleLevel>@Cooldown@</scaleLevel> second cooldown.<br><br><spellActive>Active:</spellActive> Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds and dash behind the current target. Reset all leg cooldowns.`,
		icon: `ASSETS/Characters/Urgot/HUD/Icons2D/Urgot_W.dds`,
		name: `Disdain`,
		variables: {
			'Cooldown': [4, 4, 4, 1],
			'PercentOfAttackDamage': [2.200000047683716, 2.200000047683716, 2.200000047683716, 2.200000047683716],
			'BaseDamage': [100, 40, 60, 500],
			'StunDuration': [1.5, 1.5, 1.5, 1.5],
			'ShieldAmount': [0, 350, 450, 1200],
			'ShieldDuration': [5, 5, 5, 5],
		},
	},
	'TFT9_VelKoz': {
		desc: `Fire a plasma bolt towards the current target that deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to the first enemy hit. It then splits in two, dealing @FalloffPercent*100@% less damage whenever it passes through an enemy.`,
		icon: `ASSETS/Characters/TFT9_VelKoz/HUD/Icons2D/TFT9_VelKoz_Q1.TFT_Set9.dds`,
		name: `Plasma Fission`,
		variables: {
			'MagicDamage': [0, 230, 345, 560],
			'FalloffPercent': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_Viego': {
		desc: `Deal <magicDamage>@ModifiedStabDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target. For the rest of combat, Viego's attacks deal <magicDamage>@ModifiedStackingDamage@ (%i:scaleAP%)</magicDamage> bonus stacking magic damage.<br><br><rules>(Current Bonus: +@TFTUnitProperty.:TFT9_ViegoBonusDamage@ magic damage)</rules>`,
		icon: `ASSETS/Characters/Viego/HUD/Icons2D/Viego_Passive.dds`,
		name: `Blade of the Ruined King`,
		variables: {
			'StabDamage': [0, 110, 165, 250],
			'Duration': [60, 60, 60, 60],
			'StackingDamage': [0, 20, 30, 45],
		},
	},
	'TFT9_Vi': {
		desc: `Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies within 1 hex of the current target and @ArmorShredPercent*100@% <TFTKeyword>Sunder</TFTKeyword> them for @ArmorShredDuration@ seconds.<br><br><tftitemrules><tftbold>Sunder:</tftbold> Reduce Armor</tftitemrules><br>`,
		icon: `ASSETS/Characters/Vi/HUD/Icons2D/ViPassive.dds`,
		name: `Blast Shield`,
		variables: {
			'ShieldAmount': [0, 325, 350, 400],
			'ShieldDuration': [4, 4, 4, 4],
			'ArmorShredPercent': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'ArmorShredDuration': [4, 4, 4, 4],
			'ADPercent': [2, 2, 2, 2],
		},
	},
	'TFT9_VoidRemora': {
		desc: `Gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield for @Duration@ seconds. When it expires, deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies. `,
		icon: `ASSETS/Characters/TFT9_VoidRemora/HUD/TFT9_VoidRemora_Square.TFT_Set9.dds`,
		name: `Void Shield`,
		variables: {
			'Duration': [2, 2, 2, 2],
			'Shield': [200, 200, 200, 200],
			'Damage': [125, 125, 125, 125],
		},
	},
	'TFT_Voidspawn': {
		desc: `The Voidspawn gains bonus Health and Attack Damage based on the current Stage. `,
		icon: `ASSETS/Characters/TFT_VoidSpawn/HUD/Voidspawn_square.dds`,
		name: `Voidborn`,
		variables: {},
	},
	'TFT9_Warwick': {
		desc: `<spellPassive>Passive:</spellPassive> Attacks heal for <scaleHealth>@ModifiedHealAmount@ (%i:scaleAP%)</scaleHealth>.<br><br><spellActive>Active:</spellActive> Increase the Passive healing by <scaleHealth>@IncreaseHealRatio*100@%</scaleHealth> for @Duration@ seconds. Then, Stun adjacent enemies for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/Warwick/HUD/Icons2D/WarwickP.dds`,
		name: `Primal Howl`,
		variables: {
			'HealAmount': [35, 30, 35, 40],
			'Duration': [2.5, 2.5, 2.5, 2.5],
			'StunDuration': [0, 1.25, 1.5, 2],
			'IncreaseHealRatio': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_Yasuo': {
		desc: `Send a whirlwind at the furthest enemy within <TFTBonus>@SpellRangeTooltip@</TFTBonus> hexes, knocking up and Stunning all enemies hit. Dash to and slash the original target, dealing <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to them. Slam them into the ground and deal <physicalDamage>@ModifiedAOEDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies within 1 hex.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@%</TFTBonus> <TFTKeyword>Omnivamp</TFTKeyword><br><br><rules><tftbold>Omnivamp: Heal for percentage of damage dealt</tftbold></rules>`,
		icon: `ASSETS/Characters/TFT9_Yasuo/HUD/Icons2D/TFT9_Yasuo_R.TFT_Set9.dds`,
		name: `Last Breath`,
		variables: {
			'KnockupDuration': [0, 1, 1, 1],
			'ADPercent': [0, 5, 5, 15],
			'BonusDamage': [0, 55, 85, 300],
			'HexRange': [3, 3, 3, 3],
			'AttackCount': [3, 3, 3, 3],
			'TornadoKnockupDuration': [0.5, 0.5, 0.5, 0.5],
			'TooltipIoniaBonus': [15, 15, 15, 15],
			'AOEADPercent': [2, 3, 3, 7.5],
		},
	},
	'TFT9_Zed': {
		desc: `Create a shadow at the furthest enemy within <TFTBonus>@SpellRangeTooltip@ (%i:scaleRange%)</TFTBonus> hexes. Zed and his shadow slash adjacent enemies, dealing <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage. <br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@%</TFTBonus> Critical Strike Chance and Critical Strike Damage`,
		icon: `ASSETS/Characters/TFT9_Zed/HUD/Icons2D/shadowninja_W2.TFT_Set9.dds`,
		name: `Living Shadow`,
		variables: {
			'DamagePercent': [0, 1.399999976158142, 1.399999976158142, 1.5],
			'ShadowRange': [2, 2, 2, 2],
			'BaseDamage': [0, 25, 40, 50],
			'TooltipIoniaBonus': [15, 15, 15, 15],
		},
	},
	'TFT9_Zeri': {
		desc: `<spellPassive>Passive:</spellPassive> Execute enemies below <TFTBonus>@ModifiedExecuteThreshold@ (%i:scaleAP%)</TFTBonus> Health. <br><br><spellActive>Active:</spellActive> For the next @OverchargeDuration@ seconds, attacks chain lightning to <scaleLevel>@EnemyCount@</scaleLevel> additional enemies, dealing <physicalDamage>@TotalChainDamage@ (%i:scaleAD%)</physicalDamage> physical damage.`,
		icon: `ASSETS/Characters/TFT9_Zeri/HUD/Icons2D/TFT9_ZeriR.TFT_Set9.dds`,
		name: `Surge`,
		variables: {
			'NumBullets': [3, 3, 3, 3],
			'ADRatioPerBullet': [0.3400000035762787, 0.3400000035762787, 0.3400000035762787, 0.3400000035762787],
			'OverchargeDuration': [9, 8, 8, 15],
			'OverchargeChainRatio': [0.4000000059604645, 0.44999998807907104, 0.44999998807907104, 1],
			'ExecuteThresholdBase': [0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066],
			'EnemyCount': [3, 3, 3, 5],
			'ExecuteThresholdAP': [0.03999999910593033, 0.03999999910593033, 0.03999999910593033, 0.03999999910593033],
		},
	},
}
