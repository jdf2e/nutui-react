import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { Direction, PositionX, SimpleValue, UIRound } from './baseatom'

export interface RadioGroupOption {
  label: string
  value: string
  disabled?: boolean
  shape?: UIRound
  onChange?: (checked: boolean) => void
}

export interface BaseRadio extends BaseProps {
  disabled: boolean
  checked: boolean
  defaultChecked: boolean
  shape: UIRound
  labelPosition: PositionX
  icon: ReactNode
  activeIcon: ReactNode
  value: SimpleValue
  onChange: (checked: boolean) => void
}

export interface BaseRadioGroup extends BaseProps {
  value: SimpleValue
  defaultValue: SimpleValue
  labelPosition: PositionX
  direction: Direction
  shape: UIRound
  disabled: boolean
  options: RadioGroupOption[]
  onChange: (value: SimpleValue) => void
}
