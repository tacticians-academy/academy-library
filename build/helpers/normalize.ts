import { BonusKey } from '../../dist/index.js'

export const BASE_UNIT_API_NAMES = ['TFT_TrainingDummy', 'TFT_VoidSpawn']

// Traits/Items

const CONSUMABLE_ITEM_IDS = [
	200, // Neeko's Help
]

const ALTERNATE_ITEM_VERSION_IDS = [
	61, // Blue Buff
	10003, // B.F. Sword
	10004, // Deathblade
	10005, // tft_item_name_SwordOfTheDivine2
]
export const UNRELEASED_ITEM_NAME_KEYS = [
	'one 3+ cost unit',
	'two 1-cost & one 2-cost units',
	'two 3+cost units',
	'three 2-cost units',
	'three 3+cost units',
	'5 gold',
	'6 gold',
	'7 gold',
	'8 gold',
	'divine dissolver',
	'jammed!',
	'loot bag',
	'mortal reminder',
	'random component',
	'special item + 4 gold',
	'unusable slot',
	'tft_item_name_catalyst',
	'tft_item_description_emblemarmoryconsumable',
	'tft_item_name_spellthiefsedge',
	'tft6_item_name_elitespotlight',
]

export const NORMALIZE_EFFECT_KEYS: Record<string, BonusKey> = {
	AbilityPower: BonusKey.AbilityPower,
	SP: BonusKey.AbilityPower,
	BaseAP: BonusKey.AbilityPower,
	AttackDamage: BonusKey.AttackDamage,
	BaseAD: BonusKey.AttackDamage,
	ADBoost: `Bonus${BonusKey.AttackDamage}` as BonusKey,
	AttackSpeed: BonusKey.AttackSpeed,
	Health: BonusKey.Health,
	MagicResist: BonusKey.MagicResist,
	CritChanceAmpPercent: BonusKey.CritChance,
	CritDamageAmp: BonusKey.CritMultiplier,
	CritAmpPercent: BonusKey.CritMultiplier,
	CriticalStrikeAmp: BonusKey.CritMultiplier,
}

