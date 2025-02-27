import { BasicComponent } from '@/utils/typings'
import { PickerProps } from '@/packages/picker/types'
import { PickerOptions, PickerValue, PickerOption } from '@/packages/pickerview'

export type DatePickerRef = DatePickerActions
export type DatePickerActions = {
  open: () => void
  close: () => void
}

export interface DatePickerProps extends BasicComponent {
  value?: Date
  defaultValue?: Date
  visible: boolean
  title: string
  type:
    | 'date'
    | 'time'
    | 'year-month'
    | 'month-day'
    | 'datehour'
    | 'datetime'
    | 'hour-minutes'
  showChinese: boolean
  minuteStep: number
  startDate: Date
  endDate: Date
  threeDimensional: boolean
  pickerProps: Partial<
    Omit<
      PickerProps,
      | 'defaultValue'
      | 'threeDimensional'
      | 'title'
      | 'value'
      | 'onConfirm'
      | 'onClose'
      | 'onCancel'
      | 'onChange'
    >
  >
  formatter: (type: string, option: PickerOption) => PickerOption
  filter: (type: string, options: PickerOptions) => PickerOptions
  onClose: () => void
  onCancel: () => void
  onConfirm: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => void
  onChange?: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[],
    columnIndex: number
  ) => void
  children?: any
}
