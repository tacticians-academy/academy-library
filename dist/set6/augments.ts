import type { AugmentData } from '../index'

export const activeAugments: AugmentData[] = [
	{
		"tier": 2,
		"name": "Clear Mind",
		"desc": "If you have no champions on your bench at the end of a round, gain @XP@ experience points.",
		"effects": {
			"XP": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ClearMind2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Arcanist Heart",
		"desc": "Your team counts as having 1 additional Arcanist. Gain a Swain.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ArcanistHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Cybernetic Shell I",
		"desc": "Your champions holding an item gain @Health@ Health and @Resists@ Armor.",
		"effects": {
			"Health": 150,
			"Resists": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic-Shell-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Cybernetic Shell II",
		"desc": "Your champions holding an item gain @Health@ Health and @Resists@ Armor.",
		"effects": {
			"Health": 250,
			"Resists": 45
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic-Shell-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Cybernetic Shell III",
		"desc": "Your champions holding an item gain @Health@ Health and @Resists@ Armor.",
		"effects": {
			"Health": 350,
			"Resists": 60
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic-Shell-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Future Sight II",
		"desc": "Know who you will fight next. Gain a Radiant Zephyr.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Future-Sight-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Hextech Crest",
		"desc": "Gain a Hextech Emblem and a Nocturne.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Hextech-Crest.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Bodyguard Heart",
		"desc": "Your team counts as having 1 additional Bodyguard. Gain a Blitzcrank.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BodyguardHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Bruiser Heart",
		"desc": "Your team counts as having 1 additional Bruiser. Gain a Sejuani.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BruiserHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Chemtech Unity",
		"desc": "The Chemtech trait grants its bonuses to all of your Champions. This does not increase your number of Chemtech units. Gain a Warwick.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Free-Healthcare-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Salvage Bin",
		"desc": "Gain a random completed item. Selling champions breaks apart their full items into components (excluding Tactician's Crown).",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Salvage2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Concussive Blows",
		"desc": "Striker's critical strikes stun their target for @StunDuration@ second(s). Each target can only be stunned once every @StunCD@ seconds. Gain a Rek'Sai.",
		"effects": {
			"StunCD": 7,
			"StunDuration": 1.5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Concussive-Blows-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Duet",
		"desc": "Summon 1 additional Socialite spotlight. Spotlighted units gain @BonusHealth@ Health. Gain a Senna.",
		"effects": {
			"BonusHealth": 200
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Duet1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Arcanist Crown",
		"desc": "Gain 2 Arcanist Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ArcanistEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Keepers I",
		"desc": "At the start of combat, your units grant adjacent allies a @ShieldHealth@ health shield for @ShieldDuration@ seconds.",
		"effects": {
			"ShieldDuration": 8,
			"ShieldHealth": 150
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Keepers-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Trade Sector",
		"desc": "Gain a free Shop refresh each round.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Trade2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Keepers III",
		"desc": "At the start of combat, your units grant adjacent allies a @ShieldHealth@ health shield for @ShieldDuration@ seconds.",
		"effects": {
			"ShieldDuration": 8,
			"ShieldHealth": 250
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Keepers-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Keepers II",
		"desc": "At the start of combat, your units grant adjacent allies a @ShieldHealth@ health shield for @ShieldDuration@ seconds.",
		"effects": {
			"ShieldDuration": 8,
			"ShieldHealth": 225
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Keepers-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Clockwork Heart",
		"desc": "Your team counts as having 1 additional Clockwork. Gain a Zilean.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ClockworkHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Shrug It Off",
		"desc": "Bruisers regenerate @RegenPerTick@% of their maximum Health each second. Gain a Sejuani.",
		"effects": {
			"{471b1a16}": 1,
			"RegenPerTick": 2.5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ShrugOff1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Unstable Evolution",
		"desc": "Mutants randomly gain one of the following when they reach 2 star: @BonusHP@ Health, @BonusAS@% Attack Speed, @BonusAD@ Attack Damage, or @BonusAP@ Ability Power. These bonuses stack. Gain a Rek'Sai.",
		"effects": {
			"BonusAD": 30,
			"BonusAS": 30,
			"BonusHP": 500,
			"BonusAP": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/UnstableEvolution1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Exiles",
		"desc": "Your units that start combat with no adjacent allies gain a @MaxHealthShield@% maximum Health shield for @ShieldDuration@ seconds.",
		"effects": {
			"ShieldDuration": 8,
			"MaxHealthShield": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Exiles1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Dominance",
		"desc": "After winning your player combat, gain @Gold@ bonus gold for every @PerSurvivingUnit@ surviving units.",
		"effects": {
			"Gold": 1,
			"PerSurvivingUnit": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Dominance1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Weakspot II",
		"desc": "Your units' attacks ignore @ArmorPenPercent@% of the target's Armor and reduce healing received by @HealReductionPercent@% for @Duration@ seconds.",
		"effects": {
			"Duration": 5,
			"HealReductionPercent": 50,
			"ArmorPenPercent": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Weakspot2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Weakspot III",
		"desc": "Your units' attacks ignore @ArmorPenPercent@% of the target's Armor and reduce healing received by @HealReductionPercent@% for @Duration@ seconds.",
		"effects": {
			"Duration": 5,
			"HealReductionPercent": 50,
			"ArmorPenPercent": 60
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Weakspot3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Cybernetic Implants I",
		"desc": "Your champions holding an item gain @HP@ Health and @AD@ Attack Damage.",
		"effects": {
			"AD": 10,
			"HP": 150
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Cybernetic Implants II",
		"desc": "Your champions holding an item gain @HP@ Health and @AD@ Attack Damage.",
		"effects": {
			"AD": 20,
			"HP": 250
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Underdogs",
		"desc": "Whenever your team has fewer units alive than your opponent, your units regenerate @MissingHeal@% Health each second (maximum: @HealCap@).",
		"effects": {
			"HealCap": 150,
			"MissingHeal": 9
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Underdogs1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Double Trouble I",
		"desc": "If you have exactly 2 copies of a champion on your board, they both gain @BonusStats@ Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.",
		"effects": {
			"BonusStats": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Double-Trouble-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Cybernetic Implants III",
		"desc": "Your champions holding an item gain @HP@ Health and @AD@ Attack Damage.",
		"effects": {
			"AD": 30,
			"HP": 450
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Phalanx I",
		"desc": "Your units that start combat in the back 2 rows gain @Resists@ Armor and Magic Resist.",
		"effects": {
			"Resists": 25
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Phalanx-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Phalanx II",
		"desc": "Your units that start combat in the back 2 rows gain @Resists@ Armor and Magic Resist.",
		"effects": {
			"Resists": 35
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Phalanx-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Double Trouble III",
		"desc": "If you have exactly 2 copies of a champion on your board, they both gain @BonusStats@ Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.",
		"effects": {
			"BonusStats": 65
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Double-Trouble-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Phalanx III",
		"desc": "Your units that start combat in the back 2 rows gain @Resists@ Armor and Magic Resist.",
		"effects": {
			"Resists": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Phalanx-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Double Trouble II",
		"desc": "If you have exactly 2 copies of a champion on your board, they both gain @BonusStats@ Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.",
		"effects": {
			"BonusStats": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Double-Trouble-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Stored Power",
		"desc": "Your Hextech champions permanently gain @AP@ Ability Power each time they are hit by your Hexcore's pulses. Gain a Swain.",
		"effects": {
			"AP": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Stored-Power-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Enchanter Soul",
		"desc": "Your team counts as having 2 additional Enchanters. Gain @Gold@ gold.",
		"effects": {
			"Gold": 8
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/EnchanterSoul3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Twinshot Heart",
		"desc": "Your team counts as having 1 additional Twinshot. Gain a Corki.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/TwinshotHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Arcane Nullifier II",
		"desc": "Your units' Abilities ignore @MagicPen@% of the target's Magic Resist and reduce healing received by @HealingReduction@% for @Duration@ seconds.",
		"effects": {
			"Duration": 8,
			"HealingReduction": 50,
			"MagicPen": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Arcane-Nullifier-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Electrocharge II",
		"desc": "When your units receive critical strikes, they deal @Damage@ magic damage to nearby enemies. (@ICD@ second cooldown).",
		"effects": {
			"Damage": 135,
			"ICD": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Electrocharge-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Arcane Nullifier III",
		"desc": "Your units' Abilities ignore @MagicPen@% of the target's Magic Resist and reduce healing received by @HealingReduction@% for @Duration@ seconds.",
		"effects": {
			"Duration": 8,
			"HealingReduction": 50,
			"MagicPen": 60
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Arcane-Nullifier-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Electrocharge III",
		"desc": "When your units receive critical strikes, they deal @Damage@ magic damage to nearby enemies. (@ICD@ second cooldown).",
		"effects": {
			"Damage": 180,
			"ICD": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Electrocharge-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Arcane Nullifier I",
		"desc": "Your units' Abilities ignore @MagicPen@% of the target's Magic Resist and reduce healing received by @HealingReduction@% for @Duration@ seconds.",
		"effects": {
			"Duration": 8,
			"HealingReduction": 50,
			"MagicPen": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Arcane-Nullifier-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Electrocharge I",
		"desc": "When your units receive critical strikes, they deal @Damage@ magic damage to nearby enemies. (@ICD@ second cooldown).",
		"effects": {
			"Damage": 90,
			"ICD": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Electrocharge-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "First Aid Kit",
		"desc": "All healing and shielding on your units is increased by @HealShieldIncrease*100@%.",
		"effects": {
			"HealShieldIncrease": 0.3499999940395355
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/FirstAidKit1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Bruiser Crown",
		"desc": "Gain 2 Bruiser Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BruiserEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Calculated Loss",
		"desc": "After losing your combat, gain @Gold@ gold and a free Shop refresh.",
		"effects": {
			"Gold": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CalculatedLoss1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Innovator Soul",
		"desc": "Your team counts as having 2 additional Innovators.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/InnovatorSoul3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Bodyguard Crown",
		"desc": "Gain 2 Bodyguard Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BodyguardEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Scrap Crest",
		"desc": "Gain a Scrap Emblem and a Blitzcrank.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScrapEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Challenger Crown",
		"desc": "Gain 2 Challenger Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChallengerEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Assassin Crest",
		"desc": "Gain an Assassin Emblem and a Talon.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/AssassinEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Portable Forge",
		"desc": "Open an Armory and choose 1 of 3 unique Artifacts crafted by Ornn.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/PortableForge2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Blue Battery II",
		"desc": "After casting their Ability, your units restore @ManaRestore@ Mana.",
		"effects": {
			"ManaRestore": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Blue-Battery-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Blue Battery I",
		"desc": "After casting their Ability, your units restore @ManaRestore@ Mana.",
		"effects": {
			"ManaRestore": 10
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Blue-Battery-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Socialite Heart",
		"desc": "Your team counts as having 1 additional Socialite. ",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SocialiteHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Mutant Crest",
		"desc": "Gain a Mutant Emblem and a Kassadin.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MutantEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Very VIP",
		"desc": "When an ally dies, they grant the Debonair VIP @MaxHealth@% of their maximum Health for the rest of combat. Gain a Syndra.",
		"effects": {
			"MaxHealth": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/VVIP-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Bruiser Crest",
		"desc": "Gain a Bruiser Emblem and a Sejuani.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BruiserEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Lifelong Learning",
		"desc": "Scholars permanently gain @AP@ Ability Power after each combat, and an additional @BonusAP@ if they survived. Gain a Syndra.",
		"effects": {
			"AP": 2,
			"BonusAP": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/LifelongLearner1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Enchanter Heart",
		"desc": "Your team counts as having 1 additional Enchanter. Gain a Lulu.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/EnchanterHeart1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Radiant Relics",
		"desc": "Open an Armory and choose 1 of 4 unique Radiant items.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/RadiantRelic-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Backfoot III",
		"desc": "Your units that start combat in the back 2 rows gain @AS*100@% Attack Speed.",
		"effects": {
			"AS": 0.44999998807907104
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Backfoot-III-B.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Rich Get Richer",
		"desc": "Gain @Gold@ gold. Your maximum interest is increased to @InterestCap@.",
		"effects": {
			"Gold": 12,
			"InterestCap": 7
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/RichGetRicher2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Striker Crest",
		"desc": "Gain a Striker Emblem and a Rek'sai.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Striker-Crest.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Backfoot II",
		"desc": "Your units that start combat in the back 2 rows gain @AS*100@% Attack Speed.",
		"effects": {
			"AS": 0.30000001192092896
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Backfoot-II-B.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Backfoot I",
		"desc": "Your units that start combat in the back 2 rows gain @AS*100@% Attack Speed.",
		"effects": {
			"AS": 0.20000000298023224
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Backfoot-I-B.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Tri Force I",
		"desc": "Your 3-cost units gain @Health@ Health, @Mana@ starting Mana, and @AttackSpeed@% Attack Speed.",
		"effects": {
			"AttackSpeed": 23,
			"Health": 233,
			"Mana": 13
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Tri-Force-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Tri Force II",
		"desc": "Your 3-cost units gain @Health@ Health, @Mana@ starting Mana, and @AttackSpeed@% Attack Speed.",
		"effects": {
			"AttackSpeed": 33,
			"Health": 333,
			"Mana": 23
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Tri-Force-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Cutthroat",
		"desc": "Assassins Mana Reave the first unit they attack, increasing their maximum Mana by @ManaReavePercent@% until they cast. Gain a Talon.",
		"effects": {
			"ManaReavePercent": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cutthroat1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Tri Force III",
		"desc": "Your 3-cost units gain @Health@ Health, @Mana@ starting Mana, and @AttackSpeed@% Attack Speed.",
		"effects": {
			"AttackSpeed": 43,
			"Health": 433,
			"Mana": 33
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Tri-Force-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Bodyguard Crest",
		"desc": "Gain a Bodyguard Emblem and a Darius.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BodyguardEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Sunfire Board",
		"desc": "At the start of combat, burn all enemies for @TotalBurnPercent@% of their maximum Health over @Duration@ seconds and reduce healing received by @GrievousWoundsPercent@%.",
		"effects": {
			"Duration": 10,
			"GrievousWoundsPercent": 50,
			"TotalBurnPercent": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SunfireBoard2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Knife's Edge II",
		"desc": "Your units that start combat in the front 2 rows gain @ADPerStarLevel@ Attack Damage.",
		"effects": {
			"ADPerStarLevel": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CQCTraining2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Knife's Edge III",
		"desc": "Your units that start combat in the front 2 rows gain @ADPerStarLevel@ Attack Damage.",
		"effects": {
			"ADPerStarLevel": 55
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CQCTraining3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Chemtech Heart",
		"desc": "Your team counts as having 1 additional Chemtech. Gain a Warwick.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChemtechHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Knife's Edge I",
		"desc": "Your units that start combat in the front 2 rows gain @ADPerStarLevel@ Attack Damage.",
		"effects": {
			"ADPerStarLevel": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CQCTraining1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Scholar Heart",
		"desc": "Your team counts as having 1 additional Scholar. Gain a Zyra.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScholarHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Thieving Rascals",
		"desc": "Free Yordles from the portal have a @ItemChance@% chance to arrive holding an item component. Gain a Lulu.",
		"effects": {
			"{54c3c993}": 10,
			"{5f7516f7}": 4,
			"ItemChance": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Thieving-Rascals-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Self Repair",
		"desc": "When the Innovation dies, it will become untargetable and repair itself if an Innovator is still alive. Gain a Zilean.",
		"effects": {
			"{357f0e55}": 7
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SelfRepair1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Junkyard",
		"desc": "Gain a random component every @Combats@ combat rounds with the Scrap Trait active. Gain an Ezreal.",
		"effects": {
			"Combats": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Junkyard2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Weakspot I",
		"desc": "Your units' attacks ignore @ArmorPenPercent@% of the target's Armor and reduce healing received by @HealReductionPercent@% for @Duration@ seconds.",
		"effects": {
			"Duration": 5,
			"HealReductionPercent": 50,
			"ArmorPenPercent": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Weakspot1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Golden Gifts II",
		"desc": "Gain @NumGoldOrbs@ golden and @NumGrayOrbs@ gray loot orb(s).",
		"effects": {
			"NumGrayOrbs": 2,
			"NumGoldOrbs": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Golden-Gifts-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "The Golden Egg",
		"desc": "Gain a massive golden egg that hatches in @EggTurns@ turns.",
		"effects": {
			"EggTurns": 7
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/The-Golden-Egg-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Clockwork Soul",
		"desc": "Your team counts as having 2 additional Clockworks. Gain @Gold@ gold.",
		"effects": {
			"Gold": 8
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ClockworkSoul3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Golden Gifts I",
		"desc": "Gain @NumGoldOrbs@ golden and @NumGrayOrbs@ gray loot orb(s).",
		"effects": {
			"NumGrayOrbs": 1,
			"NumGoldOrbs": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Golden-Gifts-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Mercenary Soul",
		"desc": "Your team counts as having 2 additional Mercenaries.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MercenarySoul3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Spell Blade",
		"desc": "After casting their Ability, Arcanists' next attack deals bonus magic damage equal to @PercentAbilityPower@% of their Ability Power. Gain a Swain.",
		"effects": {
			"PercentAbilityPower": 200
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SpellBlade2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Archangel's Embrace",
		"desc": "Upon casting their Ability, your units gain Ability Power equal to @ManaPercent@% of their maximum Mana.",
		"effects": {
			"ManaPercent": 25
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Archangel-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Chemical Overload II",
		"desc": "Chemtechs explode on death, dealing @HP@% of their max Health as magic damage to enemies within 2 hexes. Gain a Zac.",
		"effects": {
			"HP": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChemicalOverlord2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Disintegrator III",
		"desc": "Your units' attacks deal bonus magic damage equal to @MaxHPDamage@% of the target's maximum Health.",
		"effects": {
			"MaxHPDamage": 4
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Disintegrator-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Chemical Overload I",
		"desc": "Chemtechs explode on death, dealing @HP@% of their max Health as magic damage to enemies within 2 hexes. Gain a Warwick.",
		"effects": {
			"HP": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChemicalOverlord1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Disintegrator II",
		"desc": "Your units' attacks deal bonus magic damage equal to @MaxHPDamage@% of the target's maximum Health.",
		"effects": {
			"MaxHPDamage": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Disintegrator-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Payday",
		"desc": "After winning your combat, gain @BonusGold@ bonus gold for each surviving Syndicate. Gain an Ashe.",
		"effects": {
			"BonusGold": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Payday1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Disintegrator I",
		"desc": "Your units' attacks deal bonus magic damage equal to @MaxHPDamage@% of the target's maximum Health.",
		"effects": {
			"MaxHPDamage": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Disintegrator-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Metabolic Accelerator",
		"desc": "Your Tactician moves faster and heals @Heal@ Health after a PvP round.",
		"effects": {
			"Heal": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MetabolicAccel2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Assassin Crown",
		"desc": "Gain 2 Assassin Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/AssassinEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Jeweled Lotus",
		"desc": "Magic and true damage from your units' Abilities can critically strike. Your units gain @CritChance@% Critical Strike Chance.",
		"effects": {
			"CritChance": 25
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Jeweled-Lotus-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Instant Injection",
		"desc": "Chemtechs now additionally trigger their bonuses at the start of combat. Gain a Warwick.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/InstantInjection2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Ancient Archives",
		"desc": "Gain @NumTomes@ Tome of Traits.",
		"effects": {
			"NumTomes": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/AncientArchives1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Chemtech Crest",
		"desc": "Gain a Chemtech Emblem and a Warwick.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChemtechEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "High Roller",
		"desc": "Gain @NumDice@ Loaded Dice and @Gold@ gold.",
		"effects": {
			"Gold": 8,
			"NumDice": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/GrandGambler3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Binary Airdrop",
		"desc": "Your champions equipped with 2 items temporarily gain a random completed item at the start of combat.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BinaryAirdrop2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Syndicate Heart",
		"desc": "Your team counts as having 1 additional Syndicate. Gain a Zyra.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SyndicateHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Ardent Censer",
		"desc": "Allies healed or shielded by Enchanters gain @AS@% stacking Attack Speed for the rest of combat (maximum once every @CD@ seconds). Gain a Lulu.",
		"effects": {
			"AS": 45,
			"CD": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ArdentCenser1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Arcane Crest",
		"desc": "Gain an Arcanist Emblem and a Swain.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ArcanistEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Mercenary Heart",
		"desc": "Your team counts as having 1 additional Mercenary.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MercenaryHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Luden's Echo II",
		"desc": "When your units cast and deal Ability damage, the first target hit and a nearby enemy take @MagicDamage@ bonus magic damage.",
		"effects": {
			"MagicDamage": 200,
			"{26a9a9b1}": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Ludens-Echo-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Luden's Echo III",
		"desc": "When your units cast and deal Ability damage, the first target hit and a nearby enemy take @MagicDamage@ bonus magic damage.",
		"effects": {
			"MagicDamage": 275,
			"{26a9a9b1}": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Ludens-Echo-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "One For All",
		"desc": "When your Syndicates die, they grant your other Syndicates @Stats@ Attack Damage and Ability Power. Gain an Ashe.",
		"effects": {
			"Stats": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/OneForAll1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Luden's Echo I",
		"desc": "When your units cast and deal Ability damage, the first target hit and a nearby enemy take @MagicDamage@ bonus magic damage.",
		"effects": {
			"MagicDamage": 135,
			"{26a9a9b1}": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Ludens-Echo-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Hyper Roll",
		"desc": "If you have less than @ThresholdGold@ gold at the end of a round, gain @Gold@ gold.",
		"effects": {
			"Gold": 2,
			"ThresholdGold": 10
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Hyperroll1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Wise Spending",
		"desc": "Gain @Gold@ gold. When you refresh your Shop, gain @XP@ experience point(s).",
		"effects": {
			"Gold": 4,
			"XP": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/WiseSpending3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Three's Company",
		"desc": "Gain @NumChamps@ random 3-cost champions.",
		"effects": {
			"NumChamps": 4
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Threes-Company-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Woodland Trinket",
		"desc": "At the start of combat, your highest Attack Speed champion creates two @CloneHealth@ Health copies of themself (excluding items).",
		"effects": {
			"CloneHealth": 250
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Woodland-Trinket-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Built Different III",
		"desc": "Your units with no Traits active gain @HP@ Health and @AS@% Attack Speed.",
		"effects": {
			"AS": 70,
			"HP": 500
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BuiltDifferent3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Stand Behind Me",
		"desc": "Bodyguards' Armor bonus is increased by @DefenseBonus@%. At the start of combat, Bodyguards grant @DefensePercent@% of their Armor bonus to non-Bodyguard allies directly behind them (does not stack). Gain a Blitzcrank.",
		"effects": {
			"DefenseBonus": 25,
			"DefensePercent": 100
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/StandBehind1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Share the Spotlight",
		"desc": "Allies adjacent to a spotlight at the start of combat gain @PercentStats@% of its bonuses. Gain a Senna.",
		"effects": {
			"PercentStats": 125
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ShareSpotlight3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Built Different II",
		"desc": "Your units with no Traits active gain @HP@ Health and @AS@% Attack Speed.",
		"effects": {
			"AS": 60,
			"HP": 400
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BuiltDifferent2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Future Sight",
		"desc": "Know who you will fight next. Gain a Zephyr.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Future-Sight-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Built Different I",
		"desc": "Your units with no Traits active gain @HP@ Health and @AS@% Attack Speed.",
		"effects": {
			"AS": 50,
			"HP": 300
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BuiltDifferent1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Component Grab Bag",
		"desc": "Gain @NumComponents@ random item components.",
		"effects": {
			"NumComponents": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ComponentGrabBag-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "High End Shopping",
		"desc": "Champions appear in your Shop as if you were 1 level higher. Gain @Gold@ gold.",
		"effects": {
			"Gold": 5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/HighEnd3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Sniper's Nest",
		"desc": "Snipers gain +@DamageAmp@% damage for each round fought from the same starting hex (Maximum +@MaxAmp@%). Gain an Ashe.",
		"effects": {
			"DamageAmp": 10,
			"MaxAmp": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SnipersNest1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Debonair Crest",
		"desc": "Gain a Debonair Emblem and a Syndra.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Debonair-Crest.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Meditation I",
		"desc": "Your units without items equipped restore @ManaRegen@ Mana per second.",
		"effects": {
			"ManaRegen": 5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Meditation-I-A.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Sniper Heart",
		"desc": "Your team counts as having 1 additional Sniper. Gain an Ashe.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SniperHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Meditation II",
		"desc": "Your units without items equipped restore @ManaRegen@ Mana per second.",
		"effects": {
			"ManaRegen": 7
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Meditation-II-A.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Celestial Blessing I",
		"desc": "Your units heal for @Omnivamp@% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to @MaxShield@ Health.",
		"effects": {
			"MaxShield": 300,
			"Omnivamp": 12
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CelestialBlessing1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Meditation III",
		"desc": "Your units without items equipped restore @ManaRegen@ Mana per second.",
		"effects": {
			"ManaRegen": 10
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Meditation-III-A.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Featherweights I",
		"desc": "Your 1 and 2 cost champions gain @AttackSpeed@% Attack Speed and Move Speed.",
		"effects": {
			"AttackSpeed": 25,
			"MoveSpeed": 350
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Featherweights1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Featherweights II",
		"desc": "Your 1 and 2 cost champions gain @AttackSpeed@% Attack Speed and Move Speed.",
		"effects": {
			"AttackSpeed": 35,
			"MoveSpeed": 550
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Featherweights2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Celestial Blessing III",
		"desc": "Your units heal for @Omnivamp@% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to @MaxShield@ Health.",
		"effects": {
			"MaxShield": 600,
			"Omnivamp": 35
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CelestialBlessing3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Featherweights III",
		"desc": "Your 1 and 2 cost champions gain @AttackSpeed@% Attack Speed and Move Speed.",
		"effects": {
			"AttackSpeed": 55,
			"MoveSpeed": 700
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Featherweights3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Celestial Blessing II",
		"desc": "Your units heal for @Omnivamp@% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to @MaxShield@ Health.",
		"effects": {
			"MaxShield": 450,
			"Omnivamp": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/CelestialBlessing2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Woodland Charm",
		"desc": "At the start of combat, your highest Health Champion creates a @CloneHealth@ Health copy of themself (excluding items).",
		"effects": {
			"CloneHealth": 1600
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/WoodlandCharm3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Mercenary Crest",
		"desc": "Gain a Mercenary Emblem and @Gold@ gold.",
		"effects": {
			"Gold": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MercenaryEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Sniper Crest",
		"desc": "Gain a Sniper Emblem and an Ashe.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SniperEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Broken Stopwatch",
		"desc": "@Delay@ seconds into combat, all enemies and non-Clockwork units are frozen in time for @StunDuration@ seconds. Gain a Zilean.",
		"effects": {
			"StunDuration": 4,
			"Delay": 5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BrokenStopwatch2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Syndicate Crest",
		"desc": "Gain a Syndicate Emblem and a Zyra.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SyndicateEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Cybernetic Uplink I",
		"desc": "Your champions holding an item gain @Health@ Health and restore @ManaRegen@ Mana per second.",
		"effects": {
			"Health": 150,
			"ManaRegen": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic-Uplink-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Gold Reserves",
		"desc": "Mercenaries deal @PercentDamage*100@% more damage per @GoldIncrement@ gold you have (Maximum +@DamageCap@%). Gain a Quinn.",
		"effects": {
			"PercentDamage": 0.019999999552965164,
			"DamageCap": 50,
			"GoldIncrement": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/GoldReserves2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Challenger Heart",
		"desc": "Your team counts as having 1 additional Challenger. Gain a Quinn.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChallengerHeart1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Cybernetic Uplink III",
		"desc": "Your champions holding an item gain @Health@ Health and restore @ManaRegen@ Mana per second.",
		"effects": {
			"Health": 350,
			"ManaRegen": 4
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic-Uplink-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Cybernetic Uplink II",
		"desc": "Your champions holding an item gain @Health@ Health and restore @ManaRegen@ Mana per second.",
		"effects": {
			"Health": 250,
			"ManaRegen": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Cybernetic-Uplink-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Tinker",
		"desc": "Gain a Magnetic Remover or Reforger every @Combats@ combat round(s) with the Scrap trait active.",
		"effects": {
			"Combats": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Tinker1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Recombobulator",
		"desc": "Champions on your board permanently transform into random champions that cost 1 more. Gain @NumRemovers@ Magnetic Removers.",
		"effects": {
			"NumRemovers": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Recombobulator-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Second Wind II",
		"desc": "After @Delay@ seconds of combat, your units heal @HealPercent@% of their missing Health.",
		"effects": {
			"HealPercent": 75,
			"Delay": 10
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Second--Wind-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Second Wind III",
		"desc": "After @Delay@ seconds of combat, your units heal @HealPercent@% of their missing Health.",
		"effects": {
			"HealPercent": 100,
			"Delay": 10
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Second-Wind-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Tiny Titans",
		"desc": "Your Tactician heals @Heal@ Health, grows larger, and has @TooltipMaxHealth@ maximum Health.",
		"effects": {
			"Heal": 35,
			"TooltipMaxHealth": 135
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Tiny-Titans-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Second Wind I",
		"desc": "After @Delay@ seconds of combat, your units heal @HealPercent@% of their missing Health.",
		"effects": {
			"HealPercent": 50,
			"Delay": 10
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Second--Wind-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Striker Crown",
		"desc": "Gain 2 Striker Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Striker-Crown.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "En Garde",
		"desc": "The first time an enemy is attacked by a Challenger, they are Disarmed for @DisarmDuration@ seconds. Gain a Warwick.",
		"effects": {
			"DisarmDuration": 2.5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/EnGuarde1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Titanic Force",
		"desc": "Your units with more than @HealthThreshold@ maximum Health gain Attack Damage equal to @HealthPercent*100@% of their maximum Health.",
		"effects": {
			"HealthPercent": 0.029999999329447746,
			"HealthThreshold": 1400
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/TitanicForce2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Chemtech Crown",
		"desc": "Gain 2 Chemtech Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChemtechEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Band of Thieves",
		"desc": "Gain @NumGloves@ Thief's Gloves.",
		"effects": {
			"NumGloves": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/BandThieves3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Scrap Heart",
		"desc": "Your team counts as having 1 additional Scrap. Gain a Blitzcrank.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScrapHeart1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Battlemage I",
		"desc": "Your units that start combat in the front 2 rows gain @AP@ Ability Power.",
		"effects": {
			"AP": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Battlemage-I-A.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Battlemage II",
		"desc": "Your units that start combat in the front 2 rows gain @AP@ Ability Power.",
		"effects": {
			"AP": 45
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Battlemage-II-A.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Challenger Crest",
		"desc": "Gain a Challenger Emblem and a Quinn.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ChallengerEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Battlemage III",
		"desc": "Your units that start combat in the front 2 rows gain @AP@ Ability Power.",
		"effects": {
			"AP": 60
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Battlemage-III-A.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Mutant Heart",
		"desc": "Your team counts as having 1 additional Mutant. Gain a Rek'Sai.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MutantHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Hextech Crown",
		"desc": "Gain 2 Hextech Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Hextech-Crown.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Makeshift Armor I",
		"desc": "Your units with no items gain @Resists@ Armor and Magic Resist.",
		"effects": {
			"Resists": 35
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Makeshift1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Windfall",
		"desc": "Gain gold based on the number of augments you have now.<br>0 = @Augment1Gold@g, 1 = @Augment2Gold@g, 2 = @Augment3Gold@g",
		"effects": {
			"Augment3Gold": 45,
			"Augment1Gold": 18,
			"Augment2Gold": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Windfall3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Sharpshooter",
		"desc": "Twinshot's ranged attacks and Abilities can bounce once, dealing @BounceReduction@% less damage. Gain a Corki.",
		"effects": {
			"BounceReduction": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Sharpshooter2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Treasure Trove III",
		"desc": "Gain @NumBlueOrbs@ blue and @NumGrayOrbs@ gray loot orb(s).",
		"effects": {
			"NumGrayOrbs": 2,
			"NumBlueOrbs": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Treasure-Trove-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Makeshift Armor III",
		"desc": "Your units with no items gain @Resists@ Armor and Magic Resist.",
		"effects": {
			"Resists": 80
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Makeshift3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Treasure Trove II",
		"desc": "Gain @NumBlueOrbs@ blue and @NumGrayOrbs@ gray loot orb(s).",
		"effects": {
			"NumGrayOrbs": 2,
			"NumBlueOrbs": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Treasure-Trove-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Makeshift Armor II",
		"desc": "Your units with no items gain @Resists@ Armor and Magic Resist.",
		"effects": {
			"Resists": 55
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Makeshift2.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Scholar Soul",
		"desc": "Your team counts as having 2 additional Scholars. Gain @Gold@ gold.",
		"effects": {
			"Gold": 8
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScholarSoul3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Scrap Soul",
		"desc": "Your team counts as having 2 additional Scraps. Gain @Gold@ gold.",
		"effects": {
			"Gold": 8
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScrapSoul3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Treasure Trove I",
		"desc": "Gain @NumBlueOrbs@ blue and @NumGrayOrbs@ gray loot orb(s).",
		"effects": {
			"NumGrayOrbs": 1,
			"NumBlueOrbs": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Treasure-Trove-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Hexnova",
		"desc": "The first time a Hextech champion drops below @HealthThreshold@% Health, they increase nearby enemies' maximum Mana by @PercentManaReave@% until they cast. Gain a Nocturne.",
		"effects": {
			"HealthThreshold": 60,
			"{5cc52ba8}": 1,
			"PercentManaReave": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Hexnova-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Golden Ticket",
		"desc": "Each time your Shop is refreshed, you have a @RerollPercent@% chance to gain a free refresh.",
		"effects": {
			"RerollPercent": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/GoldenTicket3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Level Up!",
		"desc": "When you buy experience points, gain an additional @XP@. You can now reach level 10.",
		"effects": {
			"XP": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/LevelUp3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "So Small",
		"desc": "Yordles gain @DodgeIncrease@% Dodge Chance. Gain a Corki.",
		"effects": {
			"DodgeIncrease": 35
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SoSmall1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Mutant Crown",
		"desc": "Gain 2 Mutant Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/MutantEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "New Recruit",
		"desc": "Gain +@MaxArmySizeIncrease@ maximum team size.",
		"effects": {
			"MaxArmySizeIncrease": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/NewRecruit3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Enforcer Heart",
		"desc": "Your team counts as having 1 additional Enforcer. Gain a Sejuani.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/EnforcerHeart1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Item Grab Bag II",
		"desc": "Gain @NumItems@ random completed items and a Reforger.",
		"effects": {
			"NumItems": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ItemGrabBag3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Overpower",
		"desc": "After every @NumAttacks@ attacks, Strikers gain @CritChance@% Critical Strike Chance for their next attack. Gain a Rek'sai.",
		"effects": {
			"CritChance": 75,
			"NumAttacks": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Overpowered-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Item Grab Bag I",
		"desc": "Gain @NumItems@ random completed item.",
		"effects": {
			"NumItems": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ItemGrabBag1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Pandora's Items",
		"desc": "Gain a random component. At the start of each round, items on your bench are randomized (excluding Tactician's Crown, Spatula, and consumables).",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Pandora1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Sniper Crown",
		"desc": "Gain 2 Sniper Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SniperEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Innovator Heart",
		"desc": "Your team counts as having 1 additional Innovator.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/InnovatorHeart1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Verdant Veil",
		"desc": "Your units are immune to crowd control effects for the first @Duration@ seconds of combat.",
		"effects": {
			"Duration": 15
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Verdant-Veil-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "March of Progress",
		"desc": "Gain @Exp@ bonus experience points per round. You can no longer use gold to level up.",
		"effects": {
			"EXP": 5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SlowAndSteady3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Challenger Unity",
		"desc": "The Challenger trait grants its bonuses to all of your Champions. This does not increase your number of Challengers. Gain a Quinn.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Study-the-Blade-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Ascension",
		"desc": "After @Delay@ seconds of combat, your units deal @DamageAmp@% more damage.",
		"effects": {
			"DamageAmp": 50,
			"Delay": 15
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Ascension1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Hextech Heart",
		"desc": "Your team counts as having 1 additional Hextech. Gain a Swain.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Hextech-Heart.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Twinshot Soul",
		"desc": "Your team counts as having 2 additional Twinshots. Gain @Gold@ gold.",
		"effects": {
			"Gold": 8
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/TwinshotSoul3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Armor Plating",
		"desc": "Colossus become invulnerable for @InvulnDuration@ seconds when their Health drops to @HealthThreshold1@%. Gain a Cho'Gath.",
		"effects": {
			"InvulnDuration": 3,
			"HealthThreshold1": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ArmorPlating2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Debonair Crown",
		"desc": "Gain 2 Debonair Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Debonair-Crown.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "Socialite Soul",
		"desc": "Your team counts as having 2 additional Socialites.",
		"effects": {
			"Gold": 8
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SocialiteSoul3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Thrill of the Hunt I",
		"desc": "Your units heal @MissingHPHeal@ Health on kill.",
		"effects": {
			"MissingHPHeal": 400
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ThrillHunt1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Thrill of the Hunt II",
		"desc": "Your units heal @MissingHPHeal@ Health on kill.",
		"effects": {
			"MissingHPHeal": 700
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ThrillHunt2.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Smoke Bomb",
		"desc": "The first time an Assassin drops to @HealthThreshold@% health, they briefly enter stealth, becoming untargetable and shedding all negative effects. Any excess damage is reduced by @DamageReduction@%. Gain a Talon.",
		"effects": {
			"DamageReduction": 80,
			"HealthThreshold": 60,
			"{b1442c34}": 1.5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Smokebomb2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Assassin Heart",
		"desc": "Your team counts as having 1 additional Assassin. Gain a Talon.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/AssassinHeart1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "True Twos",
		"desc": "Gain 2 random 2-star 2-cost units.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/True-Twos-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Exiles II",
		"desc": "Your units that start combat with no adjacent allies gain a @MaxHealthShield@% maximum Health shield for @ShieldDuration@ seconds.",
		"effects": {
			"ShieldDuration": 8,
			"MaxHealthShield": 45
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Exiles2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Phony Frontline",
		"desc": "Gain @NumDummies@ Target Dummies.",
		"effects": {
			"NumDummies": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/PhonyFrontline1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Exiles III",
		"desc": "Your units that start combat with no adjacent allies gain a @MaxHealthShield@% maximum Health shield for @ShieldDuration@ seconds.",
		"effects": {
			"ShieldDuration": 8,
			"MaxHealthShield": 70
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Exiles3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Stand United III",
		"desc": "Your units gain @Resists@ Attack Damage and Ability Power per Trait active across your army.",
		"effects": {
			"Resists": 5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/StandUnited3.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Swift Justice",
		"desc": "Your Enforcers deal true damage to enemies below @HealthThreshold@% Health. Gain a Sejuani.",
		"effects": {
			"HealthThreshold": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Swift-Justice-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Stand United II",
		"desc": "Your units gain @Resists@ Attack Damage and Ability Power per Trait active across your army.",
		"effects": {
			"Resists": 3
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/StandUnited2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Stand United I",
		"desc": "Your units gain @Resists@ Attack Damage and Ability Power per Trait active across your army.",
		"effects": {
			"Resists": 2
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/StandUnited1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Debonair Heart",
		"desc": "Your team counts as having 1 additional Debonair. Gain a Talon.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Debonair-Heart.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Striker Heart",
		"desc": "Your team counts as having 1 additional Striker. Gain a Rek'Sai.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Striker-Heart.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Irresistible Charm",
		"desc": "Debonair champions take @DamageReduction@% less damage. Gain a Leona.",
		"effects": {
			"DamageReduction": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Irresistible-Charm-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Runic Shield I",
		"desc": "Arcanists start combat with a shield equal to @APShield@% of their Ability Power for @ShieldDuration@ seconds. Gain a Swain.",
		"effects": {
			"ShieldDuration": 8,
			"APShield": 300
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/RunicShield1.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Runic Shield II",
		"desc": "Arcanists start combat with a shield equal to @APShield@% of their Ability Power for @ShieldDuration@ seconds. Gain a Vex.",
		"effects": {
			"ShieldDuration": 8,
			"APShield": 450
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/RunicShield2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Hextech Unity",
		"desc": "The Hextech trait grants its bonuses to all of your Champions. This does not increase your number of Hextech units. Gain a Sejuani.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Hextech-Armory-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Syndicate Crown",
		"desc": "Gain 2 Syndicate Emblems.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/SyndicateEmblem3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Four Score",
		"desc": "Gain 3 random 4-cost champions.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Four-Score-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Scholar Crest",
		"desc": "Gain a Scholar Emblem and a Zyra.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScholarEmblem2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Pirates",
		"desc": "Mercenary units have a @Chance@% chance to drop @Gold@ gold when they kill an enemy. Gain a Quinn.",
		"effects": {
			"Gold": 1,
			"Chance": 50
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Pirates1.TFT_Set6.dds"
	}
]

export const inactiveAugments: AugmentData[] = [
	{
		"tier": 3,
		"name": "Divine Intervention",
		"desc": "Gain a Radiant Blessing loot orb.",
		"effects": {},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T3.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Archangel's Embrace III",
		"desc": "Upon casting their Ability, your units gain Ability Power equal to @ManaPercent@% of their maximum Mana.",
		"effects": {
			"ManaPercent": 35
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Archangel-III.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Archangel's Embrace I",
		"desc": "Upon casting their Ability, your units gain Ability Power equal to @ManaPercent@% of their maximum Mana.",
		"effects": {
			"ManaPercent": 15
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Archangel-I.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 3,
		"name": "High Five",
		"desc": "Gain @NumChamps@ random 5-cost champions.",
		"effects": {
			"NumChamps": 5
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/High-Five.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 2,
		"name": "Radiant Grab Bag",
		"desc": "Gain @NumItems@ random Radiant item(s).",
		"effects": {
			"NumItems": 1
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Radiant-Grab-Bag-II.TFT_Set6_Stage2.dds"
	},
	{
		"tier": 1,
		"name": "Scoped Weapons",
		"desc": "Double the hex range of your <b>ranged</b> units, and their attacks cannot miss.",
		"effects": {
			"{16394c87}": 100
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/ScopedWeapons1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "At Odds II",
		"desc": "Your 1, 3, and 5-cost units gain @Stats@ Attack Damage and Ability Power.",
		"effects": {
			"Stats": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "At Odds II",
		"desc": "Your 1, 3, and 5-cost units gain @Stats@ Attack Damage and Ability Power.",
		"effects": {
			"Stats": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T2.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "At Odds I",
		"desc": "Your 1, 3, and 5-cost units gain @Stats@ Attack Damage and Ability Power.",
		"effects": {
			"Stats": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T1.TFT_Set6.dds"
	},
	{
		"tier": 1,
		"name": "Break Even I",
		"desc": "Your 2 and 4-cost units gain @Stats@ Attack Damage and Ability Power.",
		"effects": {
			"Stats": 20
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T1.TFT_Set6.dds"
	},
	{
		"tier": 3,
		"name": "Break Even III",
		"desc": "Your 2 and 4-cost units gain @Stats@ Attack Damage and Ability Power.",
		"effects": {
			"Stats": 40
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T3.TFT_Set6.dds"
	},
	{
		"tier": 2,
		"name": "Break Even II",
		"desc": "Your 2 and 4-cost units gain @Stats@ Attack Damage and Ability Power.",
		"effects": {
			"Stats": 30
		},
		"icon": "ASSETS/Maps/Particles/TFT/Item_Icons/Augments/Hexcore/Missing-T2.TFT_Set6.dds"
	}
]