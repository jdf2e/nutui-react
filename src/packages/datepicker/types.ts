import { BasicComponent } from '@/utils/typings'
import { PickerOption, PickerProps } from '../picker/types'

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
  filter: (type: string, option: PickerOption[]) => PickerOption[]
  onClose: () => void
  onCancel: () => void
  onConfirm: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  onChange?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
  children?: any
}
