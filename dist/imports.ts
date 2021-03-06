import { SetNumber } from '../dist/index.js'

export async function importAugments(set: SetNumber) {
	if (set < 6) {
		type Augments = typeof import('./set6.5/augments.js')
		return {} as Augments
	}
	if (set === 6) {
		return await import('./set6/augments.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/augments.js')
	}
	if (set === 7) {
		return await import('./set6.5/augments.js')
		// return await import('./set7/augments.js')
	}
	throw 'Unsupported set:' + set
}

export async function importAugmentTiers(set: SetNumber) {
	if (set < 6) {
		type AugmentTiers = typeof import('./set6.5/hardcoded/augment-tiers.js')
		return {} as AugmentTiers
	}
	if (set === 6) {
		return await import('./set6/hardcoded/augment-tiers.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/hardcoded/augment-tiers.js')
	}
	if (set === 7) {
		return await import('./set7/hardcoded/augment-tiers.js')
	}
	throw 'Unsupported set:' + set
}

export async function importChampions(set: SetNumber) {
	if (set === 1) {
		return await import('./set1/champions.js')
	}
	if (set === 2) {
		return await import('./set2/champions.js')
	}
	if (set === 3) {
		return await import('./set3/champions.js')
	}
	if (set === 3.5) {
		return await import('./set3.5/champions.js')
	}
	if (set === 4) {
		return await import('./set4/champions.js')
	}
	if (set === 4.5) {
		return await import('./set4.5/champions.js')
	}
	if (set === 5) {
		return await import('./set5/champions.js')
	}
	if (set === 5.5) {
		return await import('./set5.5/champions.js')
	}
	if (set === 6) {
		return await import('./set6/champions.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/champions.js')
	}
	if (set === 7) {
		return await import('./set7/champions.js')
	}
	throw 'Unsupported set:' + set
}

export async function importItems(set: SetNumber) {
	if (set === 1) {
		return await import('./set1/items.js')
	}
	if (set === 2) {
		return await import('./set2/items.js')
	}
	if (set === 3) {
		return await import('./set3/items.js')
	}
	if (set === 3.5) {
		return await import('./set3.5/items.js')
	}
	if (set === 4) {
		return await import('./set4/items.js')
	}
	if (set === 4.5) {
		return await import('./set4.5/items.js')
	}
	if (set === 5) {
		return await import('./set5/items.js')
	}
	if (set === 5.5) {
		return await import('./set5.5/items.js')
	}
	if (set === 6) {
		return await import('./set6/items.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/items.js')
	}
	if (set === 7) {
		return await import('./set7/items.js')
	}
	throw 'Unsupported set:' + set
}

export async function importSetData(set: SetNumber) {
	type SetData = typeof import('./set6.5/hardcoded/set-data.js')
	if (set === 1) {
		return await import('./set1/hardcoded/set-data.js') as SetData
	}
	if (set === 2) {
		return await import('./set2/hardcoded/set-data.js') as SetData
	}
	if (set === 3) {
		return await import('./set3/hardcoded/set-data.js') as SetData
	}
	if (set === 3.5) {
		return await import('./set3.5/hardcoded/set-data.js') as SetData
	}
	if (set === 4) {
		return await import('./set4/hardcoded/set-data.js') as SetData
	}
	if (set === 4.5) {
		return await import('./set4.5/hardcoded/set-data.js') as SetData
	}
	if (set === 5) {
		return await import('./set5/hardcoded/set-data.js') as SetData
	}
	if (set === 5.5) {
		return await import('./set5.5/hardcoded/set-data.js') as SetData
	}
	if (set === 6) {
		return await import('./set6/hardcoded/set-data.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/hardcoded/set-data.js')
	}
	if (set === 7) {
		return await import('./set7/hardcoded/set-data.js')
	}
	throw 'Unsupported set:' + set
}

export async function importTraits(set: SetNumber) {
	if (set === 1) {
		return await import('./set1/traits.js')
	}
	if (set === 2) {
		return await import('./set2/traits.js')
	}
	if (set === 3) {
		return await import('./set3/traits.js')
	}
	if (set === 3.5) {
		return await import('./set3.5/traits.js')
	}
	if (set === 4) {
		return await import('./set4/traits.js')
	}
	if (set === 4.5) {
		return await import('./set4.5/traits.js')
	}
	if (set === 5) {
		return await import('./set5/traits.js')
	}
	if (set === 5.5) {
		return await import('./set5.5/traits.js')
	}
	if (set === 6) {
		return await import('./set6/traits.js')
	}
	if (set === 6.5) {
		return await import('./set6.5/traits.js')
	}
	if (set === 7) {
		return await import('./set7/traits.js')
	}
	throw 'Unsupported set:' + set
}
