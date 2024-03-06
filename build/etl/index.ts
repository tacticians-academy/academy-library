import type { SetNumber } from '../../dist/index.js'

import { extractLatestPatchFor } from './extract.js'
import { transformLoad } from './transform-load.js'
import { createFlashcardsFor } from '../product/flashcards.js'
import { validate } from '../product/validate.js'

export async function updateSet(setNumber: SetNumber, forceUpdate: boolean) {
	console.log('Update Set', setNumber)
	await extractLatestPatchFor(setNumber, forceUpdate)
	await transformLoad(setNumber)
	await validate(setNumber)
	await createFlashcardsFor(setNumber)
	console.log('Completed Set', setNumber)
}
