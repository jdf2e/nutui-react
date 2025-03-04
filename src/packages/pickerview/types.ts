import { BasicComponent } from '@/utils/typings'

export type PickerValue = string | number | null

export interface PickerOption {
  label: string | number
  value: string | number
  children?: PickerOptions
}

export type PickerOptions = PickerOption[]

export interface PickerRollerProps {
  options: PickerOptions
  keyIndex: number
  value: PickerValue
  threeDimensional?: boolean
  duration?: number | string
  onSelect: (option: PickerOption, index: number) => void
  renderLabel: (item: PickerOption) => React.ReactNode
}

export interface PickerOnChangeCallbackParameter {
  value: PickerValue[]
  index: number
  selectedOptions: PickerOptions
}

export interface PickerViewProps extends BasicComponent {
  setRefs?: (ref: any) => any
  options: PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration?: number | string
  renderLabel: (item: PickerOption) => React.ReactNode
  onChange?: (arg0: PickerOnChangeCallbackParameter) => void
}
