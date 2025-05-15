import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import { BaseSearchBar } from './base'

export interface WebSearchBarProps
  extends Omit<
    BaseSearchBar,
    'onChange' | 'onFocus' | 'onBlur' | 'onClear' | 'onInputClick'
  > {
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  onClear?: (event: MouseEvent<HTMLDivElement>) => void
  onInputClick?: (event: MouseEvent<HTMLInputElement>) => void
}
