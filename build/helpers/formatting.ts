export function formatJS(json: any, indents: string = ''): string {
	const type = typeof json
	const nextIndents = indents + '\t'
	if (type === 'object') {
		if (json === null) {
			return 'null'
		}
		if (Array.isArray(json)) {
			const array = json as any[]
			if (!array.length) {
				return '[]'
			}
			const hasObject = array.some(child => typeof child === 'object')
			const children = array.map(child => formatJS(child, nextIndents))
			return hasObject || !indents.length ? `[\n${nextIndents}${children.join(`,\n${nextIndents}`)},\n${indents}]` : `[${children.join(', ')}]`
		}
		const keys = Object.keys(json)
		if (!keys.length) {
			return `{}`
		}
		const description = keys
			.map(key => {
				const needsQuotes = key[0] === '{' || !isNaN(parseInt(key[0], 10)) || key[0] !== key[0].toLowerCase()
				return `${needsQuotes ? `'${key}'` : key}: ${formatJS(json[key], nextIndents)}`
			})
			.join(`,\n${nextIndents}`)
		return `{\n${nextIndents}${description},\n${indents}}`
	} else if (type === 'string') {
		return json === 'null' ? 'null' : `\`${json}\``
	} else if (type === 'number' || type === 'boolean') {
		return json.toString()
	} else if (type === 'undefined') {
		return 'undefined'
	}
	throw `Unknown type ${type}: ${json}`
}
