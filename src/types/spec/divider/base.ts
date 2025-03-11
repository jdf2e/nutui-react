import { BaseProps } from '../../base/props'
import { Align, Direction } from '../../base/atoms'

export interface BaseDivider extends BaseProps {
  contentPosition: Align
  direction?: Direction
}
