import { PickerProps } from '@/packages/picker/types.taro'
import { DatePickerProps as DatePickerWebProps } from './types'

export type DatePickerProps = Omit<DatePickerWebProps, 'pickerProps'> & {
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
}
