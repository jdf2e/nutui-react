export type FileItem = {
  status?: FileItemStatus

  message?: string

  uid?: string | number

  name?: string

  url?: string

  type?: 'image' | 'list' | string

  path?: string

  loadingIcon?: React.ReactNode

  failIcon?: React.ReactNode

  file?: File

  percentage?: number
}

export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error'

export type FileType<T> = { [key: string]: T }
