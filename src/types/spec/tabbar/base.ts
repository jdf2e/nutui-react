import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseTabbar extends BaseProps {
  defaultValue: number
  value?: number
  fixed: boolean
  inactiveColor: string
  activeColor: string
  safeArea: boolean
  onSwitch: (value: number) => void
}

export interface BaseTabbarItem extends BaseProps {
  title: ReactNode
  icon: ReactNode
  value: ReactNode
  dot: boolean
  max: number
  top: string
  right: string
}
