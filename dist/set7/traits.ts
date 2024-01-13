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
					'CritDamage': 5,
					'CritChance': 15,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'CritDamage': 25,
					'CritChance': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'CritDamage': 45,
					'CritChance': 45,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_6_Assassin.tex`,
		name: `Assassin`,
	},
	{
		apiName: `Set7_Astral`,
		desc: `After you've fielded an Astral team, every 5th shop has increased odds to show Astral champions, and grants a bonus Astral Orb. The orb's value comes from the Astral Trait tier you last fielded.<br>Your team gains bonus Ability Power. <br><br><row>(@MinUnits@) @AP@ Ability Power</row><br><row>(@MinUnits@) @AP@ Ability Power; orb value increases</row><br><row>(@MinUnits@) @AP@ Ability Power; orbs may contain components</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{246b675b}': 1,
					'{41233bac}': 5,
					'AP': 10,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 2,
				variables: {
					'{246b675b}': 1,
					'{41233bac}': 5,
					'AP': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 3,
				variables: {
					'{246b675b}': 1,
					'{41233bac}': 5,
					'AP': 80,
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
				style: 3,
				variables: {
					'{9c8b2ffa}': 178,
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
					'BonusHP': 200,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'BonusHP': 325,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 2,
				variables: {
					'BonusHP': 500,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 3,
				variables: {
					'BonusHP': 800,
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
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{ff57f232}': 1.25,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'{ff57f232}': 2.25,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'{ff57f232}': 3.25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'{ff57f232}': 4.25,
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
				style: 2,
				variables: {
					'Armor': 55,
					'Duration': 4,
					'MR': 55,
					'{c51d362c}': 200,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'Armor': 75,
					'Duration': 4,
					'MR': 75,
					'{c51d362c}': 200,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'Armor': 100,
					'Duration': 4,
					'MR': 100,
					'{c51d362c}': 200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Cavalry.tex`,
		name: `Cavalier`,
	},
	{
		apiName: `Set7_Dragon`,
		desc: `Innate: Require 2 team slots. <br><br>(@MinUnits@) Dragons provide +3 to the marked trait, and gain @BonusHP@ bonus HP. This is only active with exactly 1 Dragon champion.`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 3,
				variables: {
					'BonusHP': 700,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'BonusHP': 700,
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
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusHP': 300,
					'{89626cbc}': 20,
					'BonusAP': 18,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'BonusHP': 750,
					'{89626cbc}': 20,
					'BonusAP': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'BonusHP': 1400,
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
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{af2150c6}': 3,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{af2150c6}': 7,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{af2150c6}': 12,
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
					'{a77cf7ad}': 30,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 60,
					'HPThreshold': 50,
					'{a77cf7ad}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 60,
					'HPThreshold': 50,
					'{a77cf7ad}': 75,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Guardian.tex`,
		name: `Guardian`,
	},
	{
		apiName: `Set7_Guild`,
		desc: `Grant a unique bonus to your team; Guild members gain double the amount. Increases for each Guild member in play!<br><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveSejuani alternate=TFTGuildInactive>Sejuani: +@SejuaniBonus@ HP</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveTwitch alternate=TFTGuildInactive>Twitch: +@TwitchBonus*100@% Attack Speed</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveRyze alternate=TFTGuildInactive>Ryze: +@RyzeBonus@ Ability Power</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveTalon alternate=TFTGuildInactive>Talon: +@TalonBonus@ Attack Damage</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveBard alternate=TFTGuildInactive>Bard: +@BardBonus@ Mana per attack</TFTGuildActive><br><TFTGuildActive enabled=TFT7_Trait_Guild_ActiveEmblem alternate=TFTGuildInactive>Emblem: +@EmblemBonus*100@% Omnivamp</TFTGuildActive><br><br><expandRow>(@MinUnits@) @TooltipMultiplier@% Guild bonus</expandRow>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'{4a1c6695}': 100,
					'{6a4951ed}': 2,
					'{982e055c}': 10,
					'{a7c768e7}': 100,
					'{d2da7d1a}': 8,
					'{f809601e}': 0.029999999329447746,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.10000000149011612,
				},
			},
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{4a1c6695}': 120,
					'{6a4951ed}': 2.4000000953674316,
					'{982e055c}': 12,
					'{a7c768e7}': 120,
					'{d2da7d1a}': 9.600000381469727,
					'{f809601e}': 0.035999998450279236,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.11999999731779099,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'{4a1c6695}': 140,
					'{6a4951ed}': 2.799999952316284,
					'{982e055c}': 14,
					'{a7c768e7}': 140,
					'{d2da7d1a}': 11.199999809265137,
					'{f809601e}': 0.041999999433755875,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.14000000059604645,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 2,
				variables: {
					'{4a1c6695}': 160,
					'{6a4951ed}': 3.200000047683716,
					'{982e055c}': 16,
					'{a7c768e7}': 160,
					'{d2da7d1a}': 12.800000190734863,
					'{f809601e}': 0.04800000041723251,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.1599999964237213,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 3,
				variables: {
					'{4a1c6695}': 180,
					'{6a4951ed}': 3.5999999046325684,
					'{982e055c}': 18,
					'{a7c768e7}': 180,
					'{d2da7d1a}': 14.399999618530273,
					'{f809601e}': 0.05400000140070915,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.18000000715255737,
				},
			},
			{
				maxUnits: 6,
				minUnits: 6,
				style: 4,
				variables: {
					'{4a1c6695}': 200,
					'{6a4951ed}': 4,
					'{982e055c}': 20,
					'{a7c768e7}': 200,
					'{d2da7d1a}': 16,
					'{f809601e}': 0.05999999865889549,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.20000000298023224,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 4,
				variables: {
					'{4a1c6695}': 250,
					'{6a4951ed}': 5,
					'{982e055c}': 25,
					'{a7c768e7}': 250,
					'{d2da7d1a}': 20,
					'{f809601e}': 0.07500000298023224,
					'{f9773fb7}': 2,
					'{fe9fc6fd}': 0.25,
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
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'AS': 0.15000000596046448,
					'HPRegen': 2,
					'PercentHP': 33,
					'{25dee9e0}': 1,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 2,
				variables: {
					'AS': 0.4000000059604645,
					'HPRegen': 4,
					'PercentHP': 33,
					'{25dee9e0}': 2,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
			{
				maxUnits: 11,
				minUnits: 9,
				style: 3,
				variables: {
					'AS': 0.699999988079071,
					'HPRegen': 8,
					'PercentHP': 33,
					'{25dee9e0}': 3,
					'{288bc6fe}': 0.25,
					'{cedd8578}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 12,
				style: 4,
				variables: {
					'AS': 2,
					'HPRegen': 25,
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
		apiName: `Set7_Legend`,
		desc: `(3) Each combat: An adjacent ally champion sacrifices their life to the Legend, which gains @StatPercent@% of their HP, Armor, and Magic Resistance, plus @APPercent@% of their Ability Power.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'{92c2d0ac}': 100,
					'{a68d353d}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Legend.tex`,
		name: `Legend`,
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
					'{2afd498b}': 0.75,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 2,
				variables: {
					'{2afd498b}': 1,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 3,
				variables: {
					'{2afd498b}': 1.25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'{2afd498b}': 1.5,
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
					'{7845f61e}': 6,
					'{7fb6d810}': 50,
					'{835c3290}': 6,
					'{9ea1c8a7}': 50,
					'{b04db727}': 200,
					'{bd0f4998}': 8,
					'{e32ac3a7}': 20,
					'{f25ff422}': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'{03907b27}': 65,
					'{2c8fe3dc}': 4,
					'{34a68396}': 25,
					'{48ffe45c}': 30,
					'{67deaf34}': 10,
					'{7845f61e}': 10,
					'{7fb6d810}': 50,
					'{835c3290}': 12,
					'{9ea1c8a7}': 65,
					'{b04db727}': 300,
					'{bd0f4998}': 8,
					'{e32ac3a7}': 30,
					'{f25ff422}': 10,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'{03907b27}': 65,
					'{2c8fe3dc}': 6,
					'{34a68396}': 33,
					'{48ffe45c}': 45,
					'{67deaf34}': 10,
					'{7845f61e}': 14,
					'{7fb6d810}': 50,
					'{835c3290}': 20,
					'{9ea1c8a7}': 80,
					'{b04db727}': 450,
					'{bd0f4998}': 8,
					'{e32ac3a7}': 40,
					'{f25ff422}': 10,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'{03907b27}': 110,
					'{2c8fe3dc}': 8,
					'{34a68396}': 50,
					'{48ffe45c}': 60,
					'{67deaf34}': 10,
					'{7845f61e}': 18,
					'{7fb6d810}': 50,
					'{835c3290}': 30,
					'{9ea1c8a7}': 100,
					'{b04db727}': 600,
					'{bd0f4998}': 8,
					'{e32ac3a7}': 50,
					'{f25ff422}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Mirage.tex`,
		name: `Mirage`,
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
					'MR': 50,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'MR': 100,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'MR': 175,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'MR': 300,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mystic.tex`,
		name: `Mystic`,
	},
	{
		apiName: `Set7_Ragewing`,
		desc: `Innate: Convert Mana to Rage; attacks generate 15 Rage. After casting an Ability, enrage for 4 seconds: +25% Attack Speed but can't gain Rage.<br><br>Gain bonus stats when enraged:<br><br><row>(@MinUnits@) +@ASPercent@% Attack Speed and +@Omnivamp@% Omnivamp (healing for a percentage of damage dealt)</row><br><row>(@MinUnits@) +@ASPercent@% Attack Speed and +@Omnivamp@% Omnivamp</row><br><row>(@MinUnits@) +@ASPercent@% Attack Speed and +@Omnivamp@% Omnivamp</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'AAPercent': 50,
					'OmniVamp': 25,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 2,
				variables: {
					'AAPercent': 135,
					'OmniVamp': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 3,
				variables: {
					'AAPercent': 250,
					'OmniVamp': 75,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Ragewing.tex`,
		name: `Ragewing`,
	},
	{
		apiName: `Set7_Revel`,
		desc: `After dealing damage with an Ability, launch a firecracker that deals magic damage to a random enemy.<br><br><expandRow>(@MinUnits@) @MagicDamage@ magic damage</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'MagicDamage': 110,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'MagicDamage': 150,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'MagicDamage': 210,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'MagicDamage': 290,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Revel.tex`,
		name: `Revel`,
	},
	{
		apiName: `Set7_Scalescorn`,
		desc: `Scalescorns take @PercentDamageReduction@% reduced damage from enemies with more than @HPThreshold@ HP. If you don't have a Dragon on your team, they also deal a percent of their damage as additional magic damage.<br><br><expandRow>(@MinUnits@) @PercentBonusDamage@% magic damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'HPThreshold': 2200,
					'{bdd452e8}': 20,
					'{cb6b5298}': 15,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'HPThreshold': 2200,
					'{bdd452e8}': 20,
					'{cb6b5298}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'HPThreshold': 2200,
					'{bdd452e8}': 20,
					'{cb6b5298}': 115,
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
					'HPPercent': 40,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'HPPercent': 90,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'HPPercent': 145,
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
				style: 2,
				variables: {
					'NumItems': 2,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 3,
				variables: {
					'NumItems': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
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
				style: 3,
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
				style: 3,
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
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAS': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusAS': 20,
				},
			},
			{
				maxUnits: 999,
				minUnits: 6,
				style: 4,
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
		desc: `After @DelayTime@ seconds, lightning strikes the battlefield. Enemies are stunned for @StunDuration@ second and take a percent of their maximum HP as true damage. Then, Tempest champions gain Attack Speed.<br><br><expandRow>(@MinUnits@) @PercentHPDamage@% damage, @AS*100@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AS': 0.20000000298023224,
					'BuffDuration': 60,
					'PercentHPDamage': 5,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'AS': 0.5,
					'BuffDuration': 60,
					'PercentHPDamage': 20,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 2,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'AS': 1.2000000476837158,
					'BuffDuration': 60,
					'PercentHPDamage': 35,
					'StunDuration': 1,
					'{17f82fb1}': 8,
					'{81ce23cf}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'AS': 2.5,
					'BuffDuration': 60,
					'PercentHPDamage': 50,
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
		apiName: `Set7_Trainer`,
		desc: `After combat, each Trainer feeds 1 Snax per star level to Nomsy, adding HP and Ability Power. Nomsy's star level increases every 25 Snax!<br><br><row>(@MinUnits@) Summon Nomsy!</row><br><row>(@MinUnits@) Nomsy's Ability deals @DamageInc*100@% more damage</row>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{a848d452}': 1,
					'{cc4e6814}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'{a848d452}': 2,
					'{cc4e6814}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Trainers.tex`,
		name: `Trainer`,
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
					'PercentDamage': 80,
					'ProcChance': 50,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'PercentDamage': 175,
					'ProcChance': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'PercentDamage': 325,
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
				style: 2,
				variables: {
					'Duration': 6,
					'{08a84200}': 3,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'Duration': 6,
					'{08a84200}': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'Duration': 6,
					'{08a84200}': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Whispers.tex`,
		name: `Whispers`,
	},
]
