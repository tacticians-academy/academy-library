import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Astro`,
		desc: `(@MinUnits@) Astro abilities cost @ManaCostReduction@ less Mana.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'{1f714854}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Astro.tex`,
		name: `Astro`,
	},
	{
		apiName: `Battlecast`,
		desc: `After dealing or taking 10 instances of damage, Battlecast champions deal magic damage to the nearest enemy. If below 50% HP, heal that much instead.<br><br><expandRow>(@MinUnits@) @HealOrDamageAmount@ magic damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{d56201a3}': 90,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{d56201a3}': 200,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'{d56201a3}': 400,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'{d56201a3}': 800,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Battlecast.tex`,
		name: `Battlecast`,
	},
	{
		apiName: `Set3_Blademaster`,
		desc: `Blademasters' attacks have a chance to trigger additional attacks against the current target.<br><br><expandRow>(@MinUnits@) @ProcChance@% chance. @ExtraAttacks@ extra attack(s).</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'ExtraAttacks': 1,
					'ProcChance': 35,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 4,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 35,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'ExtraAttacks': 2,
					'ProcChance': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Blademaster.tex`,
		name: `Blademaster`,
	},
	{
		apiName: `Blaster`,
		desc: `Every 4th attack, Blasters fire additional attacks at random enemies. These additional attacks can critically hit.<br><br><expandRow>(@MinUnits@) @AdditionalAttacks@ Additional Attacks</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{7fd211f1}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'{7fd211f1}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Blaster.tex`,
		name: `Blaster`,
	},
	{
		apiName: `Set3_Brawler`,
		desc: `Brawlers gain HP.<br><br><expandRow>(@MinUnits@) +@BonusHP@ %i:scaleHP%</expandRow>`,
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
				style: 4,
				variables: {
					'BonusHP': 600,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Brawler.tex`,
		name: `Brawler`,
	},
	{
		apiName: `Set3_Celestial`,
		desc: `Your team gains Omnivamp.<br><br><expandRow>(@MinUnits@) @HealPercent@% Omnivamp</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'HealPercent': 12,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'HealPercent': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'HealPercent': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Celestial.tex`,
		name: `Celestial`,
	},
	{
		apiName: `Chrono`,
		desc: `Your team gains @PercentAS@% Attack Speed at the start of combat and every few seconds.<br><br><row>(@MinUnits@) @Frequency@ seconds</row><br><row>(@MinUnits@) @Frequency@ seconds</row><br><row>(@MinUnits@) @Frequency@ second</row><br><row>(@MinUnits@) @Frequency@ seconds</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Frequency': 7,
					'PercentAS': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Frequency': 4,
					'PercentAS': 10,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'Frequency': 1.5,
					'PercentAS': 10,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'Frequency': 0.5,
					'PercentAS': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Chrono.tex`,
		name: `Chrono`,
	},
	{
		apiName: `Cybernetic`,
		desc: `Cybernetics holding at least 1 item gain Attack Damage and HP.<br><br><expandRow>(@MinUnits@) +@ADAmp*100@% %i:scaleAD%, +@HPAmp@ %i:scaleHP%</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'{1a46e36f}': 250,
					'{cfaa2ad6}': 0.20000000298023224,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{1a46e36f}': 550,
					'{cfaa2ad6}': 0.44999998807907104,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Cybernetic.tex`,
		name: `Cybernetic`,
	},
	{
		apiName: `DarkStar`,
		desc: `Whenever an allied champion dies, Dark Stars gain Attack Damage and Ability Power.<br><br><expandRow>(@MinUnits@) +@ADandAP@% %i:scaleAD%, +@ADandAP@ %i:scaleAP%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{1485c2a2}': 6,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{1485c2a2}': 15,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'{1485c2a2}': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'{1485c2a2}': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_DarkStar.tex`,
		name: `Dark Star`,
	},
	{
		apiName: `Demolitionist`,
		desc: `<expandRow>(@MinUnits@) Demolitionists' abilities Stun enemies for @StunDuration@ seconds. (Once per cast)</expandRow>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 4,
				variables: {
					'StunDuration': 1.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Demolitionist.tex`,
		name: `Demolitionist`,
	},
	{
		apiName: `Infiltrator`,
		desc: `Innate: At the start of combat, Infiltrators move to the enemy's backline.<br><br>Infiltrators gain Attack Speed for @Duration@ seconds at the start of combat, refreshed on enemy takedowns.<br><br><expandRow>(@MinUnits@) @ASPercent@% %i:scaleAS%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'ASPercent': 25,
					'Duration': 6,
					'{650d33c0}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'ASPercent': 45,
					'Duration': 6,
					'{650d33c0}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'ASPercent': 75,
					'Duration': 6,
					'{650d33c0}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Infiltrator.tex`,
		name: `Infiltrator`,
	},
	{
		apiName: `ManaReaver`,
		desc: `<expandRow>(@MinUnits@) Mana-Reaver attacks Mana Reave. </expandRow><br><br><rules><tftbold>Mana Reave</tftbold>: Increase max Mana by @CostIncreasePercent@% until the next cast.</rules>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 4,
				variables: {
					'{4d7069b1}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_ManaReaver.tex`,
		name: `Mana-Reaver`,
	},
	{
		apiName: `MechPilot`,
		desc: `(@MinUnits@) Start of Combat: 3 random Mech-Pilots merge into a Super-Mech.<br><br>The Super-Mech has the Traits of its pilots, 3 random items from among them, and gains 65% of the combined pilots' HP and Attack Damage.<br><br>When the Super-Mech dies, the Pilots are ejected with @EjectedPilotHPPercent@% of their max HP.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'{092d19fb}': 1500,
					'{265b60fa}': 35,
					'{5dd40675}': 0.6499999761581421,
					'{952c9d9c}': 0.6499999761581421,
					'{d13e2b40}': 0.800000011920929,
					'{dc3931d7}': null,
					'{ed41c244}': 90,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_MechPilot.tex`,
		name: `Mech-Pilot`,
	},
	{
		apiName: `Mercenary`,
		desc: `(@MinUnits@) Innate: Upgrades for Mercenaries' abilities have a chance to appear in the shop.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Mercenary.tex`,
		name: `Mercenary`,
	},
	{
		apiName: `Set3_Mystic`,
		desc: `Your team gains Magic Resist.<br><br><expandRow>(@MinUnits@) @MR@ %i:scaleMR%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MR': 30,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'MR': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_2_Mystic.tex`,
		name: `Mystic`,
	},
	{
		apiName: `Paragon`,
		desc: `(@MinUnits@) Your team's attacks are converted to magic damage. Your Star Guardians' attacks deal true damage instead.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Paragon.tex`,
		name: `Paragon`,
	},
	{
		apiName: `Protector`,
		desc: `Whenever a Protector casts their ability, they gain a Shield for @Duration@ seconds.<br><br><expandRow>(@MinUnits@) @ShieldPercent@% max %i:scaleHP%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 4,
					'ShieldPercent': 30,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'Duration': 4,
					'ShieldPercent': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 4,
					'ShieldPercent': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Protector.tex`,
		name: `Protector`,
	},
	{
		apiName: `Rebel`,
		desc: `At start of combat for @ShieldDuration@ seconds, Rebels gain a Shield and bonus damage for each adjacent Rebel.<br><br><expandRow>(@MinUnits@) @ShieldAmount@ Shield; +@DamageAmp@% bonus damage</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'DamageAmp': 6,
					'ShieldAmount': 150,
					'ShieldDuration': 8,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 4,
				variables: {
					'DamageAmp': 10,
					'ShieldAmount': 225,
					'ShieldDuration': 8,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'DamageAmp': 20,
					'ShieldAmount': 400,
					'ShieldDuration': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Rebel.tex`,
		name: `Rebel`,
	},
	{
		apiName: `Sniper`,
		desc: `Snipers deal bonus damage for each hex between themselves and their target.<br><br><expandRow>(@MinUnits@) +@PercentDamageIncrease@% per hex</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'PercentDamageIncrease': 9,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'PercentDamageIncrease': 16,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Sniper.tex`,
		name: `Sniper`,
	},
	{
		apiName: `Set3_Sorcerer`,
		desc: `Your team gains Ability Power.<br><br><expandRow>(@MinUnits@) @AP@ %i:scaleAP%</expandRow>`,
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
				style: 3,
				variables: {
					'AP': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'AP': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Sorcerer.tex`,
		name: `Sorcerer`,
	},
	{
		apiName: `SpacePirate`,
		desc: `Whenever a Space Pirate lands a killing blow, there is a chance to drop loot.<br><br><row>(@MinUnits@) @CoinDropChance@% for 1 gold</row><br><row>(@MinUnits@) and @ItemDropChance@% to drop an item</row>`,
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
				style: 4,
				variables: {
					'{0f4980a5}': 50,
					'{c79d638b}': 33,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_SpacePirate.tex`,
		name: `Space Pirate`,
	},
	{
		apiName: `StarGuardian`,
		desc: `Whenever a Star Guardian casts, an amount of Mana is divided between all other Star Guardians.<br><br><expandRow>(@MinUnits@) @ManaRestore@ %i:scaleMana%</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'ManaRestore': 15,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 4,
				variables: {
					'ManaRestore': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'ManaRestore': 80,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_StarGuardian.tex`,
		name: `Star Guardian`,
	},
	{
		apiName: `Starship`,
		desc: `(@MinUnits@) Starships gain @ManaPerSecond@ Mana per second, maneuver around the board, and are immune to movement impairing effects, but don't attack.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {
					'ManaPerSecond': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Starship.tex`,
		name: `Starship`,
	},
	{
		apiName: `Valkyrie`,
		desc: `<expandRow>(@MinUnits@) Valkyrie attacks and spells always critically hit targets below @PercentHP@% HP. </expandRow>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 2,
				style: 4,
				variables: {
					'PercentHP': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Valkyrie.tex`,
		name: `Valkyrie`,
	},
	{
		apiName: `Vanguard`,
		desc: `Vanguards gain Armor.<br><br><expandRow>(@MinUnits@) @Armor@ %i:scaleArmor%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Armor': 70,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Armor': 150,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Armor': 350,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Vanguard.tex`,
		name: `Vanguard`,
	},
	{
		apiName: `Set3_Void`,
		desc: `(@MinUnits@) Attacks and spells from Void champions deal true damage.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_Void.tex`,
		name: `Void`,
	},
]
