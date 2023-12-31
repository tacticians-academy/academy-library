import type { SetNumber } from '../../dist/index.js'

import { formatJS } from '../helpers/formatting.js'
import type { MapResponseJSON } from '../helpers/types.js'

export async function transformMap(setNumber: SetNumber, parentSetNumber: SetNumber, mutator: string, mapResponse: MapResponseJSON) {
	let setMap: any
	for (const key in mapResponse) {
		const entry = mapResponse[key]
		if ((entry.__type === 'TFTSetData' && entry.name === mutator) || entry.Mutator === mutator || entry['{cf093b49}'] === mutator) {
			setMap = entry
			break
		}
	}
	if (setMap == null) {
		console.log('ERR no map for', mutator)
		return undefined
	}
	const { DropRateTables } = setMap
	const outputDropRates: Record<string, number[][]> = {}
	for (const dropName in DropRateTables) {
		const dropRates = mapResponse[DropRateTables[dropName]].mDropRatesByLevel.map((m: any) => m.mDropRatesByTier)
		outputDropRates[dropName] = dropRates
	}

	const rawShopBadLuckProtection = mapResponse['{8844d784}']
	const shopBadLuckProtection = rawShopBadLuckProtection != null ? formatConstValues(rawShopBadLuckProtection) : undefined

	const tierBags: Record<string, any> = {}
	const tierBagKey = setMap['{a40b8ff1}']
	if (tierBagKey != null) {
		const removeTierBagKey = `${mutator.replace('TFT', '')}_TierBag`
		mapResponse[tierBagKey].mScriptDataObjects.map((m: any) => {
			const tierBagData = mapResponse[m]
			tierBags[tierBagData.mName.replace(removeTierBagKey, '')] = formatConstValues(tierBagData)
		})
	}

	const rawHeadlinerSystemParameters = mapResponse['{1787a45d}']
	const headlinerSystemParameters = rawHeadlinerSystemParameters != null ? formatConstValues(rawHeadlinerSystemParameters) : undefined

	// const commonTierBagSizes = formatConstValues(mapResponse['{a5b47f29}']) // Not updated

	return [
		`export const shopBadLuckProtection: Record<string, number> | undefined = ${formatJS(shopBadLuckProtection)}`,
		`export const headlinerSystemParameters: Record<string, number> | undefined = ${formatJS(headlinerSystemParameters)}`,
		`export const dropRates: Record<string, number[][]> = ${formatJS(outputDropRates)}`,
		`export const tierBags: UnitPools = ${formatJS(tierBags)}`,
		// `export const commonTierBagSizes: Record<string, number> = ${formatJS(commonTierBagSizes)}`,
	]
}

// Helpers

function formatConstValues({ mConstants }: any) {
	for (const key in mConstants) {
		mConstants[key] = mConstants[key].mValue
	}
	return mConstants
}
