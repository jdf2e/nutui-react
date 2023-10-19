import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react'
import classNames from 'classnames'
import { Photograph } from '@nutui/icons-react'
import { ERROR, SUCCESS, Upload, UPLOADING, UploadOptions } from './upload'
import { useConfig } from '@/packages/configprovider'
import { funcInterceptor } from '@/utils/interceptor'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Button from '@/packages/button'
import { usePropsValue } from '@/utils/use-props-value'
import { Preview } from '@/packages/uploader/preview'
import { FileItem } from './file-item'

export interface UploaderProps extends BasicComponent {
  url: string
  maxCount: string | number
  maxFileSize: number
  defaultValue?: FileItem[]
  value?: FileItem[]
  previewType: 'picture' | 'list'
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  uploadIcon?: React.ReactNode
  uploadLabel?: React.ReactNode
  name: string
  accept: string
  disabled: boolean
  autoUpload: boolean
  multiple: boolean
  timeout: number
  data: any
  method: string
  xhrState: number | string
  headers: any
  withCredentials: boolean
  clearInput: boolean
  preview: boolean
  deletable: boolean
  capture: boolean | 'user' | 'environment'
  className: string
  previewUrl?: string
  style: React.CSSProperties
  onStart?: (option: UploadOptions) => void
  onDelete?: (file: FileItem, files: FileItem[]) => void
  onSuccess?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    files: FileItem[]
  }) => void
  onProgress?: (param: {
    e: ProgressEvent<XMLHttpRequestEventTarget>
    option: UploadOptions
    percentage: string | number
  }) => void
  onFailure?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    files: FileItem[]
  }) => void
  onUpdate?: (files: FileItem[]) => void
  onOversize?: (files: File[]) => void
  onChange?: (files: FileItem[]) => void
  beforeUpload?: (files: File[]) => Promise<File[] | boolean>
  beforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void
  beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
  onFileItemClick?: (file: FileItem, index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  url: '',
  maxCount: 1,
  previewType: 'picture',
  fit: 'cover',
  name: 'file',
  accept: '*',
  disabled: false,
  autoUpload: true,
  multiple: false,
  maxFileSize: Number.MAX_VALUE,
  data: {},
  headers: {},
  method: 'post',
  xhrState: 200,
  timeout: 1000 * 30,
  withCredentials: false,
  clearInput: true,
  preview: true,
  deletable: true,
  capture: false,
  uploadIcon: <Photograph width="20px" height="20px" color="#808080" />,
  beforeDelete: (file: FileItem, files: FileItem[]) => {
    return true
  },
} as UploaderProps

