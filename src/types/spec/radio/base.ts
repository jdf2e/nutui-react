import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Direction, PositionX, SimpleValue } from '../../base/atoms'

export type RadioShape = 'button' | 'round'
export interface RadioGroupOption {
  label: string
  value: string
  disabled?: boolean
  shape?: RadioShape
  onChange?: (checked: boolean) => void
}

export interface BaseRadio extends BaseProps {
  disabled: boolean
  checked: boolean
  defaultChecked: boolean
  shape: RadioShape
  labelPosition: PositionX
  icon: ReactNode
  activeIcon: ReactNode
  value: SimpleValue
  onChange: (checked: boolean) => void
}

export interface BaseRadioGroup extends BaseProps {
  value?: SimpleValue
  defaultValue?: SimpleValue
  labelPosition: PositionX
  direction: Direction
  shape?: RadioShape
  disabled?: boolean
  options: RadioGroupOption[]
  onChange: (value: SimpleValue) => void
}
