import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type PickerRef = PickerActions
export type PickerActions = {
  open: () => void
  close: () => void
}

export type PickerValue = string | number | null

export interface PickerOption {
  label: string | number
  value: string | number
  children?: PickerOptions
}

export type PickerOptions = PickerOption[]

export interface BasePickerRoller {
  options: PickerOptions
  keyIndex: number
  value: PickerValue
  threeDimensional: boolean
  duration: number | string
  onSelect: (option: PickerOption, index: number) => void
  renderLabel: (item: PickerOption) => ReactNode
}

export interface PickerOnChangeCallbackParameter {
  value: PickerValue[]
  index: number
  selectedOptions: PickerOptions
}

export type PickerColumnsType = 'single' | 'multiple' | 'cascade'

export interface BasePicker<POPUP_PROPS = any> extends BaseProps {
  visible?: boolean | undefined
  title?: string
  options: PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration: number | string
  closeOnOverlayClick: boolean
  renderLabel?: (item: PickerOption) => React.ReactNode
  popupProps: POPUP_PROPS
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
