import fs from 'fs/promises'

import type { ItemData, SetNumber } from '../../dist/index.js'

import { getPathToPatch, getPathToSet } from '../helpers/files.js'
import { BASE_UNIT_API_NAMES } from '../helpers/normalize.js'
import type { ResponseJSON } from '../helpers/types.js'
import { getSetDataFrom } from '../helpers/utils.js'

import { transformItems } from './transformItems.js'
import { transformAugments } from './transformAugments.js'
import { transformChampions } from './transformChampions.js'
import { transformTraits } from './transformTraits.js'

export async function transformLoad(setNumber: SetNumber) {
	const parentSetNumber = Math.floor(setNumber) as SetNumber
	// const patchLine = SET_DATA[setNumber].patchLine

	let responseJSON: ResponseJSON
	try {
		// const raw = await fs.readFile(getPathToPatch(patchLine, '.game.raw.json'), 'utf8')
		const raw = await fs.readFile(getPathToSet(setNumber, '.game.raw.json'), 'utf8')
		responseJSON = JSON.parse(raw)
	} catch (error) {
		console.log(error)
		throw 'Missing Set data. Erase the current Set directory and re-run `prepare`.'
	}
	const { champions, traits } = getSetDataFrom(setNumber, parentSetNumber, responseJSON)
	const itemsData = (responseJSON.items as ItemData[]).filter(item => item.name != null && (item.apiName == null || (!item.apiName.startsWith('TFTTutorial_') && !item.apiName.endsWith('_DU') && !item.apiName.endsWith('HR'))))

	const baseSet = responseJSON.sets['1']
	for (const apiName of BASE_UNIT_API_NAMES) {
		if (!champions.some(champion => champion.apiName === apiName)) {
			const baseUnit = baseSet.champions.find(champion => champion.apiName === apiName)
			if (baseUnit) {
				champions.push(baseUnit)
			} else {
				console.error('ERR', 'No base unit', apiName)
			}
		}
	}

	const outputTraitData = await transformTraits(setNumber, parentSetNumber, traits)
	const allTraitKeys = traits.map(t => t.apiName)

	const outputItemExports = await transformItems(setNumber, parentSetNumber, itemsData, allTraitKeys)
	const outputAugmentSections = await transformAugments(setNumber, parentSetNumber, itemsData, allTraitKeys)
	const outputChampionExports = await transformChampions(setNumber, parentSetNumber, champions)

	if (outputAugmentSections) {
		await fs.writeFile(getPathToSet(setNumber, 'augments.ts'), outputAugmentSections.join('\n\n'))
	}
	await fs.writeFile(getPathToSet(setNumber, 'champions.ts'), `import type { ChampionData } from '../index'\n\n${outputChampionExports.join('\n\n')}\n`)
	await fs.writeFile(getPathToSet(setNumber, 'traits.ts'), `import { TraitKey } from '../index.js'\nimport type { TraitData } from '../index'\n\nexport const traits: TraitData[] = ${outputTraitData}\n`)
	await fs.writeFile(getPathToSet(setNumber, 'items.ts'), `import type { ItemData } from '../index'\n\n${outputItemExports.join('\n\n')}\n`)
}
