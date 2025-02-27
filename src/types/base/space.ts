import { BaseProps } from './baseprops'
import { Direction, FlexAlign, FlexJustify } from './baseatom'

export interface BaseSpace extends BaseProps {
  direction: Direction
  align: FlexAlign
  justify: FlexJustify
  wrap: boolean
}
