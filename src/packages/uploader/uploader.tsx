import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
} from 'react'
import classNames from 'classnames'
import {
  Link as LinkIcon,
  Failure,
  Del,
  Photograph,
  Loading,
} from '@nutui/icons-react'
import Progress from '@/packages/progress'
import { Upload, UploadOptions } from './upload'
import { useConfig } from '@/packages/configprovider'
import { funcInterceptor } from '@/utils/interceptor'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type FileType<T> = { [key: string]: T }

export type FileItemStatus =
  | 'ready'
  | 'uploading'
  | 'success'
  | 'error'
  | 'removed'

export interface UploaderProps extends BasicComponent {
  url: string
  maxCount: string | number
  maxFileSize: number
  defaultValue?: FileType<React.ReactNode>[]
  value?: FileType<string>[]
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
  capture: boolean
  className: string
  previewUrl?: string
  style: React.CSSProperties
  onStart?: (option: UploadOptions) => void
  onDelete?: (file: FileItem, fileList: FileItem[]) => void
  onSuccess?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    fileList: FileItem[]
  }) => void
  onProgress?: (param: {
    e: ProgressEvent<XMLHttpRequestEventTarget>
    option: UploadOptions
    percentage: string | number
  }) => void
  onFailure?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    fileList: FileItem[]
  }) => void
  onUpdate?: (fileList: FileItem[]) => void
  onOversize?: (file: File[]) => void
  onChange?: (param: {
    fileList: FileItem[]
    event: React.ChangeEvent<HTMLInputElement>
  }) => void
  beforeUpload?: (file: File[]) => Promise<File[] | boolean>
  beforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void
  beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
  onFileItemClick?: (file: FileItem) => void
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
  beforeDelete: (file: FileItem, files: FileItem[]) => {
    return true
  },
} as UploaderProps

export class FileItem {
  status: FileItemStatus = 'ready'

  message = '准备中..'

  uid: string = new Date().getTime().toString()

  name?: string

  url?: string

  type?: string

  path?: string

  percentage: string | number = 0

  formData: FormData = new FormData()