export const SUBSTITUTE_EFFECT_KEYS: Record<string, string> = {
	// Set 1
	'4724fc58': BonusKey.AttackDamage,
	'3abb8549': BonusKey.CritChance,
	'eac3d5c4': BonusKey.CritMultiplier,
	'03494ad0': BonusKey.ManaRestore,
	'6003afce': 'ProcPercent',
	'df26ec52': 'ExtraTargetsHit',
	'fb0b4533': 'HexSize',
	'2bd7dcb7': 'DisableDuration',
	'5eb5fde9': 'ADValue',
	'fa127f0d': 'APValue',
	'd05832ac': 'HPToSet',
	'1b812333': 'ProcRate',
	'2deb7544': 'TrueDamagePercent', //NOTE actual name
	'cb42693f': 'VoidChampions', // NOTE actual name
	'a8ca7859': 'ASPercent',
	'1a14aa8a': 'ManaDrainDrain',
	'0ebb5365': 'ManaDrainBurn',
	'35bb0e0c': 'ManaDrainProcChance',
	'ad68ce80': 'StartingStacks',
	'f1d43b01': 'ADPerStack',
	'0c633edc': 'MaxHPTrueDamage',
	'69fff1ab': 'ManaPercentRestore',
	'dc44b1d7': 'HPRestore',
	'0020f716': 'HexRange',
	'aa03e0b1': 'ASPerStack',
	'ce132611': 'APPercentAmp',
	'2275757b': 'ChanceOnHitToSilence',
	'4516a18d': 'SilenceDuration',
	'a60806db': 'TraitMultiplier',
	'2426ea7e': 'ChanceOnHitToDisarm',
	'd0088170': 'ASSlowPercentage',
	'a56e0a21': 'ChanceOnHitToShrink',

	// Set 6

	'b4a90a5d': 'ProcChance',
	'0acd95c2': 'ImperialBonusDamage',
	'f469c9e6': 'TyrantTooltipBonusDamage',
	'45564848': 'InnovationStarLevel', //TODO actual string
	'97ea7bfc': 'InnovatorStarLevelMultiplier', //TODO actual string
	'5263ba40': 'JinxEmpoweredAS',
	'2a50526a': 'JinxASDuration',
	'a859d7b0': 'ViManaReduction',
	'3b173c39': 'ViPunchRange', //TODO verify
	'471b1a16': 'TickRate',
	'd0539890': 'ManaPerTick',
	'6c155e99': 'OmnivampPercent',
	'f9f3a081': 'ManaPerSecond',
	'65722d9c': 'ADAPBase',
	'96ca059f': 'ADAPPerCast',
	'b3105623': 'ManaPerAllyAttack',
	'70ed38c6': 'DetainDuration',
	'd2b7f6f1': 'DetainCount', //TODO actual string
	'2f744e2b': 'TeamAbilityPower',
	'faa12163': 'ArcanistAbilityPower',
	'51aec5d2': 'BonusPerAugment',
	'cbb3a34f': 'AttackSpeedBonus',
	'ed1f9fc2': 'PercentManaReduction',
	'268f634e': 'CritAmpPercent',
	'9f2eb1e2': 'CritChanceAmpPercent',
	'5cc08b27': 'NumComponents',
	'94c6a08c': 'HPShieldAmount',
	'47343861': BonusKey.MagicResist,
	'98396b21': BonusKey.HealShieldBoost,
	'16394c87': BonusKey.HexRangeIncrease,
	'75994f47': 'PercentDamageIncrease',
	'17cfa971': 'BurstDuration',
	'867bc055': 'SyndicateIncrease',
	'45c7ed6b': 'BonusCritDmgPerCritAbove100',
	'd34ac151': 'BonusCritDamage',
	'5cc52ba8': 'HexRadius',
	'a861afa0': 'CostIncrease',
	'c4b5579c': 'DodgeChance',
	'c9f222c0': 'HealTickRate',
	'7b6cc2f7': 'MissingHealthHeal',
	'033de552': 'AoEDamageReduction',
	'510fdb6a': 'BanishDuration',
	'9b1e8f37': 'HexRange',
	'fe079f34': 'MRShred',
	'b223097c': 'MRShredDuration',
	'df6f64b9': 'ManaRatio',
	'c3360f16': 'ShieldHealth',
	'c425872e': 'StasisDuration',
	'7c694b41': 'ArmorPerEnemy', //TODO monitor. unverifiable MRPerEnemy/ArmorPerEnemy
	'7ba8c0e3': 'MRPerEnemy', //TODO monitor. unverifiable MRPerEnemy/ArmorPerEnemy
	'1ee760be': '1StarAoEDamage',
	'a3b999e9': '2StarAoEDamage',
	'156febb8': '3StarAoEDamage',
	'b5c2a66b': '4StarAoEDamage',
	'6688a0d5': 'CritDamageBlock', //TODO actual name
	'deada01e': 'SmallBonusPct',
	'b8ae7546': 'LargeBonusPct',
	'ad16f688': 'OmniVamp',
	'12a15e9e': '1StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'15144cec': '2StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'440f813d': '3StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'79e2ec7b': '4StarBounces', //TODO monitor. unverifiable 1StarBounces/2StarBounces/3StarBounces/4StarBounces
	'a2b76524': 'SpellShieldDuration',
	'f924a46e': '1StarAD', //TODO actual name
	'82618485': '2StarAD', //TODO actual name
	'1b738810': '3StarAD', //TODO actual name
	'eb990bd7': '4StarAD', //TODO verify
	'8c7c8547': 'Tooltip1StarBonusAD',
	'd4afa164': 'Tooltip2StarBonusAD',
	'edb2fb99': 'Tooltip3StarBonusAD',
	'd49caf5d': 'BonusAP',
	'57706a69': 'BurnPercent',
	'97e52ce8': 'BurnDuration',
	'2161bfa2': 'GrievousWoundsPercent',
	'b3b8f644': 'StackingAD', //TODO monitor. unverifiable StackingAP
	'cb9689ca': 'StackingAP', //TODO actual name, monitor. unverifiable StackingAD
	'9396f00d': 'StackCap', //TODO monitor. unverifiable BonusResistsAtStackCap
	'b55019fa': 'BonusResistsAtStackCap', //TODO monitor. unverifiable StackCap
	'276ba2c8': 'MultiplierForDamage',
	'0034a6ef': 'ShieldHealthPercent',
	'5deb4eb2': 'APPerInterval',
	'a7db7345': 'IntervalSeconds',
	'7ff4f3b6': 'SummonedStatReduction',
	'4b9a3b61': 'FlatManaRestore',
	'c8d95a76': 'ManaDuration',
	'6fb9af6a': '1StarShieldValue',
	'0d46330d': '2StarShieldValue',
	'829e6cec': '3StarShieldValue',
	'c78af25f': '4StarShieldValue',
	'5100c273': 'TooltipBonusAS',
	'9f5117db': 'AttackAccuracy', //TODO actual name
	'5079c7a2': 'ArmorReductionPercent',
	'cc9fefa7': 'ArmorBreakDuration',
	'353ede36': 'CritDamageAmp',
	'5200c406': 'TooltipBonusAP',
	'19a89153': 'BaseAD', //TODO monitor, unverifiable BaseAP
	'41cb628d': 'BaseAP', //TODO monitor, unverifiable BaseAD
	'ae49cc70': 'AdditionalADAP', //TODO monitor, unverifiable
	'c0c9af7f': 'AdditionalHeal', //TODO monitor, unverifiable
	'f2474447': 'TooltipBonus',
	'9fd37c1c': '{APTimer}', //TODO unused? https://leagueoflegends.fandom.com/wiki/Chalice_of_Power_(Teamfight_Tactics)
	'fa1ef605': '{MagicDamageReductionMultiplier}', //TODO unused? https://leagueoflegends.fandom.com/wiki/Dragon%27s_Claw_(Teamfight_Tactics)
	'79a4455a': 'CritReduction',
	'b1442c34': 'StealthDuration', //TODO verify
	'5c51b509': 'TraitLevel', //TODO ??
	'7f1304b2': 'AbilityPower',
	'df962703': 'ADBoost',
	'c9b0e3af': 'PercentOmnivamp',
	'ce492058': 'ManaGrant',
	'2fb31c01': 'Frequency',
	'e86b1aa9': 'BonusHealthTooltip',

	'c26236e7': 'MutantAdrenalineProcChance',
	'7f322ebf': 'MutantAdrenalineAD',
	'2f805979': 'MutantBioLeechingOmnivamp',
	'b6322d58': 'MutantCyberAD',
	'76882e8f': 'MutantCyberHealth',
	'994006f0': 'MutantMetamorphosisADAP',
	'190fb0a2': 'MutantMetamorphosisArmorMR',
	'6b5aee70': 'MutantMetamorphosisGrowthRate',
	'82e43c84': 'MutantSynapticManaCost',
	'f90dd382': 'MutantSynapticAP',
	'3f1cec4d': 'MutantVoidborneExecuteThreshold',
	'9cc303b4': 'MutantVoidborneTrueDamagePercent',
	'7c799240': 'MutantVoraciousADAP',

	// Augments

	'927ebb75': 'APShield',
	'4e39b1d2': 'MaxHealthShield',
	'043ce1d5': 'MissingHPHeal',
	'6a311cec': 'Stats',
	'69247755': 'InvulnDuration',
	'cbe45061': 'HealthThreshold1',
	'4ed1f1d8': 'Delay',
	'6c216145': 'NumItems',
	'ec9a04d1': 'MaxArmySizeIncrease',
	'cb270598': 'DodgeIncrease',
	'516374d5': 'XP',
	'c43e4438': 'RerollPercent',
	'd1da1e25': 'NumBlueOrbs',
	'd6f612f7': 'NumGoldOrbs',
	'25083082': 'NumGrayOrbs',
	'4d2cb08a': 'BounceReduction',
	'1c1b4e2d': 'NumGloves',
	'4bff7d1c': 'TooltipMaxHealth',
	'65358e6c': 'NumRemovers',
	'd8f646f3': 'ManaRegen',
	'9292a6c1': 'Chance',
	'aec10c49': 'NumDummies',
	'57de426e': 'PercentManaReave',
	'682e31d9': 'Augment1Gold',
	'8e9f969c': 'Augment2Gold',
	'248fb55f': 'Augment3Gold',
	'cc06ab16': 'Combats',
	'23f2b648': 'DamageCap',
	'4d66b1e0': 'GoldIncrement',
	'35be99a8': 'CloneHealth',
	'9c9fe9fd': 'MaxAmp',
	'513ad265': 'HP',
	'b15c83f9': 'PercentStats',
	'1848d006': 'DefenseBonus',
	'589ea6c0': 'DefensePercent',
	'2526f0eb': 'PerSurvivingUnit',
	'7adc1220': 'RegenPerTick',
	'78bc82ef': 'NumChamps',
	'009085db': 'ManaPercent',
	'0cb95e9d': 'HealReductionPercent',
	'2aee64b4': 'ArmorPenPercent',
	'ea6108de': 'ItemChance',
	'd9291863': 'ADPerStarLevel',
	'4f70b3d1': 'TotalBurnPercent',
	'ffea5c28': 'ManaReavePercent',
	'9e368069': 'InterestCap',
	'0b39c7c2': 'HealShieldIncrease',
	'5d23d997': 'MagicPen',
	'5332680a': 'HealingReduction',
	'83e12d6f': 'BonusStats',
	'33268c65': 'MissingHeal',
	'2e2d4a01': 'HealCap',
	'd358c94e': 'ThresholdGold',
	'5b299902': 'CD',
	'1b64eb90': 'NumDice',
	'e3d58c55': 'NumTomes',
	'962760a9': 'PercentAbilityPower',
	'a13cb3fa': 'EggTurns',
	'b300068b': 'ArmoryChoiceCount',
	'f49783e7': 'BonusPercentPerAugment',
	'357f0e55': 'RepairDuration', //NOTE actual name

	'fb4355e3': 'Damage1',
	'fc435776': 'Damage2',
	'fd435909': 'Damage3',
	'fe435a9c': 'Damage4',
	'57271994': 'MagicDamage1',
	'5a271e4d': 'MagicDamage2',
	'59271cba': 'MagicDamage3',
	'542714db': 'MagicDamage4',
}

