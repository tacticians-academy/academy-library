import fs from 'fs/promises'
import path from 'path'

import { substituteVariables, getIconPath } from '../../dist/index.js'
import type { AugmentFlashcard, ItemFlashcard, AugmentTier, EffectVariables } from '../../dist/index.js'
import { importAugments, importItems } from '../../dist/imports.js'

import { getCurrentSetNumber, getPathTo } from '../helpers/files.js'
import { formatJS } from '../helpers/formatting.js'
import { getAugmentNameKey } from '../helpers/utils.js'

const REGEX_ASSET_PREFIX = /https:\/\/raw.communitydragon.org\/\w+?\/game\//

const currentSetNumber = await getCurrentSetNumber()

const flashcardsPath = getPathTo(currentSetNumber, 'flashcards')
await fs.mkdir(flashcardsPath, { recursive: true })

function getNormalizedEffects(variables: EffectVariables) {
	const normalizedEffects: EffectVariables = {}
	for (const key in variables) {
		normalizedEffects[key.toUpperCase()] = variables[key]
	}
	return normalizedEffects
}

// Augments

const { activeAugments } = await importAugments(currentSetNumber)

if (activeAugments) {
	type AugmentEntry = [name: string, nameExtensions: (string | undefined)[], tiers: AugmentTier[], descriptions: string[], effectsArray: EffectVariables[], icons: string[]]

	const nameExtensions = ['Heart', 'Crest', 'Crown', 'Soul']

	const results: AugmentEntry[] = []
	activeAugments.forEach(augment => {
		let name = getAugmentNameKey(augment)
		let nameKey = name.toLowerCase()
		const nameExtension = nameExtensions.find(extension => {
			const searchText = ` ${extension.toLowerCase()}`
			if (nameKey.endsWith(searchText)) {
				nameKey = nameKey.replace(searchText, '')
				name = name.replace(` ${extension}`, '')
				return true
			}
		})
		let entry = results.find(entry => entry[0].toLowerCase() === nameKey)
		if (!entry) {
			entry = [name, [], [], [], [], []]
			results.push(entry)
		}
		const tierIndex = augment.tier - 1
		entry[1][tierIndex] = nameExtension
		entry[2][tierIndex] = augment.tier
		if (!entry[3].includes(augment.desc)) {
			entry[3][tierIndex] = augment.desc
		}
		entry[4][tierIndex] = getNormalizedEffects(augment.effects)
		entry[5][tierIndex] = getIconPath(augment, true)
	})

	const outputAugmentsObject: AugmentFlashcard[] = []
	results
		.sort((a, b) => a[0].localeCompare(b[0]))
		.forEach(([name, nameExtensions, tiers, descriptions, effectsArray, icons]) => {
			const validDescriptions = descriptions.filter(description => description)
			let description: string
			if (validDescriptions.length > 1) {
				description = descriptions
					.map((description, index) => {
						return description ? `${index + 1}: ${substituteVariables(description, [effectsArray[index]])}` : null
					})
					.filter((description): description is string => !!description)
					.join('  ')
			} else {
				description = substituteVariables(validDescriptions[0], effectsArray)
			}
			const extensions = nameExtensions
				.filter(extension => extension)
				.join('/')
			outputAugmentsObject.push({
				id: name.toLowerCase().replaceAll(/[ '.+-]/g, ''),
				name: extensions ? name + ' ' + extensions : name,
				tiers: tiers.filter(e => e),
				description,
				icons: icons.filter(e => e).map(icon => icon.replace(REGEX_ASSET_PREFIX, '').replace('.png', ''))
			})
		})

	await fs.writeFile(path.resolve(flashcardsPath, 'augments.ts'), `import type { AugmentFlashcard } from '../../index'\n\nexport const augmentFlashcards: AugmentFlashcard[] = ` + formatJS(outputAugmentsObject))
}

// Items

const { currentItems, spatulaItems, componentItems } = await importItems(currentSetNumber)

const outputItemsObject: ItemFlashcard[] = []
currentItems.forEach(item => {
	const type = componentItems.some(component => item === component)
		? 'component'
		: spatulaItems.some(component => item === component)
			? 'spatula'
			: 'completed'
	const description = substituteVariables(item.desc, [getNormalizedEffects(item.effects)])
		.replaceAll(/%i.+?%/g, '')
		.replaceAll(/<.+?>/g, ' ')
		.trim()
		.replaceAll(/ +/g, ' ')
	const iconURL = getIconPath(item, true)
	outputItemsObject.push({
		id: item.id,
		name: item.name,
		type,
		description,
		icon: iconURL.replace(REGEX_ASSET_PREFIX, '').replace('.png', ''),
		from: item.from,
		unique: item.unique,
	})
})

await fs.writeFile(path.resolve(flashcardsPath, 'items.ts'), `import type { ItemFlashcard } from '../../index'\n\nexport const itemFlashcards: ItemFlashcard[] = ` + formatJS(outputItemsObject))
