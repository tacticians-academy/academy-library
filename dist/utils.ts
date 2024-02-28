import { BonusKey, ChampionData, ChampionSpellData, DamageType, EffectVariables, SpellCalculation, SpellVariables } from './types.js'

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
			substitutions = substitutions.map(substitution => Math.round(substitution! * parseFloat(multiplier)))
		}
		return new Set(substitutions).size === 1 ? substitutions[0]!.toString() : substitutions.join('/')
	})
}

function getStat(key: string, champion: ChampionData) {
	if (key === BonusKey.Armor) {
		return champion.stats.armor
	}
	if (key === BonusKey.AttackDamage) {
		return champion.stats.damage
	}
	if (key === BonusKey.AbilityPower) {
		return 100
	}
	if (key === BonusKey.Health) {
		return champion.stats.hp!
	}
	if (key === BonusKey.CurrentHealth) {
		return champion.stats.hp!
	}
	if (key === BonusKey.CurrentHealthPercent) {
		return 1
	}
	if (key === BonusKey.MissingHealth || key === BonusKey.MissingHealthPercent) {
		return 0
	}
	console.log('ERR', 'Missing stat', key)
	return 0
}


export function solveSpellCalculationFor(starLevel: number, champion: ChampionData, calculation: SpellCalculation): [value: number, damageType: DamageType | undefined] {
	let damageType = calculation.damageType
	const total = calculation.parts.reduce((partsAccumulator, part) => {
		const doesMultiplySubparts = part.operator === 'product'
		return partsAccumulator + part.subparts.reduce((subpartsAccumulator, subpart) => {
			let value = subpart.starValues?.[starLevel] ?? 1
			if (subpart.stat != null) {
				if (damageType !== DamageType.true) {
					if (subpart.stat === BonusKey.AttackDamage) {
						damageType = DamageType.physical
					} else if (damageType == null && subpart.stat === BonusKey.AbilityPower) {
						damageType = DamageType.magic
					}
				}
				value *= getStat(subpart.stat, champion) * (subpart.ratio ?? 1)
			}
			if (subpart.max != null) {
				value = Math.min(subpart.max, value)
			}
			return doesMultiplySubparts ? (subpartsAccumulator * value) : (subpartsAccumulator + value)
		}, doesMultiplySubparts ? 1 : 0)
	}, 0)
	return [calculation.asPercent === true ? total * 100 : total, damageType]
}

export function getNormalizedKeyValues<Variables extends Record<string, any>>(variables: Variables) {
	const normalized: Record<string, any> = {}
	for (const key in variables) {
		normalized[key.toUpperCase()] = variables[key]
	}
	return normalized as Variables
}

export function substituteSpellVariables(description: string, champion: ChampionData, spell: ChampionSpellData, abilityVariables: SpellVariables) { // spellVariables: SpellVariables
	const normalizedCalculations = getNormalizedKeyValues(spell.calculations)
	return description.replace(/(@[\w*]+?@)/g, (placeholder) => {
		placeholder = placeholder.slice(1, -1)
		const [multiplierPlaceholder, multiplier] = placeholder.split('*')
		if (multiplier) {
			placeholder = multiplierPlaceholder
		}
		let substitutions: number[] = []
		const variableKey = placeholder.toUpperCase().replace(/^TOOLTIP|^MODIFIED|^TOTAL/,'') //TODO TOTAL_
		const spellCalculation = normalizedCalculations[variableKey]
		if (spellCalculation) {
			for (let starLevel = 1; starLevel <= 3; starLevel += 1) {
				const result = solveSpellCalculationFor(starLevel, champion, spellCalculation)
				substitutions.push(Math.round(result[0]))
			}
		} else {
			const abilityValues = abilityVariables[variableKey]
			if (abilityValues) {
				substitutions = abilityValues.slice(1)
			}
		}
		if (!substitutions.length) {
			return `{${placeholder}}`
		}
		if (multiplier) {
			substitutions = substitutions.map(substitution => Math.round(substitution! * parseFloat(multiplier)))
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
