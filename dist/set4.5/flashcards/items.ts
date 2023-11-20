import type { ItemFlashcard } from '../../index'

export const itemFlashcards: ItemFlashcard[] = [
	{
		id: `1`,
		name: `B.F. Sword`,
		type: `component`,
		description: `15 Attack Damage`,
		icon: `assets/maps/particles/tft/icon_bfsword`,
		from: [],
		unique: false,
	},
	{
		id: `5`,
		name: `Chain Vest`,
		type: `component`,
		description: `25 Armor`,
		icon: `assets/maps/particles/tft/tft_item_chainvest`,
		from: [],
		unique: false,
	},
	{
		id: `7`,
		name: `Giant's Belt`,
		type: `component`,
		description: `200 HP`,
		icon: `assets/maps/particles/tft/icon_giantsbelt`,
		from: [],
		unique: false,
	},
	{
		id: `3`,
		name: `Needlessly Large Rod`,
		type: `component`,
		description: `15 Spell Power`,
		icon: `assets/maps/particles/tft/icon_needlesslylargerod`,
		from: [],
		unique: false,
	},
	{
		id: `6`,
		name: `Negatron Cloak`,
		type: `component`,
		description: `25 Magic Resist`,
		icon: `assets/maps/particles/tft/tft_item_negatroncloak`,
		from: [],
		unique: false,
	},
	{
		id: `2`,
		name: `Recurve Bow`,
		type: `component`,
		description: `15 Attack Speed`,
		icon: `assets/maps/particles/tft/tft_item_recurvebow`,
		from: [],
		unique: false,
	},
	{
		id: `9`,
		name: `Sparring Gloves`,
		type: `component`,
		description: `10 Critical Strike Chance 10 Dodge Chance`,
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
		description: `15 Mana`,
		icon: `assets/maps/particles/tft/icon_tearofthegoddess`,
		from: [],
		unique: false,
	},
	{
		id: `16`,
		name: `Bloodthirster`,
		type: `completed`,
		description: `Basic attacks heal the holder for 40% of the damage dealt.`,
		icon: `assets/maps/particles/tft/tft_item_bloodthirster`,
		from: [1, 6],
		unique: false,
	},
	{
		id: `44`,
		name: `Blue Buff`,
		type: `completed`,
		description: `After casting their spell, the wearer's Mana is set to 20. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_bluebuff`,
		from: [4, 4],
		unique: true,
	},
	{
		id: `55`,
		name: `Bramble Vest`,
		type: `completed`,
		description: `Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 80/100/150 magic damage to all nearby enemies (once every 2.5 seconds).`,
		icon: `assets/maps/particles/tft/tft_item_bramblevest.tft_1001_itemsupdate`,
		from: [5, 5],
		unique: false,
	},
	{
		id: `46`,
		name: `Chalice of Power`,
		type: `completed`,
		description: `When combat begins, the wearer and all allies within 1 hex in the same row gain 30 Spell Power for the rest of combat.`,
		icon: `assets/maps/particles/tft/tft_item_chaliceofpower`,
		from: [6, 4],
		unique: false,
	},
	{
		id: `11`,
		name: `Deathblade`,
		type: `completed`,
		description: `Contributing to a kill grants the holder +10 additional Attack Damage for the rest of combat. This effect can stack any number of times (starting at 3).`,
		icon: `assets/maps/particles/tft/tft_item_deathblade`,
		from: [1, 1],
		unique: false,
	},
	{
		id: `66`,
		name: `Dragon's Claw`,
		type: `completed`,
		description: `Reduces incoming magic damage by 60%.`,
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
		description: `Reduces the Attack Speed of nearby enemies by 50%. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.`,
		icon: `assets/maps/particles/tft/tft_item_frozenheart`,
		from: [4, 5],
		unique: false,
	},
	{
		id: `56`,
		name: `Gargoyle Stoneplate`,
		type: `completed`,
		description: `The holder gains 20 Armor and 20 Magic Resist for each enemy targeting them.`,
		icon: `assets/maps/particles/tft/tft_item_gargoylestoneplate`,
		from: [5, 6],
		unique: false,
	},
	{
		id: `12`,
		name: `Giant Slayer`,
		type: `completed`,
		description: `The holder's spells and basic attacks do 10% bonus damage. If the target has more than 1750 maximum HP, the bonus increases to 80%.`,
		icon: `assets/maps/particles/tft/tft_item_giantslayer`,
		from: [1, 2],
		unique: false,
	},
	{
		id: `15`,
		name: `Guardian Angel`,
		type: `completed`,
		description: `Prevents the wearer's first death, placing them in stasis instead. After 2 seconds, they return with 400 HP and shed all negative effects.`,
		icon: `assets/maps/particles/tft/tft_item_guardianangel`,
		from: [1, 5],
		unique: false,
	},
	{
		id: `23`,
		name: `Guinsoo's Rageblade`,
		type: `completed`,
		description: `Basic Attacks grant +6% bonus Attack Speed for the rest of combat. This effect can stack any number of times.`,
		icon: `assets/maps/particles/tft/tft_item_guinsoosrageblade`,
		from: [2, 3],
		unique: false,
	},
	{
		id: `49`,
		name: `Hand Of Justice`,
		type: `completed`,
		description: `At the beginning of each planning phase, the wearer gains one of the following: Basic attacks and spells deal +66.66699981689453% Damage. Basic attacks and spells heal for 66.66699981689453% of damage dealt.`,
		icon: `assets/maps/particles/tft/tft_item_handofjustice`,
		from: [4, 9],
		unique: false,
	},
	{
		id: `13`,
		name: `Hextech Gunblade`,
		type: `completed`,
		description: `The holder's spells heal them for 33% of the damage dealt. Excess healing fuels a shield that protects the holder against up to 300 damage.`,
		icon: `assets/maps/particles/tft/tft_item_hextechgunblade`,
		from: [1, 3],
		unique: false,
	},
	{
		id: `19`,
		name: `Infinity Edge`,
		type: `completed`,
		description: `Grants 75 Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes +1% Critical Strike Damage. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_infinityedge`,
		from: [1, 9],
		unique: true,
	},
	{
		id: `36`,
		name: `Ionic Spark`,
		type: `completed`,
		description: `Enemies within 2 hexes have their Magic Resist reduced by 40% (does not stack). When they cast a spell, they are zapped taking magic damage equal to 225% of their max Mana.`,
		icon: `assets/maps/particles/tft/tft_item_ionicspark`,
		from: [3, 6],
		unique: false,
	},
	{
		id: `39`,
		name: `Jeweled Gauntlet`,
		type: `completed`,
		description: `The holder's spells can cause critical hits, and the holder gains +40% bonus critical strike damage.`,
		icon: `assets/maps/particles/tft/tft_item_jeweled_gauntlet`,
		from: [3, 9],
		unique: false,
	},
	{
		id: `29`,
		name: `Last Whisper`,
		type: `completed`,
		description: `When the wearer inflicts a critical hit, the target's Armor is reduced by 70% for 5 seconds. This effect does not stack. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_mortalreminder`,
		from: [2, 9],
		unique: true,
	},
	{
		id: `35`,
		name: `Locket of the Iron Solari`,
		type: `completed`,
		description: `When combat begins, the wearer and all allies within 2 hexes in the same row gain a shield that blocks 300/350/400 damage for 8 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_locketoftheironsolari`,
		from: [3, 5],
		unique: false,
	},
	{
		id: `34`,
		name: `Luden's Echo`,
		type: `completed`,
		description: `When the holder casts their spell, the first target dealt magic damage and up to {ExtraBounces} nearby enemies are dealt an additional 180 magic damage, plus {BonusDamageVsShieldOrCC} if they are crowd-controlled.`,
		icon: `assets/maps/particles/tft/tft_item_ludensecho`,
		from: [3, 4],
		unique: false,
	},
	{
		id: `37`,
		name: `Morellonomicon`,
		type: `completed`,
		description: `When the holder deals magic damage with their spell, they burn the target, dealing 25% of the target's maximum HP as true damage over 10 seconds, and reducing healing by 50% for the duration of the burn. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_morellonomicon`,
		from: [3, 7],
		unique: true,
	},
	{
		id: `69`,
		name: `Quicksilver`,
		type: `completed`,
		description: `The wearer is immune to crowd control for the first 10 seconds of combat. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_mercurial`,
		from: [9, 6],
		unique: true,
	},
	{
		id: `33`,
		name: `Rabadon's Deathcap`,
		type: `completed`,
		description: `The holder gains 50 additional Spell Power.`,
		icon: `assets/maps/particles/tft/tft_item_rabadonsdeathcap`,
		from: [3, 3],
		unique: false,
	},
	{
		id: `22`,
		name: `Rapid Firecannon`,
		type: `completed`,
		description: `The holder gains {AttackRange}% Attack Range, and their Basic Attacks can't miss.`,
		icon: `assets/maps/particles/tft/tft_item_rapidfirecannon`,
		from: [2, 2],
		unique: false,
	},
	{
		id: `47`,
		name: `Redemption`,
		type: `completed`,
		description: `When the wearer dies, allies are healed for 800 HP.`,
		icon: `assets/maps/particles/tft/tft_item_redemption`,
		from: [4, 7],
		unique: false,
	},
	{
		id: `26`,
		name: `Runaan's Hurricane`,
		type: `completed`,
		description: `Basic Attacks fire a bolt at another nearby enemy, dealing 80% of the wearer's Attack Damage and applying on-hit effects. These bolts can critical strike.`,
		icon: `assets/maps/particles/tft/tft_item_runaanshurricane`,
		from: [6, 2],
		unique: false,
	},
	{
		id: `59`,
		name: `Shroud of Stillness`,
		type: `completed`,
		description: `When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana by 35% until they cast. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_shroud.tft_set3`,
		from: [5, 9],
		unique: true,
	},
	{
		id: `14`,
		name: `Spear of Shojin`,
		type: `completed`,
		description: `The holder's basic attacks restore 5 Mana on-hit.`,
		icon: `assets/maps/particles/tft/tft_item_spearofshojin`,
		from: [1, 4],
		unique: false,
	},
	{
		id: `24`,
		name: `Statikk Shiv`,
		type: `completed`,
		description: `Every third Basic Attack from the wearer unleashes a chain lightning, dealing 65 magic damage to 4 enemies. The lightning can critically strike, dealing bonus damage and reducing the target's Magic Resist by 60% for 6 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_statikkshiv`,
		from: [2, 4],
		unique: false,
	},
	{
		id: `57`,
		name: `Sunfire Cape`,
		type: `completed`,
		description: `Every 2.5 seconds, a random enemy within 2 hexes is burned for 25% of their maximum HP over 10 seconds. Any healing they receive is reduced by 50%.`,
		icon: `assets/maps/particles/tft/tft_item_sunfirecape`,
		from: [5, 7],
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
		description: `When the wearer takes damage or inflicts a critical hit, they gain a {DamageIncreasePercent}% stacking damage bonus. Stacks up to 25 times, at which point the wearer gains 25 Armor and Magic Resistance, and increases in size.`,
		icon: `assets/maps/particles/tft/tft_item_titansresolve.tft_1001_itemsupdate`,
		from: [5, 2],
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
		description: `Grants {TooltipDisplayHP} bonus HP (including components).`,
		icon: `assets/maps/particles/tft/tft_item_warmogsarmor`,
		from: [7, 7],
		unique: false,
	},
	{
		id: `17`,
		name: `Zeke's Herald`,
		type: `completed`,
		description: `When combat begins, the wearer and all allies within 1 hexes in the same row gain +30% Attack Speed for the rest of combat.`,
		icon: `assets/maps/particles/tft/tft_item_zekesherald`,
		from: [1, 7],
		unique: false,
	},
	{
		id: `67`,
		name: `Zephyr`,
		type: `completed`,
		description: `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_zephyr`,
		from: [6, 7],
		unique: true,
	},
	{
		id: `27`,
		name: `Zz'Rot Portal`,
		type: `completed`,
		description: `At the start of combat, the wearer taunts enemies within 2 hexes for {TauntDuration} second. When the wearer dies, a Construct with {1StarZombieHP}/{2StarZombieHP}/{3StarZombieHP} HP arises and taunts enemies again.`,
		icon: `assets/maps/particles/tft/tft_item_zzrot_portal`,
		from: [2, 7],
		unique: false,
	},
	{
		id: `-38`,
		name: `Aspect of Dusk`,
		type: `spatula`,
		description: `The holder gains the Dusk trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_set4dusk.tft_set4`,
		from: [3, 8],
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
		id: `18`,
		name: `Blade of the Ruined King`,
		type: `spatula`,
		description: `The wearer gains the Blademaster trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft3_item_blademaster`,
		from: [1, 8],
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
		id: `68`,
		name: `Elderwood Sprout`,
		type: `spatula`,
		description: `The holder gains the Elderwood trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_set4elderwood.tft_set4`,
		from: [6, 8],
		unique: true,
	},
	{
		id: `58`,
		name: `Rebel Medal`,
		type: `spatula`,
		description: `The wearer gains the Rebel trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft3_item_rebel`,
		from: [5, 8],
		unique: true,
	},
	{
		id: `38`,
		name: `Spirit of the Dragon`,
		type: `spatula`,
		description: `The holder gains the Dragonsoul trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_item_dragonsoulspatula.tft_set4_act2`,
		from: [3, 8],
		unique: true,
	},
	{
		id: `48`,
		name: `Star Guardian's Charm`,
		type: `spatula`,
		description: `The wearer gains the Star Guardian trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft3_item_starguardian`,
		from: [4, 8],
		unique: true,
	},
	{
		id: `78`,
		name: `Warlord's Banner`,
		type: `spatula`,
		description: `The wearer gains the Warlord trait. [Unique - Only One Per Champion]`,
		icon: `assets/maps/particles/tft/tft_item_set4warlord.tft_set4`,
		from: [8, 7],
		unique: true,
	},
	{
		id: `9001`,
		name: `Anima Visage`,
		type: `completed`,
		description: `The wearer regenerates {PercentHPRegen}% of their maximum HP each second. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_tank_t3_spiritvisage`,
		from: [],
		unique: true,
	},
	{
		id: `9002`,
		name: `Death's Defiance`,
		type: `completed`,
		description: `{IgnorePainPercent}% of the damage the wearer receives is instead dealt over {BleedDuration} seconds as non-lethal damage. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_fighter_t3_deathsdance`,
		from: [],
		unique: true,
	},
	{
		id: `9003`,
		name: `Eternal Winter`,
		type: `completed`,
		description: `Enemies who damage the wearer have their Attack Speed slowed by {ASSlowPercent}% for 2 seconds. After being slowed this way {NumApplications} times, the attacker is Frozen for the duration instead. An enemy can only be Frozen once every {FreezeCooldown} seconds. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_mage_t4_everfrost`,
		from: [],
		unique: true,
	},
	{
		id: `9009`,
		name: `Gold Collector`,
		type: `completed`,
		description: `The wearer executes enemies below {ExecutePercent}% on hit. Executions generate 1 gold. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_marksman_t3_thecollector`,
		from: [],
		unique: true,
	},
	{
		id: `9004`,
		name: `Infinity Force`,
		type: `completed`,
		description: `[Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_fighter_t4_trinityforce`,
		from: [],
		unique: true,
	},
	{
		id: `9005`,
		name: `Manazane`,
		type: `completed`,
		description: `After the wearer casts their spell for the first time each combat, they restore 100 Mana over 4 seconds. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_marksman_t3_muramana`,
		from: [],
		unique: true,
	},
	{
		id: `9006`,
		name: `Obsidian Cleaver`,
		type: `completed`,
		description: `The wearer's attacks and spell damage shred enemy Armor and Magic Resistance by 40% for 3 seconds. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_fighter_t3_blackcleaver`,
		from: [],
		unique: true,
	},
	{
		id: `9007`,
		name: `Randuin's Sanctum`,
		type: `completed`,
		description: `At the start of combat, all allies adjacent to the wearer gain 40 Armor and Magic Resistance for the rest of combat. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_tank_t3_randuinsomen`,
		from: [],
		unique: true,
	},
	{
		id: `9008`,
		name: `Rocket-Propelled Fist`,
		type: `completed`,
		description: `At the start of combat, the wearer pulls the farthest enemy into melee range, stunning them for 1.5 seconds. Allies within range will prioritize attacking that enemy. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_rocketpropelledfist.tft_set4_act2`,
		from: [],
		unique: true,
	},
	{
		id: `9010`,
		name: `Zhonya's Paradox`,
		type: `completed`,
		description: `The first instance of damage that would reduce the wearer below {PercentHPThreshold}% HP is prevented, causing them to become invulnerable for 2.5 seconds. [Only One Ornn Artifact Per Champion]`,
		icon: `assets/maps/particles/tft/tft4_ornnitem_mage_t3_zhonyashourglass`,
		from: [],
		unique: true,
	},
]