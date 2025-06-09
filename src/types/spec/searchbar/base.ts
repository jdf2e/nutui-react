import { ReactNode } from 'react'
import { UIRound } from '../../base/atoms'
import { BaseProps } from '../../base/props'

export interface BaseSearchBar extends BaseProps {
  value: string
  defaultValue: string
  placeholder: string
  shape: UIRound
  disabled: boolean
  maxLength: number
  clearable: boolean
  readOnly: boolean
  autoFocus: boolean
  backable: boolean
  left: ReactNode
  right: ReactNode
  leftIn: ReactNode
  rightIn: ReactNode
  tag: boolean
  onSearch: (val: string) => void
  onChange: (value: string, e: any) => void
  onFocus: (value: string, e: any) => void
  onBlur: (value: string, e: any) => void
  onClear: (e: any) => void
  onInputClick: (e: any) => void
  onItemClick: (value: string, e: any) => void
}
