import fs from 'fs/promises'
import path from 'path'

import { substituteVariables, getIconPath, substituteSpellVariables, getNormalizedKeyValues } from '../../dist/index.js'
import type { AugmentFlashcard, ItemFlashcard, AugmentTier, EffectVariables, SetNumber, AugmentData, ChampionFlashcard } from '../../dist/index.js'
import { importAugments, importChampions, importItems } from '../../dist/imports.js'

import { getPathToSet } from '../helpers/files.js'
import { formatJS } from '../helpers/formatting.js'
import { getAugmentNameKey, removeSymbols } from '../helpers/utils.js'

const REGEX_ASSET_PREFIX = /https:\/\/raw.communitydragon.org\/\w+?\/game\//

export async function createFlashcardsFor(setNumber: SetNumber) {
	const flashcardsPath = getPathToSet(setNumber, 'flashcards')
	await fs.mkdir(flashcardsPath, { recursive: true })

	const { activeAugments } = await importAugments(setNumber)
	if (activeAugments != null) {
		const outputAugments = await generateAugmentFlashcards(activeAugments)
		await fs.writeFile(path.resolve(flashcardsPath, 'augments.ts'), `import type { AugmentFlashcard } from '../../index'\n\nexport const augmentFlashcards: AugmentFlashcard[] = ` + formatJS(outputAugments))
	}

	const outputItems = await generateItemFlashcards(setNumber)
	await fs.writeFile(path.resolve(flashcardsPath, 'items.ts'), `import type { ItemFlashcard } from '../../index'\n\nexport const itemFlashcards: ItemFlashcard[] = ` + formatJS(outputItems))

	const outputChampions = await generateChampionFlashcards(setNumber)
	await fs.writeFile(path.resolve(flashcardsPath, 'champions.ts'), `import type { ChampionFlashcard } from '../../index'\n\nexport const championFlashcards: ChampionFlashcard[] = ` + formatJS(outputChampions))
}

// Generate

async function generateAugmentFlashcards(activeAugments: AugmentData[]) {
	type AugmentEntry = {name: string, nameExtensions: (string | undefined)[], tiers: AugmentTier[], descriptions: string[], effectsArray: EffectVariables[], icons: string[]}
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
		let entry = results.find(entry => entry.name.toLowerCase() === nameKey)
		if (!entry) {
			entry = {name, nameExtensions: [], tiers: [], descriptions: [], effectsArray: [], icons: []}
			results.push(entry)
		}
		const tierIndex = augment.tier - 1
		entry.nameExtensions[tierIndex] = nameExtension
		entry.tiers[tierIndex] = augment.tier
		if (!entry.descriptions.includes(augment.desc)) {
			entry.descriptions[tierIndex] = augment.desc
		}
		entry.effectsArray[tierIndex] = getNormalizedKeyValues(augment.effects)
		entry.icons[tierIndex] = getIconPath(augment, true)
	})

	return results
		.sort((a, b) => a.name.localeCompare(b.name))
		.map(({name, nameExtensions, tiers, descriptions, effectsArray, icons}): AugmentFlashcard => {
			const validDescriptions = descriptions.filter(description => description)
			let description: string
			if (validDescriptions.length > 1) {
				description = descriptions
					.map((description, index) => {
						return description ? `${index + 1}: ${substituteVariables(description, [effectsArray[index]])}` : null
					})
					.filter((description): description is string => description != null)
					.join('  ')
			} else {
				description = substituteVariables(validDescriptions[0], effectsArray)
			}
			const extensions = nameExtensions
				.filter(extension => extension)
				.join('/')
			return {
				id: removeSymbols(name.toLowerCase()),
				name: extensions ? name + ' ' + extensions : name,
				tiers: tiers.filter(e => e),
				description,
				icons: icons.filter(e => e).map(icon => icon.replace(REGEX_ASSET_PREFIX, '').replace('.png', '')),
			}
		})
}

async function generateChampionFlashcards(setNumber: SetNumber) {
	const { abilities, champions } = await importChampions(setNumber)
	const results: ChampionFlashcard[] = []
	champions.forEach(champion => {
		const ability = abilities[champion.apiName]
		if (ability == null) return
		const spell = champion.spells[0]
		results.push({
			id: champion.apiName,
			name: champion.name,
			stats: champion.stats,
			icon: getIconPath(champion).replace(REGEX_ASSET_PREFIX, '').replace('.png', ''),
			ability: {
				name: ability.name,
				variables: ability.variables,
				description: spell != null ? substituteSpellVariables(ability.desc, champion, spell, getNormalizedKeyValues(ability.variables)) : ability.desc,
				icon: getIconPath(ability).replace(REGEX_ASSET_PREFIX, '').replace('.png', ''),
			},
		})
	})
	return results
}

async function generateItemFlashcards(setNumber: SetNumber) {
	const { currentItems, emblemItems, componentItems } = await importItems(setNumber)

	return currentItems.map((item): ItemFlashcard => {
		const type = componentItems.some(component => item === component)
			? 'component'
			: emblemItems.some(component => item === component) === true
				? 'emblem'
				: 'completed'
		const description = substituteVariables(item.desc ?? '', [getNormalizedKeyValues(item.effects)])
			.replaceAll(/%i.+?%/g, '')
			.replaceAll(/<.+?>/g, ' ')
			.trim()
			.replaceAll(/ +/g, ' ')
		const iconURL = getIconPath(item, true)
		return {
			id: item.apiName ?? item.id!.toString(),
			name: item.name,
			type,
			description,
			icon: iconURL.replace(REGEX_ASSET_PREFIX, '').replace('.png', ''),
			from: item.from ?? [],
			unique: item.unique,
		}
	})
}
