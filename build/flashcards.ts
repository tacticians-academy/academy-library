import fs from 'fs/promises'
import path from 'path'

import { ASSET_PREFIX, substituteVariables } from '../dist/index.js'
import type { AugmentFlashcard, ItemFlashcard, AugmentTier, EffectVariables } from '../dist/index.js'

import { getCurrentSetNumber, getPathTo, importAugments, importItems } from './helpers/files.js'
import { formatJS } from './helpers/formatting.js'
import { getAugmentNameKey } from './helpers/utils.js'

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

function getIconURL(dataObject: {icon: string}) {
	return ASSET_PREFIX + dataObject.icon.toLowerCase().replace('.dds', '.png')
}

// Augments

const { activeAugments } = await importAugments(currentSetNumber)

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
	entry[5][tierIndex] = getIconURL(augment)
})

const outputAugmentsTSV: string[][] = []
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
			icons: icons.filter(e => e).map(icon => icon.replace('https://raw.communitydragon.org/pbe/game/assets/maps/particles/tft/item_icons/augments/hexcore/', '').replace('.png', ''))
		})
		outputAugmentsTSV.push([ (extensions ? name + ' ' + extensions : `${name} (${tiers.filter(e => e).join('/')})`), description, icons.filter(e => e).join() ])
	})

await fs.writeFile(path.resolve(flashcardsPath, 'augments.ts'), `import type { AugmentFlashcard } from '../../index'\n\nexport const augmentFlashcards: AugmentFlashcard[] = ` + formatJS(outputAugmentsObject))
await fs.writeFile(path.resolve(flashcardsPath, 'augments.tsv'), outputAugmentsTSV.map(row => row.join('\t')).join('\n'))

// Items

const { currentItems, spatulaItems, componentItems } = await importItems(currentSetNumber)

const outputItemsObject: ItemFlashcard[] = []
const outputItemsTSV: string[][] = []
currentItems.forEach(item => {
	const type = componentItems.some(component => item === component)
		? 'component'
		: spatulaItems.some(component => item === component)
			? 'spatula'
			: 'completed'
	const description = substituteVariables(item.desc, [getNormalizedEffects(item.effects)])
		.replaceAll(/%.+?%/g, '')
		.replaceAll(/<.+?>/g, ' ')
		.trim()
		.replaceAll(/ +/g, ' ')
	const iconURL = getIconURL(item)
	outputItemsTSV.push([item.name, description, iconURL])
	outputItemsObject.push({
		id: item.id,
		name: item.name,
		type,
		description,
		icon: iconURL.replace('https://raw.communitydragon.org/pbe/game/assets/maps/particles/tft/', '').replace('.png', ''),
		from: item.from,
		unique: item.unique,
	})
})

await fs.writeFile(path.resolve(flashcardsPath, 'items.ts'), `import type { ItemFlashcard } from '../../index'\n\nexport const augmentFlashcards: ItemFlashcard[] = ` + formatJS(outputItemsObject))
await fs.writeFile(path.resolve(flashcardsPath, 'items.tsv'), outputItemsTSV.map(row => row.join('\t')).join('\n'))
