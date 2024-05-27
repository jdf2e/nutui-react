export type statusOptions = {
  [key: string]: string
}

export type ResultPageStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'waiting'