  responseText?: string
}

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
  const [fileList, setFileList] = useState<any>(defaultValue || [])
  const [uploadQueue, setUploadQueue] = useState<Promise<Upload>[]>([])

  useEffect(() => {
    if (value) {
      setFileList(value)
    }
  }, [value])

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
      fileItem.formData.append(key, value)
    }
    uploadOption.formData = fileItem.formData
    uploadOption.timeout = timeout * 1
    uploadOption.method = method
    uploadOption.xhrState = xhrState
    uploadOption.headers = headers
    uploadOption.withCredentials = withCredentials
    uploadOption.beforeXhrUpload = beforeXhrUpload
    try {
      uploadOption.sourceFile = fileItem.formData.get(name)
    } catch (error) {
      console.warn(error)
    }
    uploadOption.onStart = (option: UploadOptions) => {
      clearUploadQueue(index)
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'ready'
            item.message = locale.uploader.readyUpload
          }
          return item
        })
        return [...fileList]
      })
      onStart && onStart(option)
    }
    uploadOption.onProgress = (
      e: ProgressEvent<XMLHttpRequestEventTarget>,
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'uploading'
            item.message = locale.uploader.uploading
            item.percentage = ((e.loaded / e.total) * 100).toFixed(0)
            onProgress && onProgress({ e, option, percentage: item.percentage })
          }
          return item
        })
        return [...fileList]
      })
    }
    uploadOption.onSuccess = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        onUpdate && onUpdate(fileList)
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'success'
            item.message = locale.uploader.success
            item.responseText = responseText
          }
          return item
        })
        return [...fileList]
      })
      onSuccess &&
        onSuccess({
          responseText,
          option,
          fileList,
        })
    }
    uploadOption.onFailure = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'error'
            item.message = locale.uploader.error
            item.responseText = responseText
          }
          return item
        })
        return [...fileList]
      })
      onFailure &&
        onFailure({
          responseText,
          option,
          fileList,
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

      if (autoUpload) {
        fileItem.message = locale.uploader.readyUpload
      } else {
        fileItem.message = locale.uploader.waitingUpload
      }

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
        fileList.push(fileItem)
        setFileList([...fileList])
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
    fileList.splice(index, 1)
    onDelete && onDelete(file, fileList)
    setFileList([...fileList])
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

    onChange && onChange({ fileList, event })

    if (clearInput) {
      clearInputValue($el)
    }
  }

  const handleItemClick = (file: FileItem) => {
    onFileItemClick && onFileItemClick(file)
  }

  return (
    <div className={classes} {...restProps}>
      {children && (
        <div className="nut-uploader__slot">
          <>
            {children}
            {maxCount > fileList.length && (
              <>
                {capture ? (
                  <input
                    className="nut-uploader__input"
                    type="file"
                    capture="user"
                    name={name}
                    accept={accept}
                    disabled={disabled}
                    multiple={multiple}
                    onChange={fileChange}
                  />
                ) : (
                  <input
                    className="nut-uploader__input"
                    type="file"
                    name={name}
                    accept={accept}
                    disabled={disabled}
                    multiple={multiple}
                    onChange={fileChange}
                  />
                )}
              </>
            )}
          </>
        </div>
      )}

      {fileList.length !== 0 &&
        Array.isArray(fileList) &&
        fileList.map((item: any, index: number) => {
          return (
            <div
              className={`nut-uploader__preview ${previewType}`}
              key={item.uid}
            >
              {previewType === 'picture' && !children && (
                <div className="nut-uploader__preview-img">
                  {deletable && (
                    <Failure
                      color="rgba(0,0,0,0.6)"
                      className="close"
                      onClick={() => onDeleteItem(item, index)}
                    />
                  )}

                  {item.status === 'ready' ? (
                    <div className="nut-uploader__preview__progress">
                      <div className="nut-uploader__preview__progress__msg">
                        {item.message}
                      </div>
                    </div>
                  ) : (
                    item.status !== 'success' && (
                      <div className="nut-uploader__preview__progress">
                        {item.failIcon !== ' ' &&
                          item.loadingIcon !== ' ' &&
                          (item.status === 'error'
                            ? item.failIcon || <Failure color="#fff" />
                            : item.loadingIcon || (
                                <Loading
                                  className="nut-icon-loading"
                                  color="#fff"
                                />
                              ))}
                        <div className="nut-uploader__preview__progress__msg">
                          {item.message}
                        </div>
                      </div>
                    )
                  )}

                  {item.type.includes('image') ? (
                    <>
                      {item.url && (
                        <img
                          className="nut-uploader__preview-img__c"
                          style={{ objectFit: fit }}
                          src={item.url}
                          alt=""
                          onClick={() => handleItemClick(item)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <img
                          className="nut-uploader__preview-img__c"
                          src={previewUrl}
                          alt=""
                          onClick={() => handleItemClick(item)}
                        />
                      ) : (
                        <div className="nut-uploader__preview-img__file">
                          <div
                            onClick={() => handleItemClick(item)}
                            className="nut-uploader__preview-img__file__name"
                          >
                            <LinkIcon color="#808080" />
                            &nbsp;
                            {item.name}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {item.status === 'success' ? (
                    <div className="tips">{item.name}</div>
                  ) : null}
                </div>
              )}

              {previewType === 'list' && (
                <div className="nut-uploader__preview-list">
                  <div
                    className={`nut-uploader__preview-img__file__name ${item.status}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <LinkIcon />
                    &nbsp;{item.name}
                  </div>
                  {deletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader__preview-img__file__del"
                      onClick={() => onDeleteItem(item, index)}
                    />
                  )}

                  {item.status === 'uploading' && (
                    <Progress
                      percent={item.percentage}
                      color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
                      showText={false}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}

      {maxCount > fileList.length && previewType === 'picture' && !children && (
        <div
          className={`nut-uploader__upload ${previewType} ${
            disabled ? 'nut-uploader__upload-disabled' : ''
          }`}
        >
          <div className="nut-uploader__icon">
            {uploadIcon || (
              <Photograph width="20px" height="20px" color="#808080" />
            )}
            <span className="nut-uploader__icon-tip">{uploadLabel}</span>
          </div>

          {capture ? (
            <input
              className="nut-uploader__input"
              type="file"
              capture="user"
              name={name}
              accept={accept}
              disabled={disabled}
              multiple={multiple}
              onChange={fileChange}
            />
          ) : (
            <input
              className="nut-uploader__input"
              type="file"
              name={name}
              accept={accept}
              disabled={disabled}
              multiple={multiple}
              onChange={fileChange}
            />
          )}
        </div>
      )}
    </div>
  )
}

export const Uploader = React.forwardRef(InternalUploader)

Uploader.defaultProps = defaultProps
Uploader.displayName = 'NutUploader'
