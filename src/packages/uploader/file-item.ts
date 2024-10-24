import { ReactNode } from 'react'

export interface FileItem {
  status?: FileItemStatus

  message?: string

  uid?: string | number

  name?: string

  url?: string

  type?: 'image' | 'list' | string

  path?: string

  loadingIcon?: ReactNode

  failIcon?: ReactNode

  file?: File
}

export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error'

export type FileType<T> = { [key: string]: T }
