import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Alchemist`,
		desc: `Innate: Alchemists ignore collision and never stop moving.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					null: null,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Alchemist.dds`,
		name: `Alchemist`,
	},
	{
		apiName: `Set2_Assassin`,
		desc: `Innate: At the start of combat, Assassins leap to the farthest enemy.<br><br>Assassins gain bonus Critical Strike Damage and Chance.<br><br><expandRow>(@MinUnits@) +@CritDamage@% Critical Strike Damage & +@CritChance@% Critical Strike Chance</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'CritDamage': 70,
					'CritChance': 10,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'CritDamage': 210,
					'CritChance': 20,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Assassin.dds`,
		name: `Assassin`,
	},
	{
		apiName: `Avatar`,
		desc: `Innate: Having an Avatar on your bench or board transforms all other Avatars in your shop to the Element of that Avatar.<br><br>(1) An Avatar's Origin Element is counted twice for Trait bonuses`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					null: null,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Avatar.dds`,
		name: `Avatar`,
	},
	{
		apiName: `Berserker`,
		desc: `Innate: At the start of combat, Berserkers leap to the nearest enemy.<br><br>When Berserkers attack, they have a @ProcChance@% chance to hit all units in a cone in front of them and apply on-hit effects.<br><br><row>(@MinUnits@) @ProcChance@% chance</row><br><row>(@MinUnits@) @ProcChance@% chance, and Berserkers gain +@ADBonus@ Attack Damage</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{5119f0ff}': null,
					'{898231b1}': 2,
					'{a37dac0c}': 100,
					'ProcChance': 45,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{5119f0ff}': 25,
					'{898231b1}': 2,
					'{a37dac0c}': 100,
					'ProcChance': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Berserker.dds`,
		name: `Berserker`,
	},
	{
		apiName: `Set2_Blademaster`,
		desc: `Blademasters' Basic Attacks have a @ProcChance@% chance to trigger additional attacks against their target.<br><br>These additional attacks deal damage like Basic Attacks and trigger on-hit effects.<br><br><row>(@MinUnits@) One Additional Attack</row><br><row>(@MinUnits@) Two Additional Attacks</row><br><row>(@MinUnits@) Three Additional Attacks</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'ExtraAttacks': 1,
					'ProcChance': 40,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'ExtraAttacks': 3,
					'ProcChance': 35,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Blademaster.dds`,
		name: `Blademaster`,
	},
	{
		apiName: `Wind`,
		desc: `All allies gain a chance to dodge enemy Basic Attacks.<br><br><expandRow>(@MinUnits@) @ProcPercent@% dodge chance</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 2,
				variables: {
					'ProcPercent': 20,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'ProcPercent': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'ProcPercent': 35,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Wind.dds`,
		name: `Cloud`,
	},
	{
		apiName: `Crystal`,
		desc: `Crystal Champions have a maximum amount of damage they can take from a single hit.<br><br><expandRow>(@MinUnits@) @DamageThreshold@ Max Damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 3,
				variables: {
					'{c1154e11}': 100,
					'{cca74473}': 110,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'{c1154e11}': 100,
					'{cca74473}': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Crystal.dds`,
		name: `Crystal`,
	},
	{
		apiName: `Desert`,
		desc: `Reduces each enemy's Armor.<br><br><expandRow>(@MinUnits@) @ArmorPercentReduction@% Armor reduction</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{e7acd68a}': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'{e7acd68a}': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Desert.dds`,
		name: `Desert`,
	},
	{
		apiName: `Druid`,
		desc: `<row>(@MinUnits@) Druids regenerate @HealAmount@ HP each second.</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'HealAmount': 45,
					'TickRate': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Druid.dds`,
		name: `Druid`,
	},
	{
		apiName: `Electric`,
		desc: `Electric Champions shock nearby enemies whenever they deal or receive a critical strike.<br><br><expandRow>(@MinUnits@) @Damage@ magic damage</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'Damage': 80,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'Damage': 250,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'Damage': 550,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Electric.dds`,
		name: `Electric`,
	},
	{
		apiName: `Set2_Glacial`,
		desc: `Basic Attacks from Glacials have a @ProcPercent@% chance to stun their target for @StunDuration@ seconds and do bonus Magic Damage.<br><br><expandRow>(@MinUnits@) @BonusDamage@ Magic Damage</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusDamage': 75,
					'StunDuration': 1.5,
					'ProcPercent': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusDamage': 175,
					'StunDuration': 1.5,
					'ProcPercent': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusDamage': 475,
					'StunDuration': 1.5,
					'ProcPercent': 25,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Glacial.dds`,
		name: `Glacial`,
	},
	{
		apiName: `Inferno`,
		desc: `Inferno critical hits and spell damage burns the ground beneath the target, dealing a percentage of that spell's pre-mitigation damage over @ZoneDuration@ seconds.<br><br><expandRow>(@MinUnits@) +@PercentBonusDamage@% damage on @NumZones@ hexes</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{9faee275}': 10,
					'{cb6b5298}': 70,
					'{d04eb593}': 4,
					'{e97e931e}': 1,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'{9faee275}': 10,
					'{cb6b5298}': 150,
					'{d04eb593}': 4,
					'{e97e931e}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'{9faee275}': 10,
					'{cb6b5298}': 250,
					'{d04eb593}': 4,
					'{e97e931e}': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Inferno.dds`,
		name: `Inferno`,
	},
	{
		apiName: `Light`,
		desc: `When a Light Champion dies, all other Light Champions gain Attack Speed and recover @HealAmount@% of the dying champion's maximum HP.<br><br><expandRow>(@MinUnits@) +@ASPercent@% Attack Speed</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'HealAmount': 20,
					'AAPercent': 20,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'HealAmount': 20,
					'AAPercent': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'HealAmount': 20,
					'AAPercent': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Light.dds`,
		name: `Light`,
	},
	{
		apiName: `Celestial`,
		desc: `(@MinUnits@) Every @Frequency@ seconds, all allied champions in combat are infused with Moonlight, increasing Crit Chance by @CritChance@%, Crit Damage by @CritDamage@%, and Spell Power by @AP@% (stacks to 4 times).`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'AP': 15,
					'CritChance': 15,
					'CritDamage': 15,
					'Frequency': 7,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Lunar.dds`,
		name: `Lunar`,
	},
	{
		apiName: `Mage`,
		desc: `Mages have a chance, when casting, to Doublecast instead.<br><br><row>(@MinUnits@) @ProcChance@% chance</row><br><row>(@MinUnits@) @ProcChance@% chance and +@APBonus@ Spell Power</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{666f247b}': null,
					'ProcChance': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{666f247b}': 20,
					'ProcChance': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mage.dds`,
		name: `Mage`,
	},
	{
		apiName: `Mountain`,
		desc: `<row>(@MinUnits@) At the start of combat, a random ally gains a @ShieldValue@ HP Stoneshield.</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'ShieldValue': 1500,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mountain.dds`,
		name: `Mountain`,
	},
	{
		apiName: `Mystic`,
		desc: `All allies gain Magic Resistance.<br><br><expandRow>(@MinUnits@) +@MR@ Magic Resistance</expandRow>`,
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
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'MR': 120,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mystic.dds`,
		name: `Mystic`,
	},
	{
		apiName: `Ocean`,
		desc: `All allies gain mana every @TickRate@ seconds.<br><br><expandRow>(@MinUnits@) +@ManaPerTick@ mana</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'TickRate': 4,
					'ManaPerTick': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'TickRate': 4,
					'ManaPerTick': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'TickRate': 4,
					'ManaPerTick': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Ocean.dds`,
		name: `Ocean`,
	},
	{
		apiName: `Poison`,
		desc: `<row>(@MinUnits@) Poison Champions apply Neurotoxin when they deal damage, increasing the mana cost of the target's spell by @CostIncrease@%</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'Duration': 60,
					'CostIncrease': 33,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Poison.dds`,
		name: `Poison`,
	},
	{
		apiName: `Predator`,
		desc: `<row>(@MinUnits@) Predators instantly kill enemies they damage who are below @HPThreshold@% HP.</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'{8f954b18}': 25,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Predator.dds`,
		name: `Predator`,
	},
	{
		apiName: `Set2_Ranger`,
		desc: `Every @ProcRate@ seconds, Rangers have a chance to gain Attack Speed for @ProcRate@ seconds. <br><br><expandRow>(@MinUnits@) @ProcPercent@% chance for @ASMultTooltip@x Attack Speed</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'ASMultiplier': 100,
					'ProcRate': 3,
					'{538d2e86}': 2,
					'ProcPercent': 35,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'ASMultiplier': 100,
					'ProcRate': 3,
					'{538d2e86}': 2,
					'ProcPercent': 80,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'ASMultiplier': 150,
					'ProcRate': 3,
					'{538d2e86}': 2.5,
					'ProcPercent': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Ranger.dds`,
		name: `Ranger`,
	},
	{
		apiName: `Shadow`,
		desc: `Shadow Champions deal increased damage for @Duration@ seconds at combat start and every time they get a takedown.<br><br><row>(@MinUnits@) +@DamageAmp@% damage</row><br><row>(@MinUnits@) +@DamageAmp@% damage, refreshed for any Shadow champions' takedowns</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'Duration': 6,
					'{1332d72a}': null,
					'{4c67d4fe}': 65,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'Duration': 6,
					'{1332d72a}': 1,
					'{4c67d4fe}': 150,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Shadow.dds`,
		name: `Shadow`,
	},
	{
		apiName: `Soulbound`,
		desc: `The first Soulbound champion to die in a round will instead enter the Spirit Realm, becoming untargetable and continuing to fight as long as another Soulbound ally is alive.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Soulbound.dds`,
		name: `Soulbound`,
	},
	{
		apiName: `Metal`,
		desc: `Steel Champions gain damage immunity for a few seconds when they are reduced below @HPPercentThreshold@% HP.<br><br><expandRow>(@MinUnits@) @ImmunityDuration@ seconds of immunity</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 2,
				variables: {
					'{4e5f79b7}': 50,
					'{d165d743}': 2,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'{4e5f79b7}': 50,
					'{d165d743}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'{4e5f79b7}': 50,
					'{d165d743}': 4,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Steel.dds`,
		name: `Steel`,
	},
	{
		apiName: `Summoner`,
		desc: `Summoned units gain bonus HP and last longer.<br><br><expandRow>(@MinUnits@) +@SummonDurationBoost@% HP and summon duration</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{360f62b5}': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{360f62b5}': 120,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Summoner.dds`,
		name: `Summoner`,
	},
	{
		apiName: `Warden`,
		desc: `Wardens gain Armor.<br><br><expandRow>(@MinUnits@) +@ArmorPercentIncrease@% Armor</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{04bbf4a5}': 150,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'{04bbf4a5}': 300,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{04bbf4a5}': 999,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Warden.dds`,
		name: `Warden`,
	},
	{
		apiName: `Woodland`,
		desc: `At the start of combat,  Woodland Champions make copies of themselves<br><br><row>(@MinUnits@) One random copy </row><br><row>(@MinUnits@) All Woodland Champions copy</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 3,
				variables: {
					'{b9aa7851}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{b9aa7851}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Woodland.dds`,
		name: `Woodland`,
	},
]
