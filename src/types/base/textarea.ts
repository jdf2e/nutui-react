import { BaseProps } from './baseprops'

export interface BaseTextArea extends BaseProps {
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
  onBlur: (event: any) => void
  onFocus: (event: any) => void
}
