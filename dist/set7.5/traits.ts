import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set7_Assassin`,
		desc: `Innate: Leap to the enemy backline when combat starts.<br><br>Assassins' Abilities can critically strike and they gain bonus Critical Strike Chance and bonus Critical Strike Damage.<br><br><expandRow>(@MinUnits@) +@CritChance@% Crit Chance and +@CritDamage@% Crit Damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'CritDamage': 10,
					'CritChance': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'CritDamage': 25,
					'CritChance': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'CritDamage': 75,
					'CritChance': 75,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_6_Assassin.tex`,
		name: `Assassin`,
	},
	{
		apiName: `Set7_Astral`,
		desc: `After each player combat, gain an Astral Orb. The total star level of your Astral champions increases the orb quality.<br><br>Astral champions gain bonus Ability Power. <br><br><row>(@MinUnits@) @AP@ Ability Power</row><br><row>(@MinUnits@) @AP@ Ability Power</row><br><row>(@MinUnits@) @AP@ Ability Power</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{246b675b}': 1,
					'{41233bac}': 4,
					'AP': 5,
				},
			},
			{
				maxUnits: 7,
				minUnits: 5,
				style: 3,
				variables: {
					'{246b675b}': 1,
					'{41233bac}': 4,
					'AP': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'{246b675b}': 1,
					'{41233bac}': 4,
					'AP': 75,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Astral.tex`,
		name: `Astral`,
	},
	{
		apiName: `Set7_Bard`,
		desc: `(@MinUnits@) Allies that survive player combat have a @DropChancePercent@% chance to create a Doot. Bard always creates a Doot when dancing.<br><br>Each Doot you collect increases your Shop odds for higher-tier champions by 1%. `,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'{b8705dd9}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Bard.tex`,
		name: `Bard`,
	},
	{
		apiName: `Set7_Bruiser`,
		desc: `Your team gains bonus maximum HP. Bruisers gain double this bonus.<br><br><expandRow>(@MinUnits@) @BonusHP@ HP</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusHP': 180,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusHP': 375,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusHP': 700,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusHP': 1500,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_6_Bruiser.tex`,
		name: `Bruiser`,
	},
	{
		apiName: `Set7_Cannoneer`,
		desc: `Every 5th attack fires a cannon shot that explodes for physical damage around the target.<br><br><expandRow>(@MinUnits@) @AttackPercent*100@% Attack Damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{ff57f232}': 1.5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{ff57f232}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{ff57f232}': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Cannoneer.tex`,
		name: `Cannoneer`,
	},
	{
		apiName: `Set7_Cavalier`,
		desc: `Innate: Charge quickly towards their target whenever they move.<br><br>Cavaliers gain Armor and Magic Resist. At the start of combat and after each charge, gain @ChargeIncreasePct@% the amount for @Duration@ seconds. <br><br><expandRow>(@MinUnits@) @Armor@ Armor, @MR@ Magic Resist</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'Armor': 35,
					'Duration': 4,
					'MR': 35,
					'{c51d362c}': 200,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'Armor': 50,
					'Duration': 4,
					'MR': 50,
					'{c51d362c}': 200,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'Armor': 65,
					'Duration': 4,
					'MR': 65,
					'{c51d362c}': 200,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'Armor': 85,
					'Duration': 4,
					'MR': 85,
					'{c51d362c}': 200,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'Armor': 110,
					'Duration': 4,
					'MR': 110,
					'{c51d362c}': 200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Cavalry.tex`,
		name: `Cavalier`,
	},
	{
		apiName: `Set7_Darkflight`,
		desc: `Summon a sacrificial altar. Combat start: the unit placed on the altar is sacrificed, granting a copy of one of the items and bonus HP to each Darkflight champion.<br><br><tftitemrules> Emblems and non-craftable items are corrupted when they're copied, instead becoming Darkflight Essence.</tftitemrules><br><br><expandRow>(@MinUnits@) @BonusHP@ HP</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusHP': 500,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusHP': 750,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusHP': 1000,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusHP': 1600,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Darkflight.TFT_Set7_Stage2.tex`,
		name: `Darkflight`,
	},
	{
		apiName: `Set7_Dragon`,
		desc: `Innate: Require 2 team slots. <br><br>Dragons provide +3 to the marked trait, and gain additional bonuses based on how many Dragons are on your team. <br><br><row>(@MinUnits@) @BonusHP@ bonus HP</row><br><row>(@MinUnits@) and @Defenses@ Armor and Magic Resist</row><br><row>(@MinUnits@) and @PercentBonusDamage*100@% bonus damage</row><br><row>(@MinUnits@) and +@TeamSizeIncrease@ to team size</row><br><row>(@MinUnits@) and heal @Healing@ HP every second</row><br><row>(@MinUnits@) and your Dragons ascend!</row>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'AS': null,
					'BonusHP': 500,
					'Healing': null,
					'{002b5c4d}': null,
					'{0bca9660}': null,
					'{0c95b70d}': null,
					'{cb6b5298}': null,
				},
			},
			{
				maxUnits: 2,
				minUnits: 2,
				style: 3,
				variables: {
					'AS': null,
					'BonusHP': 500,
					'Healing': null,
					'{002b5c4d}': null,
					'{0bca9660}': 20,
					'{0c95b70d}': null,
					'{cb6b5298}': null,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'AS': null,
					'BonusHP': 500,
					'Healing': null,
					'{002b5c4d}': null,
					'{0bca9660}': 20,
					'{0c95b70d}': null,
					'{cb6b5298}': 0.10000000149011612,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'AS': null,
					'BonusHP': 500,
					'Healing': null,
					'{002b5c4d}': null,
					'{0bca9660}': 20,
					'{0c95b70d}': 1,
					'{cb6b5298}': 0.10000000149011612,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'AS': 0.10000000149011612,
					'BonusHP': 500,
					'Healing': 40,
					'{002b5c4d}': null,
					'{0bca9660}': 20,
					'{0c95b70d}': 1,
					'{cb6b5298}': 0.10000000149011612,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'AS': 0.10000000149011612,
					'BonusHP': 500,
					'Healing': 40,
					'{002b5c4d}': 30,
					'{0bca9660}': 20,
					'{0c95b70d}': 1,
					'{cb6b5298}': 0.10000000149011612,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Dragon.tex`,
		name: `Dragon`,
	},
	{
		apiName: `Set7_Dragonmancer`,
		desc: `Use the Dragonmancer Blessing item to choose a Hero. The Hero gains massively increased HP and Ability Power, which increases by @StatIncreasePercent@% per star level of your Dragonmancers.<br><br><expandRow>(@MinUnits@) +@BonusHP@ HP, +@BonusAP@ Ability Power </expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusHP': 275,
					'{89626cbc}': 20,
					'BonusAP': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusHP': 575,
					'{89626cbc}': 20,
					'BonusAP': 40,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusHP': 775,
					'{89626cbc}': 20,
					'BonusAP': 50,
				},
			},
			{
				maxUnits: 999,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusHP': 1000,
					'{89626cbc}': 20,
					'BonusAP': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Dragonmancer.tex`,
		name: `Dragonmancer`,
	},
	{
		apiName: `Set7_Evoker`,
		desc: `Evokers gain Mana whenever an ally or enemy casts an Ability.<br><br><expandRow>(@MinUnits@) @ManaAmount@ Mana</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{af2150c6}': 5,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'{af2150c6}': 8,
				},
			},
			{
				maxUnits: 999,
				minUnits: 4,
				style: 4,
				variables: {
					'{af2150c6}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Evoker.tex`,
		name: `Evoker`,
	},
	{
		apiName: `Set7_Guardian`,
		desc: `Once per combat at @HPThreshold@% HP, Guardians shield themselves and their closest ally for a percent of their maximum HP. Shields stack!<br><br><expandRow> (@MinUnits@) @ShieldPercentAmount@% of max HP shield</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 60,
					'HPThreshold': 50,
					'{a77cf7ad}': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 60,
					'HPThreshold': 50,
					'{a77cf7ad}': 40,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 60,
					'HPThreshold': 50,
					'{a77cf7ad}': 80,
				},
			},
			{
				maxUnits: 999,
				minUnits: 8,
				style: 5,
				variables: {
					'Duration': 60,
					'HPThreshold': 50,
					'{a77cf7ad}': 130,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Guardian.tex`,
		name: `Guardian`,
	},
	{
		apiName: `Set7_Guild`,
		desc: `Grant a unique bonus to your team; Guild members gain double the amount. Increases for each Guild member in play!<br><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveSejuani alternate=TFTGuildInactive>Sejuani: +@TFTUnitProperty.trait:TFT7_Trait_Guild_SejuaniBonus@ HP</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveTwitch alternate=TFTGuildInactive>Twitch: +@TFTUnitProperty.trait:TFT7_Trait_Guild_TwitchBonus@% Attack Speed</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveDragon alternate=TFTGuildInactive>Zippy: +@TFTUnitProperty.trait:TFT7_Trait_Guild_DragonBonus@ Armor and Magic Resist</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveJayce alternate=TFTGuildInactive>Jayce: +@TFTUnitProperty.trait:TFT7_Trait_Guild_JayceBonus@ Attack Damage and Ability Power</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveBard alternate=TFTGuildInactive>Bard: +@TFTUnitProperty.trait:TFT7_Trait_Guild_BardBonus@ Mana per attack</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveEmblem alternate=TFTGuildInactive>Emblem: +@TFTUnitProperty.trait:TFT7_Trait_Guild_EmblemBonus@% Omnivamp</TFTGuildActive><br><br><expandRow>(@MinUnits@) @Multiplier@% Guild bonus</expandRow><br><br><br><br>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'{f506c7e6}': 100,
				},
			},
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{f506c7e6}': 110,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'{f506c7e6}': 120,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'{f506c7e6}': 130,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 3,
				variables: {
					'{f506c7e6}': 140,
				},
			},
			{
				maxUnits: 6,
				minUnits: 6,
				style: 3,
				variables: {
					'{f506c7e6}': 150,
				},
			},
			{
				maxUnits: 7,
				minUnits: 7,
				style: 4,
				variables: {
					'{f506c7e6}': 160,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'{f506c7e6}': 175,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Guild.tex`,
		name: `Guild`,
	},
	{
		apiName: `Set7_Jade`,
		desc: `Summon movable Jade Statues that grow in power. <br><br>Each combat, allies who start combat adjacent to a statue gain maximum HP healing every @Interval@ seconds and bonus Attack Speed. When a statue is destroyed, it deals @PercentHP@% of its HP as magic damage to nearby enemies.<br><br><row>(@MinUnits@) 1 statue, +@HPRegen@% healing, +@AS*100@% Attack Speed</row><br><row>(@MinUnits@) 2 statues, +@HPRegen@% healing, +@AS*100@% Attack Speed</row><br><row>(@MinUnits@) 3 statues, +@HPRegen@% healing, +@AS*100@% Attack Speed</row><br><row>(@MinUnits@) 4 statues, +@HPRegen@% healing, +@AS*100@% Attack Speed</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'AS': 0.10000000149011612,
					'HPRegen': 2,
					'PercentHP': 33,
					'{25dee9e0}': 1,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'AS': 0.2199999988079071,
					'HPRegen': 3,
					'PercentHP': 33,
					'{25dee9e0}': 2,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'AS': 0.550000011920929,
					'HPRegen': 5,
					'PercentHP': 33,
					'{25dee9e0}': 3,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'AS': 0.8799999952316284,
					'HPRegen': 8,
					'PercentHP': 33,
					'{25dee9e0}': 4,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Jade.tex`,
		name: `Jade`,
	},
	{
		apiName: `Set7_Lagoon`,
		desc: `Summon a Seastone which grants loot based on the number of Abilities cast by Lagoon champions over time. Lagoon champions also gain Ability Power and Attack Speed.<br><br><expandRow>(@MinUnits@) @AP@ Ability Power, @AS*100@% Attack Speed</expandRow><br><br>Total casts: <active>@TFTUnitProperty.trait:TFT7_LagoonCount@</active><br>Gold granted: <active>@TFTUnitProperty.trait:TFT7_LagoonRewardCountGold@</active><br>Rewards granted: <active>@TFTUnitProperty.trait:TFT7_LagoonRewardCount@</active>@TFTUnitProperty.trait:TFT_Modes_TRA1@`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'AS': 0.07999999821186066,
					'AP': 8,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'AS': 0.30000001192092896,
					'AP': 30,
				},
			},
			{
				maxUnits: 11,
				minUnits: 9,
				style: 4,
				variables: {
					'AS': 0.550000011920929,
					'AP': 55,
				},
			},
			{
				maxUnits: 999,
				minUnits: 12,
				style: 5,
				variables: {
					'AS': 2,
					'AP': 200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Lagoon.TFT_Set7_Stage2.tex`,
		name: `Lagoon`,
	},
	{
		apiName: `Set7_Mage`,
		desc: `Mages cast twice and have modified total Ability Power.<br><br><expandRow>(@MinUnits@) @APMultiplier*100@% Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{2afd498b}': 0.800000011920929,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'{2afd498b}': 1.0499999523162842,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'{2afd498b}': 1.350000023841858,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'{2afd498b}': 1.9500000476837158,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mage.tex`,
		name: `Mage`,
	},
	{
		apiName: `Set7_Mirage`,
		desc: `Mirage champions gain a different Trait bonus from game to game.`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{03907b27}': 40,
					'{2c8fe3dc}': 2,
					'{34a68396}': 20,
					'{48ffe45c}': 20,
					'{67deaf34}': 10,
					'{7845f61e}': 5,
					'{7fb6d810}': 50,
					'{835c3290}': 6,
					'{9ea1c8a7}': 50,
					'{b04db727}': 200,
					'{bd0f4998}': 9,
					'{e32ac3a7}': 20,
					'{f25ff422}': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{03907b27}': 65,
					'{2c8fe3dc}': 4,
					'{34a68396}': 33,
					'{48ffe45c}': 30,
					'{67deaf34}': 10,
					'{7845f61e}': 8,
					'{7fb6d810}': 50,
					'{835c3290}': 12,
					'{9ea1c8a7}': 65,
					'{b04db727}': 300,
					'{bd0f4998}': 9,
					'{e32ac3a7}': 30,
					'{f25ff422}': 10,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'{03907b27}': 65,
					'{2c8fe3dc}': 6,
					'{34a68396}': 50,
					'{48ffe45c}': 45,
					'{67deaf34}': 10,
					'{7845f61e}': 12,
					'{7fb6d810}': 50,
					'{835c3290}': 20,
					'{9ea1c8a7}': 80,
					'{b04db727}': 450,
					'{bd0f4998}': 9,
					'{e32ac3a7}': 40,
					'{f25ff422}': 10,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'{03907b27}': 110,
					'{2c8fe3dc}': 8,
					'{34a68396}': 100,
					'{48ffe45c}': 60,
					'{67deaf34}': 10,
					'{7845f61e}': 20,
					'{7fb6d810}': 50,
					'{835c3290}': 30,
					'{9ea1c8a7}': 100,
					'{b04db727}': 600,
					'{bd0f4998}': 9,
					'{e32ac3a7}': 50,
					'{f25ff422}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Mirage.tex`,
		name: `Mirage`,
	},
	{
		apiName: `Set7_Monolith`,
		desc: `(@MinUnits@) Terra empowers 3 hexes on the battlefield. Combat start: units standing in the hex at the start of combat gain @DamageReductionPercent@% damage reduction.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'{5064373e}': 18,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Monolith.TFT_Set7_Stage2.tex`,
		name: `Monolith`,
	},
	{
		apiName: `Set7_Mystic`,
		desc: `Your team gains Magic Resist. <br><br><expandRow>(@MinUnits@) @MR@ Magic Resist</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'MR': 40,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'MR': 80,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'MR': 150,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 5,
				variables: {
					'MR': 300,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mystic.tex`,
		name: `Mystic`,
	},
	{
		apiName: `Set7_Prodigy`,
		desc: `(@MinUnits@) Nomsy gains a random trait each game. She summons a former Trainer to aid her in battle, who also gains this trait.<br><br>Trainers' Ability Power is always equal to Nomsy's Ability Power. When Nomsy dies, Trainers gain @AS*100@% Attack Speed.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'AS': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Prodigy.TFT_Set7_Stage2.tex`,
		name: `Prodigy`,
	},
	{
		apiName: `Set7_Ragewing`,
		desc: `Innate: Convert Mana to Rage; attacks generate 15 Rage. After casting an Ability, enrage for 4 seconds: 25% Attack Speed but can't gain Rage.<br><br>Gain stats when enraged:<br><br><row>(@MinUnits@) @ASPercent@% Attack Speed and @Omnivamp@% Omnivamp (healing for a percentage of damage dealt)</row><br><row>(@MinUnits@) @ASPercent@% Attack Speed and @Omnivamp@% Omnivamp</row><br><row>(@MinUnits@) @ASPercent@% Attack Speed and @Omnivamp@% Omnivamp</row><br><row>(@MinUnits@) @ASPercent@% Attack Speed and @Omnivamp@% Omnivamp</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AAPercent': 50,
					'OmniVamp': 15,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AAPercent': 100,
					'OmniVamp': 30,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'AAPercent': 150,
					'OmniVamp': 45,
				},
			},
			{
				maxUnits: 999,
				minUnits: 8,
				style: 4,
				variables: {
					'AAPercent': 325,
					'OmniVamp': 85,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Ragewing.tex`,
		name: `Ragewing`,
	},
	{
		apiName: `Set7_Scalescorn`,
		desc: `Scalescorn champions take @PercentDamageReduction@% reduced damage from enemies with more than @HPThreshold@ HP, and they also deal a percent of their damage as additional magic damage.<br><br><expandRow>(@MinUnits@) @PercentBonusDamage@% magic damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'HPThreshold': 1900,
					'{bdd452e8}': 15,
					'{cb6b5298}': 15,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'HPThreshold': 1900,
					'{bdd452e8}': 15,
					'{cb6b5298}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'HPThreshold': 1900,
					'{bdd452e8}': 15,
					'{cb6b5298}': 90,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Dragonbane.tex`,
		name: `Scalescorn`,
	},
	{
		apiName: `Set7_Shapeshifter`,
		desc: `Transforming grants bonus maximum HP.<br><br><expandRow>(@MinUnits@) @HPPercent@% bonus HP</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'HPPercent': 60,
				},
			},
			{
				maxUnits: 999,
				minUnits: 4,
				style: 4,
				variables: {
					'HPPercent': 150,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Shapeshifter.tex`,
		name: `Shapeshifter`,
	},
	{
		apiName: `Set7_Shimmerscale`,
		desc: `Grant exclusive random Shimmerscale items.<br><br><row>(@MinUnits@) @NumItems@ unique item</row><br><row>(@MinUnits@) @NumItems@ unique items</row><br><row>(@MinUnits@) @NumItems@ unique items</row><br><row>(@MinUnits@) @NumItems@ unique items, which includes Crown of Champions</row><br><br><tftitemrules>You can remove Shimmerscale items by benching the holder.</tftitemrules>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'NumItems': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'NumItems': 2,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'NumItems': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'NumItems': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Shimmerscale.tex`,
		name: `Shimmerscale`,
	},
	{
		apiName: `Set7_SpellThief`,
		desc: `(@MinUnits@) Zoe nabs a new Ability after each cast and at the start of every round.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_SpellThief.tex`,
		name: `Spell Thief`,
	},
	{
		apiName: `Set7_Starcaller`,
		desc: `(@MinUnits@) The first Starcaller to cast their Ability during player combat heals you for (@Tier1Heal@/@Tier2Heal@/@Tier3Heal@), depending on their star level. Excess healing disintegrates an enemy champion.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'{1b929fa6}': 1,
					'{31d66d45}': 1,
					'{42df8264}': 1,
					'{4979f1a4}': 2,
					'{509811bd}': 2,
					'{56034ed0}': 75,
					'{9b24c7a2}': 2,
					'{f305b0e7}': 3,
					'{fa4f482e}': 20,
					'{fd44bf8b}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_StarCaller.tex`,
		name: `Starcaller`,
	},
	{
		apiName: `Set7_Swiftshot`,
		desc: `Innate: gain 2 hex Attack Range.<br><br>Swiftshots gain Attack Speed for each hex between themselves and their target.<br><br><expandRow>(@MinUnits@) @BonusAS@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAS': 10,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'BonusAS': 15,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusAS': 25,
				},
			},
			{
				maxUnits: 999,
				minUnits: 5,
				style: 5,
				variables: {
					'BonusAS': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Swiftshot.tex`,
		name: `Swiftshot`,
	},
	{
		apiName: `Set7_Tempest`,
		desc: `After @DelayTime@ seconds, lightning strikes the battlefield. Enemies are stunned for @StunDuration@ second and take a percent of their maximum HP as true damage. Then, Tempest champions deal increased damage.<br><br><expandRow>(@MinUnits@) @PercentHPDamage@% lightning, @DamageAmp@% unit damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BuffDuration': 60,
					'DamageAmp': 10,
					'PercentHPDamage': 10,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BuffDuration': 60,
					'DamageAmp': 30,
					'PercentHPDamage': 20,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 2,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BuffDuration': 60,
					'DamageAmp': 60,
					'PercentHPDamage': 30,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BuffDuration': 60,
					'DamageAmp': 120,
					'PercentHPDamage': 45,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 4,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Tempest.tex`,
		name: `Tempest`,
	},
	{
		apiName: `Set7_Warrior`,
		desc: `Warrior attacks have a @ProcChance@% chance to increase the damage of their next attack.<br><br><expandRow>(@MinUnits@) +@PercentDamage@% damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'PercentDamage': 75,
					'ProcChance': 50,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'PercentDamage': 150,
					'ProcChance': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'PercentDamage': 275,
					'ProcChance': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Warrior.tex`,
		name: `Warrior`,
	},
	{
		apiName: `Set7_Whispers`,
		desc: `Whispers damage shrinks enemies, reducing their Armor and Magic Resist by 40% for @Duration@ seconds.<br>When they damage a shrunken enemy, Whispers gain stacking bonuses:<br><br><expandRow>(@MinUnits@) +@ADandAP@ Attack Damage and Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 6,
					'{08a84200}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 6,
					'{08a84200}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 6,
					'{08a84200}': 7,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Whispers.tex`,
		name: `Whispers`,
	},
]
