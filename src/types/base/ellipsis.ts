import { BaseProps } from './baseprops'
import { Align, SimpleValue } from './baseatom'

export type EllipsisDirection = 'start' | 'end' | 'middle'

export type EllipsisState = 'expand' | 'collapse'

export interface BaseEllipsis extends BaseProps {
  content: string
  direction: Align
  rows: SimpleValue
  expandText: string
  collapseText: string
  symbol: string
  lineHeight: SimpleValue
  onClick: () => void
  onChange: (type: EllipsisState) => void
}
