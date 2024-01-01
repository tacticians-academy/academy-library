import { SET_DATA } from '../dist/index.js'

import { updateSet } from './etl/index.js'
import { getLatestSetNumberFrom } from './etl/extract.js'

// const currentSetNumber = 3 //SAMPLE
const currentSetNumber = getLatestSetNumberFrom(SET_DATA)
await updateSet(currentSetNumber)
