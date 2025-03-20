import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { FullPosition, SimpleValues, UITheme } from '../../base/atoms'

export interface PopoverList {
  key?: string
  name: string
  icon?: ReactNode
  disabled?: boolean
  className?: string
  action?: { icon?: ReactNode; onClick?: (e: any) => void }
}

export type BasePopover<POPUP_PROPS> = POPUP_PROPS &
  BaseProps & {
    theme: UITheme
    location: FullPosition
    list: PopoverList[]
    visible: boolean
    offset: SimpleValues
    arrowOffset: number
    targetId: string
    showArrow: boolean
    closeOnOutsideClick: boolean
    closeOnActionClick: boolean
    children?: ReactNode
    onClick: () => void
    onOpen: () => void
    onClose: () => void
    onSelect: (item: PopoverList, index: number) => void
  }
