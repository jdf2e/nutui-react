export type ResultPageStatusOptions = {
  [key: string]: string
}

export type ResultPageStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'waiting'
