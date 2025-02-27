import { BaseProps } from '@/types/base/baseprops'
import { SimpleValue } from '@/types/base/baseatom'

export interface BaseCircleProgress extends BaseProps {
  percent: SimpleValue
  strokeWidth: SimpleValue
  radius: SimpleValue
  strokeLinecap: 'butt' | 'round' | 'square' | 'inherit'
  color: Record<string, string> | string
  background: string
  clockwise: boolean
}
