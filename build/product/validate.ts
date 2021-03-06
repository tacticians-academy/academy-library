import type { AugmentData, AugmentTierProbability } from '../../dist/index'
import { importAugments, importAugmentTiers } from '../../dist/imports.js'

import { getCurrentSetNumber, loadHardcodedTXT } from '../helpers/files.js'
import { getAugmentNameKey } from '../helpers/utils.js'

const currentSetNumber = await getCurrentSetNumber()

const { activeAugments, inactiveAugments } = await importAugments(currentSetNumber)

if (activeAugments != null) {
	console.log('\n')
	const knownAugmentNames = await loadHardcodedTXT(currentSetNumber, 'augments-known')
	if (knownAugmentNames) {
		const remainingKnownAugmentNames = new Set(knownAugmentNames.map(line => line.toLowerCase()))
		const foundAugmentNames = activeAugments.map(augment => augment.name.toLowerCase())
		const remainingFoundAugmentNames = new Set(foundAugmentNames)
		for (const foundName of foundAugmentNames) {
			if (remainingKnownAugmentNames.delete(foundName)) {
				remainingFoundAugmentNames.delete(foundName)
			}
		}
		if (remainingKnownAugmentNames.size || remainingFoundAugmentNames.size) {
			console.log('Augments missing', remainingKnownAugmentNames, remainingFoundAugmentNames)
		}
	}

	const uniqueActiveAugments: Record<string, [AugmentData | undefined, AugmentData | undefined, AugmentData | undefined]> = {}
	activeAugments.forEach(augment => {
		if (!augment.tier) {
			console.log(augment)
			return
		}
		const nameKey = getAugmentNameKey(augment)
		if (uniqueActiveAugments[nameKey] === undefined) {
			uniqueActiveAugments[nameKey] = [undefined, undefined, undefined]
		}
		if (uniqueActiveAugments[nameKey][augment.tier - 1]) {
			console.log('Multiple augments at tier', augment, uniqueActiveAugments[nameKey][augment.tier - 1])
		}
		uniqueActiveAugments[nameKey][augment.tier - 1] = augment
	})
	const uniqueActiveAugmentNames = Object.keys(uniqueActiveAugments)
	console.log('Augments Active:', activeAugments.length, '/', 'Unique:', uniqueActiveAugmentNames.length, '/', 'Unreleased:', inactiveAugments.length)

	const { augmentTierProbabilities } = await importAugmentTiers(currentSetNumber)

	recursiveCheckTiers(augmentTierProbabilities)
}

function recursiveCheckTiers(tier: AugmentTierProbability) {
	const children = tier[1]
	if (!children) {
		return
	}
	const sum = children.reduce((acc, child) => acc + child[0], 0)
	if (sum !== 100) {
		throw `Invalid augment tier probability total: ${sum}, ` + JSON.stringify(children)
	}
	return children.forEach(recursiveCheckTiers)
}
