import { RefObject } from 'react'
import { PopupProps } from '@/packages/popup/types'
import { BasicComponent } from '@/utils/typings'

export type PickerRef = PickerActions
export type PickerActions = {
  open: () => void
  close: () => void
}
export type ColumnsType = 'single' | 'multiple' | 'cascade'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

export interface PickerProps extends Omit<BasicComponent, 'children'> {
  visible?: boolean | undefined
  title?: string
  options: (PickerOption | PickerOption[])[]
  value?: (number | string)[]
  defaultValue?: (number | string)[]
  threeDimensional?: boolean
  duration: number | string
  closeOnOverlayClick: boolean
  popupProps: Partial<
    Omit<PopupProps, 'title' | 'onClose' | 'closeOnOverlayClick'>
  >
  onConfirm?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  onCancel?: () => void
  onClose?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  afterClose?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
  onChange?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
  children?: any
}
