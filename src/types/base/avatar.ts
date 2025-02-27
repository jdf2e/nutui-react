import { BaseProps } from './baseprops'
import { PositionX } from './baseatom'

export type AvatarShape = 'round' | 'square'

export interface BaseAvatar extends BaseProps {
  size: string
  icon: React.ReactNode
  shape: AvatarShape
  background: string
  color: string
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  src: string
  alt: string
  onClick: (e: any) => void
  onError: () => void
}

export interface BaseAvatarGroup extends BaseProps {
  maxContent: string
  max: string | number
  maxBackground: string
  maxColor: string
  size: 'large' | 'normal' | 'small'
  shape: AvatarShape
  gap: string
  level: PositionX
}
