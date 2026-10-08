import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type ActionSheetOption<T> = { [key: string]: T }

export type ActionSheetTitleAlign = 'left' | 'center'

export type ActionSheetLayout = 'grid' | 'list'

export type BaseActionSheet<POPUP_PROPS = any> = POPUP_PROPS &
  BaseProps & {
    visible: boolean
    title?: ReactNode
    description: ReactNode
    titleAlign: ActionSheetTitleAlign
    headerLeft?: ReactNode
    headerRight?: ReactNode
    options: ActionSheetOption<ReactNode>[]
    optionKey: ActionSheetOption<string>
    columns: 4 | 5
    layout?: ActionSheetLayout
    cancelText: ReactNode
    onCancel: () => void
    onSelect: (item: ActionSheetOption<ReactNode>, index: number) => void
  }
