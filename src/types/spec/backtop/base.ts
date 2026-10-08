import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseBackTop extends BaseProps {
  zIndex: number
  target?: string
  threshold: number
  duration: number
  tabbarHeight?: number
  icon?: ReactNode
  onClick?: (event: any) => void
}
