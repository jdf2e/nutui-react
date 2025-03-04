import { ReactNode } from 'react'
import { Align } from '../../base/atoms'
import { BaseProps } from '../../base/props'

export type InputFormatTrigger = 'onChange' | 'onBlur'
export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done'

export interface BaseInput<INPUT_TYPE, CONFIRM_TYPE = InputConfirmType>
  extends BaseProps {
  type: INPUT_TYPE
  name: string
  defaultValue?: string
  value?: string
  placeholder?: string
  align?: Align
  disabled: boolean
  readOnly: boolean
  maxLength: number
  clearable: boolean
  clearIcon: ReactNode
  formatTrigger: InputFormatTrigger
  autoFocus: boolean
  confirmType: CONFIRM_TYPE
  plain: boolean
  formatter?: (value: string) => string
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  onFocus?: (value: string) => void
  onClear?: (value: string) => void
  onClick?: (event: any) => void
}
