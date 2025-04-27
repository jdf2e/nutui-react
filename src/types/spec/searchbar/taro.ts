import { BaseEventOrig, ITouchEvent, InputProps } from '@tarojs/components'
import { BaseSearchBar } from './base'

type inputEventDetail = InputProps.inputEventDetail
type inputForceEventDetail = InputProps.inputForceEventDetail
type inputValueEventDetail = InputProps.inputValueEventDetail

export interface TaroSearchBarProps
  extends Omit<
    BaseSearchBar,
    'onChange' | 'onFocus' | 'onBlur' | 'onClear' | 'onInputClick'
  > {
  onChange?: (value: string, event?: BaseEventOrig<inputEventDetail>) => void
  onFocus?: (value: string, event: BaseEventOrig<inputForceEventDetail>) => void
  onBlur?: (value: string, event: BaseEventOrig<inputValueEventDetail>) => void
  onClear?: (event: ITouchEvent) => void
  onInputClick?: (event: ITouchEvent) => void
}
