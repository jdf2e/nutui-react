import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type BaseNumberKeyboard<POPUP_PROPS = any> = POPUP_PROPS &
  BaseProps & {
    visible: boolean
    rightActions: ReactNode
    confirmText: string
    type: 'default' | 'rightColumn'
    custom: Array<string>
    random: boolean
    onChange: (value: string) => void
    onDelete: () => void
    onClose: () => void
    onConfirm: () => void
  }
