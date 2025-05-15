import { BaseProps } from '../../base/props'

export interface BaseTextArea<EVENT = any> extends BaseProps {
  value: string
  defaultValue: string
  showCount: boolean
  maxLength: number
  rows: number
  placeholder: string
  readOnly: boolean
  disabled: boolean
  autoSize: boolean
  plain: boolean
  status: 'error' | 'default'
  onChange: (value: string) => void
  onBlur: (event: EVENT) => void
  onFocus: (event: EVENT) => void
}
