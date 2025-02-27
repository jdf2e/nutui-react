import { BaseProps } from './baseprops'
import { SimpleValue } from '@/types/base/baseatom'

export type BadgeFill = 'solid' | 'outline'
export type BadgeDotSize = 'small' | 'normal' | 'large'

export interface BaseBadge extends BaseProps {
  value: React.ReactNode
  dot: boolean
  max: number
  top: SimpleValue
  right: SimpleValue
  fill: BadgeFill
  size: BadgeDotSize
}
