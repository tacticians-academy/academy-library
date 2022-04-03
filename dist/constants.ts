export const SET_DATA = {
	1: {
		patchLine: '9.21',
	},
	6: {
		patchLine: '12.2',
	},
	6.5: {
		patchLine: 'latest',
	},
}
export type SetNumber = keyof typeof SET_DATA
export const SET_NUMBERS = Object.keys(SET_DATA).map(setKey => parseFloat(setKey) as SetNumber)

export const COMPONENT_ITEM_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
