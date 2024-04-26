export interface CheckboxGroupOptionType {
  label: string
  value: string
  disabled?: boolean
  onChange?: (state: boolean, label: string) => void
}
export type CheckboxLimit = 'max' | 'min'
export type CheckboxLabelPosition = 'left' | 'right'
export type CheckboxDirection = 'horizontal' | 'vertical'
