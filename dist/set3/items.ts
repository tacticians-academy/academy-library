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
			'AP': 20,
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
		desc: `Basic Attacks heal the wearer for @Lifesteal@% of the damage dealt.`,
		effects: {
			'AD': 15,
			'LifeSteal': 35,
			'MR': 25,
		},
		from: [1, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Bloodthirster.dds`,
		id: 16,
		name: `Bloodthirster`,
		unique: false,
	},
	{
		desc: `Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal @1StarAoEDamage@/@2StarAoEDamage@/@3StarAoEDamage@ %i:star% magic damage to all nearby enemies (once every @ICD@ seconds).`,
		effects: {
			'Armor': 50,
			'3StarAoEDamage': 200,
			'1StarAoEDamage': 100,
			'CritDamageBlock': 100,
			'{73e0fa13}': 2.5,
			'2StarAoEDamage': 140,
		},
		from: [5, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BrambleVest.TFT_1001_ItemsUpdate.dds`,
		id: 55,
		name: `Bramble Vest`,
		unique: false,
	},
	{
		desc: `When the wearer casts a spell, restores @ManaRestore@ mana to allies within @HexRange@ hexes (including themself).`,
		effects: {
			'MR': 25,
			'Mana': 15,
			'ManaRestore': 8,
			'HexRange': 2,
		},
		from: [6, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Chalice3.TFT_Set3.dds`,
		id: 46,
		name: `Chalice of Favor`,
		unique: false,
	},
	{
		desc: `Contributing to a kill grants +@ADPerStack@ Attack Damage for the remainder of combat.<br><br>This effect can stack any number of times (starting at @StartingStacks@).`,
		effects: {
			'AD': 30,
			'StartingStacks': 1,
			'ADPerStack': 30,
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
			'MagicReduction': 50,
			'MR': 50,
		},
		from: [6, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_DragonsClaw.dds`,
		id: 66,
		name: `Dragon's Claw`,
		unique: false,
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
		desc: `Reduces the Attack Speed of nearby enemies by @ASSlow@%. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.`,
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
		desc: `The wearer's Basic Attacks deal an additional @CurrentHPPhysicalDamage@% of the target's current HP as physical damage.`,
		effects: {
			'AD': 15,
			'AS': 15,
			'{a79cf66e}': 12,
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
			'AP': 20,
			'AS': 15,
			'ASPerStack': 5,
		},
		from: [2, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GuinsoosRageblade.dds`,
		id: 23,
		name: `Guinsoo's Rageblade`,
		unique: false,
	},
	{
		desc: `At the beginning of each planning phase, the wearer gains one of the following:<li>Basic attacks and spells deal +@TraitMultiplier@% Damage</li> <li>Basic attacks heal @TraitMultiplier@ HP on-hit</li>`,
		effects: {
			'CritChance': 10,
			'Mana': 15,
			'TraitMultiplier': 66.66699981689453,
			'AdditionalADAP': 50,
			'DodgeChance': 10,
		},
		from: [4, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HandOfJustice.dds`,
		id: 49,
		name: `Hand Of Justice`,
		unique: false,
	},
	{
		desc: `Basic Attacks and spells heal the wearer for @OmniVamp@% of the damage dealt.`,
		effects: {
			'AD': 15,
			'AP': 20,
			'OmniVamp': 25,
		},
		from: [1, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HextechGunblade.dds`,
		id: 13,
		name: `Hextech Gunblade`,
		unique: false,
	},
	{
		desc: `Grants +@CritDamage@% Critical Strike Damage.`,
		effects: {
			'AD': 15,
			'CritChance': 20,
			'CritDamage': 100,
		},
		from: [1, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_InfinityEdge.dds`,
		id: 19,
		name: `Infinity Edge`,
		unique: false,
	},
	{
		desc: `Enemies within @HexRange@ hexes have their Magic Resist reduced by @MRShred@% (does not stack). When they cast a spell, they are zapped taking magic damage equal to @ManaRatio@% of their max Mana.`,
		effects: {
			'AP': 20,
			'Damage': 250,
			'MR': 25,
			'HexRange': 2,
			'ManaRatio': 225,
			'MRShred': 50,
		},
		from: [3, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_IonicSpark.dds`,
		id: 36,
		name: `Ionic Spark`,
		unique: false,
	},
	{
		desc: `Your spells can inflict critical hits.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 20,
			'CritChance': 20,
		},
		from: [3, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Jeweled_Gauntlet.dds`,
		id: 39,
		name: `Jeweled Gauntlet`,
		unique: true,
	},
	{
		desc: `When the wearer inflicts a critical hit, the target's Armor is reduced by @ArmorReductionPercent@% for @ArmorBreakDuration@ seconds. This effect does not stack.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 15,
			'CritChance': 20,
			'ArmorReductionPercent': 90,
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
			'AP': 20,
			'Armor': 25,
			'ShieldDuration': 8,
			'2StarShieldValue': 275,
			'1StarShieldValue': 250,
			'3StarShieldValue': 350,
			'HexRange': 2,
		},
		from: [3, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_LocketOfTheIronSolari.dds`,
		id: 35,
		name: `Locket of the Iron Solari`,
		unique: false,
	},
	{
		desc: `When the wearer casts their spell, the first target dealt magic damage and up to @ExtraBounces@ nearby enemies are dealt an additional @1StarDamage@/@2StarDamage@/@3StarDamage@ %i:star% magic damage.`,
		effects: {
			'AP': 20,
			'Mana': 15,
			'{27b09915}': 150,
			'{337a0cca}': 4,
			'{844e604c}': 175,
			'{93d13af6}': 3,
			'HexRange': 2,
			'{f5220527}': 225,
		},
		from: [3, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_LudensEcho.dds`,
		id: 34,
		name: `Luden's Echo`,
		unique: false,
	},
	{
		desc: `When the wearer deals damage with their spell, they burn the target, dealing @BurnPercent@% of the target's Maximum HP as true damage over @BurnDuration@ seconds and reducing healing by @GrievousWoundsPercent@% for the duration of the burn.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 20,
			'HP': 200,
			'MonsterCap': 100,
			'GrievousWoundsPercent': 50,
			'BurnPercent': 25,
			'{6df27940}': 1,
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
		desc: `Grants +@APPercentAmp@% Spell Power Amplification.<br><br>(All sources of Spell Power are @APPercentAmp@% more effective)`,
		effects: {
			'AP': 40,
			'APPercentAmp': 50,
		},
		from: [3, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RabadonsDeathcap.dds`,
		id: 33,
		name: `Rabadon's Deathcap`,
		unique: false,
	},
	{
		desc: `Gain @AttackRange@% Attack Range.`,
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
		desc: `The holder's Basic Attacks burn the target on-hit, dealing @BurnPercent@% of the target's Maximum HP as true damage over @BurnDuration@ seconds, and reducing healing by @GrievousWoundsPercent@%, for the duration of the burn.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'HP': 200,
			'MonsterCap': 100,
			'GrievousWoundsPercent': 50,
			'BurnPercent': 25,
			'{6df27940}': 1,
			'{8bfdb3fa}': 2,
			'BurnDuration': 10,
		},
		from: [5, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RedBuff.dds`,
		id: 57,
		name: `Red Buff`,
		unique: true,
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
		desc: `Basic Attacks fire a bolt at another nearby enemy, dealing @MultiplierForDamage@% of the wearer's Attack Damage and applying on-hit effects.`,
		effects: {
			'AS': 15,
			'AdditionalTargets': 1,
			'MR': 25,
			'MultiplierForDamage': 70,
		},
		from: [6, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RunaansHurricane.dds`,
		id: 26,
		name: `Runaan's Hurricane`,
		unique: false,
	},
	{
		desc: `After casting their spell, the wearer gains @ManaRestore@ Mana.`,
		effects: {
			'Mana': 30,
			'ManaRestore': 20,
		},
		from: [4, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SeraphsEmbrace.dds`,
		id: 44,
		name: `Seraph's Embrace`,
		unique: false,
	},
	{
		desc: `When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana by @CostIncrease@% until they cast.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 25,
			'SilenceDuration': 60,
			'CostIncrease': 40,
			'DodgeChance': 20,
		},
		from: [5, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Shroud.TFT_Set3.dds`,
		id: 59,
		name: `Shroud of Stillness`,
		unique: true,
	},
	{
		desc: `After casting their spell, the wearer's Basic Attacks restore @ManaPercentRestore@% of their max Mana on-hit.`,
		effects: {
			'AD': 15,
			'Mana': 15,
			'ManaPercentRestore': 18,
		},
		from: [1, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SpearOfShojin.dds`,
		id: 14,
		name: `Spear of Shojin`,
		unique: false,
	},
	{
		desc: `Every third Basic Attack from the wearer deals @Damage@ magic damage to @1StarBounces@/@2StarBounces@/@3StarBounces@ %i:star% enemies.`,
		effects: {
			'AS': 15,
			'Damage': 80,
			'Mana': 15,
			'1StarBounces': 4,
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
		desc: `The wearer's Basic Attacks have a @ChanceOnHitToDisarm@% chance to disarm the target for @DisarmDuration@ seconds, preventing that enemy from making Basic Attacks.`,
		effects: {
			'Armor': 25,
			'DisarmDuration': 3,
			'MR': 25,
			'ChanceOnHitToDisarm': 25,
		},
		from: [5, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SwordBreaker.dds`,
		id: 56,
		name: `Sword Breaker`,
		unique: false,
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
			'StackCap': 50,
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
		desc: `The wearer regenerates @HPRegen@% of their missing HP, but not more than @MaxHPRegenAmount@, per second.`,
		effects: {
			'HP': 400,
			'HPRegen': 5,
			'{0c90f194}': 150,
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
			'AS': 30,
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
		desc: `When the wearer dies, a Construct with @1StarZombieHP@/@2StarZombieHP@/@3StarZombieHP@ %i:star% HP arises to continue the fight.`,
		effects: {
			'AS': 15,
			'HP': 200,
			'{0707495a}': 70,
			'{37b0144c}': 1000,
			'{86646c65}': 2000,
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

export const spatulaItems: ItemData[] = [
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
		desc: `The wearer gains the Celestial trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'MR': 25,
		},
		from: [8, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT3_Item_Celestial.dds`,
		id: 68,
		name: `Celestial Orb`,
		unique: true,
	},
	{
		desc: `The wearer is also Glacial.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 200,
		},
		from: [8, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.dds`,
		id: 78,
		name: `Frozen Mallet`,
		unique: true,
	},
	{
		desc: `The wearer is also an Inferno.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 20,
		},
		from: [3, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_InfernoCinder.dds`,
		id: 38,
		name: `Inferno's Cinder`,
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
]

export const shadowItems: ItemData[] = []

export const radiantItems: ItemData[] = []

export const ornnItems: ItemData[] = []

export const supportItems: ItemData[] = []

export const shimmerscaleItems: ItemData[] = []

export const consumableItems: ItemData[] = []

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

export const unreleasedItems: ItemData[] = []

export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)
