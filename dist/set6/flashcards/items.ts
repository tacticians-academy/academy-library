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
		description: `+10 Attack Speed`,
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
		description: `During combat, the holder gains 25 Ability Power every 5 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_archangelsstaff.tft_set5`,
		from: [3, 4],
		unique: false,
	},
	{
		id: `TFT_Item_PowerGauntlet`,
		name: `Banshee's Claw`,
		type: `completed`,
		description: `When combat begins, the holder and all allies within 1 hex(es) in the same row gain a shield that blocks the damage and effects of the first enemy Ability, up to 600 damage.`,
		icon: `assets/maps/particles/tft/item_icons/standard/trap_claw`,
		from: [7, 9],
		unique: false,
	},
	{
		id: `TFT_Item_Bloodthirster`,
		name: `Bloodthirster`,
		type: `completed`,
		description: `Physical damage heals the holder for 33% of the damage dealt. Upon falling below 40% HP, the holder gains a 30% maximum HP shield that lasts up to 5 seconds.`,
		icon: `assets/maps/particles/tft/item_icons/standard/bloodthirster`,
		from: [1, 6],
		unique: false,
	},
	{
		id: `TFT_Item_BrambleVest`,
		name: `Bramble Vest`,
		type: `completed`,
		description: `Grants 70 bonus Armor (including components). Negates bonus damage from incoming critical strikes. On being hit by an attack, deal 60/80/120 magic damage to all nearby enemies (once every 2.5 seconds).`,
		icon: `assets/maps/particles/tft/item_icons/standard/bramble_vest`,
		from: [5, 5],
		unique: false,
	},
	{
		id: `TFT_Item_Chalice`,
		name: `Chalice of Power`,
		type: `completed`,
		description: `When combat begins, the holder and all allies within 1 hex in the same row gain 30 Ability Power for the rest of combat.`,
		icon: `assets/maps/particles/tft/item_icons/standard/chalice_of_power`,
		from: [6, 4],
		unique: false,
	},
	{
		id: `TFT_Item_Deathblade`,
		name: `Deathblade`,
		type: `completed`,
		description: `The holder gains 50/75/100 bonus Attack Damage (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/death_blade`,
		from: [1, 1],
		unique: false,
	},
	{
		id: `TFT_Item_DragonsClaw`,
		name: `Dragon's Claw`,
		type: `completed`,
		description: `Grants 200 bonus Magic Resist (including components). On being hit by magic or true damage from a casted Ability, launch a fireball at the Ability's caster that deals magic damage equal to 18% of their maximum HP (0.5 second cooldown).`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/dragons_claw`,
		from: [6, 6],
		unique: false,
	},
	{
		id: `TFT_Item_FrozenHeart`,
		name: `Frozen Heart`,
		type: `completed`,
		description: `Reduces the Attack Speed of enemies within 2 hexes by 35%. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/frozen_heart`,
		from: [4, 5],
		unique: true,
	},
	{
		id: `TFT_Item_GargoyleStoneplate`,
		name: `Gargoyle Stoneplate`,
		type: `completed`,
		description: `The holder gains 18 Armor and 18 Magic Resist for each enemy targeting them.`,
		icon: `assets/maps/particles/tft/item_icons/standard/gargoyle_stoneplate`,
		from: [5, 6],
		unique: false,
	},
	{
		id: `TFT_Item_MadredsBloodrazor`,
		name: `Giant Slayer`,
		type: `completed`,
		description: `The holder's Abilities and attacks do 20% bonus damage. If the target has more than 1800 maximum HP, the bonus increases to 60%.`,
		icon: `assets/maps/particles/tft/item_icons/standard/giant_slayer`,
		from: [1, 2],
		unique: false,
	},
	{
		id: `TFT_Item_GuardianAngel`,
		name: `Guardian Angel`,
		type: `completed`,
		description: `Prevents the holder's first death, placing them in stasis instead. After 2 seconds, they return with 250 HP and shed all negative effects. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/guardian_angel`,
		from: [1, 5],
		unique: true,
	},
	{
		id: `TFT_Item_GuinsoosRageblade`,
		name: `Guinsoo's Rageblade`,
		type: `completed`,
		description: `Attacks grant +6% bonus Attack Speed for the rest of combat. This effect can stack any number of times.`,
		icon: `assets/maps/particles/tft/item_icons/standard/guinsoos_rageblade`,
		from: [2, 3],
		unique: false,
	},
	{
		id: `TFT_Item_UnstableConcoction`,
		name: `Hand Of Justice`,
		type: `completed`,
		description: `The holder gains both of the following: +10 Attack Damage and +10 Ability Power. Attacks and Abilities heal for 10% of damage dealt. At the beginning of each planning phase, one of these buffs is increased to 33(%).`,
		icon: `assets/maps/particles/tft/item_icons/standard/hand_of_justice`,
		from: [4, 9],
		unique: false,
	},
	{
		id: `TFT_Item_HextechGunblade`,
		name: `Hextech Gunblade`,
		type: `completed`,
		description: `The holder's magic and true damage from Abilities heal them for 33% of the damage dealt. The holder also heals their lowest HP ally for the same amount.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/hextech_gunblade`,
		from: [1, 3],
		unique: false,
	},
	{
		id: `TFT_Item_InfinityEdge`,
		name: `Infinity Edge`,
		type: `completed`,
		description: `Grants 75% Critical Strike Chance (including components) and 10% Critical Strike Damage. Each point of Critical Strike Chance above 100% becomes +1% Critical Strike Damage. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/infinity_edge`,
		from: [1, 9],
		unique: true,
	},
	{
		id: `TFT_Item_IonicSpark`,
		name: `Ionic Spark`,
		type: `completed`,
		description: `Enemies within 2 hexes have their Magic Resist reduced by 50%. When they cast an Ability, they are zapped taking magic damage equal to 200% of their maximum Mana.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/ionic_spark`,
		from: [3, 6],
		unique: false,
	},
	{
		id: `TFT_Item_JeweledGauntlet`,
		name: `Jeweled Gauntlet`,
		type: `completed`,
		description: `The holder's magic and true damage from their Ability can critically strike. The holder gains 30% bonus Critical Strike Damage and 10 bonus Ability Power.`,
		icon: `assets/maps/particles/tft/item_icons/standard/jeweled_guantlet`,
		from: [3, 9],
		unique: false,
	},
	{
		id: `TFT_Item_LastWhisper`,
		name: `Last Whisper`,
		type: `completed`,
		description: `When the holder inflicts a critical hit, the target's Armor is reduced by 70% for 5 seconds. This effect does not stack. [Unique - only one per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/last_whisper`,
		from: [2, 9],
		unique: true,
	},
	{
		id: `TFT_Item_LocketOfTheIronSolari`,
		name: `Locket of the Iron Solari`,
		type: `completed`,
		description: `When combat begins, the holder and all allies within 2 hexes in the same row gain a shield that blocks 300/350/400 damage for 15 seconds.`,
		icon: `assets/maps/particles/tft/item_icons/standard/locket_of_the_iron_solari`,
		from: [3, 5],
		unique: false,
	},
	{
		id: `TFT_Item_Morellonomicon`,
		name: `Morellonomicon`,
		type: `completed`,
		description: `When the holder deals magic or true damage with their Ability, they burn the target, dealing 20% of the target's maximum HP as true damage over 10 seconds, and reducing healing by 50% for the duration of the burn. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/morellonomicon`,
		from: [3, 7],
		unique: true,
	},
	{
		id: `TFT_Item_Quicksilver`,
		name: `Quicksilver`,
		type: `completed`,
		description: `The holder gains 20% bonus Attack Speed. The holder is immune to crowd control in combat for 15 seconds. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/quicksilver`,
		from: [9, 6],
		unique: true,
	},
	{
		id: `TFT_Item_RabadonsDeathcap`,
		name: `Rabadon's Deathcap`,
		type: `completed`,
		description: `Grants 75 bonus Ability Power (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/rabadons_deathcap`,
		from: [3, 3],
		unique: false,
	},
	{
		id: `TFT_Item_RapidFireCannon`,
		name: `Rapid Firecannon`,
		type: `completed`,
		description: `Increases the holder's Attack Range by 1 hex and grants 60% bonus Attack Speed (including components). The holder's attacks can no longer miss.`,
		icon: `assets/maps/particles/tft/item_icons/standard/rapid_fire_cannon`,
		from: [2, 2],
		unique: false,
	},
	{
		id: `TFT_Item_Redemption`,
		name: `Redemption`,
		type: `completed`,
		description: `Every 5 seconds, the holder radiates an aura to allies within 1 hex, healing them for 18% of their missing HP. Affected allies take 25% reduced damage from multi-target abilities and attacks for 5 seconds.`,
		icon: `assets/maps/particles/tft/item_icons/standard/redemption`,
		from: [4, 7],
		unique: false,
	},
	{
		id: `TFT_Item_RunaansHurricane`,
		name: `Runaan's Hurricane`,
		type: `completed`,
		description: `The holder gains 10 Attack Damage. The holder's attacks fire a bolt at another nearby enemy, dealing 75% of the holder's Attack Damage as physical damage.`,
		icon: `assets/maps/particles/tft/item_icons/standard/runaans_hurricane`,
		from: [6, 2],
		unique: false,
	},
	{
		id: `TFT_Item_Shroud`,
		name: `Shroud of Stillness`,
		type: `completed`,
		description: `When combat begins, the holder shoots a beam straight ahead that delays affected enemies' first cast, increasing their max Mana by 35% until they cast. [Unique - only one per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/shroud_of_stillness`,
		from: [5, 9],
		unique: true,
	},
	{
		id: `TFT_Item_SpearOfShojin`,
		name: `Spear of Shojin`,
		type: `completed`,
		description: `The holder's attacks restore 8 additional Mana.`,
		icon: `assets/maps/particles/tft/item_icons/standard/spear_of_shojin`,
		from: [1, 4],
		unique: false,
	},
	{
		id: `TFT_Item_StatikkShiv`,
		name: `Statikk Shiv`,
		type: `completed`,
		description: `The holder gains 10% bonus Attack Speed. Every 3rd attack from the holder unleashes a chain lightning that bounces to 4 enemies, dealing 70 magic damage and reducing their Magic Resist by 50% for 5 seconds.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/statikk_shiv`,
		from: [2, 4],
		unique: false,
	},
	{
		id: `TFT_Item_RedBuff`,
		name: `Sunfire Cape`,
		type: `completed`,
		description: `Every 2 seconds, a random enemy within 2 hexes is burned for 16% of their maximum HP as true damage over 8 seconds. Any healing they receive is reduced by 50%. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/sunfire_cape`,
		from: [5, 7],
		unique: true,
	},
	{
		id: `TFT_Item_ThiefsGloves`,
		name: `Thief's Gloves`,
		type: `completed`,
		description: `At the beginning of each planning phase, the holder equips 2 temporary items. Temporary items increase in power based on your player level. [Consumes 3 item slots.]`,
		icon: `assets/maps/particles/tft/item_icons/standard/thieves_gloves`,
		from: [9, 9],
		unique: false,
	},
	{
		id: `TFT_Item_TitansResolve`,
		name: `Titan's Resolve`,
		type: `completed`,
		description: `When the holder attacks or takes damage, they gain 2 Attack Damage and Ability Power. This stacks up to 25 times, at which point the holder gains 25 Armor and Magic Resist.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/titans_resolve`,
		from: [5, 2],
		unique: false,
	},
	{
		id: `TFT_Item_WarmogsArmor`,
		name: `Warmog's Armor`,
		type: `completed`,
		description: `Grants 1000 bonus HP (including components).`,
		icon: `assets/maps/particles/tft/item_icons/standard/warmogs_armor`,
		from: [7, 7],
		unique: false,
	},
	{
		id: `TFT_Item_ZekesHerald`,
		name: `Zeke's Herald`,
		type: `completed`,
		description: `When combat begins, the holder and all allies within 1 hexes in the same row gain 30% Attack Speed for the rest of combat.`,
		icon: `assets/maps/particles/tft/item_icons/standard_new/zekes_herald`,
		from: [1, 7],
		unique: false,
	},
	{
		id: `TFT_Item_Zephyr`,
		name: `Zephyr`,
		type: `completed`,
		description: `When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds. Ignores crowd control immunity. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/standard/zephyr`,
		from: [6, 7],
		unique: true,
	},
	{
		id: `TFT_Item_ZhonyasHourglass`,
		name: `Zhonya's Hourglass`,
		type: `completed`,
		description: `On falling below 30% HP, become untargetable, invulnerable, but unable to move for 4 seconds.`,
		icon: `assets/maps/particles/tft/tft_item_zhonyashourglass`,
		from: [],
		unique: false,
	},
	{
		id: `TFT6_Item_AcademyEmblemItem`,
		name: `Academy Emblem`,
		type: `spatula`,
		description: `The holder gains the Academy trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/academy.tft_set6`,
		from: [8, 4],
		unique: true,
	},
	{
		id: `TFT6_Item_ArcanistEmblemItem`,
		name: `Arcanist Emblem`,
		type: `spatula`,
		description: `The holder gains the Arcanist trait. [Unique - only 1 per champion`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/arcanist.tft_set6`,
		from: [3, 8],
		unique: true,
	},
	{
		id: `TFT6_Item_AssassinEmblemItem`,
		name: `Assassin Emblem`,
		type: `spatula`,
		description: `The holder gains the Assassin trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/assassin.tft_set6`,
		from: [9, 8],
		unique: true,
	},
	{
		id: `TFT6_Item_BodyguardEmblemItem`,
		name: `Bodyguard Emblem`,
		type: `spatula`,
		description: `The holder gains the Bodyguard trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/bodyguard.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_BruiserEmblemItem`,
		name: `Bruiser Emblem`,
		type: `spatula`,
		description: `The holder gains the Bruiser trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/bruiser.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_ChallengerEmblemItem`,
		name: `Challenger Emblem`,
		type: `spatula`,
		description: `The holder gains the Challenger trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/challenger.tft_set6`,
		from: [2, 8],
		unique: true,
	},
	{
		id: `TFT6_Item_ChemtechEmblemItem`,
		name: `Chemtech Emblem`,
		type: `spatula`,
		description: `The holder gains the Chemtech trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/chemtech.tft_set6`,
		from: [7, 8],
		unique: true,
	},
	{
		id: `TFT6_Item_ClockworkEmblemItem`,
		name: `Clockwork Emblem`,
		type: `spatula`,
		description: `The holder gains the Clockwork trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/clockwork.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_EnforcerEmblemItem`,
		name: `Enforcer Emblem`,
		type: `spatula`,
		description: `The holder gains the Enforcer trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/enforcer.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_ImperialEmblemItem`,
		name: `Imperial Emblem`,
		type: `spatula`,
		description: `The holder gains the Imperial trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/imperial.tft_set6`,
		from: [8, 1],
		unique: true,
	},
	{
		id: `TFT6_Item_InnovatorEmblemItem`,
		name: `Innovator Emblem`,
		type: `spatula`,
		description: `The holder gains the Innovator trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/innovator.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_MercenaryEmblemItem`,
		name: `Mercenary Emblem`,
		type: `spatula`,
		description: `The holder gains the Mercenary trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/mercenary.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_MutantEmblemItem`,
		name: `Mutant Emblem`,
		type: `spatula`,
		description: `The holder gains the Mutant trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/mutant.tft_set6`,
		from: [6, 8],
		unique: true,
	},
	{
		id: `TFT6_Item_ProtectorEmblemItem`,
		name: `Protector Emblem`,
		type: `spatula`,
		description: `The holder gains the Protector trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/protector.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_ScholarEmblemItem`,
		name: `Scholar Emblem`,
		type: `spatula`,
		description: `The holder gains the Scholar trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/scholar.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_ScrapEmblemItem`,
		name: `Scrap Emblem`,
		type: `spatula`,
		description: `The holder gains the Scrap trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/scrap.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_SniperEmblemItem`,
		name: `Sniper Emblem`,
		type: `spatula`,
		description: `The holder gains the Sniper trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/sniper.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_SocialiteEmblemItem`,
		name: `Socialite Emblem`,
		type: `spatula`,
		description: `The holder gains the Socialite trait. [Unique - only 1 per champion Elusive - cannot be crafted.]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/socialite.tft_set6`,
		from: [],
		unique: true,
	},
	{
		id: `TFT6_Item_SyndicateEmblemItem`,
		name: `Syndicate Emblem`,
		type: `spatula`,
		description: `The holder gains the Syndicate trait. [Unique - only 1 per champion]`,
		icon: `assets/maps/particles/tft/item_icons/spatula/set6/syndicate.tft_set6`,
		from: [5, 8],
		unique: true,
	},
]