import path from 'path'

export const setNumberPath = path.resolve('build', 'set_number.local')
export const etagPath = path.resolve('build', 'cdragon_etag.local')

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
	return await importPath(setNumber, 'augments') as typeof import('../dist/set6/augments.js')
}
export async function importAugmentTiers(setNumber: number) {
	return await importPath(setNumber, 'augment-tiers') as typeof import('../dist/set6/augment-tiers.js')
}

export async function importItems(setNumber: number) {
	return await importPath(setNumber, 'items') as typeof import('../dist/set6/items.js')
}
