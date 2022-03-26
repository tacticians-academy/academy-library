import type { TraitData } from '../index'

export enum TraitKey {
	Assassin = `Assassin`, Blademaster = `Blademaster`, Brawler = `Brawler`, Demon = `Demon`, Dragon = `Dragon`, Elementalist = `Elementalist`, Exile = `Exile`, Glacial = `Glacial`, Guardian = `Guardian`, Gunslinger = `Gunslinger`, Hextech = `Hextech`, Imperial = `Imperial`, Knight = `Knight`, Ninja = `Ninja`, Noble = `Noble`, Phantom = `Phantom`, Pirate = `Pirate`, Ranger = `Ranger`, Robot = `Robot`, Shapeshifter = `Shapeshifter`, Sorcerer = `Sorcerer`, Void = `Void`, Wild = `Wild`, Yordle = `Yordle`
}

export const traits: TraitData[] = [
	{
		desc: `Innate: At the start of combat, Assassins leap to the farthest enemy.<br><br>Assassins gain bonus Critical Strike Damage and Chance.<br><br><expandRow>(@MinUnits@) +@CritDamage@% Critical Strike Damage & +@CritChance@% Critical Strike Chance</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				variables: {
					'CritDamage': 75,
					'CritChance': 5,
				},
				style: 1,
			},
			{
				maxUnits: 8,
				minUnits: 6,
				variables: {
					'CritDamage': 150,
					'CritChance': 20,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				variables: {
					'CritDamage': 225,
					'CritChance': 30,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Assassin.dds`,
		name: `Assassin`,
	},
	{
		desc: `Blademaster Basic Attacks have a @ProcChance@% chance to trigger additional attacks against their target.<br><br>These additional attacks deal damage like Basic Attacks and trigger on-hit effects.<br><br><row>(@MinUnits@) One Additional Attack</row><br><row>(@MinUnits@) Two Additional Attacks</row><br><row>(@MinUnits@) Four Additional Attacks</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				variables: {
					'ExtraAttacks': 1,
					'ProcChance': 45,
				},
				style: 1,
			},
			{
				maxUnits: 8,
				minUnits: 6,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 45,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				variables: {
					'ExtraAttacks': 4,
					'ProcChance': 45,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Blademaster.dds`,
		name: `Blademaster`,
	},
	{
		desc: `Brawlers gain bonus Maximum HP.<br><br><expandRow>(@MinUnits@) @BonusHP@ Bonus HP</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'BonusHP': 250,
				},
				style: 1,
			},
			{
				maxUnits: 5,
				minUnits: 4,
				variables: {
					'BonusHP': 500,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'BonusHP': 900,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Brawler.dds`,
		name: `Brawler`,
	},
	{
		desc: `Basic Attacks from Demons have a @ManaDrainProcChance@% chance to reduce their target's Mana by @ManaDrainBurn@ and restore Mana to the Demon.<br><br><expandRow>(@MinUnits@) @ManaDrainDrain@ Mana restored</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'ManaDrainBurn': 20,
					'ManaDrainDrain': 15,
					'ManaDrainProcChance': 40,
				},
				style: 1,
			},
			{
				maxUnits: 5,
				minUnits: 4,
				variables: {
					'ManaDrainBurn': 20,
					'ManaDrainDrain': 30,
					'ManaDrainProcChance': 40,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'ManaDrainBurn': 20,
					'ManaDrainDrain': 45,
					'ManaDrainProcChance': 40,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Demon.dds`,
		name: `Demon`,
	},
	{
		desc: `<row>(@MinUnits@) Dragons gain @MagicReduction@% resistance to Magic Damage</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				variables: {
					'MagicReduction': 75,
				},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Dragon.dds`,
		name: `Dragon`,
	},
	{
		desc: `Innate: Elementalists gain double mana from Basic Attacks.<br><br><row>(@MinUnits@) At the start of combat, summon a Golem with 2200 HP to fight alongside your allies</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				variables: {
					'HPMultiplier': null,
					'SizeCoefficient': null,
					'{558229df}': null,
				},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Elementalist.dds`,
		name: `Elementalist`,
	},
	{
		desc: `<row>(@MinUnits@) If an Exile has no adjacent allies at the start of combat, they gain a shield equal to @ShieldPercent@% of their maximum HP</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				variables: {
					'ShieldPercent': 100,
				},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Exile.dds`,
		name: `Exile`,
	},
	{
		desc: `Basic Attacks from Glacials have a chance to stun their target for @StunDuration@ seconds.<br><br><expandRow>(@MinUnits@) @ProcPercent@% Chance to Stun</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'StunDuration': 1.5,
					'ProcPercent': 20,
				},
				style: 1,
			},
			{
				maxUnits: 5,
				minUnits: 4,
				variables: {
					'StunDuration': 1.5,
					'ProcPercent': 33,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'StunDuration': 1.5,
					'ProcPercent': 50,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Glacial.dds`,
		name: `Glacial`,
	},
	{
		desc: `<row>(@MinUnits@) At the start of combat, Guardians grant +@Armor@ Armor to adjacent allies (this bonus can stack any number of times)</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				variables: {
					'Armor': 40,
				},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Guardian.dds`,
		name: `Guardian`,
	},
	{
		desc: `Gunslinger Basic Attacks have a @ProcPercent@%  chance to fire additional bullets at other enemies within range.<br><br>These bullets deal damage like Basic Attacks and apply on-hit effects.<br><br><row>(@MinUnits@) Attack @ExtraTargetsHit@ extra enemies</row><br><row>(@MinUnits@) Attack @ExtraTargetsHit@ extra enemies</row><br><row>(@MinUnits@) Attack @ExtraTargetsHit@ extra enemies</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'ProcPercent': 50,
					'ExtraTargetsHit': 1,
					'{f768e185}': 1,
				},
				style: 1,
			},
			{
				maxUnits: 5,
				minUnits: 4,
				variables: {
					'ProcPercent': 50,
					'ExtraTargetsHit': 2,
					'{f768e185}': 2,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'ProcPercent': 50,
					'ExtraTargetsHit': 4,
					'{f768e185}': 3,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Gunslinger.dds`,
		name: `Gunslinger`,
	},
	{
		desc: `At the start of combat, an ally Hextech launches and detonates a pulse bomb, temporarily disabling nearby enemy items for @DisableDuration@ seconds.<br><br><row>(@MinUnits@) @HexSize@ Hex Radius</row><br><row>(@MinUnits@) @HexSize@ Hex Radius</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'DisableDuration': 5,
					'{a004f927}': 1.25,
					'HexSize': 1,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				variables: {
					'DisableDuration': 5,
					'{a004f927}': 1.25,
					'HexSize': 2,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Hextech.dds`,
		name: `Hextech`,
	},
	{
		desc: `At the start of combat, select Imperials are empowered to deal double damage.<br><br><row>(@MinUnits@) 1 Random Imperial</row><br><row>(@MinUnits@) All Imperials</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'DamageMultiplier': 2,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				variables: {
					'DamageMultiplier': 2,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Imperial.dds`,
		name: `Imperial`,
	},
	{
		desc: `All allies block a flat amount of damage from all sources.<br><br><expandRow>(@MinUnits@) @BlockAmount@ Damage Blocked</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'BlockAmount': 15,
				},
				style: 1,
			},
			{
				maxUnits: 5,
				minUnits: 4,
				variables: {
					'BlockAmount': 30,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'BlockAmount': 60,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Knight.dds`,
		name: `Knight`,
	},
	{
		desc: `Ninjas gain bonus Attack Damage and Spell Power.<br><br>This trait is only active when you have exactly 1 or 4 unique Ninjas.<br><br><row>(@MinUnits@) Ninja gains +@ADValue@ Attack Damage & +@APValue@% Spell Power</row><br><row>(@MinUnits@) All Ninjas gain +@ADValue@ Attack Damage & +@APValue@% Spell Power</row>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				variables: {
					'ADValue': 50,
					'APValue': 50,
				},
				style: 1,
			},
			{
				maxUnits: 4,
				minUnits: 4,
				variables: {
					'ADValue': 80,
					'APValue': 80,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Ninja.dds`,
		name: `Ninja`,
	},
	{
		desc: `At the start of combat, select allies gain +@Armor@ Armor, +@MR@ Magic Resistance, and heal @Heal@ HP on-hit.<br><br><row>(@MinUnits@) 1 Random Ally</row><br><row>(@MinUnits@) All Allies</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				variables: {
					'Armor': 50,
					'Heal': 30,
					'MR': 50,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'Armor': 50,
					'Heal': 30,
					'MR': 50,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Noble.dds`,
		name: `Noble`,
	},
	{
		desc: `<row>(@MinUnits@) At the start of combat, a random enemy's HP is set to @HPToSet@</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				variables: {
					'HPToSet': 100,
				},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Phantom.dds`,
		name: `Phantom`,
	},
	{
		desc: `<row>(@MinUnits@) At the end of each combat against another player, a treasure chest spawns on your arena containing up to 4 gold</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				variables: {},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Pirate.dds`,
		name: `Pirate`,
	},
	{
		desc: `Every @ProcRate@ seconds, Rangers have a chance to double their Attack Speed for @ProcRate@ seconds. <br><br><expandRow>(@MinUnits@) @ProcPercent@% Chance to Double Attack Speed</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'ASMultiplier': 2,
					'ProcRate': 3,
					'ProcPercent': 40,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				variables: {
					'ASMultiplier': 2,
					'ProcRate': 3,
					'ProcPercent': 70,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Ranger.dds`,
		name: `Ranger`,
	},
	{
		desc: `(@MinUnits@) Robots start combat at full Mana`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				variables: {},
				style: 1,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Robot.dds`,
		name: `Robot`,
	},
	{
		desc: `Shapeshifters gain bonus Maximum HP when they transform.<br><br><expandRow>(@MinUnits@) @HPPercent@% Bonus Maximum HP</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				variables: {
					'HPPercent': 60,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				variables: {
					'HPPercent': 100,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Shapeshifter.dds`,
		name: `Shapeshifter`,
	},
	{
		desc: `Innate: Sorcerers gain double Mana from Basic Attacks.<br><br>All allies have increased Spell Power.<br><br><expandRow>(@MinUnits@) +@AP@% Spell Power</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				variables: {
					'AP': 40,
				},
				style: 1,
			},
			{
				maxUnits: 8,
				minUnits: 6,
				variables: {
					'AP': 120,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				variables: {
					'AP': 200,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Sorcerer.dds`,
		name: `Sorcerer`,
	},
	{
		desc: `Basic Attacks and Spells from select Void champions deal true damage.<br><br><row>(@MinUnits@) 1 Random Void champion</row><br><row>(@MinUnits@) All Void champions</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'TrueDamagePercent': 100,
					'VoidChampions': 1,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				variables: {
					'TrueDamagePercent': 100,
					'VoidChampions': 1,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Void.dds`,
		name: `Void`,
	},
	{
		desc: `Select allies' Basic Attacks are empowered to grant +@ASPercent@% Bonus Attack Speed (stacks up to 5 times).<br><br><row>(@MinUnits@) Wild Allies Only</row><br><row>(@MinUnits@) All Allies, and allies' basic attacks cannot be dodged.</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				variables: {
					'AAPercent': 10,
				},
				style: 1,
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				variables: {
					'AAPercent': 10,
				},
				style: 2,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Wild.dds`,
		name: `Wild`,
	},
	{
		desc: `Yordles gain a chance to dodge enemy Basic Attacks.<br><br><expandRow>(@MinUnits@) @MissPercent@% Chance to Dodge</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				variables: {
					'MissPercent': 30,
				},
				style: 1,
			},
			{
				maxUnits: 8,
				minUnits: 6,
				variables: {
					'MissPercent': 60,
				},
				style: 2,
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				variables: {
					'MissPercent': 90,
				},
				style: 3,
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Yordle.dds`,
		name: `Yordle`,
	},
]