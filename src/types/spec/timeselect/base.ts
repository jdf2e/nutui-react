import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface TimeType {
  value?: string
  text?: string
  [prop: string]: any
}

export interface TimeSelectDateType {
  value?: string
  text?: string
  children?: TimeType[]
  [prop: string]: any
}

export interface TimeSelectOptionKeyType {
  valueKey: string
  textKey: string
  childrenKey: string
}

export interface BaseTimeSelect extends BaseProps {
  visible: boolean
  multiple?: boolean
  title?: ReactNode
  defaultValue: TimeSelectDateType[]
  options: TimeSelectDateType[]
  optionKey: TimeSelectOptionKeyType
  onSelect?: (value: TimeSelectDateType[]) => void
  onDateChange?: (date: TimeSelectDateType, value: TimeSelectDateType[]) => void
  onTimeChange?: (time: TimeType, value: TimeSelectDateType[]) => void
}

export interface BaseTimeSelectDetail extends BaseProps {
  activeDate: string
  activeTime: TimeSelectDateType[]
  options: TimeSelectDateType[]
  optionKey: TimeSelectOptionKeyType
  onSelect: (time: TimeType) => void
}
