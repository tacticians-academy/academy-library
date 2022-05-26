import { ItemKey } from '../index.js'
import type { ItemData } from '../index'

export const componentItems: ItemData[] = [
	{
		desc: `%i:scaleAD% +@AD@ Attack Damage`,
		effects: {
			'AD': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/BF_Sword.dds`,
		id: 1,
		name: `B.F. Sword`,
		unique: false,
	},
	{
		desc: `%i:scaleAS% +@AS@ Attack Speed`,
		effects: {
			'AS': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Recurve_Bow.dds`,
		id: 2,
		name: `Recurve Bow`,
		unique: false,
	},
	{
		desc: `%i:scaleAP% +@AP@ Ability Power`,
		effects: {
			'AP': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Needlessly_Large_Rod.dds`,
		id: 3,
		name: `Needlessly Large Rod`,
		unique: false,
	},
	{
		desc: `%i:scaleMana% +@Mana@ Mana`,
		effects: {
			'Mana': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Tear_of_the_Goddess.dds`,
		id: 4,
		name: `Tear of the Goddess`,
		unique: false,
	},
	{
		desc: `%i:scaleArmor% +@Armor@ Armor`,
		effects: {
			'Armor': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Chain_Vest.dds`,
		id: 5,
		name: `Chain Vest`,
		unique: false,
	},
	{
		desc: `%i:scaleMR% +@MR@ Magic Resist`,
		effects: {
			'MR': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Negatron_Cloak.dds`,
		id: 6,
		name: `Negatron Cloak`,
		unique: false,
	},
	{
		desc: `%i:scaleHP% +@HP@ HP`,
		effects: {
			'HP': 150,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Gaints_Belt.dds`,
		id: 7,
		name: `Giant's Belt`,
		unique: false,
	},
	{
		desc: `It must do <i>something</i>...`,
		effects: {
			'{fe9818ef}': 5,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Spatula.dds`,
		id: 8,
		name: `Spatula`,
		unique: false,
	},
	{
		desc: `+@CritChance@ Critical Strike Chance<br>+@DodgeChance@ Dodge Chance`,
		effects: {
			'CritChance': 5,
			'DodgeChance': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Sparring_Gloves.dds`,
		id: 9,
		name: `Sparring Gloves`,
		unique: false,
	},
]

export const completedItems: ItemData[] = [
	{
		desc: `Contributing to a kill grants the holder %i:scaleAD% @ADPerStack@ Attack Damage for the rest of combat. This effect can stack any number of times (starting at @StartingStacks@).`,
		effects: {
			'AD': 20,
			'ADPerStack': 10,
			'StartingStacks': 4,
		},
		from: [1, 1],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Death_Blade.dds`,
		id: 11,
		name: `Deathblade`,
		unique: false,
	},
	{
		desc: `The holder's Abilities and attacks do @SmallBonusPct@% bonus damage. If the target has more than @HPThreshold@ maximum HP, the bonus increases to @LargeBonusPct@%.`,
		effects: {
			'AD': 10,
			'AS': 10,
			'HPThreshold': 1650,
			'{a79cf66e}': 18,
			'LargeBonusPct': 75,
			'SmallBonusPct': 10,
		},
		from: [1, 2],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Giant_Slayer.dds`,
		id: 12,
		name: `Giant Slayer`,
		unique: false,
	},
	{
		desc: `The holder's magic and true damage from Abilities heal them for @OmniVamp@% of the damage dealt. Excess healing fuels a shield that protects the holder against up to @ShieldMax@ damage.`,
		effects: {
			'AD': 10,
			'AP': 10,
			'ShieldMax': 300,
			'OmniVamp': 33,
		},
		from: [1, 3],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Hextech_Gunblade.dds`,
		id: 13,
		name: `Hextech Gunblade`,
		unique: false,
	},
	{
		desc: `The holder's attacks restore %i:scaleMana% @FlatManaRestore@ additional Mana. `,
		effects: {
			'AD': 10,
			'Mana': 15,
			'FlatManaRestore': 8,
		},
		from: [1, 4],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Spear_of_Shojin.dds`,
		id: 14,
		name: `Spear of Shojin`,
		unique: false,
	},
	{
		desc: `Prevents the holder's first death, placing them in stasis instead. After @StasisDuration@ seconds, they return with @HPRestore@ HP and shed all negative effects.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AD': 10,
			'Armor': 20,
			'HPRestore': 400,
			'StasisDuration': 2,
		},
		from: [1, 5],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Guardian_Angel.dds`,
		id: 15,
		name: `Guardian Angel`,
		unique: true,
	},
	{
		desc: `Physical damage heals the holder for @Lifesteal@% of the damage dealt.<br><br>Upon falling below @HPThreshold@% HP, the holder gains a @ShieldHPPercent@% max HP shield that lasts up to @ShieldDuration@ seconds.`,
		effects: {
			'AD': 10,
			'HPThreshold': 40,
			'LifeSteal': 33,
			'MR': 20,
			'ShieldDuration': 5,
			'ShieldHPPercent': 30,
		},
		from: [1, 6],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Bloodthirster.dds`,
		id: 16,
		name: `Bloodthirster`,
		unique: false,
	},
	{
		desc: `When combat begins, the holder and all allies within @HexRange@ hexes in the same row gain %i:scaleAS% @AS@% Attack Speed for the rest of combat.`,
		effects: {
			'AD': 10,
			'AS': 25,
			'HP': 150,
			'HexRange': 1,
		},
		from: [1, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Zekes_Herald.dds`,
		id: 17,
		name: `Zeke's Herald`,
		unique: false,
	},
	{
		desc: `Grants @CritChance@% Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes +@BonusCritDmgPerCritAbove100@% Critical Strike Damage.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AD': 10,
			'CritChance': 75,
			'BonusCritDmgPerCritAbove100': 1,
		},
		from: [1, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Infinity_Edge.dds`,
		id: 19,
		name: `Infinity Edge`,
		unique: true,
	},
	{
		desc: `Increases the holder's Attack Range by @HexRangeIncrease@ hex and grants %i:scaleAS% @TooltipBonusAS@% bonus Attack Speed (including components).<br><br>The wearer's attacks can no longer miss.<br><br>`,
		effects: {
			'AS': 40,
			'HexRangeIncrease': 1,
			'TooltipBonusAS': 40,
			'AttackAccuracy': 100,
		},
		from: [2, 2],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Rapid_Fire_Cannon.dds`,
		id: 22,
		name: `Rapid Firecannon`,
		unique: false,
	},
	{
		desc: `Attacks grant +@ASPerStack@% bonus Attack Speed for the rest of combat.<br><br>This effect can stack any number of times.`,
		effects: {
			'AP': 10,
			'AS': 10,
			'ASPerStack': 6,
		},
		from: [2, 3],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Guinsoos_Rageblade.dds`,
		id: 23,
		name: `Guinsoo's Rageblade`,
		unique: false,
	},
	{
		desc: `Every third attack from the holder unleashes a chain lightning that bounces to @1StarBounces@ enemies, dealing @Damage@ magic damage and reducing their Magic Resist by @MRShred@% for @MRShredDuration@ seconds.`,
		effects: {
			'AS': 10,
			'Damage': 70,
			'Mana': 15,
			'1StarBounces': 4,
			'2StarBounces': 4,
			'3StarBounces': 4,
			'4StarBounces': 4,
			'MRShredDuration': 5,
			'MRShred': 50,
		},
		from: [2, 4],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Statikk_Shiv.dds`,
		id: 24,
		name: `Statikk Shiv`,
		unique: false,
	},
	{
		desc: `When the holder takes damage or inflicts a critical hit, they gain @StackingAD@ Attack Damage and Ability Power. <br><br>This stacks up to @StackCap@ times, at which point the holder gains @BonusResistsAtStackCap@ Armor and Magic Resist.`,
		effects: {
			'AS': 10,
			'Armor': 20,
			'StackCap': 25,
			'StackingAD': 3,
			'BonusResistsAtStackCap': 25,
			'StackingAP': 3,
			'{d50b4559}': 2,
		},
		from: [5, 2],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Titans_Resolve.dds`,
		id: 25,
		name: `Titan's Resolve`,
		unique: false,
	},
	{
		desc: `The holder's attacks fire a bolt at another nearby enemy, dealing @MultiplierForDamage@% of the holder's Attack Damage and applying on-hit effects. These bolts can critically strike.`,
		effects: {
			'AS': 10,
			'AdditionalTargets': 1,
			'MR': 20,
			'MultiplierForDamage': 75,
		},
		from: [6, 2],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Runaans_Hurricane.dds`,
		id: 26,
		name: `Runaan's Hurricane`,
		unique: false,
	},
	{
		desc: `At the start of combat, the holder taunts enemies within @HexRadius@ hexes. <br><br>When the holder dies, a Voidspawn arises taunting nearby enemies. Voidspawns that arise from summoned units are @SummonedStatReduction@% effective.`,
		effects: {
			'AS': 10,
			'HP': 150,
			'HexRadius': 2,
			'SummonedStatReduction': 25,
		},
		from: [2, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/ZZRot_Portal.dds`,
		id: 27,
		name: `Zz'Rot Portal`,
		unique: false,
	},
	{
		desc: `When the holder inflicts a critical hit, the target's Armor is reduced by @ArmorReductionPercent@% for @ArmorBreakDuration@ seconds. This effect does not stack.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 10,
			'CritChance': 15,
			'ArmorReductionPercent': 70,
			'ArmorBreakDuration': 5,
		},
		from: [2, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Last_Whisper.dds`,
		id: 29,
		name: `Last Whisper`,
		unique: true,
	},
	{
		desc: `Grants %i:scaleAP% @TooltipDisplayAP@ bonus Ability Power (including components).`,
		effects: {
			'AP': 20,
			'{59b19467}': 70,
			'BonusAP': 50,
		},
		from: [3, 3],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Rabadons_Deathcap.dds`,
		id: 33,
		name: `Rabadon's Deathcap`,
		unique: false,
	},
	{
		desc: `Each time the holder casts their Ability, they gain bonus Ability Power equal to @ManaRatio@% of their maximum Mana (this bonus applies to that Ability cast).`,
		effects: {
			'AP': 10,
			'Mana': 15,
			'ManaRatio': 45,
		},
		from: [3, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ArchangelsStaff.TFT_Set5.dds`,
		id: 34,
		name: `Archangel's Staff`,
		unique: false,
	},
	{
		desc: `When combat begins, the holder and all allies within @HexRange@ hexes in the same row gain a shield that blocks @1StarShieldValue@/@2StarShieldValue@/@3StarShieldValue@ %i:star% damage for @ShieldDuration@ seconds.`,
		effects: {
			'AP': 10,
			'Armor': 20,
			'ShieldDuration': 8,
			'2StarShieldValue': 350,
			'1StarShieldValue': 300,
			'3StarShieldValue': 400,
			'HexRange': 2,
			'4StarShieldValue': 800,
		},
		from: [3, 5],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Locket_of_the_Iron_Solari.dds`,
		id: 35,
		name: `Locket of the Iron Solari`,
		unique: false,
	},
	{
		desc: `Enemies within @HexRange@ hexes have their Magic Resist reduced by @MRShred@%. When they cast an Ability, they are zapped taking magic damage equal to @ManaRatio@% of their max Mana.`,
		effects: {
			'AP': 10,
			'Damage': 250,
			'MR': 20,
			'HexRange': 2,
			'ManaRatio': 250,
			'MRShred': 50,
		},
		from: [3, 6],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Ionic_Spark.dds`,
		id: 36,
		name: `Ionic Spark`,
		unique: false,
	},
	{
		desc: `When the holder deals magic or true damage with their Ability, they burn the target, dealing @BurnPercent@% of the target's maximum HP as true damage over @BurnDuration@ seconds, and reducing healing by @GrievousWoundsPercent@% for the duration of the burn.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 10,
			'HP': 150,
			'MonsterCap': 100,
			'TicksPerSecond': 1,
			'GrievousWoundsPercent': 50,
			'BurnPercent': 25,
			'BurnDuration': 10,
		},
		from: [3, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Morellonomicon.dds`,
		id: 37,
		name: `Morellonomicon`,
		unique: true,
	},
	{
		desc: `The holder's magic and true damage from their Ability can critically strike. The holder gains @CritDamage@% bonus Critical Strike Damage.`,
		effects: {
			'AP': 10,
			'CritChance': 15,
			'CritDamage': 40,
		},
		from: [3, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Jeweled_Guantlet.dds`,
		id: 39,
		name: `Jeweled Gauntlet`,
		unique: false,
	},
	{
		desc: `After casting their Ability, the holder gains %i:scaleMana% @ManaRestore@ mana.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Mana': 30,
			'ManaRestore': 20,
			'{71bc3700}': 200,
		},
		from: [4, 4],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Blue_Buff.dds`,
		id: 44,
		name: `Blue Buff`,
		unique: true,
	},
	{
		desc: `Reduces the Attack Speed of enemies within @HexRadius@ hexes by @ASSlow@%.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 20,
			'ASSlow': 25,
			'Mana': 15,
			'HexRadius': 2,
		},
		from: [4, 5],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Frozen_Heart.dds`,
		id: 45,
		name: `Frozen Heart`,
		unique: true,
	},
	{
		desc: `When combat begins, the holder and all allies within @HexRange@ hex in the same row gain %i:scaleAP% @BonusAP@ Ability Power for the rest of combat.`,
		effects: {
			'MR': 20,
			'Mana': 15,
			'ManaRestore': 10,
			'HexRange': 1,
			'{APTimer}': 20,
			'BonusAP': 25,
		},
		from: [6, 4],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Chalice_of_Power.dds`,
		id: 46,
		name: `Chalice of Power`,
		unique: false,
	},
	{
		desc: `Every @HealTickRate@ seconds, the holder radiates an aura to allies within @HexRadius@ hex, healing them for @MissingHPHeal@% of their missing HP.<br><br>Affected allies take @AoEDamageReduction@% reduced damage from multi-target abilities and attacks for @HealTickRate@ seconds.`,
		effects: {
			'HP': 150,
			'Mana': 15,
			'MaxHeal': 1000,
			'AoEDamageReduction': 25,
			'HexRadius': 1,
			'MissingHPHeal': 20,
			'HealTickRate': 5,
		},
		from: [4, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Redemption.dds`,
		id: 47,
		name: `Redemption`,
		unique: false,
	},
	{
		desc: `At the beginning of each planning phase, the holder gains one of the following:<li>+@BonusAD@ Attack Damage and +@BonusAP@ Ability Power.</li> <li>Attacks and Abilities heal for @TraitMultiplier@% of damage dealt.</li>`,
		effects: {
			'CritChance': 15,
			'Mana': 15,
			'TraitMultiplier': 66.66699981689453,
			'AdditionalADAP': 40,
			'AdditionalHeal': 45,
		},
		from: [4, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Hand_of_Justice.dds`,
		id: 49,
		name: `Hand Of Justice`,
		unique: false,
	},
	{
		desc: `Negates bonus damage from incoming critical strikes. On being hit by an attack, deal @1StarAoEDamage@/@2StarAoEDamage@/@3StarAoEDamage@ %i:star% magic damage to all nearby enemies (once every @ICD@ seconds).`,
		effects: {
			'Armor': 40,
			'ICD': 2.5,
			'3StarAoEDamage': 150,
			'1StarAoEDamage': 80,
			'CritDamageBlock': 100,
			'2StarAoEDamage': 100,
			'4StarAoEDamage': 250,
		},
		from: [5, 5],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Bramble_Vest.dds`,
		id: 55,
		name: `Bramble Vest`,
		unique: false,
	},
	{
		desc: `The holder gains %i:scaleArmor% @ArmorPerEnemy@ Armor and %i:scaleMR% @MRPerEnemy@ Magic Resist for each enemy targeting them.`,
		effects: {
			'Armor': 20,
			'MR': 20,
			'MRPerEnemy': 18,
			'ArmorPerEnemy': 18,
		},
		from: [5, 6],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Gargoyle_Stoneplate.dds`,
		id: 56,
		name: `Gargoyle Stoneplate`,
		unique: false,
	},
	{
		desc: `Every @ICD@ seconds, a random enemy within @HexRange@ hexes is burned for @BurnPercent@% of their maximum HP as true damage over @BurnDuration@ seconds. Any healing they receive is reduced by @GrievousWoundsPercent@%.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 20,
			'HP': 150,
			'ICD': 2.5,
			'MonsterCap': 100,
			'GrievousWoundsPercent': 50,
			'BurnPercent': 25,
			'{8bfdb3fa}': 2,
			'BurnDuration': 10,
			'HexRange': 2,
		},
		from: [5, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Sunfire_Cape.dds`,
		id: 57,
		name: `Sunfire Cape`,
		unique: true,
	},
	{
		desc: `When combat begins, the holder shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana by @CostIncrease@% until they cast.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 20,
			'SilenceDuration': 60,
			'CostIncrease': 35,
			'DodgeChance': 15,
		},
		from: [5, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Shroud_of_Stillness.dds`,
		id: 59,
		name: `Shroud of Stillness`,
		unique: true,
	},
	{
		desc: `Grants %i:scaleMR% @TooltipDisplayMR@ bonus Magic Resist (including components).`,
		effects: {
			'MagicReduction': 50,
			'MR': 40,
			'{539375e1}': 250,
			'{MagicDamageReductionMultiplier}': 210,
		},
		from: [6, 6],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Dragons_Claw.dds`,
		id: 66,
		name: `Dragon's Claw`,
		unique: false,
	},
	{
		desc: `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for @BanishDuration@ seconds. Ignores CC immunity.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 150,
			'MR': 20,
			'BanishDuration': 5,
		},
		from: [6, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Zephyr.dds`,
		id: 67,
		name: `Zephyr`,
		unique: true,
	},
	{
		desc: `The holder gains immunity to crowd control in combat for @SpellShieldDuration@ seconds.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'MR': 20,
			'SpellShieldDuration': 12,
			'DodgeChance': 15,
		},
		from: [9, 6],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Quicksilver.dds`,
		id: 69,
		name: `Quicksilver`,
		unique: true,
	},
	{
		desc: `Grants %i:scaleHP% @TooltipDisplayHP@ bonus HP (including components).`,
		effects: {
			'BonusHP': 700,
			'HP': 300,
			'HPRegen': 5,
			'{0c90f194}': 150,
			'{452fd23c}': 1000,
		},
		from: [7, 7],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Warmogs_Armor.dds`,
		id: 77,
		name: `Warmog's Armor`,
		unique: false,
	},
	{
		desc: `Blocks the first enemy Ability that hits the holder, and stuns the Ability's caster for @StunDuration@ seconds.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 150,
			'StunDuration': 4,
			'DodgeChance': 15,
		},
		from: [7, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Trap_Claw.dds`,
		id: 79,
		name: `Trap Claw`,
		unique: true,
	},
	{
		desc: `The holder's team gains +@MaxArmySizeIncrease@ maximum team size.`,
		effects: {
			'MaxArmySizeIncrease': 1,
		},
		from: [8, 8],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Force_of_Nature.dds`,
		id: 88,
		name: `Force of Nature`,
		unique: false,
	},
	{
		desc: `At the beginning of each planning phase, the holder equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes Three Item Slots. Cannot Grant Shadow Items]</tftitemrules>`,
		effects: {
			'CritChance': 15,
			'DodgeChance': 15,
		},
		from: [9, 9],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Standard/Thieves_Gloves.dds`,
		id: 99,
		name: `Thief's Gloves`,
		unique: false,
	},
]

export const spatulaItems: ItemData[] = [
	{
		desc: `The wearer gains the Blademaster trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AD': 15,
		},
		from: [1, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT3_Item_Blademaster.dds`,
		id: 18,
		name: `Blade of the Ruined King`,
		unique: true,
	},
	{
		desc: `The wearer is also a Blademaster.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 15,
		},
		from: [2, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.dds`,
		id: 28,
		name: `Blade of the Ruined King`,
		unique: true,
	},
	{
		desc: `The holder gains the Spellweaver trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 10,
		},
		from: [3, 8],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Spellweaver.dds`,
		id: 38,
		name: `Spellweaver Emblem`,
		unique: true,
	},
	{
		desc: `The holder gains the Renewer trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Mana': 15,
		},
		from: [8, 4],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Rejuvenator.dds`,
		id: 48,
		name: `Renewer Emblem`,
		unique: true,
	},
	{
		desc: `The wearer gains the Rebel trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
		},
		from: [5, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT3_Item_Rebel.dds`,
		id: 58,
		name: `Rebel Medal`,
		unique: true,
	},
	{
		desc: `The holder gains the Elderwood trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'MR': 25,
		},
		from: [6, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Set4Elderwood.TFT_Set4.dds`,
		id: 68,
		name: `Elderwood Sprout`,
		unique: true,
	},
	{
		desc: `The holder gains the Dawnbringer trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 150,
		},
		from: [7, 8],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Dawnbringer.dds`,
		id: 78,
		name: `Dawnbringer Emblem`,
		unique: true,
	},
	{
		desc: `The holder gains the Assassin trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'CritChance': 10,
			'DodgeChance': 5,
		},
		from: [9, 8],
		icon: `ASSETS/Maps/Particles/TFT/Item_Icons/Spatula/Assassin.dds`,
		id: 89,
		name: `Assassin Emblem`,
		unique: true,
	},
]

export const duosItems: ItemData[] = []

export const consumableItems: ItemData[] = [
	{
		desc: `Place on Kayn to force Rhaast to overtake him, permanently improving his Reaping Slash spell to heal him.<br><br><tftitemrules>[KAYN CONSUMABLE - This item disappears when used and DESTROYS Kayn's Liberation]</tftitemrules><br><br><tftitemrules>[Can only be used during the Planning Phase]</tftitemrules>`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_Consumable_KaynRed.TFT_Set4.dds`,
		id: 200,
		name: `Rhaast's Embrace`,
		unique: false,
	},
	{
		desc: `Use on a champion to reroll a special Shop that contains only champions sharing a Trait with the source champion. <br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules>`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ShopReroll.dds`,
		id: 201,
		name: `Loaded Dice`,
		unique: false,
	},
	{
		desc: `Use on a champion to unequip all items and randomly transform them into different new ones. <br><br><tftitemrules> [SAME QUALITY: Reforging an item will grant a new item of a similar type and quality.] <br> [Cannot be used on board champions in combat, Force of Nature, or Force of Darkness.]<br> [CONSUMABLE - This item disappears when used.]</tftitemrules>`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ItemReroller.dds`,
		id: 202,
		name: `Reforger`,
		unique: false,
	},
	{
		desc: `Use on a champion to unequip all items. <br><br><tftitemrules> [Cannot be used on board champions in combat.]<br>[CONSUMABLE - This item disappears when used.]</tftitemrules>`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_ItemRemover.dds`,
		id: 203,
		name: `Magnetic Remover`,
		unique: false,
	},
	{
		desc: `Use on a champion to spawn a movable target dummy nearby. <br><br><tftitemrules> [Cannot be used in combat.] <br>[CONSUMABLE - This item disappears when used.]</tftitemrules>`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Consumable_Dummy.dds`,
		id: 204,
		name: `Target Dummy`,
		unique: false,
	},
]

export const radiantItems: ItemData[] = []

export const ornnItems: ItemData[] = [
	{
		desc: `The wearer regenerates @PercentHPRegen@% of their maximum HP each second.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'HP': 200,
			'MR': 25,
			'{3b3af019}': 8,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Tank_T3_SpiritVisage.dds`,
		id: 9001,
		name: `Anima Visage`,
		unique: true,
	},
	{
		desc: `@IgnorePainPercent@% of the damage the wearer receives is instead dealt over @BleedDuration@ seconds as non-lethal damage.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'AD': 15,
			'AS': 15,
			'Armor': 25,
			'{0bc5955f}': 5,
			'{ee37daec}': 60,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Fighter_T3_DeathsDance.dds`,
		id: 9002,
		name: `Death's Defiance`,
		unique: true,
	},
	{
		desc: `Enemies who damage the wearer have their Attack Speed slowed by @ASSlowPercent@% for @SlowDuration@ seconds. After being slowed this way @NumApplications@ times, the attacker is Frozen for the duration instead. An enemy can only be Frozen once every @FreezeCooldown@ seconds.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'HP': 200,
			'SlowDuration': 2,
			'{0f0fd3a2}': 35,
			'{22302443}': 10,
			'{aaa03dde}': 2,
			'{e8bc18e0}': 7,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Mage_T4_Everfrost.dds`,
		id: 9003,
		name: `Eternal Winter`,
		unique: true,
	},
	{
		desc: `<tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'AD': 33,
			'AP': 33,
			'AS': 33,
			'Armor': 33,
			'CritChance': 33,
			'HP': 33,
			'MR': 33,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Fighter_T4_TrinityForce.dds`,
		id: 9004,
		name: `Infinity Force`,
		unique: true,
	},
	{
		desc: `After the wearer casts their spell for the first time each combat, they restore @ManaRestore@ Mana over @ManaDuration@ seconds.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'AD': 15,
			'AS': 15,
			'Mana': 15,
			'ManaRestore': 100,
			'ManaDuration': 4,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Marksman_T3_Muramana.dds`,
		id: 9005,
		name: `Manazane`,
		unique: true,
	},
	{
		desc: `The wearer's attacks and spell damage shred enemy Armor and Magic Resistance by 40% for @Duration@ seconds.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'AD': 30,
			'Duration': 3,
			'HP': 200,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Fighter_T3_BlackCleaver.dds`,
		id: 9006,
		name: `Obsidian Cleaver`,
		unique: true,
	},
	{
		desc: `At the start of combat, all allies adjacent to the wearer gain @BonusDefense@ Armor and Magic Resistance for the rest of combat.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'BonusDefense': 40,
			'HP': 200,
			'MR': 25,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Tank_T3_RanduinsOmen.dds`,
		id: 9007,
		name: `Randuin's Sanctum`,
		unique: true,
	},
	{
		desc: `At the start of combat, the wearer pulls the farthest enemy into melee range, stunning them for @StunDuration@ seconds. Allies within range will prioritize attacking that enemy.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'HP': 200,
			'Mana': 15,
			'StunDuration': 1.5,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_RocketPropelledFist.TFT_Set4_Act2.dds`,
		id: 9008,
		name: `Rocket-Propelled Fist`,
		unique: true,
	},
	{
		desc: `The wearer executes enemies below @ExecutePercent@% on hit. Executions generate 1 gold.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'AD': 30,
			'CritChance': 20,
			'{2dd33743}': 100,
			'{430f8969}': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Marksman_T3_TheCollector.dds`,
		id: 9009,
		name: `Gold Collector`,
		unique: true,
	},
	{
		desc: `The first instance of damage that would reduce the wearer below @PercentHPThreshold@% HP is prevented, causing them to become invulnerable for @InvulnDuration@ seconds.<br><br><tftitemrules>[Only One Ornn Artifact Per Champion]</tftitemrules>`,
		effects: {
			'AP': 15,
			'Armor': 25,
			'MR': 25,
			'{046e3023}': 40,
			'InvulnDuration': 2.5,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT4_OrnnItem_Mage_T3_ZhonyasHourglass.dds`,
		id: 9010,
		name: `Zhonya's Paradox`,
		unique: true,
	},
]

export const hexbuffItems: ItemData[] = [
	{
		desc: `This champion starts combat with an additional @ASPercent@% Attack Speed.`,
		effects: {
			'AAPercent': 30,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Inferno.TFT_EnchantedHexes.dds`,
		id: 10201,
		name: `Inferno Hex`,
		unique: false,
	},
	{
		desc: `At the end of each planning phase this champion permanently gains @HPPerRound@ max health.`,
		effects: {
			'{1bb18b94}': 30,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Mountain.TFT_EnchantedHexes.dds`,
		id: 10202,
		name: `Mountain Hex`,
		unique: false,
	},
	{
		desc: `This champion starts combat with 30 additional mana.`,
		effects: {
			'{1a97299e}': 30,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Ocean.TFT_EnchantedHexes.dds`,
		id: 10203,
		name: `Ocean Hex`,
		unique: false,
	},
	{
		desc: `This champion has an additional @DodgeChancePercent@% chance to dodge enemy Basic Attacks.`,
		effects: {
			'{0e4779e5}': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Wind.TFT_EnchantedHexes.dds`,
		id: 10204,
		name: `Cloud Hex`,
		unique: false,
	},
]

export const mercenaryDiceItems: ItemData[] = []

export const unreleasedItems: ItemData[] = [
	{
		desc: `When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@ASPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>No stacking limit.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'{48ea2af8}': 7,
			'{98ac43ce}': 50,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SwordOfTheDivine.dds`,
		id: -100,
		name: `Repeating Crossbow`,
		unique: true,
	},
	{
		desc: `Wearer is also a Yordle<br>Extra +10% Critical Strike Chance, +10% Dodge Chance<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'CritChance': 20,
			'DodgeChance': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Mittens.dds`,
		id: -89,
		name: `Mittens`,
		unique: true,
	},
	{
		desc: `The wearer is also Glacial.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 400,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.dds`,
		id: -78,
		name: `Frozen Mallet`,
		unique: true,
	},
	{
		desc: `After casting a spell, the wearer's next Basic Attack freezes the target for @FreezeDuration@ seconds.`,
		effects: {
			'Armor': 25,
			'{aaa03dde}': 2.5,
			'DodgeChance': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_IcebornGauntlet.dds`,
		id: -59,
		name: `Iceborn Gauntlet`,
		unique: false,
	},
	{
		desc: `Extra %i:scaleArmor% +@Armor@<br>Wearer is also a Knight<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 40,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_KnightsVow.dds`,
		id: -58,
		name: `Knight's Vow`,
		unique: true,
	},
	{
		desc: `Reflects @DamageReflect@% of the mitigated damage from enemy Basic Attacks as magic damage.`,
		effects: {
			'Armor': 50,
			'CritDamageBlock': 100,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Thornmail.dds`,
		id: -55,
		name: `game_item_displayname_3075`,
		unique: false,
	},
	{
		desc: `Extra %i:scaleMana% +@Mana@<br>Wearer is also a Demon<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Mana': 40,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Darkin.dds`,
		id: -48,
		name: `Darkin`,
		unique: true,
	},
	{
		desc: `Basic Attacks have a @ChanceOnHitToSilence@% chance on-hit to silence the target, preventing mana gain for @SilenceDuration@ seconds.`,
		effects: {
			'MR': 25,
			'Mana': 20,
			'ChanceOnHitToSilence': 20,
			'SilenceDuration': 4,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Hush.dds`,
		id: -46,
		name: `Hush`,
		unique: false,
	},
	{
		desc: `The holder gains the Dusk trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Set4Dusk.TFT_Set4.dds`,
		id: -38,
		name: `Aspect of Dusk`,
		unique: true,
	},
	{
		desc: `On falling below @HPPercent@% HP, become untargetable, invulnerable, but unable to move for @StasisDuration@ seconds.`,
		effects: {
			'AP': 20,
			'Armor': 25,
			'HPPercent': 30,
			'StasisDuration': 4,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ZhonyasHourglass.dds`,
		id: -35,
		name: `Zhonya's Hourglass`,
		unique: false,
	},
	{
		desc: `When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@ASPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>No stacking limit.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 15,
			'ASPerStack': 30,
			'CritChance': 20,
			'{cb57edb0}': 30,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.dds`,
		id: -29,
		name: `Repeating Crossbow`,
		unique: true,
	},
	{
		desc: `The wearer is also a Blademaster.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 30,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.dds`,
		id: -28,
		name: `Blade of the Ruined King`,
		unique: true,
	},
	{
		desc: `Basic Attacks have a @ChanceOnHitToShrink@% chance on-hit to decrease the target's star level by 1 for the rest of combat.`,
		effects: {
			'AS': 15,
			'MR': 25,
			'ChanceOnHitToShrink': 20,
		},
		from: [-26, -26],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_CursedBlade.dds`,
		id: -26,
		name: `Cursed Blade`,
		unique: false,
	},
	{
		desc: `Critical hits against the wearer deal normal damage instead.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 15,
			'Armor': 25,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_PhantomDancer.dds`,
		id: -25,
		name: `Phantom Dancer`,
		unique: true,
	},
	{
		desc: `The wearer is also an Assassin.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AD': 30,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_YoumuusGhostblade.dds`,
		id: -18,
		name: `Youmuu's Ghostblade`,
		unique: true,
	},
	{
		desc: `Wearer is also a Hextech`,
		effects: {},
		from: [-1, -1],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HextechChestguard.dds`,
		id: -1,
		name: `Hextech Chestguard`,
		unique: false,
	},
	{
		desc: `TFT_item_description_MortalReminder`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_MortalReminder.dds`,
		id: 541,
		name: `Mortal Reminder`,
		unique: false,
	},
	{
		desc: `This slot can't hold an item.`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_UnusableSlot.TFT3_1013_GameVariations.dds`,
		id: 999,
		name: `Unusable Slot`,
		unique: false,
	},
	{
		desc: `Loot goes here`,
		effects: {
			'CritChance': 20,
			'DodgeChance': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Unknown.dds`,
		id: 10001,
		name: `Loot Bag`,
		unique: false,
	},
	{
		desc: `Item temporarily disabled`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Jammed.dds`,
		id: 10002,
		name: `Jammed!`,
		unique: false,
	},
	{
		desc: `Loot goes here`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_EmptySlot.TFT916CritComponent.dds`,
		id: 10006,
		name: `Loot Bag`,
		unique: false,
	},
]

export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)