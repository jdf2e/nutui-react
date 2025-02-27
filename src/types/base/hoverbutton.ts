import { ReactNode } from 'react'
import { BaseProps } from './baseprops'

export interface BaseHoverButton extends BaseProps, BaseHoverButtonItem {
  zIndex: number
  tabbarHeight: number
}

export interface BaseHoverButtonItem extends BaseProps {
  icon: ReactNode
  onClick: (event: any) => void
}
