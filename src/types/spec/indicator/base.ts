import { BaseProps } from '../../base/props'
import { UIType } from '../../base/atoms'

export type IndicatorType = 'anchor' | 'slide' | 'dualScreen'
export type IndicatorColor = Extract<UIType, 'primary' | 'default'>

export interface BaseIndicator extends BaseProps {
  total: number
  current: number
  direction: string
  color: IndicatorColor
  type: IndicatorType
}
