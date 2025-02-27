import { ReactNode } from 'react'
import { BaseProps } from './baseprops'

export type ActionSheetOption<T> = { [key: string]: T }

export interface BaseActionSheet extends BaseProps {
  visible: boolean
  description: ReactNode
  options: ActionSheetOption<string | boolean>[]
  optionKey: ActionSheetOption<string>
  cancelText: ReactNode
  onCancel: () => void
  onSelect: (item: ActionSheetOption<string | boolean>, index: number) => void
}
