import { BasicComponent } from '@/utils/typings'
import { PickerOption } from '@/packages/picker/types'

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
  filter: (type: string, option: PickerOption[]) => PickerOption[]
  onChange?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
}
