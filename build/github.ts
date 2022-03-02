const IS_MID_SET = true

import fetch from 'node-fetch'
import fs from 'fs/promises'

import { getCurrentSetNumber, importChampions, githubTokenPath } from './helpers/files.js'

const milestoneIDForSetString: Record<string, number> = {
	'6.5': 1,
}

const githubToken = (await fs.readFile(githubTokenPath, 'utf8')).trim()

const currentSetNumber = await getCurrentSetNumber()
const setString = IS_MID_SET ? `${currentSetNumber}.5` : currentSetNumber.toString()
const milestone = milestoneIDForSetString[setString]

const { champions } = await importChampions(currentSetNumber)

for (const champion of champions) {
	// if ([].includes(champion.name)) {
	// 	continue
	// }
	if (!milestone) {
		console.log('Unknown milestone', setString)
		break
	}
	const data = {
		issue: {
			title: `${champion.name} ability`,
			body: `Implement ${champion.name} ability`,
			labels: [`Champion Ability`, `Set ${setString}`],
			milestone,
		},
	}

	try {
		const repo = 'tacticians-academy/teamfight-simulator'
		const response = await fetch(`https://api.github.com/repos/${repo}/import/issues`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Authorization': `token ${githubToken}`,
				'Content-Type': 'application/json',
			},
		})

		if (response.ok) {
			const remainingString = response.headers.get('x-ratelimit-remaining')
			if (remainingString && remainingString.length === 1) {
				console.log('RATE LIMIT APPROACHING', response.headers)
				break
			}
			console.log(champion.name, await response.json())
		} else {
			const responseBody = await response.json()
			console.log(response.status, response.statusText, responseBody)
		}
	} catch (error) {
		console.log(error)
	}
	// break //SAMPLE
}
