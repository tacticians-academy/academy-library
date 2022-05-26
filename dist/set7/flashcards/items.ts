import type { ItemFlashcard } from '../../index'

export const itemFlashcards: ItemFlashcard[] = [
	{
		id: 1,
		name: `B.F. Sword`,
		type: `component`,
		description: `+10 Attack Damage`,
		icon: `assets/maps/particles/tft/item_icons/standard/bf_sword`,
		from: [],
		unique: false,
	},
	{
		id: 2,
		name: `Recurve Bow`,
		type: `component`,
		description: `+10% Attack Speed`,
		icon: `assets/maps/particles/tft/item_icons/standard/recurve_bow`,
		from: [],
		unique: false,
	},
	{
		id: 3,
		name: `Needlessly Large Rod`,
		type: `component`,
		description: `+10 Ability Power`,
		icon: `assets/maps/particles/tft/item_icons/standard/needlessly_large_rod`,
		from: [],
		unique: false,
	},
	{
		id: 4,
		name: `Tear of the Goddess`,
		type: `component`,
		description: `+15 Mana`,
		icon: `assets/maps/particles/tft/item_icons/standard/tear_of_the_goddess`,
		from: [],
		unique: false,
	},
	{
		id: 5,
		name: `Chain Vest`,
		type: `component`,
		description: `+20 Armor`,
		icon: `assets/maps/particles/tft/item_icons/standard/chain_vest`,
		from: [],
		unique: false,
	},
	{
		id: 6,
		name: `Negatron Cloak`,
		type: `component`,
		description: `+20 Magic Resist`,
		icon: `assets/maps/particles/tft/item_icons/standard/negatron_cloak`,
		from: [],
		unique: false,
	},
	{
		id: 7,
		name: `Giant's Belt`,
		type: `component`,
		description: `+150 HP`,
		icon: `assets/maps/particles/tft/item_icons/standard/gaints_belt`,
		from: [],
		unique: false,
	},
	{
		id: 8,
		name: `Spatula`,
		type: `component`,
		description: `It must do something ...`,
		icon: `assets/maps/particles/tft/item_icons/standard/spatula`,
		from: [],
		unique: false,
	},
	{
		id: 9,
		name: `Sparring Gloves`,
		type: `component`,
		description: `+5 Critical Strike Chance +10 Dodge Chance`,
		icon: `assets/maps/particles/tft/item_icons/standard/sparring_gloves`,
		from: [],
		unique: false,
	},
	{
		id: 11,
		name: `Deathblade`,
		type: `completed`,
		description: `Grant 40/70/100 bonus Attack Damage (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/death_blade`,
		from: [1, 1],
		unique: false,
	},
	{
		id: 12,
		name: `Giant Slayer`,
		type: `completed`,
		description: `Abilities and attacks deal 15% bonus damage. If the target has more than 2200 maximum HP, the bonus increases to 45%.`,
		icon: `assets/maps/particles/tft/item_icons/standard/giant_slayer`,
		from: [1, 2],
		unique: false,
	},
	{
		id: 13,
		name: `Hextech Gunblade`,
		type: `completed`,
		description: `Grant 25% Omnivamp. Damage heals the lowest HP ally for the same amount.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/hextech_gunblade`,
		from: [1, 3],
		unique: false,
	},
	{
		id: 14,
		name: `Spear of Shojin`,
		type: `completed`,
		description: `Attacks restore 8 additional Mana.`,
		icon: `assets/maps/particles/tft/item_icons/standard/spear_of_shojin`,
		from: [1, 4],
		unique: false,
	},
	{
		id: 16,
		name: `Bloodthirster`,
		type: `completed`,
		description: `Grant 25% Omnivamp. Once per combat: At 40% HP, gain a 30% maximum HP shield that lasts up to 5 seconds.`,
		icon: `assets/maps/particles/tft/item_icons/standard/bloodthirster`,
		from: [1, 6],
		unique: false,
	},
	{
		id: 17,
		name: `Zeke's Herald`,
		type: `completed`,
		description: `Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/zekes_herald`,
		from: [1, 7],
		unique: false,
	},
	{
		id: 19,
		name: `Infinity Edge`,
		type: `completed`,
		description: `Grant 75% Critical Strike Chance (including components) and 10% Critical Strike Damage. Each point of Critical Strike Chance above 100% converts to 1% Critical Strike Damage. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/infinity_edge`,
		from: [1, 9],
		unique: true,
	},
	{
		id: 22,
		name: `Rapid Firecannon`,
		type: `completed`,
		description: `Grant 50% bonus Attack Speed (including components) and 1 Attack Range. Attacks cannot miss.`,
		icon: `assets/maps/particles/tft/item_icons/standard/rapid_fire_cannon`,
		from: [2, 2],
		unique: false,
	},
	{
		id: 23,
		name: `Guinsoo's Rageblade`,
		type: `completed`,
		description: `Attacks grant 6% bonus Attack Speed. This effect stacks.`,
		icon: `assets/maps/particles/tft/item_icons/standard/guinsoos_rageblade`,
		from: [2, 3],
		unique: false,
	},
	{
		id: 24,
		name: `Statikk Shiv`,
		type: `completed`,
		description: `Grant 10% bonus Attack Speed (including components). Every 3rd attack unleashes chain lightning that bounces to 4 enemies, dealing 60 magic damage and reducing their Magic Resist by 50% for 5 seconds. [Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/statikk_shiv`,
		from: [2, 4],
		unique: false,
	},
	{
		id: 25,
		name: `Titan's Resolve`,
		type: `completed`,
		description: `Grant 2 Attack Damage and 2 Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, grant 25 Armor and 25 Magic Resist.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/titans_resolve`,
		from: [5, 2],
		unique: false,
	},
	{
		id: 26,
		name: `Runaan's Hurricane`,
		type: `completed`,
		description: `Grant 10 Attack Damage. Attacks fire a bolt at a nearby enemy, dealing 70% Attack Damage as physical damage. ​​[Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/runaans_hurricane`,
		from: [6, 2],
		unique: false,
	},
	{
		id: 27,
		name: `Zz'Rot Portal`,
		type: `completed`,
		description: `Combat start: Taunt enemies within 4 hexes. On death, a Voidspawn arises, taunting nearby enemies. Voidspawns that arise from summoned units are 25% effective.`,
		icon: `assets/maps/particles/tft/item_icons/standard/zzrot_portal`,
		from: [2, 7],
		unique: false,
	},
	{
		id: 29,
		name: `Last Whisper`,
		type: `completed`,
		description: `Dealing physical damage reduces the target's Armor by 50% for 5 seconds. This effect does not stack. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/last_whisper`,
		from: [2, 9],
		unique: true,
	},
	{
		id: 33,
		name: `Rabadon's Deathcap`,
		type: `completed`,
		description: `Grant 75 bonus Ability Power (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/rabadons_deathcap`,
		from: [3, 3],
		unique: false,
	},
	{
		id: 34,
		name: `Archangel's Staff`,
		type: `completed`,
		description: `Grant 30 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_archangelsstaff.tft_set5`,
		from: [3, 4],
		unique: false,
	},
	{
		id: 35,
		name: `Locket of the Iron Solari`,
		type: `completed`,
		description: `Combat start: Shield the holder and allies within 2 hexes in the same row for 300/350/400 damage for 15 seconds. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/locket_of_the_iron_solari`,
		from: [3, 5],
		unique: false,
	},
	{
		id: 36,
		name: `Ionic Spark`,
		type: `completed`,
		description: `Enemies within 2 hexes have their Magic Resist reduced by 50%. When they cast an Ability, they are zapped for magic damage equal to 200% of their maximum Mana. [Aura item] [Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/ionic_spark`,
		from: [3, 6],
		unique: false,
	},
	{
		id: 37,
		name: `Morellonomicon`,
		type: `completed`,
		description: `Grant 20 bonus Ability Power (including components). Magic or true damage from an Ability burns the target, dealing 10% of the target's maximum HP as true damage over 10 seconds, and reducing healing by 50% for the duration. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/morellonomicon`,
		from: [3, 7],
		unique: true,
	},
	{
		id: 39,
		name: `Jeweled Gauntlet`,
		type: `completed`,
		description: `Grant 30% Critical Strike Damage and 20 bonus Ability Power (including components). Magic and true damage from an Ability can critically strike.`,
		icon: `assets/maps/particles/tft/item_icons/standard/jeweled_guantlet`,
		from: [3, 9],
		unique: false,
	},
	{
		id: 44,
		name: `Blue Buff`,
		type: `completed`,
		description: `Grant 40 starting Mana (including components). Gain 20 Mana after casting an Ability. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/blue_buff`,
		from: [4, 4],
		unique: true,
	},
	{
		id: 45,
		name: `Frozen Heart`,
		type: `completed`,
		description: `Reduces the Attack Speed of enemies within 2 hexes by 30%. ​​[Aura item] [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/frozen_heart`,
		from: [4, 5],
		unique: true,
	},
	{
		id: 46,
		name: `Chalice of Power`,
		type: `completed`,
		description: `Combat start: Grant 30 Ability Power to the holder and allies within 1 hex in the same row. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/chalice_of_power`,
		from: [6, 4],
		unique: false,
	},
	{
		id: 47,
		name: `Redemption`,
		type: `completed`,
		description: `Heal allies within 1 hex for 12% of their missing HP every 5 seconds. They also take 25% less multi-target damage for 5 seconds (damage reduction does not stack). [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/redemption`,
		from: [4, 7],
		unique: false,
	},
	{
		id: 49,
		name: `Hand Of Justice`,
		type: `completed`,
		description: `Grant 2 effects: +15 Attack Damage and +15 Ability Power. 15% Omnivamp. Each round, randomly double 1 of these effects.`,
		icon: `assets/maps/particles/tft/item_icons/standard/hand_of_justice`,
		from: [4, 9],
		unique: false,
	},
	{
		id: 55,
		name: `Bramble Vest`,
		type: `completed`,
		description: `Grant 60 bonus Armor (including components). Negates 75% bonus damage from incoming critical strikes. When struck by an attack, deal 75/100/150 magic damage to all nearby enemies (once every 2.5 seconds). [Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/bramble_vest`,
		from: [5, 5],
		unique: false,
	},
	{
		id: 56,
		name: `Gargoyle Stoneplate`,
		type: `completed`,
		description: `Grant 18 Armor and 18 Magic Resist for each enemy targeting the holder.`,
		icon: `assets/maps/particles/tft/item_icons/standard/gargoyle_stoneplate`,
		from: [5, 6],
		unique: false,
	},
	{
		id: 57,
		name: `Sunfire Cape`,
		type: `completed`,
		description: `Grant 400 bonus HP (including components). Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum HP as true damage over 10 seconds, and reducing healing by 50% for the duration. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/sunfire_cape`,
		from: [5, 7],
		unique: true,
	},
	{
		id: 59,
		name: `Shroud of Stillness`,
		type: `completed`,
		description: `Combat start: Shoot a beam that increases the maxiumum Mana of affected enemies by 35% until they cast. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/shroud_of_stillness`,
		from: [5, 9],
		unique: true,
	},
	{
		id: 66,
		name: `Dragon's Claw`,
		type: `completed`,
		description: `Grant 120 bonus Magic Resist (including components). Every {HPRegenInterval} seconds, regenerate 1.5% maximum HP for each enemy targeting the holder. If the holder is a Dragon, increase all bonuses and effects by {DragonValue}%.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/dragons_claw`,
		from: [6, 6],
		unique: false,
	},
	{
		id: 67,
		name: `Zephyr`,
		type: `completed`,
		description: `Combat start: Summon a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds. [Ignores crowd control immunity.] [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/zephyr`,
		from: [6, 7],
		unique: true,
	},
	{
		id: 69,
		name: `Quicksilver`,
		type: `completed`,
		description: `Grant 20% bonus Attack Speed. Combat start: Grant immunity to crowd control for 15 seconds. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/quicksilver`,
		from: [9, 6],
		unique: true,
	},
	{
		id: 77,
		name: `Warmog's Armor`,
		type: `completed`,
		description: `Grant 1000 bonus HP (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/warmogs_armor`,
		from: [7, 7],
		unique: false,
	},
	{
		id: 79,
		name: `Banshee's Claw`,
		type: `completed`,
		description: `Combat start: Grant a shield to the holder and allies within 1 hex in the same row that blocks the first enemy Ability, up to 600 damage. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/trap_claw`,
		from: [7, 9],
		unique: false,
	},
	{
		id: 88,
		name: `Tactician's Crown`,
		type: `completed`,
		description: `Your team gains +1 maximum team size.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/tacticians_crown`,
		from: [8, 8],
		unique: false,
	},
	{
		id: 94,
		name: `Edge of Night`,
		type: `completed`,
		description: `Once per combat: At 60% HP, briefly become stealthed, becoming untargetable and shedding negative effects. Then, grant 40% bonus Attack Speed. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/edge_of_night`,
		from: [1, 5],
		unique: true,
	},
	{
		id: 99,
		name: `Thief's Gloves`,
		type: `completed`,
		description: `Each round: Equip 2 random items. [Consumes 3 item slots.]`,
		icon: `assets/maps/particles/tft/item_icons/standard/thieves_gloves`,
		from: [9, 9],
		unique: false,
	},
]