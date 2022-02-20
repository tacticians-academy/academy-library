import fs from 'fs/promises'
import path from 'path'

import { ASSET_PREFIX, substituteVariables } from '../dist/index.js'
import type{ AugmentTier, EffectVariables } from '../dist/index.js'

import { getCurrentSetNumber, getPathTo, importAugments, importItems } from './helpers/files.js'
import { getAugmentNameKey } from './helpers/utils.js'

const currentSetNumber = await getCurrentSetNumber()

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
	const normalizedEffects: EffectVariables = {}
	for (const key in augment.effects) {
		normalizedEffects[key.toUpperCase()] = augment.effects[key]
	}
	entry[4][tierIndex] = normalizedEffects
	// entry[5][tierIndex] = augment.icon.toLowerCase().replace('assets/maps/particles/tft/item_icons/augments/hexcore/', '').replace('.dds', '') // TSV
	entry[5][tierIndex] = ASSET_PREFIX + augment.icon.toLowerCase().replace('.dds', '.png')
})

const output = results
	.map(([name, nameExtensions, tiers, descriptions, effectsArray, icons]) => {
		const validDescriptions = descriptions.filter(description => description)
		let description: string
		if (validDescriptions.length > 1) {
			description = descriptions
				.map((description, index) => {
					// return description ? substituteVariables(description, [effectsArray[index]]) : null // TSV
					return description ? `${index + 1}: ${substituteVariables(description, [effectsArray[index]])}` : null
				})
				.filter((description): description is string => !!description)
				// .join('|') // TSV
				.join('  ')
		} else {
			description = substituteVariables(validDescriptions[0], effectsArray)
		}
		const extensions = nameExtensions
			.filter(extension => extension)
			.join('/')
		// return [ extensions ? name + ' ' + extensions : name, tiers.filter(e => e).join(), description, icons.filter(e => e).join() ] // TSV
		return [ (extensions ? name + ' ' + extensions : `${name} (${tiers.filter(e => e).join('/')})`), description, icons.filter(e => e).join() ]
	})
	.sort((a, b) => a[0].localeCompare(b[0]))

// Output

const flashcardsPath = getPathTo(currentSetNumber, 'flashcards')
await fs.mkdir(flashcardsPath, { recursive: true })
// output.unshift(columns) // TSV
await fs.writeFile(path.resolve(flashcardsPath, 'augments.tsv'), output.map(row => row.join('\t')).join('\n'))
