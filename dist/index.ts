export * from './assets.js'
export * from './types.js'
export * from './utils.js'

export const COMPONENT_ITEM_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

import { EffectVariables } from './types'

export function substituteVariables(description: string, variablesArray: EffectVariables[]) {
	return description.replace(/(@[\w*]+?@)/g, (placeholder) => {
		placeholder = placeholder.slice(1, -1)
		const [multiplierPlaceholder, multiplier] = placeholder.split('*')
		if (multiplier) {
			placeholder = multiplierPlaceholder
		}
		let substitutions = variablesArray
			.map(variables => variables[placeholder.toUpperCase()])
			.filter((substitution): substitution is number => !!substitution)
		if (!substitutions.length) {
			return `{${placeholder}}`
		}
		if (multiplier) {
			substitutions = substitutions.map(substitution => Math.round(substitution! * parseInt(multiplier, 10)))
		}
		return new Set(substitutions).size === 1 ? substitutions[0]!.toString() : substitutions.join('/')
	})
}
