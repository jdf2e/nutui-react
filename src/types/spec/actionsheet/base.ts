import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type ActionSheetOption<T> = { [key: string]: T }

export type BaseActionSheet<POPUP_PROPS = any> = POPUP_PROPS &
  BaseProps & {
    visible: boolean
    description: ReactNode
    options: ActionSheetOption<string | boolean>[]
    optionKey: ActionSheetOption<string>
    cancelText: ReactNode
    onCancel: () => void
    onSelect: (item: ActionSheetOption<string | boolean>, index: number) => void
  }
