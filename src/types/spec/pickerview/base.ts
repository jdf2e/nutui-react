import { BaseProps } from '../../base/props'
import {
  PickerOnChangeCallbackParameter,
  PickerOption,
  PickerOptions,
  PickerValue,
} from '../picker/base'

export interface BasePickerView extends BaseProps {
  setRefs?: (ref: any) => any
  options: PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration?: number | string
  renderLabel: (item: PickerOption) => React.ReactNode
  onChange?: (arg0: PickerOnChangeCallbackParameter) => void
}
