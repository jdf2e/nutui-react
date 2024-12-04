import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useRef,
  useEffect,
} from 'react'
import classNames from 'classnames'
import { Photograph, Failure } from '@nutui/icons-react'
import { useConfig } from '@/packages/configprovider'
import { funcInterceptor } from '@/utils/interceptor'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Button from '@/packages/button'
import { usePropsValue } from '@/utils/use-props-value'
import { Preview } from '@/packages/uploader/preview'
import { FileItem } from './types'
import { mergeProps } from '@/utils/merge-props'

export interface UploaderProps extends BasicComponent {
  maxCount: string | number
  maxFileSize: number
  defaultValue?: FileItem[]
  value?: FileItem[]
  previewType: 'picture' | 'list'
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  upload: (file: File) => Promise<FileItem>
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
  className: string
  previewUrl?: string
  style: React.CSSProperties
  onDelete?: (file: FileItem, files: FileItem[]) => void
  onOversize?: (files: File[]) => void
  onOverCount?: (count: number) => void
  onChange?: (files: FileItem[]) => void
  beforeUpload?: (files: File[]) => Promise<File[]>
  beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
  onFileItemClick?: (file: FileItem, index: number) => void
  onUploadQueueChange?: (tasks: FileItem[]) => void
}

const defaultProps = {
  ...ComponentDefaults,
  maxCount: Number.MAX_VALUE,
  previewType: 'picture',
  fit: 'cover',
  name: 'file',
  accept: '*',
  disabled: false,
  autoUpload: true,
  multiple: false,
  maxFileSize: Number.MAX_VALUE,
  clearInput: true,
  preview: true,
  deletable: true,
  capture: false,
  uploadIcon: <Photograph width="20px" height="20px" color="#808080" />,
  deleteIcon: <Failure color="rgba(0,0,0,0.6)" />,
  beforeDelete: (file: FileItem, files: FileItem[]) => {
    return true
  },
} as UploaderProps

const InternalUploader: ForwardRefRenderFunction<
  unknown,
  PropsWithChildren<Partial<UploaderProps>>
