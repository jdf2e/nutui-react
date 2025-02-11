import { BasicComponent } from '@/utils/typings'

export type PickerValue = string | number | null

export interface PickerOptionItem {
  label: string | number
  value: string | number
  children?: PickerOptionItem[]
}

export type PickerOptions = PickerOptionItem[]

export interface PickerRollerProps {
  options: PickerOptionItem[]
  keyIndex: number
  value: PickerValue
  threeDimensional?: boolean
  duration?: number | string
  onSelect: (option: PickerOptionItem, index: number) => void
  renderLabel: (item: PickerOptionItem) => React.ReactNode
}

export interface PickerOnChangeCallbackParameter {
  value: PickerValue[]
  index: number
  selectedOptions: PickerOptionItem[]
}

export interface PickerViewProps extends BasicComponent {
  setRefs?: (ref: any) => any
  options: PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration?: number | string
  renderLabel: (item: PickerOptionItem) => React.ReactNode
  onChange?: (arg0: PickerOnChangeCallbackParameter) => void
}
