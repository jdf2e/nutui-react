import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseTrendArrow extends BaseProps {
  value: number
  digits: number
  symbol: boolean
  zero: boolean
  left: boolean
  sync: boolean
  color: string
  riseColor: string
  dropColor: string
  riseIcon: ReactNode
  dropIcon: ReactNode
}
