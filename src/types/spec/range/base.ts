import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type RangeValue = number | number[]
export type RangeMark = { value: number; label?: ReactNode }

export interface BaseRange extends BaseProps {
  value: RangeValue
  defaultValue: RangeValue
  range: boolean
  disabled: boolean
  min: number
  max: number
  step: number
  minDescription: ReactNode
  maxDescription: ReactNode
  button: ReactNode
  vertical: boolean
  marks: Record<string, ReactNode> | RangeMark[]
  currentDescription: ((value: RangeValue) => ReactNode) | null
  onChange: (value: RangeValue) => void
  onStart: () => void
  onEnd: (value: RangeValue) => void
}
