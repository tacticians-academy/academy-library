export async function importAugments(setNumber: number) {
	type Augments = typeof import('./set6/augments.js')
	if (setNumber === 1) {
		return {} as Augments
	}
	if (setNumber === 6) {
		return await import('./set6/augments.js')
	}
	throw 'Unsupported set:' + setNumber
}

export async function importAugmentTiers(setNumber: number) {
	type AugmentTiers = typeof import('./set6/hardcoded/augment-tiers.js')
	if (setNumber === 1) {
		return {} as AugmentTiers
	}
	if (setNumber === 6) {
		return await import('./set6/hardcoded/augment-tiers.js')
	}
	throw 'Unsupported set:' + setNumber
}

export async function importChampions(setNumber: number) {
	if (setNumber === 1) {
		return await import('./set1/champions.js')
	}
	if (setNumber === 6) {
		return await import('./set6/champions.js')
	}
	throw 'Unsupported set:' + setNumber
}

export async function importItems(setNumber: number) {
	if (setNumber === 1) {
		return await import('./set1/items.js')
	}
	if (setNumber === 6) {
		return await import('./set6/items.js')
	}
	throw 'Unsupported set:' + setNumber
	// return await importPath(setNumber, 'items') as typeof import('./set6/items.js')
}

export async function importSetData(setNumber: number) {
	type SetData = typeof import('./set6/hardcoded/set-data.js')
	if (setNumber === 1) {
		return await import('./set1/hardcoded/set-data.js') as SetData
	}
	if (setNumber === 6) {
		return await import('./set6/hardcoded/set-data.js')
	}
	throw 'Unsupported set:' + setNumber
}

export async function importTraits(setNumber: number) {
	if (setNumber === 1) {
		return await import('./set1/traits.js')
	}
	if (setNumber === 6) {
		return await import('./set6/traits.js')
	}
	throw 'Unsupported set:' + setNumber
}
