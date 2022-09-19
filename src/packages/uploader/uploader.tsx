import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
} from 'react'
import classNames from 'classnames'
import Icon from '@/packages/icon'
import Progress from '@/packages/progress'
import { Upload, UploadOptions } from './upload'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider'

export type FileType<T> = { [key: string]: T }

export type FileItemStatus =
  | 'ready'
  | 'uploading'
  | 'success'
  | 'error'
  | 'removed'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface UploaderProps extends IComponent {
  url: string
  maximum: string | number
  maximize: number
  defaultFileList: FileType<string>[]
  listType: string
  uploadIcon: string
  uploadIconSize: string | number
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
  isPreview: boolean
  isDeletable: boolean
  capture: boolean
  className: string
  defaultImg: string
  style: React.CSSProperties
  onStart?: (option: UploadOptions) => void
  onRemove?: (file: FileItem, fileList: FileItem[]) => void
  onSuccess?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
  }) => void
  onProgress?: (param: {
    e: ProgressEvent<XMLHttpRequestEventTarget>
    option: UploadOptions
    percentage: string | number
  }) => void
  onFailure?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
  }) => void
  onUpdate?: (fileList: FileItem[]) => void
  onOversize?: (file: File[]) => void
  onChange?: (param: {
    fileList: FileItem[]
    event: React.ChangeEvent<HTMLInputElement>
  }) => void
  onBeforeUpload?: (file: File[]) => Promise<File[]>
  onBeforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void
  onBeforeDelete?: (file: FileItem, files: FileItem[]) => boolean
  onFileItemClick?: (file: FileItem) => void
}

