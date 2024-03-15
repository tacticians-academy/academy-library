import type { AbilityData, ChampionData } from '../index'

export enum ChampionKey { Aatrox = `TFT9b_Aatrox`, Ahri = `TFT9_Ahri`, HeimerdingerTurret = `TFT9_HeimerdingerTurret`, Aphelios = `TFT9_Aphelios`, Ashe = `TFT9_Ashe`, Azir = `TFT9_Azir`, BaronNashor = `TFT9_BaronNashor`, BelVeth = `TFT9_BelVeth`, Cassiopeia = `TFT9_Cassiopeia`, ChoGath = `TFT9_ChoGath`, Darius = `TFT9_Darius`, Ekko = `TFT9_Ekko`, Fiora = `TFT9_Fiora`, Galio = `TFT9_Galio`, Gangplank = `TFT9_Gangplank`, Graves = `TFT9_Graves`, Heimerdinger = `TFT9_Heimerdinger`, Illaoi = `TFT9_Illaoi`, Irelia = `TFT9_Irelia`, JarvanIV = `TFT9_JarvanIV`, Jayce = `TFT9_Jayce`, Jhin = `TFT9_Jhin`, Jinx = `TFT9_Jinx`, KSante = `TFT9_KSante`, KaiSa = `TFT9_KaiSa`, Karma = `TFT9_Karma`, Kassadin = `TFT9_Kassadin`, Katarina = `TFT9_Katarina`, Kayle = `TFT9_Kayle`, Malzahar = `TFT9_Malzahar`, Milio = `TFT9_Milio`, MissFortune = `TFT9_MissFortune`, Mordekaiser = `TFT9_Mordekaiser`, Naafiri = `TFT9_Naafiri`, Nasus = `TFT9_Nasus`, Nautilus = `TFT9_Nautilus`, Neeko = `TFT9_Neeko`, Nilah = `TFT9_Nilah`, NoxianFlag = `TFT9_NoxianFlag`, Orianna = `TFT9_Orianna`, Poppy = `TFT9_Poppy`, Qiyana = `TFT9_Qiyana`, Quinn = `TFT9_Quinn`, RekSai = `TFT9_RekSai`, Renekton = `TFT9_Renekton`, RiftHerald = `TFT9_RiftHerald`, Ryze = `TFT9_Ryze`, RyzeBandleCity = `TFT9_RyzeBandleCity`, RyzeBilgewater = `TFT9_RyzeBilgewater`, RyzeDemacia = `TFT9_RyzeDemacia`, RyzeFreljord = `TFT9_RyzeFreljord`, RyzeIonia = `TFT9_RyzeIonia`, RyzeIxtal = `TFT9_RyzeIxtal`, RyzeNoxus = `TFT9_RyzeNoxus`, RyzePiltover = `TFT9_RyzePiltover`, RyzeShadowIsles = `TFT9_RyzeShadowIsles`, RyzeShurima = `TFT9_RyzeShurima`, RyzeTargon = `TFT9_RyzeTargon`, RyzeZaun = `TFT9_RyzeZaun`, Samira = `TFT9_Samira`, Sejuani = `TFT9_Sejuani`, Sett = `TFT9_Sett`, Shen = `TFT9_Shen`, Silco = `TFT9_Silco`, Sion = `TFT9_Sion`, Sona = `TFT9_Sona`, Soraka = `TFT9_Soraka`, AscendedSunDisc = `TFT9_AscendedSunDisc`, Swain = `TFT9_Swain`, THex = `TFT9_THex`, Taliyah = `TFT9_Taliyah`, TrainingDummy = `TFT_TrainingDummy`, Taric = `TFT9_Taric`, TwistedFate = `TFT9_TwistedFate`, VelKoz = `TFT9_VelKoz`, Vi = `TFT9_Vi`, VoidRemora = `TFT9_VoidRemora`, Voidspawn = `TFT_Voidspawn`, Warwick = `TFT9_Warwick`, Xayah = `TFT9_Xayah` }

