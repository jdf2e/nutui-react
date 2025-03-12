import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { PositionX } from '../../base/atoms'

export type CheckboxLimit = 'max' | 'min'
export type CheckboxDirection = 'horizontal' | 'vertical'
export type CheckboxShape = 'button' | 'round'

export interface CheckboxGroupOption {
  label: string
  value: string
  disabled: boolean
  onChange: (state: boolean, label: string) => void
}

export interface BaseCheckbox extends BaseProps {
  checked: boolean
  disabled: boolean
  defaultChecked: boolean
  shape: CheckboxShape
  labelPosition: PositionX
  icon: ReactNode
  activeIcon: ReactNode
  indeterminateIcon: ReactNode
  value: string | number
  indeterminate: boolean
  label: ReactNode
  onChange: (value: boolean) => void
}

export interface BaseCheckboxGroup extends BaseProps {
  disabled?: boolean
  value?: string[]
  defaultValue?: string[]
  list: boolean
  max: number | undefined
  min: number | undefined
  labelPosition: PositionX
  direction: CheckboxDirection
  options: CheckboxGroupOption[]
  onChange: (value: string[]) => void
  onLimit: (type: CheckboxLimit) => void
}
