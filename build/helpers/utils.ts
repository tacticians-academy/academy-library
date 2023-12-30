import type { AugmentData, ChampionData, ItemData, SetNumber } from '../../dist/index.js'
import type { ResponseJSON } from './types'

export function getAugmentNameKey(item: AugmentData | ItemData) {
	if (item.name === 'Arcane Crest') {
		return 'Arcanist Crest'
	}
	return item.name.replace(/ I+$/, '')
}

export function getAPIName(champion: ChampionData) {
	if (champion.apiName != null) { return champion.apiName }
	const matches = champion.icon.match(/.*\/(.+?).dds/)
	const prefix = matches![1].split('_')[0]
	return `${prefix}_${champion.name.replaceAll(/['. ]/g, '')}`
}

export function removeSymbols(raw: string) {
	return raw.replaceAll(/['.:+\-!,]/g, '')
}

export function getSetDataFrom(set: SetNumber, parentSet: SetNumber, responseJSON: ResponseJSON) {
	return set === 9.5 ? responseJSON.setData[0] : responseJSON.sets[parentSet]
}

export function validateTraits(item: ItemData, allTraitKeys: string[]) {
	const traits = (item.associatedTraits?.length ?? 0) ? item.associatedTraits : item.incompatibleTraits
	if (traits) {
		for (const trait of traits) {
			if (!allTraitKeys.includes(trait)) {
				return false
			}
		}
	}
	return true
}

export function sortByName(a: {name: string}, b: {name: string}) {
	return a.name.localeCompare(b.name)
}
