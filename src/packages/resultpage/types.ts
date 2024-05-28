export type ResultPageStatusOptions = {
  [key: string]: string
}

export type ResultPageAction = {
  text: React.ReactNode
  type?: 'primary' | 'default' | 'danger' | 'info' | 'success' | 'warning'
  size?: 'normal' | 'xlarge' | 'large' | 'small' | 'mini'
  fill?: 'solid' | 'outline' | 'none'
  disabled?: boolean
  onClick?: () => () => void
}

export type ResultPageStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'waiting'
