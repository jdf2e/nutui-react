import { BaseProps } from '../../base/props'
import { PickerOption, PickerOptions, PickerValue } from '../picker/base'

export interface BaseDatePickerView extends BaseProps {
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
