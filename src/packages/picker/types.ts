export type PickerRef = PickerActions
export type PickerActions = {
  open: () => void
  close: () => void
}
export type ColumnsType = 'single' | 'multiple' | 'cascade'
