import { BaseProps } from '../../base/props'
import { UIType } from '../../base/atoms'

export type IndicatorType = 'anchor' | 'slide' | 'dualScreen'
export type IndicatorColor = Extract<UIType, 'primary' | 'default'>
export type IndicatorPlacement =
  | 'outside'
  | 'inside-top-right'
  | 'inside-bottom-center'
  | 'inside-bottom-left'

export interface BaseIndicator extends BaseProps {
  total: number
  current: number
  direction: string
  color: IndicatorColor
  type: IndicatorType
  placement: IndicatorPlacement
}
