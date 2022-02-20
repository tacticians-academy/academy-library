import type { AugmentData } from '../../dist/index.js'

export function getAugmentNameKey(item: AugmentData) {
	if (item.name === 'Arcane Crest') {
		return 'Arcanist Crest'
	}
	return item.name.replace(/ I+$/, '')
}
