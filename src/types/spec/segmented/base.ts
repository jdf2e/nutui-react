import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { SimpleValue, SimpleValues } from '../../base/atoms'

export interface SegmentedItem {
  label: ReactNode
  value: string | number
  icon?: ReactNode
  disabled?: boolean
  className?: string
}

export interface BaseSegmented extends BaseProps {
  options: SimpleValues | SegmentedItem[]
  value: SimpleValue
  defaultValue: SimpleValue
  onChange: (value: SimpleValue) => void
}
