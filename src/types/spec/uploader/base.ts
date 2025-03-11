import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export type UploaderFileItem = {
  status?: UploaderFileStatus
  message?: string
  uid?: SimpleValue
  name?: string
  url?: string
  type?: 'image' | 'list'
  path?: string
  loadingIcon?: React.ReactNode
  failIcon?: React.ReactNode
  file?: File
  percentage?: number
}

export type UploaderFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export type UploaderFileType<T> = { [key: string]: T }

export interface BaseUploader extends BaseProps {
  maxCount: SimpleValue
  maxFileSize: number
  defaultValue?: UploaderFileItem[]
  value?: UploaderFileItem[]
  previewType: 'picture' | 'list'
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  upload: (file: File) => Promise<UploaderFileItem>
  uploadIcon?: React.ReactNode
  deleteIcon?: React.ReactNode
  uploadLabel?: React.ReactNode
  name: string
  accept: string
  disabled: boolean
  autoUpload: boolean
  multiple: boolean
  clearInput: boolean
  preview: boolean
  deletable: boolean
  capture: boolean | 'user' | 'environment'
  previewUrl?: string
  onDelete?: (file: UploaderFileItem, files: UploaderFileItem[]) => void
  onOversize?: (files: File[]) => void
  onOverCount?: (count: number) => void
  onChange?: (files: UploaderFileItem[]) => void
  beforeUpload?: (files: File[]) => Promise<File[]>
  beforeDelete?: (file: UploaderFileItem, files: UploaderFileItem[]) => boolean
  onFileItemClick?: (file: UploaderFileItem, index: number) => void
  onUploadQueueChange?: (tasks: UploaderFileItem[]) => void
}
