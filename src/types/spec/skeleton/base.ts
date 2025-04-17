import { BaseProps } from '../../base/props'
import { SimpleValue, UIRound, UISize } from '../../base/atoms'

export type avatarShape = 'round' | 'square'
export interface BaseSkeleton extends BaseProps {
  rows: number
  size: Extract<UISize, 'small' | 'normal' | 'large'>
  width?: SimpleValue
  height?: SimpleValue
  shape: UIRound | 'circle'
  animated: boolean
  duration: number
  visible: boolean
}
