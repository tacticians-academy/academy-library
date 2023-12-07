import { SET_DATA } from '../dist/index.js'

import { updateSet } from './etl/index.js'

// await Promise.all(Object.keys(SET_DATA).map(setNumber => updateSet(parseFloat(setNumber))))
for (const setNumber in SET_DATA) {
	await updateSet(parseFloat(setNumber))
}