const InternalUploader: ForwardRefRenderFunction<
  unknown,
  PropsWithChildren<Partial<UploaderProps>>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    children,
    uploadIcon,
    uploadLabel,
    name,
    accept,
    defaultValue,
    value,
    previewType,
    fit,
    disabled,
    multiple,
    url,
    previewUrl,
    headers,
    timeout,
    method,
    xhrState,
    withCredentials,
    data,
    preview,
    deletable,
    maxCount,
    capture,
    maxFileSize,
    className,
    autoUpload,
    clearInput,
    onStart,
    onDelete,
    onChange,
    onFileItemClick,
    onProgress,
    onSuccess,
    onUpdate,
    onFailure,
    onOversize,
    beforeUpload,
    beforeXhrUpload,
    beforeDelete,
    ...restProps
  } = { ...defaultProps, ...props }
  const [fileList, setFileList] = usePropsValue({
    value,
    defaultValue,
    finalValue: [],
    onChange: (v) => {
      onChange?.(v)
    },
  })
  const [uploadQueue, setUploadQueue] = useState<Promise<Upload>[]>([])

  const classes = classNames(className, 'nut-uploader')

  useImperativeHandle(ref, () => ({
    submit: () => {
      Promise.all(uploadQueue).then((res) => {
        res.forEach((i) => i.upload())
      })
    },
    clear: () => {
      clearUploadQueue()
    },
  }))

  const clearUploadQueue = (index = -1) => {
    if (index > -1) {
      uploadQueue.splice(index, 1)
      setUploadQueue(uploadQueue)
    } else {
      setUploadQueue([])
      fileList.splice(0, fileList.length)
      setFileList([...fileList])
    }
  }

  const clearInputValue = (el: HTMLInputElement) => {
    el.value = ''
  }

  const executeUpload = (fileItem: FileItem, index: number) => {
    const uploadOption = new UploadOptions()
    uploadOption.url = url
    for (const [key, value] of Object.entries<string | Blob>(data)) {
      fileItem.formData?.append(key, value)
    }
    uploadOption.formData = fileItem.formData
    uploadOption.timeout = timeout * 1
    uploadOption.method = method
    uploadOption.xhrState = xhrState
    uploadOption.headers = headers
    uploadOption.withCredentials = withCredentials
    uploadOption.beforeXhrUpload = beforeXhrUpload
    try {
      uploadOption.sourceFile = fileItem.formData?.get(name)
    } catch (error) {
      console.warn(error)
    }
    uploadOption.onStart = (option: UploadOptions) => {
      clearUploadQueue(index)
      setFileList(
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'ready'
            item.message = locale.uploader.readyUpload
          }
          return item
        })
      )
      onStart && onStart(option)
    }
    uploadOption.onProgress = (
      e: ProgressEvent<XMLHttpRequestEventTarget>,
      option: UploadOptions
    ) => {
      setFileList(
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = UPLOADING
            item.message = locale.uploader.uploading
            item.percentage = ((e.loaded / e.total) * 100).toFixed(0)
            onProgress && onProgress({ e, option, percentage: item.percentage })
          }
          return item
        })
      )
    }
    uploadOption.onSuccess = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      const list = fileList.map((item) => {
        if (item.uid === fileItem.uid) {
          item.status = SUCCESS
          item.message = locale.uploader.success
          item.responseText = responseText
        }
        return item
      })
      setFileList(list)
      onUpdate?.(list)
      onSuccess?.({
        responseText,
        option,
        files: list,
      })
    }
    uploadOption.onFailure = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      const list = fileList.map((item) => {
        if (item.uid === fileItem.uid) {
          item.status = ERROR
          item.message = locale.uploader.error
          item.responseText = responseText
        }
        return item
      })
      setFileList(list)
      onFailure?.({
        responseText,
        option,
        files: list,
      })
    }
    const task = new Upload(uploadOption)
    if (props.autoUpload) {
      task.upload()
    } else {
      uploadQueue.push(
        new Promise((resolve, reject) => {
          resolve(task)
        })
      )
      setUploadQueue(uploadQueue)
    }
  }

  const readFile = (files: File[]) => {
    files.forEach((file: File, index: number) => {
      const formData = new FormData()
      formData.append(name, file)
      const fileItem = new FileItem()
      fileItem.name = file.name
      fileItem.status = 'ready'
      fileItem.type = file.type
      fileItem.formData = formData
      fileItem.uid = file.lastModified + fileItem.uid
      fileItem.message = autoUpload
        ? locale.uploader.readyUpload
        : locale.uploader.waitingUpload

      executeUpload(fileItem, index)

      if (preview && file.type.includes('image')) {
        const reader = new FileReader()
        reader.onload = (event: ProgressEvent<FileReader>) => {
          fileItem.url = (event.target as FileReader).result as string
          fileList.push(fileItem)
          setFileList([...fileList])
        }
        reader.readAsDataURL(file)
      } else {
        setFileList([...fileList, fileItem])
      }
    })
  }

  const filterFiles = (files: File[]) => {
    const maximum = (props.maxCount as number) * 1
    const oversizes = new Array<File>()
    const filterFile = files.filter((file: File) => {
      if (file.size > maxFileSize) {
        oversizes.push(file)
        return false
      }
      return true
    })
    if (oversizes.length) {
      onOversize && onOversize(files)
    }

    if (filterFile.length > maximum) {
      filterFile.splice(maximum, filterFile.length - maximum)
    }
    if (fileList.length !== 0) {
      const index = maximum - fileList.length
      filterFile.splice(index, filterFile.length - index)
    }

    return filterFile
  }

  const deleted = (file: FileItem, index: number) => {
    const deletedFileList = fileList.filter((file, idx) => idx !== index)
    onDelete?.(file, deletedFileList)
    setFileList(deletedFileList)
  }

  const onDeleteItem = (file: FileItem, index: number) => {
    clearUploadQueue(index)
    funcInterceptor(beforeDelete, {
      args: [file, fileList],
      done: () => deleted(file, index),
    })
  }

  const fileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return
    }
    const $el = event.target
    const { files } = $el

    if (beforeUpload) {
      beforeUpload(new Array<File>().slice.call(files)).then(
        (f: Array<File> | boolean) => {
          const _files: File[] = filterFiles(new Array<File>().slice.call(f))
          readFile(_files)
        }
      )
    } else {
      const _files = filterFiles(new Array<File>().slice.call(files))
      readFile(_files)
    }

    setFileList(fileList)

    if (clearInput) {
      clearInputValue($el)
    }
  }

  const handleItemClick = (file: FileItem, index: number) => {
    onFileItemClick?.(file, index)
  }

  return (
    <div className={classes} {...restProps}>
      {(children || previewType === 'list') && (
        <div className="nut-uploader__slot">
          {children || (
            <Button size="small" type="primary">
              上传文件
            </Button>
          )}
          {maxCount > fileList.length && (
            <input
              className="nut-uploader__input"
              type="file"
              capture={capture}
              name={name}
              accept={accept}
              disabled={disabled}
              multiple={multiple}
              onChange={fileChange}
            />
          )}
        </div>
      )}

      <Preview
        {...{
          fileList,
          previewType,
          deletable,
          onDeleteItem,
          handleItemClick,
          previewUrl,
          children,
        }}
      />

      {maxCount > fileList.length && previewType === 'picture' && !children && (
        <div
          className={classNames('nut-uploader__upload', previewType, {
            'nut-uploader__upload-disabled': disabled,
          })}
        >
          <div className="nut-uploader__icon">
            {uploadIcon}
            <span className="nut-uploader__icon-tip">{uploadLabel}</span>
          </div>

          <input
            className="nut-uploader__input"
            type="file"
            capture={capture}
            name={name}
            accept={accept}
            disabled={disabled}
            multiple={multiple}
            onChange={fileChange}
          />
        </div>
      )}
    </div>
  )
}

export const Uploader = React.forwardRef(InternalUploader)

Uploader.defaultProps = defaultProps
Uploader.displayName = 'NutUploader'
