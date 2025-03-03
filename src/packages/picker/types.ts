import { PopupProps } from '@/packages/popup/types'
import { BasicComponent } from '@/utils/typings'
import {
  PickerOnChangeCallbackParameter,
  PickerOption,
  PickerOptions,
  PickerValue,
} from '@/packages/pickerview/types'

export type PickerRef = PickerActions
export type PickerActions = {
  open: () => void
  close: () => void
}
export type ColumnsType = 'single' | 'multiple' | 'cascade'

export interface PickerProps extends Omit<BasicComponent, 'children'> {
  visible?: boolean | undefined
  title?: string
  options: PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration: number | string
  closeOnOverlayClick: boolean
  renderLabel?: (item: PickerOption) => React.ReactNode

  popupProps: Partial<
    Omit<PopupProps, 'title' | 'onClose' | 'closeOnOverlayClick'>
  >
  onConfirm?: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => void
  onCancel?: () => void
  onClose?: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => void
  onChange?: (args0: PickerOnChangeCallbackParameter) => void
  children?: any
}
