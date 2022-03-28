import { SetNumber } from '../dist/index.js'

export async function importAugments(set: SetNumber) {
	type Augments = typeof import('./set6.5/augments.js')
	if (set === 1) {
		return {} as Augments
	}
	if (set === 6) {
		return await import('./set6/augments.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/augments.js')
	}
	throw 'Unsupported set:' + set
}

export async function importAugmentTiers(set: SetNumber) {
	type AugmentTiers = typeof import('./set6.5/hardcoded/augment-tiers.js')
	if (set === 1) {
		return {} as AugmentTiers
	}
	if (set === 6) {
		return await import('./set6/hardcoded/augment-tiers.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/hardcoded/augment-tiers.js')
	}
	throw 'Unsupported set:' + set
}

export async function importChampions(set: SetNumber) {
	if (set === 1) {
		return await import('./set1/champions.js')
	}
	if (set === 6) {
		return await import('./set6/champions.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/champions.js')
	}
	throw 'Unsupported set:' + set
}

export async function importItems(set: SetNumber) {
	if (set === 1) {
		return await import('./set1/items.js')
	}
	if (set === 6) {
		return await import('./set6/items.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/items.js')
	}
	throw 'Unsupported set:' + set
}

export async function importSetData(set: SetNumber) {
	type SetData = typeof import('./set6.5/hardcoded/set-data.js')
	if (set === 1) {
		return await import('./set1/hardcoded/set-data.js') as SetData
	}
	if (set === 6) {
		return await import('./set6/hardcoded/set-data.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/hardcoded/set-data.js')
	}
	throw 'Unsupported set:' + set
}

export async function importTraits(set: SetNumber) {
	if (set === 1) {
		return await import('./set1/traits.js')
	}
	if (set === 6) {
		return await import('./set6/traits.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/traits.js')
	}
	throw 'Unsupported set:' + set
}
