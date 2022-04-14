import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set5_Abomination`,
		desc: `When @AllyDeaths@ allied champions have died, the Monstrosity will rise from its grave. The Monstrosity receives bonus HP and Attack Damage based on allied Abomination champions' star levels. <br><br>The 3 Abomination champions nearest the grave will also grant the Monstrosity a random copy of one of their items when combat starts.<br><br><expandRow>(@MinUnits@) @FlatHP@ HP, @FlatAD@ Attack Damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'BonusAD': 9,
					'BonusHP': 100,
					'FlatAD': 90,
					'{1996c599}': 2,
					'{3bbb70b1}': 40,
					'{54f15a70}': 1000,
					'{c39bcde5}': 40,
					'{cac704c8}': 3,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusAD': 14,
					'BonusHP': 160,
					'FlatAD': 140,
					'{1996c599}': 3,
					'{3bbb70b1}': 60,
					'{54f15a70}': 1600,
					'{c39bcde5}': 60,
					'{cac704c8}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'BonusAD': 18,
					'BonusHP': 220,
					'FlatAD': 180,
					'{1996c599}': 4,
					'{3bbb70b1}': 75,
					'{54f15a70}': 2200,
					'{c39bcde5}': 75,
					'{cac704c8}': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Aberration.dds`,
		name: `Abomination`,
	},
	{
		apiName: `Set5_Assassin`,
		desc: `Innate: When combat starts, Assassins leap to the enemy backline.<br><br>Assassins' Abilities can critically strike and they gain bonus Critical Strike Chance and bonus Critical Strike Damage.<br><br><expandRow>(@MinUnits@) +@CritChance@% Crit Chance and +@CritDamage@% Crit Damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'CritDamage': 25,
					'CritChance': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'CritDamage': 55,
					'CritChance': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'CritDamage': 90,
					'CritChance': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Assassin.dds`,
		name: `Assassin`,
	},
	{
		apiName: `Set5_Brawler`,
		desc: `Brawlers gain additional maximum HP.<br><br><expandRow>(@MinUnits@) +@BonusHP@ HP</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusHP': 400,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusHP': 1000,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Brawler.dds`,
		name: `Brawler`,
	},
	{
		apiName: `Set5_Caretaker`,
		desc: `(@MinUnits@) Caretakers deploy with a Baby Dragon that can be placed anywhere on the battlefield. The Baby Dragon gains @AS@% of its Caretaker's Attack Speed, and restores @ManaRefund@ Mana to the Caretaker upon death. `,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					'AS': 100,
					'{73482a20}': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Caretaker.dds`,
		name: `Caretaker`,
	},
	{
		apiName: `Set5_Cavalier`,
		desc: `Innate: Cavaliers charge quickly towards their target whenever they move.<br><br>Cavaliers take reduced damage. At the start of combat and after each charge, this effect is doubled for @Duration@ seconds.<br><br><expandRow>(@MinUnits@) @DamageReductionPercent@% Damage Reduction</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 4,
					'{5064373e}': 20,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'Duration': 4,
					'{5064373e}': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 4,
					'{5064373e}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Cavalry.dds`,
		name: `Cavalier`,
	},
	{
		apiName: `Set5_Coven`,
		desc: `(@MinUnits@) At the start of combat, the champion nearest to the center of your Coven champions is chosen as the Coven Leader, gaining @AP@ bonus Ability Power.<br><br>Each time a Coven champion casts, @PercentMana@% of the cost is bestowed upon the Coven Leader as Mana.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'{49123935}': 15,
					'AP': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Coven.dds`,
		name: `Coven`,
	},
	{
		apiName: `Set5_Cruel`,
		desc: `(@MinUnits@) A Cruel champion hungers to be alone against exactly 1 enemy left standing. <br><br>Cruel champions are purchased with Little Legend HP instead of gold. They can be sold for gold, but not HP. You're welcome.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					'{058a3716}': 4.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Cruel.dds`,
		name: `Cruel`,
	},
	{
		apiName: `Set5_Dawnbringer`,
		desc: `Dawnbringers rapidly heal some of their maximum HP the first time they drop below @FirstThreshold@%. When this occurs, all allied Dawnbringers gain @BonusDamage@% bonus damage.<br><br><expandRow>(@MinUnits@) @PercentOfMaximumHP@% of maximum HP</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusDamage': 12,
					'{6ff610f4}': 50,
					'{9faee275}': 10,
					'{a177439d}': 30,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'BonusDamage': 12,
					'{6ff610f4}': 50,
					'{9faee275}': 20,
					'{a177439d}': 60,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'BonusDamage': 12,
					'{6ff610f4}': 50,
					'{9faee275}': 25,
					'{a177439d}': 90,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'BonusDamage': 12,
					'{6ff610f4}': 50,
					'{9faee275}': 30,
					'{a177439d}': 130,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Dawnbringer.dds`,
		name: `Dawnbringer`,
	},
	{
		apiName: `Set5_Draconic`,
		desc: `<row>(@MinUnits@) At the end of each player combat, gain a dragon egg on your bench. The bigger the egg, the longer it takes to hatch, and the rarer the reward.</row><br><row>(@MinUnits@). Dragon eggs are golden! Golden eggs hatch into even rarer loot.</row><br><br><tftitemrules>In Hyper Roll, dragon eggs hatch a lot faster!</tftitemrules>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusHP': null,
					'{6dd34f54}': 1,
					'{b9b4d8d7}': 2,
					'{df820e73}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 3,
				variables: {
					'BonusHP': 300,
					'{6dd34f54}': 2,
					'{b9b4d8d7}': 2,
					'{df820e73}': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Draconic.dds`,
		name: `Draconic`,
	},
	{
		apiName: `Set5_Dragonslayer`,
		desc: `Dragonslayers always gain bonus Ability Power.<br><br>After the first Dragonslayer ally scores a takedown on an enemy with at least @MaxHPThreshold@ maximum HP, all allies gain additional Ability Power for the rest of combat.<br><br><expandRow>(@MinUnits@) @DragonslayerAP@ Ability Power for Dragonslayers, @TeamAP@ for team</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{2098e1a5}': 20,
					'{32055351}': 30,
					'{af701916}': 1400,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{2098e1a5}': 60,
					'{32055351}': 70,
					'{af701916}': 1400,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{2098e1a5}': 100,
					'{32055351}': 140,
					'{af701916}': 1400,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Dragonslayer.dds`,
		name: `Dragonslayer`,
	},
	{
		apiName: `Set5_Eternal`,
		desc: `(@MinUnits@) Wolf separates from Lamb, and can be placed anywhere on the battlefield. Wolf does not count toward your team size, and receives all of Lamb's stat bonuses.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Eternal.dds`,
		name: `Eternal`,
	},
	{
		apiName: `Set5_Forgotten`,
		desc: `Forgotten champions have bonus Attack Damage and Ability Power. Each Shadow item held by a Forgotten champion increases these bonuses by @ShadowPercent@% on all Forgotten champions, stacking up to @MaxItems@ times.<br><br><expandRow>(@MinUnits@) @InitialADandAP@ Attack Damage and Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{54c3c993}': 4,
					'{84b7444e}': 15,
					'{db208eae}': 25,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 2,
				variables: {
					'{54c3c993}': 4,
					'{84b7444e}': 15,
					'{db208eae}': 60,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 3,
				variables: {
					'{54c3c993}': 4,
					'{84b7444e}': 15,
					'{db208eae}': 120,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Forgotten.dds`,
		name: `Forgotten`,
	},
	{
		apiName: `Set5_GodKing`,
		desc: `(@MinUnits@) God-Kings deal @PercentDamageAmp@% bonus damage to enemies who have at least one of their Rival Traits. This effect is only active when you have exactly 1 unique God-King. <br><br>Garen's Rivals: Forgotten, Nightbringer, Coven, Hellion, Dragonslayer, Abomination, Revenant<br><br>Darius' Rivals: Redeemed, Dawnbringer, Verdant, Draconic, Ironclad`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 3,
				variables: {
					'{442a7ad7}': 20,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Godking.dds`,
		name: `God-King`,
	},
	{
		apiName: `Set5_Hellion`,
		desc: `Hellions gain Attack Speed. <br><br>Whenever a Hellion dies, a Doppelhellion (a one less star copy) will leap from the Hellion portal and join the fight!<br><br><expandRow>(@MinUnits@) @ASPercent@% Attack Speed.</expandRow>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{581a579b}': 2,
					'AAPercent': 10,
					'{fdfd8bc8}': null,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'{581a579b}': 4,
					'AAPercent': 55,
					'{fdfd8bc8}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 4,
				variables: {
					'{581a579b}': 9,
					'AAPercent': 130,
					'{fdfd8bc8}': null,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Hellion.dds`,
		name: `Hellion`,
	},
	{
		apiName: `Set5_Invoker`,
		desc: `All allies gain extra Mana from their attacks.<br><br><expandRow>(@MinUnits@) +@ManaPerAttack@ Mana</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{7fd29f41}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'{7fd29f41}': 6,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Invoker.dds`,
		name: `Invoker`,
	},
	{
		apiName: `Set5_Ironclad`,
		desc: `All allies gain Armor.<br><br><expandRow>(@MinUnits@) @Armor@ Armor</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'Armor': 35,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'Armor': 85,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'Armor': 170,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Ironclad.dds`,
		name: `Ironclad`,
	},
	{
		apiName: `Set5_Knight`,
		desc: `All allies block a flat amount of damage from all sources.<br><br><expandRow>(@MinUnits@) @BlockAmount@ damage blocked</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BlockAmount': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'BlockAmount': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'BlockAmount': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Knight.dds`,
		name: `Knight`,
	},
	{
		apiName: `Set5_Legionnaire`,
		desc: `Legionnaires gain bonus Attack Speed, and their first attack after casting an Ability heals them for @HealPercent@% of the damage dealt.<br><br><expandRow>(@MinUnits@) @ASBoostPercent@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'HealPercent': 50,
					'{2a35bd2d}': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'HealPercent': 50,
					'{2a35bd2d}': 65,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'HealPercent': 50,
					'{2a35bd2d}': 120,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'HealPercent': 50,
					'{2a35bd2d}': 200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Vanquisher.dds`,
		name: `Legionnaire`,
	},
	{
		apiName: `Set5_Mystic`,
		desc: `All allies gain Magic Resist.<br><br><expandRow>(@MinUnits@) @MR@ Magic Resist</expandRow>`,
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
				style: 2,
				variables: {
					'MR': 100,
				},
			},
			{
				maxUnits: 6,
				minUnits: 4,
				style: 3,
				variables: {
					'MR': 200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mystic.dds`,
		name: `Mystic`,
	},
	{
		apiName: `Set5_Nightbringer`,
		desc: `Nightbringers gain a shield for @ShieldDuration@ seconds equal to a percent of their maximum HP the first time they drop below @FirstThreshold@%. When this occurs, that Nightbringer gains bonus damage.<br><br><expandRow>(@MinUnits@) @MaxPercentHPShield@% shield, @BonusDamage@% damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusDamage': 20,
					'ShieldDuration': 8,
					'{6ff610f4}': 50,
					'{7696e375}': 30,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'BonusDamage': 30,
					'ShieldDuration': 8,
					'{6ff610f4}': 50,
					'{7696e375}': 60,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 2,
				variables: {
					'BonusDamage': 40,
					'ShieldDuration': 8,
					'{6ff610f4}': 50,
					'{7696e375}': 90,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 3,
				variables: {
					'BonusDamage': 50,
					'ShieldDuration': 8,
					'{6ff610f4}': 50,
					'{7696e375}': 140,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Nightbringer.dds`,
		name: `Nightbringer`,
	},
	{
		apiName: `Set5_Ranger`,
		desc: `Every @DelayBetweenBuffs@ seconds Rangers gain increased Attack Speed that lasts @BuffDuration@ seconds. This effect begins @InitialDelay@ seconds after combat starts.<br><br><expandRow>(@MinUnits@) +@AS@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AS': 75,
					'BuffDuration': 4,
					'{188c0b1e}': 4,
					'{d23a6212}': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'AS': 180,
					'BuffDuration': 4,
					'{188c0b1e}': 4,
					'{d23a6212}': 4,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Ranger.dds`,
		name: `Ranger`,
	},
	{
		apiName: `Set5_Redeemed`,
		desc: `Redeemed champions have increased Armor, Magic Resist, and Ability Power. When they die, their bonus is split among remaining Redeemed allies.<br><br><expandRow>(@MinUnits@) @ArmorAmount@ Armor & Magic Resist, @APAmount@ Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'MR': 30,
					'{5516cb5e}': 30,
					'{88555c58}': 30,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'MR': 55,
					'{5516cb5e}': 55,
					'{88555c58}': 55,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'MR': 95,
					'{5516cb5e}': 95,
					'{88555c58}': 95,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Redeemed.dds`,
		name: `Redeemed`,
	},
	{
		apiName: `Set5_Renewer`,
		desc: `Renewers heal for a percent of their maximum HP each second. If they're full HP, they restore Mana instead.<br><br><expandRow>(@MinUnits@) @PercentHP@% HP or @PercentMana@% Mana</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'PercentHP': 3,
					'{49123935}': 3,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'PercentHP': 6,
					'{49123935}': 6,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'PercentHP': 9,
					'{49123935}': 9,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Rejuvenator.dds`,
		name: `Renewer`,
	},
	{
		apiName: `Set5_Revenant`,
		desc: `Revenants revive after their first death each combat. Once revived, they take and deal @DamageAmp@% increased damage.<br><br><expandRow>(@MinUnits@) Revive with @HPPercent@% HP</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'DamageAmp': 30,
					'HPPercent': 10,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'DamageAmp': 30,
					'HPPercent': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'DamageAmp': 30,
					'HPPercent': 75,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Revenant.dds`,
		name: `Revenant`,
	},
	{
		apiName: `Set5_Skirmisher`,
		desc: `Skirmishers gain a shield at the start of combat, and bonus Attack Damage each second.<br><br><expandRow> (@MinUnits@) @PercentHPShield@% max HP shield and +@AD@ Attack Damage</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'AD': 3,
					'{9dc86ba9}': 25,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'AD': 6,
					'{9dc86ba9}': 45,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'AD': 12,
					'{9dc86ba9}': 75,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Skirmisher.dds`,
		name: `Skirmisher`,
	},
	{
		apiName: `Set5_Spellweaver`,
		desc: `Spellweavers have bonus Ability Power, which increases whenever any champion uses an ability (up to @StackCap@ times).  <br><br><expandRow>(@MinUnits@) @AP@ Ability Power, @BonusAP@ bonus Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AP': 25,
					'StackCap': 10,
					'BonusAP': 2,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AP': 55,
					'StackCap': 10,
					'BonusAP': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'AP': 85,
					'StackCap': 10,
					'BonusAP': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Sorcerer.dds`,
		name: `Spellweaver`,
	},
	{
		apiName: `Set5_Verdant`,
		desc: `Champions that start combat adjacent to at least one Verdant ally are immune to crowd control for a duration.<br><br><expandRow>(@MinUnits@) @Duration@ seconds</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'Duration': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Verdant.dds`,
		name: `Verdant`,
	},
]