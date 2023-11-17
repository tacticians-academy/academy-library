import type { ItemFlashcard } from '../../index'

export const itemFlashcards: ItemFlashcard[] = [
	{
		id: `TFT_Item_BFSword`,
		name: `B.F. Sword`,
		type: `component`,
		description: `+10 Attack Damage`,
		icon: `assets/maps/particles/tft/item_icons/standard/bf_sword`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_ChainVest`,
		name: `Chain Vest`,
		type: `component`,
		description: `+20 Armor`,
		icon: `assets/maps/particles/tft/item_icons/standard/chain_vest`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_GiantsBelt`,
		name: `Giant's Belt`,
		type: `component`,
		description: `+150 HP`,
		icon: `assets/maps/particles/tft/item_icons/standard/gaints_belt`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_NeedlesslyLargeRod`,
		name: `Needlessly Large Rod`,
		type: `component`,
		description: `+10 Ability Power`,
		icon: `assets/maps/particles/tft/item_icons/standard/needlessly_large_rod`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_NegatronCloak`,
		name: `Negatron Cloak`,
		type: `component`,
		description: `+20 Magic Resist`,
		icon: `assets/maps/particles/tft/item_icons/standard/negatron_cloak`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_RecurveBow`,
		name: `Recurve Bow`,
		type: `component`,
		description: `+10% Attack Speed`,
		icon: `assets/maps/particles/tft/item_icons/standard/recurve_bow`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_SparringGloves`,
		name: `Sparring Gloves`,
		type: `component`,
		description: `+5 Critical Strike Chance +10 Dodge Chance`,
		icon: `assets/maps/particles/tft/item_icons/standard/sparring_gloves`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_Spatula`,
		name: `Spatula`,
		type: `component`,
		description: `It must do something ...`,
		icon: `assets/maps/particles/tft/item_icons/standard/spatula`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_TearOfTheGoddess`,
		name: `Tear of the Goddess`,
		type: `component`,
		description: `+15 Mana`,
		icon: `assets/maps/particles/tft/item_icons/standard/tear_of_the_goddess`,
		from: [],
		unique: false,
	},
	{
		id: `TFT_Item_ArchangelsStaff`,
		name: `Archangel's Staff`,
		type: `completed`,
		description: `Grant 30 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_archangelsstaff`,
		from: [3, 4],
		unique: false,
	},
	{
		id: `TFT_Item_PowerGauntlet`,
		name: `Banshee's Claw`,
		type: `completed`,
		description: `Combat start: Grant a shield to the holder and allies within 1 hex in the same row that blocks the first enemy Ability, up to 600 damage. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/trap_claw`,
		from: [7, 9],
		unique: false,
	},
	{
		id: `TFT_Item_Bloodthirster`,
		name: `Bloodthirster`,
		type: `completed`,
		description: `Grant 25% Omnivamp. Once per combat: At 40% HP, gain a 25% maximum HP shield that lasts up to 5 seconds.`,
		icon: `assets/maps/particles/tft/item_icons/standard/bloodthirster`,
		from: [1, 6],
		unique: false,
	},
	{
		id: `TFT_Item_BrambleVest`,
		name: `Bramble Vest`,
		type: `completed`,
		description: `Grant 80 bonus Armor (including components). Negates 75% bonus damage from incoming critical strikes. When struck by an attack, deal 75/100/150 magic damage to all nearby enemies (once every 2.5 seconds). [Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/bramble_vest`,
		from: [5, 5],
		unique: false,
	},
	{
		id: `TFT_Item_Chalice`,
		name: `Chalice of Power`,
		type: `completed`,
		description: `Combat start: Grant 30 Ability Power to the holder and allies within 1 hex in the same row. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/chalice_of_power`,
		from: [6, 4],
		unique: false,
	},
	{
		id: `TFT_Item_Deathblade`,
		name: `Deathblade`,
		type: `completed`,
		description: `Grant 35/50/65 bonus Attack Damage (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/death_blade`,
		from: [1, 1],
		unique: false,
	},
	{
		id: `TFT_Item_DragonsClaw`,
		name: `Dragon's Claw`,
		type: `completed`,
		description: `Grant 120 bonus Magic Resist (including components). Every {HPRegenInterval} seconds, regenerate 1.2000000476837158% maximum HP for each enemy targeting the holder. If the holder is a Dragon, increase all bonuses and effects by {DragonValue}%.`,
		icon: `assets/maps/particles/tft/item_icons/standard/dragons_claw`,
		from: [6, 6],
		unique: false,
	},
	{
		id: `TFT_Item_GuardianAngel`,
		name: `Edge of Night`,
		type: `completed`,
		description: `Once per combat: At 60% HP, briefly become stealthed, becoming untargetable and shedding negative effects. Then, grant 40% bonus Attack Speed. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/edge_of_night`,
		from: [1, 5],
		unique: true,
	},
	{
		id: `TFT_Item_FrozenHeart`,
		name: `Frozen Heart`,
		type: `completed`,
		description: `Reduces the Attack Speed of enemies within 2 hexes by 30%. ​​[Aura item] [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/frozen_heart`,
		from: [4, 5],
		unique: true,
	},
	{
		id: `TFT_Item_GargoyleStoneplate`,
		name: `Gargoyle Stoneplate`,
		type: `completed`,
		description: `Grant 16 Armor and 16 Magic Resist for each enemy targeting the holder.`,
		icon: `assets/maps/particles/tft/item_icons/standard/gargoyle_stoneplate`,
		from: [5, 6],
		unique: false,
	},
	{
		id: `TFT_Item_MadredsBloodrazor`,
		name: `Giant Slayer`,
		type: `completed`,
		description: `Abilities and attacks deal 20% bonus damage. If the target has more than 2200 maximum HP, the bonus increases to 45%.`,
		icon: `assets/maps/particles/tft/item_icons/standard/giant_slayer`,
		from: [1, 2],
		unique: false,
	},
	{
		id: `TFT_Item_GuinsoosRageblade`,
		name: `Guinsoo's Rageblade`,
		type: `completed`,
		description: `Attacks grant 6% bonus Attack Speed. This effect stacks.`,
		icon: `assets/maps/particles/tft/item_icons/standard/guinsoos_rageblade`,
		from: [2, 3],
		unique: false,
	},
	{
		id: `TFT_Item_UnstableConcoction`,
		name: `Hand Of Justice`,
		type: `completed`,
		description: `Grant 2 effects: +15 Attack Damage and +15 Ability Power. 15% Omnivamp. Each round, randomly double 1 of these effects.`,
		icon: `assets/maps/particles/tft/item_icons/standard/hand_of_justice`,
		from: [4, 9],
		unique: false,
	},
	{
		id: `TFT_Item_HextechGunblade`,
		name: `Hextech Gunblade`,
		type: `completed`,
		description: `Grant 25% Omnivamp. Damage heals the lowest percent HP ally for the same amount.`,
		icon: `assets/maps/particles/tft/item_icons/standard/hextech_gunblade`,
		from: [1, 3],
		unique: false,
	},
	{
		id: `TFT_Item_InfinityEdge`,
		name: `Infinity Edge`,
		type: `completed`,
		description: `Grant 75% Critical Strike Chance (including components) and 10% Critical Strike Damage. Each point of Critical Strike Chance above 100% converts to 1% Critical Strike Damage. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/infinity_edge`,
		from: [1, 9],
		unique: true,
	},
	{
		id: `TFT_Item_IonicSpark`,
		name: `Ionic Spark`,
		type: `completed`,
		description: `Enemies within 2 hexes have their Magic Resist reduced by 50%. When they cast an Ability, they are zapped for magic damage equal to 185% of their maximum Mana. [Aura item] [Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/ionic_spark`,
		from: [3, 6],
		unique: false,
	},
	{
		id: `TFT_Item_JeweledGauntlet`,
		name: `Jeweled Gauntlet`,
		type: `completed`,
		description: `Grant 10% Critical Strike Damage and 40 bonus Ability Power (including components). Magic and true damage from an Ability can critically strike.`,
		icon: `assets/maps/particles/tft/item_icons/standard/jeweled_guantlet`,
		from: [3, 9],
		unique: false,
	},
	{
		id: `TFT_Item_LastWhisper`,
		name: `Last Whisper`,
		type: `completed`,
		description: `Dealing physical damage reduces the target's Armor by 50% for 5 seconds. This effect does not stack. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/last_whisper`,
		from: [2, 9],
		unique: true,
	},
	{
		id: `TFT_Item_LocketOfTheIronSolari`,
		name: `Locket of the Iron Solari`,
		type: `completed`,
		description: `Combat start: Shield the holder and allies within 2 hexes in the same row for 300/350/400 damage for 15 seconds. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/locket_of_the_iron_solari`,
		from: [3, 5],
		unique: false,
	},
	{
		id: `TFT_Item_Morellonomicon`,
		name: `Morellonomicon`,
		type: `completed`,
		description: `Grant 40 bonus Ability Power (including components). Magic or true damage from an Ability burns the target, dealing 10% of the target's maximum HP as true damage over 10 seconds, and reducing healing by 50% for the duration. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/morellonomicon`,
		from: [3, 7],
		unique: true,
	},
	{
		id: `TFT_Item_Quicksilver`,
		name: `Quicksilver`,
		type: `completed`,
		description: `Grant 20% bonus Attack Speed. Combat start: Grant immunity to crowd control for 15 seconds. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/quicksilver`,
		from: [9, 6],
		unique: true,
	},
	{
		id: `TFT_Item_RabadonsDeathcap`,
		name: `Rabadon's Deathcap`,
		type: `completed`,
		description: `Grant 75 bonus Ability Power (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/rabadons_deathcap`,
		from: [3, 3],
		unique: false,
	},
	{
		id: `TFT_Item_RapidFireCannon`,
		name: `Rapid Firecannon`,
		type: `completed`,
		description: `Grant 50% bonus Attack Speed (including components) and 1 Attack Range. Attacks cannot miss.`,
		icon: `assets/maps/particles/tft/item_icons/standard/rapid_fire_cannon`,
		from: [2, 2],
		unique: false,
	},
	{
		id: `TFT_Item_Redemption`,
		name: `Redemption`,
		type: `completed`,
		description: `Heal allies within 1 hex for 12% of their missing HP every 5 seconds. They also take 25% less multi-target damage for 5 seconds (damage reduction does not stack). [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/redemption`,
		from: [4, 7],
		unique: false,
	},
	{
		id: `TFT_Item_RunaansHurricane`,
		name: `Runaan's Hurricane`,
		type: `completed`,
		description: `Grant 10 Attack Damage. Attacks fire a bolt at a nearby enemy, dealing 70% Attack Damage as physical damage. ​​[Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/runaans_hurricane`,
		from: [6, 2],
		unique: false,
	},
	{
		id: `TFT_Item_Shroud`,
		name: `Shroud of Stillness`,
		type: `completed`,
		description: `Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/shroud_of_stillness`,
		from: [5, 9],
		unique: true,
	},
	{
		id: `TFT_Item_SpearOfShojin`,
		name: `Spear of Shojin`,
		type: `completed`,
		description: `Attacks restore 8 additional Mana.`,
		icon: `assets/maps/particles/tft/item_icons/standard/spear_of_shojin`,
		from: [1, 4],
		unique: false,
	},
	{
		id: `TFT_Item_StatikkShiv`,
		name: `Statikk Shiv`,
		type: `completed`,
		description: `Grant 10% bonus Attack Speed (including components). Every 3rd attack unleashes chain lightning that bounces to 4 enemies, dealing 50 magic damage and reducing their Magic Resist by 50% for 5 seconds. [Direct damage item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/statikk_shiv`,
		from: [2, 4],
		unique: false,
	},
	{
		id: `TFT_Item_RedBuff`,
		name: `Sunfire Cape`,
		type: `completed`,
		description: `Grant 250 bonus HP (including components). Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum HP as true damage over 10 seconds, and reducing healing by 50% for the duration. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/sunfire_cape`,
		from: [5, 7],
		unique: true,
	},
	{
		id: `TFT_Item_ThiefsGloves`,
		name: `Thief's Gloves`,
		type: `completed`,
		description: `Each round: Equip 2 random items. [Consumes 3 item slots.]`,
		icon: `assets/maps/particles/tft/item_icons/standard/thieves_gloves`,
		from: [9, 9],
		unique: false,
	},
	{
		id: `TFT_Item_TitansResolve`,
		name: `Titan's Resolve`,
		type: `completed`,
		description: `Grant 2 Attack Damage and 2 Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, grant 25 Armor and 25 Magic Resist.`,
		icon: `assets/maps/particles/tft/item_icons/standard/titans_resolve`,
		from: [5, 2],
		unique: false,
	},
	{
		id: `TFT_Item_WarmogsArmor`,
		name: `Warmog's Armor`,
		type: `completed`,
		description: `Grant 1000 bonus HP (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/warmogs_armor`,
		from: [7, 7],
		unique: false,
	},
	{
		id: `TFT_Item_ZekesHerald`,
		name: `Zeke's Herald`,
		type: `completed`,
		description: `Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row. ​​ [Aura item]`,
		icon: `assets/maps/particles/tft/item_icons/standard/zekes_herald`,
		from: [1, 7],
		unique: false,
	},
	{
		id: `TFT_Item_Zephyr`,
		name: `Zephyr`,
		type: `completed`,
		description: `Combat start: Summon a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds. [Ignores crowd control immunity.] [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/zephyr`,
		from: [6, 7],
		unique: true,
	},
	{
		id: `TFT7_Item_AssassinEmblemItem`,
		name: `Assassin Emblem`,
		type: `spatula`,
		description: `The holder gains the Assassin trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/assassin.tft_set7`,
		from: [9, 8],
		unique: true,
	},
	{
		id: `TFT7_Item_AstralEmblemItem`,
		name: `Astral Emblem`,
		type: `spatula`,
		description: `The holder gains the Astral trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/astral.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_BruiserEmblemItem`,
		name: `Bruiser Emblem`,
		type: `spatula`,
		description: `The holder gains the Bruiser trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/bruiser.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_CannoneerEmblemItem`,
		name: `Cannoneer Emblem`,
		type: `spatula`,
		description: `The holder gains the Cannoneer trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/canonneer.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_CavalierEmblemItem`,
		name: `Cavalier Emblem`,
		type: `spatula`,
		description: `The holder gains the Cavalier trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/cavalier.tft_set7`,
		from: [8, 5],
		unique: true,
	},
	{
		id: `TFT7_Item_DragonmancerEmblemItem`,
		name: `Dragonmancer Emblem`,
		type: `spatula`,
		description: `The holder gains the Dragonmancer trait.`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/dragonmancer.tft_set7`,
		from: [8, 3],
		unique: true,
	},
	{
		id: `TFT7_Item_EvokerEmblemItem`,
		name: `Evoker Emblem`,
		type: `spatula`,
		description: `The holder gains the Evoker trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/evoker.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_GuardianEmblemItem`,
		name: `Guardian Emblem`,
		type: `spatula`,
		description: `The holder gains the Guardian trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/guardian.tft_set7`,
		from: [8, 7],
		unique: true,
	},
	{
		id: `TFT7_Item_GuildEmblemItem`,
		name: `Guild Emblem`,
		type: `spatula`,
		description: `The holder gains the Guild trait. Guild Bonus: 3% Omnivamp [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/guild.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_JadeEmblemItem`,
		name: `Jade Emblem`,
		type: `spatula`,
		description: `The holder gains the Jade trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/jade.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_LegendEmblemItem`,
		name: `Legend Emblem`,
		type: `spatula`,
		description: `The holder gains the Legend trait.`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/legend.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_MageEmblemItem`,
		name: `Mage Emblem`,
		type: `spatula`,
		description: `The holder gains the Mage trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/mage.tft_set7`,
		from: [8, 4],
		unique: true,
	},
	{
		id: `TFT7_Item_MirageEmblemItem`,
		name: `Mirage Emblem`,
		type: `spatula`,
		description: `The holder gains the Mirage trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/mirage.tft_set7`,
		from: [6, 8],
		unique: true,
	},
	{
		id: `TFT7_Item_MysticEmblemItem`,
		name: `Mystic Emblem`,
		type: `spatula`,
		description: `The holder gains the Mystic trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/mystic.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_RagewingEmblemItem`,
		name: `Ragewing Emblem`,
		type: `spatula`,
		description: `The holder gains the Ragewing trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/ragewing.tft_set7`,
		from: [8, 2],
		unique: true,
	},
	{
		id: `TFT7_Item_RevelEmblemItem`,
		name: `Revel Emblem`,
		type: `spatula`,
		description: `The holder gains the Revel trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/revel.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_ScalescornEmblemItem`,
		name: `Scalescorn Emblem`,
		type: `spatula`,
		description: `The holder gains the Scalescorn trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/dragonbane.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_ShimmerscaleEmblemItem`,
		name: `Shimmerscale Emblem`,
		type: `spatula`,
		description: `The holder gains the Shimmerscale trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/shimmerscale.tft_set7`,
		from: [8, 1],
		unique: true,
	},
	{
		id: `TFT7_Item_SwiftshotEmblemItem`,
		name: `Swiftshot Emblem`,
		type: `spatula`,
		description: `The holder gains the Swiftshot trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/swiftshot.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_TempestEmblemItem`,
		name: `Tempest Emblem`,
		type: `spatula`,
		description: `The holder gains the Tempest trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/tempest.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_TrainerEmblemItem`,
		name: `Trainer Emblem`,
		type: `spatula`,
		description: `The holder gains the Trainer trait.`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/trainer.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_WarriorEmblemItem`,
		name: `Warrior Emblem`,
		type: `spatula`,
		description: `The holder gains the Warrior trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/warrior.tft_set7`,
		from: [],
		unique: true,
	},
	{
		id: `TFT7_Item_WhispersEmblemItem`,
		name: `Whispers Emblem`,
		type: `spatula`,
		description: `The holder gains the Whispers trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set7/whispers.tft_set7`,
		from: [],
		unique: true,
	},
]