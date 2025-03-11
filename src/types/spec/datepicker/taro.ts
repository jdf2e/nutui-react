import { BaseDatePicker } from './base'
import { TaroPickerProps } from '../picker/taro'

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
