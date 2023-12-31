import type { AugmentData, ChampionData, ItemData, SetNumber } from '../../dist/index.js'
import type { GameResponseJSON } from './types'

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

export function getSetDataFrom(set: SetNumber, parentSet: SetNumber, responseJSON: GameResponseJSON) {
	if (responseJSON.setData) {
		const findSet = responseJSON.setData.find(data => {
			if (data.number !== parentSet || data.mutator == null || data.mutator.includes('TURBO')) return false

			return (set === parentSet) != (set >= 4 && data.mutator.endsWith('2'))
		})
		if (findSet) {
			return findSet
		}
	}
	return responseJSON.sets[parentSet]
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
