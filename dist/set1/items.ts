import type { ItemData } from '../index'

export const componentItems: ItemData[] = [
	{
		desc: ` +@AD@ Attack Damage`,
		effects: {
			'AD': 15,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Icon_BFSword.TFT.dds`,
		id: 1,
		name: `B. F. Sword`,
		unique: false,
	},
	{
		desc: `+@Armor@ Armor`,
		effects: {
			'Armor': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ChainVest.TFT.dds`,
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
		icon: `ASSETS/Maps/Particles/TFT/Icon_GiantsBelt.TFT.dds`,
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
		icon: `ASSETS/Maps/Particles/TFT/Icon_NeedlesslyLargeRod.TFT.dds`,
		id: 3,
		name: `Needlessly Large Rod`,
		unique: false,
	},
	{
		desc: `+@MR@ Magic Resist`,
		effects: {
			'MR': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_NegatronCloak.TFT.dds`,
		id: 6,
		name: `Negatron Cloak`,
		unique: false,
	},
	{
		desc: ` +@AS@% Attack Speed`,
		effects: {
			'AS': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RecurveBow.TFT.dds`,
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
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SparringGloves.TFT.dds`,
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
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Spatula.TFT.dds`,
		id: 8,
		name: `Spatula`,
		unique: false,
	},
	{
		desc: ` +@Mana@ Mana`,
		effects: {
			'Mana': 20,
		},
		from: [],
		icon: `ASSETS/Maps/Particles/TFT/Icon_TearOfTheGoddess.TFT.dds`,
		id: 4,
		name: `Tear of the Goddess`,
		unique: false,
	},
]

export const completedItems: ItemData[] = [
	{
		desc: `Basic Attacks heal the wearer for @Lifesteal@% of the damage dealt.`,
		effects: {
			'LifeSteal': 40,
		},
		from: [1, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Bloodthirster.TFT.dds`,
		id: 16,
		name: `Bloodthirster`,
		unique: false,
	},
	{
		desc: `Basic Attacks have a @ChanceOnHitToShrink@% chance on-hit to decrease the target's star level by 1 for the rest of combat.`,
		effects: {
			'ChanceOnHitToShrink': 20,
		},
		from: [2, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_CursedBlade.TFT.dds`,
		id: 26,
		name: `Cursed Blade`,
		unique: false,
	},
	{
		desc: `Whenever the wearer kills or participates in killing an enemy, gain +@ADPerStack@ Attack Damage for the remainder of combat.<br><br>This effect can stack any number of times. Starts with @StartingStacks@ stacks.`,
		effects: {
			'StartingStacks': 1,
			'ADPerStack': 15,
		},
		from: [1, 1],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_DeathBlade.TFT.dds`,
		id: 11,
		name: `Deathblade`,
		unique: false,
	},
	{
		desc: `Wearer gains @MagicReduction@% resistance to magic damage.`,
		effects: {
			'MagicReduction': 75,
		},
		from: [6, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_DragonsClaw.TFT.dds`,
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
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ForceOfNature.TFT.dds`,
		id: 88,
		name: `Force of Nature`,
		unique: false,
	},
	{
		desc: `Reduces the Attack Speed of adjacent enemies by @ASSlow@%.`,
		effects: {
			'ASSlow': 35,
			'HexRange': 1,
		},
		from: [4, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_FrozenHeart.TFT.dds`,
		id: 45,
		name: `Frozen Heart`,
		unique: false,
	},
	{
		desc: `The wearer's basic attacks deal an additional @MaxHPTrueDamage@% of the target's Maximum HP as true damage.`,
		effects: {
			'MaxHPTrueDamage': 5,
		},
		from: [1, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.dds`,
		id: 12,
		name: `Giant Slayer`,
		unique: false,
	},
	{
		desc: `When the wearer dies, they cleanse negative effects and revive with up to @HPRestore@ HP after a @StasisDuration@ second delay.<br><br>This effect can trigger once per combat.`,
		effects: {
			'StasisDuration': 2,
			'HPRestore': 500,
		},
		from: [1, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GuardianAngel.TFT.dds`,
		id: 15,
		name: `Guardian Angel`,
		unique: false,
	},
	{
		desc: `Basic Attacks grant the wearer +@ASPerStack@% bonus Attack Speed for the rest of combat.<br><br>This effect can stack any number of times.`,
		effects: {
			'AAPerStack': 5,
		},
		from: [2, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_GuinsoosRageblade.TFT.dds`,
		id: 23,
		name: `Guinsoo's Rageblade`,
		unique: false,
	},
	{
		desc: `At the beginning of each planning phase, the wearer gains one of the following:<li>Basic attacks and spells deal +@TraitMultiplier@% Damage</li> <li>Basic attacks heal @TraitMultiplier@ HP on-hit</li>`,
		effects: {
			'Mana': 20,
			'CritChance': 10,
			'TraitMultiplier': 66.66699981689453,
			'AdditionalADAP': 40,
			'DodgeChance': 10,
		},
		from: [4, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HandOfJustice.TFT.dds`,
		id: 49,
		name: `Hand Of Justice`,
		unique: false,
	},
	{
		desc: `Basic Attacks and spells heal the wearer for @OmniVamp@% of the damage dealt.`,
		effects: {
			'OmniVamp': 25,
		},
		from: [1, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_HextechGunblade.TFT.dds`,
		id: 13,
		name: `Hextech Gunblade`,
		unique: false,
	},
	{
		desc: `Basic Attacks have a @ChanceOnHitToSilence@% chance to silence the target on-hit, preventing the enemy from gaining mana for @SilenceDuration@ seconds.`,
		effects: {
			'ChanceOnHitToSilence': 33,
			'SilenceDuration': 4,
		},
		from: [4, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Hush.TFT.dds`,
		id: 46,
		name: `Hush`,
		unique: false,
	},
	{
		desc: `When the wearer dodges, they create a zone of ice. Enemies inside the zone have their Attack Speed reduced by @ASSlowPercentage@%.`,
		effects: {
			'Armor': 20,
			'DodgeChance': 20,
			'ASSlowPercentage': 35,
		},
		from: [5, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_IcebornGauntlet.TFT.dds`,
		id: 59,
		name: `Iceborn Gauntlet`,
		unique: false,
	},
	{
		desc: `The wearer gains +@CritDamage@% Critical Strike Damage.`,
		effects: {
			'CritChance': 20,
			'AD': 15,
			'CritDamage': 125,
		},
		from: [1, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_InfinityEdge.TFT.dds`,
		id: 19,
		name: `Infinity Edge`,
		unique: false,
	},
	{
		desc: `Whenever an enemy casts a spell, the wearer deals @Damage@ true damage to the caster.`,
		effects: {
			'Damage': 125,
		},
		from: [3, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_IonicSpark.TFT.dds`,
		id: 36,
		name: `Ionic Spark`,
		unique: false,
	},
	{
		desc: `The wearer's spells can critically strike.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 20,
			'CritChance': 20,
		},
		from: [3, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Jeweled_Gauntlet.TFT.dds`,
		id: 39,
		name: `Jeweled Gauntlet`,
		unique: true,
	},
	{
		desc: `When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain a shield that blocks @ShieldValue@ damage for @ShieldDuration@ seconds.`,
		effects: {
			'ShieldDuration': 8,
			'ShieldValue': 300,
			'HexRange': 2,
		},
		from: [3, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_LocketOfTheIronSolari.TFT.dds`,
		id: 35,
		name: `Locket of the Iron Solari`,
		unique: false,
	},
	{
		desc: `When the wearer deals damage with their spell, the first target hit and up to @ExtraBounces@ nearby enemies are dealt an additional @Damage@ magic damage.`,
		effects: {
			'Damage': 180,
			'{337a0cca}': 4,
			'{93d13af6}': 3,
			'HexRange': 2,
		},
		from: [3, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_LudensEcho.TFT.dds`,
		id: 34,
		name: `Luden's Echo`,
		unique: false,
	},
	{
		desc: `When the wearer deals damage with their spell, they burn the target, dealing @BurnPercent@% of the target's Maximum HP as true damage over @BurnDuration@ seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'MonsterCap': 100,
			'BurnPercent': 20,
			'{6df27940}': 1,
			'BurnDuration': 10,
		},
		from: [3, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Morellonomicon.TFT.dds`,
		id: 37,
		name: `Morellonomicon`,
		unique: true,
	},
	{
		desc: `Wearer dodges all critical strikes.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {},
		from: [2, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_PhantomDancer.TFT.dds`,
		id: 25,
		name: `Phantom Dancer`,
		unique: true,
	},
	{
		desc: `The wearer gains a shield that prevents the next crowd control effect from applying. This shield refreshes after @CleanseICD@ seconds.`,
		effects: {
			'MR': 20,
			'DodgeChance': 20,
			'{e93233aa}': 3,
		},
		from: [9, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Mercurial.TFT.dds`,
		id: 69,
		name: `Quicksilver`,
		unique: false,
	},
	{
		desc: `Wearer gains +@APPercentAmp@% Spell Power Amplification.<br><br>(All sources of Spell Power are @APPercentAmp@% more effective)`,
		effects: {
			'APPercentAmp': 50,
		},
		from: [3, 3],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RabadonsDeathcap.TFT.dds`,
		id: 33,
		name: `Rabadon's Deathcap`,
		unique: false,
	},
	{
		desc: `Wearer gains +100% Attack Range.`,
		effects: {},
		from: [2, 2],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RapidFirecannon.TFT.dds`,
		id: 22,
		name: `Rapid Firecannon`,
		unique: false,
	},
	{
		desc: `Wearer's Basic Attacks burn the target on-hit, dealing @BurnPercent@% of the target's Maximum HP as true damage over @BurnDuration@ seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'MonsterCap': 100,
			'BurnPercent': 20,
			'{6df27940}': 1,
			'BurnDuration': 10,
		},
		from: [5, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RedBuff.TFT.dds`,
		id: 57,
		name: `Red Buff`,
		unique: true,
	},
	{
		desc: `When the wearer falls below @HPThreshold@% HP, nearby allies are healed for @HPRestore@ HP after a 2.5 second delay.<br><br>This effect can trigger once per combat.`,
		effects: {
			'{1e0630e9}': 25,
			'{5ffbbd48}': 50,
			'{8f954b18}': 30,
			'HPRestore': 1200,
		},
		from: [4, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Redemption.TFT.dds`,
		id: 47,
		name: `Redemption`,
		unique: false,
	},
	{
		desc: `When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@ASPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>This effect can stack any number of times.`,
		effects: {
			'AS': 20,
			'CritChance': 20,
			'AAPerStack': 30,
			'{cb57edb0}': 30,
		},
		from: [2, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.TFT.dds`,
		id: 29,
		name: `Repeating Crossbow`,
		unique: false,
	},
	{
		desc: `After casting their spell, the wearer restores @ManaRestore@ Mana.`,
		effects: {
			'ManaRestore': 20,
		},
		from: [4, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SeraphsEmbrace.TFT.dds`,
		id: 44,
		name: `Seraph's Embrace`,
		unique: false,
	},
	{
		desc: `After casting their spell, the wearer's Basic Attacks restore @ManaPercentRestore@% of their Maximum Mana.`,
		effects: {
			'ManaPercentRestore': 18,
		},
		from: [1, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SpearOfShojin.TFT.dds`,
		id: 14,
		name: `Spear of Shojin`,
		unique: false,
	},
	{
		desc: `Every third Basic Attack from the wearer deals @Damage@ magical damage to @BouncesTooltip@ enemies.`,
		effects: {
			'Damage': 100,
			'{337a0cca}': 2,
			'{85884551}': 3,
		},
		from: [2, 4],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_StatikkShiv.TFT.dds`,
		id: 24,
		name: `Statikk Shiv`,
		unique: false,
	},
	{
		desc: `Wearer's Basic Attacks have a @ChanceOnHitToDisarm@% chance to disarm the target for @DisarmDuration@ seconds, preventing that enemy from Basic Attacking.`,
		effects: {
			'DisarmDuration': 3,
			'ChanceOnHitToDisarm': 33,
		},
		from: [5, 6],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_SwordBreaker.TFT.dds`,
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
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ThiefsGloves.TFT.dds`,
		id: 99,
		name: `Thief's Gloves`,
		unique: false,
	},
	{
		desc: `When the wearer is hit by a Basic Attack, they reflect @DamageReflect@% of the mitigated damage as magic damage.`,
		effects: {
			'CritDamageBlock': 100,
		},
		from: [5, 5],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Thornmail.TFT.dds`,
		id: 55,
		name: `Thornmail`,
		unique: false,
	},
	{
		desc: `Basic Attacks deal an additional @MaxHP@% of the wearer's Maximum HP as magic damage to the target and adjacent enemies behind them.`,
		effects: {
			'MaxHP': 3,
		},
		from: [2, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_TitanicHydra.TFT.dds`,
		id: 27,
		name: `Titanic Hydra`,
		unique: false,
	},
	{
		desc: `At the beginning of combat, the wearer gains a shield that blocks the first enemy spell that hits them. The enemy that breaks the shield is stunned for @StunDuration@ seconds.`,
		effects: {
			'HP': 200,
			'StunDuration': 4,
			'DodgeChance': 20,
		},
		from: [7, 9],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Backhand.TFT.dds`,
		id: 79,
		name: `Trap Claw`,
		unique: false,
	},
	{
		desc: `Wearer regenerates @HPRegen@% of their missing HP per second.`,
		effects: {
			'HPRegen': 6,
			'{0c90f194}': 400,
		},
		from: [7, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_WarmogsArmor.TFT.dds`,
		id: 77,
		name: `Warmog's Armor`,
		unique: false,
	},
	{
		desc: `When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain +@AS@% Attack Speed for the rest of combat.`,
		effects: {
			'AS': 15,
			'HexRange': 2,
		},
		from: [1, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_ZekesHerald.TFT.dds`,
		id: 17,
		name: `Zeke's Herald`,
		unique: false,
	},
	{
		desc: `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for @BanishDuration@ seconds.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'BanishDuration': 6,
		},
		from: [6, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Zephyr.TFT.dds`,
		id: 67,
		name: `Zephyr`,
		unique: true,
	},
]

export const spatulaItems: ItemData[] = [
	{
		desc: `Extra %i:scaleAS% +@AS@<br>Wearer is also a Blademaster<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AS': 20,
		},
		from: [2, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.TFT.dds`,
		id: 28,
		name: `Blade of the Ruined King`,
		unique: true,
	},
	{
		desc: `Extra %i:scaleMana% +@Mana@<br>Wearer is also a Demon<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Mana': 20,
		},
		from: [4, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Darkin.TFT.dds`,
		id: 48,
		name: `Darkin`,
		unique: true,
	},
	{
		desc: `Extra %i:scaleHP% +@HP@<br>Wearer is also glacial<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'HP': 200,
		},
		from: [8, 7],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.TFT.dds`,
		id: 78,
		name: `Frozen Mallet`,
		unique: true,
	},
	{
		desc: `Extra %i:scaleArmor% +@Armor@<br>Wearer is also a Knight<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'Armor': 20,
		},
		from: [5, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_KnightsVow.TFT.dds`,
		id: 58,
		name: `Knight's Vow`,
		unique: true,
	},
	{
		desc: `Wearer is also a Yordle<br>Extra +10% Critical Strike Chance, +10% Dodge Chance<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'CritChance': 10,
			'DodgeChance': 10,
		},
		from: [9, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Mittens.TFT.dds`,
		id: 89,
		name: `Mittens`,
		unique: true,
	},
	{
		desc: `Extra %i:scaleMR% +@ExtraMR@<br>Basic Attack fire an additional missile at another nearby enemy, dealing @MultiplierForDamage@% of the wearer's Attack Damage and applying on-hit effects.`,
		effects: {
			'AdditionalTargets': 1,
			'MultiplierForDamage': 75,
			'{9634ed1a}': 20,
		},
		from: [6, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_RunaansHurricane.TFT.dds`,
		id: 68,
		name: `Runaan's Hurricane`,
		unique: false,
	},
	{
		desc: `Extra %i:scaleAD% +@AD@<br>Wearer is also an Assassin<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AD': 15,
		},
		from: [1, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_YoumuusGhostblade.TFT.dds`,
		id: 18,
		name: `Youmuu's Ghostblade`,
		unique: true,
	},
	{
		desc: `Extra %i:scaleAP% +@AP@<br>Wearer is also a Sorcerer<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>`,
		effects: {
			'AP': 20,
		},
		from: [3, 8],
		icon: `ASSETS/Maps/Particles/TFT/TFT_Item_Yuumi.TFT.dds`,
		id: 38,
		name: `Yuumi`,
		unique: true,
	},
]

export const shadowItems: ItemData[] = []

export const radiantItems: ItemData[] = []

export const ornnItems: ItemData[] = []

export const supportItems: ItemData[] = []

export const shimmerscaleItems: ItemData[] = []

export const consumableItems: ItemData[] = []

export const hexbuffItems: ItemData[] = []

export const modItems: ItemData[] = []

export const unreleasedItems: ItemData[] = []

export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)
