import { MouseEventHandler } from 'react'

export interface RadioGroupOptionType {
  label: string
  value: string
  disabled?: boolean
  onChange?: MouseEventHandler<HTMLDivElement>
}
