import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set5_Abomination`,
		desc: `When @AllyDeaths@ allied champions have died, the Monstrosity will rise from its grave. The Monstrosity receives bonus HP and Attack Damage based on the stage number and allied Abomination champions' star levels. <br><br>The 3 Abomination champions nearest the grave will also grant the Monstrosity a random copy of one of their items when combat starts.<br><br><expandRow>(@MinUnits@) @FlatHP@ HP, @FlatAD@ Attack Damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusAD': 7,
					'BonusHP': 90,
					'FlatAD': 70,
					'{1996c599}': 2,
					'{3bbb70b1}': 30,
					'{54f15a70}': 900,
					'{5a8dfaee}': 3,
					'{66e42917}': 13,
					'{c39bcde5}': 30,
					'{cac704c8}': 2,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusAD': 9,
					'BonusHP': 150,
					'FlatAD': 90,
					'{1996c599}': 3,
					'{3bbb70b1}': 45,
					'{54f15a70}': 1500,
					'{5a8dfaee}': 4,
					'{66e42917}': 13,
					'{c39bcde5}': 45,
					'{cac704c8}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'BonusAD': 11,
					'BonusHP': 200,
					'FlatAD': 110,
					'{1996c599}': 4,
					'{3bbb70b1}': 60,
					'{54f15a70}': 2000,
					'{5a8dfaee}': 5,
					'{66e42917}': 13,
					'{c39bcde5}': 60,
					'{cac704c8}': 2,
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
					'CritDamage': 30,
					'CritChance': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'CritDamage': 40,
					'CritChance': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'CritDamage': 50,
					'CritChance': 75,
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
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusHP': 1000,
				},
			},
			{
				maxUnits: 2500,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusHP': 1600,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Brawler.dds`,
		name: `Brawler`,
	},
	{
		apiName: `Set5_Cannoneer`,
		desc: `Every 5th Cannoneer attack is replaced with a cannon shot that deals a percent of that attack's damage in an explosion around the target as physical damage.<br><br><expandRow>(@MinUnits@) @AttackPercent@% damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{ff57f232}': 225,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{ff57f232}': 475,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{ff57f232}': 1200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Cannoneer.dds`,
		name: `Cannoneer`,
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
					'BonusDamage': 10,
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
					'BonusDamage': 10,
					'{6ff610f4}': 50,
					'{9faee275}': 15,
					'{a177439d}': 55,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'BonusDamage': 10,
					'{6ff610f4}': 50,
					'{9faee275}': 20,
					'{a177439d}': 80,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'BonusDamage': 10,
					'{6ff610f4}': 50,
					'{9faee275}': 25,
					'{a177439d}': 120,
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
		apiName: `Set5_Forgotten`,
		desc: `Forgotten champions have bonus Attack Damage and Ability Power. Each victorious combat they participate in increases the bonus by @VictoryPercent@%, stacking up to @MaxCombats@ times.<br><br><expandRow>(@MinUnits@) @InitialADandAP@ Attack Damage and Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
					'{db208eae}': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
					'{db208eae}': 40,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
					'{db208eae}': 60,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
					'{db208eae}': 150,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Forgotten.dds`,
		name: `Forgotten`,
	},
	{
		apiName: `Set5_Hellion`,
		desc: `Hellions gain Attack Speed. <br><br>Whenever a Hellion dies, a Doppelhellion (a one less star copy) will leap from the Hellion portal and join the fight!<br><br><expandRow>(@MinUnits@) @ASPercent@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AAPercent': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'AAPercent': 30,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'AAPercent': 70,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'AAPercent': 125,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Hellion.dds`,
		name: `Hellion`,
	},
	{
		apiName: `Set5_Inanimate`,
		desc: `(@MinUnits@) At the start of combat, Inanimate champions summon Harrowing Mist in all adjacent hexes surrounding them for @Duration@ seconds, granting all allies within @DamageReductionPercent*100@% damage reduction while they remain within the mist.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					'Duration': 8,
					'{5064373e}': 0.33000001311302185,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Inanimate.dds`,
		name: `Inanimate`,
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
					'Armor': 30,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'Armor': 70,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'Armor': 125,
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
		desc: `Legionnaires have bonus Attack Speed and heal for a portion of the damage they deal with attacks and Abilities.<br><br><expandRow>(@MinUnits@) @ASBoostPercent@% Attack Speed, @HealPercent@% Heal</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'HealPercent': 15,
					'{2a35bd2d}': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'HealPercent': 20,
					'{2a35bd2d}': 70,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'HealPercent': 25,
					'{2a35bd2d}': 135,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'HealPercent': 35,
					'{2a35bd2d}': 250,
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
					'MR': 80,
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
				maxUnits: 2500,
				minUnits: 5,
				style: 4,
				variables: {
					'MR': 300,
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
				style: 3,
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
				style: 4,
				variables: {
					'BonusDamage': 70,
					'ShieldDuration': 8,
					'{6ff610f4}': 50,
					'{7696e375}': 200,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Nightbringer.dds`,
		name: `Nightbringer`,
	},
	{
		apiName: `Set5_Ranger`,
		desc: `Rangers gain an Attack Speed buff that switches on and off every @BuffDuration@ seconds. This buff applies to the Ranger's total Attack Speed.<br><br><expandRow>(@MinUnits@) +@AS@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AS': 80,
					'BuffDuration': 4,
					'{188c0b1e}': 4,
					'{d23a6212}': 4,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AS': 200,
					'BuffDuration': 4,
					'{188c0b1e}': 4,
					'{d23a6212}': 4,
				},
			},
			{
				maxUnits: 2500,
				minUnits: 6,
				style: 4,
				variables: {
					'AS': 500,
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
					'MR': 20,
					'{5516cb5e}': 30,
					'{88555c58}': 20,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'MR': 35,
					'{5516cb5e}': 60,
					'{88555c58}': 35,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'MR': 70,
					'{5516cb5e}': 100,
					'{88555c58}': 70,
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
					'PercentHP': 4,
					'{49123935}': 4,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'PercentHP': 7,
					'{49123935}': 7,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'PercentHP': 10,
					'{49123935}': 10,
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
					'DamageAmp': 25,
					'HPPercent': 10,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'DamageAmp': 25,
					'HPPercent': 25,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'DamageAmp': 25,
					'HPPercent': 45,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'DamageAmp': 25,
					'HPPercent': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Revenant.dds`,
		name: `Revenant`,
	},
	{
		apiName: `Set5_Sentinel`,
		desc: `At the start of combat, the Sentinel with the most items (ties broken by highest Attack Speed) gains a shield that grants stacking Attack Speed. When it is destroyed or expires, it will bounce to the ally with the lowest percent HP and renew. The Attack Speed bonus persists between shield bounces.<br><br><expandRow>(@MinUnits@) @Shield@ Shield, +@AS*100@% Attack Speed, @Duration@ sec duration</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'AS': 0.20000000298023224,
					'Duration': 4,
					'Shield': 175,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'AS': 0.800000011920929,
					'Duration': 2,
					'Shield': 800,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'AS': 6,
					'Duration': 1,
					'Shield': 2000,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Sentinel.dds`,
		name: `Sentinel`,
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
					'AD': 4,
					'{9dc86ba9}': 20,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'AD': 10,
					'{9dc86ba9}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'AD': 20,
					'{9dc86ba9}': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Skirmisher.dds`,
		name: `Skirmisher`,
	},
	{
		apiName: `Set5_Spellweaver`,
		desc: `Spellweavers have bonus Ability Power, which increases whenever any champion uses an ability, until the end of combat.<br><br><expandRow>(@MinUnits@) @AP@ Ability Power, @BonusAP@ bonus Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AP': 15,
					'StackCap': 10,
					'BonusAP': 2,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AP': 35,
					'StackCap': 10,
					'BonusAP': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'AP': 70,
					'StackCap': 10,
					'BonusAP': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Sorcerer.dds`,
		name: `Spellweaver`,
	},
	{
		apiName: `Set5_Victorious`,
		desc: `(@MinUnits@) When Victorious champions score a kill, their next attack is empowered to deal @PercentDamage*100@% of the target's missing HP as bonus magic damage.`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 3,
				variables: {
					'PercentDamage': 0.6000000238418579,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Victorious.dds`,
		name: `Victorious`,
	},
]
