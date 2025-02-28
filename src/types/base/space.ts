import { BaseProps } from './baseprops'
import { Direction, FlexJustify } from './baseatom'

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'
export interface BaseSpace extends BaseProps {
  direction: Direction
  align: SpaceAlign
  justify: FlexJustify
  wrap: boolean
}
