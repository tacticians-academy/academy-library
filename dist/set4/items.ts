import type { ItemData } from '../index'

export const componentItems: ItemData[] = [
	{
		desc: ` +@AD@ Attack Damage`,
		effects: {
			'AD': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Icon_BFSword.dds`,
		id: 1,
		name: `B. F. Sword`,
		unique: false,
	},
	{
		desc: `+@Armor@ Armor`,
		effects: {
			'Armor': 25,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ChainVest.dds`,
		id: 5,
		name: `Chain Vest`,
		unique: false,
	},
	{
		desc: ` +@HP@ HP`,
		effects: {
			'HP': 200,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Icon_GiantsBelt.dds`,
		id: 7,
		name: `Giant's Belt`,
		unique: false,
	},
	{
		desc: ` +@AP@% Spell Power`,
		effects: {
			'AP': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Icon_NeedlesslyLargeRod.dds`,
		id: 3,
		name: `Needlessly Large Rod`,
		unique: false,
	},
	{
		desc: `+@MR@ Magic Resist`,
		effects: {
			'MR': 25,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_NegatronCloak.dds`,
		id: 6,
		name: `Negatron Cloak`,
		unique: false,
	},
	{
		desc: ` +@AS@% Attack Speed`,
		effects: {
			'AS': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RecurveBow.dds`,
		id: 2,
		name: `Recurve Bow`,
		unique: false,
	},
	{
		desc: `+@CritChance@% Critical Strike Chance<br>+@DodgeChance@% Dodge Chance`,
		effects: {
			'CritChance': 10,
			'DodgeChance': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SparringGloves.dds`,
		id: 9,
		name: `Sparring Gloves`,
		unique: false,
	},
	{
		desc: `It must do <i>something</i>...`,
		effects: {
			'{fe9818ef}': 5,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Spatula.dds`,
		id: 8,
		name: `Spatula`,
		unique: false,
	},
	{
		desc: ` +@Mana@ Mana`,
		effects: {
			'Mana': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Icon_TearOfTheGoddess.dds`,
		id: 4,
		name: `Tear of the Goddess`,
		unique: false,
	},
]

export const completedItems: ItemData[] = [
	{
		desc: `Basic attacks heal the holder for @Lifesteal@% of the damage dealt.`,
		effects: {
			'AD': 15,
			'LifeSteal': 40,
			'MR': 25,
			'ShieldMax': 250,
		},
		from: [1, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Bloodthirster.dds`,
		id: 16,
		name: `Bloodthirster`,
		unique: false,
	},
	{
		desc: `After casting their spell, the wearer's Mana is set to @ManaRestore@.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Mana': 30,
			'ManaRestore': 20,
		},
		from: [4, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BlueBuff.dds`,
		id: 44,
		name: `Blue Buff`,
		unique: true,
	},
	{
		desc: `Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal @1StarAoEDamage@/@2StarAoEDamage@/@3StarAoEDamage@ %i:star% magic damage to all nearby enemies (once every @ICD@ seconds).`,
		effects: {
			'Armor': 50,
			'ICD': 2.5,
			'3StarAoEDamage': 150,
			'1StarAoEDamage': 80,
			'CritDamageBlock': 100,
			'2StarAoEDamage': 100,
			'4StarAoEDamage': 250,
		},
		from: [5, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BrambleVest.TFT_1001_ItemsUpdate.dds`,
		id: 55,
		name: `Bramble Vest`,
		unique: false,
	},
	{
		desc: `When combat begins, the wearer and all allies within @HexRange@ hex in the same row gain @BonusAP@ Spell Power for the rest of combat.`,
		effects: {
			'MR': 25,
			'Mana': 15,
			'ManaRestore': 10,
			'HexRange': 1,
			'{APTimer}': 20,
			'BonusAP': 35,
		},
		from: [6, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ChaliceOfPower.dds`,
		id: 46,
		name: `Chalice of Power`,
		unique: false,
	},
	{
		desc: `Contributing to a kill grants the holder +@ADPerStack@ additional Attack Damage for the rest of combat.<br><br>This effect can stack any number of times (starting at @StartingStacks@).`,
		effects: {
			'AD': 30,
			'ADPerStack': 20,
			'StartingStacks': 1,
		},
		from: [1, 1],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_DeathBlade.dds`,
		id: 11,
		name: `Deathblade`,
		unique: false,
	},
	{
		desc: `Reduces incoming magic damage by @MagicReduction@%.`,
		effects: {
			'MagicReduction': 60,
			'MR': 50,
		},
		from: [6, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_DragonsClaw.dds`,
		id: 66,
		name: `Dragon's Claw`,
		unique: false,
	},
	{
		desc: `Reduces the Attack Speed of nearby enemies by 50%. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.`,
		effects: {
			'Armor': 25,
			'ASSlow': 50,
			'Mana': 15,
		},
		from: [4, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_FrozenHeart.dds`,
		id: 45,
		name: `Frozen Heart`,
		unique: false,
	},
	{
		desc: `The holder gains @ArmorPerEnemy@ Armor and @MRPerEnemy@ Magic Resist for each enemy targeting them.`,
		effects: {
			'Armor': 25,
			'MR': 25,
			'MRPerEnemy': 15,
			'ArmorPerEnemy': 15,
		},
		from: [5, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GargoyleStoneplate.dds`,
		id: 56,
		name: `Gargoyle Stoneplate`,
		unique: false,
	},
	{
		desc: `The holder's spells and basic attacks do @SmallBonusPct@% bonus damage. If the target has more than @HPThreshold@ maximum HP, the bonus increases to @LargeBonusPct@%.`,
		effects: {
			'AD': 15,
			'AS': 15,
			'HPThreshold': 1750,
			'{a79cf66e}': 18,
			'LargeBonusPct': 90,
			'SmallBonusPct': 10,
		},
		from: [1, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.dds`,
		id: 12,
		name: `Giant Slayer`,
		unique: false,
	},
	{
		desc: `Prevents the wearer's first death, placing them in stasis instead. After @StasisDuration@ seconds, they return with @HPRestore@ HP and shed all negative effects.`,
		effects: {
			'AD': 15,
			'Armor': 25,
			'HPRestore': 400,
			'StasisDuration': 2,
		},
		from: [1, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GuardianAngel.dds`,
		id: 15,
		name: `Guardian Angel`,
		unique: false,
	},
	{
		desc: `Basic Attacks grant +@ASPerStack@% bonus Attack Speed for the rest of combat.<br><br>This effect can stack any number of times.`,
		effects: {
			'AP': 15,
			'AS': 15,
			'ASPerStack': 6,
		},
		from: [2, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GuinsoosRageblade.dds`,
		id: 23,
		name: `Guinsoo's Rageblade`,
		unique: false,
	},
	{
		desc: `At the beginning of each planning phase, the wearer gains one of the following:<li>Basic attacks and spells deal +@TraitMultiplier@% Damage.</li> <li>Basic attacks and spells heal for @TraitMultiplier@% of damage dealt.</li>`,
		effects: {
			'CritChance': 10,
			'Mana': 15,
			'TraitMultiplier': 66.66699981689453,
			'AdditionalADAP': 45,
			'DodgeChance': 10,
		},
		from: [4, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HandOfJustice.dds`,
		id: 49,
		name: `Hand Of Justice`,
		unique: false,
	},
	{
		desc: `The holder's spells heal them for @OmniVamp@% of the damage dealt. Excess healing fuels a shield that protects the holder against up to @ShieldMax@ damage.`,
		effects: {
			'AD': 15,
			'AP': 15,
			'ShieldMax': 400,
			'OmniVamp': 33,
		},
		from: [1, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HextechGunblade.dds`,
		id: 13,
		name: `Hextech Gunblade`,
		unique: false,
	},
	{
		desc: `Grants @CritChance@% Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes +@BonusCritDmgPerCritAbove100@% Critical Strike Damage.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AD': 15,
			'CritChance': 75,
			'BonusCritDmgPerCritAbove100': 1,
		},
		from: [1, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_InfinityEdge.dds`,
		id: 19,
		name: `Infinity Edge`,
		unique: true,
	},
	{
		desc: `Enemies within @HexRange@ hexes have their Magic Resist reduced by @MRShred@% (does not stack). When they cast a spell, they are zapped taking magic damage equal to @ManaRatio@% of their max Mana.`,
		effects: {
			'AP': 15,
			'Damage': 250,
			'MR': 25,
			'HexRange': 2,
			'ManaRatio': 225,
			'MRShred': 40,
		},
		from: [3, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_IonicSpark.dds`,
		id: 36,
		name: `Ionic Spark`,
		unique: false,
	},
	{
		desc: `The holder's spells can cause critical hits, and the holder gains +@CritDamage@% bonus critical strike damage.`,
		effects: {
			'AP': 15,
			'CritChance': 20,
			'CritDamage': 40,
		},
		from: [3, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Jeweled_Gauntlet.dds`,
		id: 39,
		name: `Jeweled Gauntlet`,
		unique: false,
	},
	{
		desc: `When the wearer inflicts a critical hit, the target's Armor is reduced by @ArmorReductionPercent@% for @ArmorBreakDuration@ seconds. This effect does not stack.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 15,
			'CritChance': 20,
			'ArmorReductionPercent': 80,
			'ArmorBreakDuration': 3,
		},
		from: [2, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_MortalReminder.dds`,
		id: 29,
		name: `Last Whisper`,
		unique: true,
	},
	{
		desc: `When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain a shield that blocks @1StarShieldValue@/@2StarShieldValue@/@3StarShieldValue@ %i:star% damage for @ShieldDuration@ seconds.`,
		effects: {
			'AP': 15,
			'Armor': 25,
			'ShieldDuration': 8,
			'2StarShieldValue': 375,
			'1StarShieldValue': 300,
			'3StarShieldValue': 500,
			'HexRange': 2,
			'4StarShieldValue': 800,
		},
		from: [3, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_LocketOfTheIronSolari.dds`,
		id: 35,
		name: `Locket of the Iron Solari`,
		unique: false,
	},
	{
		desc: `When the holder casts their spell, the first target dealt magic damage and up to @ExtraBounces@ nearby enemies are dealt an additional @Damage@ magic damage, plus @BonusDamageVsShieldOrCC@ if they are crowd-controlled.`,
		effects: {
			'AP': 15,
			'Bounces': 4,
			'Damage': 180,
			'Mana': 15,
			'{13206100}': 180,
			'{93d13af6}': 3,
			'HexRange': 2,
		},
		from: [3, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_LudensEcho.dds`,
		id: 34,
		name: `Luden's Echo`,
		unique: false,
	},
	{
		desc: `When the holder deals magic damage with their spell, they burn the target, dealing @BurnPercent@% of the target's maximum HP as true damage over @BurnDuration@ seconds, and reducing healing by @GrievousWoundsPercent@% for the duration of the burn.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 15,
			'HP': 200,
			'MonsterCap': 100,
			'TicksPerSecond': 1,
			'GrievousWoundsPercent': 50,
			'BurnPercent': 25,
			'BurnDuration': 10,
		},
		from: [3, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Morellonomicon.dds`,
		id: 37,
		name: `Morellonomicon`,
		unique: true,
	},
	{
		desc: `The wearer is immune to crowd control for the first @SpellShieldDuration@ seconds of combat.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'MR': 25,
			'SpellShieldDuration': 10,
			'DodgeChance': 20,
		},
		from: [9, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Mercurial.dds`,
		id: 69,
		name: `Quicksilver`,
		unique: true,
	},
	{
		desc: `The holder gains @BonusAP@ additional Spell Power.`,
		effects: {
			'AP': 30,
			'BonusAP': 50,
		},
		from: [3, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RabadonsDeathcap.dds`,
		id: 33,
		name: `Rabadon's Deathcap`,
		unique: false,
	},
	{
		desc: `The holder gains @AttackRange@% Attack Range, and their Basic Attacks can't miss.`,
		effects: {
			'AS': 30,
			'{c270990a}': 200,
		},
		from: [2, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RapidFirecannon.dds`,
		id: 22,
		name: `Rapid Firecannon`,
		unique: false,
	},
	{
		desc: `When the wearer dies, allies are healed for @HPRestore@ HP.`,
		effects: {
			'HP': 200,
			'HPRestore': 800,
			'Mana': 15,
			'{1e0630e9}': 25,
			'{5ffbbd48}': 50,
			'{8f954b18}': 30,
		},
		from: [4, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Redemption.dds`,
		id: 47,
		name: `Redemption`,
		unique: false,
	},
	{
		desc: `Basic Attacks fire a bolt at another nearby enemy, dealing @MultiplierForDamage@% of the wearer's Attack Damage and applying on-hit effects. These bolts can critical strike.`,
		effects: {
			'AS': 15,
			'AdditionalTargets': 1,
			'MR': 25,
			'MultiplierForDamage': 90,
		},
		from: [6, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RunaansHurricane.dds`,
		id: 26,
		name: `Runaan's Hurricane`,
		unique: false,
	},
	{
		desc: `When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana by @CostIncrease@% until they cast.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'SilenceDuration': 60,
			'CostIncrease': 33,
			'DodgeChance': 20,
		},
		from: [5, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Shroud.TFT_Set3.dds`,
		id: 59,
		name: `Shroud of Stillness`,
		unique: true,
	},
	{
		desc: `The holder's basic attacks restore @FlatManaRestore@ Mana on-hit.`,
		effects: {
			'AD': 15,
			'Mana': 15,
			'FlatManaRestore': 5,
			'ManaPercentRestore': 18,
		},
		from: [1, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SpearOfShojin.dds`,
		id: 14,
		name: `Spear of Shojin`,
		unique: false,
	},
	{
		desc: `Every third Basic Attack from the wearer deals @Damage@ magic damage to @1StarBounces@/@2StarBounces@/@3StarBounces@ %i:star% enemies, and @BonusDamage@ true damage if they are shielded.`,
		effects: {
			'AS': 15,
			'BonusDamage': 240,
			'Damage': 80,
			'Mana': 15,
			'1StarBounces': 4,
			'2StarBounces': 9,
			'3StarBounces': 3,
			'4StarBounces': 5,
		},
		from: [2, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_StatikkShiv.dds`,
		id: 24,
		name: `Statikk Shiv`,
		unique: false,
	},
	{
		desc: `Every @ICD@ seconds, a random enemy within @HexRange@ hexes is burned for @BurnPercent@% of their maximum HP over @BurnDuration@ seconds. Any healing they receive is reduced by @GrievousWoundsPercent@%.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'HP': 200,
			'ICD': 2,
			'MonsterCap': 100,
			'TicksPerSecond': 1,
			'GrievousWoundsPercent': 50,
			'BurnPercent': 25,
			'{8bfdb3fa}': 2,
			'BurnDuration': 10,
			'HexRange': 2,
		},
		from: [5, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SunfireCape.dds`,
		id: 57,
		name: `Sunfire Cape`,
		unique: true,
	},
	{
		desc: `At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes Three Item Slots]</tftitemrules>`,
		effects: {
			'CritChance': 20,
			'DodgeChance': 20,
		},
		from: [9, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ThiefsGloves.dds`,
		id: 99,
		name: `Thief's Gloves`,
		unique: false,
	},
	{
		desc: `When the wearer takes damage or inflicts a critical hit, they gain a @DamageIncreasePercent@% stacking damage bonus. Stacks up to @StackCap@ times, at which point the wearer gains @BonusResistsAtStackCap@ Armor and Magic Resistance, and increases in size.`,
		effects: {
			'AS': 15,
			'Armor': 25,
			'StackCap': 25,
			'BonusResistsAtStackCap': 25,
			'{d50b4559}': 2,
		},
		from: [5, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_TitansResolve.TFT_1001_ItemsUpdate.dds`,
		id: 25,
		name: `Titan's Resolve`,
		unique: false,
	},
	{
		desc: `Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for @StunDuration@ seconds.`,
		effects: {
			'HP': 200,
			'StunDuration': 4,
			'DodgeChance': 20,
		},
		from: [7, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Backhand.dds`,
		id: 79,
		name: `Trap Claw`,
		unique: false,
	},
	{
		desc: `Grants @TooltipDisplayHP@ bonus HP (including components).`,
		effects: {
			'BonusHP': 600,
			'HP': 400,
			'HPRegen': 5,
			'{0c90f194}': 150,
			'{452fd23c}': 1000,
		},
		from: [7, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_WarmogsArmor.dds`,
		id: 77,
		name: `Warmog's Armor`,
		unique: false,
	},
	{
		desc: `When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain +@AS@% Attack Speed for the rest of combat.`,
		effects: {
			'AD': 15,
			'AS': 35,
			'HP': 200,
			'HexRange': 1,
		},
		from: [1, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ZekesHerald.dds`,
		id: 17,
		name: `Zeke's Herald`,
		unique: false,
	},
	{
		desc: `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for @BanishDuration@ seconds.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 200,
			'MR': 25,
			'BanishDuration': 5,
		},
		from: [6, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Zephyr.dds`,
		id: 67,
		name: `Zephyr`,
		unique: true,
	},
	{
		desc: `At the start of combat, the wearer taunts enemies within @HexRadius@ hexes for @TauntDuration@ second.<br><br>When the wearer dies, a Construct with @1StarZombieHP@/@2StarZombieHP@/@3StarZombieHP@ %i:star% HP arises and taunts enemies again.`,
		effects: {
			'AS': 15,
			'HP': 200,
			'{0707495a}': 100,
			'{37b0144c}': 1500,
			'HexRadius': 2,
			'{77cff14f}': 5000,
			'{86646c65}': 2250,
			'{d66dd4b7}': 1,
			'{f207284b}': 0.75,
			'{f6edd39e}': 3000,
		},
		from: [2, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Zzrot_Portal.dds`,
		id: 27,
		name: `Zz'Rot Portal`,
		unique: false,
	},
]

export const emblemItems: ItemData[] = [
	{
		desc: `The holder gains the Dusk trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 15,
		},
		from: [3, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Set4Dusk.TFT_Set4.dds`,
		id: 38,
		name: `Aspect of Dusk`,
		unique: true,
	},
	{
		desc: `The wearer is also a Berserker.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'CritChance': 10,
			'DodgeChance': 10,
		},
		from: [9, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BerserkerAxe.dds`,
		id: 89,
		name: `Berserker's Axe`,
		unique: true,
	},
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
		desc: `Wearer's team gains +@MaxArmySizeIncrease@ maximum team size.`,
		effects: {
			'MaxArmySizeIncrease': 1,
		},
		from: [8, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ForceOfNature.dds`,
		id: 88,
		name: `Force of Nature`,
		unique: false,
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
		desc: `The wearer gains the Star Guardian trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Mana': 15,
		},
		from: [4, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT3_Item_StarGuardian.dds`,
		id: 48,
		name: `Star Guardian's Charm`,
		unique: true,
	},
	{
		desc: `The wearer gains the Warlord trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 200,
		},
		from: [8, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Set4Warlord.TFT_Set4.dds`,
		id: 78,
		name: `Warlord's Banner`,
		unique: true,
	},
]

export const shadowItems: ItemData[] = []

export const radiantItems: ItemData[] = []

export const ornnItems: ItemData[] = []

export const supportItems: ItemData[] = []

export const shimmerscaleItems: ItemData[] = []

export const consumableItems: ItemData[] = [
	{
		desc: `Place on a champion to create a one-star copy of them.<br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules>`,
		effects: {},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Blessing_WildCard.dds`,
		id: 200,
		name: `Neeko's Help`,
		unique: false,
	},
]

export const hexbuffItems: ItemData[] = [
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
		desc: `At the end of each planning phase this champion permanently gains @HPPerRound@ max HP.`,
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
]

export const modItems: ItemData[] = []

export const unreleasedItems: ItemData[] = [
	{
		desc: `Whenever any unit dies, gain X Mana.`,
		effects: {
			'Mana': 20,
			'DodgeChance': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.dds`,
		id: 149,
		name: `Catalyst`,
		unique: false,
	},
	{
		desc: `@ChanceToSpellSteal@ chance to steal the enemy's spell and cast it`,
		effects: {
			'{0cc88d45}': 10,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SpellThiefsEdge.dds`,
		id: 529,
		name: `Spell Thief`,
		unique: false,
	},
]

export const currentItems: ItemData[] = componentItems.concat(completedItems, emblemItems)
