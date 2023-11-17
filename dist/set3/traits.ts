import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set3_Blademaster`,
		desc: `Blademasters' Basic Attacks have a chance to trigger two additional attacks against their target.<br><br>These additional attacks deal damage like Basic Attacks and trigger on-hit effects.<br><br><row>(@MinUnits@) @ProcChance@% Chance to trigger</row><br><row>(@MinUnits@) @ProcChance@% Chance to trigger</row><br><row>(@MinUnits@) @ProcChance@% Chance to trigger</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 30,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 55,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Blademaster.dds`,
		name: `Blademaster`,
	},
	{
		apiName: `Blaster`,
		desc: `Every fourth Basic Attack from a Blaster fires additional attacks at random enemies.<br><br>These additional attacks deal damage like Basic Attacks, trigger on-hit effects, and can critically hit.<br><br><expandRow>(@MinUnits@) @AdditionalAttacks@ Additional Attacks</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{7fd211f1}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'{7fd211f1}': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Blaster.dds`,
		name: `Blaster`,
	},
	{
		apiName: `Set3_Brawler`,
		desc: `Brawlers gain bonus Maximum HP.<br><br><expandRow>(@MinUnits@) @BonusHP@ Bonus HP</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusHP': 350,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusHP': 650,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Brawler.dds`,
		name: `Brawler`,
	},
	{
		apiName: `Set3_Celestial`,
		desc: `All allies heal for some of the damage they deal with spells and attacks.<br><br><expandRow>(@MinUnits@) @HealPercent@% Healing </expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{e0882668}': 15,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'{e0882668}': 35,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{e0882668}': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Celestial.dds`,
		name: `Celestial`,
	},
	{
		apiName: `Chrono`,
		desc: `All allies gain @PercentAS@% Attack Speed every few seconds.<br><br><expandRow>(@MinUnits@) @Frequency@ seconds</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Frequency': 8,
					'{db1859c9}': 15,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'Frequency': 4,
					'{db1859c9}': 15,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'Frequency': 2,
					'{db1859c9}': 15,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Chrono.dds`,
		name: `Chrono`,
	},
	{
		apiName: `Cybernetic`,
		desc: `Cybernetic champions with at least one item (component or full) gain HP and Attack Damage.<br><br><expandRow>(@MinUnits@) @HPAmp@ HP and @ADAmp@ Attack Damage</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{1a46e36f}': 350,
					'{cfaa2ad6}': 35,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'{1a46e36f}': 700,
					'{cfaa2ad6}': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Cybernetic.dds`,
		name: `Cybernetic`,
	},
	{
		apiName: `DarkStar`,
		desc: `When a Dark Star Champion dies, all other allied Dark Star Champions gain Attack Damage and Spell Power<br><br><expandRow>(@MinUnits@) +@ADandAP@ Attack Damage and Spell Power</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{1485c2a2}': 20,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'{1485c2a2}': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'{1485c2a2}': 35,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_DarkStar.dds`,
		name: `Dark Star`,
	},
	{
		apiName: `Demolitionist`,
		desc: `<expandRow>(@MinUnits@) Damage from Demolitionists' spellcasts stuns their targets for @StunDuration@ seconds. (Once per spellcast)</expandRow>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'StunDuration': 1.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Demolitionist.dds`,
		name: `Demolitionist`,
	},
	{
		apiName: `Infiltrator`,
		desc: `Innate: At the start of combat, Infiltrators move to the enemy's backline.<br><br>Infiltrators gain Attack Speed for @Duration@ seconds at the start of combat, refreshed on takedown.<br><br><row>(@MinUnits@) @ASPercent@% bonus Attack Speed</row><br><row>(@MinUnits@) @ASPercent@% bonus Attack Speed</row><br><row>(@MinUnits@) @ASPercent@% bonus Attack Speed</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 6,
					'{650d33c0}': 1,
					'AAPercent': 50,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 6,
					'{650d33c0}': 1,
					'AAPercent': 75,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 6,
					'{650d33c0}': 1,
					'AAPercent': 120,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Infiltrator.dds`,
		name: `Infiltrator`,
	},
	{
		apiName: `ManaReaver`,
		desc: `<expandRow>(@MinUnits@) Mana-Reaver attacks increase the mana cost of their target's next spellcast by @CostIncreasePercent@%.</expandRow>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'{4d7069b1}': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_ManaReaver.dds`,
		name: `Mana-Reaver`,
	},
	{
		apiName: `MechPilot`,
		desc: `(@MinUnits@) At the start of combat, three random Mech-Pilots are teleported into a Super-Mech.<br><br>The Super-Mech has the combined HP, Attack Damage, and Traits of its pilots, as well as 3 random items from among them.<br><br>When the Super-Mech dies the Pilots are ejected and continue to fight.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {
					'{092d19fb}': 1500,
					'{5dd40675}': 0.44999998807907104,
					'{952c9d9c}': 0.44999998807907104,
					'{d13e2b40}': 1,
					'{dc3931d7}': null,
					'{ed41c244}': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_MechPilot.dds`,
		name: `Mech-Pilot`,
	},
	{
		apiName: `Mercenary`,
		desc: `Innate: Upgrades for Mercenaries' spells have a chance to appear in the shop.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Mercenary.dds`,
		name: `Mercenary`,
	},
	{
		apiName: `Set3_Mystic`,
		desc: `All allies gain Magic Resistance.<br><br><expandRow>(@MinUnits@) @MR@ Magic Resistance</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MR': 35,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'MR': 105,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mystic.dds`,
		name: `Mystic`,
	},
	{
		apiName: `Protector`,
		desc: `Protectors shield themselves for @Duration@ seconds whenever they cast a spell. This shield doesn't stack.<br><br><expandRow> (@MinUnits@) @ShieldPercent@% Maximum HP Shield</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 4,
					'ShieldPercent': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 4,
					'ShieldPercent': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 4,
					'ShieldPercent': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Protector.dds`,
		name: `Protector`,
	},
	{
		apiName: `Rebel`,
		desc: `At the start of combat, Rebels gain a shield and bonus damage for each adjacent Rebel. The shield lasts for @ShieldDuration@ seconds.<br><br><expandRow>(@MinUnits@) @ShieldAmount@ Shield & @DamageAmp@% Damage</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'ShieldDuration': 8,
					'{40ee74ec}': 150,
					'{4c67d4fe}': 10,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 3,
				variables: {
					'ShieldDuration': 8,
					'{40ee74ec}': 210,
					'{4c67d4fe}': 15,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 4,
				variables: {
					'ShieldDuration': 8,
					'{40ee74ec}': 330,
					'{4c67d4fe}': 20,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Rebel.dds`,
		name: `Rebel`,
	},
	{
		apiName: `Sniper`,
		desc: `<expandRow>(@MinUnits@) Snipers deal @PercentDamageIncrease@% increased damage for each hex between themselves and their target.</expandRow>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'PercentDamageIncrease': 15,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Sniper.dds`,
		name: `Sniper`,
	},
	{
		apiName: `Set3_Sorcerer`,
		desc: `All allies have increased Spell Power.<br><br><expandRow>(@MinUnits@) @AP@% Spell Power</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AP': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 2,
				variables: {
					'AP': 40,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 3,
				variables: {
					'AP': 75,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'AP': 120,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Sorcerer.dds`,
		name: `Sorcerer`,
	},
	{
		apiName: `SpacePirate`,
		desc: `Whenever a Space Pirate lands a killing blow on a Champion there is a chance to drop extra loot.<br><br><row>(@MinUnits@) @CoinDropChance@% for 1 gold</row><br><row>(@MinUnits@) @CoinDropChance@% for 1 gold and @ItemDropChance@% for a component item</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{0f4980a5}': 50,
					'{c79d638b}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'{0f4980a5}': 50,
					'{c79d638b}': 25,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_SpacePirate.dds`,
		name: `Space Pirate`,
	},
	{
		apiName: `StarGuardian`,
		desc: `Star Guardians' spellcasts grant Mana to other Star Guardians, spread among them.<br><br><expandRow>(@MinUnits@) @ManaRestore@ Total Mana</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'ManaRestore': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 3,
				variables: {
					'ManaRestore': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_StarGuardian.dds`,
		name: `Star Guardian`,
	},
	{
		apiName: `Starship`,
		desc: `Innate: Starships gain @ManaPerSecond@ mana per second, maneuver around the board, and are immune to movement impairing effects, but can't make Basic Attacks.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 3,
				variables: {
					'ManaPerSecond': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Starship.dds`,
		name: `Starship`,
	},
	{
		apiName: `Valkyrie`,
		desc: `<expandRow>(@MinUnits@) Valkyrie attacks and spells always critically hit targets below @PercentHP@% HP. </expandRow>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 3,
				variables: {
					'{f880a530}': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Valkyrie.dds`,
		name: `Valkyrie`,
	},
	{
		apiName: `Vanguard`,
		desc: `Vanguard champions gain bonus Armor.<br><br><expandRow>(@MinUnits@) @Armor@ Armor</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Armor': 125,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 3,
				variables: {
					'Armor': 250,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Vanguard.dds`,
		name: `Vanguard`,
	},
	{
		apiName: `Set3_Void`,
		desc: `(@MinUnits@) Attacks and spells from Void champions deal true damage.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 3,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Void.dds`,
		name: `Void`,
	},
]
