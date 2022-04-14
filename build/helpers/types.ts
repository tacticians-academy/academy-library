import type { ChampionData } from '../../dist/types'

export type ResponseJSON = { items: Record<string, any>[], traits: Record<string, any>[], sets: {champions: ChampionData[], traits: any[]}[] }

export type ChampionJSON = Record<string, Record<string, any>>
export type ChampionJSONType = 'SpellObject' | 'TFTCharacterRecord'

export interface ChampionJSONAttack {
	mAttackName?: string
	mAttackProbability?: number
	mAttackCastTime?: number
	mAttackDelayCastOffsetPercent?: number
	mAttackTotalTime?: number
}

export interface ChampionJSONStats {
	PortraitIcon: string
	tier?: number
	mLinkedTraits?: {TraitData?: string, '{053a1f33}'?: string}[]
	baseStaticHPRegen: number
	baseCritChance: number
	critDamageMultiplier: number
	baseArmor: number
	attackRange: number
	attackSpeed: number
	baseDamage: number
	baseHP: number
	baseSpellBlock: number
	mInitialMana?: number
	primaryAbilityResource: {
		arBase?: number
	}
	baseMoveSpeed: number
	spellNames: string[]
	extraSpells?: string[]
	isSpawn?: true
	teamSize: number
	basicAttack?: ChampionJSONAttack
	extraAttacks?: ChampionJSONAttack[]
	critAttacks?: ChampionJSONAttack[]
}

export interface ChampionJSONSpellAttack {
	missileSpeed?: number
	mMissileSpec?: {
		mMissileWidth: number
		movementComponent: {
			mSpeed: number
		}
	}
}

export interface ChampionJSONSpell {
	mCastTime?: number
	mDataValues?: {
		mName: string
		mValues?: number[]
	}[]
	mSpellCalculations?: Record<string, {
		mFormulaParts: Record<string, string | Record<string, Object> | Record<string, Object>[]>[]
		mMultiplier?: Record<string, string>
		mDisplayAsPercent?: boolean
	}>
	mCantCancelWhileWindingUp?: true
	missileSpeed?: number
	mMissileSpec?: {
		mMissileWidth: number
		movementComponent: {
			mTravelTime?: number
			mSpeed?: number
			mInitialSpeed?: number
			mMinSpeed?: number
			mMaxSpeed?: number
			mAcceleration?: number
			mStartDelay?: number
			mTracksTarget?: false
		}
	}
	cantCastWhileRooted?: true
}
