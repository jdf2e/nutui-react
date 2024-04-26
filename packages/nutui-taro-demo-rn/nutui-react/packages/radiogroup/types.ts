export interface RadioGroupOption {
  label: string
  value: string
  disabled?: boolean
  shape?: RadioGroupShape
  onChange?: (checked: boolean) => void
}

export type RadioGroupPosition = 'left' | 'right'
export type RadioGroupDirection = 'horizontal' | 'vertical'
export type RadioGroupShape = 'button' | 'round'
