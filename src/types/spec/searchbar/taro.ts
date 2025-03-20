import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import { ITouchEvent } from '@tarojs/components'
import { BaseSearchBar } from './base'

export interface TaroSearchBarProps
  extends Omit<
    BaseSearchBar,
    'onChange' | 'onFocus' | 'onBlur' | 'onClear' | 'onInputClick'
  > {
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  onClear?: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
  onInputClick?: (event: MouseEvent<HTMLInputElement>) => void
}
