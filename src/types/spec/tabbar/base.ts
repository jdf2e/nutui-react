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
  /** 导航背板材质；默认沿用原有普通样式 */
  material?: 'standard' | 'frosted'
  /** 换肤背板内容；传入时优先于 material */
  skinBackground?: ReactNode
  addonBefore?: ReactNode
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
