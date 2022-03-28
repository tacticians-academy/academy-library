import { PATCH_FOR_SET } from './index.js'
import type { SetNumber } from './index.js'

export function getAssetPrefixFor(set: SetNumber) {
	return `https://raw.communitydragon.org/${PATCH_FOR_SET[set]}/game/`
}

export function getIconURL(set: SetNumber, deriveAsset: {icon: string | null | undefined}, isRaw: boolean = true) {
	return getAssetPrefixFor(set) + getIconPath(deriveAsset, isRaw)
}

export function getIconPath(deriveAsset: {icon: string | null | undefined}, isRaw: boolean = true) {
	if (deriveAsset.icon == null) {
		console.warn('getIconPath', deriveAsset)
		return ''
	}
	const iconPath = isRaw ? deriveAsset.icon.toLowerCase().slice(0, -4) : deriveAsset.icon
	return `${iconPath}.png`
}
