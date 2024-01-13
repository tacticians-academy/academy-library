import fs from 'fs/promises'
import path from 'path'

import type { SetNumber } from '../../dist'

const cachePath = path.resolve('build', 'cache')
const patchesPath = path.resolve('build', 'patches')

await fs.mkdir(cachePath, { recursive: true })

export const githubTokenPath = path.resolve(cachePath, 'github_token.local')

export function getOutputFolderForSet(setNumber: SetNumber) {
	return path.join('dist', `set${setNumber}`)
}

export function getPathToPatch(patchLine: string, filename: string) {
	return path.join(patchesPath, patchLine, filename)
}

export function getPathToSet(setNumber: SetNumber, filename: string) {
	return path.resolve(getOutputFolderForSet(setNumber), filename)
}

export async function loadHardcodedTXT(currentSetNumber: SetNumber, name: string) {
	try {
		const text = await fs.readFile(getPathToSet(currentSetNumber, `${name}.txt`), 'utf8')
		return text
			.split('\n')
			.filter(line => line)
	} catch {
		return null
	}
}
