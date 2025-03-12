import { ITouchEvent } from '@tarojs/components'
import { BaseInputNumber } from './base'
import { TaroInputType } from '../input/taro'
import { SimpleValue } from '@/types'

export interface TaroInputNumberProps
  extends Omit<
    BaseInputNumber,
    'onPlus' | 'onMinus' | 'onOverlimit' | 'onBlur' | 'onFocus' | 'onChange'
  > {
  type: TaroInputType
  onPlus?: (e: ITouchEvent) => void
  onMinus?: (e: ITouchEvent) => void
  onOverlimit?: (e: ITouchEvent | React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (
    param: SimpleValue,
    e: ITouchEvent | React.ChangeEvent<HTMLInputElement>
  ) => void
}
