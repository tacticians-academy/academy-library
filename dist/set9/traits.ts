import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set9_Bastion`,
		desc: `Bastion champions gain Armor and Magic Resist. This is increased by @BonusPercent*100@% for the first @Duration@ seconds of combat.<br><br><expandRow>(@MinUnits@) +@BonusArmor@ %i:scaleArmor%, +@BonusArmor@ %i:scaleMR%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusArmor': 25,
					'BonusMR': 25,
					'BonusPercent': 1,
					'Duration': 10,
					'{09b7d38c}': 2,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusArmor': 50,
					'BonusMR': 50,
					'BonusPercent': 1,
					'Duration': 10,
					'{09b7d38c}': 2,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusArmor': 95,
					'BonusMR': 95,
					'BonusPercent': 1,
					'Duration': 10,
					'{09b7d38c}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusArmor': 240,
					'BonusMR': 240,
					'BonusPercent': 1,
					'Duration': 10,
					'{09b7d38c}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Bastion.TFT_Set9.tex`,
		name: `Bastion`,
	},
	{
		apiName: `Set9_Bruiser`,
		desc: `Your units gain @TeamFlatHP@ HP. Bruisers gain additional maximum HP.<br><br><expandRow>(@MinUnits@) +@BonusPercentHP*100@% max %i:scaleHP%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusPercentHP': 0.10000000149011612,
					'TeamFlatHP': 100,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusPercentHP': 0.4000000059604645,
					'TeamFlatHP': 100,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusPercentHP': 0.699999988079071,
					'TeamFlatHP': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_6_Bruiser.tex`,
		name: `Bruiser`,
	},
	{
		apiName: `Set9_Challenger`,
		desc: `Challengers gain bonus Attack Speed. When their target dies, Challengers dash to a new target and increase their Attack Speed bonus by @IncreasePct*100@% for @BurstDuration@ seconds.<br><br><expandRow>(@MinUnits@) @BonusAS@% %i:scaleAS%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAS': 30,
					'BurstDuration': 2.5,
					'IncreasePct': 0.5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusAS': 60,
					'BurstDuration': 2.5,
					'IncreasePct': 0.5,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusAS': 95,
					'BurstDuration': 2.5,
					'IncreasePct': 0.5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusAS': 140,
					'BurstDuration': 2.5,
					'IncreasePct': 0.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_6_Challenger.tex`,
		name: `Challenger`,
	},
	{
		apiName: `Set9_Darkin`,
		desc: `When Aatrox or the holder of the Darkin Blade dies, the Darkin Blade is equipped to the nearest allied champion, granting them @BonusHP@ HP and @BonusOmnivamp*100@% Omnivamp.<br><br>After being equipped to a champion for @RespawnTimer@ seconds, Aatrox will revive upon their death instead.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'BonusHP': 350,
					'BonusOmnivamp': 0.15000000596046448,
					'RespawnTimer': 4,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Darkin.TFT_Set9.tex`,
		name: `Darkin`,
	},
	{
		apiName: `Set9_Deadeye`,
		desc: `<spellPassive>Innate:</spellPassive> +@BonusRange@ Range<br><br>Every @ShotFrequency@ seconds, Deadeyes attack the enemy with the highest percent HP and deal bonus damage.<br><br><expandRow>(@MinUnits@) +@DamageAmp*100@% damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'DamageAmp': 0.20000000298023224,
					'ShotFrequency': 3,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'DamageAmp': 0.6499999761581421,
					'ShotFrequency': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'DamageAmp': 1.5,
					'ShotFrequency': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Deadeye.TFT_Set9.tex`,
		name: `Deadeye`,
	},
	{
		apiName: `Set9_Demacia`,
		desc: `Your strongest Demacians become Elite and equip a random Radiant item each combat. Elites grant Armor and Magic Resist to themselves and adjacent allies, but this does not stack.<br><br><row>(@MinUnits@) @NumElites@ Elite, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><row>(@MinUnits@) @NumElites@ Elites, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><row>(@MinUnits@) @NumElites@ Elites, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><row>(@MinUnits@) @NumElites@ Elites, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><br><rules>Radiant items are stronger versions of full items.</rules>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusDefenses': 5,
					'NumElites': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'BonusDefenses': 30,
					'NumElites': 2,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'BonusDefenses': 40,
					'NumElites': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'BonusDefenses': 100,
					'NumElites': 6,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Demacia.TFT_Set9.tex`,
		name: `Demacia`,
	},
	{
		apiName: `Set9_Empress`,
		desc: `When Bel'Veth kills an enemy, they leave behind Void Coral that she will consume. The first Coral increases her maximum HP by @PercentBonusMaxHP*100@%, while further Coral heals her @PercentHPHeal*100@% maximum HP.<br><br>When a Void Coral is consumed, she deals @PercentHPMagicDamage*100@% maximum HP as magic damage to enemies within @HexRange@ hexes.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'HexRange': 2,
					'PercentBonusMaxHP': 0.5,
					'PercentHPHeal': 0.20000000298023224,
					'PercentHPMagicDamage': 0.10000000149011612,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Empress.TFT_Set9.tex`,
		name: `Empress`,
	},
	{
		apiName: `Set9_Freljord`,
		desc: `After @DelayTime@ seconds, an ice storm strikes the battlefield. Enemies take a percentage of their maximum HP as true damage and gain debuffs.<br><br><row>(@MinUnits@) @PercentHPDamage@% %i:scaleHP%, enemies are @ShredSunder@% <TFTKeyword>Sundered</TFTKeyword> and <TFTKeyword>Shredded</TFTKeyword></row> for @Duration@ seconds<br><row>(@MinUnits@) @PercentHPDamage@% %i:scaleHP%, enemies are also @Reave@% <TFTKeyword>Mana Reaved</TFTKeyword></row><br><row>(@MinUnits@) @PercentHPDamage@% %i:scaleHP%, enemies are also stunned for @StunDuration@ seconds</row><br><br><rules><tftbold>Sunder</tftbold>: Reduce Armor<br><tftbold>Shred</tftbold>: Reduce Magic Resist<br><tftbold>Mana Reave</tftbold>: Increase max Mana until the next cast</rules>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'DelayTime': 8,
					'Duration': 10,
					'PercentHPDamage': 5,
					'ShredSunder': 40,
					'{81ce23cf}': 1,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 4,
				variables: {
					'DelayTime': 8,
					'Duration': 10,
					'PercentHPDamage': 10,
					'{5e31469e}': 30,
					'{81ce23cf}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 5,
				variables: {
					'DelayTime': 8,
					'Duration': 10,
					'PercentHPDamage': 15,
					'StunDuration': 1.5,
					'{81ce23cf}': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Freljord.TFT_Set9.tex`,
		name: `Freljord`,
	},
	{
		apiName: `Set9_Marksman`,
		desc: `When Gunner champions attack, they gain bonus Attack Damage, up to @MaxStacks@ stacks.<br><br><expandRow>(@MinUnits@) @PercentAD@% %i:scaleAD% per stack</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MaxStacks': 8,
					'PercentAD': 6,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'MaxStacks': 8,
					'PercentAD': 14,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'MaxStacks': 8,
					'PercentAD': 25,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Gunner.TFT_Set9.tex`,
		name: `Gunner`,
	},
	{
		apiName: `Set9_Preserver`,
		desc: `Every @TickRate@ seconds, your units gain Mana.<br><br><row>(@MinUnits@) @TeamMana@ %i:scaleMana%</row><br><row>(@MinUnits@) Additional @SelfBonusMana@ to Invokers</row><br><row>(@MinUnits@) @TeamMana@ %i:scaleMana% to all, additional @SelfBonusMana@ to Invokers</row><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'SelfBonusMana': null,
					'TeamMana': 5,
					'TickRate': 3,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'SelfBonusMana': 15,
					'TeamMana': 5,
					'TickRate': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'SelfBonusMana': 15,
					'TeamMana': 20,
					'TickRate': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Preserver.TFT_Set9.tex`,
		name: `Invoker`,
	},
	{
		apiName: `Set9_Ionia`,
		desc: `Each Ionian has a unique bonus within their Ability. <br><br>Every @SpiritDuration@ seconds, a number of Ionians are enlightened to their spirit form, gaining @Mana@ mana and doubling stat bonuses for @SpiritDuration@ seconds.<br><br><expandRow>(@MinUnits@) @TooltipBonus*100@% Ionian bonus, @NumberOfSpirits@ enlightened</expandRow>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'EmblemBonus': 33,
					'Mana': 20,
					'NumberOfSpirits': 1,
					'SpiritDuration': 4,
					'TooltipBonus': 1,
					'{18bfc1ac}': 10,
					'{1b8cd16a}': 20,
					'{27b17444}': 25,
					'{3fc62f6f}': 2,
					'{4df03474}': 200,
					'{53912082}': 1,
					'{b9a6ee1b}': 15,
					'{eb0c521b}': 15,
					'{ed124bdb}': 25,
					'{f6b4b588}': 3,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 4,
				variables: {
					'EmblemBonus': 66,
					'Mana': 20,
					'NumberOfSpirits': 2,
					'SpiritDuration': 4,
					'TooltipBonus': 2,
					'{18bfc1ac}': 20,
					'{1b8cd16a}': 40,
					'{27b17444}': 50,
					'{3fc62f6f}': 2,
					'{4df03474}': 400,
					'{53912082}': 1,
					'{b9a6ee1b}': 30,
					'{eb0c521b}': 30,
					'{ed124bdb}': 50,
					'{f6b4b588}': 6,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'EmblemBonus': 107.25,
					'Mana': 20,
					'NumberOfSpirits': 3,
					'SpiritDuration': 4,
					'TooltipBonus': 3.25,
					'{18bfc1ac}': 32.5,
					'{1b8cd16a}': 65,
					'{27b17444}': 81.25,
					'{3fc62f6f}': 2,
					'{4df03474}': 650,
					'{53912082}': 1,
					'{b9a6ee1b}': 48.75,
					'{eb0c521b}': 48.75,
					'{ed124bdb}': 81.25,
					'{f6b4b588}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Ionia.TFT_Set9.tex`,
		name: `Ionia`,
	},
	{
		apiName: `Set9_Armorclad`,
		desc: `Juggernaut champions take less damage as their HP decreases.<br><br><expandRow>(@MinUnits@) @MinDR*100@% to @MaxDR*100@% damage reduction</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 7,
					'MaxDR': 0.25,
					'MinDR': 0.15000000596046448,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'Duration': 7,
					'MaxDR': 0.4000000059604645,
					'MinDR': 0.25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 7,
					'MaxDR': 0.5,
					'MinDR': 0.3499999940395355,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Juggernaut.TFT_Set9.tex`,
		name: `Juggernaut`,
	},
	{
		apiName: `Set9_Multicaster`,
		desc: `Multicasters cast their Ability multiple times. Bonus casts have @DamageReduction*100@% reduced effectiveness.<br><br><row>(@MinUnits@) @BonusCasts@ extra cast</row><br><row>(@MinUnits@) @BonusCasts@ extra casts</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusCasts': 1,
					'DamageReduction': 0.6600000262260437,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusCasts': 2,
					'DamageReduction': 0.6600000262260437,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Multicaster.TFT_Set9.tex`,
		name: `Multicaster`,
	},
	{
		apiName: `Set9_Noxus`,
		desc: `Noxus champions gain HP, Ability Power and Attack Damage. This is increased by @BonusRatio*100@% for each different opponent that either you have conquered in combat or is dead.<br><br><expandRow>(@MinUnits@) @HP@ %i:scaleHP%, @AP@ %i:scaleAP%, @AD@% %i:scaleAD%</expandRow><br><br><TFTTrackerLabel>Conquered bonus: @TFTUnitProperty.trait:TFT9_Trait_ConquerorBonus@% / @BonusRatio*700@%</TFTTrackerLabel>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'AD': 17,
					'AP': 17,
					'BonusRatio': 0.05000000074505806,
					'HP': 170,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 4,
				variables: {
					'AD': 34,
					'AP': 34,
					'BonusRatio': 0.05000000074505806,
					'HP': 340,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'AD': 70,
					'AP': 70,
					'BonusRatio': 0.05000000074505806,
					'HP': 700,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Noxus.TFT_Set9.tex`,
		name: `Noxus`,
	},
	{
		apiName: `Set9_Piltover`,
		desc: `Gain the T-Hex. Every time you lose a player combat, the T-Hex gains Charges. Winning converts the Charges to Power for the T-Hex and grants you loot based on the number of Charges converted.<br><br><row>(@MinUnits@) Gain the T-Hex.</row><br><row>(@MinUnits@) Gain bonus loot every round. Each loss counts as 2 losses instead.</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 4,
				variables: {
					'{7714a401}': null,
					'{af532c9d}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'{7714a401}': 1,
					'{af532c9d}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Piltover.TFT_Set9.tex`,
		name: `Piltover`,
	},
	{
		apiName: `Set9_Redeemer`,
		desc: `Whenever an ally gains a Shield, Senna grants them @AS*100@% stacking Attack Speed for the rest of combat.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'AS': 0.05999999865889549,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Mistwalker.TFT_Set9.tex`,
		name: `Redeemer`,
	},
	{
		apiName: `Set9_Rogue`,
		desc: `<row>(@MinUnits@) When a Rogue falls below @HPThreshold*100@% HP, they briefly become untargetable and dash to an enemy within @HexRange@ hexes (preferring enemy backline).</row><br><row>(@MinUnits@) Additionally, a Rogue's first attack on an enemy bleeds them for @BleedMaxHPPct*100@% of their max HP as magic damage over @BleedDuration@ seconds.</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BleedDuration': null,
					'DamageReduction': 100,
					'HPThreshold': 0.5,
					'HexRange': 4,
					'StealthDuration': 1.5,
					'{77df45b0}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'BleedDuration': 5,
					'DamageReduction': 100,
					'HPThreshold': 0.5,
					'HexRange': 4,
					'StealthDuration': 1.5,
					'{77df45b0}': 0.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Rogue.TFT_Set9.tex`,
		name: `Rogue`,
	},
	{
		apiName: `Set9_ShadowIsles`,
		desc: `After dealing or receiving damage @DamageInstances@ times, Shadow Isles champions gain a Shield for @Duration@ seconds and become Spectral for the rest of combat. Spectral champions gain Mana every second.<br><br><expandRow>(@MinUnits@) @MaxHPShield@% %i:scaleHP% Shield, @ManaRegen@ %i:scaleMana%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'DamageInstances': 10,
					'Duration': 15,
					'ManaRegen': 6,
					'MaxHPShield': 45,
					'TickRate': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'DamageInstances': 10,
					'Duration': 15,
					'ManaRegen': 12,
					'MaxHPShield': 80,
					'TickRate': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'DamageInstances': 10,
					'Duration': 15,
					'ManaRegen': 18,
					'MaxHPShield': 115,
					'TickRate': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_ShadowIsles.TFT_Set9.tex`,
		name: `Shadow Isles`,
	},
	{
		apiName: `Set9_Shurima`,
		desc: `Every @PulsePeriod@ seconds, Shurimans heal @HPRegen*100@% maximum HP. After @SecondsToAscend@ seconds, select Shurimans Ascend and gain @BonusHPPercent*100@% maximum HP and @BonusAAPercent*100@% Attack Speed.<br><br><row>(@MinUnits@) The strongest Shuriman Ascends</row><br><row>(@MinUnits@) All Shurimans Ascend</row><br><row>(@MinUnits@) Instead, Ascend at combat start. +@AscensionStrengthBoost*100@% Ascension bonus</row><br><row>(@MinUnits@) Ascend twice, at combat start and after @SecondsToAscend@ seconds. +@AscensionStrengthBoost*100@% Ascension bonus</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'AscensionStrengthBoost': null,
					'BonusAAPercent': 0.44999998807907104,
					'BonusHPPercent': 0.33000001311302185,
					'HPRegen': 0.05000000074505806,
					'PulsePeriod': 4,
					'SecondsToAscend': 8,
					'{e3dc0fc2}': 2,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'AscensionStrengthBoost': null,
					'BonusAAPercent': 0.44999998807907104,
					'BonusHPPercent': 0.33000001311302185,
					'HPRegen': 0.05000000074505806,
					'PulsePeriod': 4,
					'SecondsToAscend': 8,
					'{e3dc0fc2}': 2,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'AscensionStrengthBoost': 0.25,
					'BonusAAPercent': 0.44999998807907104,
					'BonusHPPercent': 0.33000001311302185,
					'HPRegen': 0.05000000074505806,
					'PulsePeriod': 4,
					'SecondsToAscend': 8,
					'{e3dc0fc2}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'AscensionStrengthBoost': 0.25,
					'BonusAAPercent': 0.44999998807907104,
					'BonusHPPercent': 0.33000001311302185,
					'HPRegen': 0.05000000074505806,
					'PulsePeriod': 4,
					'SecondsToAscend': 8,
					'{e3dc0fc2}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Shurima.TFT_Set9.tex`,
		name: `Shurima`,
	},
	{
		apiName: `Set9_Slayer`,
		desc: `Slayers gain @Omnivamp@% Omnivamp.<br><br>Slayers deal bonus damage, doubled against units below @HPThreshold*100@% HP.<br><br><expandRow>(@MinUnits@) +@BonusDamageBase@% bonus damage</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusDamageBase': 5,
					'HPThreshold': 0.6600000262260437,
					'Omnivamp': 12,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'BonusDamageBase': 10,
					'HPThreshold': 0.6600000262260437,
					'Omnivamp': 12,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusDamageBase': 20,
					'HPThreshold': 0.6600000262260437,
					'Omnivamp': 12,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'BonusDamageBase': 30,
					'HPThreshold': 0.6600000262260437,
					'Omnivamp': 12,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'BonusDamageBase': 40,
					'HPThreshold': 0.6600000262260437,
					'Omnivamp': 12,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Slayer.tex`,
		name: `Slayer`,
	},
	{
		apiName: `Set9_Sorcerer`,
		desc: `Sorcerers gain bonus Ability Power.<br><br>When an enemy dies after being damaged by a Sorcerer, they deal a percentage of that enemy's maximum HP to another enemy.<br><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HPPct*100@% max %i:scaleHP%</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HPPct*100@% max %i:scaleHP%</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HPPct*100@% max %i:scaleHP% to @TargetNum@ enemies</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HPPct*100@% max %i:scaleHP% to @TargetNum@ enemies</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAP': 25,
					'HPPct': 0.07000000029802322,
					'TargetNum': 1,
					'{a34f32df}': 3,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusAP': 50,
					'HPPct': 0.10000000149011612,
					'TargetNum': 1,
					'{a34f32df}': 3,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusAP': 80,
					'HPPct': 0.11999999731779099,
					'TargetNum': 2,
					'{a34f32df}': 3,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusAP': 120,
					'HPPct': 0.20000000298023224,
					'TargetNum': 2,
					'{a34f32df}': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Sorcerer.tex`,
		name: `Sorcerer`,
	},
	{
		apiName: `Set9_Strategist`,
		desc: `<spellPassive>Combat Start:</spellPassive> Allies in the front 2 rows gain a Shield for @ShieldDuration@ seconds. Allies in the back 2 rows gain Ability Power.<br><br><expandRow>(@MinUnits@) @ShieldHP@ Shield; @BonusAP@ %i:scaleAP%</expandRow><br>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAP': 15,
					'ShieldDuration': 15,
					'ShieldHP': 250,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'BonusAP': 25,
					'ShieldDuration': 15,
					'ShieldHP': 400,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusAP': 40,
					'ShieldDuration': 15,
					'ShieldHP': 600,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 5,
				variables: {
					'BonusAP': 60,
					'ShieldDuration': 15,
					'ShieldHP': 900,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Strategist.TFT_Set9.tex`,
		name: `Strategist`,
	},
	{
		apiName: `Set9_Targon`,
		desc: `All of your units' healing and shielding is improved.<br><br><expandRow>(@MinUnits@) @HealShieldIncrease*100@% increased healing and shielding </expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'HealShieldIncrease': 0.18000000715255737,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 4,
				variables: {
					'HealShieldIncrease': 0.3499999940395355,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 5,
				variables: {
					'HealShieldIncrease': 0.6000000238418579,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Targon.TFT_Set9.tex`,
		name: `Targon`,
	},
	{
		apiName: `Set9_Technogenius`,
		desc: `Gain a placeable Apex Turret with 3 upgrade slots. Upgrades to the Apex Turret will show up in your shop for @GoldCost@ gold. The Apex Turret shares Heimerdinger's Attack Speed and Ability Power.<br><br><rules>You may only have 1 Apex Turret.</rules>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'GoldCost': 6,
					'{8063e2fe}': 1,
					'{db5e6ace}': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Technogenius.TFT_Set9.tex`,
		name: `Technogenius`,
	},
	{
		apiName: `Set9_Void`,
		desc: `Get a placeable void egg. At the start of combat, it hatches into an unspeakable horror and knocks up adjacent enemies.<br><br>Each Void star level increases the horror's HP and Ability Power by @PercentHPAPPerStarLevel*100@%. <br><br><row>(@MinUnits@) Void Remora</row><br><row>(@MinUnits@) Rift Herald</row><br><row>(@MinUnits@) Baron Nashor</row>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 1,
				variables: {
					'PercentHPAPPerStarLevel': 0.25,
					'{a4dcb3da}': 0.4000000059604645,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'PercentHPAPPerStarLevel': 0.25,
					'{a4dcb3da}': 0.4000000059604645,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'PercentHPAPPerStarLevel': 0.25,
					'{a4dcb3da}': 0.4000000059604645,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Void.TFT_Set9.tex`,
		name: `Void`,
	},
	{
		apiName: `Set9_Wanderer`,
		desc: `Ryze's spell changes depending on the Region Portal players voted for at the start of the game.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Wanderer.TFT_Set9.tex`,
		name: `Wanderer`,
	},
	{
		apiName: `Set9_BandleCity`,
		desc: `Your units gain @BonusAS*100@% Attack Speed per star level.<br><br>If you have three 3-star champions, your Yordles can become 4-star, which gives their Ability a wacky upgrade!<br><br><row>(@MinUnits@) Your strongest 3-star Yordle</row><br><row>(@MinUnits@) Two 3-star Yordles</row><br><br><rules>Ties for most items are broken by the Yordle fielded most recently.</rules>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusAS': 0.10000000149011612,
					'DodgeChance': 100,
					'DodgeDuration': 2,
					'ManaReduction': 15,
					'{25ec78e1}': 1,
					'{c235f1f1}': 0.5,
					'{eae1472b}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'BonusAS': 0.10000000149011612,
					'DodgeChance': 100,
					'DodgeDuration': 2,
					'ManaReduction': 15,
					'{25ec78e1}': 2,
					'{c235f1f1}': 0.5,
					'{eae1472b}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_6_Yordle.tex`,
		name: `Yordle`,
	},
	{
		apiName: `Set9_Zaun`,
		desc: `Zaun champions create random chem-mods that only they can use. Champions can be modded once, and mods can be removed by benching or selling the champion.<br><br><row>(@MinUnits@) Gain 1 chem-mod</row><br><row>(@MinUnits@) Gain 2 chem-mods </row><br><row>(@MinUnits@) Gain 3 chem-mods and Overcharge them</row><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{05b87026}': 1,
					'{dbf68e4f}': null,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'{05b87026}': 2,
					'{dbf68e4f}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'{05b87026}': 3,
					'{dbf68e4f}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_9_Zaun.TFT_Set9.tex`,
		name: `Zaun`,
	},
]