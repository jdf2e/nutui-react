import { ReactNode } from 'react'
import { BaseProps, Direction } from '@/types'

export interface BaseTabbar extends BaseProps {
  defaultValue: number
  value?: number
  fixed: boolean
  inactiveColor: string
  activeColor: string
  direction: Direction
  safeArea: boolean
  /** 换肤背板内容；传入时替代默认的 bottom-bar 材质 */
  skinBackground?: ReactNode
  agent?: ReactNode
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
  direction: Direction
  onActiveClick: () => void
}
