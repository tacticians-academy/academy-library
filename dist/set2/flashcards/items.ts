import type { ItemFlashcard } from '../../index'

export const itemFlashcards: ItemFlashcard[] = [
	{
		id: `1`,
		name: `B. F. Sword`,
		type: `component`,
		description: `+15 Attack Damage`,
		icon: `assets/maps/particles/tft/icon_bfsword`,
		from: [],
		unique: false,
	},
	{
		id: `5`,
		name: `Chain Vest`,
		type: `component`,
		description: `+25 Armor`,
		icon: `assets/maps/particles/tft/tft_item_chainvest`,
		from: [],
		unique: false,
	},
	{
		id: `7`,
		name: `Giant's Belt`,
		type: `component`,
		description: `+200 HP`,
		icon: `assets/maps/particles/tft/icon_giantsbelt`,
		from: [],
		unique: false,
	},
	{
		id: `3`,
		name: `Needlessly Large Rod`,
		type: `component`,
		description: `+20% Spell Power`,
		icon: `assets/maps/particles/tft/icon_needlesslylargerod`,
		from: [],
		unique: false,
	},
	{
		id: `6`,
		name: `Negatron Cloak`,
		type: `component`,
		description: `+25 Magic Resist`,
		icon: `assets/maps/particles/tft/tft_item_negatroncloak`,
		from: [],
		unique: false,
	},
	{
		id: `2`,
		name: `Recurve Bow`,
		type: `component`,
		description: `+15% Attack Speed`,
		icon: `assets/maps/particles/tft/tft_item_recurvebow`,
		from: [],
		unique: false,
	},
	{
		id: `9`,
		name: `Sparring Gloves`,
		type: `component`,
		description: `+10% Critical Strike Chance +10% Dodge Chance`,
		icon: `assets/maps/particles/tft/tft_item_sparringgloves`,
		from: [],
		unique: false,
	},
	{
		id: `8`,
		name: `Spatula`,
		type: `component`,
		description: `It must do something ...`,
		icon: `assets/maps/particles/tft/tft_item_spatula`,
		from: [],
		unique: false,
	},
	{
		id: `4`,
		name: `Tear of the Goddess`,
		type: `component`,
		description: `+20 Mana`,
		icon: `assets/maps/particles/tft/icon_tearofthegoddess`,
		from: [],
		unique: false,
	},
	{
		id: `16`,
		name: `Bloodthirster`,
		type: `completed`,
		description: `Basic Attacks heal the wearer for 50% of the damage dealt.`,
		icon: `assets/maps/particles/tft/tft_item_bloodthirster`,
		from: [1, 6],
		unique: false,
	},
	{
		id: `55`,
		name: `Bramble Vest`,
		type: `completed`,
		description: `Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 100/140/200 magic damage to all nearby enemies (once every {ICD} seconds).`,
		icon: `assets/maps/particles/tft/tft_item_bramblevest.tft_1001_itemsupdate`,
		from: [5, 5],
		unique: false,
	},
	{
		id: `11`,
		name: `Deathblade`,
		type: `completed`,
		description: `Contributing to a kill grants +15 Attack Damage for the remainder of combat. This effect can stack any number of times (starting at 1).`,
		icon: `assets/maps/particles/tft/tft_item_deathblade`,
		from: [1, 1],
		unique: false,
	},
	{
		id: `66`,
		name: `Dragon's Claw`,
		type: `completed`,
		description: `Reduces incoming magic damage by 50%`,
		icon: `assets/maps/particles/tft/tft_item_dragonsclaw`,
		from: [6, 6],
		unique: false,
	},
	{
		id: `88`,
		name: `Force of Nature`,
		type: `completed`,
		description: `Wearer's team gains +1 maximum team size.`,
		icon: `assets/maps/particles/tft/tft_item_forceofnature`,
		from: [8, 8],
		unique: false,
	},
	{
		id: `45`,
		name: `Frozen Heart`,
		type: `completed`,
		description: `Reduces the Attack Speed of nearby enemies by 40%. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.`,
		icon: `assets/maps/particles/tft/tft_item_frozenheart`,
		from: [4, 5],
		unique: false,
	},
	{
		id: `12`,
		name: `Giant Slayer`,
		type: `completed`,
		description: `The wearer's Basic Attacks deal an additional {CurrentHPPhysicalDamage}% of the target's current HP as physical damage.`,
		icon: `assets/maps/particles/tft/tft_item_giantslayer`,
		from: [1, 2],
		unique: false,
	},
	{
		id: `15`,
		name: `Guardian Angel`,
		type: `completed`,
		description: `Revives the wearer 2 seconds after dying, with up to 400 HP, and cleanses negative effects. This effect can trigger once per combat.`,
		icon: `assets/maps/particles/tft/tft_item_guardianangel`,
		from: [1, 5],
		unique: false,
	},
	{
		id: `23`,
		name: `Guinsoo's Rageblade`,
		type: `completed`,
		description: `Basic Attacks grant +5% bonus Attack Speed for the rest of combat. No stacking limit.`,
		icon: `assets/maps/particles/tft/tft_item_guinsoosrageblade`,
		from: [2, 3],
		unique: false,
	},
	{
		id: `49`,
		name: `Hand Of Justice`,
		type: `completed`,
		description: `At the beginning of each planning phase, the wearer gains one of the following: Basic attacks and spells deal +66.66699981689453% Damage Basic attacks heal 66.66699981689453 HP on-hit`,
		icon: `assets/maps/particles/tft/tft_item_handofjustice`,
		from: [4, 9],
		unique: false,
	},
	{
		id: `13`,
		name: `Hextech Gunblade`,
		type: `completed`,
		description: `Basic Attacks and spells heal the wearer for 33% of the damage dealt.`,
		icon: `assets/maps/particles/tft/tft_item_hextechgunblade`,
		from: [1, 3],
		unique: false,
	},
	{
		id: `46`,
		name: `Hush`,
		type: `completed`,
		description: `Basic Attacks have a 20% chance on-hit to silence the target, preventing mana gain for 4 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_hush`,
		from: [6, 4],
		unique: false,
	},
	{
		id: `59`,
		name: `Iceborn Gauntlet`,
		type: `completed`,
		description: `After casting a spell, the wearer's next Basic Attack freezes the target for {FreezeDuration} seconds.`,
		icon: `assets/maps/particles/tft/tft_item_iceborngauntlet`,
		from: [5, 9],
		unique: false,
	},
	{
		id: `19`,
		name: `Infinity Edge`,
		type: `completed`,
		description: `Grants +100% Critical Strike Damage.`,
		icon: `assets/maps/particles/tft/tft_item_infinityedge`,
		from: [1, 9],
		unique: false,
	},
	{
		id: `36`,
		name: `Ionic Spark`,
		type: `completed`,
		description: `Enemies within 3 hexes who cast a spell are zapped, taking magic damage equal to 225% of their max Mana.`,
		icon: `assets/maps/particles/tft/tft_item_ionicspark`,
		from: [3, 6],
		unique: false,
	},
	{
		id: `39`,
		name: `Jeweled Gauntlet`,
		type: `completed`,
		description: `Your spells can inflict critical hits. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_jeweled_gauntlet`,
		from: [3, 9],
		unique: true,
	},
	{
		id: `29`,
		name: `Last Whisper`,
		type: `completed`,
		description: `When the wearer inflicts a critical hit, the target's Armor is reduced by 90% for 3 seconds. This effect does not stack. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_mortalreminder`,
		from: [2, 9],
		unique: true,
	},
	{
		id: `35`,
		name: `Locket of the Iron Solari`,
		type: `completed`,
		description: `When combat begins, the wearer and all allies within 2 hexes in the same row gain a shield that blocks 250/275/350 damage for 8 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_locketoftheironsolari`,
		from: [3, 5],
		unique: false,
	},
	{
		id: `34`,
		name: `Luden's Echo`,
		type: `completed`,
		description: `When the wearer casts their spell, the first target hit and up to {ExtraBounces} nearby enemies are dealt an additional {1StarDamage}/{2StarDamage}/{3StarDamage} magic damage.`,
		icon: `assets/maps/particles/tft/tft_item_ludensecho`,
		from: [3, 4],
		unique: false,
	},
	{
		id: `37`,
		name: `Morellonomicon`,
		type: `completed`,
		description: `When the wearer deals damage with their spell, they burn the target, dealing 18% of the target's maximum HP as true damage, and reducing healing by 80%, over 10 seconds. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_morellonomicon`,
		from: [3, 7],
		unique: true,
	},
	{
		id: `69`,
		name: `Quicksilver`,
		type: `completed`,
		description: `The wearer is immune to crowd control. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_mercurial`,
		from: [9, 6],
		unique: true,
	},
	{
		id: `33`,
		name: `Rabadon's Deathcap`,
		type: `completed`,
		description: `Grants +75% Spell Power Amplification. (All sources of Spell Power are 75% more effective)`,
		icon: `assets/maps/particles/tft/tft_item_rabadonsdeathcap`,
		from: [3, 3],
		unique: false,
	},
	{
		id: `22`,
		name: `Rapid Firecannon`,
		type: `completed`,
		description: `Gain {AttackRange}% Attack Range.`,
		icon: `assets/maps/particles/tft/tft_item_rapidfirecannon`,
		from: [2, 2],
		unique: false,
	},
	{
		id: `57`,
		name: `Red Buff`,
		type: `completed`,
		description: `The wearer's Basic Attacks burn their target on-hit. This deals 18% of the target's Maximum HP as true damage, and reduces any healing the target receives by 80%, over 10 seconds. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_redbuff`,
		from: [5, 7],
		unique: true,
	},
	{
		id: `47`,
		name: `Redemption`,
		type: `completed`,
		description: `2.5 seconds after the wearer falls below {HPThreshold}% HP, allies are healed for 1200 HP. This effect can trigger once per combat.`,
		icon: `assets/maps/particles/tft/tft_item_redemption`,
		from: [4, 7],
		unique: false,
	},
	{
		id: `26`,
		name: `Runaan's Hurricane`,
		type: `completed`,
		description: `Basic Attacks fire a bolt at another nearby enemy, dealing 60% of the wearer's Attack Damage and applying on-hit effects.`,
		icon: `assets/maps/particles/tft/tft_item_runaanshurricane`,
		from: [6, 2],
		unique: false,
	},
	{
		id: `44`,
		name: `Seraph's Embrace`,
		type: `completed`,
		description: `After casting their spell, the wearer gains 20 Mana.`,
		icon: `assets/maps/particles/tft/tft_item_seraphsembrace`,
		from: [4, 4],
		unique: false,
	},
	{
		id: `14`,
		name: `Spear of Shojin`,
		type: `completed`,
		description: `After casting their spell, the wearer's Basic Attacks restore 18% of their maximum Mana.`,
		icon: `assets/maps/particles/tft/tft_item_spearofshojin`,
		from: [1, 4],
		unique: false,
	},
	{
		id: `24`,
		name: `Statikk Shiv`,
		type: `completed`,
		description: `Every third Basic Attack from the wearer deals 85 magic damage to 4/{2StarBounces}/3 enemies.`,
		icon: `assets/maps/particles/tft/tft_item_statikkshiv`,
		from: [2, 4],
		unique: false,
	},
	{
		id: `56`,
		name: `Sword Breaker`,
		type: `completed`,
		description: `The wearer's Basic Attacks have a 25% chance to disarm the target for 3 seconds, preventing that enemy from making Basic Attacks.`,
		icon: `assets/maps/particles/tft/tft_item_swordbreaker`,
		from: [5, 6],
		unique: false,
	},
	{
		id: `99`,
		name: `Thief's Gloves`,
		type: `completed`,
		description: `At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level. [Consumes Three Item Slots]`,
		icon: `assets/maps/particles/tft/tft_item_thiefsgloves`,
		from: [9, 9],
		unique: false,
	},
	{
		id: `25`,
		name: `Titan's Resolve`,
		type: `completed`,
		description: `When the wearer takes damage or inflicts a critical hit, they gain a {DamageIncreasePercent}% stacking damage bonus. Stacks up to 50 times, at which point the wearer gains 25 Armor and Magic Resistance, and increases in size.`,
		icon: `assets/maps/particles/tft/tft_item_titansresolve.tft_1001_itemsupdate`,
		from: [5, 2],
		unique: false,
	},
	{
		id: `27`,
		name: `Titanic Hydra`,
		type: `completed`,
		description: `Basic Attacks deal an additional 3% of the wearer's Maximum HP as magic damage to the target and adjacent enemies behind them.`,
		icon: `assets/maps/particles/tft/tft_item_titanichydra`,
		from: [2, 7],
		unique: false,
	},
	{
		id: `79`,
		name: `Trap Claw`,
		type: `completed`,
		description: `Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for 4 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_backhand`,
		from: [7, 9],
		unique: false,
	},
	{
		id: `77`,
		name: `Warmog's Armor`,
		type: `completed`,
		description: `The wearer regenerates 6% of their missing HP per second.`,
		icon: `assets/maps/particles/tft/tft_item_warmogsarmor`,
		from: [7, 7],
		unique: false,
	},
	{
		id: `17`,
		name: `Zeke's Herald`,
		type: `completed`,
		description: `When combat begins, the wearer and all allies within 2 hexes in the same row gain +15% Attack Speed for the rest of combat.`,
		icon: `assets/maps/particles/tft/tft_item_zekesherald`,
		from: [1, 7],
		unique: false,
	},
	{
		id: `67`,
		name: `Zephyr`,
		type: `completed`,
		description: `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 6 seconds. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_zephyr`,
		from: [6, 7],
		unique: true,
	},
	{
		id: `89`,
		name: `Berserker's Axe`,
		type: `spatula`,
		description: `The wearer is also a Berserker. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_berserkeraxe`,
		from: [9, 8],
		unique: true,
	},
	{
		id: `28`,
		name: `Blade of the Ruined King`,
		type: `spatula`,
		description: `The wearer is also a Blademaster. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_bladeoftheruinedking`,
		from: [2, 8],
		unique: true,
	},
	{
		id: `78`,
		name: `Frozen Mallet`,
		type: `spatula`,
		description: `The wearer is also Glacial. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_frozenmallet`,
		from: [8, 7],
		unique: true,
	},
	{
		id: `38`,
		name: `Inferno's Cinder`,
		type: `spatula`,
		description: `The wearer is also an Inferno. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_infernocinder`,
		from: [3, 8],
		unique: true,
	},
	{
		id: `48`,
		name: `Mages Cap`,
		type: `spatula`,
		description: `The wearer is also a Mage. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_magescap`,
		from: [4, 8],
		unique: true,
	},
	{
		id: `68`,
		name: `Talisman of Light`,
		type: `spatula`,
		description: `The wearer is also Light. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_talismanoflight`,
		from: [6, 8],
		unique: true,
	},
	{
		id: `58`,
		name: `Warden's Mail`,
		type: `spatula`,
		description: `The wearer is also a Warden. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_wardensmail`,
		from: [5, 8],
		unique: true,
	},
	{
		id: `18`,
		name: `Youmuu's Ghostblade`,
		type: `spatula`,
		description: `The wearer is also an Assassin. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_youmuusghostblade`,
		from: [1, 8],
		unique: true,
	},
]