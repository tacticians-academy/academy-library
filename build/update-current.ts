import { SET_DATA } from '../dist/index.js'

import { updateSet } from './etl/index.js'
import { getLatestSetNumberFrom } from './etl/extract.js'

await updateSet(getLatestSetNumberFrom(SET_DATA))
