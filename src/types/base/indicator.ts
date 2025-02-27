import { BaseProps } from './baseprops'
import { UIType } from './baseatom'

export type IndicatorType = 'anchor' | 'slide'
export type IndicatorColor = Extract<UIType, 'primary' | 'default'>

export interface BaseIndicator extends BaseProps {
  total: number
  current: number
  direction: string
  color: IndicatorColor
  type: IndicatorType
}
