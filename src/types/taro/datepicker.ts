import { BaseDatePicker } from '../base/datepicker'
import { TaroPickerProps } from './picker'

export interface TaroDatePickerProps
  extends Omit<BaseDatePicker, 'pickerProps'> {
  pickerProps: Partial<
    Omit<
      TaroPickerProps,
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
}
