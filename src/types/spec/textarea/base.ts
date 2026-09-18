import { BaseProps } from '../../base/props'

export type TextAreaContainerType = 'gray' | 'white'

export interface BaseTextArea<EVENT = any> extends BaseProps {
  viewId: string
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
  containerType: TextAreaContainerType
  status: 'error' | 'default'
  onChange: (value: string) => void
  onBlur: (event: EVENT) => void
  onFocus: (event: EVENT) => void
}
