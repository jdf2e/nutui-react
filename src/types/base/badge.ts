import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

export type BadgeFill = 'solid' | 'outline'
export type BadgeDotSize = 'small' | 'normal' | 'large'

export interface BaseBadge extends BaseProps {
  value: ReactNode
  dot: boolean
  max: number
  top: SimpleValue
  right: SimpleValue
  fill: BadgeFill
  size: BadgeDotSize
}
