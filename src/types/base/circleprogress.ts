import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

export interface BaseCircleProgress extends BaseProps {
  percent: SimpleValue
  strokeWidth: SimpleValue
  radius: SimpleValue
  strokeLinecap: 'butt' | 'round' | 'square' | 'inherit'
  color: Record<string, string> | string
  background: string
  clockwise: boolean
}
