const IS_MID_SET = true

import fetch from 'node-fetch'
import fs from 'fs/promises'
import process from 'process'

import { getCurrentSetNumber, githubTokenPath, importAugments, importItems, importTraits, importChampions, loadHardcodedTXT } from './helpers/files.js'
import { AugmentData, BonusKey, EffectVariables } from '../dist/types.js'

import { getAugmentNameKey } from './helpers/utils.js'

const githubToken = (await fs.readFile(githubTokenPath, 'utf8')).trim()

interface GithubIssueData {
	title: string,
	body: string,
	labels: string[],
	milestone: number,
}

async function createIssue(data: GithubIssueData) {
	try {
		// const repo = 'ky-is/TEST' //SAMPLE
		const repo = 'tacticians-academy/teamfight-simulator'
		const response = await fetch(`https://api.github.com/repos/${repo}/import/issues`, {
			method: 'POST',
			body: JSON.stringify({ issue: data }),
			headers: {
				'Authorization': `token ${githubToken}`,
				'Content-Type': 'application/json',
			},
		})

		if (response.ok) {
			const remainingString = response.headers.get('x-ratelimit-remaining')
			if (remainingString && remainingString.length === 1) {
				console.log('RATE LIMIT APPROACHING', response.headers)
				return false
			}
			console.log(data.title, await response.json())
		} else {
			const responseBody = await response.json()
			console.log(response.status, response.statusText, responseBody)
		}
	} catch (error) {
		console.log(error)
	}
	return true
}

const bonusKeyEntries = Object.values(BonusKey)

function getBulletEntriesFor(effectVariablesArray: (EffectVariables | null)[]) {
	const output: Record<string, (number | null | undefined)[]> = {}
	const effectVariablesRep = effectVariablesArray.find((effectVariables): effectVariables is EffectVariables => !!effectVariables)!
	for (const key in effectVariablesRep) {
		if (key.startsWith('{')) {
			continue
		}
		const outputKey = key.replace(/[1-4]Star/, '')
		output[outputKey] = effectVariablesArray.map(effectVariables => effectVariables?.[key] ?? null)
	}
	const outputEntries = Object.entries(output)
	return !outputEntries.length ? [] : outputEntries.map(([key, values]) => {
		const outputKey = bonusKeyEntries.includes(key.replace('Bonus', '') as BonusKey) ? `_${key}_` : key
		const outputValues = values.map(value => `\`${value}\``).join(' | ')
		return `${outputKey} | ${outputValues}`
	})
}

function formatBulletEntries(bullets: string[], labels: string[]) {
	return !bullets.length ? '' : `\nVariable | ${labels.join(' | ')}\n--- | ${labels.map(_ => '---').join(' | ')}` + bullets.map(line => `\n${line}`).join('')
}

// Set data

const milestoneIDForSetString: Record<string, number> = {
	'6.5': 1,
}

const currentSetNumber = await getCurrentSetNumber()
const setString = IS_MID_SET ? `${currentSetNumber}.5` : currentSetNumber.toString()
const milestone = milestoneIDForSetString[setString]
if (!milestone) {
	console.log('Unknown milestone', setString)
	process.exit(0)
}

const { AugmentGroupKey, activeAugments } = await importAugments(currentSetNumber)
const { ChampionKey, champions } = await importChampions(currentSetNumber)
const { TraitKey, traits } = await importTraits(currentSetNumber)
const { completedItems } = await importItems(currentSetNumber)

// Champions

for (const champion of champions) {
	if (champion.name !== ChampionKey.Alistar) { continue } //SAMPLE
	// const canContinue = await createIssue({
	// 	title: `${champion.name} ability`,
	// 	body: `Implement ${champion.name} ability`,
	// 	labels: [`Champion Ability`, `Set ${setString}`],
	// 	milestone,
	// })
	// if (!canContinue) {
	// 	break
	// }
	// break //SAMPLE
}

// Traits

for (const trait of traits) {
	// if (trait.name !== TraitKey.Hextech) { continue } //SAMPLE
	const bulletPoints = getBulletEntriesFor(trait.effects.map(effect => effect.variables))
	console.log(trait.name, bulletPoints)

	// const canContinue = await createIssue({
	// 	title: `${trait.name} trait`,
	// 	body: `Implement ${trait.name} trait` + formatBulletEntries(bulletPoints, ['.', '.', '.', '.', '.']),
	// 	labels: [`Trait`, `Set ${setString}`],
	// 	milestone,
	// })
	// if (!canContinue) {
	// 	break
	// }
	// break //SAMPLE
}

// Items

for (const item of completedItems) {
	const bulletPoints = getBulletEntriesFor([item.effects])
		.filter(bulletPoint => !bulletPoint.includes('Tooltip'))
	console.log(item.name, bulletPoints)

	// const canContinue = await createIssue({
	// 	title: `${item.name} item`,
	// 	body: `Implement ${item.name} item` + formatBulletEntries(bulletPoints, ['Value']),
	// 	labels: [`Item`, `Set ${setString}`],
	// 	milestone,
	// })
	// if (!canContinue) {
	// 	break
	// }
	// break //SAMPLE
}

// Augments

const emptyImplementationAugments = await loadHardcodedTXT(currentSetNumber, 'augments-empty')
if (emptyImplementationAugments) {
	const augmentGroups: Record<string, [AugmentData?, AugmentData?, AugmentData?]> = {}
	for (const augment of activeAugments) {
		if (!augmentGroups[augment.groupID]) {
			augmentGroups[augment.groupID] = []
		}
		augmentGroups[augment.groupID][augment.tier - 1] = augment
	}
	const outputAugmentGroups = Object.values(augmentGroups)//.map(group => group.filter((entry): entry is AugmentData => !!entry))
	for (const augmentGroup of outputAugmentGroups) {
		const augmentRep = augmentGroup.find(augment => !!augment)!
		// if (augmentRep.groupID !== AugmentGroupKey.CelestialBlessing) { continue } //SAMPLE
		if (emptyImplementationAugments.includes(augmentRep.groupID)) {
			continue
		}
		// if (!augmentRep.groupID.endsWith('Heart') && !augmentRep.groupID.endsWith('Soul')) {
		// 	continue
		// }
		if (augmentRep.groupID.endsWith('Crest') || augmentRep.groupID.endsWith('Crown')) {
			continue
		}
		const bulletPoints = getBulletEntriesFor(augmentGroup.map(augment => augment?.effects ?? {}))
			.filter(bulletPoint => !bulletPoint.includes('Tooltip'))
		console.log(augmentRep.groupID, augmentRep.desc, bulletPoints)
		const descriptions: string[] = []
		augmentGroup.forEach(augment => {
			if (augment && !descriptions.includes(augment.desc)) {
				descriptions.push(augment.desc)
			}
		})

		// const canContinue = await createIssue({
		// 	title: `${getAugmentNameKey(augmentRep)} augment`,
		// 	body: descriptions.join('\n').replaceAll('@', '`') + formatBulletEntries(bulletPoints, ['I', 'II', 'III']),
		// 	labels: [`Augment`],
		// 	milestone,
		// })
		// if (!canContinue) {
		// 	break
		// }
		// break //SAMPLE
	}
}
