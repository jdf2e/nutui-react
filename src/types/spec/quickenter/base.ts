import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type QuickEnterRef = QuickEnterActions
export type QuickEnterActions = {
  open: () => void
  close: () => void
}

export interface QuickEnterOption extends Record<string, any> {
  title?: string
  icon?: ReactNode
  type?: string
  url?: string
  badge?: boolean | ReactNode
  badgeProps?: any
}

export interface BaseQuickEnter<POPUP_PROPS = any> extends BaseProps {
  visible?: boolean
  title?: ReactNode
  options?: QuickEnterOption[]
  popupProps?: POPUP_PROPS
  closeOnOverlayClick?: boolean
  closeIcon?: ReactNode
  onClose?: () => void
  onChange?: (item: QuickEnterOption, index: number) => void
  children?: ReactNode
}
