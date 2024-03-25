export type PopoverTheme = 'light' | 'dark'
export type PopoverLocation =
  | 'bottom'
  | 'top'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'

export interface PopoverList {
  key?: string
  name: string
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
  action?: { icon?: React.ReactNode; onClick?: (e: any) => void }
}