> = (props, ref) => {
  const { locale } = useConfig()
  const fileListRef = useRef<FileItem[]>([])
  const {
    children,
    uploadIcon,
    deleteIcon,
    uploadLabel,
    name,
    accept,
    defaultValue,
    value,
    previewType,
    fit,
    disabled,
    multiple,
    previewUrl,
    preview,
    deletable,
    maxCount,
    capture,
    maxFileSize,
    className,
    autoUpload,
    clearInput,
    upload,
    onDelete,
    onChange,
    onFileItemClick,
    onOversize,
    onOverCount,
    beforeUpload,
    beforeDelete,
    onUploadQueueChange,
    ...restProps
  } = mergeProps(defaultProps, props)
  const [fileList, setFileList] = usePropsValue({
    value,
    defaultValue,
    finalValue: [],
    onChange: (v) => {
      onChange?.(v)
    },
  })
  const [uploadQueue, setUploadQueue] = useState<FileItem[]>([])

  const classes = classNames(className, 'nut-uploader')
  useEffect(() => {
    fileListRef.current = fileList
  }, [fileList])
  useEffect(() => {
    onUploadQueueChange?.(uploadQueue)
  }, [uploadQueue])
  useImperativeHandle(ref, () => ({
    submit: async () => {
      await uploadAction(uploadQueue)
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
      setFileList([])
    }
  }

  const idCountRef = useRef(0)
  const filterFiles = (files: File[]) => {
    const maximum = (maxCount as number) * 1
    const oversizes = new Array<File>()
    const filterFile = files.filter((file: File) => {
      if (file.size > maxFileSize) {
        oversizes.push(file)
        return false
      }
      return true
    })
    oversizes.length && onOversize?.(files)

    if (filterFile.length > maximum) {
      onOverCount?.(filterFile.length)
      filterFile.splice(maximum, filterFile.length - maximum)
    }
    if (fileList.length !== 0) {
      const index = maximum - fileList.length
      filterFile.splice(index, filterFile.length - index)
    }

    return filterFile
  }

  const deleted = (file: FileItem, index: number) => {
    const deletedFileList = fileListRef.current.filter(
      (file, idx) => idx !== index
    )
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

  const fileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    const $el = event.target
    const { files } = $el
    let _files: File[] = []
    const filesArr = new Array<File>().slice.call(files)
    if (beforeUpload) {
      _files = await beforeUpload(filesArr)
      if (!_files.length) $el.value = ''
    }
    _files = filterFiles(filesArr)

    const tasks = _files.map((file) => {
      const info: any = {
        uid: idCountRef.current++,
        status: autoUpload ? 'uploading' : 'ready',
        file,
        message: autoUpload
          ? locale.uploader.uploading
          : locale.uploader.waitingUpload,
        name: file.name,
        type: file.type,
      }
      if (preview && file.type?.includes('image')) {
        const reader = new FileReader()
        reader.onload = (event: ProgressEvent<FileReader>) => {
          fileListRef.current = [
            ...fileListRef.current,
            {
              ...info,
              url: (event.target as FileReader).result as string,
            },
          ]
          setFileList(fileListRef.current)
        }
        reader.readAsDataURL(file)
      }
      return info
    })
    if (!autoUpload) {
      setUploadQueue(tasks)
    } else {
      await uploadAction(tasks)
    }
    if (clearInput) {
      $el.value = ''
    }
  }
  const uploadAction = async (tasks: FileItem[]) => {
    const taskIds = tasks.map((task) => task.uid)
    setFileList(
      fileList.map((file: FileItem) => {
        if (taskIds.includes(file.uid)) {
          return {
            ...file,
            status: 'uploading',
            message: locale.uploader.uploading,
          }
        }
        return file
      })
    )
    await Promise.all(
      tasks.map(async (currentTask, index) => {
        try {
          const result = await upload(currentTask.file as File)
          const list = fileListRef.current.map((item) => {
            if (item.uid === currentTask.uid) {
              item.status = 'success'
              item.message = locale.uploader.success
              item.url = result.url
            }
            return item
          })
          setFileList(list)
        } catch (e) {
          const list = fileListRef.current.map((item) => {
            if (item.uid === currentTask.uid) {
              item.status = 'error'
              item.message = locale.uploader.error
            }
            return item
          })
          setFileList(list)
          throw e
        }
      })
    ).catch((errs) => console.error(errs))
  }
  const handleItemClick = (file: FileItem, index: number) => {
    onFileItemClick?.(file, index)
  }
  const renderImageUploader = () => {
    const shouldShow =
      Number(maxCount) > fileList.length && previewType === 'picture'
    return (
      shouldShow && (
        <div
          className={classNames('nut-uploader-upload', previewType, {
            'nut-uploader-upload-disabled': disabled,
          })}
        >
          <div className="nut-uploader-icon">
            {uploadIcon}
            <span className="nut-uploader-icon-tip">{uploadLabel}</span>
          </div>

          <input
            className="nut-uploader-input"
            type="file"
            capture={capture}
            name={name}
            accept={accept}
            disabled={disabled}
            multiple={multiple}
            onChange={fileChange}
          />
        </div>
      )
    )
  }
  const renderListUploader = () => {
    return (
      previewType === 'list' && (
        <div className="nut-uploader-slot">
          <Button size="small" type="primary">
            {locale.uploader.list}
          </Button>
          {Number(maxCount) > fileList.length && (
            <input
              className="nut-uploader-input"
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
      )
    )
  }
  return (
    <div className={classes} {...restProps}>
      {renderListUploader()}
      <Preview
        {...{
          fileList,
          previewType,
          deletable,
          onDeleteItem,
          handleItemClick,
          previewUrl,
          children,
          deleteIcon,
        }}
      />
      {renderImageUploader()}
    </div>
  )
}

export const Uploader = React.forwardRef(InternalUploader)
Uploader.displayName = 'NutUploader'
