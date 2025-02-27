import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { UIFill, UIRound, UISize, UIType } from './baseatom'

export interface BaseButton extends BaseProps {
  color: string
  shape: UIRound
  type: UIType
  size: UISize
  fill: UIFill
  block: boolean
  loading: boolean
  disabled: boolean
  icon: ReactNode
  rightIcon: ReactNode
  id: string
  nativeType: 'submit' | 'reset' | 'button'
  onClick: (e: any) => void
}
