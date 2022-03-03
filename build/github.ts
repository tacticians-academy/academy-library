const IS_MID_SET = true

import fetch from 'node-fetch'
import fs from 'fs/promises'

import { getCurrentSetNumber, githubTokenPath, importTraits, importChampions } from './helpers/files.js'
import { BonusKey } from '../dist/types.js'

const githubToken = (await fs.readFile(githubTokenPath, 'utf8')).trim()

interface GithubIssueData {
	title: string,
	body: string,
	labels: string[],
	milestone: number,
}

async function createIssue(data: GithubIssueData) {
	try {
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

const milestoneIDForSetString: Record<string, number> = {
	'6.5': 1,
}

const currentSetNumber = await getCurrentSetNumber()
const setString = IS_MID_SET ? `${currentSetNumber}.5` : currentSetNumber.toString()
const milestone = milestoneIDForSetString[setString]

const { champions } = await importChampions(currentSetNumber)
const { traits } = await importTraits(currentSetNumber)

for (const champion of champions) {
	// if ([].includes(champion.name)) { continue }
	if (!milestone) {
		console.log('Unknown milestone', setString)
		break
	}
	const canContinue = await createIssue({
		title: `${champion.name} ability`,
		body: `Implement ${champion.name} ability`,
		labels: [`Champion Ability`, `Set ${setString}`],
		milestone,
	})
	if (!canContinue) {
		break
	}
	// break //SAMPLE
}

const bonusKeyEntries = Object.values(BonusKey)

for (const trait of traits) {
	if (!milestone) {
		console.log('Unknown milestone', setString)
		break
	}
	const bulletPoints = Array.from(new Set(trait.effects.flatMap(effect => Object.keys(effect.variables))))
		.filter(key => {
			return !key.startsWith('{') && !bonusKeyEntries.includes(key.replace('Bonus', '') as BonusKey)
		})
	console.log(trait.name, bulletPoints)

	const canContinue = await createIssue({
		title: `${trait.name} trait`,
		body: `Implement ${trait.name} trait` + bulletPoints.map(line => `\n- ${line}`).join(''),
		labels: [`Trait`, `Set ${setString}`],
		milestone,
	})
	if (!canContinue) {
		break
	}
	// break //SAMPLE
}