export const champions: ChampionData[] = [
	{
		apiName: `TFT9b_Aatrox`,
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
			hp: 900,
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
				name: `TFT9b_AatroxSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'Duration': [10, 12, 12, 30],
					'DarkinOmnivamp': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'GreatswordADRatio': [0, 2.9000000953674316, 3, 25],
					'ADPerASConversion': [0.800000011920929, 0.800000011920929, 0.800000011920929, 0.800000011920929],
					'MovementSpeed': [700, 700, 700, 700],
					'DarkinHealth': [250, 250, 250, 250],
					'DarkinReviveTime': [4, 4, 4, 4],
				},
				calculations: {
					'GreatswordDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `GreatswordADRatio`,
										starValues: [0, 2.9000000953674316, 3, 25],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'Omnivamp': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DarkinOmnivamp`,
										starValues: [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
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
				name: `TFT9b_AatroxQ1`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9b_AatroxQ2`,
				castTime: undefined,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9b_AatroxQ3`,
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
					'MagicDamage': [0, 260, 390, 1999],
					'EssenceDamage': [0, 105, 150, 1000],
					'NumCastsToBoom': [2, 2, 2, 0],
					'EssenceStolenMultiplier': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
					'TooltipIoniaBonus': [3, 3, 3, 3],
					'TooltipReave': [20, 20, 20, 20],
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
										starValues: [0, 260, 390, 1999],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'ActualBoomTooltip': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `NumCastsToBoom`,
										starValues: [2, 2, 2, 0],
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
					'EssenceDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `EssenceDamage`,
										starValues: [0, 105, 150, 1000],
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
		traits: [`Targon`, `Gunner`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 750,
			initialMana: 50,
			magicResist: 25,
			mana: 100,
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
					'BlastPercentAD': [1.7999999523162842, 2.4000000953674316, 2.4000000953674316, 7.5],
					'ChakramDuration': [7, 7, 7, 7],
					'ChakramPercentAD': [0.10000000149011612, 0.07000000029802322, 0.07000000029802322, 0.15000000596046448],
					'ChakramHealing': [0.75, 0.75, 0.75, 0.75],
					'BaseChakramNumber': [3, 3, 3, 3],
					'BlastSize': [2, 2, 2, 2],
					'MaxChakrams': [10, 10, 12, 20],
				},
				calculations: {
					'BlastDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BlastPercentAD`,
										starValues: [1.7999999523162842, 2.4000000953674316, 2.4000000953674316, 7.5],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ChakramDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ChakramPercentAD`,
										starValues: [0.10000000149011612, 0.07000000029802322, 0.07000000029802322, 0.15000000596046448],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ChakramHealing': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ChakramHealing`,
										starValues: [0.75, 0.75, 0.75, 0.75],
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
		traits: [`Freljord`, `Vanquisher`],
		stats: {
			armor: 20,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 600,
			initialMana: 20,
			magicResist: 20,
			mana: 70,
			moveSpeed: 500,
			range: 6,
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
					'ADPercent': [0, 1.600000023841858, 1.649999976158142, 1.75],
					'BonusDamage': [10, 10, 10, 10],
					'Shots': [0, 8, 8, 8],
					'Duration': [2, 2, 2, 2],
					'Chill': [30, 30, 30, 30],
				},
				calculations: {
					'ArrowDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `ADPercent`,
										starValues: [0, 1.600000023841858, 1.649999976158142, 1.75],
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
			attackSpeed: 0.800000011920929,
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
					'BaseMagicDamage': [35, 110, 160, 500],
					'Duration': [90, 90, 90, 90],
					'MaxSummons': [3, 3, 3, 3],
					'BonusRatio': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
				},
				calculations: {
					'MagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseMagicDamage`,
										starValues: [35, 110, 160, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MaxSoldierStrike': {
						asPercent: false,
						parts: [
							{
								operator: `product`,
								subparts: [
									{
										variable: `BaseMagicDamage`,
										starValues: [35, 110, 160, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `BonusRatio`,
										starValues: [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
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
										variable: `BaseMagicDamage`,
										starValues: [70, 80, 120, 1000],
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
					'TooltipShred': [40, 40, 40, 40],
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
			armor: 60,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 1100,
			initialMana: 20,
			magicResist: 60,
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
					'NumStrikes': [5, 6, 6, 25],
					'PercentAD': [0.8500000238418579, 0.8500000238418579, 0.8500000238418579, 0.8500000238418579],
					'PercentHealthTrueDamage': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'BonusFlatDamage': [15, 18, 30, 100],
					'StrikesPer100BonusAS': [5, 5, 5, 5],
				},
				calculations: {
					'NumStrikes': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `NumStrikes`,
										starValues: [5, 6, 6, 25],
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
										starValues: [0.8500000238418579, 0.8500000238418579, 0.8500000238418579, 0.8500000238418579],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusFlatDamage`,
										starValues: [15, 18, 30, 100],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'FlatDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusFlatDamage`,
										starValues: [15, 18, 30, 100],
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
					'BaseDamage': [0, 160, 240, 360],
					'DamageAmp': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
					'WoundDuration': [5, 5, 5, 5],
					'TooltipWound': [50, 50, 50, 50],
				},
				calculations: {
					'BaseDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 160, 240, 360],
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
										starValues: [0, 160, 240, 360],
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
			damage: 65,
			hp: 700,
			initialMana: 40,
			magicResist: 30,
			mana: 100,
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
					'PercentMaximumHealthDamage': [0.11999999731779099, 0.11999999731779099, 0.11999999731779099, 0.11999999731779099],
					'BonusDamage': [140, 270, 370, 500],
					'BonusHealthOnKill': [35, 35, 35, 35],
				},
				calculations: {
					'BonusDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusDamage`,
										starValues: [140, 270, 370, 500],
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
										variable: `BonusDamage`,
										starValues: [140, 270, 370, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `PercentMaximumHealthDamage`,
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
		traits: [`Noxus`, `Juggernaut`, `Vanquisher`],
		stats: {
			armor: 50,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 750,
			initialMana: 20,
			magicResist: 50,
			mana: 80,
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
					'AbilityScaleDamage': [100, 55, 80, 110],
					'PercentDamageFalloff': [0, 0.8999999761581421, 0.949999988079071, 1],
				},
				calculations: {
					'AbilityScaleDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AbilityScaleDamage`,
										starValues: [100, 55, 80, 110],
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
										variable: `AbilityScaleDamage`,
										starValues: [100, 55, 80, 110],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `AttackDamagePercent`,
										starValues: [3.5, 3.5, 3.5, 3.5],
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
					'Damage': [0, 255, 380, 570],
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
										starValues: [0, 255, 380, 570],
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
		apiName: `TFT9_Fiora`,
		name: `Fiora`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Fiora.TFT_Set9_Stage2.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Challenger`],
		stats: {
			armor: 45,
			attackSpeed: 0.8999999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 950,
			initialMana: 60,
			magicResist: 45,
			mana: 120,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT9_FioraSpell`,
				castTime: 0.20000000298023224,
				missile: undefined,
				variables: {
					'PercentAD': [1.5499999523162842, 1.600000023841858, 1.600000023841858, 2.4000000953674316],
					'BonusTrueDamage': [75, 60, 90, 270],
					'PercentHealing': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
					'NumStrikes': [4, 4, 4, 4],
					'DamageReduction': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
				},
				calculations: {
					'BonusDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusTrueDamage`,
										starValues: [75, 60, 90, 270],
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
										variable: `PercentAD`,
										starValues: [1.5499999523162842, 1.600000023841858, 1.600000023841858, 2.4000000953674316],
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
			mana: 110,
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
					'Duration': [2.5, 2.5, 2.5, 2.5],
					'Heal': [0, 300, 350, 400],
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
										starValues: [0, 300, 350, 400],
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
		apiName: `TFT9_Gangplank`,
		name: `Gangplank`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Gangplank.TFT_Set9_Stage2.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Gunner`, `Reaver King`],
		stats: {
			armor: 30,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 1000,
			initialMana: 90,
			magicResist: 30,
			mana: 180,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_GangplankSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MeleePassiveADRatio': [0, 2.5, 2.5, 25],
					'MeleePassiveDuration': [2, 2, 2, 2],
					'ActiveMagicDamage': [0, 450, 675, 9001],
					'ActiveAttackSpeed': [0, 0.3499999940395355, 0.5, 3],
					'ActiveAttackSpeedDuration': [3, 3, 3, 3],
					'ReaverKingMeleeBonusResists': [50, 50, 50, 50],
					'ReaverKingRangedBonusHexRange': [3, 3, 3, 3],
					'ReaverKingRangedBonusMana': [5, 5, 5, 5],
				},
				calculations: {
					'MeleePassiveTotalDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `MeleePassiveADRatio`,
										starValues: [0, 2.5, 2.5, 25],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'ActiveMagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ActiveMagicDamage`,
										starValues: [0, 450, 675, 9001],
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
				name: `TFT9_GangplankBasicAttack_Ranged`,
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
				name: `TFT9_GangplankCritAttack_Ranged`,
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
				name: `TFT9_GangplankBasicAttack2_Ranged`,
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
				name: `TFT9_GangplankSpell_Boat`,
				castTime: undefined,
				missile: {
					width: 260,
					travelTime: undefined,
					speedInitial: 1000,
					speedMin: 800,
					speedMax: 1000,
					acceleration: -200,
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
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_GangplankBasicAttack2`,
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
		apiName: `TFT9_Graves`,
		name: `Graves`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Graves.TFT_Set9_Stage2.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Gunner`, `Rogue`],
		stats: {
			armor: 40,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 700,
			initialMana: 30,
			magicResist: 40,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 3000,
		critAttackMissileSpeed: 3400,
		passive: undefined,
		spells: [
			{
				name: `TFT9_GravesSpell`,
				castTime: 0.25,
				missile: {
					width: 120,
					travelTime: undefined,
					speedInitial: 1500,
					speedMin: 1500,
					speedMax: 5000,
					acceleration: 5000,
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
				variables: {
					'PercentAttackDamage': [0, 2, 2, 2.049999952316284],
					'AbilityScaleDamage': [0, 30, 45, 60],
					'CCDuration': [1, 3, 3.5, 4],
					'TooltipChillPercent': [30, 30, 30, 30],
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
										starValues: [0, 2, 2, 2.049999952316284],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AbilityScaleDamage`,
										starValues: [0, 30, 45, 60],
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
				name: `TFT9_GravesBasicAttackSpread`,
				castTime: undefined,
				missile: {
					width: 20,
					travelTime: undefined,
					speedInitial: 3800,
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
					'DamageMultiplier': [0, 0.05000000074505806, 0.10000000149011612, 0.15000000596046448],
				},
				calculations: {
					'BonusDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `DamageMultiplier`,
										starValues: [0, 0.05000000074505806, 0.10000000149011612, 0.15000000596046448],
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
		apiName: `TFT9_Heimerdinger`,
		name: `Heimerdinger`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Heimerdinger.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Piltover`, `Technogenius`],
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
		apiName: `TFT9_Illaoi`,
		name: `Illaoi`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Illaoi.TFT_Set9_Stage2.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Bastion`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 700,
			initialMana: 30,
			magicResist: 40,
			mana: 70,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 467,
		critAttackMissileSpeed: 467,
		passive: undefined,
		spells: [
			{
				name: `TFT9_IllaoiSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'MagicDamage': [0, 250, 375, 560],
					'PercentHealing': [0, 0.25, 0.30000001192092896, 0.4000000059604645],
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
										starValues: [0, 250, 375, 560],
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
										variable: `ShieldHealth`,
										starValues: [200, 350, 400, 450],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BaseStrikeDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `StrikeBaseDamage`,
										starValues: [50, 70, 100, 150],
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
					'StunDuration': [2.5, 1.5, 2, 8],
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
			damage: 60,
			hp: 700,
			initialMana: 30,
			magicResist: 25,
			mana: 80,
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
					'PercentAttackSpeed': [0.5, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
					'Duration': [3, 3, 3, 3],
					'PercentAttackDamage': [0, 2.75, 2.75, 2.950000047683716],
					'HexRange': [1, 1, 1, 1],
					'TooltipPercentAttackDamage': [0, 275, 275, 295],
					'SelfAttackSpeed': [0.30000001192092896, 0.30000001192092896, 0.4000000059604645, 0.5],
				},
				calculations: {
					'PercentAttackSpeed': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentAttackSpeed`,
										starValues: [0.5, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
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
										starValues: [0, 2.75, 2.75, 2.950000047683716],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'EnhancedAttackSpeed': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SelfAttackSpeed`,
										starValues: [0.30000001192092896, 0.30000001192092896, 0.4000000059604645, 0.5],
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
		traits: [`Ionia`, `Vanquisher`],
		stats: {
			armor: 14,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 54,
			hp: 504,
			initialMana: 44,
			magicResist: 14,
			mana: 114,
			moveSpeed: 500,
			range: 5,
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
					'FalloffPercent': [0.5600000023841858, 0.5600000023841858, 0.5600000023841858, 0.5600000023841858],
					'Damage': [0, 60, 90, 135],
				},
				calculations: {
					'MissingHealthPercentBonus': {
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
			damage: 50,
			hp: 600,
			initialMana: 10,
			magicResist: 20,
			mana: 70,
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
					'PercentAttackDamage': [0, 1.5, 1.5499999523162842, 1.600000023841858],
					'AbilityScaleDamage': [20, 15, 20, 35],
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
										starValues: [0, 1.5, 1.5499999523162842, 1.600000023841858],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AbilityScaleDamage`,
										starValues: [20, 15, 20, 35],
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
			armor: 50,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 0,
			magicResist: 50,
			mana: 70,
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
					'CollisionDamage': {
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
			initialMana: 60,
			magicResist: 35,
			mana: 120,
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
					'BaseDamage': [0, 80, 120, 240],
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
										starValues: [0, 80, 120, 240],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SpellRange': {
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
			mana: 45,
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
					'MagicDamage': [0, 200, 300, 470],
					'TooltipIoniaBonus': [25, 25, 25, 25],
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
										starValues: [0, 200, 300, 470],
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
					'Damage': [100, 160, 240, 360],
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
										starValues: [100, 160, 240, 360],
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
					'Damage': [0, 145, 220, 350],
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
										starValues: [0, 145, 220, 350],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SpellRange': {
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
										variable: `BonusSpellRange`,
										starValues: [1, 1, 1, 1],
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
					'Damage': [0, 30, 45, 70],
					'ShredAmount': [20, 20, 20, 20],
					'FirstAscensionLevel': [6, 6, 6, 6],
					'SecondAscensionLevel': [9, 9, 9, 9],
					'ShredDuration': [3, 3, 3, 3],
					'AscensionDamage': [0, 30, 40, 60],
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
										starValues: [0, 30, 45, 70],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'AscensionModifiedMagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AscensionDamage`,
										starValues: [0, 30, 40, 60],
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
					'Damage': [0, 220, 330, 500],
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
										starValues: [0, 220, 330, 500],
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
		apiName: `TFT9_Milio`,
		name: `Milio`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Milio.TFT_Set9_Stage2.tex`,
		cost: 1,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ixtal`, `Invoker`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 500,
			initialMana: 0,
			magicResist: 20,
			mana: 60,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1900,
		critAttackMissileSpeed: 1900,
		passive: undefined,
		spells: [
			{
				name: `TFT9_MilioSpell`,
				castTime: 0.25,
				missile: {
					width: 60,
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
					'MagicDamage': [0, 220, 330, 500],
					'Duration': [1.5, 1.5, 1.5, 1.5],
					'MagicDamageAOE': [0, 180, 270, 400],
					'SplashDamage': [0, 90, 140, 200],
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
										starValues: [0, 220, 330, 500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'DamageAoE': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MagicDamageAOE`,
										starValues: [0, 180, 270, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SplashDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SplashDamage`,
										starValues: [0, 90, 140, 200],
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
				name: `TFT9_MilioSpellBounce`,
				castTime: undefined,
				missile: {
					width: 60,
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
					],
					type: `FixedTimeMovement`,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
			{
				name: `TFT9_MilioSpellMissile`,
				castTime: 0.25,
				missile: {
					width: 60,
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
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
	{
		apiName: `TFT9_MissFortune`,
		name: `Miss Fortune`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_MissFortune.TFT_Set9_Stage2.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Strategist`],
		stats: {
			armor: 25,
			attackSpeed: 0.699999988079071,
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
				name: `TFT9_MissFortuneSpell`,
				castTime: 1,
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
					'MagicDamage': [0, 240, 360, 580],
					'ShieldReavePercent': [0, 0.3499999940395355, 0.3499999940395355, 0.3499999940395355],
					'ShieldReaveDuration': [0, 5, 5, 5],
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
										starValues: [0, 240, 360, 580],
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
		apiName: `TFT9_Mordekaiser`,
		name: `Mordekaiser`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Mordekaiser.TFT_Set9_Stage2.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Slayer`],
		stats: {
			armor: 50,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 1000,
			initialMana: 30,
			magicResist: 50,
			mana: 80,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_MordekaiserSpell`,
				castTime: 0.75,
				missile: undefined,
				variables: {
					'BonusDamage': [100, 100, 150, 375],
					'RealmBonusDamage': [100, 250, 375, 900],
					'Duration': [5, 5, 5, 5],
					'PercentHealthShield': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'PercentStatSteal': [0.10000000149011612, 0.05999999865889549, 0.05999999865889549, 0.15000000596046448],
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
										starValues: [100, 100, 150, 375],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'RealmDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `RealmBonusDamage`,
										starValues: [100, 250, 375, 900],
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
										variable: `PercentHealthShield`,
										starValues: [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
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
		missiles: [
			{
				name: `TFT9_MordekaiserEmpoweredAttack`,
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
				name: `TFT9_MordekaiserEmpoweredAttack3`,
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
				name: `TFT9_MordekaiserEmpoweredAttack2`,
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
		apiName: `TFT9_Naafiri`,
		name: `Naafiri`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Naafiri.TFT_Set9_Stage2.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Darkin`, `Shurima`, `Challenger`],
		stats: {
			armor: 40,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 750,
			initialMana: 0,
			magicResist: 40,
			mana: 50,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT9_NaafiriSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'ADRatio': [1.2000000476837158, 1.75, 1.75, 1.7999999523162842],
					'NumPackmates': [0, 2, 3, 4],
					'TotalPackmateADRatio': [1.7999999523162842, 1.899999976158142, 1.9500000476837158, 2],
					'PackmateHealing': [75, 75, 75, 75],
					'DaggerOmnivamp': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
				},
				calculations: {
					'Omnivamp': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DaggerOmnivamp`,
										starValues: [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
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
										variable: `ADRatio`,
										starValues: [1.2000000476837158, 1.75, 1.75, 1.7999999523162842],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'PackmateDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `TotalPackmateADRatio`,
										starValues: [1.7999999523162842, 1.899999976158142, 1.9500000476837158, 2],
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
		apiName: `TFT9_Nasus`,
		name: `Nasus`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Nasus.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Shurima`, `Juggernaut`],
		stats: {
			armor: 55,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 1000,
			initialMana: 70,
			magicResist: 55,
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
					'PercentHealthSteal': [0.10000000149011612, 0.03999999910593033, 0.03999999910593033, 0.15000000596046448],
					'PercentADSteal': [0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066],
					'FlatResistanceSteal': [3, 4, 4, 20],
					'Duration': [8, 8, 8, 8],
					'EmpoweredDamagePct': [3.5, 3.799999952316284, 3.799999952316284, 7],
					'NumEnemies': [3, 4, 5, 7],
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
										variable: `EmpoweredDamagePct`,
										starValues: [3.5, 3.799999952316284, 3.799999952316284, 7],
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
		apiName: `TFT9_Nautilus`,
		name: `Nautilus`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Nautilus.TFT_Set9_Stage2.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Juggernaut`],
		stats: {
			armor: 40,
			attackSpeed: 0.5,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 80,
			hp: 950,
			initialMana: 60,
			magicResist: 40,
			mana: 140,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 1000,
		critAttackMissileSpeed: 1000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_NautilusSpell`,
				castTime: 0.6499999761581421,
				missile: undefined,
				variables: {
					'StatAmp': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
					'Damage': [0, 150, 225, 360],
					'StunDuration': [1, 1.5, 1.5, 2],
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
										starValues: [0, 150, 225, 360],
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
		apiName: `TFT9_Neeko`,
		name: `Neeko`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Neeko.TFT_Set9_Stage2.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ixtal`, `Bastion`],
		stats: {
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 800,
			initialMana: 50,
			magicResist: 45,
			mana: 120,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_NeekoSpell`,
				castTime: 0.75,
				missile: undefined,
				variables: {
					'Shield': [0, 250, 325, 425],
					'ShieldDuration': [3, 3, 3, 3],
					'Damage': [50, 300, 450, 700],
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
										starValues: [50, 300, 450, 700],
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
										starValues: [0, 250, 325, 425],
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
		apiName: `TFT9_Nilah`,
		name: `Nilah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Nilah.TFT_Set9_Stage2.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Vanquisher`],
		stats: {
			armor: 45,
			attackSpeed: 0.800000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 75,
			hp: 950,
			initialMana: 20,
			magicResist: 45,
			mana: 60,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: 347.79998779296875,
		critAttackMissileSpeed: 347.79998779296875,
		passive: undefined,
		spells: [
			{
				name: `TFT9_NilahSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'CleaveTargets': [2, 2, 2, 2],
					'CleaveDamage': [75, 0.550000011920929, 0.550000011920929, 1],
					'AttackSpeed': [0.20000000298023224, 0.18000000715255737, 0.18000000715255737, 0.4000000059604645],
					'DashRange': [3, 3, 3, 3],
					'ShieldAmount': [0, 250, 375, 700],
					'ShieldDuration': [3, 3, 3, 3],
					'EmpoweredLineDamage': [1.5, 1.7000000476837158, 1.75, 3.75],
				},
				calculations: {
					'CleaveDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `CleaveDamage`,
										starValues: [75, 0.550000011920929, 0.550000011920929, 1],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'EmpoweredDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `EmpoweredLineDamage`,
										starValues: [1.5, 1.7000000476837158, 1.75, 3.75],
										stat: `AD`,
										ratio: 1,
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
										starValues: [0, 250, 375, 700],
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
				name: `TFT9_NilahSpellAttackEmpowered`,
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
				name: `TFT9_NilahSpellAttack`,
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
				name: `TFT9_NilahSpellAttack2`,
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
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 35,
			hp: 500,
			initialMana: 20,
			magicResist: 15,
			mana: 70,
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
					'ShieldHealth': [200, 200, 225, 275],
					'ShieldDuration': [4, 4, 4, 4],
					'MagicDamage': [50, 290, 435, 650],
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
										starValues: [50, 290, 435, 650],
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
										variable: `ShieldHealth`,
										starValues: [200, 200, 225, 275],
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
		traits: [`Demacia`, `Bastion`],
		stats: {
			armor: 40,
			attackSpeed: 0.550000011920929,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 700,
			initialMana: 30,
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
					'ShieldAmount': [120, 250, 325, 400],
					'ShieldDuration': [4, 4, 4, 4],
					'StunDuration': [0.25, 0.25, 0.25, 0.25],
					'CollisionDamagePercent': [15, 15, 15, 15],
					'HexRadius': [0, 0, 0, 0],
					'Damage': [0, 160, 240, 360],
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
										starValues: [120, 250, 325, 400],
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
										starValues: [0, 160, 240, 360],
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
		apiName: `TFT9_Qiyana`,
		name: `Qiyana`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Qiyana.TFT_Set9_Stage2.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ixtal`, `Slayer`, `Rogue`],
		stats: {
			armor: 35,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 55,
			hp: 650,
			initialMana: 40,
			magicResist: 35,
			mana: 100,
			moveSpeed: 500,
			range: 1,
		},
		basicAttackMissileSpeed: 0,
		critAttackMissileSpeed: 0,
		passive: undefined,
		spells: [
			{
				name: `TFT9_QiyanaSpell`,
				castTime: 0.5,
				missile: undefined,
				variables: {
					'BaseDamage': [0, 2.549999952316284, 2.549999952316284, 2.700000047683716],
					'AbilityScaleDamage': [0, 40, 60, 90],
					'PrimaryStunDuration': [1.5, 1.5, 1.5, 1.5],
					'SecondaryStunDuration': [0.5, 0.5, 0.5, 0.5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `AbilityScaleDamage`,
										starValues: [0, 40, 60, 90],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
									{
										variable: `BaseDamage`,
										starValues: [0, 2.549999952316284, 2.549999952316284, 2.700000047683716],
										stat: `AD`,
										ratio: 1,
									},
								],
							},
						],
					},
					'AbilityScaleDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AbilityScaleDamage`,
										starValues: [0, 40, 60, 90],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{d5951215}': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `BaseDamage`,
										starValues: [0, 2.549999952316284, 2.549999952316284, 2.700000047683716],
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
				name: `TFT9_QiyanaQMis`,
				castTime: 0.5,
				missile: {
					width: 230,
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
		apiName: `TFT9_Quinn`,
		name: `Quinn`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Quinn.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Demacia`, `Slayer`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 700,
			initialMana: 30,
			magicResist: 25,
			mana: 90,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_QuinnSpell`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'AmpDamage': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'PercentAD': [6, 5.5, 5.550000190734863, 5.650000095367432],
					'Duration': [4, 4, 4, 4],
				},
				calculations: {
					'AmpDamage': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `{b577e694}`,
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
										variable: `PercentAD`,
										starValues: [6, 5.5, 5.550000190734863, 5.650000095367432],
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
				name: `TFT9_QuinnSpellShoot`,
				castTime: 0.25,
				missile: undefined,
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: true,
			},
			{
				name: `TFT9_QuinnSpellArrow`,
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
							__type: `CastOnMovementComplete`,
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
			{
				name: `TFT9_QuinnSpellValor`,
				castTime: undefined,
				missile: {
					width: 60,
					travelTime: undefined,
					speedInitial: 3600,
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
				uninterruptable: true,
			},
		],
	},
	{
		apiName: `TFT9_RekSai`,
		name: `Rek'Sai`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_RekSai.TFT_Set9.tex`,
		cost: 3,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Void`, `Bruiser`, `Slayer`],
		stats: {
			armor: 45,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 60,
			hp: 800,
			initialMana: 50,
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
					'PercentOfAD': [2.6500000953674316, 2.5, 2.5, 2.549999952316284],
					'PercentMaxHealthHeal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
					'HealthThreshold': [0.6600000262260437, 0.6600000262260437, 0.6600000262260437, 0.6600000262260437],
					'PercentOfADMark': [1.350000023841858, 2.4000000953674316, 2.4000000953674316, 2.5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentOfAD`,
										starValues: [2.6500000953674316, 2.5, 2.5, 2.549999952316284],
										stat: `AD`,
										ratio: 1,
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
										variable: `PercentMaxHealthHeal`,
										starValues: [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
										stat: `HP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'HealPercent': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentMaxHealthHeal`,
										starValues: [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'MarkDamage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `{82c2447f}`,
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
					'InitialHeal': {
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
					'KickerHeal': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `KickerHeal`,
										starValues: [30, 30, 30, 30],
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
			armor: 50,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 30,
			magicResist: 50,
			mana: 999,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellIxtal`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'ArmorScalar': [1.5, 2, 3, 15],
					'MRScalar': [1.5, 2, 3, 15],
					'StunDuration': [2, 2, 2.5, 10],
					'BarkskinDuration': [4, 4, 4, 4],
					'BarskinDefenceScalar': [1, 1, 1, 1],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ArmorScalar`,
										starValues: [1.5, 2, 3, 15],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MRScalar`,
										starValues: [1.5, 2, 3, 15],
										stat: undefined,
										ratio: 1,
									},
								],
							},
						],
					},
					'Armor': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BarskinDefenceScalar`,
										starValues: [1, 1, 1, 1],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
						],
					},
					'MR': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BarskinDefenceScalar`,
										starValues: [1, 1, 1, 1],
										stat: undefined,
										ratio: 1,
									},
								],
							},
						],
					},
					'BarkskinDuration': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BarkskinDuration`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT9_RyzeIxtalBasicAttack2`,
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
				name: `TFT9_RyzeIxtalBasicAttack`,
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
				name: `TFT9_RyzeIxtalCritAttack`,
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
			mana: 65,
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
					'BonusMana': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusMana`,
										starValues: [0, 25, 70, 200],
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
		apiName: `TFT9_RyzeBilgewater`,
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
			initialMana: 0,
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
				name: `TFT9_RyzeSpellBilgewater`,
				castTime: 1,
				missile: undefined,
				variables: {
					'Damage': [0, 350, 525, 7777],
					'PercentScalar': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
					'PerGoldScalar': [2, 2, 2, 2],
					'BaseLootPercent': [0.05000000074505806, 0.05000000074505806, 0.10000000149011612, 1],
					'KillLootPercent': [0.10000000149011612, 0.10000000149011612, 0.20000000298023224, 1],
					'BaseGoldPercent': [0.10000000149011612, 0.10000000149011612, 0.20000000298023224, 1],
					'KillGoldPercent': [0.20000000298023224, 0.20000000298023224, 0.4000000059604645, 1],
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
										starValues: [0, 350, 525, 7777],
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
				name: `TFT9_RyzeSpellBilgewater_ChestMis_Boot`,
				castTime: undefined,
				missile: {
					width: 1,
					travelTime: undefined,
					speedInitial: 80,
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
				name: `TFT9_RyzeBilgewaterBasicAttack`,
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
				name: `TFT9_RyzeBilgewaterBasicAttack2`,
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
				name: `TFT9_RyzeSpellBilgewater_ChestMisMini`,
				castTime: undefined,
				missile: {
					width: 1,
					travelTime: undefined,
					speedInitial: 120,
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
				name: `TFT9_RyzeSpellBilgewater_ChestMis`,
				castTime: undefined,
				missile: {
					width: 1,
					travelTime: undefined,
					speedInitial: 80,
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
				name: `TFT9_RyzeBilgewaterCritAttack`,
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
			mana: 100,
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
					'Damage': [125, 300, 450, 2000],
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
										starValues: [125, 300, 450, 2000],
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
			initialMana: 15,
			magicResist: 30,
			mana: 60,
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
		apiName: `TFT9_RyzeIxtal`,
		name: `Ryze`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Ryze.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Wanderer`, `Invoker`],
		stats: {
			armor: 50,
			attackSpeed: 0.8500000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 50,
			hp: 1111,
			initialMana: 30,
			magicResist: 50,
			mana: 100,
			moveSpeed: 500,
			range: 2,
		},
		basicAttackMissileSpeed: undefined,
		critAttackMissileSpeed: undefined,
		passive: undefined,
		spells: [
			{
				name: `TFT9_RyzeSpellIxtal`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'ArmorScalar': [1.5, 2, 3, 15],
					'MRScalar': [1.5, 2, 3, 15],
					'StunDuration': [2, 2, 2.5, 10],
					'BarkskinDuration': [4, 4, 4, 4],
					'BarskinDefenceScalar': [1, 1, 1, 1],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ArmorScalar`,
										starValues: [1.5, 2, 3, 15],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
							{
								operator: `scale`,
								subparts: [
									{
										variable: `MRScalar`,
										starValues: [1.5, 2, 3, 15],
										stat: undefined,
										ratio: 1,
									},
								],
							},
						],
					},
					'Armor': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BarskinDefenceScalar`,
										starValues: [1, 1, 1, 1],
										stat: `Armor`,
										ratio: 1,
									},
								],
							},
						],
					},
					'MR': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BarskinDefenceScalar`,
										starValues: [1, 1, 1, 1],
										stat: undefined,
										ratio: 1,
									},
								],
							},
						],
					},
					'BarkskinDuration': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BarkskinDuration`,
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
				uninterruptable: undefined,
			},
		],
		missiles: [
			{
				name: `TFT9_RyzeIxtalBasicAttack2`,
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
				name: `TFT9_RyzeIxtalBasicAttack`,
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
				name: `TFT9_RyzeIxtalCritAttack`,
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
				name: `TFT9_RyzeSpellNoxus`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'NumItems': [2, 3, 4, 10],
					'NumAxes': [3, 5, 5, 15],
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
			initialMana: 15,
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
				name: `TFT9_RyzeSpellPiltover`,
				castTime: 0.8999999761581421,
				missile: undefined,
				variables: {
					'Damage': [0.20000000298023224, 275, 425, 3000],
					'PercentSharedDamage': [0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 5],
					'AreaDuration': [4, 5, 5, 10],
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
			initialMana: 30,
			magicResist: 30,
			mana: 70,
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
					'HealthOnReturn': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentHealthOnReturn`,
										starValues: [0, 0.4000000059604645, 0.800000011920929, 3],
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
			initialMana: 60,
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
				name: `TFT9_RyzeSpellShurima`,
				castTime: 0.25,
				missile: undefined,
				variables: {
					'Damage': [0, 175, 275, 2500],
					'KnockupDuration': [0.75, 1, 1.25, 3],
					'NumberOfLootRolls': [3, 3, 3, 3],
					'ChanceToSpawnGold': [0.25, 0.3499999940395355, 0.5, 1],
					'ChanceToSpawnItem': [0.25, 0.05000000074505806, 0.10000000149011612, 0.5],
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
			mana: 90,
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
					'PercentMaxHealth': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `PercentMaxHealth`,
										starValues: [0.20000000298023224, 0.18000000715255737, 0.30000001192092896, 1],
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
			initialMana: 30,
			magicResist: 30,
			mana: 90,
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
					'Damage': [100, 125, 230, 2006],
					'DebuffDuration': [6, 6, 6, 6],
					'SplashDamagePercent': [0.5, 0.5, 0.5, 0.5],
					'Breakpoint1Gold': [25, 25, 25, 25],
					'Breakpoint2Gold': [50, 50, 50, 50],
					'Breakpoint1BonusPortals': [1, 1, 1, 1],
					'Breakpoint2BonusPortalsPerGold': [1, 1, 1, 1],
					'GoldPerPortal': [20, 20, 20, 20],
					'TooltipShredPercent': [30, 30, 30, 30],
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
										starValues: [100, 125, 230, 2006],
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
			damage: 45,
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
					'ADPercent': [2.0999999046325684, 1.899999976158142, 1.899999976158142, 2],
					'ArmorShred': [0, 10, 15, 20],
				},
				calculations: {
					'ArmorShred': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ArmorShred`,
										starValues: [0, 10, 15, 20],
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
										starValues: [2.0999999046325684, 1.899999976158142, 1.899999976158142, 2],
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
			hp: 1100,
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
					'PercentHealth': [0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.10000000149011612],
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
					'HealthDamage': {
						asPercent: false,
						parts: [
							{
								operator: undefined,
								subparts: [
									{
										variable: `PercentHealth`,
										starValues: [0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.10000000149011612],
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
			initialMana: 60,
			magicResist: 50,
			mana: 110,
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
					'TooltipIoniaBonus': [180, 180, 180, 180],
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
					'ResistAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BaseResistAmount`,
										starValues: [15, 50, 60, 80],
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
			initialMana: 90,
			magicResist: 60,
			mana: 170,
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
					'TooltipIoniaBonus': [8, 8, 8, 8],
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
					'AllyShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AllyShieldAmount`,
										starValues: [0, 225, 275, 1500],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SelfShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SelfShieldAmount`,
										starValues: [0, 350, 450, 2000],
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
					'AllyShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AllyShieldAmount`,
										starValues: [0, 250, 375, 600],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SelfShieldAmount': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SelfShieldAmount`,
										starValues: [0, 350, 550, 800],
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
		apiName: `TFT9_Silco`,
		name: `Silco`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Silco.TFT_Set9_Stage2.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Zaun`, `Sorcerer`],
		stats: {
			armor: 30,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 750,
			initialMana: 0,
			magicResist: 30,
			mana: 30,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2000,
		critAttackMissileSpeed: 2000,
		passive: undefined,
		spells: [
			{
				name: `TFT9_SilcoSpell`,
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
					'ShimmerDuration': [0, 6, 6, 10],
					'ShimmerDamagePerSec': [0, 65, 100, 400],
					'HealPerSec': [0, 20, 25, 120],
				},
				calculations: {
					'ShimmerDamagePerSec': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `ShimmerDamagePerSec`,
										starValues: [0, 65, 100, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'HealPerSec': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `HealPerSec`,
										starValues: [0, 20, 25, 120],
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
				name: `TFT9_SilcoR_Mis`,
				castTime: undefined,
				missile: {
					width: undefined,
					travelTime: 0.6000000238418579,
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
		apiName: `TFT9_Sion`,
		name: `Sion`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Sion.TFT_Set9.tex`,
		cost: 5,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Noxus`, `Bruiser`],
		stats: {
			armor: 65,
			attackSpeed: 0.6000000238418579,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 70,
			hp: 900,
			initialMana: 70,
			magicResist: 65,
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
					'AttackSpeedPct': {
						asPercent: true,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `AttackSpeedPct`,
										starValues: [1.5, 1.5, 1.5, 10],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'DashRangeTooltip': {
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
										variable: `DashRangeBonus`,
										starValues: [3, 3, 3, 3],
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
			damage: 45,
			hp: 700,
			initialMana: 35,
			magicResist: 25,
			mana: 80,
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
					'MagicDamage': [0, 170, 255, 420],
					'AttackSpeed': [0, 20, 25, 35],
					'FalloffPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
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
			damage: 66,
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
					'Heal': [0, 140, 160, 180],
					'EmpoweredHealPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
					'EmpoweredHealThreshold': [0.5, 0.5, 0.5, 0.5],
					'MagicDamage': [60, 120, 180, 280],
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
										starValues: [0, 140, 160, 180],
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
										starValues: [60, 120, 180, 280],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BonusHeal': {
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
										variable: `EmpoweredHealPercent`,
										starValues: [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
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
			armor: 45,
			attackSpeed: 0.6499999761581421,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 45,
			hp: 800,
			initialMana: 60,
			magicResist: 45,
			mana: 135,
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
					'BonusMaxHealth': [200, 325, 375, 550],
					'DamagePerTick': [0, 25, 40, 60],
					'SecondaryBonusMaxHealth': [200, 225, 260, 385],
					'SecondaryDamage': [20, 100, 160, 300],
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
										starValues: [0, 25, 40, 60],
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
										variable: `BonusMaxHealth`,
										starValues: [200, 325, 375, 550],
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
										starValues: [20, 100, 160, 300],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'SecondaryBonusHealth': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SecondaryBonusMaxHealth`,
										starValues: [200, 225, 260, 385],
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
					'FlameBreathDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `FlameBreathDamage`,
										starValues: [325, 325, 325, 325],
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
			initialMana: 20,
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
					'SpellDamage': [100, 220, 330, 495],
					'BoulderDamage': [100, 120, 180, 270],
				},
				calculations: {
					'SpellDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `SpellDamage`,
										starValues: [100, 220, 330, 495],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'BoulderDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BoulderDamage`,
										starValues: [100, 120, 180, 270],
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
			initialMana: 15,
			magicResist: 50,
			mana: 85,
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
					'ShieldAmount': [0, 500, 580, 680],
					'Duration': [4, 4, 4, 4],
					'RedirectPercent': [0.5, 0.5, 0.5, 0.5],
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
										starValues: [0, 500, 580, 680],
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
		apiName: `TFT9_TwistedFate`,
		name: `Twisted Fate`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_TwistedFate.TFT_Set9_Stage2.tex`,
		cost: 2,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Bilgewater`, `Multicaster`],
		stats: {
			armor: 20,
			attackSpeed: 0.699999988079071,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 40,
			hp: 550,
			initialMana: 25,
			magicResist: 20,
			mana: 75,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 1500,
		critAttackMissileSpeed: 1500,
		passive: undefined,
		spells: [
			{
				name: `TFT9_TwistedFateSpell`,
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
					'InitialMagicDamage': [175, 155, 235, 355],
					'DelayedMagicDamage': [175, 155, 235, 380],
					'Delay': [1.25, 1.25, 1.25, 1.25],
				},
				calculations: {
					'InitialMagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `InitialMagicDamage`,
										starValues: [175, 155, 235, 355],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'DelayedMagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DelayedMagicDamage`,
										starValues: [175, 155, 235, 380],
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
				name: `TFT9_TwistedFateSpell_MC`,
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
					'InitialMagicDamage': [175, 175, 265, 400],
					'DelayedMagicDamage': [175, 175, 265, 400],
					'Delay': [1.5, 1.5, 1.5, 1.5],
				},
				calculations: {
					'InitialMagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `InitialMagicDamage`,
										starValues: [175, 175, 265, 400],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'DelayedMagicDamage': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `DelayedMagicDamage`,
										starValues: [175, 175, 265, 400],
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
					'MagicDamage': [0, 220, 330, 550],
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
										starValues: [0, 220, 330, 550],
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
			initialMana: 20,
			magicResist: 50,
			mana: 70,
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
					'ShieldAmount': [0, 350, 400, 450],
					'ShieldDuration': [4, 4, 4, 4],
					'ArmorShredPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
					'ArmorShredDuration': [4, 4, 4, 4],
					'ADPercent': [3, 3, 3, 3],
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
								operator: `sum`,
								subparts: [
									{
										variable: `ADPercent`,
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
					'BonusAttackSpeed': [1, 1, 1, 1],
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
		apiName: `TFT9_Xayah`,
		name: `Xayah`,
		icon: `ASSETS/UX/TFT/ChampionSplashes/TFT9_Xayah.TFT_Set9.tex`,
		cost: 4,
		starLevel: undefined,
		teamSize: undefined,
		isSpawn: false,
		traits: [`Ionia`, `Vanquisher`],
		stats: {
			armor: 25,
			attackSpeed: 0.75,
			critChance: 0.25,
			critMultiplier: 1.399999976158142,
			damage: 65,
			hp: 750,
			initialMana: 20,
			magicResist: 25,
			mana: 100,
			moveSpeed: 500,
			range: 4,
		},
		basicAttackMissileSpeed: 2500,
		critAttackMissileSpeed: 2500,
		passive: undefined,
		spells: [
			{
				name: `TFT9_XayahSpell`,
				castTime: undefined,
				missile: undefined,
				variables: {
					'NumFeathers': [9, 7, 7, 15],
					'PercentADPerFeather': [0.800000011920929, 0.800000011920929, 0.800000011920929, 1],
					'BonusDamagePerFeather': [0, 15, 25, 60],
					'ArmorShred': [6, 6, 6, 6],
					'TooltipIoniaBonus': [5, 5, 5, 5],
				},
				calculations: {
					'Damage': {
						asPercent: false,
						parts: [
							{
								operator: `sum`,
								subparts: [
									{
										variable: `PercentADPerFeather`,
										starValues: [0.800000011920929, 0.800000011920929, 0.800000011920929, 1],
										stat: `AD`,
										ratio: 1,
									},
									{
										variable: `BonusDamagePerFeather`,
										starValues: [0, 15, 25, 60],
										stat: `AP`,
										ratio: 0.009999999776482582,
									},
								],
							},
						],
					},
					'{cfad5f8e}': {
						asPercent: false,
						parts: [
							{
								operator: `scale`,
								subparts: [
									{
										variable: `BonusDamagePerFeather`,
										starValues: [0, 15, 25, 60],
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
				name: `TFT9_XayahBasicAttack3`,
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
			{
				name: `TFT9_XayahBasicAttack4`,
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
			{
				name: `TFT9_XayahSpellMis`,
				castTime: undefined,
				missile: {
					width: 20,
					travelTime: undefined,
					speedInitial: 10,
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
					_missileSpeed: 4000,
				},
				variables: {},
				calculations: {},
				cantCastWhileRooted: undefined,
				uninterruptable: undefined,
			},
		],
	},
]

export const otherUnits: ChampionData[] = []

export const abilities: Record<string, AbilityData> = {
	'TFT9b_Aatrox': {
		desc: `Transform for @Duration@ seconds, converting @ADPerASConversion*100@% of bonus Attack Speed to Attack Damage. While transformed, attacks deal <physicalDamage>@GreatswordDamage@ (%i:scaleAD%)</physicalDamage> physical damage in an area.<br><br>Darkin Blade: Gain <scaleHealth>@DarkinHealth@</scaleHealth> Health and <TFTBonus>@ModifiedOmnivamp@ (%i:scaleAP%)</TFTBonus> <TFTKeyword>Omnivamp</TFTKeyword>. If another unit holds this weapon for at least @DarkinReviveTime@ seconds, Aatrox will revive upon their death.  <br><br><rules><tftbold>Omnivamp:</tftbold> Heal for percentage of damage dealt</rules>`,
		icon: `ASSETS/Characters/TFT9_Aatrox/HUD/Icons2D/TFT9_Aatrox_R.TFT_Set9.dds`,
		name: `World Ender`,
		variables: {
			'Duration': [10, 12, 12, 30],
			'DarkinOmnivamp': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'GreatswordADRatio': [0, 2.9000000953674316, 3, 25],
			'ADPerASConversion': [0.800000011920929, 0.800000011920929, 0.800000011920929, 0.800000011920929],
			'MovementSpeed': [700, 700, 700, 700],
			'DarkinHealth': [250, 250, 250, 250],
			'DarkinReviveTime': [4, 4, 4, 4],
		},
	},
	'TFT9_Ahri': {
		desc: `Steal essence from enemies around the current target, dealing <magicDamage>@ModifiedEssenceDamage@ (%i:scaleAP%)</magicDamage> magic damage and @TooltipReave@% <TFTKeyword>Mana Reaving</TFTKeyword> them. <br><br>Every <scaleLevel>@ActualBoomTooltip@</scaleLevel> casts, unleash a wave that deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to all enemies hit. This deals <magicDamage>@EssenceStolenMultiplier*100@%</magicDamage> more damage to enemies whose essence has been stolen.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@</TFTBonus> Mana per second<br><br><rules><tftbold>Mana Reave</tftbold>: Increase max Mana until the next cast</rules>`,
		icon: `ASSETS/Characters/TFT9_Ahri/HUD/Icons2D/Icons_TFT9_Ahri_R.TFT_Set9.dds`,
		name: `Essence Thief`,
		variables: {
			'MagicDamage': [0, 260, 390, 1999],
			'EssenceDamage': [0, 105, 150, 1000],
			'NumCastsToBoom': [2, 2, 2, 0],
			'EssenceStolenMultiplier': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
			'TooltipIoniaBonus': [3, 3, 3, 3],
			'TooltipReave': [20, 20, 20, 20],
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
			'BlastPercentAD': [1.7999999523162842, 2.4000000953674316, 2.4000000953674316, 7.5],
			'ChakramDuration': [7, 7, 7, 7],
			'ChakramPercentAD': [0.10000000149011612, 0.07000000029802322, 0.07000000029802322, 0.15000000596046448],
			'ChakramHealing': [0.75, 0.75, 0.75, 0.75],
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
			'ADPercent': [0, 1.600000023841858, 1.649999976158142, 1.75],
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
			'BaseMagicDamage': [35, 110, 160, 500],
			'Duration': [90, 90, 90, 90],
			'MaxSummons': [3, 3, 3, 3],
			'BonusRatio': [0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071],
		},
	},
	'TFT9_BaronNashor': {
		desc: `<spellPassive>Passive:</spellPassive> Cast every @CastCadence@ attacks and cycle between 3 different Abilities: this, <tftbonus>Voracious Bite</tftbonus> (damage an enemy and heal), and <tftbonus>Void Tentacle</tftbonus> (damage and <TFTKeyword>Stun</TFTKeyword> a group).<br><br><spellActive>Active:</spellActive> Lob three pools of acid towards the largest group of enemies, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and @TooltipShred@% <TFTKeyword>Shredding</TFTKeyword> and <TFTKeyword>Sundering</TFTKeyword> for @DebuffDuration@ seconds.<br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist<br><tftbold>Sunder:</tftbold> Reduce Armor</rules>`,
		icon: `ASSETS/Characters/TFT9_BaronNashor/HUD/TFT9_BaronNashor_Square.TFT_Set9.dds`,
		name: `Corrosive Acid`,
		variables: {
			'Damage': [175, 175, 175, 175],
			'TooltipShred': [40, 40, 40, 40],
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
			'NumStrikes': [5, 6, 6, 25],
			'PercentAD': [0.8500000238418579, 0.8500000238418579, 0.8500000238418579, 0.8500000238418579],
			'PercentHealthTrueDamage': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
			'BonusFlatDamage': [15, 18, 30, 100],
			'StrikesPer100BonusAS': [5, 5, 5, 5],
		},
	},
	'TFT9_Cassiopeia': {
		desc: `Deal <magicDamage>@ModifiedBaseDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target and <TFTKeyword>Wound</TFTKeyword> them for @WoundDuration@ seconds. If they are already <TFTKeyword>Wounded</TFTKeyword>, deal <magicDamage>@BonusDamage@ (%i:scaleAP%)</magicDamage> bonus magic damage.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by 33%</rules>`,
		icon: `ASSETS/Characters/Cassiopeia/HUD/Icons2D/Cassiopeia_E.dds`,
		name: `Twin Fang`,
		variables: {
			'BaseDamage': [0, 160, 240, 360],
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
			'PercentMaximumHealthDamage': [0.11999999731779099, 0.11999999731779099, 0.11999999731779099, 0.11999999731779099],
			'BonusDamage': [140, 270, 370, 500],
			'BonusHealthOnKill': [35, 35, 35, 35],
		},
	},
	'TFT9_Darius': {
		desc: `Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to the current target. If they die, immediately cast this again with <scaleLevel>@PercentDamageFalloff*100@%</scaleLevel> damage.`,
		icon: `ASSETS/Characters/Darius/HUD/Icons2D/Darius_Icon_Sudden_Death.dds`,
		name: `Noxian Guillotine`,
		variables: {
			'AttackDamagePercent': [3.5, 3.5, 3.5, 3.5],
			'FearDuration': [1, 1, 1, 1],
			'AbilityScaleDamage': [100, 55, 80, 110],
			'PercentDamageFalloff': [0, 0.8999999761581421, 0.949999988079071, 1],
		},
	},
	'TFT9_Ekko': {
		desc: `Heal <scaleHealth>@HealPercent*100@%</scaleHealth> of damage taken in the last @RewindTime@ seconds and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target.`,
		icon: `ASSETS/Characters/TFT9_Ekko/HUD/Icons2D/TFT9_Ekko_E.TFT_Set9.dds`,
		name: `Phase Dive`,
		variables: {
			'Damage': [0, 255, 380, 570],
			'HealPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'RewindTime': [4, 4, 4, 4],
			'RollDuration': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
		},
	},
	'TFT9_Fiora': {
		desc: `Become untargetable and strike the current target @NumStrikes@ times. Each strike deals <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage and <trueDamage>@ModifiedBonusDamage@ (%i:scaleAP%)</trueDamage> true damage. Heal for <scaleHealth>@PercentHealing*100@%</scaleHealth> of the total damage dealt.<br><br>If the target dies, change targets to the nearest enemy.`,
		icon: `ASSETS/Characters/Fiora/HUD/Icons2D/Fiora_R.dds`,
		name: `Blade Waltz`,
		variables: {
			'PercentAD': [1.5499999523162842, 1.600000023841858, 1.600000023841858, 2.4000000953674316],
			'BonusTrueDamage': [75, 60, 90, 270],
			'PercentHealing': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
			'NumStrikes': [4, 4, 4, 4],
			'DamageReduction': [0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896],
		},
	},
	'TFT9_Galio': {
		desc: `Reduce damage taken by @DamageResist*100@% and heal for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth> over @Duration@ seconds. After, deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies.`,
		icon: `ASSETS/Characters/TFT9_Galio/HUD/Icons2D/TFT9_Galio_W.TFT_Set9.dds`,
		name: `Shield of Durand`,
		variables: {
			'DamageResist': [0.20000000298023224, 0.25, 0.25, 0.3499999940395355],
			'Duration': [2.5, 2.5, 2.5, 2.5],
			'Heal': [0, 300, 350, 400],
			'Damage': [0, 200, 300, 450],
			'HexRadius': [1, 1, 1, 1],
		},
	},
	'TFT9_Gangplank': {
		desc: `<ShowIf.TFT9_ReaverKing_Frontline><spellPassive>Cutlass Passive:</spellPassive> Gain <TFTBonus>@ReaverKingMeleeBonusResists@</TFTBonus> Armor and Magic Resist. Attacks ignite the target, dealing <trueDamage>@MeleePassiveTotalDamage@ (%i:scaleAD%)</trueDamage> true damage over @MeleePassiveDuration@ seconds.</ShowIf.TFT9_ReaverKing_Frontline><ShowIfNot.TFT9_ReaverKing_Frontline><spellPassive>Pistol Passive:</spellPassive> Gain @ReaverKingRangedBonusHexRange@ range. Attacks grant @ReaverKingRangedBonusMana@ bonus mana.</ShowIfNot.TFT9_ReaverKing_Frontline><br><br><spellActive>Active:</spellActive> Summon the Dreadway to sail across the board, crashing into the first enemy hit and dealing <magicDamage>@ModifiedActiveMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage in a 3-hex radius. Allies the Dreadway passes through or hits with the crash are empowered by citrus, gaining <scaleLevel>@ActiveAttackSpeed*100@%</scaleLevel> Attack Speed and immunity to crowd control for @ActiveAttackSpeedDuration@ seconds. `,
		icon: `ASSETS/Characters/Gangplank/HUD/Icons2D/3903_GangplankR3.dds`,
		name: `The Dreadway`,
		variables: {
			'MeleePassiveADRatio': [0, 2.5, 2.5, 25],
			'MeleePassiveDuration': [2, 2, 2, 2],
			'ActiveMagicDamage': [0, 450, 675, 9001],
			'ActiveAttackSpeed': [0, 0.3499999940395355, 0.5, 3],
			'ActiveAttackSpeedDuration': [3, 3, 3, 3],
			'ReaverKingMeleeBonusResists': [50, 50, 50, 50],
			'ReaverKingRangedBonusHexRange': [3, 3, 3, 3],
			'ReaverKingRangedBonusMana': [5, 5, 5, 5],
		},
	},
	'TFT9_Graves': {
		desc: `Launch a smoke grenade at the current target. It explodes on impact, dealing <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to adjacent enemies, leaving behind a smoke cloud that <TFTKeyword>Chills</TFTKeyword> for <scaleLevel>@CCDuration@</scaleLevel> seconds.<br><br><rules>Chill: Reduce Attack Speed by @TooltipChillPercent@%</rules><br>`,
		icon: `ASSETS/Characters/Graves/HUD/Icons2D/GravesSmokeGrenade.dds`,
		name: `Smoke Grenade`,
		variables: {
			'PercentAttackDamage': [0, 2, 2, 2.049999952316284],
			'AbilityScaleDamage': [0, 30, 45, 60],
			'CCDuration': [1, 3, 3.5, 4],
			'TooltipChillPercent': [30, 30, 30, 30],
		},
	},
	'TFT9_Heimerdinger': {
		desc: `Hurl a grenade towards the largest group of enemies, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies in a large area and <TFTKeyword>Stunning</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/TFT9_Heimerdinger/HUD/Icons2D/TFT9_Heimerdinger_E1.TFT_Set9.dds`,
		name: `CH-3X Lightning Grenade`,
		variables: {
			'Damage': [0, 150, 225, 3141],
			'StunDuration': [3, 1.5, 2, 15],
		},
	},
	'TFT9_Illaoi': {
		desc: `Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target and link souls for @Duration@ seconds. While linked, heal for <scaleHealth>@PercentHealing*100@%</scaleHealth> of all damage taken by the target.`,
		icon: `ASSETS/Characters/Illaoi/HUD/Icons2D/Illaoi_W.dds`,
		name: `Harsh Lesson`,
		variables: {
			'MagicDamage': [0, 250, 375, 560],
			'PercentHealing': [0, 0.25, 0.30000001192092896, 0.4000000059604645],
			'Duration': [5, 5, 5, 5],
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
		desc: `Leap on a nearby enemy. Deal <magicDamage>@TotalDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within @HexRadius@ hexes and <TFTKeyword>Stun</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/TFT9_JarvanIV/HUD/Icons2D/TFT9_JarvanIV_Cataclysm.TFT_Set9.dds`,
		name: `Cataclysm`,
		variables: {
			'StunDuration': [2.5, 1.5, 2, 8],
			'SearchRange': [3, 3, 3, 3],
			'Damage': [0, 140, 210, 800],
			'HexRadius': [2, 2, 2, 2],
		},
	},
	'TFT9_Jayce': {
		desc: `Grant <TFTBonus>@ModifiedEnhancedAttackSpeed@ (%i:scaleAP%)</TFTBonus> Attack Speed to Jayce and <TFTBonus>@ModifiedPercentAttackSpeed@ (%i:scaleAP%)</TFTBonus> to the allies on his left and right for @Duration@ seconds. Fire a blast at the current target that explodes on the first enemy hit. It deals <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies near the blast.`,
		icon: `ASSETS/Characters/TFT9_Jayce/HUD/Icons2D/TFT9_Jayce_ShotBlast.TFT_Set9.dds`,
		name: `Acceleration Blast`,
		variables: {
			'PercentAttackSpeed': [0.5, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
			'Duration': [3, 3, 3, 3],
			'PercentAttackDamage': [0, 2.75, 2.75, 2.950000047683716],
			'HexRange': [1, 1, 1, 1],
			'TooltipPercentAttackDamage': [0, 275, 275, 295],
			'SelfAttackSpeed': [0.30000001192092896, 0.30000001192092896, 0.4000000059604645, 0.5],
		},
	},
	'TFT9_Jhin': {
		desc: `Take aim at the current target and deal <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to enemies in a line; each hit reduces this damage by @FalloffPercent*100@%.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@%</TFTBonus> Attack Damage`,
		icon: `ASSETS/Characters/Jhin/HUD/Icons2D/Jhin_R.dds`,
		name: `Curtain Call`,
		variables: {
			'PercentAttackDamage': [7.440000057220459, 7.440000057220459, 7.440000057220459, 7.440000057220459],
			'MissingHealthPercentBonus': [0, 0.23999999463558197, 0.3400000035762787, 0.4399999976158142],
			'TooltipIoniaBonus': [25, 25, 25, 25],
			'AimDuration': [1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858],
			'FalloffPercent': [0.5600000023841858, 0.5600000023841858, 0.5600000023841858, 0.5600000023841858],
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
			'PercentAttackDamage': [0, 1.5, 1.5499999523162842, 1.600000023841858],
			'AbilityScaleDamage': [20, 15, 20, 35],
			'RocketsPerSimulatedLaunchAttack': [2, 2, 2, 2],
		},
	},
	'TFT9_KSante': {
		desc: `Heal for <scaleHealth>@HealAmount@ (%i:scaleHealth%)</scaleHealth>, then knock up the current target before smashing them to the edge of the battlefield. Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and <TFTKeyword>Stun</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds. Deal <magicDamage>@CollisionDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies the target collides with and <TFTKeyword>Stun</TFTKeyword> them for <scaleLevel>@SecondaryStunDuration@</scaleLevel> seconds.<br><br>If the target can't be pushed back any further, knock them off the battlefield. Otherwise, chase after them.`,
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
			'BaseDamage': [0, 80, 120, 240],
			'NumTargets': [4, 4, 4, 4],
		},
	},
	'TFT9_Karma': {
		desc: `Fire a burst of energy that explodes upon impact, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies. Every third cast launches @EmpoweredBursts@ bursts.<br><br>Ionia Bonus: <TFTBonus>+@TooltipIoniaBonus@</TFTBonus> Ability Power`,
		icon: `ASSETS/Characters/TFT9_Karma/HUD/Icons2D/TFT9_Karma_Q1.TFT_Set9.dds`,
		name: `Inner Flame`,
		variables: {
			'MagicDamage': [0, 200, 300, 470],
			'TooltipIoniaBonus': [25, 25, 25, 25],
			'EmpoweredBursts': [3, 3, 3, 3],
		},
	},
	'TFT9_Kassadin': {
		desc: `Gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies in a cone and <TFTKeyword>Disarm</TFTKeyword> them for <scaleLevel>@DisarmDuration@</scaleLevel> seconds.<br><br><tftitemrules><tftbold>Disarm:</tftbold> Cannot move or attack, but CAN cast spells</tftitemrules>`,
		icon: `ASSETS/Characters/Kassadin/HUD/Icons2D/Kassadin_E.dds`,
		name: `Force Pulse`,
		variables: {
			'Damage': [100, 160, 240, 360],
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
			'Damage': [0, 145, 220, 350],
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
			'Damage': [0, 30, 45, 70],
			'ShredAmount': [20, 20, 20, 20],
			'FirstAscensionLevel': [6, 6, 6, 6],
			'SecondAscensionLevel': [9, 9, 9, 9],
			'ShredDuration': [3, 3, 3, 3],
			'AscensionDamage': [0, 30, 40, 60],
		},
	},
	'TFT9_Malzahar': {
		desc: `Open two portals near the current target. Destroy @PercentShieldDestruction*100@% of Shields and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to all enemies caught between the portals.`,
		icon: `ASSETS/Characters/TFT9_Malzahar/HUD/Icons2D/TFT9_Malzahar_Q.TFT_Set9.dds`,
		name: `Call of the Void`,
		variables: {
			'Damage': [0, 220, 330, 500],
			'PercentShieldDestruction': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_Milio': {
		desc: `Kick a ball at the current target that deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and <TFTKeyword>Stuns</TFTKeyword> for @Duration@ seconds. The ball bounces to the closest enemy behind the target, dealing <magicDamage>@ModifiedDamageAOE@ (%i:scaleAP%)</magicDamage> magic damage on impact and <magicDamage>@ModifiedSplashDamage@ (%i:scaleAP%)</magicDamage> magic damage to adjacent enemies.`,
		icon: `ASSETS/Characters/Milio/HUD/Icons2D/Milio_Q.dds`,
		name: `Ultra Mega Fire Kick!!!`,
		variables: {
			'MagicDamage': [0, 220, 330, 500],
			'Duration': [1.5, 1.5, 1.5, 1.5],
			'MagicDamageAOE': [0, 180, 270, 400],
			'SplashDamage': [0, 90, 140, 200],
		},
	},
	'TFT9_MissFortune': {
		desc: `Call down an X-shaped rain of bullets, destroying @ShieldReavePercent*100@% of your target's shields and dealing <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage. For @ShieldReaveDuration@ seconds, enemies hit have incoming shields reduced by @ShieldReavePercent*100@%.`,
		icon: `ASSETS/Characters/MissFortune/HUD/Icons2D/MissFortune_E.dds`,
		name: `X Marks the Spot`,
		variables: {
			'MagicDamage': [0, 240, 360, 580],
			'ShieldReavePercent': [0, 0.3499999940395355, 0.3499999940395355, 0.3499999940395355],
			'ShieldReaveDuration': [0, 5, 5, 5],
		},
	},
	'TFT9_Mordekaiser': {
		desc: `<spellPassive>Passive:</spellPassive> Attacks deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> bonus magic damage, increased to <magicDamage>@ModifiedRealmDamage@ (%i:scaleAP%)</magicDamage> while God of Death is active.<br><br><spellActive>Active:</spellActive> Gain <TFTBonus>@ModifiedShield@ (%i:scaleHealth%)</TFTBonus> Shield and 1 range for <TFTBonus>@Duration@</TFTBonus> seconds. Killing enemies in this state steals <TFTBonus>@PercentStatSteal*100@%</TFTBonus> of their Health, Attack Damage, Ability Power, Armor, and Magic Resistance until combat ends.`,
		icon: `ASSETS/Characters/Mordekaiser/HUD/Icons2D/MordekaiserR.dds`,
		name: `God of Death`,
		variables: {
			'BonusDamage': [100, 100, 150, 375],
			'RealmBonusDamage': [100, 250, 375, 900],
			'Duration': [5, 5, 5, 5],
			'PercentHealthShield': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'PercentStatSteal': [0.10000000149011612, 0.05999999865889549, 0.05999999865889549, 0.15000000596046448],
		},
	},
	'TFT9_Naafiri': {
		desc: `<spellPassive>Passive:</spellPassive> Gain <TFTBonus>@ModifiedOmnivamp@ (%i:scaleAP%)</TFTBonus> <TFTKeyword>Omnivamp</TFTKeyword>. <br><br><spellActive>Active:</spellActive> Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage. <br><br>Darkin Dagger: After casting, summon packmates that attack the first enemy hit for a total of <physicalDamage>@TotalPackmateDamage@ (%i:scaleAD%)</physicalDamage>.<br><br><rules><tftbold>Omnivamp:</tftbold> Heal for percentage of damage dealt</rules>`,
		icon: `ASSETS/Characters/Naafiri/HUD/Icons2D/Icons_Naafiri_E.Naafiri.dds`,
		name: `Eviscerate`,
		variables: {
			'ADRatio': [1.2000000476837158, 1.75, 1.75, 1.7999999523162842],
			'NumPackmates': [0, 2, 3, 4],
			'TotalPackmateADRatio': [1.7999999523162842, 1.899999976158142, 1.9500000476837158, 2],
			'PackmateHealing': [75, 75, 75, 75],
			'DaggerOmnivamp': [0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448],
		},
	},
	'TFT9_Nasus': {
		desc: `Steal <scaleLevel>@PercentHealthSteal*100@%</scaleLevel> maximum Health, <TFTBonus>@PercentADSteal*100@%</TFTBonus> Attack Damage, <scaleLevel>@FlatResistanceSteal@</scaleLevel> Armor, and <scaleLevel>@FlatResistanceSteal@</scaleLevel> Magic Resist from the nearest <scaleLevel>@NumEnemies@</scaleLevel> enemies for <TFTBonus>@ModifiedDuration@ (%i:scaleAP%)</TFTBonus> seconds.<br><br>While empowered, every third attack deals <physicalDamage>@EmpoweredDamage@ (%i:scaleAD%)</physicalDamage> physical damage.`,
		icon: `ASSETS/Characters/TFT9_Nasus/HUD/Icons2D/TFT9_Nasus_Passive.TFT_Set9.dds`,
		name: `Soul Eater`,
		variables: {
			'PercentHealthSteal': [0.10000000149011612, 0.03999999910593033, 0.03999999910593033, 0.15000000596046448],
			'PercentADSteal': [0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066],
			'FlatResistanceSteal': [3, 4, 4, 20],
			'Duration': [8, 8, 8, 8],
			'EmpoweredDamagePct': [3.5, 3.799999952316284, 3.799999952316284, 7],
			'NumEnemies': [3, 4, 5, 7],
		},
	},
	'TFT9_Nautilus': {
		desc: `<spellPassive>Passive:</spellPassive> Gain <TFTBonus>@StatAmp*100@%</TFTBonus> bonus Armor and Magic Resistance from all sources.<br><br><spellActive>Active:</spellActive> Deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within two hexes. Knock them up and pull them together, <TFTKeyword>Stunning</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/Nautilus/HUD/Icons2D/Nautilus_RippleEffect.dds`,
		name: `Riptide`,
		variables: {
			'StatAmp': [0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645],
			'Damage': [0, 150, 225, 360],
			'StunDuration': [1, 1.5, 1.5, 2],
		},
	},
	'TFT9_Neeko': {
		desc: `Leap towards the current target and gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Slam down after a brief delay, dealing <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage>  magic damage to enemies within two hexes.<br><br><br><br>`,
		icon: `ASSETS/Characters/Neeko/HUD/Icons2D/Neeko_R.dds`,
		name: `Pop Blossom`,
		variables: {
			'Shield': [0, 250, 325, 425],
			'ShieldDuration': [3, 3, 3, 3],
			'Damage': [50, 300, 450, 700],
		},
	},
	'TFT9_Nilah': {
		desc: `<spellPassive>Passive:</spellPassive> Attacks strike in a cone, dealing <physicalDamage>@ModifiedCleaveDamage@ (%i:scaleAD%)</physicalDamage> physical damage to up to @CleaveTargets@ additional enemies. Every 3rd attack strikes in a line for <physicalDamage>@ModifiedEmpoweredDamage@ (%i:scaleAD%)</physicalDamage> physical damage and grants <TFTBonus>@AttackSpeed*100@%</TFTBonus> stacking Attack Speed.<br><br><spellActive>Active:</spellActive> Gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds and dash to a safe location.`,
		icon: `ASSETS/Characters/Nilah/HUD/Icons2D/NilahQ.dds`,
		name: `Formless Blade`,
		variables: {
			'CleaveTargets': [2, 2, 2, 2],
			'CleaveDamage': [75, 0.550000011920929, 0.550000011920929, 1],
			'AttackSpeed': [0.20000000298023224, 0.18000000715255737, 0.18000000715255737, 0.4000000059604645],
			'DashRange': [3, 3, 3, 3],
			'ShieldAmount': [0, 250, 375, 700],
			'ShieldDuration': [3, 3, 3, 3],
			'EmpoweredLineDamage': [1.5, 1.7000000476837158, 1.75, 3.75],
		},
	},
	'TFT9_Orianna': {
		desc: `Grant the lowest Health ally <TFTBonus>@ModifiedShielding@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds and empowers Orianna's next attack to deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> bonus magic damage.`,
		icon: `ASSETS/Characters/TFT9_Orianna/HUD/Icons2D/TFT9_OriannaCommandAttack.TFT_Set9.dds`,
		name: `Command: Protect`,
		variables: {
			'ShieldHealth': [200, 200, 225, 275],
			'ShieldDuration': [4, 4, 4, 4],
			'MagicDamage': [50, 290, 435, 650],
		},
	},
	'TFT9_Poppy': {
		desc: `Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target.`,
		icon: `ASSETS/Characters/TFT9_Poppy/HUD/Icons2D/TFT9_Poppy_Q.TFT_Set9.dds`,
		name: `Steadfast Hammer`,
		variables: {
			'ShieldAmount': [120, 250, 325, 400],
			'ShieldDuration': [4, 4, 4, 4],
			'StunDuration': [0.25, 0.25, 0.25, 0.25],
			'CollisionDamagePercent': [15, 15, 15, 15],
			'HexRadius': [0, 0, 0, 0],
			'Damage': [0, 160, 240, 360],
			'PercentHealthDamage': [33, 33, 33, 33],
		},
	},
	'TFT9_Qiyana': {
		desc: `Dash to strike enemies in a line and deal <physicalDamage>@ModifiedDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage, <TFTKeyword>Stunning</TFTKeyword> and knocking up the first target hit for @PrimaryStunDuration@ seconds and all other targets for @SecondaryStunDuration@ seconds.`,
		icon: `ASSETS/Characters/Qiyana/HUD/Icons2D/Qiyana_R.dds`,
		name: `Supreme Display of Talent`,
		variables: {
			'BaseDamage': [0, 2.549999952316284, 2.549999952316284, 2.700000047683716],
			'AbilityScaleDamage': [0, 40, 60, 90],
			'PrimaryStunDuration': [1.5, 1.5, 1.5, 1.5],
			'SecondaryStunDuration': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_Quinn': {
		desc: `Launch Valor through the row or column with the most enemies, marking them to take <TFTBonus>@ModifiedAmpDamage@ (%i:scaleAP%)</TFTBonus> increased damage for @Duration@ seconds. Then rain down arrows, dealing <physicalDamage>@ModifiedDamage@ (%i:scaleAD%)</physicalDamage> physical damage split between all marked enemies.`,
		icon: `ASSETS/Characters/TFT9_Quinn/HUD/Icons2D/TFT9_Quinn_R2.TFT_Set9.dds`,
		name: `Skystrike`,
		variables: {
			'AmpDamage': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'PercentAD': [6, 5.5, 5.550000190734863, 5.650000095367432],
			'Duration': [4, 4, 4, 4],
		},
	},
	'TFT9_RekSai': {
		desc: `Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to the current target and mark them. If they are below @HealthThreshold*100@% max Health, deal true damage instead. If the target is marked, deal <trueDamage>@MarkDamage@ (%i:scaleAD%)</trueDamage> bonus true damage.<br><br>If this kills the target, rip through them 1 hex and heal for <scaleHealth>@HealAmount@ (%i:scaleAP%%i:scaleHealth%)</scaleHealth>.`,
		icon: `ASSETS/Characters/RekSai/HUD/Icons2D/RekSai_E1.dds`,
		name: `Furious Bite`,
		variables: {
			'PercentOfAD': [2.6500000953674316, 2.5, 2.5, 2.549999952316284],
			'PercentMaxHealthHeal': [0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
			'HealthThreshold': [0.6600000262260437, 0.6600000262260437, 0.6600000262260437, 0.6600000262260437],
			'PercentOfADMark': [1.350000023841858, 2.4000000953674316, 2.4000000953674316, 2.5],
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
	'TFT9_RyzeBilgewater': {
		desc: `Create a portal to Bilgewater, summoning a giant treasure chest to fall on the largest cluster of enemies that deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage. The size of this chest is increased by <TFTBonus>@PercentScalar*100@%</TFTBonus> for every <TFTBonus>@PerGoldScalar@</TFTBonus> gold you have.<br><br>Each enemy hit has a chance to knock gold or other treasures out of the chest, and that chance doubles if the chest kills the enemy.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Bilgewater`,
		variables: {
			'Damage': [0, 350, 525, 7777],
			'PercentScalar': [0.019999999552965164, 0.019999999552965164, 0.019999999552965164, 0.019999999552965164],
			'PerGoldScalar': [2, 2, 2, 2],
			'BaseLootPercent': [0.05000000074505806, 0.05000000074505806, 0.10000000149011612, 1],
			'KillLootPercent': [0.10000000149011612, 0.10000000149011612, 0.20000000298023224, 1],
			'BaseGoldPercent': [0.10000000149011612, 0.10000000149011612, 0.20000000298023224, 1],
			'KillGoldPercent': [0.20000000298023224, 0.20000000298023224, 0.4000000059604645, 1],
			'MinGold': [1, 1, 1, 1],
			'MaxGold': [4, 4, 4, 4],
		},
	},
	'TFT9_RyzeDemacia': {
		desc: `Create a portal to Demacia that protects allies for @PortalDuration@ seconds. Allies within the zone gain <TFTBonus>@ModifiedShield@ (%i:scaleAP%)</TFTBonus> Shield. If an ally leaves the safety of the portal, they are healed for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth>.<br><br>When the portal expires, enemies within are dealt <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage.<br>`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Demacia`,
		variables: {
			'Shield': [300, 600, 900, 9999],
			'Heal': [0, 250, 375, 9999],
			'Damage': [125, 300, 450, 2000],
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
	'TFT9_RyzeIxtal': {
		desc: `Create a portal to Ixtal, coating the ground around the current target in a thicket of vines. After a brief delay, deal <magicDamage>@TotalDamage@ (%i:scaleArmor% %i:scaleMR%)</magicDamage> magic damage to enemies within and <TFTKeyword>Stun</TFTKeyword> enemies at the epicenter for <TFTBonus>@StunDuration@</TFTBonus> seconds with a knockup.<br><br>Allies within are wrapped in Barkskin, granting <scaleLevel>@ModifiedArmor@ (%i:scaleArmor%)</scaleLevel> Armor and <scaleLevel>@ModifiedMR@ (%i:scaleMR%)</scaleLevel> Magic Resistance for <TFTBonus>@ModifiedBarkskinDuration@ (%i:scaleAP%)</TFTBonus> seconds.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Ixtal`,
		variables: {
			'ArmorScalar': [1.5, 2, 3, 15],
			'MRScalar': [1.5, 2, 3, 15],
			'StunDuration': [2, 2, 2.5, 10],
			'BarkskinDuration': [4, 4, 4, 4],
			'BarskinDefenceScalar': [1, 1, 1, 1],
		},
	},
	'TFT9_RyzeNoxus': {
		desc: `Create a portal to Noxus that spews out a torrent of weapons and armor, granting <scaleLevel>@NumItems@</scaleLevel> completed items to random allies with open slots, and throwing <scaleLevel>@NumAxes@</scaleLevel> axes towards random enemies that deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage each.<br><br>If an ally would recieve an item while all slots are full, they instead gain a stacking @DamageAmp*100@% damage increase for the rest of combat.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Noxus`,
		variables: {
			'NumItems': [2, 3, 4, 10],
			'NumAxes': [3, 5, 5, 15],
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
			'PercentSharedDamage': [0.15000000596046448, 0.30000001192092896, 0.30000001192092896, 5],
			'AreaDuration': [4, 5, 5, 10],
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
		desc: `Create a portal to Shurima, summoning a roaming sand tornado that deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies hit and knocks them up, <TFTKeyword>Stunning</TFTKeyword> them for <scaleLevel>@KnockupDuration@</scaleLevel> second(s).<br><br>The tornado has a chance to unearth buried treasures and gold as it travels.`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Shurima`,
		variables: {
			'Damage': [0, 175, 275, 2500],
			'KnockupDuration': [0.75, 1, 1.25, 3],
			'NumberOfLootRolls': [3, 3, 3, 3],
			'ChanceToSpawnGold': [0.25, 0.3499999940395355, 0.5, 1],
			'ChanceToSpawnItem': [0.25, 0.05000000074505806, 0.10000000149011612, 0.5],
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
		desc: `Create <scaleLevel>@NumPortals@</scaleLevel> portals to Zaun, causing hired guns to fire at nearby enemies. Deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and <TFTKeyword>Wounds</TFTKeyword>, @TooltipShredPercent@% <TFTKeyword>Shreds</TFTKeyword>, and @TooltipShredPercent@% <TFTKeyword>Sunders</TFTKeyword> for @DebuffDuration@ seconds. The more gold you have, the more powerful the portals become.<br><br><spellPassive>@Breakpoint1Gold@ Gold:</spellPassive> +@Breakpoint1BonusPortals@ portal. Portals fire a rocket that deals @SplashDamagePercent*100@% damage in a one-hex radius.<br><spellPassive>@Breakpoint2Gold@ Gold:</spellPassive> Double the portals. Summon @Breakpoint2BonusPortalsPerGold@ additional portals for every @GoldPerPortal@ Gold more.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by 50%<br><tftbold>Shred:</tftbold> Reduce Magic Resist<br><tftbold>Sunder:</tftbold> Reduce Armor</rules>`,
		icon: `ASSETS/Characters/TFT9_Ryze/HUD/Icons2D/TFT9_Ryze_R.TFT_Set9.dds`,
		name: `Realm Warp: Zaun`,
		variables: {
			'NumPortals': [1, 5, 8, 25],
			'Damage': [100, 125, 230, 2006],
			'DebuffDuration': [6, 6, 6, 6],
			'SplashDamagePercent': [0.5, 0.5, 0.5, 0.5],
			'Breakpoint1Gold': [25, 25, 25, 25],
			'Breakpoint2Gold': [50, 50, 50, 50],
			'Breakpoint1BonusPortals': [1, 1, 1, 1],
			'Breakpoint2BonusPortalsPerGold': [1, 1, 1, 1],
			'GoldPerPortal': [20, 20, 20, 20],
			'TooltipShredPercent': [30, 30, 30, 30],
		},
	},
	'TFT9_Samira': {
		desc: `Shoot at the current target and deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> to the first enemy hit. Reduce their Armor by <TFTBonus>@ModifiedArmorShred@ (%i:scaleAP%)</TFTBonus> for the rest of combat.`,
		icon: `ASSETS/Characters/Samira/HUD/Icons2D/SamiraQ.dds`,
		name: `Flair`,
		variables: {
			'ADPercent': [2.0999999046325684, 1.899999976158142, 1.899999976158142, 2],
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
			'PercentHealth': [0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.10000000149011612],
			'ChillDuration': [4, 4, 4, 4],
		},
	},
	'TFT9_Sett': {
		desc: `Grab an enemy from either side and slam them together, knocking them up. Deals <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage and <TFTKeyword>Stuns</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds. <br><br>If only one enemy is grabbed, the damage and <TFTKeyword>Stun</TFTKeyword> duration are increased by @SoloBonus*100@%.<br><br>Ionia Bonus: <scaleHealth>+@TooltipIoniaBonus@</scaleHealth> max Health`,
		icon: `ASSETS/Characters/Sett/HUD/Icons2D/Sett_Q.dds`,
		name: `Facebreaker`,
		variables: {
			'Damage': [0, 180, 270, 420],
			'StunDuration': [1, 1.25, 1.5, 2],
			'SoloBonus': [0.5, 0.5, 0.5, 0.5],
			'TooltipIoniaBonus': [180, 180, 180, 180],
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
			'TooltipIoniaBonus': [8, 8, 8, 8],
		},
	},
	'TFT9_Silco': {
		desc: `Throw a vial the closest surrounded enemy, covering nearby hexes in chemicals for <scaleLevel>@ShimmerDuration@</scaleLevel> seconds. Deal <magicDamage>@ModifiedShimmerDamagePerSec@ (%i:scaleAP%)</magicDamage> magic damage per second to chemical-affected enemies, and heal affected allies for <scaleHealth>@ModifiedHealPerSec@ (%i:scaleAP%)</scaleHealth> per second. When possible, target unaffected groups.`,
		icon: `ASSETS/Characters/TFT9_Silco/HUD/Icons2D/TFT6_Silco_EyeOfTheStorm.TFT_Set9_Stage2.dds`,
		name: `Undercity Tactics`,
		variables: {
			'ShimmerDuration': [0, 6, 6, 10],
			'ShimmerDamagePerSec': [0, 65, 100, 400],
			'HealPerSec': [0, 20, 25, 120],
		},
	},
	'TFT9_Sion': {
		desc: `<spellPassive>Passive:</spellPassive> Upon death, reanimate with <scaleHealth>@ReviveHealthPct*100@%</scaleHealth> Health, decaying at <scaleLevel>@DecayHealthPct*100@%</scaleLevel> maximum Health per second. Sion can no longer use his Ability, but is immune to crowd control and gains <br><TFTBonus>@ModifiedAttackSpeedPct@ (%i:scaleAP%)</TFTBonus> Attack Speed.<br><br><spellActive>Active:</spellActive> Charge towards the most enemies within <TFTBonus>@DashRangeTooltip@ (%i:scaleRange%)</TFTBonus> hexes. Deal <physicalDamage>@ModifiedDamage@ (%i:scaleAD%)</physicalDamage> physical damage to any enemies along the way and knock them up, <TFTKeyword>Stunning</TFTKeyword> them for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
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
		desc: `Send a wave of sound at the largest clump of enemies and deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies hit; each hit reduces this damage by @FalloffPercent*100@%. Allies hit by the wave gain <TFTBonus>@AttackSpeed@%</TFTBonus> Attack Speed for the rest of combat.`,
		icon: `ASSETS/Characters/TFT9_Sona/HUD/Icons2D/TFT9_Sona_R.TFT_Set9.dds`,
		name: `Crescendo`,
		variables: {
			'MagicDamage': [0, 170, 255, 420],
			'AttackSpeed': [0, 20, 25, 35],
			'FalloffPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
		},
	},
	'TFT9_Soraka': {
		desc: `Heal the lowest health ally for <scaleHealth>@ModifiedHeal@ (%i:scaleAP%)</scaleHealth>. If the ally is below @EmpoweredHealThreshold*100@% Health, heal them for an additional <scaleHealth>@TooltipBonusHeal@ (%i:scaleAP%)</scaleHealth>. <br><br>Over the next @Duration@ seconds, @NumberOfStars@ stars hit the enemy closest to them. Each deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage.`,
		icon: `ASSETS/Characters/Soraka/HUD/Icons2D/Soraka_W.dds`,
		name: `Astral Infusion`,
		variables: {
			'Heal': [0, 140, 160, 180],
			'EmpoweredHealPercent': [0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185],
			'EmpoweredHealThreshold': [0.5, 0.5, 0.5, 0.5],
			'MagicDamage': [60, 120, 180, 280],
			'Duration': [5, 5, 5, 5],
			'NumberOfStars': [5, 5, 5, 5],
		},
	},
	'TFT9_Swain': {
		desc: `Transform and gain <scaleHealth>@ModifiedBonusHealth@ (%i:scaleAP%)</scaleHealth> max Health. While transformed, deal <magicDamage>@ModifiedDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within 2 hexes every second.<br><br>If already transformed, gain an additional <scaleHealth>@ModifiedSecondaryBonusHealth@ (%i:scaleAP%)</scaleHealth> max Health and deal <magicDamage>@ModifiedSecondaryDamage@ (%i:scaleAP%)</magicDamage> magic damage to enemies within.`,
		icon: `ASSETS/Characters/TFT9_Swain/HUD/Icons2D/TFT9_Swain_R.TFT_Set9.dds`,
		name: `Demonflare`,
		variables: {
			'BuffDuration': [5, 5, 5, 5],
			'BonusMaxHealth': [200, 325, 375, 550],
			'DamagePerTick': [0, 25, 40, 60],
			'SecondaryBonusMaxHealth': [200, 225, 260, 385],
			'SecondaryDamage': [20, 100, 160, 300],
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
		desc: `<spellPassive>Passive:</spellPassive> Whenever an enemy is knocked up or back by anything, throw a boulder towards them. It deals <magicDamage>@ModifiedBoulderDamage@ (%i:scaleAP%)</magicDamage> magic damage to the first enemy hit.<br><br><spellActive>Active:</spellActive> Deal <magicDamage>@ModifiedSpellDamage@ (%i:scaleAP%)</magicDamage> magic damage to the current target and knock them up, <TFTKeyword>Stunning</TFTKeyword> them for @KnockupDuration@ seconds.`,
		icon: `ASSETS/Characters/TFT9_Taliyah/HUD/Icons2D/TFT9_Taliyah_W.TFT_Set9.dds`,
		name: `Seismic Shove`,
		variables: {
			'KnockupDuration': [1, 2, 2, 2],
			'SpellDamage': [100, 220, 330, 495],
			'BoulderDamage': [100, 120, 180, 270],
		},
	},
	'TFT_TrainingDummy': {
		desc: `The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.`,
		icon: `ASSETS/Characters/TFTDebug_Dummy/HUD/Icons2D/TFTDebug_Dummy_DoNothing.dds`,
		name: `On Duty!`,
		variables: {},
	},
	'TFT9_Taric': {
		desc: `Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @Duration@ seconds. It redirects @RedirectPercent*100@% of the damage received by adjacent allies.`,
		icon: `ASSETS/Characters/TFT9_Taric/HUD/Icons2D/TFT9_Taric_W.TFT_Set9.dds`,
		name: `Radiance`,
		variables: {
			'ShieldAmount': [0, 500, 580, 680],
			'Duration': [4, 4, 4, 4],
			'RedirectPercent': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_TwistedFate': {
		desc: `Throw a hand of cards at the current target that deal <magicDamage>@ModifiedInitialMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage. After @Delay@ seconds the cards explode, dealing <magicDamage>@ModifiedDelayedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to nearby enemies.`,
		icon: `ASSETS/Characters/TFT9_TwistedFate/HUD/Cardmaster_RapidToss.TFT_Set9_Stage2.dds`,
		name: `Stacked Deck`,
		variables: {
			'InitialMagicDamage': [175, 155, 235, 355],
			'DelayedMagicDamage': [175, 155, 235, 380],
			'Delay': [1.25, 1.25, 1.25, 1.25],
		},
	},
	'TFT9_VelKoz': {
		desc: `Fire a plasma bolt towards the current target that deals <magicDamage>@ModifiedMagicDamage@ (%i:scaleAP%)</magicDamage> magic damage to the first enemy hit. It then splits in two, dealing @FalloffPercent*100@% less damage whenever it passes through an enemy.`,
		icon: `ASSETS/Characters/TFT9_VelKoz/HUD/Icons2D/TFT9_VelKoz_Q1.TFT_Set9.dds`,
		name: `Plasma Fission`,
		variables: {
			'MagicDamage': [0, 220, 330, 550],
			'FalloffPercent': [0.5, 0.5, 0.5, 0.5],
		},
	},
	'TFT9_Vi': {
		desc: `Gain <TFTBonus>@ModifiedShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield for @ShieldDuration@ seconds. Deal <physicalDamage>@TotalDamage@ (%i:scaleAD%)</physicalDamage> physical damage to enemies within 1 hex of the current target and @ArmorShredPercent*100@% <TFTKeyword>Sunder</TFTKeyword> them for @ArmorShredDuration@ seconds.<br><br><tftitemrules><tftbold>Sunder:</tftbold> Reduce Armor</tftitemrules><br>`,
		icon: `ASSETS/Characters/Vi/HUD/Icons2D/ViPassive.dds`,
		name: `Blast Shield`,
		variables: {
			'ShieldAmount': [0, 350, 400, 450],
			'ShieldDuration': [4, 4, 4, 4],
			'ArmorShredPercent': [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224],
			'ArmorShredDuration': [4, 4, 4, 4],
			'ADPercent': [3, 3, 3, 3],
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
		desc: `<spellPassive>Passive:</spellPassive> Attacks heal for <scaleHealth>@ModifiedHealAmount@ (%i:scaleAP%)</scaleHealth>.<br><br><spellActive>Active:</spellActive> Gain @BonusAttackSpeed*100@% Attack Speed for @Duration@ seconds. Then, <TFTKeyword>Stun</TFTKeyword> adjacent enemies for <scaleLevel>@StunDuration@</scaleLevel> seconds.`,
		icon: `ASSETS/Characters/Warwick/HUD/Icons2D/WarwickP.dds`,
		name: `Primal Howl`,
		variables: {
			'HealAmount': [35, 30, 35, 40],
			'Duration': [2.5, 2.5, 2.5, 2.5],
			'StunDuration': [0, 1.25, 1.5, 2],
			'BonusAttackSpeed': [1, 1, 1, 1],
		},
	},
	'TFT9_Xayah': {
		desc: `Summon <scaleLevel>@NumFeathers@</scaleLevel> feathers that converge on and pierce the current target, dealing <physicalDamage>@TotalDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage. Each feather removes <TFTBonus>@ArmorShred@</TFTBonus> Armor from the first target they hit until the end of combat.<br><br>Ionia Bonus: Attacks restore an additional %i:scaleMana% @TooltipIoniaBonus@ Mana`,
		icon: `ASSETS/Characters/TFT9_Xayah/HUD/Icons2D/TFT9_XayahQ.TFT_Set9.dds`,
		name: `Featherstrike`,
		variables: {
			'NumFeathers': [9, 7, 7, 15],
			'PercentADPerFeather': [0.800000011920929, 0.800000011920929, 0.800000011920929, 1],
			'BonusDamagePerFeather': [0, 15, 25, 60],
			'ArmorShred': [6, 6, 6, 6],
			'TooltipIoniaBonus': [5, 5, 5, 5],
		},
	},
}
