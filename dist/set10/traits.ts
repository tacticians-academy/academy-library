import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set10_8Bit`,
		desc: `Keep score of your team's damage dealt. For each high score you beat, 8-bit champions gain Attack&nbsp;Damage.<br><br><row>(@MinUnits@) @AD@% %i:scaleAD%</row><br><row>(@MinUnits@) @AD@% %i:scaleAD%</row><br><row>(@MinUnits@) @AD@% %i:scaleAD% and unlock a final high score, that rewards you with a grand prize.</row><br><br>Bonus: @TFTUnitProperty.trait:TFT10_Trait_8bit_CurrentBonus@% %i:scaleAD% (@TFTUnitProperty.trait:TFT10_Trait_8bit_StackCount@/@NumHighScores@)`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AD': 4.5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'AD': 7.5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'AD': 12,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_8Bit.TFT_Set10.tex`,
		name: `8-bit`,
	},
	{
		apiName: `Set10_Deadeye`,
		desc: `Big Shots gain Attack Damage, which increases for @Duration@ seconds when they use their Ability.<br><br><expandRow>(@MinUnits@) @PercentAD*100@% %i:scaleAD%, @PercentADEmpowered*100@% after casting</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'PercentAD': 0.10000000149011612,
					'{4ce8f18b}': 0.4000000059604645,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'PercentAD': 0.15000000596046448,
					'{4ce8f18b}': 0.6000000238418579,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'PercentAD': 0.25,
					'{4ce8f18b}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_BigShot.TFT_Set10.tex`,
		name: `Big Shot`,
	},
	{
		apiName: `Set10_Breakout`,
		desc: `(unique) Akali is a member of K/DA or True Damage depending on which trait has more fielded champions. She gains a different Ability depending on which form she takes. `,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Breakout.TFT_Set10.tex`,
		name: `Breakout`,
	},
	{
		apiName: `Set10_Brawler`,
		desc: `Your team gains @TeamFlatHP@ HP. Bruisers gain bonus max HP.<br><br><expandRow>(@MinUnits@) @BonusPercentHP*100@% max %i:scaleHP%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusPercentHP': 0.20000000298023224,
					'TeamFlatHP': 100,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusPercentHP': 0.44999998807907104,
					'TeamFlatHP': 100,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusPercentHP': 0.8500000238418579,
					'TeamFlatHP': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Brawler.tex`,
		name: `Bruiser`,
	},
	{
		apiName: `Set10_Country`,
		desc: `When your team loses @HPRatio*100@% of their HP, call a Dreadsteed that empowers your team. Each Country star&nbsp;level increases the Dreadsteed's HP and Attack&nbsp;Damage.<br><br><row>(@MinUnits@) Dreadsteed</row><br><row>(@MinUnits@) Midnight Dreadsteed</row><br><row>(@MinUnits@) Infernal Invocation Dreadsteed</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusResists': null,
					'Level': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 4,
				variables: {
					'BonusResists': 20,
					'Level': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 4,
				variables: {
					'BonusResists': 60,
					'Level': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Country.TFT_Set10.tex`,
		name: `Country`,
	},
	{
		apiName: `Set10_CrowdDive`,
		desc: `After Crowd Divers die, they leap onto the furthest enemy, dealing <magicDamage>@JumpDamage@</magicDamage> magic damage. Enemies within @StunRange@ hex are Stunned for @StunDuration@ seconds.<br><br>They also deal bonus damage, increased by @BonusPerSecond*100@% each second.<br><br><expandRow>(@MinUnits@) @BaseBonus*100@% bonus damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{a5be9a7f}': 0.05000000074505806,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'{a5be9a7f}': 0.30000001192092896,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{a5be9a7f}': 0.6000000238418579,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_CrowdDiver.TFT_Set10.tex`,
		name: `Crowd Diver`,
	},
	{
		apiName: `Set10_Dazzler`,
		desc: `Dazzlers' Abilities reduce their target's damage by @DamageDecrease*100@% and deal bonus magic damage over @Duration@ seconds.<br><br><expandRow>(@MinUnits@) <magicDamage>@DOTPercent*100@%</magicDamage> magic damage</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Duration': 2,
					'{80cf3c31}': 0.20000000298023224,
					'{bca0d684}': 0.15000000596046448,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'Duration': 2,
					'{80cf3c31}': 0.6000000238418579,
					'{bca0d684}': 0.15000000596046448,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'Duration': 2,
					'{80cf3c31}': 1,
					'{bca0d684}': 0.15000000596046448,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Dazzler.tex`,
		name: `Dazzler`,
	},
	{
		apiName: `Set10_Funk`,
		desc: `Summon a movable Disco Ball. <br><br>Combat start: Allies next to it gain Attack Speed and healing immediately and every @TickRate@ seconds.<br><br><row>(@MinUnits@) @AS*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHP%</row><br><row>(@MinUnits@) @AS*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHP%</row><br><row>(@MinUnits@) 2 Disco Balls, @AS*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHP%</row><br><row>(@MinUnits@) @AS*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHP%</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {
					'AS': 0.05000000074505806,
					'Healing': 0.019999999552965164,
					'{11b35e1c}': 1,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'AS': 0.10000000149011612,
					'Healing': 0.029999999329447746,
					'{11b35e1c}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'AS': 0.15000000596046448,
					'Healing': 0.029999999329447746,
					'{11b35e1c}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'AS': 0.20000000298023224,
					'Healing': 0.05000000074505806,
					'{11b35e1c}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Funk.TFT_Set10.tex`,
		name: `Disco`,
	},
	{
		apiName: `Set10_Edgelord`,
		desc: `Edgelords gain Attack Speed, which doubles when their target drops below @HPRatio*100@% HP. Edgelords with 1-hex range also dash through them on their next&nbsp;attack. <br><br><expandRow>(@MinUnits@) @AS*100@% %i:scaleAS%</expandRow><br>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'AS': 0.30000001192092896,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'AS': 0.44999998807907104,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 4,
				variables: {
					'AS': 0.699999988079071,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Edgelord.TFT_Set10.tex`,
		name: `Edgelord`,
	},
	{
		apiName: `Set10_EDM`,
		desc: `Use the EDM selector item to choose an EDM champion and see the frequency for each.<br><br>At the selected champion's frequency, your EDM champions cast the selected Ability with modified effectiveness.<br><br><row>(@MinUnits@) @EDMstats*100@% effectiveness</row><br><row>(@MinUnits@) @EDMstats*100@% effectiveness</row><br><row>(@MinUnits@) @EDMstats*100@% effectiveness, -@EDMtimereduction@ second</row><br><row>(@MinUnits@) @EDMstats*100@% effectiveness, -@EDMtimereduction@ seconds</row>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{50d03f4e}': 0.800000011920929,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {
					'{50d03f4e}': 0.8999999761581421,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'{50d03f4e}': 1,
					'{78f8ea27}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'{50d03f4e}': 1.2000000476837158,
					'{78f8ea27}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_EDM.TFT_Set10.tex`,
		name: `EDM`,
	},
	{
		apiName: `Set10_Emo`,
		desc: `Emo champions' Abilities cost less Mana to cast, and they gain Mana whenever an allied champion dies.<br><br><row>(@MinUnits@) @InitialMana@%&nbsp;less, gain @StackingMana@&nbsp;%i:scaleMana%</row><br><row>(@MinUnits@) @InitialMana@%&nbsp;less, gain @StackingMana@&nbsp;%i:scaleMana%</row><br><row>(@MinUnits@) @BonusAP@&nbsp;%i:scaleAP%; @InitialMana@% less, gain @StackingMana@&nbsp;%i:scaleMana% </row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{d5032a3e}': 10,
					'{fbc36e44}': 20,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'{d5032a3e}': 20,
					'{fbc36e44}': 25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusAP': 20,
					'{d5032a3e}': 25,
					'{fbc36e44}': 30,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_BigSad.TFT_Set10.tex`,
		name: `Emo`,
	},
	{
		apiName: `Set10_Executioner`,
		desc: `Executioner Abilities can critically strike and they gain Critical Strike Damage. Their Critical Strike Chance is increased based on their target's missing HP.<br><br><expandRow>(@MinUnits@) @CRIT_DAMAGE*100@% %i:scaleCritMult%. Up to @CRIT_PERCENT*100@% %i:scaleCrit%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{b22e2df3}': 0.05000000074505806,
					'{c009a26f}': 0.15000000596046448,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{b22e2df3}': 0.25,
					'{c009a26f}': 0.3499999940395355,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{b22e2df3}': 0.44999998807907104,
					'{c009a26f}': 0.550000011920929,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Executioner.tex`,
		name: `Executioner`,
	},
	{
		apiName: `Set10_Guardian`,
		desc: `Once per combat at @PercentHPThreshold@% HP, Guardians shield themselves and their closest ally for a percent of their max HP.<br><br><expandRow>(@MinUnits@) @ShieldPercentAmount@%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'PercentHPThreshold': 50,
					'ShieldPercentAmount': 25,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'PercentHPThreshold': 50,
					'ShieldPercentAmount': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'PercentHPThreshold': 50,
					'ShieldPercentAmount': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_7_Guardian.tex`,
		name: `Guardian`,
	},
	{
		apiName: `Set10_PopBand`,
		desc: `Earn Hearts by killing enemies. Gain even more by losing player combat. Every @RoundCount@ player combats, convert Hearts into powerful rewards! <br><br><row>(@MinUnits@) @PercentHeartRate@x Hearts</row><br><row>(@MinUnits@) @PercentHeartRate@x Hearts</row><br><row>(@MinUnits@) @PercentHeartRate@x Hearts</row><br><row>(@MinUnits@) @PercentHeartRate@x Hearts, Gain rewards every round and keep @HeartKeepPercentage*100@% of your Hearts!</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{7e97c18b}': null,
					'{97244f72}': null,
					'{b91d171c}': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'{7e97c18b}': null,
					'{97244f72}': null,
					'{b91d171c}': 2.5,
				},
			},
			{
				maxUnits: 9,
				minUnits: 7,
				style: 4,
				variables: {
					'{7e97c18b}': null,
					'{97244f72}': null,
					'{b91d171c}': 6,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 10,
				style: 5,
				variables: {
					'{7e97c18b}': 1,
					'{97244f72}': 0.800000011920929,
					'{b91d171c}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Heartsteel.TFT_Set10.tex`,
		name: `Heartsteel`,
	},
	{
		apiName: `Set10_Hyperpop`,
		desc: `When Hyperpop champions use an Ability, they grant Mana and @BuffDuration@ seconds of Attack Speed to their @NumOfAllies@ closest allies.<br><br><expandRow>(@MinUnits@) @Mana@ %i:scaleMana% and @AS*100@% %i:scaleAS%</expandRow>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'AS': 0.10000000149011612,
					'Mana': 3,
				},
			},
			{
				maxUnits: 2,
				minUnits: 2,
				style: 4,
				variables: {
					'AS': 0.20000000298023224,
					'Mana': 5,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 4,
				variables: {
					'AS': 0.3499999940395355,
					'Mana': 7,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'AS': 0.6000000238418579,
					'Mana': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Hyperpop.TFT_Set10.tex`,
		name: `Hyperpop`,
	},
	{
		apiName: `Set10_IllBeats`,
		desc: `(unique) Gain @1Star@/@2Star@/@3Star@ placeable Spirit Tentacles, based on Illaoi's star level. Tentacles gain Illaoi's bonus Armor and Magic Resist.`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 6,
				variables: {
					'{3710b88a}': 8,
					'{a2ff8b24}': 2,
					'{aea98661}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_ILLBeats.TFT_Set10.tex`,
		name: `ILLBEATS`,
	},
	{
		apiName: `Set10_Jazz`,
		desc: `For each active trait (except uniques), your team gains bonus HP and deals bonus damage.<br><br><expandRow>(@MinUnits@) @BonusHP*100@% %i:scaleHP%, @BonusDamage*100@% Damage</expandRow><br><br>Bonus HP: @TFTUnitProperty.trait:TFT10_Trait_Jazz_TraitTracker_CurrentBonus@%<br>Bonus Damage: @TFTUnitProperty.trait:TFT10_Trait_Jazz_TraitTracker_CurrentBonus_Damage@%`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusDamage': 0.009999999776482582,
					'BonusHP': 0.014999999664723873,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'BonusDamage': 0.014999999664723873,
					'BonusHP': 0.019999999552965164,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusDamage': 0.019999999552965164,
					'BonusHP': 0.029999999329447746,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Jazz.TFT_Set10.tex`,
		name: `Jazz`,
	},
	{
		apiName: `Set10_KDA`,
		desc: `Your team gains max HP, Ability Power, and Attack Damage if they are in a lighted hex. K/DA champions gain double!<br><br><row>(@MinUnits@) @BonusMaxHP*100@% max %i:scaleHP%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) @BonusMaxHP*100@% max %i:scaleHP%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) @BonusMaxHP*100@% max %i:scaleHP%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) @BonusMaxHP*100@% max %i:scaleHP%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%, @ManaPerSecond@ mana per second </row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'BonusAP': 10,
					'BonusMaxHP': 0.10000000149011612,
					'ManaPerSecond': null,
					'{158db106}': 2,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'BonusAP': 15,
					'BonusMaxHP': 0.15000000596046448,
					'ManaPerSecond': null,
					'{158db106}': 2,
				},
			},
			{
				maxUnits: 9,
				minUnits: 7,
				style: 4,
				variables: {
					'BonusAP': 22,
					'BonusMaxHP': 0.2199999988079071,
					'ManaPerSecond': null,
					'{158db106}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 10,
				style: 5,
				variables: {
					'BonusAP': 50,
					'BonusMaxHP': 0.5,
					'ManaPerSecond': 10,
					'{158db106}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_KDA.TFT_Set10.tex`,
		name: `K/DA`,
	},
	{
		apiName: `Set10_Classical`,
		desc: `(unique) The Maestro always attacks at a fixed pace, converting @BonusAS@% bonus Attack Speed into @BonusAD@% Attack Damage. `,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {
					'BonusAD': 0.699999988079071,
					'BonusAS': 1,
					'{3c4f17cb}': 0.8999999761581421,
					'{48d42308}': 2,
					'{7fd29f41}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Classical.TFT_Set10.tex`,
		name: `Maestro`,
	},
	{
		apiName: `Set10_DJ`,
		desc: `(unique) Choose a mode that changes the Mixmaster's attacks and Ability!`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_DJ.TFT_Set10.tex`,
		name: `Mixmaster`,
	},
	{
		apiName: `Set10_Fighter`,
		desc: `Moshers gain Attack Speed and <TFTKeyword>Omnivamp</TFTKeyword>, which increases up to @AmountIncrease*100@% based on their missing HP. <br><br><expandRow>(@MinUnits@) @FighterAS@% %i:scaleAS%, @FighterVamp@% Omnivamp </expandRow><br><br><rules>Omnivamp: Heal for percentage of damage dealt</rules>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{ad27681e}': 20,
					'{c771aaaa}': 10,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{ad27681e}': 30,
					'{c771aaaa}': 15,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{ad27681e}': 50,
					'{c771aaaa}': 20,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Mosher.TFT_Set10.tex`,
		name: `Mosher`,
	},
	{
		apiName: `Set10_Pentakill`,
		desc: `Pentakill champions reduce incoming damage by 15% and deal bonus damage. For each champon kill, a Pentakill champion rocks out and increases their damage bonus by @Kill_Bonus*100@%.<br><br>On the @Kill_Count@th kill, all Pentakill champions rock out and your team gains @Attack_Speed*100@% Attack Speed.<br><br><row>(@MinUnits@) @Bonus_Damage*100@% bonus damage</row><br><row>(@MinUnits@) @Bonus_Damage*100@% bonus damage</row><br><row>(@MinUnits@) @Bonus_Damage*100@% bonus damage</row><br><row>(@MinUnits@) 50% damage reduction and @Bonus_Damage*100@% bonus damage</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{0082059a}': 0.15000000596046448,
					'{72ce596c}': 0.15000000596046448,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'{0082059a}': 0.15000000596046448,
					'{72ce596c}': 0.30000001192092896,
				},
			},
			{
				maxUnits: 9,
				minUnits: 7,
				style: 4,
				variables: {
					'{0082059a}': 0.15000000596046448,
					'{72ce596c}': 0.44999998807907104,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 10,
				style: 5,
				variables: {
					'{0082059a}': 0.5,
					'{72ce596c}': 1.100000023841858,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Pentakill.TFT_Set10.tex`,
		name: `Pentakill`,
	},
	{
		apiName: `Set10_PunkRock`,
		desc: `Punks gain bonus HP and Attack Damage, which increases by 1% every time you spend gold on a Shop reroll.<br><br>After Punks fight in combat, your 1st Shop reroll costs 1 gold and grants @FIRST_ROLL_BONUS@% bonus instead!<br><br><expandRow>(@MinUnits@) @BONUS_HEALTH@ %i:scaleHP% and @BONUS_AD_AP*100@% %i:scaleAD%</expandRow><br><br>Current Bonus: @TFTUnitProperty.trait:TFT10_Punk_CurrentBonus@%<br>@TFTUnitProperty.trait:TFT10_Punk_CurrentHPBonus@ %i:scaleHP% and @TFTUnitProperty.trait:TFT10_Punk_CurrentADBonus@% %i:scaleAD%`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{a3869f33}': 170,
					'{f6501cf8}': 0.17000000178813934,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'{a3869f33}': 280,
					'{f6501cf8}': 0.2800000011920929,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{a3869f33}': 420,
					'{f6501cf8}': 0.41999998688697815,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Punk.TFT_Set10.tex`,
		name: `Punk`,
	},
	{
		apiName: `Set10_Quickshot`,
		desc: `Your team gains @TeamwideAS*100@% Attack Speed.<br><br>Rapidfire champions gain more on every attack, up to @MaxStacks@ stacks.<br><br><expandRow>(@MinUnits@) @PercentAS*100@% %i:scaleAS%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MaxStacks': 10,
					'{ec3d43d6}': 0.03999999910593033,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'MaxStacks': 10,
					'{ec3d43d6}': 0.07000000029802322,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'MaxStacks': 10,
					'{ec3d43d6}': 0.11999999731779099,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Rapidfire.TFT_Set10.tex`,
		name: `Rapidfire`,
	},
	{
		apiName: `Set10_Sentinel`,
		desc: `Your team gains Armor and Magic Resist. Sentinels gain double.<br><br><expandRow>(@MinUnits@) @BonusArmor@ %i:scaleArmor%, @BonusArmor@ %i:scaleMR%</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusArmor': 16,
					'{a624ed1a}': 32,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusArmor': 35,
					'{a624ed1a}': 70,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusArmor': 60,
					'{a624ed1a}': 120,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 4,
				variables: {
					'BonusArmor': 125,
					'{a624ed1a}': 250,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Warden.TFT_Set10.tex`,
		name: `Sentinel`,
	},
	{
		apiName: `Set10_Spellweaver`,
		desc: `Your team gains @TeamwideAP@ Ability Power. Spellweavers gain more, plus extra Ability Power whenever a Spellweaver casts an Ability.<br><br><expandRow>(@MinUnits@) +@AP@ %i:scaleAP%, +@BonusAP@ %i:scaleAP% per cast</expandRow>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'AP': 20,
					'BonusAP': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'AP': 35,
					'BonusAP': 1,
				},
			},
			{
				maxUnits: 9,
				minUnits: 7,
				style: 4,
				variables: {
					'AP': 60,
					'BonusAP': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 10,
				style: 5,
				variables: {
					'AP': 120,
					'BonusAP': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_5_Sorcerer.tex`,
		name: `Spellweaver`,
	},
	{
		apiName: `Set10_Superfan`,
		desc: `Superfans improve your Headliner!<br><br><row> (@MinUnits@) Headliner gets a completed item</row><br><row> (@MinUnits@) Headliner gets @HPBonus@ %i:scaleHP% and @OmnivampBonus*100@% <TFTKeyword>Omnivamp</TFTKeyword></row><br><row> (@MinUnits@) Item upgrades to radiant</row><br><br><rules>Omnivamp: Heal for percentage of damage dealt</rules>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Superfan.TFT_Set10.tex`,
		name: `Superfan`,
	},
	{
		apiName: `Set10_TrueDamage`,
		desc: `True Damage champions deal bonus true damage. If they are holding an item, they gain a unique Bling Bonus for their Ability.<br><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage</row><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage</row><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage</row><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage, Bling Bonuses go&nbsp;Platinum!</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{72ce596c}': 0.15000000596046448,
					'{744944d9}': 1,
					'{d1eaafe0}': null,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{72ce596c}': 0.30000001192092896,
					'{744944d9}': 1,
					'{d1eaafe0}': null,
				},
			},
			{
				maxUnits: 8,
				minUnits: 6,
				style: 4,
				variables: {
					'{72ce596c}': 0.44999998807907104,
					'{744944d9}': 1,
					'{d1eaafe0}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'{72ce596c}': 1.25,
					'{744944d9}': 1,
					'{d1eaafe0}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_TrueDamage.TFT_Set10.tex`,
		name: `True Damage`,
	},
	{
		apiName: `Set10_TwoSides`,
		desc: `(unique) If you win player combat, Kayn becomes the Shadow Assassin. If not, he becomes Rhaast. You receive a reward based on his form every time he kills @NumOfKills@ enemy champions. <br><br><TFTBonus enabled=TFT10_WildcardShadowAssassin alternate=rules>Shadow Assassin: @AssassinGoldPerKill@g</TFTBonus><br><TFTBonus enabled=TFT10_WildcardRhaast alternate=rules>Rhaast: @RhaastPlayerHPPerKill@ player HP</TFTBonus>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 6,
				variables: {
					'{4e56df0d}': 3,
					'{72ccc5a0}': 1,
					'{f18bef8b}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_10_Wildcard.TFT_Set10.tex`,
		name: `Wildcard`,
	},
]
