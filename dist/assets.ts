export const ASSET_PREFIX = 'https://raw.communitydragon.org/pbe/game/'

export function getIconURL(deriveAsset: {icon: string | null | undefined}, isRaw: boolean) {
	if (deriveAsset.icon == null) {
		console.warn('getIconURL', deriveAsset)
		return ''
	}
	const iconPath = isRaw ? deriveAsset.icon.toLowerCase().slice(0, -4) : deriveAsset.icon
	return `${ASSET_PREFIX}${iconPath}.png`
}
