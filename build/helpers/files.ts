import fs from 'fs/promises'
import path from 'path'

import type { SetNumber } from '../../dist'

const cachePath = path.resolve('build', 'cache')
await fs.mkdir(cachePath, { recursive: true })

export const setNumberPath = path.resolve(cachePath, 'set_number.local')
export const githubTokenPath = path.resolve(cachePath, 'github_token.local')

export async function getCurrentSetNumber() {
	console.log(setNumberPath)
	const setString = await fs.readFile(setNumberPath, 'utf8')
	return (parseFloat(setString) ?? 1) as SetNumber
}

export function getOutputFolder(setNumber: SetNumber) {
	return `dist/set${setNumber}`
}

export function getPathTo(setNumber: SetNumber, filename: string) {
	return path.resolve(getOutputFolder(setNumber), filename)
}

export async function loadHardcodedTXT(currentSetNumber: SetNumber, name: string) {
	try {
		const text = await fs.readFile(getPathTo(currentSetNumber, `hardcoded/${name}.txt`), 'utf8')
		return text
			.split('\n')
			.filter(line => line)
	} catch {
		return null
	}
}
