import { TraitKey } from '../index.js'
import type { TraitData } from '../index'

export const traits: TraitData[] = [
	{
		apiName: `Set8_Admin`,
		desc: `A.D.M.I.N. programs a custom configuration per player each game.<br><br><row>(@MinUnits@) [Initialize ADMIN cause and effect]</row><br><row>(@MinUnits@) [Add another effect to the program]. Boost all tiers by @4tooltip@%</row><br><row>(@MinUnits@) Boost previous tiers by @6Tooltip@%</row>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'{2a683ea4}': 100,
					'{dd2627f2}': 30,
					'{fefec6fb}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'{2a683ea4}': 100,
					'{dd2627f2}': 30,
					'{fefec6fb}': 1.2999999523162842,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'{2a683ea4}': 100,
					'{dd2627f2}': 30,
					'{fefec6fb}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_ADMIN.tex`,
		name: `A.D.M.I.N.`,
	},
	{
		apiName: `Set8_Ace`,
		desc: `This Trait is active only when you have exactly 1 or 4 unique Aces.<br><br><expandRow>(@MinUnits@) Execute enemies under @ExecuteThreshhold@% HP </expandRow><br><br>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'{e63d763f}': 15,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'{e63d763f}': 30,
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
					'MR': 20,
					'{8c9a056d}': 40,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'MR': 40,
					'{8c9a056d}': 80,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 4,
				variables: {
					'MR': 60,
					'{8c9a056d}': 120,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 5,
				variables: {
					'MR': 90,
					'{8c9a056d}': 180,
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
					'{054d3a66}': 10,
					'{194d59e2}': 10,
					'{40376e4e}': 5,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 4,
				variables: {
					'{054d3a66}': 35,
					'{194d59e2}': 35,
					'{40376e4e}': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 7,
				style: 5,
				variables: {
					'{054d3a66}': 60,
					'{194d59e2}': 60,
					'{40376e4e}': 5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_AnimaSquad.tex`,
		name: `Anima Squad`,
	},
	{
		apiName: `Set8_Arsenal`,
		desc: `(@MinUnits@) When deploying the Arsenal champion, players may choose which weapon he will equip.`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 4,
				variables: {},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Arsenal.tex`,
		name: `Arsenal`,
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
					'{a92bb347}': 0.20000000298023224,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{a92bb347}': 0.44999998807907104,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'{a92bb347}': 0.75,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'{a92bb347}': 1.100000023841858,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_3_Brawler.tex`,
		name: `Brawler`,
	},
	{
		apiName: `Set8_Civilian`,
		desc: `If there is a Civilian alive, your team is inspired to protect them by gaining Mana every @Seconds@ seconds.<br><br><expandRow>(@MinUnits@) +@ManaRegen@ Mana</expandRow>`,
		effects: [
			{
				maxUnits: 1,
				minUnits: 1,
				style: 1,
				variables: {
					'{66b6cdea}': 2,
					'ManaRegen': 2,
				},
			},
			{
				maxUnits: 2,
				minUnits: 2,
				style: 3,
				variables: {
					'{66b6cdea}': 2,
					'ManaRegen': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'{66b6cdea}': 2,
					'ManaRegen': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Civilian.tex`,
		name: `Civilian`,
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
					'HPThreshold': 70,
					'BonusAP': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Corrupted.tex`,
		name: `Corrupted`,
	},
	{
		apiName: `Set8_Defender`,
		desc: `Innate: <TFTKeyword>Taunt</TFTKeyword> nearby enemies after the start of combat.<br><br>Your team gains bonus Armor, and Defenders gain more. <br><br><expandRow> (@MinUnits@) +@BonusArmor@ Armor, +@DefenderBonusArmor@ for Defenders</expandRow><br><br><tftitemrules><tftbold>Taunt</tftbold>: enemies that are able and in range must attack the taunter</tftitemrules>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusArmor': 30,
					'HexRadius': 1,
					'{830398ac}': 60,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusArmor': 80,
					'HexRadius': 1,
					'{830398ac}': 160,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'BonusArmor': 200,
					'HexRadius': 1,
					'{830398ac}': 400,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Defender.tex`,
		name: `Defender`,
	},
	{
		apiName: `Set8_Duelist`,
		desc: `Innate: Increased movement speed.<br><br>Duelists' attacks grant bonus Attack Speed, up to @MaxStacks@ stacks.<br><br><expandRow> (@MinUnits@) +@AAPerStack@% Attack Speed per stack</expandRow><br>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MaxStacks': 12,
					'{43afcd64}': 5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'MaxStacks': 12,
					'{43afcd64}': 9,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'MaxStacks': 12,
					'{43afcd64}': 15,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'MaxStacks': 12,
					'{43afcd64}': 24,
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
					'{18727ad0}': 8,
					'{1a727df6}': 99,
					'{1b727f89}': 15,
					'{59983c1c}': 2000,
					'{5a983daf}': 600,
					'{5b983f42}': 400,
					'{c4d287f1}': 5,
					'{d3255094}': 20,
					'{d52553ba}': 100,
					'{d625554d}': 40,
					'{e412bacb}': 10,
					'{e512bc5e}': 10,
					'{e612bdf1}': 45,
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
					'{7d4d3a93}': 3,
					'{e3f67a80}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'{7d4d3a93}': 10,
					'{e3f67a80}': 2,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Gadgeteens.tex`,
		name: `Gadgeteen`,
	},
	{
		apiName: `Set8_Hacker`,
		desc: `Hackers gain <TFTKeyword>Omnivamp</TFTKeyword> and summon a H4ckerr!m. Any unit placed in the rider hex will be sent to the enemy backline and is untargetable for the first @SecondsUntargetable@ seconds of combat.<br><br><expandRow>(@MinUnits@) @Omnivamp*100@% Omnivamp</expandRow><br><br><tftitemrules><tftbold>Omnivamp</tftbold>: heal for some of damage dealt</tftitemrules>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'OmniVamp': 0.15000000596046448,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 4,
				variables: {
					'OmniVamp': 0.4000000059604645,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 5,
				variables: {
					'OmniVamp': 0.699999988079071,
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
					'{ebcfdef4}': 4,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{ebcfdef4}': 7,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 4,
				variables: {
					'{ebcfdef4}': 10,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Heart.tex`,
		name: `Heart`,
	},
	{
		apiName: `Set8_SpaceCorps`,
		desc: `When a LaserCorp agent attacks or is hit by an attack, their combat drone deals magic damage to the agent's target (@ICD@ second cooldown). When a LaserCorp agent dies, their drone is reassigned to the nearest living agent. <br><br>Drone lasers deal:<br><row>(@MinUnits@) @MagicDamage@ magic damage</row><br><row>(@MinUnits@) @MagicDamage@ magic damage</row><br><row>(@MinUnits@) @MagicDamage@ magic damage</row><br><row>(@MinUnits@) @MagicDamage@ magic damage, and each agent gets a 2nd drone</row><br><br>Drone damage last round: @TFTUnitProperty.trait:TFT8_Lasercorps_DamageTRAKey@ magic damage<br><br>`,
		effects: [
			{
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 25,
					'{59d091e2}': 1,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 45,
					'{59d091e2}': 1,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 80,
					'{59d091e2}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'ICD': 0.4000000059604645,
					'MagicDamage': 99,
					'{59d091e2}': 1,
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
					'{66b6cdea}': 2,
					'{a576b894}': 1,
					'{d1ba07df}': 1.5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'{66b6cdea}': 2,
					'{a576b894}': 1,
					'{d1ba07df}': 3,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'{66b6cdea}': 2,
					'{a576b894}': 1,
					'{d1ba07df}': 6,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'{66b6cdea}': 2,
					'{a576b894}': 1,
					'{d1ba07df}': 10,
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
					'HPPercent': 100,
					'{b19c3b58}': 60,
					'{bc3d5e29}': 60,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 5,
				style: 4,
				variables: {
					'HPPercent': 90,
					'{b19c3b58}': 55,
					'{bc3d5e29}': 55,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_MechaPrime.tex`,
		name: `Mecha:PRIME`,
	},
	{
		apiName: `Set8_OxForce`,
		desc: `Ox Force units gain a range of Attack Speed that ramps as they lose HP. Once per combat, when they would drop below one HP, they instead go to one HP and become immune to damage for @Seconds@ second.<br><br><expandRow>(@MinUnits@) @MinAS@% - @MaxAS@% Attack Speed</expandRow>`,
		effects: [
			{
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'MaxAS': 30,
					'{21c0601a}': 15,
					'{66b6cdea}': 1,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'MaxAS': 80,
					'{21c0601a}': 40,
					'{66b6cdea}': 1,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'MaxAS': 150,
					'{21c0601a}': 75,
					'{66b6cdea}': 1,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'MaxAS': 300,
					'{21c0601a}': 150,
					'{66b6cdea}': 1,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_OxForce.tex`,
		name: `Ox Force`,
	},
	{
		apiName: `Set8_Prankster`,
		desc: `<row>(@MinUnits@) Once per combat at @HPThreshold@% HP, Pranksters spawn a target dummy, move to a safe location, and restore @HPRegen@ HP. </row><br><row>(@MinUnits@) And, Prankster dummies stun the enemy that killed them for @StunDuration@ seconds.</row><br>`,
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
				maxUnits: 25000,
				minUnits: 3,
				style: 4,
				variables: {
					'HPRegen': 150,
					'HPThreshold': 50,
					'StunDuration': 1.5,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Prankster.tex`,
		name: `Prankster`,
	},
	{
		apiName: `Set8_Recon`,
		desc: `Innate: Gain @BonusRange@ hex Attack Range.<br><br>If there is an enemy nearby, Recon units will dash to safety before casting their Ability.<br><br><row>(@MinUnits@) +@CritChance@% Crit Chance </row><br><row>(@MinUnits@) +@CritChance@% Crit Chance </row><br><row>(@MinUnits@) +@CritChance@% Crit Chance and Recon Abilities can critically strike</row>`,
		effects: [
			{
				maxUnits: 2,
				minUnits: 2,
				style: 1,
				variables: {
					'{14d754d9}': null,
					'{53d67ad0}': 1500,
					'CritChance': 20,
				},
			},
			{
				maxUnits: 3,
				minUnits: 3,
				style: 3,
				variables: {
					'{14d754d9}': null,
					'{53d67ad0}': 1500,
					'CritChance': 75,
				},
			},
			{
				maxUnits: 999,
				minUnits: 4,
				style: 4,
				variables: {
					'{14d754d9}': 1,
					'{53d67ad0}': 1500,
					'CritChance': 100,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Recon.tex`,
		name: `Recon`,
	},
	{
		apiName: `Set8_Renegade`,
		desc: `Renegade units deal bonus damage, and the last one standing deals more.<br><br><expandRow>(@MinUnits@) @BasePercentBonusDamage@% bonus damage, extra @AdditionalBonusDamage@% for last alive</expandRow><br>`,
		effects: [
			{
				maxUnits: 5,
				minUnits: 3,
				style: 4,
				variables: {
					'{bac31d49}': 35,
					'{bf647962}': 20,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'{bac31d49}': 60,
					'{bf647962}': 40,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Renegade.tex`,
		name: `Renegade`,
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
					'{b258b089}': 5,
				},
			},
			{
				maxUnits: 5,
				minUnits: 4,
				style: 3,
				variables: {
					'AP': 60,
					'MagicDamage': 50,
					'{b258b089}': 5,
				},
			},
			{
				maxUnits: 7,
				minUnits: 6,
				style: 4,
				variables: {
					'AP': 95,
					'MagicDamage': 50,
					'{b258b089}': 5,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 8,
				style: 5,
				variables: {
					'AP': 140,
					'MagicDamage': 150,
					'{b258b089}': 5,
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
				maxUnits: 4,
				minUnits: 3,
				style: 1,
				variables: {
					'{da19ba33}': 40,
				},
			},
			{
				maxUnits: 6,
				minUnits: 5,
				style: 3,
				variables: {
					'{da19ba33}': 70,
				},
			},
			{
				maxUnits: 8,
				minUnits: 7,
				style: 4,
				variables: {
					'{da19ba33}': 120,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 9,
				style: 5,
				variables: {
					'{da19ba33}': 200,
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
					'{d5eeac4e}': 18,
					'{fb280f31}': 3,
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
				maxUnits: 3,
				minUnits: 2,
				style: 1,
				variables: {
					'BonusAD': 0.05999999865889549,
					'Frequency': 4,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 4,
				style: 4,
				variables: {
					'BonusAD': 0.1599999964237213,
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
					'{0fd23285}': 3,
					'{17ca944d}': 20,
					'{719c3fca}': 10,
					'{7a9b83d2}': 2,
					'{8b564fff}': 6,
					'{c3eb3e44}': null,
					'{f8038ef4}': 4,
				},
			},
			{
				maxUnits: 4,
				minUnits: 4,
				style: 3,
				variables: {
					'{0fd23285}': 4,
					'{17ca944d}': 20,
					'{719c3fca}': 10,
					'{7a9b83d2}': 2,
					'{8b564fff}': 8,
					'{c3eb3e44}': null,
					'{f8038ef4}': 4,
				},
			},
			{
				maxUnits: 5,
				minUnits: 5,
				style: 4,
				variables: {
					'{0fd23285}': 5,
					'{17ca944d}': 20,
					'{719c3fca}': 10,
					'{7a9b83d2}': 3,
					'{8b564fff}': 10,
					'{c3eb3e44}': null,
					'{f8038ef4}': 6,
				},
			},
			{
				maxUnits: 25000,
				minUnits: 6,
				style: 5,
				variables: {
					'{0fd23285}': 7,
					'{17ca944d}': 20,
					'{719c3fca}': 10,
					'{7a9b83d2}': 4,
					'{8b564fff}': 14,
					'{c3eb3e44}': null,
					'{f8038ef4}': 8,
				},
			},
		],
		icon: `ASSETS/UX/TraitIcons/Trait_Icon_8_Underground.tex`,
		name: `Underground`,
	},
]
