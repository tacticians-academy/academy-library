import type { ItemData } from '../index'

export enum ItemKey {
	BFSword = 1, RecurveBow = 2, NeedlesslyLargeRod = 3, TearOfTheGoddess = 4, ChainVest = 5, NegatronCloak = 6, GiantsBelt = 7, Spatula = 8, SparringGloves = 9, Deathblade = 11, GiantSlayer = 12, HextechGunblade = 13, SpearOfShojin = 14, Bloodthirster = 16, ZekesHerald = 17, ImperialEmblem = 18, InfinityEdge = 19, RapidFirecannon = 22, GuinsoosRageblade = 23, StatikkShiv = 24, TitansResolve = 25, RunaansHurricane = 26, ZzRotPortal = 27, ChallengerEmblem = 28, LastWhisper = 29, RabadonsDeathcap = 33, ArchangelsStaff = 34, LocketOfTheIronSolari = 35, IonicSpark = 36, Morellonomicon = 37, ArcanistEmblem = 38, JeweledGauntlet = 39, BlueBuff = 44, FrozenHeart = 45, ChaliceOfPower = 46, Redemption = 47, AcademyEmblem = 48, HandOfJustice = 49, BrambleVest = 55, GargoyleStoneplate = 56, SunfireCape = 57, BodyguardEmblem = 58, ShroudOfStillness = 59, DragonsClaw = 66, Zephyr = 67, SyndicateEmblem = 68, Quicksilver = 69, DebonairEmblem = 70, StrikerEmblem = 71, HextechEmblem = 72, WarmogsArmor = 77, ChemtechEmblem = 78, BansheesClaw = 79, AssassinEmblem = 89, EdgeOfNight = 94, ThiefsGloves = 99, MutantEmblem = 2190, ClockworkEmblem = 2191, MercenaryEmblem = 2192, SocialiteEmblem = 2193, EnforcerEmblem = 2194, ScrapEmblem = 2195, ProtectorEmblem = 2196, BruiserEmblem = 2197, InnovatorEmblem = 2198, SniperEmblem = 2199, ScholarEmblem = 2200
}

export const items: ItemData[] = [
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
	},
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
		"desc": "The holder gains the Imperial trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"AD": 10
		},
		"from": [
			8,
			1
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Imperial.TFT_Set6.dds",
		"id": 18,
		"name": "Imperial Emblem",
		"unique": true
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
		"desc": "The holder gains the Academy trait.<br><br><tftitemrules>[Unique - only 1 per champion]</tftitemrules>",
		"effects": {
			"Mana": 15
		},
		"from": [
			8,
			4
		],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Academy.TFT_Set6.dds",
		"id": 48,
		"name": "Academy Emblem",
		"unique": true
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
		"desc": "The holder gains the Protector trait.<br><br><tftitemrules>[Unique - only 1 per champion<br>Elusive - cannot be crafted.]</tftitemrules>",
		"effects": {
			"HP": 150
		},
		"from": [],
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Set6/Protector.TFT_Set6.dds",
		"id": 2196,
		"name": "Protector Emblem",
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