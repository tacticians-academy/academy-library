import type { AugmentData, AugmentTier, EffectVariables, ItemData, SetNumber } from '../../dist/index.js'
import { AugmentGroupKey } from '../../dist/aggregated.js'
import { importSetData } from '../../dist/imports.js'

import { loadHardcodedTXT } from '../helpers/files.js'
import { formatJS } from '../helpers/formatting.js'
import { SUBSTITUTE_EFFECT_KEYS } from '../helpers/normalize.js'
import { getAugmentNameKey, removeSymbols, sortByName, validateTraits } from '../helpers/utils.js'

const GLOBAL_UNUSED_AUGMENT_NAME_KEYS = ['no scope', 'eagle eye']

const MANUAL_TIER_DESIGNATIONS: Record<string, AugmentTier> = {
}

export async function transformAugments(setNumber: SetNumber, parentSetNumber: SetNumber, itemsData: ItemData[], allTraitKeys: string[]) {
	const { RETIRED_AUGMENT_NAME_KEYS, UNUSED_AUGMENT_NAME_KEYS } = await importSetData(setNumber)

	const allItemKeys = itemsData.map(i => i.apiName)

	const activeAugments: AugmentData[] = []
	const inactiveAugments: AugmentData[] = []
	const choiceAugments: AugmentData[] = []

	for (const item of itemsData.sort(sortByName)) {
		const iconNormalized = item.icon.toLowerCase()
		const pathComponents = iconNormalized.split('/')
		const pathNameComponent = pathComponents[pathComponents.length - 1]
		const pathCategoryComponent = pathComponents[pathComponents.length - 3]
		const isAugment = pathCategoryComponent === 'augments' || (item.apiName != null && item.apiName.includes('_Augment_'))
		const [ pathName, setKey ] = pathNameComponent.split('.')
		if (isAugment && item.apiName != null) {
			if (item.apiName.includes('_Legend_') && allItemKeys.includes(item.apiName.replace('Legend_', ''))) {
				continue
			}
			if (!validateTraits(item, allTraitKeys)) {
				continue
			}
			if (item.from != null && item.from.length > 0) {
				console.log('Augment should not have components', item)
			}
			const nameNormalized = item.name.toLowerCase()
			if (RETIRED_AUGMENT_NAME_KEYS != null && RETIRED_AUGMENT_NAME_KEYS.includes(nameNormalized)) {
				continue
			}
			let tier: AugmentTier | undefined = getTierFromWord(nameNormalized.split(' ').pop()!)
			const lastNumber = parseInt(pathName.slice(-1), 10)
			const addedAugments: string[] = []
			if (!isNaN(lastNumber)) {
				if (lastNumber && lastNumber !== tier) {
					if (tier && tier !== lastNumber - 1) {
						console.log('Multiple tier designations', tier, lastNumber, item)
					}
					tier = lastNumber as AugmentTier
				}
			} else {
				const wordTier = getTierFromWord(pathName.split('-').pop()!)
				if (wordTier && wordTier !== tier) {
					if (tier && tier !== wordTier - 1) {
						console.log('Multiple tier designations', tier, wordTier, item)
					}
					tier = wordTier
				}
			}
			if (nameNormalized.endsWith(' heart')) {
				if (tier && tier !== 1) {
					if (setNumber < 9 && nameNormalized !== 'innovator heart' && nameNormalized !== 'hextech heart') {
						console.error('ERR Multiple tier designations for heart', tier, 1, item)
					}
				} else {
					tier = 1
				}
			} else if (nameNormalized.endsWith(' crest')) {
				if (tier && tier !== 2) {
					console.error('ERR Multiple tier designations for crest', tier, 2, item)
				} else {
					tier = 2
				}
			} else if (nameNormalized.endsWith(' crown')) {
				if (tier && tier !== 3) {
					console.error('ERR Multiple tier designations for crown', tier, 3, item)
				} else {
					tier = 3
				}
			}
			const manualTier = MANUAL_TIER_DESIGNATIONS[item.name]
			if (manualTier) {
				if (tier) {
					console.log('Multiple tier designations manually overwritten', tier, manualTier, item)
				}
				tier = manualTier
			}
			if (!tier) {
				console.error('No tier for augment item entry: ' + JSON.stringify(item))
				tier = 3
			}
			const effects = item.effects
			for (const key in effects) {
				const keyHash = key.slice(1, -1)
				const substitution = SUBSTITUTE_EFFECT_KEYS[keyHash]
				if (substitution) {
					const value = effects[key]
					delete effects[key]
					effects[substitution] = value
				} else if (effects[key] as unknown === "null") {
					delete effects[key]
				}
			}
			const key = toKey(getAugmentNameKey(item))
			const data: AugmentData = {
				tier: tier!,
				name: item.name,
				groupID: key[0].toLowerCase() + key.slice(1),
				desc: item.desc!,
				effects: effects as EffectVariables,
				icon: item.icon,
			}

			const keyID = nameNormalized + data.desc //JSON.stringify(data)
			if (addedAugments.includes(keyID)) {
				continue
			}
			addedAugments.push(keyID)

			const isUnused = GLOBAL_UNUSED_AUGMENT_NAME_KEYS.includes(nameNormalized) || UNUSED_AUGMENT_NAME_KEYS?.includes(nameNormalized) || iconNormalized.includes('/missing-t')
			if (data.desc == null) {
				data.desc = ''
			}
			const hasInternalName = nameNormalized.startsWith('tft')
			if (!isUnused && (iconNormalized.includes('/choiceui/admin_armorery_') || hasInternalName)) {
				choiceAugments.push(data)
			} else if (hasInternalName) {
				continue
			} else if (isUnused || !tier) {
				inactiveAugments.push(data)
			} else {
				activeAugments.push(data)
			}
		}
	}

	if (activeAugments.length) {
		const emptyImplementationAugments = (await loadHardcodedTXT(setNumber, 'augments-empty'))
			?.filter(id => {
				const exists = Object.values(AugmentGroupKey).includes(id as AugmentGroupKey)
				if (!exists) { console.error('ERR', 'augments-empty', 'invalid', id) }
				return exists
			})
			.map(id => `AugmentGroupKey.${id[0].toUpperCase() + id.slice(1)}`).join(', ')
		return [
			`import { AugmentGroupKey } from '../index.js'\nimport type { AugmentData } from '../index'`,
			`export const emptyImplementationAugments: AugmentGroupKey[] = [${emptyImplementationAugments ?? ''}]`,
			`export const activeAugments: AugmentData[] = ${formatJS(activeAugments)}`,
			`export const inactiveAugments: AugmentData[] = ${formatJS(inactiveAugments)}`,
			`export const choiceAugments: AugmentData[] = ${formatJS(choiceAugments)}`,
		]
	}
	return undefined
}

// Helpers

function toKey(name: string) {
	return removeSymbols(name.replaceAll(/\+/g, 'plus')).split(' ').map(word => word[0]?.toUpperCase() + word.slice(1)).join('')
}

function getTierFromWord(word: string): AugmentTier | undefined {
	if (word === 'i') {
		return 1
	}
	if (word === 'ii') {
		return 2
	}
	if (word === 'iii') {
		return 3
	}
	return undefined
}
