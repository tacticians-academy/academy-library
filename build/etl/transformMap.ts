import type { SetNumber } from '../../dist/index.js'

import { formatJS } from '../helpers/formatting.js'
import { SUBSTITUTE_STREAK_KEYS } from '../helpers/normalize.js'
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

	const rawHeadlinerSystemParameters = parentSetNumber !== 3 && mapResponse['{1787a45d}']
	const headlinerSystemParameters = rawHeadlinerSystemParameters != null ? formatConstValues(rawHeadlinerSystemParameters) : undefined

	const rawStreaks = mapResponse['{4cb79a04}']
	const winStreaks: any[] = rawStreaks['mWinStreaks'] ?? rawStreaks['{c3f540ed}']
	const lossStreaks: any[] = rawStreaks['mLossStreaks'] ?? rawStreaks['{b30e3de6}']
	Array.from([...winStreaks, ...lossStreaks]).forEach((entry: Record<string, any>) => {
		delete entry['__type']
		delete entry['{c0ca1779}']
		delete entry['mStreakFormat']
		for (const oldKey in SUBSTITUTE_STREAK_KEYS) {
			if (entry.hasOwnProperty(oldKey)) { // eslint-disable-line no-prototype-builtins
				entry[SUBSTITUTE_STREAK_KEYS[oldKey]] = entry[oldKey]
				delete entry[oldKey]
			}
		}
	})

	// const commonTierBagSizes = formatConstValues(mapResponse['{a5b47f29}']) // Not updated

	return [
		`import type { StreakData, UnitPools } from '../index'`,
		`export const shopBadLuckProtection: Record<string, number> | undefined = ${formatJS(shopBadLuckProtection)}`,
		`export const headlinerSystemParameters: Record<string, number> | undefined = ${formatJS(headlinerSystemParameters)}`,
		`export const dropRates: Record<string, number[][]> = ${formatJS(outputDropRates)}`,
		`export const winStreaks: StreakData[] = ${formatJS(winStreaks)}`,
		`export const lossStreaks: StreakData[] = ${formatJS(lossStreaks)}`,
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
