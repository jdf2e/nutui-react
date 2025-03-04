import { BaseProps } from '../../base/props'
import { Align, SimpleValue } from '../../base/atoms'

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
