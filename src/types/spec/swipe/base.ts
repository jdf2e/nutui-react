import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { PositionX, SimpleValue } from '../../base/atoms'

export interface SwipeRef {
  open: (side: PositionX) => void
  close: () => void
}

export interface BaseSwipe extends BaseProps {
  name?: SimpleValue
  leftAction?: ReactNode
  rightAction?: ReactNode
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
  beforeClose?: (position: string) => void
  disabled?: boolean
  onOpen?: ({
    name,
    position,
  }: {
    name: string | number
    position: PositionX
  }) => void
  onClose?: ({
    name,
    position,
  }: {
    name: string | number
    position: PositionX
  }) => void
  onActionClick?: (event: any, position: PositionX) => void
  onTouchStart?: (event: any) => void
  onTouchEnd?: (event: any) => void
  onTouchMove?: (event: any) => void
}
