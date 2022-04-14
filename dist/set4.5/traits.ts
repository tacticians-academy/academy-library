import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set4_Adept`,
		desc: `Adepts calm the flow of battle, reducing the Attack Speed of all enemies by 50% for a few seconds at the start of combat.<br><br><expandRow>(@MinUnits@) @ASSlowDuration@ seconds</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{948540e5}': 2,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'{948540e5}': 3.5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'{948540e5}': 6,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Master.dds`,
		name: `Adept`,
	},
	{
		apiName: `Set4_Assassin`,
		desc: `Innate: At the start of combat, Assassins leap to the enemy backline.<br><br>Assassins gain bonus Critical Strike Damage and Chance, and their spells can critically strike.<br><br><expandRow>(@MinUnits@) +@CritDamage@% Critical Strike Damage & +@CritChance@% Critical Strike Chance</expandRow><br>`,
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
				style: 3,
				variables: {
					'CritDamage': 55,
					'CritChance': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'CritDamage': 90,
					'CritChance': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Assassin.dds`,
		name: `Assassin`,
	},
	{
		apiName: `Set4_Brawler`,
		desc: `Brawlers gain bonus HP and Attack Damage.<br><br><expandRow>(@MinUnits@) @BonusHP@ HP and @BonusAD@ Attack Damage</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAD': 10,
					'BonusHP': 400,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'BonusAD': 20,
					'BonusHP': 700,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'BonusAD': 40,
					'BonusHP': 1000,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'BonusAD': 80,
					'BonusHP': 1400,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Brawler.dds`,
		name: `Brawler`,
	},
	{
		apiName: `Cultist`,
		desc: `Once your team loses @CultistHPPercentTaken@% of their HP, Galio is summoned, slamming into the largest cluster of enemies and knocking them up. Galio's strength increases based on the total star level of all active Cultists.<br><row>(@MinUnits@) Tyrant Galio</row><br><row>(@MinUnits@) Demon Lord Galio</row><br><row>(@MinUnits@) Supreme Overlord Galio</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'HP': 800,
					'{0d36fce1}': 1,
					'{170c422e}': 80,
					'{2b3aecac}': 0.1599999964237213,
					'{54e3a48d}': null,
					'{9456c371}': null,
					'{a640a6f5}': 50,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'HP': 1300,
					'{0d36fce1}': 2,
					'{170c422e}': 165,
					'{2b3aecac}': 0.1599999964237213,
					'{54e3a48d}': null,
					'{9456c371}': null,
					'{a640a6f5}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'HP': 2000,
					'{0d36fce1}': 3,
					'{170c422e}': 330,
					'{2b3aecac}': 0.1599999964237213,
					'{54e3a48d}': 20,
					'{9456c371}': 60,
					'{a640a6f5}': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Cultist.dds`,
		name: `Cultist`,
	},
	{
		apiName: `Set4_Dazzler`,
		desc: `Dazzlers' spells reduce the Attack Damage of enemies hit for @Duration@ seconds.<br><br><expandRow>(@MinUnits@) @ADReduction@% Attack Damage reduction</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 8,
					'{b890a4c9}': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 8,
					'{b890a4c9}': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Dazzler.dds`,
		name: `Dazzler`,
	},
	{
		apiName: `Divine`,
		desc: `Upon attacking @NumAttacksToProc@ times or dropping below @HPThreshold@% HP, Divine champions remove all crowd control and ascend, gaining damage reduction and dealing bonus true damage for @Duration@ seconds.<br><br><expandRow>(@MinUnits@) @DamageReductionPercent@% damage reduction and @BonusTrueDamagePercent@% true damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 6,
					'HPThreshold': 50,
					'{5064373e}': 25,
					'{ab28c2e5}': 6,
					'{db141d0a}': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'Duration': 6,
					'HPThreshold': 50,
					'{5064373e}': 40,
					'{ab28c2e5}': 6,
					'{db141d0a}': 40,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'Duration': 6,
					'HPThreshold': 50,
					'{5064373e}': 55,
					'{ab28c2e5}': 6,
					'{db141d0a}': 55,
				},
			},
			{
				maxUnits: 2500,
				minUnits: 8,
				style: 4,
				variables: {
					'Duration': 6,
					'HPThreshold': 50,
					'{5064373e}': 70,
					'{ab28c2e5}': 6,
					'{db141d0a}': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Divine.dds`,
		name: `Divine`,
	},
	{
		apiName: `Duelist`,
		desc: `Innate: Duelists gain bonus Movement Speed.<br><br>Duelists' attacks grant Attack Speed, up to @MaxStacks@ stacks.<br><br><expandRow>(@MinUnits@) +@AS@% Attack Speed per stack</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AS': 12,
					'MaxStacks': 8,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'AS': 20,
					'MaxStacks': 8,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'AS': 35,
					'MaxStacks': 8,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'AS': 60,
					'MaxStacks': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Duelist.dds`,
		name: `Duelist`,
	},
	{
		apiName: `Dusk`,
		desc: `Dusk champions increase all allies' Spell Power.<br><row>(@MinUnits@) All allies gain @TeamSpellPower@% Spell Power</row><br><row>(@MinUnits@) And Dusk champions gain an additional @DuskSpellPower@%</row><br><row>(@MinUnits@) @TeamSpellPower@% Spell Power for all, and an extra @DuskSpellPower@% for Dusk champions</row><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{845f7bf3}': null,
					'{aa5d5de7}': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{845f7bf3}': 50,
					'{aa5d5de7}': 20,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{845f7bf3}': 70,
					'{aa5d5de7}': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Dusk.dds`,
		name: `Dusk`,
	},
	{
		apiName: `Set4_Elderwood`,
		desc: `Every two seconds all Elderwood champions grow, gaining bonus stats. This effect stacks up to five times.<br><br><expandRow>(@MinUnits@) @BonusResists@ Armor and Magic Resist, @BonusADAP@ Attack Damage and Spell Power</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusResists': 15,
					'MaxStacks': 5,
					'TickRate': 2,
					'{980d95cd}': 0.019999999552965164,
					'{d53b93b2}': 5,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'BonusResists': 20,
					'MaxStacks': 5,
					'TickRate': 2,
					'{980d95cd}': 0.03999999910593033,
					'{d53b93b2}': 10,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'BonusResists': 30,
					'MaxStacks': 5,
					'TickRate': 2,
					'{980d95cd}': 0.05999999865889549,
					'{d53b93b2}': 15,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Wilderness.dds`,
		name: `Elderwood`,
	},
	{
		apiName: `Emperor`,
		desc: `The Emperor deploys with two Sand Guards who can be placed anywhere on the battlefield. They do not move or attack, and die when their Emperor does.`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 3,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Emperor.dds`,
		name: `Emperor`,
	},
	{
		apiName: `Set4_Enlightened`,
		desc: `Enlightened champions generate more Mana.<br><br><expandRow>(@MinUnits@) @ManaAmp@% increase</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{5d972a6c}': 50,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'{5d972a6c}': 100,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{5d972a6c}': 150,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Enlightened.dds`,
		name: `Enlightened`,
	},
	{
		apiName: `Set4_Exile`,
		desc: `If an Exile has no adjacent allies at the start of combat, they gain:<br><br><row>(@MinUnits@) A shield equal to @ShieldPercent@% of their maximum health</row><br><row>(@MinUnits@) And @LifeSteal@% Lifesteal</row><br><br>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'LifeSteal': null,
					'ShieldPercent': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'LifeSteal': 80,
					'ShieldPercent': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Exile.dds`,
		name: `Exile`,
	},
	{
		apiName: `Fortune`,
		desc: `<row>(@MinUnits@) Winning combat against a player will give bonus orbs. The longer you've gone without an orb, the bigger the payout! </row><br><row>(@MinUnits@) Wins give an extra bonus orb with rare loot.</row><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 3,
				variables: {
					'{b18a259c}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{b18a259c}': 2,
					'{fa6edf2d}': null,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Fortune.dds`,
		name: `Fortune`,
	},
	{
		apiName: `Hunter`,
		desc: `Every few seconds, all Hunters will attack the lowest percent HP enemy, dealing bonus damage.<br><br><expandRow>(@MinUnits@) @DamageAmp@% bonus damage every @ShotFrequency@ seconds</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'DamageAmp': 125,
					'{428a4c11}': 3.5,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 2,
				variables: {
					'DamageAmp': 150,
					'{428a4c11}': 3,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'DamageAmp': 175,
					'{428a4c11}': 2.5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'DamageAmp': 200,
					'{428a4c11}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Hunter.dds`,
		name: `Hunter`,
	},
	{
		apiName: `Keeper`,
		desc: `At the start of combat, Keepers grant themselves and all adjacent allies a Shield for a duration. This Shield is 50% stronger on Keepers.<br><br><expandRow>(@MinUnits@) @ShieldAmount@ Shield, @Duration@ seconds</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 8,
					'ShieldAmount': 150,
					'{995b1992}': 50,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'Duration': 10,
					'ShieldAmount': 200,
					'{995b1992}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'Duration': 12,
					'ShieldAmount': 250,
					'{995b1992}': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Keeper.dds`,
		name: `Keeper`,
	},
	{
		apiName: `Set4_Mage`,
		desc: `Mages cast twice and have modified Spell Power.<br><br><expandRow>(@MinUnits@) @APPercent@% of their total Spell Power</expandRow>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{1163964f}': 80,
					'ProcChance': 100,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'{1163964f}': 105,
					'ProcChance': 100,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 4,
				variables: {
					'{1163964f}': 130,
					'ProcChance': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mage.dds`,
		name: `Mage`,
	},
	{
		apiName: `Moonlight`,
		desc: `(@MinUnits@) At the start of combat, a number of Moonlight Champions star up once until combat ends.<br><br>(Prioritizes the lowest star-level champions. If tied, champions with the most items are chosen.)<br><br><row>(@MinUnits@) @NumberOfChampions@ Champion</row><br><row>(@MinUnits@) @NumberOfChampions@ Champions</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 3,
				variables: {
					'{a6d1e24b}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'{a6d1e24b}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Moonlight.dds`,
		name: `Moonlight`,
	},
	{
		apiName: `Set4_Mystic`,
		desc: `All allies gain Magic Resistance.<br><br><expandRow>(@MinUnits@) @MR@ Magic Resistance</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MR': 40,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'MR': 120,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
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
		apiName: `Set4_Ninja`,
		desc: `Ninjas gain bonus Attack Damage and Spell Power.<br><br>This trait is only active when you have exactly 1 or 4 unique Ninjas.<br><br><row>(@MinUnits@) Ninja gains +@ADValue@ Attack Damage & +@APValue@% Spell Power</row><br><row>(@MinUnits@) All Ninjas gain +@ADValue@ Attack Damage & +@APValue@% Spell Power</row>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'ADValue': 50,
					'APValue': 50,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'ADValue': 140,
					'APValue': 140,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Ninja.dds`,
		name: `Ninja`,
	},
	{
		apiName: `Set4_Shade`,
		desc: `Innate: When combat starts, Shades teleport to the enemy backline.<br><br>Shades dip into the shadows after every @NumberOfAttacks@ attacks, stealthing and causing their next basic attack to deal bonus magic damage.<br><br><expandRow>(@MinUnits@) @Damage@ bonus damage</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'Damage': 125,
					'{0140347e}': 3,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'Damage': 400,
					'{0140347e}': 3,
				},
			},
			{
				maxUnits: 28,
				minUnits: 4,
				style: 4,
				variables: {
					'Damage': 750,
					'{0140347e}': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Shade.dds`,
		name: `Shade`,
	},
	{
		apiName: `Sharpshooter`,
		desc: `Sharpshooters' attacks and spells ricochet to nearby enemies, dealing reduced damage.<br><br><expandRow>(@MinUnits@) @MaxBounces@ ricochets with @PercentDamageReduction@% reduced damage</expandRow><br><br><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{76740106}': 2,
					'{bdd452e8}': 65,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{76740106}': 3,
					'{bdd452e8}': 45,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{76740106}': 4,
					'{bdd452e8}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Sharpshooter.dds`,
		name: `Sharpshooter`,
	},
	{
		apiName: `Set4_Slayer`,
		desc: `Slayers gain Lifesteal that gets stronger as their own HP decreases, and deal bonus damage that scales up based on their target's missing HP.<br><br><expandRow>(@MinUnits@) @LifestealBase@ to @LifestealMax@% Lifesteal and @BonusDamageBase@ to @BonusDamageMax@% Bonus Damage</expandRow><br><br><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusDamageBase': 20,
					'LifeStealBase': 15,
					'{5b70ffc9}': 45,
					'{780fac54}': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'BonusDamageBase': 35,
					'LifeStealBase': 30,
					'{5b70ffc9}': 80,
					'{780fac54}': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Slayer.dds`,
		name: `Slayer`,
	},
	{
		apiName: `Set4_Spirit`,
		desc: `The first time a Spirit casts their spell, all allies gain Attack Speed.<br><br><row>(@MinUnits@) @ASPercent@% Attack Speed</row><br><row>(@MinUnits@) @ASPercent@% Attack Speed</row><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AAPercent': 18,
				},
			},
			{
				maxUnits: 9999,
				minUnits: 4,
				style: 3,
				variables: {
					'AAPercent': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Spirit.dds`,
		name: `Spirit`,
	},
	{
		apiName: `Boss`,
		desc: `When The Boss first drops below 40% HP, he leaves combat to start doing sit-ups. Each sit-up restores @HealPercent@% of his maximum HP and gives him @ASPercent@% Attack and Movement Speed. If he reaches full HP he returns to combat Pumped Up: all of his attacks and spells deal true damage. If all of his allies die, he will immediately return to combat.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					'HealPercent': 15,
					'AAPercent': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Theboss.dds`,
		name: `The Boss`,
	},
	{
		apiName: `Set4_Tormented`,
		desc: `Tormented can be transformed after participating in @RoundsToTransform@ combats, enhancing their abilities.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					'{5ef02437}': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Tormented.dds`,
		name: `Tormented`,
	},
	{
		apiName: `Set4_Vanguard`,
		desc: `Vanguard champions gain bonus Armor and Magic Resist.<br><br><expandRow>(@MinUnits@) @Armor@ Armor and @MR@ Magic Resist</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Armor': 100,
					'{552e0cbe}': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'Armor': 250,
					'{552e0cbe}': 25,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'Armor': 500,
					'{552e0cbe}': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'Armor': 1000,
					'{552e0cbe}': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Vanguard.dds`,
		name: `Vanguard`,
	},
	{
		apiName: `Warlord`,
		desc: `Warlords have bonus HP and Spell Power. Each victorious combat they participate in increases the bonus by @VictoryPercent@%, stacking up to @MaxCombats@ times.<br><br><expandRow>(@MinUnits@) @InitialHP@ HP & @InitialAP@ Spell Power</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{0d6fd940}': 25,
					'{14853b15}': 250,
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'{0d6fd940}': 40,
					'{14853b15}': 400,
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'{0d6fd940}': 70,
					'{14853b15}': 700,
					'{4d63b2aa}': 10,
					'{8f2e74ba}': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Warlord.dds`,
		name: `Warlord`,
	},
]