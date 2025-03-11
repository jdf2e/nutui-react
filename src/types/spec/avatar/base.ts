import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { PositionX, UIRound } from '../../base/atoms'

export interface BaseAvatar extends BaseProps {
  size: string
  icon: ReactNode
  shape: UIRound
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
  shape: UIRound
  gap: string
  level: PositionX
}
