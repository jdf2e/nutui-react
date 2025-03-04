import { Key, ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { PositionX } from '../../base/atoms'

export type FixedNavPosition = {
  top?: 'auto'
  bottom?: 'auto'
}

export interface FixedNavItem {
  id: Key
  num?: number
  text: ReactNode
  icon: ReactNode
}

export type BaseFixedNav<OverlayProps> = OverlayProps &
  BaseProps & {
    overlay: boolean
    activeText: string
    inactiveText: string
    position: FixedNavPosition
    type: PositionX
    content?: ReactNode
    list: Array<FixedNavItem>
    onChange: (value: boolean) => void
    onSelect: (item: FixedNavItem, event: any) => void
  }
