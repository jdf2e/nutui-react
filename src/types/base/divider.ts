import { BaseProps } from './baseprops'
import { Align, Direction } from './baseatom'

export interface BaseDivider extends BaseProps {
  contentPosition: Align
  direction?: Direction
}
