import fs from 'fs/promises'
import path from 'path'

const cachePath = path.resolve('build', 'cache')
await fs.mkdir(cachePath, { recursive: true })

export const setNumberPath = path.resolve(cachePath, 'set_number.local')
export const etagPath = path.resolve(cachePath, 'cdragon_etag.local')
export const githubTokenPath = path.resolve(cachePath, 'github_token.local')

export async function getCurrentSetNumber() {
	return parseInt(await fs.readFile(setNumberPath, 'utf8'), 10)
}

function getOutputFolder(setNumber: number) {
	return `dist/set${setNumber}`
}

export function getPathTo(setNumber: number, filename: string) {
	return path.resolve(getOutputFolder(setNumber), filename)
}

async function importPath(setNumber: number, fileName: string) {
	return await import(path.resolve(getOutputFolder(setNumber), `${fileName}.js`))
}

export async function importAugments(setNumber: number) {
	return await importPath(setNumber, 'augments') as typeof import('../../dist/set6/augments.js')
}
export async function importAugmentTiers(setNumber: number) {
	return await importPath(setNumber, 'hardcoded/augment-tiers') as typeof import('../../dist/set6/hardcoded/augment-tiers.js')
}

export async function importChampions(setNumber: number) {
	return await importPath(setNumber, 'champions') as typeof import('../../dist/set6/champions.js')
}

export async function importItems(setNumber: number) {
	return await importPath(setNumber, 'items') as typeof import('../../dist/set6/items.js')
}

export async function importSetData(setNumber: number) {
	return await importPath(setNumber, 'hardcoded/set-data') as typeof import('../../dist/set6/hardcoded/set-data.js')
}

export async function importTraits(setNumber: number) {
	return await importPath(setNumber, 'traits') as typeof import('../../dist/set6/traits.js')
}