const defaultProps = {
  ...ComponentDefaults,
  url: '',
  maximum: 1,
  uploadIcon: 'photograph',
  uploadIconSize: '',
  listType: 'picture',
  name: 'file',
  accept: '*',
  disabled: false,
  autoUpload: true,
  multiple: false,
  maximize: Number.MAX_VALUE,
  data: {},
  headers: {},
  method: 'post',
  defaultImg: '',
  xhrState: 200,
  timeout: 1000 * 30,
  withCredentials: false,
  clearInput: true,
  isPreview: true,
  isDeletable: true,
  capture: false,
  onBeforeDelete: (file: FileItem, files: FileItem[]) => {
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
}
const InternalUploader: ForwardRefRenderFunction<
  unknown,
  PropsWithChildren<Partial<UploaderProps>>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    children,
    uploadIcon,
    uploadIconSize,
    name,
    accept,
    defaultFileList,
    listType,
    disabled,
    multiple,
    url,
    defaultImg,
    headers,
    timeout,
    method,
    xhrState,
    withCredentials,
    data,
    isPreview,
    isDeletable,
    maximum,
    capture,
    maximize,
    className,
    autoUpload,
    clearInput,
    iconClassPrefix,
    iconFontClassName,
    onStart,
    onRemove,
    onChange,
    onFileItemClick,
    onProgress,
    onSuccess,
    onUpdate,
    onFailure,
    onOversize,
    onBeforeUpload,
    onBeforeXhrUpload,
    onBeforeDelete,
    ...restProps
  } = { ...defaultProps, ...props }
  const [fileList, setFileList] = useState<any>([])
  const [uploadQueue, setUploadQueue] = useState<Promise<Upload>[]>([])

  useEffect(() => {
    if (defaultFileList) {
      setFileList(defaultFileList)
    }
  }, [defaultFileList])

  const b = bem('uploader')
  const classes = classNames(className, b(''))

  useImperativeHandle(ref, () => ({
    submit: () => {
      Promise.all(uploadQueue).then((res) => {
        res.forEach((i) => i.upload())
      })
    },
  }))

  const clearUploadQueue = (index = -1) => {
    if (index > -1) {
      uploadQueue.splice(index, 1)
      setUploadQueue(uploadQueue)
    } else {
      setUploadQueue([])
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
    uploadOption.beforeXhrUpload = onBeforeXhrUpload
    try {
      uploadOption.sourceFile = fileItem.formData.get(name)
    } catch (error) {}
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
          }
          return item
        })
        return [...fileList]
      })
      onSuccess &&
        onSuccess({
          responseText,
          option,
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
          }
          return item
        })
        return [...fileList]
      })
      onFailure &&
        onFailure({
          responseText,
          option,
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
      fileItem.message = locale.uploader.readyUpload
      executeUpload(fileItem, index)

      if (isPreview && file.type.includes('image')) {
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
    const maximum = (props.maximum as number) * 1
    const oversizes = new Array<File>()
    const filterFile = files.filter((file: File) => {
      if (file.size > maximize) {
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

  const onDelete = (file: FileItem, index: number) => {
    clearUploadQueue(index)
    if (onBeforeDelete && onBeforeDelete(file, fileList)) {
      fileList.splice(index, 1)
      onRemove && onRemove(file, fileList)
      setFileList([...fileList])
    } else {
      console.log(locale.uploader.deleteWord)
    }
  }

  const fileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return
    }
    const $el = event.target
    const { files } = $el

    if (onBeforeUpload) {
      onBeforeUpload(new Array<File>().slice.call(files)).then(
        (f: Array<File>) => {
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
            {maximum > fileList.length && (
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
        fileList.map((item: any, index: number) => {
          return (
            <div className={`nut-uploader__preview ${listType}`} key={item.uid}>
              {listType === 'picture' && !children && (
                <div className="nut-uploader__preview-img">
                  {item.status === 'ready' ? (
                    <div className="nut-uploader__preview__progress">
                      <div className="nut-uploader__preview__progress__msg">
                        {item.message}
                      </div>
                    </div>
                  ) : (
                    item.status !== 'success' && (
                      <div className="nut-uploader__preview__progress">
                        <Icon
                          classPrefix={iconClassPrefix}
                          fontClassName={iconFontClassName}
                          color="#fff"
                          name={`${
                            item.status === 'error' ? 'failure' : 'loading'
                          }`}
                        />
                        <div className="nut-uploader__preview__progress__msg">
                          {item.message}
                        </div>
                      </div>
                    )
                  )}

                  {isDeletable && (
                    <Icon
                      classPrefix={iconClassPrefix}
                      fontClassName={iconFontClassName}
                      color="rgba(0,0,0,0.6)"
                      className="close"
                      name="failure"
                      onClick={() => onDelete(item, index)}
                    />
                  )}

                  {item.type.includes('image') ? (
                    <>
                      {item.url && (
                        <img
                          className="nut-uploader__preview-img__c"
                          src={item.url}
                          alt=""
                          onClick={() => handleItemClick(item)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {defaultImg ? (
                        <img
                          className="nut-uploader__preview-img__c"
                          src={defaultImg}
                          alt=""
                          onClick={() => handleItemClick(item)}
                        />
                      ) : (
                        <div className="nut-uploader__preview-img__file">
                          <div
                            onClick={() => handleItemClick(item)}
                            className="nut-uploader__preview-img__file__name"
                          >
                            <Icon
                              classPrefix={iconClassPrefix}
                              fontClassName={iconFontClassName}
                              color="#808080"
                              name="link"
                            />
                            &nbsp;
                            {item.name}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div className="tips">{item.name}</div>
                </div>
              )}

              {listType === 'list' && (
                <div className="nut-uploader__preview-list">
                  <div
                    className={`nut-uploader__preview-img__file__name ${item.status}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <Icon
                      classPrefix={iconClassPrefix}
                      fontClassName={iconFontClassName}
                      name="link"
                    />
                    &nbsp;{item.name}
                  </div>
                  <Icon
                    classPrefix={iconClassPrefix}
                    fontClassName={iconFontClassName}
                    color="#808080"
                    className="nut-uploader__preview-img__file__del"
                    name="del"
                    onClick={() => onDelete(item, index)}
                  />
                  {item.status === 'uploading' && (
                    <Progress
                      size="small"
                      percentage={item.percentage}
                      strokeColor="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
                      showText={false}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}

      {maximum > fileList.length && listType === 'picture' && !children && (
        <div className={`nut-uploader__upload ${listType}`}>
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            size={uploadIconSize}
            color="#808080"
            name={uploadIcon}
          />
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
