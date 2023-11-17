import { AugmentGroupKey } from '../index.js'
import type { AugmentData } from '../index'

export const emptyImplementationAugments: AugmentGroupKey[] = []

export const activeAugments: AugmentData[] = [
	{
		tier: 1,
		name: `AFK`,
		groupID: `aFK`,
		desc: `You cannot perform actions for the next @RoundsToSkip@ rounds. Afterwards, gain @Gold@ gold.`,
		effects: {
			'Gold': 15,
			'{90a3817e}': 2,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/AFK-I.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `AFK`,
		groupID: `aFK`,
		desc: `You cannot perform actions for the next @RoundsToSkip@ rounds. Afterwards, gain @Gold@ gold.`,
		effects: {
			'Gold': 20,
			'{90a3817e}': 3,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/AFK-I.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Astral Crest`,
		groupID: `astralCrest`,
		desc: `Gain an Astral Emblem and a Lux.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Astral-Crest-I.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Astral Heart`,
		groupID: `astralHeart`,
		desc: `Your team counts as having 1 additional Astral. Gain a Lux.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Astral-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Astral Soul`,
		groupID: `astralSoul`,
		desc: `Your team counts as having 1 additional Astral. Gain a Redemption and a Varus.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Astral-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Axiom Arc I`,
		groupID: `axiomArc`,
		desc: `Your units gain @ManaGain@ Mana on kill.`,
		effects: {
			'{7e875f0d}': 25,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Axiom-Arc-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Axiom Arc II`,
		groupID: `axiomArc`,
		desc: `Your units gain @ManaGain@ Mana on kill.`,
		effects: {
			'{7e875f0d}': 40,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Axiom-Arc-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Base Camp`,
		groupID: `baseCamp`,
		desc: `Scalescorns gain @DamageAmp@% damage each time they start combat in the same hex, stacking up to @MaxStacks@ times. Gain a Lillia.`,
		effects: {
			'DamageAmp': 8,
			'MaxStacks': 4,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Nomads-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Base Camp`,
		groupID: `baseCamp`,
		desc: `Scalescorns gain @DamageAmp@% damage each time they start combat in the same hex, stacking up to @MaxStacks@ times. Gain a Lillia.`,
		effects: {
			'DamageAmp': 7,
			'MaxStacks': 4,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Nomads-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Beast's Den`,
		groupID: `beastsDen`,
		desc: `Units that start combat next to Shapeshifters gain @AS*100@% Attack Speed and Movement Speed. Shapeshifters always gain this bonus. Gain a Gnar.`,
		effects: {
			'AS': 0.25,
			'MoveSpeed': 400,
			'{53af684f}': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Beasts-Den-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Best Friends I`,
		groupID: `bestFriends`,
		desc: `Units isolated in pairs gain @AS*100@% Attack Speed and @Armor@ Armor at the start of combat.`,
		effects: {
			'AS': 0.10000000149011612,
			'Armor': 15,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Best-Friends-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Best Friends II`,
		groupID: `bestFriends`,
		desc: `Units isolated in pairs gain @AS*100@% Attack Speed and @Armor@ Armor at the start of combat.`,
		effects: {
			'AS': 0.15000000596046448,
			'Armor': 25,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Best-Friends-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Best Friends III`,
		groupID: `bestFriends`,
		desc: `Units isolated in pairs gain @AS*100@% Attack Speed and @Armor@ Armor at the start of combat.`,
		effects: {
			'AS': 0.20000000298023224,
			'Armor': 35,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Best-Friends-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Better Together`,
		groupID: `betterTogether`,
		desc: `Aura items that buff your team have their effects increased by @AuraIncreasePercent*100@%. Gain a Locket of the Iron Solari.`,
		effects: {
			'{6172c4df}': 0.33000001311302185,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Better-Together-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Big Friend I`,
		groupID: `bigFriend`,
		desc: `Your units that start combat next to a unit with over @RequiredHP@ HP take @DamageReductionPercent@% less damage for the rest of combat.`,
		effects: {
			'{5064373e}': 10,
			'{ddd2dfa6}': 1800,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Big-Friend-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Big Friend II`,
		groupID: `bigFriend`,
		desc: `Your units that start combat next to a unit with over @RequiredHP@ HP take @DamageReductionPercent@% less damage for the rest of combat.`,
		effects: {
			'{5064373e}': 18,
			'{ddd2dfa6}': 1800,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Big-Friend-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Cannoneer Crest`,
		groupID: `cannoneerCrest`,
		desc: `Gain a Cannoneer Emblem and an Aphelios.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Canoneer-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Cannoneer Crown`,
		groupID: `cannoneerCrown`,
		desc: `Gain a Cannoneer Emblem, a Giant Slayer, and a Zeri.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Canoneer-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Cannoneer Heart`,
		groupID: `cannoneerHeart`,
		desc: `Your team counts as having 1 additional Cannoneer. Gain an Aphelios.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Canoneer-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Cavalier Crest`,
		groupID: `cavalierCrest`,
		desc: `Gain a Cavalier Emblem and a Sejuani.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cavalier-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Cavalier Crown`,
		groupID: `cavalierCrown`,
		desc: `Gain a Cavalier Emblem, a Redemption, and a Nunu.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cavalier-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Cavalier Heart`,
		groupID: `cavalierHeart`,
		desc: `Your team counts as having 1 additional Cavalier. Gain a Rell.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cavalier-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Cavalier Unity`,
		groupID: `cavalierUnity`,
		desc: `The Cavalier trait grants its bonuses to all of your champions. This does not increase your number of Cavaliers. Gain a Rell.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cavalier-Unity-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Cluttered Mind`,
		groupID: `clutteredMind`,
		desc: `Gain @UnitCount@ Tier 1 Champions. If your bench is full at the end of a round, gain @XP@ experience points.`,
		effects: {
			'{04d7bbbe}': 2,
			'XP': 3,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dizzy-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Combat Training`,
		groupID: `combatTraining`,
		desc: `Your champions permanently gain @AD@ Attack Damage every time they kill an enemy. Champions start with @StartingAD@ bonus Attack Damage.`,
		effects: {
			'AD': 1,
			'{9c6a27a4}': 8,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Combat-Training-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Combat Training II`,
		groupID: `combatTraining`,
		desc: `Your champions permanently gain @AD@ Attack Damage every time they kill an enemy. Champions start with @StartingAD@ bonus Attack Damage.`,
		effects: {
			'AD': 2,
			'{9c6a27a4}': 4,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Combat-Training-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Combat Training III`,
		groupID: `combatTraining`,
		desc: `Your champions permanently gain @AD@ Attack Damage every time they kill an enemy. Champions start with @StartingAD@ bonus Attack Damage.`,
		effects: {
			'AD': 3,
			'{9c6a27a4}': 6,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Combat-Training-III.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Cruel Pact`,
		groupID: `cruelPact`,
		desc: `Buying XP costs @HPCost@ HP instead of gold. Heal @Heal@ HP each round.`,
		effects: {
			'Heal': 3,
			'{6c043596}': 6,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Sacrificial-Pact-III.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Cursed Crown`,
		groupID: `cursedCrown`,
		desc: `Gain +@MaxArmySizeIncrease@ maximum team size, but take @PlayerCombatDamageIncrease@% increased player damage.`,
		effects: {
			'{74408181}': 100,
			'MaxArmySizeIncrease': 2,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/CursedCrown-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Devastating Charge`,
		groupID: `devastatingCharge`,
		desc: `Cavalier's first attack after charging deals @BaseDamage@ magic damage, increased by @ResistPercentInc@% for each Armor and Magic Resist they have. Gain a Rell.`,
		effects: {
			'BaseDamage': 80,
			'{bc56a280}': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Devastating-Charge-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Dragon Alliance`,
		groupID: `dragonAlliance`,
		desc: `The Dragon trait remains active regardless of how many Dragons you have. Dragons gain @Resists@ Armor and Magic Resist. Gain a Tier 4 Dragon.`,
		effects: {
			'Resists': 25,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragon-Brood-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Dragon Horde`,
		groupID: `dragonHorde`,
		desc: `The Dragon trait remains active regardless of how many Dragons you have. Dragons gain @Stats@ Attack Damage and Ability Power. Gain a random Tier 4 Dragon.`,
		effects: {
			'Stats': 15,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragon-Sanctuary-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Dragon Imperialist`,
		groupID: `dragonImperialist`,
		desc: `If you only have @DragonLimit@ Dragon, Dragons execute enemies they damage who are below @ExecutePct@% HP. Gain a Nomsy.`,
		effects: {
			'{02ec046f}': 18,
			'{1f62dc0d}': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragon-Brood-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Dragonmancer Crest`,
		groupID: `dragonmancerCrest`,
		desc: `Gain a Dragonmancer Emblem and a Kai'Sa.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonmancer-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Dragonmancer Crown`,
		groupID: `dragonmancerCrown`,
		desc: `Gain a Dragonmancer Emblem, a Hand of Justice, and a Lee Sin.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonmancer-Soul-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Dragonmancer Heart`,
		groupID: `dragonmancerHeart`,
		desc: `Your team counts as having 1 additional Dragonmancer. Gain a Kai'Sa.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonmancer-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Essence Theft`,
		groupID: `essenceTheft`,
		desc: `Evoker's attacks steal @ManaDrainDrain@ Mana from their target. Gain a Seraphine.`,
		effects: {
			'ManaDrainBurn': 5,
			'ManaDrainDrain': 5,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Essence-Theft-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Eternal Protection`,
		groupID: `eternalProtection`,
		desc: `When one of your Jade champions would die, the nearest Jade Statue protects them, sacrificing @StatueDamagePct@% of its max HP and transferring @PercentHP@% of the sacrificed HP to the champion. Gain a Gnar.`,
		effects: {
			'{f5278bb2}': 150,
			'{f694bccb}': 70,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Eternal-Protection-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Evoker Crest`,
		groupID: `evokerCrest`,
		desc: `Gain an Evoker Emblem and a Zyra.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Evoker-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Evoker Crown`,
		groupID: `evokerCrown`,
		desc: `Gain an Evoker Emblem, a Spear of Shojin, and a Seraphine.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Evoker-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Evoker Heart`,
		groupID: `evokerHeart`,
		desc: `Your team counts as having 1 additional Evoker. Gain a Zyra.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Evoker-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Eye of the Storm`,
		groupID: `eyeOfTheStorm`,
		desc: `The unit in the center of the board gains @BonusAP@ Ability Power, increased to @FinalAP@ after Tempest's lightning strikes. Gain a Qiyana.`,
		effects: {
			'{96ff67d6}': 135,
			'BonusAP': 45,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Eye-of-the-Storm-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Gadget Expert`,
		groupID: `gadgetExpert`,
		desc: `Direct damage items deal @DamageIncPercent*100@% more damage as true damage. Gain a Statikk Shiv.`,
		effects: {
			'{37903f7d}': 0.25,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Gadget-Expert-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Gear Upgrades`,
		groupID: `gearUpgrades`,
		desc: `Guild champions holding an item gain @Resists@ Armor and an additional @GuildBonusPct@% of their base Guild Bonus. Gain a Twitch.`,
		effects: {
			'Resists': 35,
			'{58f75b92}': 250,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guild-Invitation-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Guardian Crest`,
		groupID: `guardianCrest`,
		desc: `Gain a Guardian Emblem and a Zac.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guardian-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Guardian Crown`,
		groupID: `guardianCrown`,
		desc: `Gain a Guardian Emblem, a Sunfire Cape, and a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guardian-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Guardian Heart`,
		groupID: `guardianHeart`,
		desc: `Your team counts as having 1 additional Guardian. Gain a Zac.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guardian-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Guild Crest`,
		groupID: `guildCrest`,
		desc: `Gain a Guild Emblem and a Twitch.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guild-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Guild Crown`,
		groupID: `guildCrown`,
		desc: `Gain a Guild Emblem, a Protector's Vow, and a Twitch.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guild-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Guild Heart`,
		groupID: `guildHeart`,
		desc: `Your team counts as having 1 additional Guild. Gain a Twitch.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Guild-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Hallucinate`,
		groupID: `hallucinate`,
		desc: `Mirage champions take @DamageReduction@% less damage for the first @DamageReductionDuration@ seconds of combat. Gain a Yone.`,
		effects: {
			'DamageReduction': 90,
			'{db52bb01}': 6,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Hallucinate-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Hero-In-Training`,
		groupID: `heroInTraining`,
		desc: `The Dragonmancer nearest to the Dragonmancer Hero gains @PercentOfBuff@% of the Dragonmancer Trait's bonuses. Gain a Sett.`,
		effects: {
			'{6d9f6bb6}': 66,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Veterancy-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Heroic Presence`,
		groupID: `heroicPresence`,
		desc: `Every @TauntInterval@ seconds, Guardians taunt all enemies within range. Enemies that attack a Guardian's shield take magic damage equal to @HPPercent@% of the shielded unit's max HP (up to once per second). Gain a Braum.`,
		effects: {
			'HPPercent': 7,
			'{d0c5caca}': 2,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Heroic-Presence-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Hot Shot`,
		groupID: `hotShot`,
		desc: `Cannoneer's cannon shots burn their targets, dealing @BurnPct@% of the target's maximum HP as true damage over @BurnDuration@ seconds, and reducing healing by @GrievousWoundsPct@% for the duration of the burn. Gain an Aphelios.`,
		effects: {
			'BurnDuration': 2,
			'{b190d56f}': 6,
			'{fb3b8928}': 50,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Hot-Shot-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Inspire`,
		groupID: `inspire`,
		desc: `When the Dragonmancer Hero gets a takedown, champions that share a trait with the Dragonmancer Hero gain @AS@% Attack Speed for @Duration@ seconds. Gain a Kaisa.`,
		effects: {
			'AS': 70,
			'Duration': 4,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Inspire-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Intercosmic Gifts`,
		groupID: `intercosmicGifts`,
		desc: `Astral Orbs have a @BonusLootPct@% chance to spawn a small bonus orb that contains loot. Gain a Lux.`,
		effects: {
			'{acce2dfd}': 100,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Intercosmic-Treasure-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Jade Crest`,
		groupID: `jadeCrest`,
		desc: `Gain a Jade Emblem and a Gnar.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Jade-Crest-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Jade Heart`,
		groupID: `jadeHeart`,
		desc: `Your team counts as having 1 additional Jade. Gain a Gnar.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Jade-Heart-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Jade Soul`,
		groupID: `jadeSoul`,
		desc: `Your team counts as having 1 additional Jade. Gain a Titan's Resolve and a Gnar.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Jade-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Last Stand`,
		groupID: `lastStand`,
		desc: `The first time you would be eliminated or reduced to 1 HP, instead remain alive. After this effect triggers, your units permanently gain @HP@ HP, @Resists@ Armor and Magic Resist, and @Omnivamp@% Omnivamp.`,
		effects: {
			'HP': 200,
			'Resists': 20,
			'OmniVamp': 20,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Last-Stand-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Lategame Specialist`,
		groupID: `lategameSpecialist`,
		desc: `When you reach Level @LevelReq@, gain @Gold@ gold.`,
		effects: {
			'Gold': 45,
			'{ae55da3b}': 9,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Late-Game-Specialist-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Living Forge`,
		groupID: `livingForge`,
		desc: `Gain a random Ornn artifact now and after every @NumberOfCombats@ player combats.`,
		effects: {
			'{ec71edd2}': 10,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Living-Forge-III.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Living Forge`,
		groupID: `livingForge`,
		desc: `Gain a random Ornn artifact now and after every @NumberOfCombats@ player combats.`,
		effects: {
			'{ec71edd2}': 4,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Living-Forge-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Loot Master`,
		groupID: `lootMaster`,
		desc: `Gain a random component every @Combats@ player combats when you have at least Guild (@TraitLevelReq@) active. Gain a Twitch.`,
		effects: {
			'{9236d691}': 2,
			'Combats': 2,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Loot-Master-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Loot Master`,
		groupID: `lootMaster`,
		desc: `Gain a random component every @Combats@ player combats when you have at least Guild (@TraitLevelReq@) active. Gain a Twitch.`,
		effects: {
			'{9236d691}': 2,
			'Combats': 4,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Loot-Master-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Mage Conference`,
		groupID: `mageConference`,
		desc: `After combat with a player, a random Mage portals onto your bench. Gain a Taliyah.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage-Conference-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Mage Conference`,
		groupID: `mageConference`,
		desc: `After combat with a player, one or two random Mages portal onto your bench. Gain a Taliyah.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage-Conference-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Mage Crest`,
		groupID: `mageCrest`,
		desc: `Gain a Mage Emblem and a Vladimir.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Mage Crown`,
		groupID: `mageCrown`,
		desc: `Gain a Mage Emblem, a Spear of Shojin, and a Lux.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Mage Heart`,
		groupID: `mageHeart`,
		desc: `Your team counts as having 1 additional Mage. Gain a Lillia.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Mirage Crest`,
		groupID: `mirageCrest`,
		desc: `Gain a Mirage Emblem and a Nunu.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mirage-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Mirage Crown`,
		groupID: `mirageCrown`,
		desc: `Gain a Mirage Emblem, a Hand of Justice, and a Nunu.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mirage-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Mirage Heart`,
		groupID: `mirageHeart`,
		desc: `Your team counts as having 1 additional Mirage. Gain a Yone.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mirage-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Mystic Crest`,
		groupID: `mysticCrest`,
		desc: `Gain a Mystic Emblem and a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mystic-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Mystic Heart`,
		groupID: `mysticHeart`,
		desc: `Your team counts as having 1 additional Mystic. Gain a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mystic-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Mystic Soul`,
		groupID: `mysticSoul`,
		desc: `Your team counts as having 1 additional Mystic. Gain a Chalice of Power and a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mystic-Soul-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Pandora's Bench`,
		groupID: `pandorasBench`,
		desc: `Gain @Gold@ gold. At the start of every round, champions on the @BenchSlots@ rightmost bench slots transform into random champions of the same cost.`,
		effects: {
			'Gold': 2,
			'{396fb56a}': 3,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandoras-Bench-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Party Favors`,
		groupID: `partyFavors`,
		desc: `Gain @Gold@ gold for every @GoldReq@ firecrackers launched by Revel champions each combat. Additionally, gain a special prize the first time @SpecialPrizeReq@ total firecrackers are launched. Gain a Jinx.`,
		effects: {
			'Gold': 2,
			'{808fd1e9}': 6,
			'{9845a5b8}': 40,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Party-Favors-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Party Favors`,
		groupID: `partyFavors`,
		desc: `Gain @Gold@ gold for every @GoldReq@ firecrackers launched by Revel champions each combat. Additionally, gain a special prize the first time @SpecialPrizeReq@ total firecrackers are launched. Gain a Jinx.`,
		effects: {
			'Gold': 1,
			'{808fd1e9}': 6,
			'{9845a5b8}': 75,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Party-Favors-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Party Time!`,
		groupID: `partyTime`,
		desc: `After Revels score a takedown, they gain @ASPercent@% Attack Speed for @Duration@ seconds. Gain a Jinx.`,
		effects: {
			'Duration': 4,
			'AAPercent': 80,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Party-Time-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Pay to Win`,
		groupID: `payToWin`,
		desc: `If you purchase a Shop Refresh during the Planning Phase, champions holding a Shimmerscale Item and all Shimmerscale champions gain @DamageAmp@% damage when the next combat begins. Gain a Jax.`,
		effects: {
			'DamageAmp': 35,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Reckless-Spending-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Penitence`,
		groupID: `penitence`,
		desc: `Jade Statue explosions deal @DamageIncPct@% more damage. Enemies are disarmed for @DisarmDuration@ seconds the first time they attack a Jade Statue or are damaged by a Jade Statue's explosion. Gain a Gnar.`,
		effects: {
			'DisarmDuration': 2.5,
			'{2ce880cb}': 100,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Penitence-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Personal Training`,
		groupID: `personalTraining`,
		desc: `At the end of combat, champions that started combat adjacent to Bruisers permanently gain @HP@ HP, increased by @BonusHP@ if they survived. Gain a Jax.`,
		effects: {
			'BonusHP': 40,
			'HP': 80,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Personal-Training-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Personal Training`,
		groupID: `personalTraining`,
		desc: `At the end of combat, champions that started combat adjacent to Bruisers permanently gain @HP@ HP, increased by @BonusHP@ if they survived. Gain a Jax.`,
		effects: {
			'BonusHP': 20,
			'HP': 40,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Personal-Training-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Preparation I`,
		groupID: `preparation`,
		desc: `Champions on your bench permanently gain @HPBonus@ HP, @Stats@ Attack Damage, and @Stats@ Ability Power every round. Champions start with @StartingStacks@ stack of this effect, and can stack up to @MaxStacks@ times.`,
		effects: {
			'MaxStacks': 3,
			'Stats': 4,
			'{9c718664}': 35,
			'StartingStacks': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Preparation-I.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Preparation I`,
		groupID: `preparation`,
		desc: `Champions on your bench permanently gain @HPBonus@ HP, @Stats@ Attack Damage, and @Stats@ Ability Power every round. Champions start with @StartingStacks@ stack of this effect, and can stack up to @MaxStacks@ times.`,
		effects: {
			'MaxStacks': 4,
			'Stats': 3,
			'{9c718664}': 25,
			'StartingStacks': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Preparation-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Preparation II`,
		groupID: `preparation`,
		desc: `Champions on your bench permanently gain @HPBonus@ HP, @Stats@ Attack Damage, and @Stats@ Ability Power every round. Champions start with @StartingStacks@ stack of this effect, and can stack up to @MaxStacks@ times.`,
		effects: {
			'MaxStacks': 4,
			'Stats': 4,
			'{9c718664}': 35,
			'StartingStacks': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Preparation-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Preparation II`,
		groupID: `preparation`,
		desc: `Champions on your bench permanently gain @HPBonus@ HP, @Stats@ Attack Damage, and @Stats@ Ability Power every round. Champions start with @StartingStacks@ stack of this effect, and can stack up to @MaxStacks@ times.`,
		effects: {
			'MaxStacks': 3,
			'Stats': 6,
			'{9c718664}': 50,
			'StartingStacks': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Preparation-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Preparation III`,
		groupID: `preparation`,
		desc: `Champions on your bench permanently gain @HPBonus@ HP, @Stats@ Attack Damage, and @Stats@ Ability Power every round. Champions start with @StartingStacks@ stack of this effect, and can stack up to @MaxStacks@ times.`,
		effects: {
			'MaxStacks': 3,
			'Stats': 9,
			'{9c718664}': 70,
			'StartingStacks': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Preparation-III.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Preparation III`,
		groupID: `preparation`,
		desc: `Champions on your bench permanently gain @HPBonus@ HP, @Stats@ Attack Damage, and @Stats@ Ability Power every round. Champions start with @StartingStacks@ stack of this effect, and can stack up to @MaxStacks@ times.`,
		effects: {
			'MaxStacks': 4,
			'Stats': 7,
			'{9c718664}': 50,
			'StartingStacks': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Preparation-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Press the Attack`,
		groupID: `pressTheAttack`,
		desc: `Your Swiftshots' attacks apply a stack on their target for @StackDuration@ seconds. Every third stack deals true damage equal to @PercentHPDamage@% of the target's maximum HP. Gain a Twitch.`,
		effects: {
			'PercentHPDamage': 4,
			'{64f1bb9b}': 5,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Press-the-Attack-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Protectors of the Cosmos`,
		groupID: `protectorsOfTheCosmos`,
		desc: `Combat start: Your team gains a @ShieldAmount@ HP shield for every item component equipped on an Astral champion, including those that are part of a full item. Gain a Lux.`,
		effects: {
			'ShieldAmount': 35,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Arcane-Comet-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Ragewing Crest`,
		groupID: `ragewingCrest`,
		desc: `Gain a Ragewing Emblem and a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ragewing-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Ragewing Heart`,
		groupID: `ragewingHeart`,
		desc: `Your team counts as having 1 additional Ragewing. Gain a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ragewing-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Ragewing Soul`,
		groupID: `ragewingSoul`,
		desc: `Your team counts as having 1 additional Ragewing. Gain a Guinsoo's Rageblade and a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ragewing-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Ragewing Soul`,
		groupID: `ragewingSoul`,
		desc: `Your team counts as having 1 additional Ragewing. Gain a Guinsoo's Rageblade and a Rakan.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ragewing-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Revel Crest`,
		groupID: `revelCrest`,
		desc: `Gain a Revel Emblem and a Jinx.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Revel-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Revel Crown`,
		groupID: `revelCrown`,
		desc: `Gain a Revel Emblem and a Jinx.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Revel-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Revel Heart`,
		groupID: `revelHeart`,
		desc: `Your team counts as having 1 additional Revel. Gain a Jinx.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Revel-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Revel Unity`,
		groupID: `revelUnity`,
		desc: `The Revel trait grants its bonuses to all of your champions. This does not increase your number of Revel units. Gain a Jinx.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Revel-Unity-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Ricochet`,
		groupID: `ricochet`,
		desc: `Cannoneer's cannon shots bounce once, dealing @BounceReduction@% less damage. Gain an Aphelios.`,
		effects: {
			'BounceReduction': 40,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ricochet-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Scalescorn Crest`,
		groupID: `scalescornCrest`,
		desc: `Gain a Scalescorn Emblem and a Braum.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonbane-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Scalescorn Crown`,
		groupID: `scalescornCrown`,
		desc: `Gain a Scalescorn Emblem, a Hand of Justice, and a Diana.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonbane-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Scalescorn Heart`,
		groupID: `scalescornHeart`,
		desc: `Your team counts as having 1 additional Scalescorn. Gain a Braum.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonbane-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Scorch`,
		groupID: `scorch`,
		desc: `Every @DamageFrequency@th instance of Ragewing champion's damage deals @DamageIncrease@% more damage and is converted to true damage. Gain a Senna.`,
		effects: {
			'{92037b9e}': 5,
			'{cf7f7148}': 20,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Scorch-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Secret Snax`,
		groupID: `secretSnax`,
		desc: `While feeding their dragonling, Trainers have a @FeedChance@% chance to secretly feed a bonus Snax. Gain a Tristana.`,
		effects: {
			'{96f662f6}': 4,
			'{ba8db121}': 40,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Secret-Snax-II.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Shapeshifter Heart`,
		groupID: `shapeshifterHeart`,
		desc: `Your team counts as having 1 additional Shapeshifter. Gain a Gnar.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Shapeshifter-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Shapeshifter Soul`,
		groupID: `shapeshifterSoul`,
		desc: `Your team counts as having 1 additional Shapeshifter. Gain a Sunfire Cape and an Gnar.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Shapeshifter-Soul-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Shimmerscale Crest`,
		groupID: `shimmerscaleCrest`,
		desc: `Gain a Shimmerscale Emblem and a Jax.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Shimmerscale-Crest-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Shimmerscale Heart`,
		groupID: `shimmerscaleHeart`,
		desc: `Your team counts as having 1 additional Shimmerscale. Gain a Jax.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Shimmerscale-Heart-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Shimmerscale Soul`,
		groupID: `shimmerscaleSoul`,
		desc: `Your team counts as having 1 additional Shimmerscale. Gain a Titan's Resolve and a Volibear.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Shimmerscale-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Swiftshot Crest`,
		groupID: `swiftshotCrest`,
		desc: `Gain a Swiftshot Emblem and a Twitch.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Swiftshot-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Swiftshot Crown`,
		groupID: `swiftshotCrown`,
		desc: `Gain a Swiftshot Emblem, a Guinsoo's Rageblade, and a Varus.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Swiftshot-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Swiftshot Heart`,
		groupID: `swiftshotHeart`,
		desc: `Your team counts has having 1 additional Swiftshot. Gain a Twitch.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Swiftshot-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Tantrum`,
		groupID: `tantrum`,
		desc: `After casting their first Ability, Ragewings restore @ManaRestorePct@% of their maximum Rage. Gain a Senna.`,
		effects: {
			'{46806437}': 100,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Untamed-Inferno-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Tempest Crest`,
		groupID: `tempestCrest`,
		desc: `Gain a Tempest Emblem and a Qiyana.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tempest-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Tempest Crown`,
		groupID: `tempestCrown`,
		desc: `Gain a Tempest Emblem, a Hand of Justice, and a Lee Sin.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tempest-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Tempest Heart`,
		groupID: `tempestHeart`,
		desc: `Your team counts as having 1 additional Tempest. Gain a Qiyana.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tempest-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Think Fast`,
		groupID: `thinkFast`,
		desc: `Shop refreshes are free until the end of this round. Traits and other augments do not benefit from these free shops. Gain @Gold@ gold.`,
		effects: {
			'Gold': 8,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Think-Fast-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Tiamat`,
		groupID: `tiamat`,
		desc: `Warrior's enhanced attacks deal @SplashDmgPct*100@% of their damage to enemies in a @HexRange@-hex area around their target. Gain a Yone.`,
		effects: {
			'{91622a61}': 0.5,
			'HexRange': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tiamat-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Titanic Strength`,
		groupID: `titanicStrength`,
		desc: `Bruisers gain @HPPercent*100@% of their HP as Attack Damage. Gain a Jax.`,
		effects: {
			'HPPercent': 0.014999999664723873,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Titanic-Strength-II.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Urf's Grab Bag I`,
		groupID: `urfsGrabBag`,
		desc: `Gain @NumSpatulas@ Spatula and @NumComponents@ random item component(s).`,
		effects: {
			'NumComponents': 1,
			'{eb702324}': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Urfs-Grab-Bag-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Urf's Grab Bag II`,
		groupID: `urfsGrabBag`,
		desc: `Gain @NumSpatulas@ Spatula and @NumComponents@ random item component(s).`,
		effects: {
			'NumComponents': 3,
			'{eb702324}': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Urfs-Grab-Bag-III.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Urf's Grab Bag II+`,
		groupID: `urfsGrabBagIIplus`,
		desc: `Gain @NumSpatulas@ Spatula and @NumComponents@ random item component(s).`,
		effects: {
			'NumComponents': 3,
			'{eb702324}': 1,
		},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Urfs-Grab-Bag-III.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Warrior Crest`,
		groupID: `warriorCrest`,
		desc: `Gain a Warrior Emblem and a Yone.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Warrior-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Warrior Crown`,
		groupID: `warriorCrown`,
		desc: `Gain a Warrior Emblem, a Giant Slayer, and a Yone.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Warrior-Crownl-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Warrior Heart`,
		groupID: `warriorHeart`,
		desc: `Your team counts as having 1 additional Warrior. Gain a Yone.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Warrior-Heart-I.TFT_Set7.dds`,
	},
	{
		tier: 2,
		name: `Whispers Crest`,
		groupID: `whispersCrest`,
		desc: `Gain a Whispers Emblem and a Zyra.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Whispers-Crest-II.TFT_Set7.dds`,
	},
	{
		tier: 3,
		name: `Whispers Crown`,
		groupID: `whispersCrown`,
		desc: `Gain a Whispers Emblem, a Titan's Resolve, and a Sylas.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Whispers-Crown-III.TFT_Set7.dds`,
	},
	{
		tier: 1,
		name: `Whispers Heart`,
		groupID: `whispersHeart`,
		desc: `Your team counts as having 1 additional Whispers. Gain a Zyra.`,
		effects: {},
		icon: `ASSETS/Maps/TFT/Icons/Augments/Hexcore/Whispers-Heart-I.TFT_Set7.dds`,
	},
]

export const inactiveAugments: AugmentData[] = []