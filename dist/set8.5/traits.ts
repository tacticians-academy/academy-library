import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set8_Admin`,
		desc: `A.D.M.I.N. programs a custom configuration per player each game.<br><br><row>(@MinUnits@) [Initialize ADMIN cause and effect]</row><br><row>(@MinUnits@) [Add another effect to the program]. Boost all tiers by @4Tooltip@%</row><br><row>(@MinUnits@) Boost previous tiers by @6Tooltip@%</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'4Tooltip': 25,
					'6Tooltip': 100,
					'{fefec6fb}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'4Tooltip': 25,
					'6Tooltip': 100,
					'{fefec6fb}': 1.25,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'4Tooltip': 25,
					'6Tooltip': 100,
					'{fefec6fb}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_ADMIN.tex`,
		name: `A.D.M.I.N.`,
	},
	{
		apiName: `Set8_Ace`,
		desc: `This Trait is active only when you have exactly 1 or 4 unique Aces.<br><br><expandRow>(@MinUnits@) Aces execute enemies they damage under @ExecuteThreshhold@% HP </expandRow><br><br>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'ExecuteThreshhold': 15,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'ExecuteThreshhold': 33,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Ace.tex`,
		name: `Ace`,
	},
	{
		apiName: `Set8_Aegis`,
		desc: `Your team gains bonus Magic Resist, and Aegis units gain more.<br><br><expandRow>(@MinUnits@) +@MR@ Magic Resist, +@AegisMR@ for Aegis</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'AegisMR': 40,
					'MR': 20,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'AegisMR': 80,
					'MR': 40,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'AegisMR': 120,
					'MR': 60,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 5,
				variables: {
					'AegisMR': 180,
					'MR': 90,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Aegis.tex`,
		name: `Aegis`,
	},
	{
		apiName: `Set8_AnimaSquad`,
		desc: `Anima Squad members pose after champion kills, increasing their fame. Each point of fame grants @HPPerStack@ permanent HP to each Anima Squad member.<br><br>They also gain:<br><expandRow>(@MinUnits@) @InitialAD@% Attack Damage and @InitialAP@ Ability Power</expandRow><br><br>Total fame: @TFTUnitProperty.trait:TFT8_AnimaFameStacks@<br>Bonus HP: @TFTUnitProperty.trait:TFT8_AnimaFameHP@`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'HPPerStack': 5,
					'InitialAD': 15,
					'InitialAP': 15,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 4,
				variables: {
					'HPPerStack': 5,
					'InitialAD': 35,
					'InitialAP': 35,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 5,
				variables: {
					'HPPerStack': 5,
					'InitialAD': 60,
					'InitialAP': 60,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_AnimaSquad.tex`,
		name: `Anima Squad`,
	},
	{
		apiName: `Set8_Brawler`,
		desc: `Brawlers gain additional maximum HP.<br><br><expandRow>(@MinUnits@) +@BonusPercentHP*100@% maximum HP</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusPercentHP': 0.20000000298023224,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusPercentHP': 0.44999998807907104,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusPercentHP': 0.699999988079071,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'BonusPercentHP': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Brawler.tex`,
		name: `Brawler`,
	},
	{
		apiName: `Set8_Corrupted`,
		desc: `(@MinUnits@) Combat start: Lie dormant while absorbing the souls of allies that die. Gain @BonusAP@ Ability Power for each soul.<br><br>Once per combat at @HPThreshold@% HP (or when your team has died), come alive and fight.`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 4,
				variables: {
					'BonusAP': 40,
					'HPThreshold': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Corrupted.tex`,
		name: `Corrupted`,
	},
	{
		apiName: `Set8_Defender`,
		desc: `Your team gains bonus Armor, and Defenders gain more. <br><br><expandRow> (@MinUnits@) +@BonusArmor@ Armor, +@DefenderBonusArmor@ for Defenders</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusArmor': 25,
					'DefenderBonusArmor': 50,
					'HexRadius': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BonusArmor': 70,
					'DefenderBonusArmor': 140,
					'HexRadius': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'BonusArmor': 180,
					'DefenderBonusArmor': 360,
					'HexRadius': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Defender.tex`,
		name: `Defender`,
	},
	{
		apiName: `Set8_Duelist`,
		desc: `Innate: Increased movement speed.<br><br>Duelists' attacks grant bonus Attack Speed, up to @MaxStacks@ stacks.<br><br><row> (@MinUnits@) +@AAPerStack@% Attack Speed per stack</row><br><row> (@MinUnits@) +@AAPerStack@% Attack Speed per stack</row><br><row> (@MinUnits@) +@AAPerStack@% Attack Speed per stack; Duelists take @DRPercent@% less damage</row><br><row> (@MinUnits@) +@AAPerStack@% Attack Speed per stack; Duelists take @DRPercent@% less damage</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AAPerStack': 5,
					'DRPercent': null,
					'MaxStacks': 12,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AAPerStack': 8,
					'DRPercent': null,
					'MaxStacks': 12,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'AAPerStack': 10,
					'DRPercent': 10,
					'MaxStacks': 12,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'AAPerStack': 16,
					'DRPercent': 20,
					'MaxStacks': 12,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_4_Duelist.tex`,
		name: `Duelist`,
	},
	{
		apiName: `Set8_Forecaster`,
		desc: `Depending on the weather, The Forecaster grants a different bonus to adjacent allies. The weather changes every game. `,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 4,
				variables: {
					'RainyManaTier1': 20,
					'RainyManaTier2': 40,
					'RainyManaTier3': 100,
					'SunnyDurationTier1': 10,
					'SunnyDurationTier2': 10,
					'SunnyDurationTier3': 45,
					'SunnyHPShieldTier1': 400,
					'SunnyHPShieldTier2': 600,
					'SunnyHPShieldTier3': 2000,
					'WindyBonusTier1': 8,
					'WindyBonusTier2': 15,
					'WindyBonusTier3': 99,
					'WindyRefresh': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Forecaster.tex`,
		name: `Forecaster`,
	},
	{
		apiName: `Set8_GenAE`,
		desc: `Each round, Gadgeteens create random modified weapons with powerful effects that fall apart after one round. Gadgeteens also gain Damage and Damage Reduction for each item equipped to them.<br><br><row>(@MinUnits@) Create @ItemsToMake@ item, @Itembuff@% per item.</row><br><row>(@MinUnits@) Create @ItemsToMake@ items, @Itembuff@% per item.</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'Itembuff': 4,
					'ItemsToMake': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'Itembuff': 8,
					'ItemsToMake': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Gadgeteens.tex`,
		name: `Gadgeteen`,
	},
	{
		apiName: `Set8_Hacker`,
		desc: `Hackers gain <TFTKeyword>Omnivamp</TFTKeyword> and summon a H4ckerr!m. Any unit placed in the rider hex will be sent to the enemy backline and is untargetable for the first @SecondsUntargetable@ seconds of combat.<br><br><row>(@MinUnits@) +@Omnivamp*100@% Omnivamp for Hackers</row><br><row>(@MinUnits@) +@Omnivamp*100@% Omnivamp for Hackers, +@Horsevamp*100@% for the rider</row><br><row>(@MinUnits@) +@Omnivamp*100@% Omnivamp for Hackers, +@Horsevamp*100@% for the rider</row><br><br><tftitemrules><tftbold>Omnivamp</tftbold>: heal for some of damage dealt</tftitemrules>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {
					'Horsevamp': null,
					'Omnivamp': 0.10000000149011612,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'Horsevamp': 0.15000000596046448,
					'Omnivamp': 0.20000000298023224,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 5,
				variables: {
					'Horsevamp': 0.30000001192092896,
					'Omnivamp': 0.4000000059604645,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Hacker.tex`,
		name: `Hacker`,
	},
	{
		apiName: `Set8_Heart`,
		desc: `When Heart units cast their Ability, your team gains stacking Ability Power for the rest of combat.<br><br><expandRow>(@MinUnits@) +@APPerCast@ Ability Power</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'APPerCast': 4,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'APPerCast': 7,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'APPerCast': 11,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Heart.tex`,
		name: `Heart`,
	},
	{
		apiName: `Set8_Pulsefire`,
		desc: `The InfiniTeam opens a portal to an alternate timeline. At the start of combat, any InfiniTeam unit placed on a portal summons an alternate version of themself with different items. They get 1 for each Augment you own. <br><br><tftitemrules>The copies have reduced HP and damage.</tftitemrules><br><br><row>(@MinUnits@) @NumberOfPortals@ portal opens, @DamageReduction@% damage and @PercentHP@% HP</row><br><row>(@MinUnits@) @NumberOfPortals@ portals open, @DamageReduction@% damage and @PercentHP@% HP</row><br><row>(@MinUnits@) @NumberOfPortals@ portals open, @DamageReduction@% damage and @PercentHP@% HP</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'DamageReduction': 45,
					'NumberOfPortals': 1,
					'PercentHP': 45,
					'{0a967788}': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 4,
				variables: {
					'DamageReduction': 50,
					'NumberOfPortals': 2,
					'PercentHP': 50,
					'{0a967788}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 5,
				variables: {
					'DamageReduction': 85,
					'NumberOfPortals': 2,
					'PercentHP': 85,
					'{0a967788}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_InfiniTeam.TFT_Set8_Stage2.tex`,
		name: `InfiniTeam`,
	},
	{
		apiName: `Set8_SpaceCorps`,
		desc: `When a LaserCorp agent attacks or is hit by an attack, their drone deals magic damage to the agent's target (@ICD@ second cooldown). Drones are reassigned to another champion with a drone when the agent dies.<br><br>Drone lasers deal:<br><row>(@MinUnits@) @MagicDamage@ magic damage</row><br><row>(@MinUnits@) @MagicDamage@ magic damage AND all champions get a drone.</row><br><row>(@MinUnits@) @MagicDamage@ magic damage.  </row> <br><row>(@MinUnits@) @MagicDamage@ magic damage.  </row><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 27,
					'{1b0b983d}': 1,
					'{2ba800f8}': null,
					'{59d091e2}': 1,
					'{fc833ad7}': null,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 35,
					'{1b0b983d}': 1,
					'{2ba800f8}': 1,
					'{59d091e2}': 1,
					'{fc833ad7}': null,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 55,
					'{1b0b983d}': 1,
					'{2ba800f8}': 1,
					'{59d091e2}': 1,
					'{fc833ad7}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 80,
					'{1b0b983d}': 1,
					'{2ba800f8}': 1,
					'{59d091e2}': 1,
					'{fc833ad7}': null,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Lasercorps.tex`,
		name: `LaserCorps`,
	},
	{
		apiName: `Set8_Mascot`,
		desc: `Your team heals a percentage of their maximum HP every @Seconds@ seconds, and Mascots heal double the amount.<br><br>When Mascots die, they retreat to the sidelines to cheer on your team. Your team's healing increases by @HPRegenPerMascot@% for each cheering Mascot.<br><br><expandRow>(@MinUnits@) @BaseHPRegen@% healing</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BaseHPRegen': 1.5,
					'HPRegenPerMascot': 1,
					'Seconds': 2,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'BaseHPRegen': 3,
					'HPRegenPerMascot': 1,
					'Seconds': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'BaseHPRegen': 6,
					'HPRegenPerMascot': 1,
					'Seconds': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Mascot.tex`,
		name: `Mascot`,
	},
	{
		apiName: `Set8_ExoPrime`,
		desc: `Use the Mecha selector item to choose a PRIME.<br><br>Combat start: The PRIME combines with the 2 nearest Mecha, absorbing @HPPercent@% of their Base HP.<br><br><row>(@MinUnits@) The PRIME gains @APAmount@ Ability Power and @ADPercent@% Attack Damage</row><br><row>(@MinUnits@) All Mechas gain @APAmount@ Ability Power and @ADPercent@% Attack Damage; the PRIME gains double this amount</row>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'ADPercent': 60,
					'APAmount': 60,
					'HPPercent': 90,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'ADPercent': 55,
					'APAmount': 55,
					'HPPercent': 90,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_MechaPrime.tex`,
		name: `Mecha:PRIME`,
	},
	{
		apiName: `Set8_OxForce`,
		desc: `Ox Force units gain bonus defenses. Once per combat, when they would drop below one health, they instead shield themselves for @ShieldPercent@% of their maximum health for @Duration@ seconds.<br><br><expandRow>(@MinUnits@) @Defenses@ Armor and Magic Resist,</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'Defenses': 5,
					'Duration': 1.5,
					'ShieldPercent': 50,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'Defenses': 35,
					'Duration': 1.5,
					'ShieldPercent': 50,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'Defenses': 75,
					'Duration': 1.5,
					'ShieldPercent': 50,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_OxForce.tex`,
		name: `Ox Force`,
	},
	{
		apiName: `Set8_Parallel`,
		desc: `(@MinUnits@) Ezreal learns from his older, more handsome self and joins him in future adventures. <br><br>Ezreal's Ability becomes a blast that hits all enemies in a line. <br><br>Ultimate Ezreal's Ability summons two additional temporal duplicates. `,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 4,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Parallel.TFT_Set8_Stage2.tex`,
		name: `Parallel`,
	},
	{
		apiName: `Set8_Prankster`,
		desc: `<row>(@MinUnits@) Once per combat at @HPThreshold@% HP, Pranksters spawn a target dummy, move to a safe location, and restore @HPRegen@ HP. </row><br><row>(@MinUnits@) And, Prankster dummies stun the enemy that killed them for @StunDuration@ seconds.</row><br><row>(@MinUnits@) The HP restore is increased to @HPRegen@ HP and the stun duration becomes @StunDuration@ seconds.</row><br>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'HPRegen': 150,
					'HPThreshold': 50,
					'StunDuration': null,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 4,
				variables: {
					'HPRegen': 150,
					'HPThreshold': 50,
					'StunDuration': 1.5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 5,
				variables: {
					'HPRegen': 350,
					'HPThreshold': 50,
					'StunDuration': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Prankster.tex`,
		name: `Prankster`,
	},
	{
		apiName: `Set8_GunMage`,
		desc: `After every 2 damaging ability projectiles, Quickdraw units fire a bonus ability projectile. Bonus shots deal:<br><br><row>(@MinUnits@) @DamageModifier*100@% total damage. </row><br><row>(@MinUnits@) @DamageModifier*100@% total damage. </row><br><row>(@MinUnits@) @DamageModifier*100@% total damage. </row>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'DamageModifier': 0.699999988079071,
					'{f71c4cde}': 2,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'DamageModifier': 1.5,
					'{f71c4cde}': 2,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'DamageModifier': 2.3499999046325684,
					'{f71c4cde}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Quickdraw.TFT_Set8_Stage2.tex`,
		name: `Quickdraw`,
	},
	{
		apiName: `Set8_Renegade`,
		desc: `Renegade units deal bonus damage, and the last one standing deals more.<br><br><expandRow>(@MinUnits@) @BasePercentBonusDamage@% bonus damage, extra @AdditionalBonusDamage@% for last alive</expandRow><br>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'AdditionalBonusDamage': 20,
					'BasePercentBonusDamage': 25,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'AdditionalBonusDamage': 30,
					'BasePercentBonusDamage': 40,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 4,
				variables: {
					'AdditionalBonusDamage': 40,
					'BasePercentBonusDamage': 70,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Renegade.tex`,
		name: `Renegade`,
	},
	{
		apiName: `Set8_Riftwalker`,
		desc: `<row>(@MinUnits@) Riftwalkers open a gap between dimensions and summon their ally Zac, who grows in power based on the total star level of Riftwalkers.<br><br>Zac gains the last-listed Trait of the closest Riftwalker.</row>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'ZacBloblets': null,
					'ZacBlobletsHPPercent': 50,
					'{0fe50a20}': 175,
					'{39fb128d}': 12,
					'{770acddd}': 1,
					'{e29392c2}': 1.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Riftwalker.TFT_Set8_Stage2.tex`,
		name: `Riftwalker`,
	},
	{
		apiName: `Set8_Channeler`,
		desc: `Every @RefreshSeconds@ seconds, Spellslinger's next attack instead fires a magic orb at a random target, which explodes for @MagicDamage@% Ability Power as magic damage.<br><br>Spellslingers gain:<br><row>(@MinUnits@) +@AP@ Ability Power</row><br><row>(@MinUnits@) +@AP@ Ability Power</row><br><row>(@MinUnits@) +@AP@ Ability Power</row><br><row>(@MinUnits@) +@AP@ Ability Power, and orbs deal @MagicDamage@% Ability Power</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AP': 25,
					'MagicDamage': 50,
					'RefreshSeconds': 5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AP': 45,
					'MagicDamage': 50,
					'RefreshSeconds': 5,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'AP': 70,
					'MagicDamage': 50,
					'RefreshSeconds': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'AP': 110,
					'MagicDamage': 100,
					'RefreshSeconds': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Spellslinger.tex`,
		name: `Spellslinger`,
	},
	{
		apiName: `Set8_StarGuardian`,
		desc: `Star Guardians gain more Mana in combat. <br><br><expandRow>(@MinUnits@) @AdditionalManaPercentage@% Mana</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'AdditionalManaPercentage': 30,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AdditionalManaPercentage': 60,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'AdditionalManaPercentage': 100,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'AdditionalManaPercentage': 175,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_StarGuardian.tex`,
		name: `Star Guardian`,
	},
	{
		apiName: `Set8_Supers`,
		desc: `<row>(@MinUnits@) Combat start: Strike a pose that grants your team @BaseBonusDamage@% bonus damage, which increases by @BonusDamagePer3Star@% for every 3-star champion on your team.</row><br><br>Bonus damage: @TFTUnitProperty.trait:TFT8_Supers_TotalBonusDamage@%<br>`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'BaseBonusDamage': 18,
					'BonusDamagePer3Star': 3,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Supers.tex`,
		name: `Supers`,
	},
	{
		apiName: `Set8_Deadeye`,
		desc: `Combat start: Sureshots gain bonus Attack Damage now, and every @Frequency@ seconds.<br><br><expandRow>(@MinUnits@) +@BonusAD*100@% Attack Damage</expandRow>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAD': 0.07000000029802322,
					'Frequency': 4,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'BonusAD': 0.11999999731779099,
					'Frequency': 4,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusAD': 0.18000000715255737,
					'Frequency': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 5,
				variables: {
					'BonusAD': 0.25,
					'Frequency': 4,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Sureshot.tex`,
		name: `Sureshot`,
	},
	{
		apiName: `Set8_Threat`,
		desc: `Threats do not have a Trait bonus, but instead have powerful Abilities and increased base stats.`,
		effects: [
			{
				maxUnits: 25000,
				minUnits: 1,
				style: 1,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Threat.tex`,
		name: `Threat`,
	},
	{
		apiName: `Set8_UndergroundThe`,
		desc: `The Underground must sneak through the sewers after each player combat and crack @RoundCount@ locks to open a vault. When the vault opens, you may choose to take the loot now, or attempt another heist for even better rewards.<br><br><expandRow>(@MinUnits@) @WinProgress@ locks per win, @LossProgress@ per loss</expandRow><br><br>Current Heist Level: @TFTUnitProperty.trait:TFT8_Underground_CurrentStage@<br><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 3,
				style: 1,
				variables: {
					'LossProgress': 3,
					'LossProgressHR': 6,
					'RoundCount': 10,
					'RoundCountDU': 20,
					'WinProgress': 2,
					'WinProgressHR': 4,
					'{c3eb3e44}': null,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'LossProgress': 4,
					'LossProgressHR': 8,
					'RoundCount': 10,
					'RoundCountDU': 20,
					'WinProgress': 2,
					'WinProgressHR': 4,
					'{c3eb3e44}': null,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'LossProgress': 5,
					'LossProgressHR': 10,
					'RoundCount': 10,
					'RoundCountDU': 20,
					'WinProgress': 3,
					'WinProgressHR': 6,
					'{c3eb3e44}': null,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'LossProgress': 7,
					'LossProgressHR': 14,
					'RoundCount': 10,
					'RoundCountDU': 20,
					'WinProgress': 4,
					'WinProgressHR': 8,
					'{c3eb3e44}': null,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Underground.tex`,
		name: `Underground`,
	},
]
