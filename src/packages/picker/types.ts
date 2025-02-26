import { RefObject } from 'react'
import { PopupProps } from '@/packages/popup/types'
import { BasicComponent } from '@/utils/typings'
import { PickerOption, PickerOptions } from '@/packages/pickerview/types'

export type PickerRef = PickerActions
export type PickerActions = {
  open: () => void
  close: () => void
}
export type ColumnsType = 'single' | 'multiple' | 'cascade'

export interface PickerProps extends Omit<BasicComponent, 'children'> {
  visible?: boolean | undefined
  title?: string
  options: (PickerOption | PickerOptions)[]
  value?: (number | string)[]
  defaultValue?: (number | string)[]
  threeDimensional?: boolean
  duration: number | string
  closeOnOverlayClick: boolean
  popupProps: Partial<
    Omit<PopupProps, 'title' | 'onClose' | 'closeOnOverlayClick'>
  >
  onConfirm?: (
    selectedOptions: PickerOptions,
    selectedValue: (string | number)[]
  ) => void
  onCancel?: () => void
  onClose?: (
    selectedOptions: PickerOptions,
    selectedValue: (string | number)[]
  ) => void
  afterClose?: (
    selectedOptions: PickerOptions,
    selectedValue: (string | number)[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
  onChange?: (
    selectedOptions: PickerOptions,
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
  children?: any
}