// Abilities

export const mSpellCalculationsSubstitutions: Record<string, string> = {
	// Set 1
	'{f24078df}': 'TotalDamage', // Prefix?

	// Set 6
	'{197fbc1c}': 'UNUSED', // Unused on Tibbers ModifiedAllyPercentASBase?
	'{7ad6f313}': 'UNUSED', // Unused on Senna BaseHeal
	'{5c260301}': 'TotalASBoost',
	'{a7f7ee8e}': 'ModifiedASBoost',
	'{7fd62dab}': 'ModifiedAttackDamage',
	'{e7712601}': 'ModifiedBonusAttackSpeed',
	'{a9241a3b}': 'ModifiedBonusAS',
	'{5b31e270}': 'ModifiedBonusDamage', //TODO Galio uses CritBonusDamage so these need to be disambiguated
	'{4f553e5f}': 'ModifiedBonusHealth',
	'{eeac92d1}': 'ModifiedBonusLightningDamage',
	'{2694e795}': 'ModifiedBonusOnHit',
	'{2cac12ec}': 'ModifiedBuffDuration',
	'{9e7b214b}': 'ModifiedDamageAmount',
	'{08a55045}': 'ModifiedDamageFinal',
	'{446c04fa}': 'ModifiedDamagePerSecond',
	'{605f22d8}': 'ModifiedHealAmount',
	'{8def4efb}': 'ModifiedHealBonus',
	'{822057e4}': 'ModifiedMagicDamage', //TODO unify with ModifiedDamage? ModifiedDamage already groups MagicDamage
	'{3a39e14f}': 'ModifiedPercentHealing',
	'{6fd94775}': 'ModifiedPercentHealth',
	'{bed1d1a3}': 'ModifiedReducedDamageToCC', // Unused on Tahm Kench
	'{8ccbbddb}': 'ModifiedShieldAmount',
	'{1012a6c0}': 'ModifiedRangedASBoost',
	'{a808e8d9}': 'ModifiedShieldDR',
	'{1321b8c9}': 'ModifiedShielding',
	'{f2f64370}': 'ModifiedTransformHealth',
}

