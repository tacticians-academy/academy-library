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
