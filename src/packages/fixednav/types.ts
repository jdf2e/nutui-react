import { Key, ReactNode } from 'react'
import { OverlayProps } from '@/packages/overlay/types'

export type FixedNavType = 'right' | 'left'
export type FixedNavPosition = {
  top?: string
  bottom?: string
}

export interface FixedNavItem {
  id: Key
  num?: number
  text: ReactNode
  icon: ReactNode
}

export interface FixedNavProps extends Omit<OverlayProps, 'onClick'> {
  overlay: boolean
  activeText: string
  inactiveText: string
  position: FixedNavPosition
  type: FixedNavType
  content?: React.ReactNode
  list: Array<FixedNavItem>
  onChange: (value: boolean) => void
  onSelect: (
    item: FixedNavItem,
    event: React.MouseEvent<Element, MouseEvent>
  ) => void
}
