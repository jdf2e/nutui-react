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
  title: ReactNode | ((active: boolean) => ReactNode)
  icon: ReactNode | ((active: boolean) => ReactNode)
  value: ReactNode | ((active: boolean) => ReactNode)
  dot: boolean
  max: number
  top: string
  right: string
  onDoubleClick: () => void
}
