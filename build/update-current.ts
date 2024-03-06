import { SET_DATA } from '../dist/index.js'

import { updateSet } from './etl/index.js'
import { getLatestSetNumberFrom } from './etl/extract.js'

// await updateSet(3.5, true) //SAMPLE

const currentSetNumber = getLatestSetNumberFrom(SET_DATA)
for (const key in SET_DATA) {
	const setNumber = parseFloat(key)
	if (setNumber === currentSetNumber || isNaN(parseFloat(SET_DATA[key].patchLine))) {
		await updateSet(setNumber, false)
	}
}
