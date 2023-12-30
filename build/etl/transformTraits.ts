import type { SetNumber, TraitData } from '../../dist/index.js'

import { formatJS } from '../helpers/formatting.js'
import { normalizeEffects, NORMALIZE_EFFECT_KEYS, SUBSTITUTE_EFFECT_KEYS } from '../helpers/normalize.js'
import { sortByName } from '../helpers/utils.js'

export async function transformTraits(setNumber: SetNumber, parentSetNumber: SetNumber, traitsData: TraitData[]) {
	const unreplacedIDs = new Set(Object.keys(SUBSTITUTE_EFFECT_KEYS))
	traitsData.sort(sortByName)

	traitsData.forEach(trait => {
		for (const normalize in NORMALIZE_EFFECT_KEYS) {
			trait.desc = trait.desc.replaceAll(normalize, NORMALIZE_EFFECT_KEYS[normalize])
		}
		trait.effects.forEach((effect, index) => {
			if (effect.style == null) {
				effect.style = index + 1
			}
			normalizeEffects(effect.variables, unreplacedIDs)
		})
	})
	return formatJS(traitsData)
}
