import { BaseProps } from '@/types/base/baseprops'
import { SimpleValue, UILayout } from '@/types/base/baseatom'

export interface BaseCol extends BaseProps {
  span: SimpleValue
  offset: SimpleValue
  gutter: SimpleValue
  isFirst: boolean
  isLast: boolean
  onClick: (e: any, type: UILayout) => void
}
