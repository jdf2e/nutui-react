import { BaseProps } from './baseprops'
import { UIFill, UIRound, UISize, UIType } from '@/types/base/baseatom'

export interface BaseButton extends BaseProps {
  color: string
  shape: UIRound
  type: UIType
  size: UISize
  fill: UIFill
  block: boolean
  loading: boolean
  disabled: boolean
  icon: React.ReactNode
  rightIcon: React.ReactNode
  id: string
  nativeType: 'submit' | 'reset' | 'button'
  onClick: (e: any) => void
}
