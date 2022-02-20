import type { ItemData } from '../index'

export enum ItemKey {
	BFSword = 1, RecurveBow = 2, NeedlesslyLargeRod = 3, TearOfTheGoddess = 4, ChainVest = 5, NegatronCloak = 6, GiantsBelt = 7, Spatula = 8, SparringGloves = 9, Deathblade = 11, GiantSlayer = 12, HextechGunblade = 13, SpearOfShojin = 14, Bloodthirster = 16, ZekesHerald = 17, InfinityEdge = 19, RapidFirecannon = 22, GuinsoosRageblade = 23, StatikkShiv = 24, TitansResolve = 25, RunaansHurricane = 26, ZzRotPortal = 27, ChallengerEmblem = 28, LastWhisper = 29, RabadonsDeathcap = 33, ArchangelsStaff = 34, LocketOfTheIronSolari = 35, IonicSpark = 36, Morellonomicon = 37, ArcanistEmblem = 38, JeweledGauntlet = 39, BlueBuff = 44, FrozenHeart = 45, ChaliceOfPower = 46, Redemption = 47, HandOfJustice = 49, BrambleVest = 55, GargoyleStoneplate = 56, SunfireCape = 57, BodyguardEmblem = 58, ShroudOfStillness = 59, DragonsClaw = 66, Zephyr = 67, SyndicateEmblem = 68, Quicksilver = 69, DebonairEmblem = 70, StrikerEmblem = 71, HextechEmblem = 72, WarmogsArmor = 77, ChemtechEmblem = 78, BansheesClaw = 79, TacticiansCrown = 88, AssassinEmblem = 89, EdgeOfNight = 94, ThiefsGloves = 99, MutantEmblem = 2190, ClockworkEmblem = 2191, MercenaryEmblem = 2192, SocialiteEmblem = 2193, EnforcerEmblem = 2194, ScrapEmblem = 2195, BruiserEmblem = 2197, InnovatorEmblem = 2198, SniperEmblem = 2199, ScholarEmblem = 2200
}

