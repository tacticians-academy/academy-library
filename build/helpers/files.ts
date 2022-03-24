import fs from 'fs/promises'
import path from 'path'

import type { SetNumber } from '../../dist'

const cachePath = path.resolve('build', 'cache')
await fs.mkdir(cachePath, { recursive: true })

export const setNumberPath = path.resolve(cachePath, 'set_number.local')
export const etagPath = path.resolve(cachePath, 'cdragon_etag.local')
export const githubTokenPath = path.resolve(cachePath, 'github_token.local')

export async function getCurrentSetNumber() {
	return parseInt(await fs.readFile(setNumberPath, 'utf8'), 10) as SetNumber
}

function getOutputFolder(setNumber: number) {
	return `dist/set${setNumber}`
}

export function getPathTo(setNumber: number, filename: string) {
	return path.resolve(getOutputFolder(setNumber), filename)
}

export async function loadHardcodedTXT(currentSetNumber: number, name: string) {
	try {
		const text = await fs.readFile(getPathTo(currentSetNumber, `hardcoded/${name}.txt`), 'utf8')
		return text
			.split('\n')
			.filter(line => line)
	} catch {
		return null
	}
}
