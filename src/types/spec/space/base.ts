import { BaseProps } from '../../base/props'
import { Direction, FlexJustify } from '../../base/atoms'

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'
export interface BaseSpace extends BaseProps {
  direction: Direction
  align: SpaceAlign
  justify: FlexJustify
  wrap: boolean
}
