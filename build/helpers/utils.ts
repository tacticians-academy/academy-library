import type { AugmentData, ChampionData, ItemData } from '../../dist/index.js'

export function getAugmentNameKey(item: AugmentData | ItemData) {
	if (item.name === 'Arcane Crest') {
		return 'Arcanist Crest'
	}
	return item.name.replace(/ I+$/, '')
}

export function getAPIName(champion: ChampionData) {
	if (champion.apiName) { return champion.apiName }
	const matches = champion.icon.match(/.*\/(.+?).dds/)
	const prefix = matches![1].split('_')[0]
	return `${prefix}_${champion.name.replaceAll(/['. ]/g, '')}`
}