export const componentItems: ItemData[] = [
	{
		"desc": "%i:scaleAD% +@AD@ Attack Damage",
		"effects": {
			"AD": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/BF_Sword.dds",
		"id": 1,
		"name": "B.F. Sword",
		"unique": false
	},
	{
		"desc": "%i:scaleAS% +@AS@ Attack Speed",
		"effects": {
			"AS": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Recurve_Bow.dds",
		"id": 2,
		"name": "Recurve Bow",
		"unique": false
	},
	{
		"desc": "%i:scaleAP% +@AP@ Ability Power",
		"effects": {
			"AP": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Needlessly_Large_Rod.dds",
		"id": 3,
		"name": "Needlessly Large Rod",
		"unique": false
	},
	{
		"desc": "%i:scaleMana% +@Mana@ Mana",
		"effects": {
			"Mana": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Tear_of_the_Goddess.dds",
		"id": 4,
		"name": "Tear of the Goddess",
		"unique": false
	},
	{
		"desc": "%i:scaleArmor% +@Armor@ Armor",
		"effects": {
			"Armor": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Chain_Vest.dds",
		"id": 5,
		"name": "Chain Vest",
		"unique": false
	},
	{
		"desc": "%i:scaleMR% +@MR@ Magic Resist",
		"effects": {
			"MR": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Negatron_Cloak.dds",
		"id": 6,
		"name": "Negatron Cloak",
		"unique": false
	},
	{
		"desc": "%i:scaleHP% +@Health@ Health",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Gaints_Belt.dds",
		"id": 7,
		"name": "Giant's Belt",
		"unique": false
	},
	{
		"desc": "It must do <i>something</i>...",
		"effects": {
			"{fe9818ef}": 5
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Spatula.dds",
		"id": 8,
		"name": "Spatula",
		"unique": false
	},
	{
		"desc": "+@CritChance@ Critical Strike Chance<br>+@DodgeChance@ Dodge Chance",
		"effects": {
			"CritChance": 5,
			"DodgeChance": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Sparring_Gloves.dds",
		"id": 9,
		"name": "Sparring Gloves",
		"unique": false
	}
]

export const completedItems: ItemData[] = [
	{
		"desc": "The holder gains %i:scaleAD% @Tooltip1StarBonusAD@/@Tooltip2StarBonusAD@/@Tooltip3StarBonusAD@ %i:star% bonus Attack Damage (including components).",
		"effects": {
			"AD": 20,
			"3StarAD": 80,
			"2StarAD": 55,
			"Tooltip1StarBonusAD": 50,
			"Tooltip2StarBonusAD": 75,
			"4StarAD": 125,
			"Tooltip3StarBonusAD": 100,
			"1StarAD": 30
		},
		"from": [
			1,
			1
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Death_Blade.dds",
		"id": 11,
		"name": "Deathblade",
		"unique": false
	},
	{
		"desc": "The holder's Abilities and attacks do @SmallBonusPct@% bonus damage. If the target has more than @HPThreshold@ maximum Health, the bonus increases to @LargeBonusPct@%.",
		"effects": {
			"AD": 10,
			"AS": 10,
			"HPThreshold": 1800,
			"LargeBonusPct": 60,
			"SmallBonusPct": 20
		},
		"from": [
			1,
			2
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Giant_Slayer.dds",
		"id": 12,
		"name": "Giant Slayer",
		"unique": false
	},
	{
		"desc": "The holder's magic and true damage from Abilities heal them for @OmniVamp@% of the damage dealt. The holder also heals their lowest HP ally for the same amount.",
		"effects": {
			"AD": 10,
			"AP": 10,
			"ShieldMax": 400,
			"OmniVamp": 33
		},
		"from": [
			1,
			3
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Hextech_Gunblade.dds",
		"id": 13,
		"name": "Hextech Gunblade",
		"unique": false
	},
	{
		"desc": "The holder's attacks restore %i:scaleMana% @FlatManaRestore@ additional Mana. ",
		"effects": {
			"AD": 10,
			"Mana": 15,
			"FlatManaRestore": 8
		},
		"from": [
			1,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Spear_of_Shojin.dds",
		"id": 14,
		"name": "Spear of Shojin",
		"unique": false
	},
	{
		"desc": "Physical damage heals the holder for @Lifesteal@% of the damage dealt. Upon falling below @HPThreshold@% Health, the holder gains a @ShieldHealthPercent@% maximum Health shield that lasts up to @ShieldDuration@ seconds.",
		"effects": {
			"AD": 10,
			"HPThreshold": 40,
			"LifeSteal": 33,
			"MR": 20,
			"ShieldDuration": 5,
			"ShieldHPPercent": 30
		},
		"from": [
			1,
			6
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Bloodthirster.dds",
		"id": 16,
		"name": "Bloodthirster",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder and all allies within @HexRange@ hexes in the same row gain %i:scaleAS% @AS@% Attack Speed for the rest of combat.",
		"effects": {
			"AD": 10,
			"AS": 30,
			"HP": 150,
			"HexRange": 1
		},
		"from": [
			1,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Zekes_Herald.dds",
		"id": 17,
		"name": "Zeke's Herald",
		"unique": false
	},
	{
		"desc": "Grants @CritChance@% Critical Strike Chance (including components) and @BonusCritDamage@% Critical Strike Damage. Each point of Critical Strike Chance above 100% becomes +@BonusCritDmgPerCritAbove100@% Critical Strike Damage. <br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 10,
			"CritChance": 75,
			"BonusCritDmgPerCritAbove100": 1,
			"BonusCritDamage": 10
		},
		"from": [
			1,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Infinity_Edge.dds",
		"id": 19,
		"name": "Infinity Edge",
		"unique": true
	},
	{
		"desc": "Increases the holder's Attack Range by @HexRangeIncrease@ hex and grants %i:scaleAS% @TooltipBonusAS@% bonus Attack Speed (including components). The holder's attacks can no longer miss.",
		"effects": {
			"AS": 55,
			"HexRangeIncrease": 1,
			"TooltipBonusAS": 55,
			"AttackAccuracy": 100
		},
		"from": [
			2,
			2
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Rapid_Fire_Cannon.dds",
		"id": 22,
		"name": "Rapid Firecannon",
		"unique": false
	},
	{
		"desc": "Attacks grant +@ASPerStack@% bonus Attack Speed for the rest of combat. This effect can stack any number of times.",
		"effects": {
			"AP": 10,
			"AS": 10,
			"ASPerStack": 6
		},
		"from": [
			2,
			3
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Guinsoos_Rageblade.dds",
		"id": 23,
		"name": "Guinsoo's Rageblade",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleAS% @BonusAS@% bonus Attack Speed. Every 3rd attack from the holder unleashes a chain lightning that bounces to @1StarBounces@ enemies, dealing @Damage@ magic damage and reducing their Magic Resist by @MRShred@% for @MRShredDuration@ seconds. ",
		"effects": {
			"AS": 10,
			"BonusAS": 10,
			"Damage": 70,
			"Mana": 15,
			"1StarBounces": 4,
			"2StarBounces": 4,
			"3StarBounces": 4,
			"4StarBounces": 4,
			"MRShredDuration": 5,
			"MRShred": 50
		},
		"from": [
			2,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Statikk_Shiv.dds",
		"id": 24,
		"name": "Statikk Shiv",
		"unique": false
	},
	{
		"desc": "When the holder attacks or takes damage, they gain @StackingAD@ Attack Damage and Ability Power. <br><br>This stacks up to @StackCap@ times, at which point the holder gains @BonusResistsAtStackCap@ Armor and Magic Resist.",
		"effects": {
			"AS": 10,
			"Armor": 20,
			"StackCap": 25,
			"StackingAD": 2,
			"BonusResistsAtStackCap": 25,
			"StackingAP": 2
		},
		"from": [
			5,
			2
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Titans_Resolve.dds",
		"id": 25,
		"name": "Titan's Resolve",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleAD% @AD@ Attack Damage. The holder's attacks fire a bolt at another nearby enemy, dealing @MultiplierForDamage@% of the holder's Attack Damage as physical damage.",
		"effects": {
			"AD": 10,
			"AS": 10,
			"AdditionalTargets": 1,
			"MR": 20,
			"MultiplierForDamage": 70
		},
		"from": [
			6,
			2
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Runaans_Hurricane.dds",
		"id": 26,
		"name": "Runaan's Hurricane",
		"unique": false
	},
	{
		"desc": "At the start of combat, the holder taunts enemies within @HexRadius@ hexes. <br><br>When the holder dies, a Voidspawn arises taunting nearby enemies. Voidspawns that arise from summoned units are @SummonedStatReduction@% effective.",
		"effects": {
			"AS": 10,
			"HP": 150,
			"HexRadius": 4,
			"SummonedStatReduction": 25
		},
		"from": [
			2,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/ZZRot_Portal.dds",
		"id": 27,
		"name": "Zz'Rot Portal",
		"unique": false
	},
	{
		"desc": "When the holder inflicts a critical hit, the target's Armor is reduced by @ArmorReductionPercent@% for @ArmorBreakDuration@ seconds. This effect does not stack.<br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AS": 10,
			"CritChance": 15,
			"ArmorReductionPercent": 70,
			"ArmorBreakDuration": 5
		},
		"from": [
			2,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Last_Whisper.dds",
		"id": 29,
		"name": "Last Whisper",
		"unique": true
	},
	{
		"desc": "Grants %i:scaleAP% @AP@ bonus Ability Power (including components).",
		"effects": {
			"AP": 75
		},
		"from": [
			3,
			3
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Rabadons_Deathcap.dds",
		"id": 33,
		"name": "Rabadon's Deathcap",
		"unique": false
	},
	{
		"desc": "During combat, the holder gains %i:scaleAP% @APPerInterval@ Ability Power every @IntervalSeconds@ seconds.",
		"effects": {
			"AP": 10,
			"Mana": 15,
			"APPerInterval": 25,
			"IntervalSeconds": 5
		},
		"from": [
			3,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ArchangelsStaff.TFT_Set5.dds",
		"id": 34,
		"name": "Archangel's Staff",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder and all allies within @HexRange@ hexes in the same row gain a shield that blocks @1StarShieldValue@/@2StarShieldValue@/@3StarShieldValue@ %i:star% damage for @ShieldDuration@ seconds.",
		"effects": {
			"AP": 10,
			"Armor": 20,
			"ShieldDuration": 15,
			"2StarShieldValue": 350,
			"1StarShieldValue": 300,
			"3StarShieldValue": 400,
			"HexRange": 2,
			"4StarShieldValue": 800
		},
		"from": [
			3,
			5
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Locket_of_the_Iron_Solari.dds",
		"id": 35,
		"name": "Locket of the Iron Solari",
		"unique": false
	},
	{
		"desc": "Enemies within @HexRange@ hexes have their Magic Resist reduced by @MRShred@%. When they cast an Ability, they are zapped taking magic damage equal to @ManaRatio@% of their maximum Mana.",
		"effects": {
			"AP": 10,
			"Damage": 250,
			"MR": 20,
			"HexRange": 2,
			"ManaRatio": 200,
			"MRShred": 50
		},
		"from": [
			3,
			6
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Ionic_Spark.dds",
		"id": 36,
		"name": "Ionic Spark",
		"unique": false
	},
	{
		"desc": "When the holder deals magic or true damage with their Ability, they burn the target, dealing @BurnPercent@% of the target's maximum HP as true damage over @BurnDuration@ seconds, and reducing healing by @GrievousWoundsPercent@% for the duration of the burn.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AP": 10,
			"HP": 150,
			"MonsterCap": 100,
			"TicksPerSecond": 1,
			"GrievousWoundsPercent": 50,
			"BurnPercent": 20,
			"BurnDuration": 10
		},
		"from": [
			3,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Morellonomicon.dds",
		"id": 37,
		"name": "Morellonomicon",
		"unique": true
	},
	{
		"desc": "The holder's magic and true damage from their Ability can critically strike. The holder gains @CritDamage@% bonus Critical Strike Damage and %i:scaleAP% @TooltipBonusAP@ bonus Ability Power.",
		"effects": {
			"AP": 20,
			"CritChance": 15,
			"CritDamage": 30,
			"TooltipBonusAP": 10
		},
		"from": [
			3,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Jeweled_Guantlet.dds",
		"id": 39,
		"name": "Jeweled Gauntlet",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleMana% @Mana@ Starting Mana (including components). After casting their Ability, the holder gains %i:scaleMana% @ManaRestore@ mana.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Mana": 50,
			"ManaRestore": 20,
			"{71bc3700}": 200,
			"{af1d4d88}": 20
		},
		"from": [
			4,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Blue_Buff.dds",
		"id": 44,
		"name": "Blue Buff",
		"unique": true
	},
	{
		"desc": "Reduces the Attack Speed of enemies within @HexRadius@ hexes by @ASSlow@%.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 20,
			"ASSlow": 35,
			"Mana": 15,
			"HexRadius": 2
		},
		"from": [
			4,
			5
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Frozen_Heart.dds",
		"id": 45,
		"name": "Frozen Heart",
		"unique": true
	},
	{
		"desc": "When combat begins, the holder and all allies within @HexRange@ hex in the same row gain %i:scaleAP% @BonusAP@ Ability Power for the rest of combat.",
		"effects": {
			"MR": 20,
			"Mana": 15,
			"ManaRestore": 10,
			"HexRange": 1,
			"UNUSED_APTimer": 20,
			"BonusAP": 30
		},
		"from": [
			6,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Chalice_of_Power.dds",
		"id": 46,
		"name": "Chalice of Power",
		"unique": false
	},
	{
		"desc": "Every @HealTickRate@ seconds, the holder radiates an aura to allies within @HexRadius@ hex, healing them for @MissingHPHeal@% of their missing Health. Affected allies take @AoEDamageReduction@% reduced damage from multi-target abilities and attacks for @HealTickRate@ seconds.",
		"effects": {
			"HP": 150,
			"Mana": 15,
			"MaxHeal": 1000,
			"AoEDamageReduction": 25,
			"HexRadius": 1,
			"MissingHPHeal": 18,
			"HealTickRate": 5
		},
		"from": [
			4,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Redemption.dds",
		"id": 47,
		"name": "Redemption",
		"unique": false
	},
	{
		"desc": "The holder gains both of the following:<li>+@AD@ Attack Damage and +@AP@ Ability Power.</li> <li>Attacks and Abilities heal for @BaseHeal@% of damage dealt.</li><br><br>At the beginning of each planning phase, one of these buffs is increased to @TooltipBonus@(%).<br>",
		"effects": {
			"BaseHeal": 10,
			"CritChance": 15,
			"Mana": 15,
			"AD": 10,
			"AP": 10,
			"{a60806db}": 66.66699981689453,
			"AdditionalAD": 23,
			"AdditionalAP": 23,
			"TooltipBonus": 33
		},
		"from": [
			4,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Hand_of_Justice.dds",
		"id": 49,
		"name": "Hand Of Justice",
		"unique": false
	},
	{
		"desc": "Grants %i:scaleArmor% @Armor@ bonus Armor (including components). Negates @CritReduction@% bonus damage from incoming critical strikes. On being hit by an attack, deal @1StarAoEDamage@/@2StarAoEDamage@/@3StarAoEDamage@ %i:star% magic damage to all nearby enemies (once every @ICD@ seconds).",
		"effects": {
			"Armor": 70,
			"ICD": 2.5,
			"3StarAoEDamage": 120,
			"1StarAoEDamage": 60,
			"CritDamageBlock": 100,
			"CritReduction": 100,
			"2StarAoEDamage": 80,
			"4StarAoEDamage": 200
		},
		"from": [
			5,
			5
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Bramble_Vest.dds",
		"id": 55,
		"name": "Bramble Vest",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleArmor% @ArmorPerEnemy@ Armor and %i:scaleMR% @MRPerEnemy@ Magic Resist for each enemy targeting them.",
		"effects": {
			"Armor": 20,
			"MR": 20,
			"MRPerEnemy": 18,
			"ArmorPerEnemy": 18
		},
		"from": [
			5,
			6
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Gargoyle_Stoneplate.dds",
		"id": 56,
		"name": "Gargoyle Stoneplate",
		"unique": false
	},
	{
		"desc": "Every @ICD@ seconds, a random enemy within @HexRange@ hexes is burned for @BurnPercent@% of their maximum HP as true damage over @BurnDuration@ seconds. Any healing they receive is reduced by @GrievousWoundsPercent@%.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 20,
			"HP": 150,
			"ICD": 2,
			"MonsterCap": 100,
			"GrievousWoundsPercent": 50,
			"BurnPercent": 16,
			"BurnDuration": 8,
			"HexRange": 2
		},
		"from": [
			5,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Sunfire_Cape.dds",
		"id": 57,
		"name": "Sunfire Cape",
		"unique": true
	},
	{
		"desc": "When combat begins, the holder shoots a beam straight ahead that delays affected enemies' first cast, increasing their max Mana by @CostIncrease@% until they cast.<br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"Armor": 20,
			"{4516a18d}": 60,
			"CostIncrease": 35,
			"DodgeChance": 15
		},
		"from": [
			5,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Shroud_of_Stillness.dds",
		"id": 59,
		"name": "Shroud of Stillness",
		"unique": true
	},
	{
		"desc": "Grants %i:scaleMR% @MR@ bonus Magic Resist (including components). On being hit by magic or true damage from a casted Ability, launch a fireball at the Ability's caster that deals magic damage equal to @PercentHPDamage@% of their maximum Health (@ICD@ second cooldown).",
		"effects": {
			"ICD": 0.5,
			"MR": 200,
			"PercentHPDamage": 18,
			"UNUSED_MagicDamageReductionMultiplier": 160
		},
		"from": [
			6,
			6
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Dragons_Claw.dds",
		"id": 66,
		"name": "Dragon's Claw",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for @BanishDuration@ seconds. Ignores crowd control immunity.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"HP": 150,
			"MR": 20,
			"BanishDuration": 5
		},
		"from": [
			6,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Zephyr.dds",
		"id": 67,
		"name": "Zephyr",
		"unique": true
	},
	{
		"desc": "The holder gains %i:scaleAS% @AS@% bonus Attack Speed. The holder is immune to crowd control in combat for @SpellShieldDuration@ seconds.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AS": 20,
			"MR": 20,
			"SpellShieldDuration": 15,
			"DodgeChance": 15
		},
		"from": [
			9,
			6
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds",
		"id": 69,
		"name": "Quicksilver",
		"unique": true
	},
	{
		"desc": "Grants %i:scaleHP% @Health@ bonus Health (including components).",
		"effects": {
			"HP": 1000
		},
		"from": [
			7,
			7
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Warmogs_Armor.dds",
		"id": 77,
		"name": "Warmog's Armor",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder and all allies within @HexRange@ hex(es) in the same row gain a shield that blocks the damage and effects of the first enemy Ability, up to 600 damage. <br>",
		"effects": {
			"HP": 150,
			"StunDuration": 4,
			"HexRange": 1,
			"DamageCap": 600,
			"DodgeChance": 15
		},
		"from": [
			7,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Trap_Claw.dds",
		"id": 79,
		"name": "Banshee's Claw",
		"unique": false
	},
	{
		"desc": "The holder's team gains +@MaxArmySizeIncrease@ maximum team size.",
		"effects": {
			"{ec9a04d1}": 1
		},
		"from": [
			8,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Tacticians_Crown.dds",
		"id": 88,
		"name": "Tactician's Crown",
		"unique": false
	},
	{
		"desc": "When the holder first drops below @HPThreshold@% health, they briefly enter stealth, becoming untargetable and shedding negative effects. After coming out of stealth, the holder gains an additional %i:scaleAS% @AS@% bonus Attack Speed.<br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AD": 10,
			"Armor": 20,
			"AS": 40,
			"DamageReduction": 100,
			"HPThreshold": 50,
			"StealthDuration": 1
		},
		"from": [
			1,
			5
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard_New/Edge_Of_Night.dds",
		"id": 94,
		"name": "Edge of Night",
		"unique": true
	},
	{
		"desc": "At the beginning of each planning phase, the holder equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes 3 item slots.]</tftitemrules>",
		"effects": {
			"CritChance": 15,
			"DodgeChance": 15
		},
		"from": [
			9,
			9
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Thieves_Gloves.dds",
		"id": 99,
		"name": "Thief's Gloves",
		"unique": false
	}
]

export const spatulaItems: ItemData[] = [
	{
		"desc": "The holder gains the Challenger trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AS": 10
		},
		"from": [
			2,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Challenger.TFT_Set6.dds",
		"id": 28,
		"name": "Challenger Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Arcanist trait.<br><br><tftitemrules>[Unique - only 1 per champion</tftitemrules>",
		"effects": {
			"AP": 10
		},
		"from": [
			3,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Arcanist.TFT_Set6.dds",
		"id": 38,
		"name": "Arcanist Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Bodyguard trait.<br><br><tftitemrules>[Unique - only 1 per champion <br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Bodyguard.TFT_Set6.dds",
		"id": 58,
		"name": "Bodyguard Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Syndicate trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Syndicate.TFT_Set6.dds",
		"id": 68,
		"name": "Syndicate Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Debonair trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 20
		},
		"from": [
			5,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Debonair.TFT_Set6_Stage2.dds",
		"id": 70,
		"name": "Debonair Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Striker trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 10
		},
		"from": [
			8,
			1
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Striker.TFT_Set6_Stage2.dds",
		"id": 71,
		"name": "Striker Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Hextech trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Mana": 15
		},
		"from": [
			8,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Hextech.TFT_Set6_Stage2.dds",
		"id": 72,
		"name": "Hextech Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Chemtech trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [
			7,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Chemtech.TFT_Set6.dds",
		"id": 78,
		"name": "Chemtech Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Assassin trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"CritChance": 10,
			"DodgeChance": 5
		},
		"from": [
			9,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Assassin.TFT_Set6.dds",
		"id": 89,
		"name": "Assassin Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Mutant trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"MR": 20
		},
		"from": [
			6,
			8
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Mutant.TFT_Set6.dds",
		"id": 2190,
		"name": "Mutant Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Clockwork trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Clockwork.TFT_Set6.dds",
		"id": 2191,
		"name": "Clockwork Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Mercenary trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Mercenary.TFT_Set6.dds",
		"id": 2192,
		"name": "Mercenary Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Socialite trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Socialite.TFT_Set6.dds",
		"id": 2193,
		"name": "Socialite Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Enforcer trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Enforcer.TFT_Set6.dds",
		"id": 2194,
		"name": "Enforcer Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Scrap trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Scrap.TFT_Set6.dds",
		"id": 2195,
		"name": "Scrap Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Bruiser trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Bruiser.TFT_Set6.dds",
		"id": 2197,
		"name": "Bruiser Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Innovator trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Innovator.TFT_Set6.dds",
		"id": 2198,
		"name": "Innovator Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Sniper trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Sniper.TFT_Set6.dds",
		"id": 2199,
		"name": "Sniper Emblem",
		"unique": true
	},
	{
		"desc": "The holder gains the Scholar trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Scholar.TFT_Set6.dds",
		"id": 2200,
		"name": "Scholar Emblem",
		"unique": true
	}
]

export const duosItems: ItemData[] = [
	{
		"desc": "10 Gold",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/AssistGiveGold.dds",
		"id": 2214,
		"name": "10 Gold",
		"unique": false
	},
	{
		"desc": "Place on a champion to transfer that champion to your partner, along with all items the champion has equipped.<br><br><tftitemrules>[Cannot be used in combat.] <br>[CONSUMABLE - This item disappears when used.]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/RuneOfAllegiance.dds",
		"id": 2222,
		"name": "Rune of Allegiance",
		"unique": false
	}
]

export const consumableItems: ItemData[] = [
	{
		"desc": "Use on a champion to reroll a special Shop that contains only champions sharing a Trait with the source champion. <br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ShopReroll.dds",
		"id": 201,
		"name": "Loaded Dice",
		"unique": false
	},
	{
		"desc": "Use on a champion to unequip all items and randomly transform them into different new ones. <br><br><tftitemrules> [SAME QUALITY: Reforging an item will grant a new item of a similar type and quality.<br> Cannot be used on board champions in combat, or on Tactician's Crown.<br> CONSUMABLE - This item disappears when used.]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ItemReroller.dds",
		"id": 202,
		"name": "Reforger",
		"unique": false
	},
	{
		"desc": "Use on a champion to unequip all items. <br><br><tftitemrules> [Cannot be used on board champions in combat.]<br>[CONSUMABLE - This item disappears when used.]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ItemRemover.dds",
		"id": 203,
		"name": "Magnetic Remover",
		"unique": false
	},
	{
		"desc": "Use on a champion to spawn a movable target dummy nearby. <br><br><tftitemrules> [Cannot be used in combat. <br>CONSUMABLE - This item disappears when used.]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_Dummy.dds",
		"id": 204,
		"name": "Target Dummy",
		"unique": false
	},
	{
		"desc": "Turns all items on a champion into shadow items when used.<br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules><br><tftitemrules>This Item cannot transform Force of Nature, which is above corruption.</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ShadowTransformer.dds",
		"id": 206,
		"name": "Shadow Transformer",
		"unique": false
	},
	{
		"desc": "Place on Kayn to force Rhaast to overtake him, permanently improving his Reaping Slash spell to heal him.<br><br><tftitemrules>[KAYN CONSUMABLE - This item disappears when used and DESTROYS Kayn's Liberation]</tftitemrules><br><br><tftitemrules>[Can only be used during the Planning Phase]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_Consumable_KaynRed.TFT_Set4.dds",
		"id": 208,
		"name": "Rhaast's Embrace",
		"unique": false
	},
	{
		"desc": "Turns all items on a champion into standard items when used.<br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules><br><tftitemrules>This Item cannot transform Force of Darkness, which is beyond redemption.</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_LightTransformer.dds",
		"id": 209,
		"name": "Light Transformer",
		"unique": false
	},
	{
		"desc": "Place on Kayn to free him from Rhaast, permanently improving his Reaping Slash spell to deal bonus damage at the start of combat.<br><br><tftitemrules>[KAYN CONSUMABLE - This item disappears when used and DESTROYS Rhaast's Embrace]</tftitemrules><br><br><tftitemrules>[Can only be used during the Planning Phase]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_Consumable_KaynBlue.TFT_Set4.dds",
		"id": 210,
		"name": "Kayn's Liberation",
		"unique": false
	}
]

export const shadowItems: ItemData[] = [
	{
		"desc": "%i:scaleAD% +@AD@ Attack Damage",
		"effects": {
			"AD": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_BF_Sword.dds",
		"id": 1001,
		"name": "Shadow Sword",
		"unique": false
	},
	{
		"desc": "%i:scaleAS% +@AS@ Attack Speed",
		"effects": {
			"AS": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Recurve_Bow.dds",
		"id": 1002,
		"name": "Shadow Bow",
		"unique": false
	},
	{
		"desc": "%i:scaleAP% +@AP@ Ability Power",
		"effects": {
			"AP": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Needlessly_Large_Rod.dds",
		"id": 1003,
		"name": "Shadow Rod",
		"unique": false
	},
	{
		"desc": "%i:scaleMana% +@Mana@ Mana",
		"effects": {
			"Mana": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Tear_of_the_Goddess.dds",
		"id": 1004,
		"name": "Shadow Tear",
		"unique": false
	},
	{
		"desc": "%i:scaleArmor% +@Armor@ Armor",
		"effects": {
			"Armor": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Chain_Vest.dds",
		"id": 1005,
		"name": "Shadow Vest",
		"unique": false
	},
	{
		"desc": "%i:scaleMR% +@MR@ Magic Resist",
		"effects": {
			"MR": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Negatron_Cloak.dds",
		"id": 1006,
		"name": "Shadow Cloak",
		"unique": false
	},
	{
		"desc": "%i:scaleHP% +@Health@ Health",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Gaints_Belt.dds",
		"id": 1007,
		"name": "Shadow Belt",
		"unique": false
	},
	{
		"desc": "It must do <i>something <TFTShadowItemBonus>evil</TFTShadowItemBonus></i>...",
		"effects": {
			"{fe9818ef}": 5
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Spatula.dds",
		"id": 1008,
		"name": "Shadow Spatula",
		"unique": false
	},
	{
		"desc": "+@CritChance@ Critical Strike Chance<br>+@DodgeChance@ Dodge Chance",
		"effects": {
			"CritChance": 5,
			"DodgeChance": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Shadow/S_Sparring_Gloves.dds",
		"id": 1009,
		"name": "Shadow Gloves",
		"unique": false
	}
]

export const radiantItems: ItemData[] = [
	{
		"desc": "The holder gains %i:scaleAD% <TFTRadiantItemBonus>@Tooltip1StarBonusAD@/@Tooltip2StarBonusAD@/@Tooltip3StarBonusAD@</TFTRadiantItemBonus> %i:star% bonus Attack Damage (including components).",
		"effects": {
			"AD": 20,
			"3StarAD": 140,
			"2StarAD": 100,
			"Tooltip1StarBonusAD": 80,
			"Tooltip2StarBonusAD": 120,
			"Tooltip3StarBonusAD": 160,
			"1StarAD": 60
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Death_Blade_Radiant.dds",
		"id": 2011,
		"name": "Luminous Deathblade",
		"unique": false
	},
	{
		"desc": "The holder's Abilities and attacks do <TFTRadiantItemBonus>@SmallBonusPct@%</TFTRadiantItemBonus> bonus damage. If the target has more than <TFTRadiantItemBonus>@HPThreshold@ maximum Health</TFTRadiantItemBonus>, the bonus increases to <TFTRadiantItemBonus>@LargeBonusPct@%</TFTRadiantItemBonus>.",
		"effects": {
			"AD": 10,
			"AS": 10,
			"HPThreshold": 1400,
			"LargeBonusPct": 80,
			"SmallBonusPct": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Giant_Slayer_Radiant.dds",
		"id": 2012,
		"name": "Demonslayer",
		"unique": false
	},
	{
		"desc": "The holder's magic and true damage from Abilities heal them for <TFTRadiantItemBonus>@OmniVamp@%</TFTRadiantItemBonus> of the damage dealt. <TFTRadiantItemBonus>Excess healing fuels a shield that protects the holder against up to @ShieldMax@ damage.</TFTRadiantItemBonus> The holder also heals their lowest health ally for the same amount.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusAP@ Ability Power.</TFTRadiantItemBonus>",
		"effects": {
			"AD": 10,
			"AP": 40,
			"ShieldMax": 300,
			"OmniVamp": 40,
			"BonusAP": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Hextech_Gunblade_Radiant.dds",
		"id": 2013,
		"name": "Hextech Lifeblade",
		"unique": false
	},
	{
		"desc": "The holder's attacks restore %i:scaleMana% <TFTRadiantItemBonus>@FlatManaRestore@</TFTRadiantItemBonus> additional Mana.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@AP@ Ability Power. </TFTRadiantItemBonus>",
		"effects": {
			"AD": 10,
			"AP": 20,
			"Mana": 15,
			"FlatManaRestore": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Spear_of_Shojin_Radiant.dds",
		"id": 2014,
		"name": "Spear of Hirana",
		"unique": false
	},
	{
		"desc": "When the holder first drops below @HPThreshold@% health, they briefly enter stealth, becoming untargetable and shedding negative effects. After coming out of stealth, the holder gains an additional <TFTRadiantItemBonus>%i:scaleAS% @AS@%</TFTRadiantItemBonus> bonus Attack Speed.<br><br><TFTRadiantItemBonus>Radiant Bonus: Triggers again at @HealthThreshold2@% health.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AD": 10,
			"Armor": 20,
			"AS": 55,
			"DamageReduction": 100,
			"HPThreshold": 50,
			"StealthDuration": 1,
			"{c8e44ba8}": 25
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Edge_Of_Night_Radiant.dds",
		"id": 2015,
		"name": "Brink of Dawn",
		"unique": true
	},
	{
		"desc": "Physical damage heals the holder for <TFTRadiantItemBonus>@Lifesteal@%</TFTRadiantItemBonus> of the damage dealt. Upon falling below @HPThreshold@% Health, the holder gains a <TFTRadiantItemBonus>@ShieldHealthPercent@%</TFTRadiantItemBonus> max Health shield that lasts up to @ShieldDuration@ seconds.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusAD@ Attack Damage.</TFTRadiantItemBonus>",
		"effects": {
			"AD": 30,
			"BonusAD": 20,
			"HPThreshold": 40,
			"LifeSteal": 60,
			"MR": 20,
			"ShieldDuration": 5,
			"ShieldHPPercent": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Bloodthirster_Radiant.dds",
		"id": 2016,
		"name": "Blessed Bloodthirster",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder and all allies within @HexRange@ hexes in the same row gain %i:scaleAS% <TFTRadiantItemBonus>@AS@%</TFTRadiantItemBonus> Attack Speed <TFTRadiantItemBonus>and @Lifesteal@% Lifesteal</TFTRadiantItemBonus> for the rest of combat.",
		"effects": {
			"AD": 10,
			"AS": 50,
			"HP": 150,
			"LifeSteal": 10,
			"HexRange": 1
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Zekes_Herald_Radiant.dds",
		"id": 2017,
		"name": "Zeke's Harmony",
		"unique": false
	},
	{
		"desc": "Grants @CritChance@% Critical Strike Chance (including components) and @BonusCritDamage@% Critical Strike Damage. Each point of Critical Strike Chance above 100% becomes +@BonusCritDmgPerCritAbove100@% Critical Strike Damage.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@RadiantBonusCritDamage@% Critical Strike Damage.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AD": 10,
			"CritChance": 75,
			"BonusCritDmgPerCritAbove100": 1,
			"BonusCritDamage": 10,
			"{ea3784d2}": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Infinity_Edge_Radiant.dds",
		"id": 2019,
		"name": "Zenith Edge",
		"unique": true
	},
	{
		"desc": "Increases the holder's Attack Range by <TFTRadiantItemBonus>@HexRangeIncrease@</TFTRadiantItemBonus> hexes and grants %i:scaleAS% @TooltipBonusAS@% bonus Attack Speed (including components).<br><br>The wearer's attacks can no longer miss.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@RadiantBonusAS@% Attack Speed.</TFTRadiantItemBonus>",
		"effects": {
			"AS": 85,
			"HexRangeIncrease": 2,
			"TooltipBonusAS": 55,
			"{e7dee847}": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Rapid_Fire_Cannon_Radiant.dds",
		"id": 2022,
		"name": "Rapid Lightcannon",
		"unique": false
	},
	{
		"desc": "Attacks grant <TFTRadiantItemBonus>+@ASPerStack@%</TFTRadiantItemBonus> bonus Attack Speed for the rest of combat.<br><br>This effect can stack any number of times.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@RadiantBonusAS@% Attack Speed.</TFTRadiantItemBonus>",
		"effects": {
			"AP": 10,
			"AS": 40,
			"ASPerStack": 10,
			"{e7dee847}": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Guinsoos_Rageblade_Radiant.dds",
		"id": 2023,
		"name": "Guinsoo's Reckoning",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleAS% @BonusAS@% bonus Attack Speed. Every 3rd attack from the holder unleashes a chain lightning that bounces to <TFTRadiantItemBonus>@1StarBounces@</TFTRadiantItemBonus> enemies, dealing <TFTRadiantItemBonus>@Damage@</TFTRadiantItemBonus> magic damage and reducing their Magic Resist by @MRShred@% for @MRShredDuration@ seconds.",
		"effects": {
			"AS": 10,
			"BonusAS": 10,
			"Damage": 115,
			"Mana": 15,
			"1StarBounces": 8,
			"2StarBounces": 8,
			"3StarBounces": 8,
			"4StarBounces": 8,
			"MRShredDuration": 5,
			"MRShred": 70
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Statikk_Shiv_Radiant.dds",
		"id": 2024,
		"name": "Statikk's Favor",
		"unique": false
	},
	{
		"desc": "When the holder attacks or takes damage, they gain <TFTRadiantItemBonus>@StackingAD@ Attack Damage and Ability Power</TFTRadiantItemBonus>.<br><br>This stacks up to @StackCap@ times, at which point the holder gains <TFTRadiantItemBonus>@BonusResistsAtStackCap@ Armor and Magic Resist</TFTRadiantItemBonus>.",
		"effects": {
			"AS": 10,
			"Armor": 20,
			"StackCap": 25,
			"StackingAD": 4,
			"BonusResistsAtStackCap": 50,
			"StackingAP": 4
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Titans_Resolve_Radiant.dds",
		"id": 2025,
		"name": "Titan's Vow",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleAD% @AD@ Attack Damage. The holder's attacks fire a bolt at another nearby enemy, dealing <TFTRadiantItemBonus>@MultiplierForDamage@%</TFTRadiantItemBonus> of the holder's Attack Damage as physical damage.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusAS@% Attack Speed.</TFTRadiantItemBonus>",
		"effects": {
			"AD": 10,
			"AS": 40,
			"AdditionalTargets": 1,
			"BonusAS": 30,
			"MR": 20,
			"MultiplierForDamage": 110
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Runaans_Hurricane_Radiant.dds",
		"id": 2026,
		"name": "Runaan's Tempest",
		"unique": false
	},
	{
		"desc": "<TFTRadiantItemBonus>At the start of combat, a Radiant Voidmother with bonus HP and Attack Damage</TFTRadiantItemBonus> arises and taunts enemies within <TFTRadiantItemBonus>@HexRadius@</TFTRadiantItemBonus> hexes. Radiant Voidmothers that arise from summoned units are @SummonedStatReduction@% effective.",
		"effects": {
			"AS": 10,
			"HP": 150,
			"{50a0dbb5}": 2,
			"HexRadius": 4,
			"SummonedStatReduction": 25,
			"{ef0bb7c2}": 1.5
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/ZZRot_Portal_Radiant.dds",
		"id": 2027,
		"name": "Zz'Rots Invitation",
		"unique": false
	},
	{
		"desc": "When the holder inflicts a critical hit, the target's Armor is reduced by @ArmorReductionPercent@% for <TFTRadiantItemBonus>the rest of combat.</TFTRadiantItemBonus> This effect does not stack.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusCritChance@% Critical Strike Chance.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AS": 10,
			"CritChance": 50,
			"ArmorReductionPercent": 70,
			"{c34a89ec}": 35,
			"ArmorBreakDuration": 60
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Last_Whisper_Radiant.dds",
		"id": 2029,
		"name": "Eternal Whisper",
		"unique": true
	},
	{
		"desc": "Grants %i:scaleAP% <TFTRadiantItemBonus>@AP@</TFTRadiantItemBonus> bonus Ability Power (including components).",
		"effects": {
			"AP": 120
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Rabadons_Deathcap_Radiant.dds",
		"id": 2033,
		"name": "Rabadon's Ascended Deathcap",
		"unique": false
	},
	{
		"desc": "During combat, the holder gains %i:scaleAP% <TFTRadiantItemBonus>@APPerInterval@</TFTRadiantItemBonus> Ability Power every <TFTRadiantItemBonus>@IntervalSeconds@</TFTRadiantItemBonus> seconds.",
		"effects": {
			"AP": 10,
			"Mana": 15,
			"APPerInterval": 30,
			"IntervalSeconds": 4
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Archangel_Staff_Radiant.dds",
		"id": 2034,
		"name": "Urf-Angel's Staff",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder and all allies within <TFTRadiantItemBonus>@HexRange@</TFTRadiantItemBonus> hexes in the same row gain a shield that blocks <TFTRadiantItemBonus>@1StarShieldValue@/@2StarShieldValue@/@3StarShieldValue@</TFTRadiantItemBonus> %i:star% damage for <TFTRadiantItemBonus>@ShieldDuration@</TFTRadiantItemBonus> seconds.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusAllyHP@ Health for all allies</TFTRadiantItemBonus> at the start of combat.",
		"effects": {
			"AP": 10,
			"Armor": 20,
			"ShieldDuration": 60,
			"2StarShieldValue": 500,
			"1StarShieldValue": 400,
			"3StarShieldValue": 600,
			"{940ca598}": 200,
			"HexRange": 3,
			"4StarShieldValue": 900
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Locket_of_the_Iron_Solari_Radiant.dds",
		"id": 2035,
		"name": "Locket of Targon Prime",
		"unique": false
	},
	{
		"desc": "Enemies within <TFTRadiantItemBonus>@HexRange@</TFTRadiantItemBonus> hexes have their Magic Resist reduced by @MRShred@%. When they cast an Ability, they are zapped taking magic damage equal to <TFTRadiantItemBonus>@ManaRatio@%</TFTRadiantItemBonus> of their max Mana.<br><br><TFTRadiantItemBonus>Radiant Bonus: Regenerate @MaxHPRegen@% max Health per second.</TFTRadiantItemBonus><br>",
		"effects": {
			"AP": 10,
			"MR": 20,
			"{52358605}": 1,
			"{8f854a28}": 1,
			"HexRange": 4,
			"ManaRatio": 300,
			"MRShred": 50
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Ionic_Spark_Radiant.dds",
		"id": 2036,
		"name": "Covalent Spark",
		"unique": false
	},
	{
		"desc": "When the holder deals magic or true damage with their Ability, they burn the target, dealing <TFTRadiantItemBonus>@BurnPercent@%</TFTRadiantItemBonus> of the target's maximum HP as true damage over <TFTRadiantItemBonus>@BurnDuration@</TFTRadiantItemBonus> seconds, and reducing healing by @GrievousWoundsPercent@% for the duration of the burn.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@Mana@ Starting Mana.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AP": 10,
			"HP": 150,
			"Mana": 30,
			"MonsterCap": 150,
			"TicksPerSecond": 1,
			"GrievousWoundsPercent": 50,
			"BurnPercent": 120,
			"BurnDuration": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Morellonomicon_Radiant.dds",
		"id": 2037,
		"name": "More More-ellonomicon",
		"unique": true
	},
	{
		"desc": "The holder's magic and true damage from their Ability can critically strike. The holder gains <TFTRadiantItemBonus>@CritDamage@%</TFTRadiantItemBonus> bonus Critical Strike Damage and %i:scaleAP% @TooltipBonusAP@ bonus Ability Power.",
		"effects": {
			"AP": 20,
			"CritChance": 15,
			"CritDamage": 75,
			"TooltipBonusAP": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Jeweled_Gauntlet_Radiant.dds",
		"id": 2039,
		"name": "Glamorous Gauntlet",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleMana% @Mana@ Starting Mana (including components). After casting their Ability, the holder gains %i:scaleMana% <TFTRadiantItemBonus>@ManaRestore@</TFTRadiantItemBonus> mana.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@AP@ Ability Power. </TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AP": 30,
			"Mana": 50,
			"ManaRestore": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Blue_Buff_Radiant.dds",
		"id": 2044,
		"name": "Blue Blessing",
		"unique": true
	},
	{
		"desc": "Reduces the Attack Speed of enemies within @HexRadius@ hexes by <TFTRadiantItemBonus>@ASSlow@%</TFTRadiantItemBonus>.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusMana@ Starting Mana.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"Armor": 20,
			"ASSlow": 50,
			"Mana": 45,
			"{43012963}": 30,
			"HexRadius": 2
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Frozen_Heart_Radiant.dds",
		"id": 2045,
		"name": "Frozen Heart Of Gold",
		"unique": true
	},
	{
		"desc": "When combat begins, the holder and all allies within @HexRange@ hex in the same row gain %i:scaleAP% <TFTRadiantItemBonus>@BonusAP@</TFTRadiantItemBonus> Ability Power for the rest of combat. <TFTRadiantItemBonus>Additionally, magic and true damage from their Abilities heal them for @Spellvamp@% of the damage dealt.</TFTRadiantItemBonus>",
		"effects": {
			"MR": 20,
			"Mana": 15,
			"{67741d01}": 10,
			"HexRange": 1,
			"BonusAP": 50
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Chalice_of_Power_Radiant.dds",
		"id": 2046,
		"name": "Chalice of Charity",
		"unique": false
	},
	{
		"desc": "Every @HealTickRate@ seconds, the holder radiates an aura to allies within <TFTRadiantItemBonus>@HexRadius@</TFTRadiantItemBonus> hexes, healing them for <TFTRadiantItemBonus>@MissingHPHeal@%</TFTRadiantItemBonus> of their missing Health. Affected allies take @AoEDamageReduction@% reduced damage from multi-target abilities and attacks for @HealTickRate@ seconds.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusHealth@ Health.</TFTRadiantItemBonus>",
		"effects": {
			"BonusHP": 350,
			"HP": 500,
			"Mana": 15,
			"MaxHeal": 2000,
			"AoEDamageReduction": 25,
			"HexRadius": 2,
			"MissingHPHeal": 25,
			"HealTickRate": 5
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Redemption_Radiant.dds",
		"id": 2047,
		"name": "Radiant Redemption",
		"unique": false
	},
	{
		"desc": "At the beginning of each planning phase, the holder gains <TFTRadiantItemBonus>both of the following</TFTRadiantItemBonus>:<li>+@BonusAD@ Attack Damage and +@BonusAP@ Ability Power.</li> <li>Attacks and Abilities heal for @TraitMultiplier@% of damage dealt.</li>",
		"effects": {
			"BonusAD": 40,
			"CritChance": 15,
			"Mana": 15,
			"AdditionalAD": 40,
			"AdditionalAP": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Hand_of_Justice_Radiant.dds",
		"id": 2049,
		"name": "Fist of Fairness",
		"unique": false
	},
	{
		"desc": "Grants %i:scaleArmor% @Armor@ bonus Armor (including components). Negates bonus damage from incoming critical strikes. On being hit by an attack, deal <TFTRadiantItemBonus>@1StarAoEDamage@/@2StarAoEDamage@/@3StarAoEDamage@</TFTRadiantItemBonus> %i:star% magic damage to all nearby enemies (once every @ICD@ seconds).<br><br><TFTRadiantItemBonus>Radiant Bonus: Regenerate @MaxHPRegen@% max Health per second.</TFTRadiantItemBonus>",
		"effects": {
			"Armor": 70,
			"ICD": 2.5,
			"3StarAoEDamage": 300,
			"1StarAoEDamage": 200,
			"{52358605}": 1,
			"{8f854a28}": 2,
			"2StarAoEDamage": 250,
			"4StarAoEDamage": 400
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Bramble_Vest_Radiant.dds",
		"id": 2055,
		"name": "Rosethorn Vest",
		"unique": false
	},
	{
		"desc": "The holder gains %i:scaleArmor% <TFTRadiantItemBonus>@ArmorPerEnemy@</TFTRadiantItemBonus> Armor and %i:scaleMR% <TFTRadiantItemBonus>@MRPerEnemy@</TFTRadiantItemBonus> Magic Resist for each enemy targeting them.<br><br><TFTRadiantItemBonus>Radiant Bonus: Regenerate @MaxHPRegen@% max Health per second.</TFTRadiantItemBonus>",
		"effects": {
			"Armor": 20,
			"MR": 20,
			"{52358605}": 1,
			"MRPerEnemy": 30,
			"ArmorPerEnemy": 30,
			"{8f854a28}": 3
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Gargoyle_Stoneplate_Radiant.dds",
		"id": 2056,
		"name": "Dvarapala Stoneplate",
		"unique": false
	},
	{
		"desc": "Every <TFTRadiantItemBonus>@ICD@</TFTRadiantItemBonus> seconds, a random enemy within <TFTRadiantItemBonus>@HexRange@</TFTRadiantItemBonus> hexes is burned for <TFTRadiantItemBonus>@BurnPercent@% of their maximum HP as true damage over @BurnDuration@ seconds</TFTRadiantItemBonus>. Any healing they receive is reduced by @GrievousWoundsPercent@%.<br><br><TFTRadiantItemBonus>Radiant Bonus: Regenerate @MaxHealthRegen@% max Health per second.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"Armor": 20,
			"HP": 150,
			"ICD": 1.5,
			"MonsterCap": 150,
			"GrievousWoundsPercent": 50,
			"{52358605}": 1,
			"BurnPercent": 120,
			"{8f854a28}": 0.5,
			"BurnDuration": 30,
			"HexRange": 4
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Sunfire_Cape_Radiant.dds",
		"id": 2057,
		"name": "Sunlight Cape",
		"unique": true
	},
	{
		"desc": "When combat begins, the holder shoots a <TFTRadiantItemBonus>wider beam</TFTRadiantItemBonus> straight ahead that delays affected enemies' first spellcast, increasing their max Mana by <TFTRadiantItemBonus>@CostIncrease@%</TFTRadiantItemBonus> until they cast.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@AllyBonusMana@ Starting Mana for all allies</TFTRadiantItemBonus> at the start of combat.<br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"Armor": 20,
			"{4516a18d}": 60,
			"CostIncrease": 50,
			"{ba272485}": 15,
			"DodgeChance": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Shroud_of_Stillness_Radiant.dds",
		"id": 2059,
		"name": "Shroud of Reverence",
		"unique": true
	},
	{
		"desc": "Grants %i:scaleMR% <TFTRadiantItemBonus>@MR@</TFTRadiantItemBonus> bonus Magic Resist (including components). On being hit by magic or true damage from an Ability, launch a fireball at the Ability's caster that deals magic damage equal to <TFTRadiantItemBonus>@PercentHPDamage@% of their max Health</TFTRadiantItemBonus> (@ICD@ second cooldown).<br><br><TFTRadiantItemBonus>Radiant Bonus: Regenerate @MaxHealthRegen@% max Health per second.</TFTRadiantItemBonus>",
		"effects": {
			"ICD": 0.5,
			"MR": 300,
			"PercentHPDamage": 25,
			"{52358605}": 1,
			"{8f854a28}": 2
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Dragons_Claw_Radiant.dds",
		"id": 2066,
		"name": "Dragon's Will",
		"unique": false
	},
	{
		"desc": "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for <TFTRadiantItemBonus>@BanishDuration@</TFTRadiantItemBonus> seconds. Ignores CC immunity.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@AllyBonusAS@% Attack Speed for all allies</TFTRadiantItemBonus> at the start of combat.<br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"HP": 150,
			"MR": 20,
			"BanishDuration": 10,
			"{c67a1046}": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Zephyr_Radiant.dds",
		"id": 2067,
		"name": "Mistral",
		"unique": true
	},
	{
		"desc": "The holder gains immunity to crowd control in combat for <TFTRadiantItemBonus>@SpellShieldDuration@</TFTRadiantItemBonus> seconds.<br><br><TFTRadiantItemBonus>Radiant Bonus: +@AS@% Attack Speed.</TFTRadiantItemBonus><br><br><tftitemrules>[Unique - only one per champion]</tftitemrules>",
		"effects": {
			"AS": 45,
			"MR": 20,
			"SpellShieldDuration": 30,
			"DodgeChance": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Quicksilver_Radiant.dds",
		"id": 2069,
		"name": "Quickestsilver",
		"unique": true
	},
	{
		"desc": "Grants %i:scaleHP% <TFTRadiantItemBonus>@Health@</TFTRadiantItemBonus> bonus Health (including components).<br><br><TFTRadiantItemBonus>Radiant Bonus: Regenerate @MaxHealthRegen@% max Health per second.</TFTRadiantItemBonus>",
		"effects": {
			"HP": 1800,
			"{52358605}": 1,
			"{8f854a28}": 1
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Warmogs_Armor_Radiant.dds",
		"id": 2077,
		"name": "Warmog's Pride",
		"unique": false
	},
	{
		"desc": "When combat begins, the holder <TFTRadiantItemBonus>and all allies</TFTRadiantItemBonus> gain a shield that blocks the damage and effects of the first enemy Ability, up to 600 damage. <br><br><TFTRadiantItemBonus>Radiant Bonus: +@BonusAllyHP@ Health for all allies</TFTRadiantItemBonus> at the start of combat.",
		"effects": {
			"HP": 150,
			"{940ca598}": 50,
			"HexRange": 10,
			"DamageCap": 600,
			"DodgeChance": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Trap_Claw_Radiant.dds",
		"id": 2079,
		"name": "Banshee's Silence",
		"unique": false
	},
	{
		"desc": "At the beginning of each planning phase, the holder equips 2 temporary <TFTRadiantItemBonus>Radiant items.</TFTRadiantItemBonus><br><br><tftitemrules>[Consumes Three Item Slots]</tftitemrules>",
		"effects": {
			"CritChance": 15,
			"DodgeChance": 15
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Radiant/Thieves_Gloves_Radiant.dds",
		"id": 2099,
		"name": "Rascal's Gloves",
		"unique": false
	}
]

export const ornnItems: ItemData[] = [
	{
		"desc": "The wearer regenerates @PercentHPRegen@% of their maximum Health each second.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"HP": 200,
			"MR": 25,
			"{3b3af019}": 6
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Tank_T3_SpiritVisage.dds",
		"id": 9001,
		"name": "Anima Visage",
		"unique": true
	},
	{
		"desc": "@IgnorePainPercent@% of the damage the holder receives is instead dealt over @BleedDuration@ seconds as non-lethal damage. The holder's Attacks and Abilities also heal for @BaseHeal@% of damage dealt.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 20,
			"AS": 20,
			"Armor": 20,
			"BaseHeal": 20,
			"{0bc5955f}": 5,
			"{ee37daec}": 70
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Fighter_T3_DeathsDance.dds",
		"id": 9002,
		"name": "Death's Defiance",
		"unique": true
	},
	{
		"desc": "Enemies who damage the holder have their Attack Speed slowed by @ASSlowPercent@% for @SlowDuration@ seconds. After being slowed this way @NumApplications@ times, the attacker is Frozen for the duration instead. An enemy can only be Frozen once every @FreezeCooldown@ seconds.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 25,
			"HP": 200,
			"SlowDuration": 2,
			"{0f0fd3a2}": 25,
			"{22302443}": 10,
			"{aaa03dde}": 2,
			"{e8bc18e0}": 7
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Mage_T4_Everfrost.dds",
		"id": 9003,
		"name": "Eternal Winter",
		"unique": true
	},
	{
		"desc": "<tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 30,
			"AP": 30,
			"AS": 30,
			"Armor": 30,
			"CritChance": 30,
			"HP": 30,
			"MR": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Fighter_T4_TrinityForce.dds",
		"id": 9004,
		"name": "Infinity Force",
		"unique": true
	},
	{
		"desc": "After the wearer casts their spell for the first time each combat, they restore %i:scaleMana% @ManaRestore@ Mana over @ManaDuration@ seconds.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 15,
			"AS": 15,
			"Mana": 40,
			"ManaRestore": 150,
			"{c8d95a76}": 4
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Marksman_T3_Muramana.dds",
		"id": 9005,
		"name": "Manazane",
		"unique": true
	},
	{
		"desc": "The wearer's attacks and spell damage shred enemy Armor and Magic Resistance by @Shred@% for @Duration@ seconds.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 30,
			"Duration": 3,
			"HP": 200,
			"{a8d6e8b5}": 60
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Fighter_T3_BlackCleaver.dds",
		"id": 9006,
		"name": "Obsidian Cleaver",
		"unique": true
	},
	{
		"desc": "At the start of combat, all allies adjacent to the wearer gain %i:scaleArmor% @BonusDefense@ Armor and %i:scaleMR% @BonusDefense@ Magic Resistance for the rest of combat.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 25,
			"BonusDefense": 50,
			"HP": 200,
			"MR": 25
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Tank_T3_RanduinsOmen.dds",
		"id": 9007,
		"name": "Randuin's Sanctum",
		"unique": true
	},
	{
		"desc": "At the start of combat, the holder pulls the farthest enemy into melee range, stunning them for @StunDuration@ seconds. Allies within range will prioritize attacking that enemy.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 25,
			"HP": 750,
			"Mana": 30,
			"StunDuration": 1.5
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_RocketPropelledFist.TFT_Set4_Act2.dds",
		"id": 9008,
		"name": "Rocket-Propelled Fist",
		"unique": true
	},
	{
		"desc": "The holder executes enemies below @ExecutePercent@% on hit. Executions have a @GoldChance@% chance to generate 1 gold.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 20,
			"CritChance": 20,
			"{2dd33743}": 50,
			"{430f8969}": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Marksman_T3_TheCollector.dds",
		"id": 9009,
		"name": "Gold Collector",
		"unique": true
	},
	{
		"desc": "The first instance of damage that would reduce the wearer below @PercentHPThreshold@% Health is prevented, causing them to become invulnerable for @InvulnDuration@ seconds.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AP": 45,
			"Armor": 35,
			"MR": 35,
			"{046e3023}": 40,
			"{69247755}": 2.5
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Mage_T3_ZhonyasHourglass.dds",
		"id": 9010,
		"name": "Zhonya's Paradox",
		"unique": true
	}
]

export const hexbuffItems: ItemData[] = [
	{
		"desc": "tft_item_description_InfernoHex",
		"effects": {
			"{a8ca7859}": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Inferno.dds",
		"id": 10201,
		"name": "tft_item_name_InfernoHexBuff",
		"unique": false
	},
	{
		"desc": "tft_item_description_MountainHexBuff",
		"effects": {
			"{1bb18b94}": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Mountain.dds",
		"id": 10202,
		"name": "tft_item_name_MountainHexBuff",
		"unique": false
	},
	{
		"desc": "tft_item_description_OceanHexBuff",
		"effects": {
			"{1a97299e}": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Ocean.dds",
		"id": 10203,
		"name": "tft_item_name_OceanHexBuff",
		"unique": false
	},
	{
		"desc": "tft_item_description_WindHexBuff",
		"effects": {
			"{0e4779e5}": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Wind.dds",
		"id": 10204,
		"name": "tft_item_name_WindHexBuff",
		"unique": false
	}
]

export const mercenaryDiceItems: ItemData[] = [
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Scratch.TFT_Set6.dds",
		"id": 403,
		"name": "tft_item_name_Mercenary_X",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Shell.TFT_Set6.dds",
		"id": 411,
		"name": "tft_item_name_Mercenary_Shell",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Bag.TFT_Set6.dds",
		"id": 432,
		"name": "tft_item_name_Mercenary_Bag",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Fish.TFT_Set6.dds",
		"id": 436,
		"name": "tft_item_name_Mercenary_Fish",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Moon.TFT_Set6.dds",
		"id": 483,
		"name": "tft_item_name_Mercenary_Book",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Coin.TFT_Set6.dds",
		"id": 484,
		"name": "tft_item_name_Mercenary_Coin",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ShopReroll.dds",
		"id": 485,
		"name": "tft_item_name_Mercenary_X",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Hydra.TFT_Set6.dds",
		"id": 486,
		"name": "tft_item_name_Mercenary_Kraken",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Ship.TFT_Set6.dds",
		"id": 487,
		"name": "tft_item_name_Mercenary_Ship",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Soldier.TFT_Set6.dds",
		"id": 488,
		"name": "tft_item_name_Mercenary_Soldier",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Chest.TFT_Set6.dds",
		"id": 490,
		"name": "tft_item_name_Mercenary_Chest",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Sword.TFT_Set6.dds",
		"id": 491,
		"name": "tft_item_name_Mercenary_Sword",
		"unique": false
	},
	{
		"desc": "tft_item_description_Mercenary_Dice",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Mercenary/Mercenary_Spatula.TFT_Set6.dds",
		"id": 492,
		"name": "tft_item_name_Mercenary_Spatula",
		"unique": false
	}
]

export const unreleasedItems: ItemData[] = [
	{
		"desc": "tft_item_description_SwordOfTheDivine2",
		"effects": {
			"{48ea2af8}": 7,
			"{98ac43ce}": 50
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SwordOfTheDivine.dds",
		"id": -100,
		"name": "tft_item_name_SwordOfTheDivine2",
		"unique": false
	},
	{
		"desc": "tft_item_description_IsYordle",
		"effects": {
			"CritChance": 20,
			"DodgeChance": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Mittens.dds",
		"id": -89,
		"name": "tft_item_name_Mittens",
		"unique": true
	},
	{
		"desc": "TFT_item_description_FrozenMallet",
		"effects": {
			"HP": 400
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.dds",
		"id": -78,
		"name": "TFT_item_name_FrozenMallet",
		"unique": true
	},
	{
		"desc": "tft_item_description_FrozenFist",
		"effects": {
			"Armor": 25,
			"{aaa03dde}": 2.5,
			"DodgeChance": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_IcebornGauntlet.dds",
		"id": -59,
		"name": "tft_item_name_FrozenFist",
		"unique": false
	},
	{
		"desc": "Extra %i:scaleArmor% +@Armor@<br>Holder is also a Knight<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Armor": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_KnightsVow.dds",
		"id": -58,
		"name": "Knight's Vow",
		"unique": true
	},
	{
		"desc": "tft_item_description_Thornmail",
		"effects": {
			"Armor": 50,
			"CritDamageBlock": 100
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Thornmail.dds",
		"id": -55,
		"name": "game_item_displayname_3075",
		"unique": false
	},
	{
		"desc": "tft_item_description_Darkin",
		"effects": {
			"Mana": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Darkin.dds",
		"id": -48,
		"name": "tft_item_name_Darkin",
		"unique": true
	},
	{
		"desc": "TFT_item_description_Hush",
		"effects": {
			"MR": 25,
			"Mana": 20,
			"SilenceDuration": 4,
			"{2275757b}": 20,
			"{4516a18d}": 4
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hush.dds",
		"id": -46,
		"name": "tft_item_name_Hush",
		"unique": false
	},
	{
		"desc": "TFT_item_description_Yuumi",
		"effects": {
			"AP": 40
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Yuumi.dds",
		"id": -38,
		"name": "TFT_item_name_Yuumi",
		"unique": true
	},
	{
		"desc": "On falling below @HPPercent@% Health, become untargetable, invulnerable, but unable to move for @StasisDuration@ seconds.",
		"effects": {
			"AP": 20,
			"Armor": 25,
			"HPPercent": 30,
			"{c425872e}": 4
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ZhonyasHourglass.dds",
		"id": -35,
		"name": "Zhonya's Hourglass",
		"unique": false
	},
	{
		"desc": "tft_item_description_SwordOfTheDivine2",
		"effects": {
			"AS": 15,
			"ASPerStack": 30,
			"CritChance": 20,
			"{cb57edb0}": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.dds",
		"id": -29,
		"name": "tft_item_name_SwordOfTheDivine2",
		"unique": true
	},
	{
		"desc": "TFT_item_description_BladeOfTheRuinedKing",
		"effects": {
			"AS": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.dds",
		"id": -28,
		"name": "TFT_item_name_BladeOfTheRuinedKing",
		"unique": true
	},
	{
		"desc": "TFT_item_description_CursedBlade",
		"effects": {
			"AS": 15,
			"MR": 25,
			"{a56e0a21}": 20
		},
		"from": [
			-26,
			-26
		],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_CursedBlade.dds",
		"id": -26,
		"name": "tft_item_name_CursedBlade",
		"unique": false
	},
	{
		"desc": "TFT_item_description_PhantomDancer",
		"effects": {
			"AS": 15,
			"Armor": 25
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_PhantomDancer.dds",
		"id": -25,
		"name": "TFT_item_name_PhantomDancer",
		"unique": true
	},
	{
		"desc": "The holder is also an Assassin.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 30
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_YoumuusGhostblade.dds",
		"id": -18,
		"name": "Youmuu's Ghostblade",
		"unique": true
	},
	{
		"desc": "%i:scaleArmor% +@Armor@ Armor",
		"effects": {
			"Armor": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Chain_Vest.dds",
		"id": -5,
		"name": "Chain Vest",
		"unique": false
	},
	{
		"desc": "%i:scaleAD% +@AD@ Attack Damage",
		"effects": {
			"AD": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/BF_Sword.dds",
		"id": -2,
		"name": "B.F. Sword",
		"unique": false
	},
	{
		"desc": "tft_item_description_HextechChestguard",
		"effects": {},
		"from": [
			-1,
			-1
		],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HextechChestguard.dds",
		"id": -1,
		"name": "tft_item_name_HextechChestguard",
		"unique": false
	},
	{
		"desc": "TFT_item_description_Catalyst",
		"effects": {
			"Mana": 20,
			"DodgeChance": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.dds",
		"id": 149,
		"name": "TFT_item_name_Catalyst",
		"unique": false
	},
	{
		"desc": "Use on a champion to break apart all items into components and unequip them.<br><br><tftitemrules> [Cannot be used on board champions in combat.]<br>[CONSUMABLE - This item disappears when used.]</tftitemrules>",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_Dissolver.dds",
		"id": 205,
		"name": "Divine Dissolver",
		"unique": false
	},
	{
		"desc": "tft_item_description_SpellThiefsEdge",
		"effects": {
			"{0cc88d45}": 10
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SpellThiefsEdge.dds",
		"id": 529,
		"name": "tft_item_name_SpellThiefsEdge",
		"unique": false
	},
	{
		"desc": "TFT_item_description_MortalReminder",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_MortalReminder.dds",
		"id": 541,
		"name": "Mortal Reminder",
		"unique": false
	},
	{
		"desc": "This slot can't hold an item.",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_UnusableSlot.TFT3_1013_GameVariations.dds",
		"id": 999,
		"name": "Unusable Slot",
		"unique": false
	},
	{
		"desc": "Two 1-Cost & One 2-Cost Units",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds",
		"id": 2201,
		"name": "Two 1-Cost & One 2-Cost Units",
		"unique": false
	},
	{
		"desc": "Three 2-Cost Units",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds",
		"id": 2202,
		"name": "Three 2-Cost Units",
		"unique": false
	},
	{
		"desc": "One 3+ Cost Unit",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds",
		"id": 2203,
		"name": "One 3+ Cost Unit",
		"unique": false
	},
	{
		"desc": "Two 3+Cost Units",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds",
		"id": 2204,
		"name": "Two 3+Cost Units",
		"unique": false
	},
	{
		"desc": "Three 3+Cost Units",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds",
		"id": 2205,
		"name": "Three 3+Cost Units",
		"unique": false
	},
	{
		"desc": "5 Gold",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/AssistGiveGold.dds",
		"id": 2210,
		"name": "5 Gold",
		"unique": false
	},
	{
		"desc": "6 Gold",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/AssistGiveGold.dds",
		"id": 2211,
		"name": "6 Gold",
		"unique": false
	},
	{
		"desc": "7 Gold",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/AssistGiveGold.dds",
		"id": 2212,
		"name": "7 Gold",
		"unique": false
	},
	{
		"desc": "8 Gold",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/AssistGiveGold.dds",
		"id": 2213,
		"name": "8 Gold",
		"unique": false
	},
	{
		"desc": "Random Component",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Pairs/AssistRandomComponent.dds",
		"id": 2220,
		"name": "Random Component",
		"unique": false
	},
	{
		"desc": "Special Item + 4 Gold",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Thieves_Gloves.dds",
		"id": 2221,
		"name": "Special Item + 4 Gold",
		"unique": false
	},
	{
		"desc": "TFT6_Item_Description_EliteSpotlight",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_MagicDust.dds",
		"id": 9100,
		"name": "TFT6_Item_Name_EliteSpotlight",
		"unique": true
	},
	{
		"desc": "Loot goes here",
		"effects": {
			"CritChance": 20,
			"DodgeChance": 20
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Unknown.dds",
		"id": 10001,
		"name": "Loot Bag",
		"unique": false
	},
	{
		"desc": "Item temporarily disabled",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Jammed.dds",
		"id": 10002,
		"name": "Jammed!",
		"unique": false
	},
	{
		"desc": "Loot goes here",
		"effects": {},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/TFT_Item_EmptySlot.dds",
		"id": 10006,
		"name": "Loot Bag",
		"unique": false
	}
]

export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)