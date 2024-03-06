import fs from 'fs/promises'

import { CURRENT_SET_NUMBER, SET_DATA, type ItemData, type SetNumber } from '../../dist/index.js'

import { getPathToPatch, getPathToSet } from '../helpers/files.js'
import type { GameResponseJSON, MapResponseJSON } from '../helpers/types.js'
import { getBaseUnitsFor, getSetDataFrom } from '../helpers/utils.js'

import { transformItems } from './transformItems.js'
import { transformAugments } from './transformAugments.js'
import { transformChampions } from './transformChampions.js'
import { transformTraits } from './transformTraits.js'
import { transformMap } from './transformMap.js'

export async function transformLoad(setNumber: SetNumber) {
	const parentSetNumber = Math.floor(setNumber) as SetNumber
	const patchLine = SET_DATA[setNumber].patchLine

	let gameResponseJSON: GameResponseJSON
	let mapResponseJSON: MapResponseJSON
	try {
		// const raw = await fs.readFile(getPathToPatch(patchLine, '.game.raw.json'), 'utf8')
		const rawGame = await fs.readFile(getPathToSet(setNumber, '.game.raw.json'), 'utf8')
		const rawMap = await fs.readFile(getPathToSet(setNumber, '.map.raw.json'), 'utf8')
		gameResponseJSON = JSON.parse(rawGame)
		mapResponseJSON = JSON.parse(rawMap)
	} catch (error) {
		console.log(error)
		throw 'Missing Set data. Erase the current Set directory and re-run `prepare`.'
	}
	const { champions, traits, mutator } = getSetDataFrom(setNumber, parentSetNumber, gameResponseJSON)
	const itemsData = (gameResponseJSON.items as ItemData[]).filter(item => item.name != null && (item.apiName == null || (!item.apiName.startsWith('TFTTutorial_') && !item.apiName.endsWith('_DU') && !item.apiName.endsWith('HR'))))

	const baseSet = gameResponseJSON.sets[CURRENT_SET_NUMBER]
	for (const apiName of getBaseUnitsFor(patchLine)) {
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
	const allTraitKeys = traits.map(t => t.apiName ?? t.name)

	const outputItemExports = await transformItems(setNumber, parentSetNumber, patchLine, itemsData, allTraitKeys)
	const outputAugmentSections = await transformAugments(setNumber, parentSetNumber, itemsData, allTraitKeys)
	const outputChampionExports = await transformChampions(setNumber, parentSetNumber, champions)

	if (outputAugmentSections) {
		await fs.writeFile(getPathToSet(setNumber, 'augments.ts'), outputAugmentSections.join('\n\n') + '\n')
	}
	await fs.writeFile(getPathToSet(setNumber, 'champions.ts'), outputChampionExports.join('\n\n') + '\n')
	await fs.writeFile(getPathToSet(setNumber, 'traits.ts'), `import type { TraitData } from '../index'\n\nexport const traits: TraitData[] = ${outputTraitData}\n`)
	await fs.writeFile(getPathToSet(setNumber, 'items.ts'), `import type { ItemData } from '../index'\n\n${outputItemExports.join('\n\n')}\n`)

	const mutatorName = mutator ?? `TFTSet${parentSetNumber}`
	const outputMap = await transformMap(setNumber, parentSetNumber, mutatorName, mapResponseJSON)
	if (outputMap) {
		await fs.writeFile(getPathToSet(setNumber, 'map.ts'), outputMap.join('\n\n') + '\n')
	}
}