export const mDataValueSubstitutions: Record<string, string> = {
	'{6ad2d2c9}': 'UNKNOWN', // Unused on Tibbers AllyPercentASBase?
	'{fcfce396}': 'ADMult',
	'{bc3d5e29}': 'ADPercent',
	'{000f6884}': 'ASBoost',
	'{fab7c982}': 'ASPercent', //TODO ModifiedASBoost
	'{8832edd1}': 'BaseSpinDamage', //TODO ModifiedDamage
	'{35783862}': 'BonusOnHit',
	'{c976d37b}': 'BonusLightningDamage',
	'{f7adf19d}': 'CritBonusDamage',
	'{26aa1808}': 'DamageFinal',
	'{0fca4668}': 'HealingPerAttack', //TODO ModifiedHealing
	'{f12d8928}': 'MaxHealthPercent',
	'{fa6d190b}': 'MeleeDamagePercent', //TODO TotalDamage
	'{15d27f09}': 'RangedADPercentBase', //TODO TotalDamage
	'{df3d2f5f}': 'PercentAD',
	'{608d099c}': 'PercentArmorDamage',
	'{7ac38453}': 'PercentAttackDamage',
	'{6f755c2e}': 'PercentADDamage',
	'{112cdf9c}': 'PercentHealing',
	'{b8dc87fd}': 'RangedASBoost',
	'{a95a0f9b}': 'RocketLauncherPercentAD',
	'{0f565fe1}': 'ShieldDamage',
	'{31367dd8}': 'Shielding',
	'{ac0b3494}': 'SpinDamage',
	'{2dac49dd}': 'TransformHealth',
	'{3118f99b}': 'ReducedDamageToCC', // Tahm Kench unused
	'{a6febc4a}': 'ShieldDR',
	'{54c91b1e}': 'HealBonus',
}

export const mStatSubstitutions: Record<number, BonusKey> = {
	1: BonusKey.Armor,
	2: BonusKey.AttackDamage,
	6: BonusKey.CritChance,
	7: BonusKey.CritMultiplier,
	11: BonusKey.Health,
}

export const spellCalculationOperatorSubstitutions: Record<string, string> = {
	NamedDataValueCalculationPart: 'identity',
	ProductOfSubPartsCalculationPart: 'product',
	StatBySubPartCalculationPart: 'scale',
	SubPartScaledProportionalToStat: 'scale',
	SumOfSubPartsCalculationPart: 'sum',
}
