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

export function removeFirstFromArray<T>(array: T[], removing: T): void {
	const index = array.indexOf(removing)
	if (index > -1) {
		array.splice(index, 1)
	}
}

export function removeFirstFromArrayWhere<T>(array: T[], whereFn: (el: T) => boolean): void {
	const index = array.findIndex(whereFn)
	if (index > -1) {
		array.splice(index, 1)
	}
}
