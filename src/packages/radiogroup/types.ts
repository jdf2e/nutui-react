export interface RadioGroupOptionType {
  label: string
  value: string
  disabled?: boolean
  onChange?: (checked: boolean) => void
}
