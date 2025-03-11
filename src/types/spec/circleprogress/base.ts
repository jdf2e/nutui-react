import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export interface BaseCircleProgress extends BaseProps {
  percent: SimpleValue
  strokeWidth: SimpleValue
  radius: SimpleValue
  strokeLinecap: 'butt' | 'round' | 'square' | 'inherit'
  color: Record<string, string> | string
  background: string
  clockwise: boolean
}
