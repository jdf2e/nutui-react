import { BaseProps } from '../../base/props'
import { SimpleValue, UILayout } from '../../base/atoms'

export interface BaseCol extends BaseProps {
  span: SimpleValue
  offset: SimpleValue
  gutter: SimpleValue
  isFirst: boolean
  isLast: boolean
  onClick: (e: any, type: UILayout) => void
}

export interface BaseRow extends BaseProps {
  type: string
  justify: string
  align: string
  wrap: string
  gutter: SimpleValue
  onClick: (e: any, type: UILayout) => void
}
