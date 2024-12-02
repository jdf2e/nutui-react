export type ResultPageStatusOptions = {
  [key: string]: React.ReactNode
}

export type ResultPageStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'waiting'
