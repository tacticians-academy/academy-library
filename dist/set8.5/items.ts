import { ItemKey } from '../index.js'
import type { ItemData } from '../index'

export const componentItems: ItemData[] = []

export const completedItems: ItemData[] = []

export const spatulaItems: ItemData[] = []

export const duosItems: ItemData[] = []

export const consumableItems: ItemData[] = []

export const radiantItems: ItemData[] = []

export const ornnItems: ItemData[] = []

export const hexbuffItems: ItemData[] = []

export const mercenaryDiceItems: ItemData[] = []

export const unreleasedItems: ItemData[] = []

export const currentItems: ItemData[] = componentItems.concat(completedItems, spatulaItems)