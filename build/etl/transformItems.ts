import { COMPONENT_ITEM_API_NAMES, COMPONENT_ITEM_IDS } from '../../dist/index.js'
import type { ItemData, ItemTypeKey, SetNumber } from '../../dist/index.js'
import { ItemKey } from '../../dist/aggregated.js'
import { importSetData } from '../../dist/imports.js'

import { formatJS } from '../helpers/formatting.js'
import { validateTraits } from '../helpers/utils.js'
import { NORMALIZE_EFFECT_KEYS, SUBSTITUTE_EFFECT_KEYS, normalizeEffects } from '../helpers/normalize.js'

const unreplacedIDs = new Set(Object.keys(SUBSTITUTE_EFFECT_KEYS))

const GLOBAL_UNUSED_ITEM_IDS = [
	999, // Unusable Slot
	10003, // B. F. Sword (free)
	10004, // Deathblade (free)
	10005, // Repeating Crossbow (free)
]
const GLOBAL_UNRELEASED_ITEM_IDS = [
	149, // Catalyst
	529, // Spell Thief
]
const SET_9_5_REWORK_REMOVED_ITEM_APIKEYS = [
	'TFT_Item_TitanicHydra',
	'TFT_Item_SeraphsEmbrace',
]

export async function transformItems(setNumber: SetNumber, parentSetNumber: SetNumber, itemsData: ItemData[], allTraitKeys: string[]) {
	const isModernSet = setNumber === 3.5 || setNumber >= 9.5
	const { EMBLEM_ITEM_IDS, RETIRED_ITEM_NAMES } = await importSetData(setNumber)

	const currentItemsByType: Record<ItemTypeKey, ItemData[]> = {component: [], completed: [], emblem: [], shadow: [], radiant: [], ornn: [], support: [], shimmerscale: [], consumable: [], hexbuff: [], mod: [], unreleased: []}

	const foundItemIDs: number[] = []
	itemsData.reverse().forEach(item => {
		if (!item.name || item.desc == null || RETIRED_ITEM_NAMES?.includes(item.name)) {
			return
		}
		if (item.id != null && (item.id < 0 || foundItemIDs.includes(item.id) || GLOBAL_UNUSED_ITEM_IDS.includes(item.id))) {
			return
		}
		if (!validateTraits(item, allTraitKeys)) {
			return
		}
		const descNormalized = item.desc.toLowerCase()
		if (descNormalized.startsWith('tft_item_') || descNormalized.includes('item temporarily disabled')) {
			return
		}
		for (const normalize in NORMALIZE_EFFECT_KEYS) {
			item.desc = item.desc.replaceAll(normalize, NORMALIZE_EFFECT_KEYS[normalize])
		}
		normalizeEffects(item.effects, unreplacedIDs)
		const name = item.name.toLowerCase()
		const iconNormalized = item.icon.toLowerCase()
		if (iconNormalized.includes('/augments/') || iconNormalized.includes('/set6_mercenary/') || iconNormalized.includes('/mercenary/') || iconNormalized.includes('/pairs/') || iconNormalized.includes('tft_item_unknown') || iconNormalized.includes('tft_item_emptyslot')) {
			return
		}
		if (item.apiName != null) {
			if (item.apiName.includes('_Augment_') || item.apiName.includes('_HyperRollAugment_') || item.apiName.startsWith('TFT_Assist_') || item.apiName.startsWith('TFTEvent_') || item.apiName.startsWith('TFT_Item_Free') || item.apiName.startsWith('TFT_Item_Grant')) {
				return
			}
			if (item.apiName.endsWith('Slot')) {
				return
			}
		}
		let typeKey: ItemTypeKey | undefined
		if (item.id != null && GLOBAL_UNRELEASED_ITEM_IDS.includes(item.id)) {
			typeKey = 'unreleased'
		} else if (iconNormalized.includes('tft_item_hex_')) {
			typeKey = 'hexbuff'
		} else if (iconNormalized.includes('/radiant/')) {
			typeKey = 'radiant'
		} else if (iconNormalized.includes('ornnitem') || iconNormalized.includes('ornn_item')) {
			typeKey = 'ornn'
		} else if (iconNormalized.includes('_supportitems/')) {
			typeKey = 'support'
		} else if (iconNormalized.includes('shimmerscale/')) {
			typeKey = 'shimmerscale'
		} else if (name.includes('item_name')) {
			typeKey = 'unreleased'
		} else if (item.id === 88 || item.apiName === 'TFT_Item_ForceOfNature') {
			typeKey = 'emblem'

		} else if (item.apiName != null) { // Set >= 5
			if (isModernSet && SET_9_5_REWORK_REMOVED_ITEM_APIKEYS.includes(item.apiName)) {
				return
			}

			if (item.name.startsWith(`Choncc's `)) {
				typeKey = 'unreleased'

			// Mods
			} else if (item.apiName === 'TFT6_Item_EliteSpotlight') {
				if (parentSetNumber !== 6) {
					return
				}
				typeKey = 'mod'
			} else if (item.apiName === 'TFT7_Item_TrainerSnax') {
				if (setNumber !== 7) {
					return
				}
				typeKey = 'mod'
			} else if (item.apiName === 'TFT7_Item_DarkflightEssence') {
				if (setNumber !== 7.5) {
					return
				}
				typeKey = 'mod'
			} else if (item.apiName.endsWith('_GenAE')) {
				if (parentSetNumber !== 8) {
					return
				}
				typeKey = 'mod'
			} else if (item.apiName === 'TFT9_Item_CrownOfDemacia' || item.apiName.startsWith('TFT9_Consumable_Chempunk_') || item.apiName.startsWith('TFT9_HeimerUpgrade_')) {
				if (parentSetNumber !== 9) {
					return
				}
				typeKey = 'mod'

			} else if (COMPONENT_ITEM_API_NAMES.includes(item.apiName) == true) {
				typeKey = 'component'
			} else if (item.apiName.endsWith('Emblem') || item.apiName.endsWith('EmblemItem') || item.apiName.endsWith('SpatulaItem') || (item.from && item.from.includes(8))) {
				if (!item.apiName.startsWith(`TFT${parentSetNumber}_`)) {
					return
				}
				typeKey = 'emblem'
			} else if (iconNormalized.includes('/shadow/') || iconNormalized.includes('_shadow.')) {
				typeKey = 'shadow'
			} else if (item.apiName.includes('_Consumable_')) {
				typeKey = 'consumable'
			} else {
				if (iconNormalized.includes('_miscitems/') || item.apiName.startsWith('TFT8_Item_Arsenal') || item.apiName.startsWith('TFT9_Item_Piltover')) {
					return
				}
				typeKey = 'completed'
			}

		} else if (item.id != null) { // Set < 5
			const hasHardcodedEmblems = EMBLEM_ITEM_IDS != null && EMBLEM_ITEM_IDS.length > 0
			if (!item.from) {
				// console.error('Invalid item', item)
				return
			}
			if (iconNormalized.includes('consumable') || descNormalized.includes('consumable ')) {
				typeKey = 'consumable'
			} else if (item.from.length) {
				if (item.from.includes(8)) {
					if (hasHardcodedEmblems && EMBLEM_ITEM_IDS.includes(item.id) === false) {
						return
					}
					typeKey = 'emblem'
				} else if (item.from.every(itemID => COMPONENT_ITEM_IDS.includes(itemID))) {
					typeKey = 'completed'
				}
			} else {
				if (iconNormalized.includes('/hexcore/')) {
					return false
				}
				if (EMBLEM_ITEM_IDS?.includes(item.id) === true) {
					typeKey = 'emblem'
				} else if (COMPONENT_ITEM_IDS.includes(item.id)) {
					typeKey = 'component'
				} else if (!typeKey) {
					if (hasHardcodedEmblems) {
						return false
					}
					console.log('Unknown emblem item', item)
					typeKey = descNormalized.includes('wearer is also ') ? 'emblem' : 'completed'
				}
			}
		}
		if (item.id === 89) console.log('\n\n\nIIIIIIII\n\n\n', typeKey)
		if (typeKey) {
			if (item.id != null) {
				foundItemIDs.push(item.id)
			}
			currentItemsByType[typeKey].push(item)
		}
	})

	for (const key in currentItemsByType) {
		currentItemsByType[key as ItemTypeKey].forEach(item => {
			item.unique = item.unique || item.desc!.toLowerCase().includes('[unique - only')
			if (item.name === ItemKey.HandOfJustice) {
				const invalidKey = 'BonusAD'
				if (item.effects[invalidKey] != null) {
					delete item.effects[invalidKey]
				} else {
					console.log('Normalize', ItemKey.HandOfJustice, invalidKey, 'missing', item.effects)
				}
			}
		})
	}

	const outputItemExports = []
	for (const key in currentItemsByType) {
		const itemKey = key as ItemTypeKey
		currentItemsByType[itemKey].sort((a, b) => a.name.localeCompare(b.name))
		const itemsData = currentItemsByType[itemKey]
		outputItemExports.push(`export const ${itemKey}Items: ItemData[] = ${formatJS(itemsData)}`)
	}
	const currentItemNames = ['completedItems', 'emblemItems']
	if (isModernSet || setNumber === 4.5 || setNumber >= 6) {
		currentItemNames.splice(2, 0, 'ornnItems')
	}
	if (setNumber === 5) {
		currentItemNames.splice(1, 0, 'shadowItems')
	} else if (isModernSet || setNumber >= 5.5) {
		currentItemNames.splice(1, 0, 'radiantItems')
	}
	if (setNumber >= 7 && !isModernSet) {
		currentItemNames.splice(2, 0, 'shimmerscaleItems')
	}
	if (isModernSet) {
		currentItemNames.splice(2, 0, 'supportItems')
	}
	outputItemExports.push(`export const currentItems: ItemData[] = componentItems.concat(${currentItemNames.join(', ')})`)
	return outputItemExports
}
