import { BasicComponent } from '@/utils/typings'
import { PickerOptions, PickerValue, PickerOption } from '@/types'

export interface DatePickerViewProps extends BasicComponent {
  value?: Date
  defaultValue?: Date
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
  formatter: (type: string, option: PickerOption) => PickerOption
  filter: (type: string, options: PickerOptions) => PickerOptions
  onChange: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[],
    columnIndex: number
  ) => void
}
