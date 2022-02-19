import type { ChampionData } from '../index'

export const champions: ChampionData[] = [
	{
		"spells": [
			{
				"name": "TFT6_AhriQ",
				"castTime": 0.5,
				"missile": {
					"speedInitial": 1100,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						150,
						125,
						190,
						450
					],
					"HexRange": [
						5,
						5,
						5,
						5
					],
					"SpiritFireStacks": [
						0,
						1,
						1,
						2
					],
					"MultiOrbDamage": [
						0.800000011920929,
						0.800000011920929,
						0.800000011920929,
						0.800000011920929
					],
					"AngleBetweenOrbs": [
						20,
						20,
						20,
						20
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_AhriOrbMissile",
				"missile": {
					"width": 100,
					"speedInitial": 2500,
					"speedMin": 400,
					"speedMax": 2500,
					"acceleration": -2000,
					"tracksTarget": false
				},
				"variables": {},
				"uninterruptable": true
			},
			{
				"name": "TFT6_AhriOrbReturn",
				"missile": {
					"width": 100,
					"speedInitial": 60,
					"speedMin": 60,
					"speedMax": 2600,
					"acceleration": 1900,
					"tracksTarget": true
				},
				"variables": {},
				"uninterruptable": true
			},
			{
				"name": "TFT6_AhriOrbReturnDead",
				"missile": {
					"width": 100,
					"speedInitial": 60,
					"speedMin": 60,
					"speedMax": 2600,
					"acceleration": 1900,
					"tracksTarget": true
				},
				"variables": {},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Ahri",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Ahri.TFT_Set6_Stage2.dds",
		"name": "Ahri",
		"basicAttackMissileSpeed": 1750,
		"critAttackMissileSpeed": 1750,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 45,
			"hp": 800,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 50,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Syndicate",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_AlistarWQ",
				"castTime": 0.5,
				"missile": {
					"speedInitial": 700,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						200,
						350,
						1200
					],
					"Radius": [
						2,
						2,
						2,
						2
					],
					"StunDuration": [
						1.5,
						2,
						2.5,
						8
					],
					"KnockupDuration": [
						1,
						1,
						1,
						1
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Alistar",
		"cost": 4,
		"isSpawn": false,
		"teamSize": 2,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Alistar.TFT_Set6_Stage2.dds",
		"name": "Alistar",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 80,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 100,
			"hp": 1400,
			"initialMana": 85,
			"magicResist": 80,
			"mana": 170,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Hextech",
			"Colossus"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_AsheW",
				"castTime": 0.5,
				"missile": {
					"width": 45,
					"speedInitial": 1500,
					"tracksTarget": true
				},
				"variables": {
					"ADPercent": [
						1,
						1,
						1,
						1
					],
					"NumOfArrows": [
						0,
						6,
						7,
						8
					],
					"ASReduction": [
						15,
						15,
						15,
						15
					],
					"Duration": [
						3,
						3,
						3,
						3
					]
				}
			}
		],
		"apiName": "TFT6_Ashe",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Ashe.TFT_Set6_Stage2.dds",
		"name": "Ashe",
		"basicAttackMissileSpeed": 3500,
		"critAttackMissileSpeed": 3500,
		"stats": {
			"armor": 20,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 600,
			"initialMana": 30,
			"magicResist": 20,
			"mana": 60,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Syndicate",
			"Sniper"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_BlitzcrankRocketGrab",
				"missile": {
					"width": 70,
					"speedInitial": 3000,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						200,
						150,
						300,
						900
					],
					"StunDuration": [
						1.5,
						1.5,
						1.5,
						1.5
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Blitzcrank",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Blitzcrank.TFT_Set6.dds",
		"name": "Blitzcrank",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 45,
			"attackSpeed": 0.5,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 65,
			"hp": 650,
			"initialMana": 175,
			"magicResist": 45,
			"mana": 175,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Scrap",
			"Bodyguard"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_BrandQ",
				"missile": {
					"speedInitial": 1600,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						120,
						160,
						210
					],
					"BlazeDuration": [
						0,
						4,
						4,
						4
					],
					"BonusDamage": [
						0,
						150,
						225,
						300
					],
					"StunDuration": [
						0,
						1,
						1.5,
						2
					],
					"VIPBonusReducedDamage": [
						30,
						30,
						30,
						30
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Brand",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Brand.TFT_Set6_Stage2.dds",
		"name": "Brand",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 20,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 500,
			"initialMana": 0,
			"magicResist": 20,
			"mana": 20,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Debonair",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_BraumR",
				"castTime": 0.5,
				"variables": {
					"Damage": [
						100,
						100,
						200,
						600
					],
					"StunDuration": [
						2.5,
						1.75,
						2.25,
						8
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_BraumBasicAttackShieldOverride",
				"missile": {
					"speedInitial": 347.79998779296875,
					"tracksTarget": true
				},
				"variables": {}
			}
		],
		"apiName": "TFT6_Braum",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Braum.TFT_Set6.dds",
		"name": "Braum",
		"basicAttackMissileSpeed": 347.79998779296875,
		"critAttackMissileSpeed": 347.79998779296875,
		"stats": {
			"armor": 60,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 1100,
			"initialMana": 120,
			"magicResist": 60,
			"mana": 200,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Syndicate",
			"Bodyguard"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_CaitlynR",
				"castTime": 1.100000023841858,
				"missile": {
					"width": 40,
					"speedInitial": 3200,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						800,
						1400,
						2000
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Caitlyn",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Caitlyn.TFT_Set6.dds",
		"name": "Caitlyn",
		"basicAttackMissileSpeed": 2500,
		"critAttackMissileSpeed": 2500,
		"stats": {
			"armor": 15,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 500,
			"initialMana": 0,
			"magicResist": 15,
			"mana": 110,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Enforcer",
			"Sniper"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_CamilleW",
				"variables": {
					"ShieldDuration": [
						4,
						4,
						4,
						4
					],
					"Damage": [
						25,
						150,
						200,
						300
					],
					"Shield": [
						100,
						225,
						300,
						435
					],
					"HealingPerAttack": [
						10,
						30,
						50,
						80
					]
				}
			}
		],
		"apiName": "TFT6_Camille",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Camille.TFT_Set6.dds",
		"name": "Camille",
		"basicAttackMissileSpeed": 467,
		"critAttackMissileSpeed": 467,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 700,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 60,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Clockwork",
			"Challenger"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ChoGathR",
				"castTime": 0.4000000059604645,
				"variables": {
					"Damage": [
						200,
						850,
						950,
						1050
					],
					"BonusHealthOnKill": [
						0.019999999552965164,
						0.019999999552965164,
						0.019999999552965164,
						0.019999999552965164
					],
					"MaxFeastStacks": [
						0,
						20,
						40,
						999
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_ChoGath",
		"cost": 3,
		"isSpawn": false,
		"teamSize": 2,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_ChoGath.TFT_Set6.dds",
		"name": "Cho'Gath",
		"stats": {
			"armor": 50,
			"attackSpeed": 0.550000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 90,
			"hp": 700,
			"initialMana": 100,
			"magicResist": 50,
			"mana": 165,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mutant",
			"Bruiser",
			"Colossus"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_CorkiR",
				"castTime": 0.5,
				"missile": {
					"width": 20,
					"speedInitial": 2000,
					"tracksTarget": true
				},
				"variables": {
					"RocketDamage": [
						0,
						200,
						260,
						333
					]
				}
			}
		],
		"apiName": "TFT6_Corki",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Corki.TFT_Set6_Stage2.dds",
		"name": "Corki",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 25,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 65,
			"hp": 650,
			"initialMana": 25,
			"magicResist": 25,
			"mana": 50,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Yordle",
			"Twinshot"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_DariusQ",
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						125,
						200,
						275,
						350
					],
					"Heal": [
						100,
						120,
						140,
						160
					],
					"HexRange": [
						1,
						1,
						1,
						1
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Darius",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Darius.TFT_Set6.dds",
		"name": "Darius",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.5,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 650,
			"initialMana": 70,
			"magicResist": 40,
			"mana": 120,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Syndicate",
			"Bodyguard"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_DravenSpinning",
				"missile": {
					"speedInitial": 20,
					"tracksTarget": true
				},
				"variables": {
					"BuffDuration": [
						5.75,
						5.75,
						5.75,
						5.75
					],
					"ADMult": [
						1,
						1.5,
						1.600000023841858,
						4
					],
					"Damage": [
						0,
						150,
						200,
						500
					],
					"ArmorPenPercent": [
						50,
						50,
						50,
						50
					],
					"T1DebutantBonus": [
						2.5,
						2.5,
						2.5,
						2.5
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_DravenSpinningAttack",
				"missile": {
					"speedInitial": 1700,
					"tracksTarget": true
				},
				"variables": {}
			},
			{
				"name": "TFT6_DravenSpinningReturn",
				"missile": {
					"width": 120,
					"travelTime": 1.2000000476837158,
					"speedInitial": 700,
					"tracksTarget": true
				},
				"variables": {}
			},
			{
				"name": "TFT6_DravenSpinningAttackCrit",
				"castTime": 0.23330000042915344,
				"missile": {
					"speedInitial": 1700,
					"tracksTarget": true
				},
				"variables": {}
			}
		],
		"apiName": "TFT6_Draven",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Draven.TFT_Set6_Stage2.dds",
		"name": "Draven",
		"basicAttackMissileSpeed": 1600,
		"critAttackMissileSpeed": 1600,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.800000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 80,
			"hp": 800,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 40,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Debonair",
			"Challenger"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_EkkoW",
				"castTime": 0.25,
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"FieldDelay": [
						2.200000047683716,
						2.200000047683716,
						2.200000047683716,
						2.200000047683716
					],
					"FieldDuration": [
						2,
						2,
						2,
						2
					],
					"HexRadius": [
						2,
						2,
						2,
						2
					],
					"BonusAS": [
						0.10000000149011612,
						0.3499999940395355,
						0.4000000059604645,
						0.5
					],
					"ASSlow": [
						0,
						0.3499999940395355,
						0.3499999940395355,
						0.5
					],
					"Damage": [
						75,
						150,
						200,
						350
					],
					"SlowDuration": [
						4,
						4,
						4,
						4
					],
					"BuffDuration": [
						4,
						4,
						4,
						4
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Ekko",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Ekko.TFT_Set6.dds",
		"name": "Ekko",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 65,
			"hp": 700,
			"initialMana": 80,
			"magicResist": 40,
			"mana": 120,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Scrap",
			"Innovator",
			"Assassin"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_EzrealQ",
				"castTime": 0.25,
				"missile": {
					"width": 60,
					"speedInitial": 2000,
					"tracksTarget": false
				},
				"variables": {
					"BonusDamage": [
						0,
						25,
						50,
						100
					],
					"ASBoost": [
						0.20000000298023224,
						0.20000000298023224,
						0.20000000298023224,
						0.20000000298023224
					],
					"MaxStacks": [
						5,
						5,
						5,
						5
					],
					"PercentAD": [
						1.5,
						1.5,
						1.5,
						1.5
					]
				}
			}
		],
		"apiName": "TFT6_Ezreal",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Ezreal.TFT_Set6.dds",
		"name": "Ezreal",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 15,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 500,
			"initialMana": 0,
			"magicResist": 15,
			"mana": 40,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Scrap",
			"Innovator"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_GalioR",
				"castTime": 0.8500000238418579,
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						200,
						150,
						225,
						9001
					],
					"HexRadius": [
						3,
						3,
						3,
						5
					],
					"StunDuration": [
						1,
						1,
						1.5,
						10
					],
					"CritBonusDamage": [
						0,
						70,
						100,
						1999
					],
					"MaxHealthPercent": [
						0.05000000074505806,
						0.05000000074505806,
						0.05000000074505806,
						0.05000000074505806
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Galio",
		"cost": 5,
		"isSpawn": false,
		"teamSize": 2,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Galio.TFT_Set6.dds",
		"name": "Galio",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 1000,
		"stats": {
			"armor": 70,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 110,
			"hp": 1200,
			"initialMana": 200,
			"magicResist": 70,
			"mana": 300,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Socialite",
			"Bodyguard",
			"Colossus"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_GangplankQ",
				"castTime": 0.25,
				"missile": {
					"speedInitial": 2200,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						120,
						160,
						225
					],
					"ADPercent": [
						1.7000000476837158,
						1.7000000476837158,
						1.7000000476837158,
						1.7000000476837158
					]
				}
			}
		],
		"apiName": "TFT6_Gangplank",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Gangplank.TFT_Set6.dds",
		"name": "Gangplank",
		"stats": {
			"armor": 40,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 75,
			"hp": 750,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 50,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mercenary",
			"Twinshot"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_GnarR",
				"castTime": 0.5,
				"missile": {
					"speedInitial": 1200,
					"tracksTarget": true
				},
				"variables": {
					"RCCDuration": [
						1.5,
						1.5,
						2,
						3
					],
					"TransformDuration": [
						60,
						60,
						60,
						60
					],
					"TransformHealth": [
						50,
						500,
						750,
						1200
					],
					"ADPercent": [
						0,
						1.850000023841858,
						1.850000023841858,
						1.850000023841858
					],
					"Damage": [
						0,
						150,
						200,
						300
					],
					"TransformManaReduc": [
						20,
						20,
						20,
						20
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_GnarBigQMissile",
				"castTime": 0.5,
				"missile": {
					"width": 90,
					"speedInitial": 2100,
					"tracksTarget": false
				},
				"variables": {},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Gnar",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Gnar.TFT_Set6_Stage2.dds",
		"name": "Gnar",
		"basicAttackMissileSpeed": 1500,
		"critAttackMissileSpeed": 1500,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 700,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 80,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Yordle",
			"Socialite",
			"Striker"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_IllaoiW",
				"variables": {
					"MagicDamage": [
						0,
						200,
						325,
						550
					],
					"PercentHealing": [
						0,
						0.25,
						0.30000001192092896,
						0.4000000059604645
					],
					"Duration": [
						5,
						5,
						5,
						5
					]
				}
			}
		],
		"apiName": "TFT6_Illaoi",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Illaoi.TFT_Set6.dds",
		"name": "Illaoi",
		"stats": {
			"armor": 40,
			"attackSpeed": 0.550000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 700,
			"initialMana": 40,
			"magicResist": 40,
			"mana": 80,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mercenary",
			"Bruiser"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_IreliaQ",
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"PercentADDamage": [
						0,
						1.7999999523162842,
						1.7999999523162842,
						1.7999999523162842
					],
					"BaseDamage": [
						0,
						90,
						135,
						600
					]
				},
				"cantCastWhileRooted": true,
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Irelia",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Irelia.TFT_Set6_Stage2.dds",
		"name": "Irelia",
		"stats": {
			"armor": 50,
			"attackSpeed": 0.8500000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 90,
			"hp": 900,
			"initialMana": 0,
			"magicResist": 50,
			"mana": 30,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Scrap",
			"Striker"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_JarvanIVE",
				"castTime": 0.75,
				"missile": {
					"speedInitial": 1450,
					"tracksTarget": true
				},
				"variables": {
					"Duration": [
						5,
						5,
						5,
						5
					],
					"HexRadius": [
						3,
						3,
						3,
						3
					],
					"ASPercent": [
						0.6499999761581421,
						0.4000000059604645,
						0.5,
						0.699999988079071
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_JarvanIV",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_JarvanIV.TFT_Set6_Stage2.dds",
		"name": "Jarvan IV",
		"basicAttackMissileSpeed": 20,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 55,
			"hp": 700,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 60,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Hextech",
			"Striker"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_JayceRMelee",
				"missile": {
					"speedInitial": 20,
					"tracksTarget": true
				},
				"variables": {
					"MeleeDamagePercent": [
						0,
						1.600000023841858,
						1.7000000476837158,
						10
					],
					"MeleeShred": [
						0,
						0.5,
						0.5,
						0.699999988079071
					],
					"MeleeShredDuration": [
						5,
						5,
						5,
						5
					],
					"MeleeArmorGain": [
						40,
						40,
						40,
						40
					],
					"MeleeMRGain": [
						40,
						40,
						40,
						40
					],
					"ShieldAmount": [
						0,
						375,
						550,
						3000
					],
					"ShieldDuration": [
						3,
						3,
						3,
						3
					]
				},
				"cantCastWhileRooted": true,
				"uninterruptable": true
			},
			{
				"name": "TFT6_JayceRRanged",
				"castTime": 0.2143000066280365,
				"missile": {
					"speedInitial": 1200,
					"tracksTarget": true
				},
				"variables": {
					"RangedADPercentBase": [
						0,
						1.7000000476837158,
						1.7999999523162842,
						5
					],
					"RangedASBoost": [
						0,
						0.5,
						0.75,
						3
					],
					"RangedASDuration": [
						5,
						5,
						5,
						5
					],
					"RangedADGain": [
						50,
						45,
						70,
						1000
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Jayce",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Jayce.TFT_Set6.dds",
		"name": "Jayce",
		"basicAttackMissileSpeed": 347.79998779296875,
		"critAttackMissileSpeed": 2500,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 90,
			"hp": 1000,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 60,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Enforcer",
			"Innovator",
			"Transformer"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_JhinR",
				"castTime": 0.5,
				"variables": {
					"BonusDamage": [
						1,
						1,
						1,
						1
					],
					"PercentAttackDamage": [
						1.2000000476837158,
						1.5,
						2,
						3
					],
					"DamageFalloff": [
						0.33000001311302185,
						0.33000001311302185,
						0.33000001311302185,
						0.33000001311302185
					],
					"AttackSpeed": [
						0.8500000238418579,
						0.8999999761581421,
						0.8999999761581421,
						1.399999976158142
					],
					"ADFromAttackSpeed": [
						0.800000011920929,
						0.800000011920929,
						0.800000011920929,
						0.800000011920929
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Jhin",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Jhin.TFT_Set6.dds",
		"name": "Jhin",
		"stats": {
			"armor": 30,
			"attackSpeed": 2,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 90,
			"hp": 700,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 70,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Clockwork",
			"Sniper"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_JinxR",
				"castTime": 1,
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						500,
						450,
						700,
						8888
					],
					"InnerRadius": [
						1,
						1,
						1,
						2
					],
					"OuterRadius": [
						3,
						3,
						3,
						5
					],
					"PercentBurn": [
						1,
						2,
						3,
						4
					],
					"FalloffPercent": [
						0.5,
						0.5,
						0.5,
						0.5
					],
					"RocketLauncherPercentAD": [
						0.75,
						2.200000047683716,
						2.299999952316284,
						8.880000114440918
					],
					"HexDuration": [
						5,
						5,
						5,
						5
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Jinx",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6b_Jinx.dds",
		"name": "Jinx",
		"basicAttackMissileSpeed": 2750,
		"critAttackMissileSpeed": 2750,
		"stats": {
			"armor": 40,
			"attackSpeed": 1,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 88,
			"hp": 888,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 99,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Scrap",
			"Rivals",
			"Twinshot"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_KaisaQ",
				"castTime": 1,
				"missile": {
					"speedInitial": 2500,
					"tracksTarget": true
				},
				"variables": {
					"NumMissiles": [
						4,
						12,
						18,
						100
					],
					"FakeCastTime": [
						1,
						1,
						1,
						1
					],
					"Damage": [
						50,
						70,
						90,
						180
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Kaisa",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Kaisa.TFT_Set6.dds",
		"name": "Kai'Sa",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 30,
			"attackSpeed": 1.100000023841858,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 850,
			"initialMana": 75,
			"magicResist": 30,
			"mana": 150,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Mutant",
			"Challenger"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_KassadinQ",
				"castTime": 0.25,
				"missile": {
					"speedInitial": 1400,
					"tracksTarget": true
				},
				"variables": {
					"ManaReave": [
						0,
						0.5,
						0.5,
						0.5
					],
					"DamageReduction": [
						0.25,
						0.25,
						0.25,
						0.25
					],
					"Damage": [
						150,
						250,
						325,
						400
					],
					"Duration": [
						5,
						5,
						5,
						5
					],
					"ShieldAmount": [
						0,
						150,
						250,
						350
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Kassadin",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Kassadin.TFT_Set6.dds",
		"name": "Kassadin",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 750,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 60,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mutant",
			"Scholar"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_KhaZixR",
				"missile": {
					"speedInitial": 2200,
					"tracksTarget": true
				},
				"variables": {
					"MSBuff": [
						1350,
						1350,
						1350,
						1350
					],
					"Damage": [
						0,
						175,
						225,
						500
					],
					"ManaReave": [
						0,
						50,
						50,
						50
					],
					"ADPercent": [
						0,
						1.9500000476837158,
						2,
						2.25
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_KhaZix",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_KhaZix.TFT_Set6_Stage2.dds",
		"name": "Kha'Zix",
		"stats": {
			"armor": 35,
			"attackSpeed": 0.8999999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 90,
			"hp": 800,
			"initialMana": 0,
			"magicResist": 35,
			"mana": 40,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mutant",
			"Assassin"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_LeonaW",
				"castTime": 0.5799999833106995,
				"missile": {
					"speedInitial": 828.5,
					"tracksTarget": true
				},
				"variables": {
					"Shielding": [
						0,
						400,
						650,
						1000
					],
					"Duration": [
						4,
						5,
						5,
						8
					],
					"BonusStats": [
						25,
						30,
						50,
						80
					],
					"T1DebutantBonus": [
						0.800000011920929,
						0.800000011920929,
						0.800000011920929,
						0.800000011920929
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Leona",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Leona.TFT_Set6_Stage2.dds",
		"name": "Leona",
		"basicAttackMissileSpeed": 347.79998779296875,
		"critAttackMissileSpeed": 347.79998779296875,
		"stats": {
			"armor": 50,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 850,
			"initialMana": 75,
			"magicResist": 50,
			"mana": 125,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Debonair",
			"Bodyguard"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_LucianE",
				"variables": {
					"Damage": [
						0,
						175,
						275,
						300
					],
					"NumShots": [
						0,
						2,
						2,
						3
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_LucianBasicAttack",
				"missile": {
					"speedInitial": 2800,
					"tracksTarget": true
				},
				"variables": {}
			},
			{
				"name": "TFT6_LucianBasicAttack2",
				"missile": {
					"speedInitial": 2800,
					"tracksTarget": true
				},
				"variables": {}
			},
			{
				"name": "TFT6_LucianCritAttack",
				"missile": {
					"speedInitial": 2800,
					"tracksTarget": true
				},
				"variables": {}
			},
			{
				"name": "TFT6_LucianPassiveShot",
				"missile": {
					"width": 50,
					"speedInitial": 2800,
					"tracksTarget": true
				},
				"variables": {},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Lucian",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Lucian.TFT_Set6_Stage2.dds",
		"name": "Lucian",
		"basicAttackMissileSpeed": 2800,
		"critAttackMissileSpeed": 2800,
		"stats": {
			"armor": 25,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 650,
			"initialMana": 0,
			"magicResist": 25,
			"mana": 40,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Hextech",
			"Twinshot"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_LuluR",
				"castTime": 0.25,
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"BonusHealth": [
						300,
						325,
						350,
						375
					],
					"BuffDuration": [
						60,
						60,
						60,
						60
					],
					"CCDuration": [
						1,
						1,
						1,
						1
					],
					"NumAllies": [
						1,
						1,
						2,
						3
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Lulu",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Lulu.TFT_Set6.dds",
		"name": "Lulu",
		"stats": {
			"armor": 25,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 600,
			"initialMana": 60,
			"magicResist": 25,
			"mana": 125,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Yordle",
			"Enchanter"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_MalzaharE",
				"variables": {
					"Damage": [
						0,
						625,
						875,
						1050
					],
					"Duration": [
						0,
						8,
						8,
						8
					],
					"MRShred": [
						0.4000000059604645,
						0.4000000059604645,
						0.4000000059604645,
						0.4000000059604645
					],
					"SpreadTargets": [
						0,
						1,
						1,
						2
					],
					"TickRate": [
						0.5,
						0.5,
						0.5,
						0.5
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Malzahar",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Malzahar.TFT_Set6.dds",
		"name": "Malzahar",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 650,
			"initialMana": 30,
			"magicResist": 30,
			"mana": 60,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Mutant",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_TibbersP",
				"castTime": 0.3499999940395355,
				"missile": {
					"speedInitial": 3500,
					"tracksTarget": true
				},
				"variables": {
					"BuffDuration": [
						4,
						4,
						4,
						4
					],
					"PercentAD": [
						1,
						1,
						1,
						1
					],
					"AllyADAPBuff": [
						20,
						20,
						20,
						20
					],
					"AllyPercentAD": [
						0.4000000059604645,
						0.4000000059604645,
						0.4000000059604645,
						0.4000000059604645
					],
					"AllyPercentASBase": [
						1,
						1,
						1,
						1
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_TibbersMissileEffect",
				"missile": {
					"speedInitial": 2000,
					"tracksTarget": true
				},
				"variables": {}
			}
		],
		"apiName": "TFT6_Tibbers",
		"isSpawn": true,
		"starLevel": 2,
		"teamSize": 0,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Tibbers.TFT_Set6.dds",
		"name": "Mechanical Bear",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 70,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.5,
			"damage": 50,
			"hp": 775,
			"initialMana": 0,
			"magicResist": 70,
			"mana": 0,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": []
	},
	{
		"spells": [
			{
				"name": "TFT6_HextechDragonQ",
				"castTime": 0.3889999985694885,
				"variables": {
					"BonusLightningDamage": [
						500,
						500,
						500,
						500
					],
					"NumEnemies": [
						3,
						3,
						3,
						3
					],
					"FearDuration": [
						2,
						2,
						2,
						2
					],
					"EnergizedDuration": [
						8,
						8,
						8,
						8
					],
					"CritIncrease": [
						0.75,
						0.75,
						0.75,
						0.75
					],
					"CritDamageIncrease": [
						0.10000000149011612,
						0.10000000149011612,
						0.10000000149011612,
						0.10000000149011612
					],
					"FearHexRange": [
						5,
						5,
						5,
						5
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_HextechDragonEmpoweredAttack",
				"missile": {
					"width": 20,
					"speedInitial": 1000,
					"tracksTarget": true
				},
				"variables": {},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_HexTechDragon",
		"isSpawn": true,
		"starLevel": 3,
		"teamSize": 0,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_HextechDragon.TFT_Set6.dds",
		"name": "Mechanical Dragon",
		"basicAttackMissileSpeed": 1000,
		"critAttackMissileSpeed": 1000,
		"stats": {
			"armor": 100,
			"attackSpeed": 0.800000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 65,
			"hp": 1125,
			"initialMana": 200,
			"magicResist": 100,
			"mana": 300,
			"moveSpeed": 500,
			"range": 2
		},
		"traits": []
	},
	{
		"spells": [
			{
				"name": "TFT6_MalzaharVoidlingSpell",
				"castTime": 0.5,
				"variables": {
					"DamageReducedPercent": [
						0.25,
						0.25,
						0.25,
						0.25
					],
					"DamageReducedDuration": [
						4,
						4,
						4,
						4
					],
					"DamageAmount": [
						50,
						50,
						50,
						50
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_MalzaharVoidling",
		"isSpawn": true,
		"starLevel": 1,
		"teamSize": 0,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Scarab.TFT_Set6.dds",
		"name": "Mechanical Scarab",
		"stats": {
			"armor": 30,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 475,
			"initialMana": 40,
			"magicResist": 30,
			"mana": 80,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": []
	},
	{
		"spells": [
			{
				"name": "TFT6_MissFortuneE",
				"missile": {
					"width": 80,
					"travelTime": 0.009999999776482582,
					"speedInitial": 0,
					"tracksTarget": false
				},
				"variables": {
					"MagicDamage": [
						0,
						275,
						375,
						600
					],
					"HealingReduction": [
						0,
						50,
						50,
						50
					],
					"HealingReductionDuration": [
						0,
						6,
						6,
						6
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_MissFortune",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_MissFortune.TFT_Set6.dds",
		"name": "Miss Fortune",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 25,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 650,
			"initialMana": 40,
			"magicResist": 25,
			"mana": 80,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Mercenary",
			"Sniper"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_MorganaR",
				"missile": {
					"speedInitial": 20,
					"tracksTarget": true
				},
				"variables": {
					"ShieldAmount": [
						50,
						425,
						550,
						750
					],
					"ShieldDuration": [
						3,
						3,
						3,
						3
					],
					"Radius": [
						2,
						2,
						2,
						2
					],
					"StunDuration": [
						0,
						1.5,
						2,
						2.5
					],
					"DamagePerSecond": [
						0,
						80,
						125,
						175
					],
					"RefundedMana": [
						30,
						30,
						30,
						30
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Morgana",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Morgana.TFT_Set6_Stage2.dds",
		"name": "Morgana",
		"basicAttackMissileSpeed": 1600,
		"critAttackMissileSpeed": 1600,
		"stats": {
			"armor": 50,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 800,
			"initialMana": 60,
			"magicResist": 50,
			"mana": 120,
			"moveSpeed": 500,
			"range": 2
		},
		"traits": [
			"Syndicate",
			"Enchanter"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_NocturneE",
				"castTime": 0.5,
				"missile": {
					"speedInitial": 20,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						200,
						200,
						300,
						400
					],
					"StunDuration": [
						2,
						2,
						2.5,
						3.5
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Nocturne",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Nocturne.TFT_Set6_Stage2.dds",
		"name": "Nocturne",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 25,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 600,
			"initialMana": 40,
			"magicResist": 25,
			"mana": 80,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Hextech",
			"Assassin"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_OriannaR",
				"castTime": 0.3499999940395355,
				"missile": {
					"width": 80,
					"speedInitial": 1400,
					"tracksTarget": true
				},
				"variables": {
					"ShieldAmount": [
						0,
						120,
						170,
						600
					],
					"Duration": [
						0,
						4,
						4,
						4
					],
					"Damage": [
						0,
						300,
						450,
						1200
					],
					"StunDuration": [
						2,
						1,
						1,
						4
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Orianna",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Orianna.TFT_Set6.dds",
		"name": "Orianna",
		"basicAttackMissileSpeed": 1450,
		"critAttackMissileSpeed": 1450,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 750,
			"initialMana": 50,
			"magicResist": 30,
			"mana": 130,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Clockwork",
			"Enchanter"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_PoppyP",
				"castTime": 0.10000000149011612,
				"missile": {
					"speedInitial": 2000,
					"tracksTarget": true
				},
				"variables": {
					"PercentArmorDamage": [
						2,
						1.7999999523162842,
						2.0999999046325684,
						2.4000000953674316
					],
					"ShieldAmount": [
						100,
						225,
						275,
						325
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Poppy",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Poppy.TFT_Set6.dds",
		"name": "Poppy",
		"stats": {
			"armor": 40,
			"attackSpeed": 0.550000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 650,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 50,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Yordle",
			"Bodyguard"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_QuinnQ",
				"missile": {
					"width": 60,
					"speedInitial": 1550,
					"tracksTarget": true
				},
				"variables": {
					"BonusDamage": [
						0,
						200,
						300,
						700
					],
					"DisarmDuration": [
						3,
						2,
						2.5,
						3
					]
				}
			}
		],
		"apiName": "TFT6_Quinn",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Quinn.TFT_Set6.dds",
		"name": "Quinn",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 20,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 550,
			"initialMana": 70,
			"magicResist": 20,
			"mana": 140,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Mercenary",
			"Challenger"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_RekSaiE",
				"castTime": 0.5,
				"missile": {
					"speedInitial": 4000,
					"tracksTarget": true
				},
				"variables": {
					"ADPercent": [
						1.25,
						1.25,
						1.25,
						1.25
					],
					"ResistPercentSteal": [
						0,
						0.30000001192092896,
						0.3499999940395355,
						0.4000000059604645
					],
					"Damage": [
						0,
						100,
						150,
						200
					],
					"Heal": [
						0,
						150,
						200,
						350
					],
					"HealBonus": [
						0,
						300,
						400,
						600
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_RekSai",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_RekSai.TFT_Set6_Stage2.dds",
		"name": "Rek'Sai",
		"stats": {
			"armor": 45,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 800,
			"initialMana": 60,
			"magicResist": 45,
			"mana": 90,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mutant",
			"Striker",
			"Bruiser"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_RenataR",
				"castTime": 0.5,
				"missile": {
					"width": 200,
					"speedInitial": 800,
					"tracksTarget": false
				},
				"variables": {
					"DamagePerSecond": [
						1,
						55,
						85,
						255
					],
					"ASReduction": [
						0.30000001192092896,
						15,
						15,
						15
					],
					"Duration": [
						15,
						15,
						15,
						15
					],
					"SpellRange": [
						6,
						6,
						6,
						6
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Renata",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Renata.TFT_Set6_Stage2.dds",
		"name": "Renata Glasc",
		"basicAttackMissileSpeed": 1800,
		"critAttackMissileSpeed": 1800,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 800,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 60,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Chemtech",
			"Scholar"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SejuaniP",
				"variables": {
					"DefensiveStats": [
						0,
						75,
						100,
						150
					],
					"Duration": [
						4,
						4,
						4,
						4
					],
					"StunDuration": [
						0,
						1.5,
						2,
						3
					],
					"MagicDamage": [
						0,
						275,
						400,
						650
					]
				}
			},
			{
				"name": "TFT6_SejuaniPStun",
				"variables": {},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Sejuani",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Sejuani.TFT_Set6_Stage2.dds",
		"name": "Sejuani",
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 45,
			"attackSpeed": 0.550000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 65,
			"hp": 800,
			"initialMana": 20,
			"magicResist": 45,
			"mana": 80,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Hextech",
			"Enforcer",
			"Bruiser"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SennaQ",
				"missile": {
					"width": 160,
					"speedInitial": 20000,
					"startDelay": 0.05000000074505806,
					"tracksTarget": false
				},
				"variables": {
					"PercentAD": [
						1.600000023841858,
						1.600000023841858,
						1.600000023841858,
						1.600000023841858
					],
					"PercentHealing": [
						0.5,
						0.5,
						0.5,
						0.5
					],
					"Damage": [
						0,
						80,
						125,
						200
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Senna",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Senna.TFT_Set6_Stage2.dds",
		"name": "Senna",
		"basicAttackMissileSpeed": 8000,
		"critAttackMissileSpeed": 8000,
		"stats": {
			"armor": 25,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 650,
			"initialMana": 30,
			"magicResist": 25,
			"mana": 80,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Socialite",
			"Enchanter"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SeraphineR",
				"castTime": 0.5,
				"missile": {
					"width": 270,
					"speedInitial": 1600,
					"tracksTarget": false
				},
				"variables": {
					"Damage": [
						1,
						250,
						400,
						1200
					],
					"Heal": [
						0,
						250,
						350,
						1000
					],
					"ASBonus": [
						0.30000001192092896,
						0.30000001192092896,
						0.44999998807907104,
						1
					],
					"ASBonusDuration": [
						4,
						4,
						4,
						4
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Seraphine",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Seraphine.TFT_Set6.dds",
		"name": "Seraphine",
		"basicAttackMissileSpeed": 1800,
		"critAttackMissileSpeed": 1800,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 750,
			"initialMana": 80,
			"magicResist": 30,
			"mana": 150,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Socialite",
			"Innovator"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SilcoR",
				"castTime": 0.25,
				"missile": {
					"speedInitial": 20,
					"tracksTarget": true
				},
				"variables": {
					"NumTargets": [
						0,
						1,
						1,
						5
					],
					"AttackSpeed": [
						50,
						0.800000011920929,
						1.75,
						6.659999847412109
					],
					"MaxHealth": [
						70,
						0.5,
						0.5,
						0.5
					],
					"Duration": [
						8,
						8,
						8,
						8
					],
					"Damage": [
						0,
						250,
						500,
						5000
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Silco",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Silco.TFT_Set6_Stage2.dds",
		"name": "Silco",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 850,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 40,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Mastermind",
			"Scholar"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SingedE",
				"castTime": 0.5,
				"missile": {
					"speedInitial": 20,
					"tracksTarget": true
				},
				"variables": {
					"AoEStunDuration": [
						0.75,
						0.75,
						0.75,
						0.75
					],
					"Damage": [
						50,
						125,
						175,
						250
					],
					"StunDuration": [
						2,
						1.5,
						2,
						3
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Singed",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Singed.TFT_Set6.dds",
		"name": "Singed",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 40,
			"attackSpeed": 0.550000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 60,
			"hp": 650,
			"initialMana": 100,
			"magicResist": 40,
			"mana": 150,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Chemtech",
			"Innovator"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SivirW",
				"missile": {
					"speedInitial": 1200,
					"tracksTarget": true
				},
				"variables": {
					"PercentDamage": [
						0.33000001311302185,
						0.33000001311302185,
						0.33000001311302185,
						0.33000001311302185
					],
					"NumBounces": [
						3,
						4,
						5,
						9
					],
					"BounceRange": [
						5,
						5,
						5,
						5
					],
					"Duration": [
						5,
						5,
						5,
						5
					],
					"BonusAttackSpeed": [
						0,
						0.6000000238418579,
						0.800000011920929,
						2.5
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Sivir",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Sivir.TFT_Set6_Stage2.dds",
		"name": "Sivir",
		"stats": {
			"armor": 30,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 80,
			"hp": 700,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 60,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Hextech",
			"Striker"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SwainQ",
				"castTime": 0.5,
				"variables": {
					"BaseDamage": [
						0,
						225,
						300,
						450
					],
					"Range": [
						660,
						660,
						660,
						660
					],
					"Healing": [
						80,
						225,
						250,
						350
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Swain",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Swain.TFT_Set6_Stage2.dds",
		"name": "Swain",
		"basicAttackMissileSpeed": 1800,
		"critAttackMissileSpeed": 1800,
		"stats": {
			"armor": 45,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 45,
			"hp": 800,
			"initialMana": 40,
			"magicResist": 45,
			"mana": 85,
			"moveSpeed": 500,
			"range": 2
		},
		"traits": [
			"Hextech",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_SyndraW",
				"variables": {
					"Damage": [
						0,
						225,
						325,
						500
					],
					"StunDuration": [
						0,
						2,
						2.5,
						3
					],
					"VIPDebutantBonus": [
						1.5,
						1.5,
						1.5,
						1.5
					]
				}
			},
			{
				"name": "TFT6_SyndraWThrow",
				"variables": {}
			}
		],
		"apiName": "TFT6_Syndra",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Syndra.TFT_Set6_Stage2.dds",
		"name": "Syndra",
		"basicAttackMissileSpeed": 1800,
		"critAttackMissileSpeed": 1800,
		"stats": {
			"armor": 20,
			"attackSpeed": 0.6499999761581421,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 600,
			"initialMana": 0,
			"magicResist": 20,
			"mana": 50,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Debonair",
			"Scholar"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_TahmKenchW",
				"castTime": 0.30000001192092896,
				"variables": {
					"Damage": [
						600,
						900,
						1350,
						30000
					],
					"StunDuration": [
						1,
						1,
						1,
						1
					],
					"BellyDuration": [
						0,
						3,
						3,
						3
					],
					"DamageReduction": [
						0.30000001192092896,
						0.30000001192092896,
						0.30000001192092896,
						0.30000001192092896
					],
					"TickRate": [
						0.5,
						0.5,
						0.5,
						0.5
					],
					"ReducedDamageToCC": [
						0,
						350,
						525,
						10500
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_TahmKench",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_TahmKench.TFT_Set6.dds",
		"name": "Tahm Kench",
		"stats": {
			"armor": 60,
			"attackSpeed": 0.550000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 80,
			"hp": 1000,
			"initialMana": 30,
			"magicResist": 60,
			"mana": 60,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Mercenary",
			"Bruiser",
			"Glutton"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_TalonP",
				"missile": {
					"speedInitial": 1200,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						450,
						650,
						950
					],
					"BleedDuration": [
						7,
						7,
						7,
						7
					],
					"VIPBleedDurationBonus": [
						100,
						100,
						100,
						100
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Talon",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Talon.TFT_Set6_Stage2.dds",
		"name": "Talon",
		"basicAttackMissileSpeed": 0,
		"critAttackMissileSpeed": 0,
		"stats": {
			"armor": 25,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 650,
			"initialMana": 0,
			"magicResist": 25,
			"mana": 0,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Debonair",
			"Assassin"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_TryndamereE",
				"castTime": 0.05000000074505806,
				"variables": {
					"SpinDamage": [
						1,
						1,
						1,
						1
					],
					"BaseSpinDamage": [
						0,
						60,
						90,
						150
					],
					"BonusAAPercent": [
						0.20000000298023224,
						0.20000000298023224,
						0.20000000298023224,
						0.20000000298023224
					]
				}
			}
		],
		"apiName": "TFT6_Tryndamere",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Tryndamere.TFT_Set6_Stage2.dds",
		"name": "Tryndamere",
		"basicAttackMissileSpeed": 347.79998779296875,
		"critAttackMissileSpeed": 347.79998779296875,
		"stats": {
			"armor": 35,
			"attackSpeed": 0.75,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 750,
			"initialMana": 0,
			"magicResist": 35,
			"mana": 40,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Chemtech",
			"Challenger"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_TwitchR",
				"castTime": 0.3889999985694885,
				"missile": {
					"width": 80,
					"speedInitial": 4000,
					"tracksTarget": false
				},
				"variables": {
					"PercentAttackDamage": [
						0,
						1.25,
						1.350000023841858,
						1.5
					],
					"GWStrength": [
						0.5,
						0.5,
						0.5,
						0.5
					],
					"GWDuration": [
						5,
						5,
						5,
						5
					],
					"BaseDamage": [
						0.5,
						25,
						50,
						75
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Twitch",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Twitch.TFT_Set6_Stage2.dds",
		"name": "Twitch",
		"stats": {
			"armor": 15,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 450,
			"initialMana": 0,
			"magicResist": 15,
			"mana": 35,
			"moveSpeed": 500,
			"range": 3
		},
		"traits": [
			"Chemtech",
			"Assassin"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_VeigarW",
				"variables": {
					"NumStrikes": [
						0,
						20,
						30,
						99
					],
					"Damage": [
						0,
						250,
						300,
						777
					]
				}
			}
		],
		"apiName": "TFT6_Veigar",
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Veigar.TFT_Set6.dds",
		"name": "Veigar",
		"stats": {
			"armor": 25,
			"attackSpeed": 0.800000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 45,
			"hp": 800,
			"initialMana": 0,
			"magicResist": 25,
			"mana": 75,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"YordleLord"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_VexW",
				"castTime": 0.25,
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"ShieldAmount": [
						400,
						550,
						700,
						900
					],
					"ShieldDuration": [
						4,
						4,
						4,
						4
					],
					"ShieldAmp": [
						0.15000000596046448,
						0.15000000596046448,
						0.15000000596046448,
						0.15000000596046448
					],
					"ShieldDamage": [
						125,
						100,
						135,
						175
					],
					"BonusDamage": [
						125,
						100,
						135,
						175
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Vex",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Vex.TFT_Set6.dds",
		"name": "Vex",
		"basicAttackMissileSpeed": 2000,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 50,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 850,
			"initialMana": 0,
			"magicResist": 50,
			"mana": 50,
			"moveSpeed": 500,
			"range": 2
		},
		"traits": [
			"Yordle",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6b_Vi_Spell",
				"castTime": 0.30000001192092896,
				"missile": {
					"speedInitial": 0,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						50,
						150,
						225,
						450
					],
					"AoEHexRadius": [
						2,
						2,
						2,
						2
					],
					"DamageFinal": [
						0,
						300,
						450,
						900
					],
					"Shield": [
						0,
						225,
						325,
						750
					],
					"ShieldDuration": [
						4,
						4,
						4,
						4
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6b_Vi",
		"cost": 4,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6b_Vi.dds",
		"name": "Vi",
		"basicAttackMissileSpeed": 1000,
		"critAttackMissileSpeed": 1000,
		"stats": {
			"armor": 50,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 80,
			"hp": 900,
			"initialMana": 0,
			"magicResist": 50,
			"mana": 40,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Enforcer",
			"Rivals",
			"Bruiser"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ViktorE",
				"castTime": 0.6000000238418579,
				"variables": {
					"DamageAmount": [
						50,
						360,
						420,
						1500
					],
					"NumLasers": [
						3,
						3,
						4,
						12
					],
					"ShredDuration": [
						6,
						6,
						6,
						6
					],
					"ArmorReduction": [
						0.5,
						0.699999988079071,
						0.699999988079071,
						0.699999988079071
					],
					"ShieldDestructionPercent": [
						0,
						0.25,
						0.33000001311302185,
						1
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Viktor",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Viktor.TFT_Set6.dds",
		"name": "Viktor",
		"basicAttackMissileSpeed": 2300,
		"critAttackMissileSpeed": 2300,
		"stats": {
			"armor": 35,
			"attackSpeed": 0.800000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 850,
			"initialMana": 0,
			"magicResist": 35,
			"mana": 140,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Chemtech",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_WarwickP",
				"missile": {
					"speedInitial": 1200,
					"tracksTarget": true
				},
				"variables": {
					"PercentHealth": [
						0.05000000074505806,
						0.07000000029802322,
						0.09000000357627869,
						0.11999999731779099
					],
					"HealAmount": [
						0,
						35,
						50,
						75
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Warwick",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Warwick.TFT_Set6.dds",
		"name": "Warwick",
		"stats": {
			"armor": 40,
			"attackSpeed": 0.800000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 750,
			"initialMana": 0,
			"magicResist": 40,
			"mana": 0,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Chemtech",
			"Challenger"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ZacQ",
				"castTime": 0.2750000059604645,
				"missile": {
					"speedInitial": 1450,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						50,
						300,
						400,
						600
					],
					"HexPull": [
						2,
						2,
						2,
						2
					],
					"DamageReduction": [
						75,
						75,
						75,
						75
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Zac",
		"cost": 3,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Zac.TFT_Set6_Stage2.dds",
		"name": "Zac",
		"basicAttackMissileSpeed": 1000,
		"critAttackMissileSpeed": 1000,
		"stats": {
			"armor": 45,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 70,
			"hp": 800,
			"initialMana": 0,
			"magicResist": 45,
			"mana": 60,
			"moveSpeed": 500,
			"range": 1
		},
		"traits": [
			"Chemtech",
			"Bruiser"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ZeriW",
				"variables": {
					"Damage": [
						0,
						200,
						350,
						5000
					],
					"NumBullets": [
						5,
						5,
						5,
						30
					],
					"PercentAD": [
						0.18000000715255737,
						0.18000000715255737,
						0.18000000715255737,
						0.18000000715255737
					],
					"BonusOnHit": [
						0,
						11,
						22,
						44
					],
					"Duration": [
						6,
						6,
						6,
						6
					],
					"CritBoost": [
						0.25,
						0.25,
						0.4000000059604645,
						1
					],
					"CritDuration": [
						8,
						8,
						8,
						8
					],
					"VIPTotalDuration": [
						60,
						60,
						60,
						60
					]
				},
				"uninterruptable": true
			},
			{
				"name": "TFT6_ZeriWMis",
				"missile": {
					"speedInitial": 3000,
					"tracksTarget": true
				},
				"variables": {},
				"uninterruptable": true
			},
			{
				"name": "TFT6_ZeriQParentBasicAttack",
				"missile": {
					"width": 10,
					"travelTime": 10,
					"speedInitial": 2000,
					"tracksTarget": true
				},
				"variables": {},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Zeri",
		"cost": 5,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Zeri.TFT_Set6_Stage2.dds",
		"name": "Zeri",
		"basicAttackMissileSpeed": 2300,
		"critAttackMissileSpeed": 2300,
		"stats": {
			"armor": 30,
			"attackSpeed": 0.800000011920929,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 80,
			"hp": 850,
			"initialMana": 0,
			"magicResist": 30,
			"mana": 60,
			"moveSpeed": 500,
			"range": 11
		},
		"traits": [
			"Debonair",
			"Sniper"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ZiggsR",
				"castTime": 0.10000000149011612,
				"missile": {
					"travelTime": 1.5,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						300,
						400,
						550
					]
				},
				"uninterruptable": true
			}
		],
		"apiName": "TFT6_Ziggs",
		"cost": 1,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Ziggs.TFT_Set6.dds",
		"name": "Ziggs",
		"basicAttackMissileSpeed": 1500,
		"critAttackMissileSpeed": 1500,
		"stats": {
			"armor": 15,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 55,
			"hp": 500,
			"initialMana": 0,
			"magicResist": 15,
			"mana": 60,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Scrap",
			"Yordle",
			"Arcanist"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ZileanQ",
				"missile": {
					"speedInitial": 1000,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						250,
						350,
						700
					],
					"Slow": [
						0,
						0.25,
						0.3499999940395355,
						0.5
					],
					"StunDuration": [
						0,
						1.5,
						2,
						2.5
					],
					"SlowDuration": [
						4,
						4,
						4,
						4
					]
				}
			}
		],
		"apiName": "TFT6_Zilean",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Zilean.TFT_Set6.dds",
		"name": "Zilean",
		"basicAttackMissileSpeed": 1200,
		"critAttackMissileSpeed": 1200,
		"stats": {
			"armor": 20,
			"attackSpeed": 0.6000000238418579,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 40,
			"hp": 600,
			"initialMana": 40,
			"magicResist": 20,
			"mana": 80,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Clockwork",
			"Innovator"
		]
	},
	{
		"spells": [
			{
				"name": "TFT6_ZyraQ",
				"castTime": 0.10000000149011612,
				"missile": {
					"width": 10,
					"travelTime": 0.20000000298023224,
					"tracksTarget": true
				},
				"variables": {
					"Damage": [
						0,
						325,
						450,
						675
					],
					"StunDuration": [
						1,
						1.5,
						2,
						2.5
					]
				}
			}
		],
		"apiName": "TFT6_Zyra",
		"cost": 2,
		"isSpawn": false,
		"icon": "ASSETS/UX/TFT/ChampionSplashes/TFT6_Zyra.TFT_Set6.dds",
		"name": "Zyra",
		"basicAttackMissileSpeed": 1700,
		"critAttackMissileSpeed": 2000,
		"stats": {
			"armor": 20,
			"attackSpeed": 0.699999988079071,
			"critChance": 0.25,
			"critMultiplier": 1.2999999523162842,
			"damage": 50,
			"hp": 600,
			"initialMana": 60,
			"magicResist": 20,
			"mana": 120,
			"moveSpeed": 500,
			"range": 4
		},
		"traits": [
			"Syndicate",
			"Scholar"
		]
	}
]