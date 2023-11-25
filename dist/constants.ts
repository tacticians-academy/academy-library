export const SET_DATA = {
	1: {
		patchLine: '9.21',
	},
	2: {
		patchLine: '10.5',
	},
	3: {
		patchLine: '10.11',
	},
	3.5: {
		patchLine: '10.18',
	},
	4: {
		patchLine: '11.1',
	},
	4.5: {
		patchLine: '11.8',
	},
	5: {
		patchLine: '11.14',
	},
	5.5: {
		patchLine: '11.21',
	},
	6: {
		patchLine: '12.2',
	},
	6.5: {
		patchLine: '12.10',
	},
	7: {
		patchLine: '12.16',
	},
	7.5: {
		patchLine: '12.22',
	},
	8: {
		patchLine: '13.5',
	},
	8.5: {
		patchLine: '13.11',
	},
	9: {
		patchLine: '13.17',
	},
	9.5: {
		patchLine: '13.22',
	},
	10: {
		patchLine: 'latest',
	},
}
export type SetNumber = keyof typeof SET_DATA
export const SET_NUMBERS = Object.keys(SET_DATA).map(setKey => parseFloat(setKey) as SetNumber).sort((a, b) => a - b)
export const CURRENT_SET_NUMBER = SET_NUMBERS.reduce((largest, current) => Math.max(largest, current), 0)

export const COMPONENT_ITEM_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const COMPONENT_ITEM_API_NAMES = ['TFT_Item_BFSword', 'TFT_Item_RecurveBow', 'TFT_Item_NeedlesslyLargeRod', 'TFT_Item_TearOfTheGoddess', 'TFT_Item_ChainVest', 'TFT_Item_NegatronCloak', 'TFT_Item_GiantsBelt', 'TFT_Item_Spatula', 'TFT_Item_', 'TFT_Item_SparringGloves']
