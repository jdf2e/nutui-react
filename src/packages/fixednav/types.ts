import { Key, ReactNode } from 'react'

export type FixedNavDirection = 'right' | 'left'
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
