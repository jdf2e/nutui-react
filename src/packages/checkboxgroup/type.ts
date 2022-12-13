import { MouseEventHandler } from 'react'

export interface CheckboxGroupOptionType {
  label: string
  value: string
  disabled?: boolean
  onChange?: (state: boolean, label: string) => void
}
