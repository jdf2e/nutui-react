import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
} from 'react'
import classNames from 'classnames'
import Taro, {
  chooseImage,
  uploadFile,
  getEnv,
  chooseMedia,
} from '@tarojs/taro'

import {
  Link as LinkIcon,
  Failure,
  Del,
  Photograph,
  Loading,
} from '@nutui/icons-react-taro'

import { Image } from '@tarojs/components'
import Button from '@/packages/button/index.taro'
import Progress from '@/packages/progress/index.taro'
import { UploaderTaro, UploadOptions } from './upload'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { funcInterceptor } from '@/utils/interceptor'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type FileType<T> = { [key: string]: T }

export type FileItemStatus =
  | 'ready'
  | 'uploading'
  | 'success'
  | 'error'
  | 'removed'

/** 图片的尺寸 */
interface sizeType {
  /** 原图 */
  original: string
  /** compressed */
  compressed: string
}

/** 图片的来源 */
interface sourceType {
  /** 从相册选图 */
  album: string
  /** 使用相机 */
  camera: string
}

/** 视频的来源 */
interface mediaType {
  /** 只能拍摄图片或从相册选择图片 */
  image: string
  /** 只能拍摄视频或从相册选择视频 */
  video: string
}

interface TFileType {
  size: number
  type?: string
  fileType?: string
  originalFileObj?: any
  tempFilePath?: string
  thumbTempFilePath?: string
  path?: string
}

export interface UploaderProps extends BasicComponent {
  url: string
  maxCount: string | number
  sizeType: (keyof sizeType)[]
  sourceType: (keyof sourceType)[]
  mediaType: (keyof mediaType)[]
  camera: string
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
  preview: boolean
  deletable: boolean
  className: string
  previewUrl?: string
  maxDuration: number
  style: React.CSSProperties
  onStart?: (option: UploadOptions) => void
  onDelete?: (file: FileItem, fileList: FileType<React.ReactNode>[]) => void
  onSuccess?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    fileList: FileType<React.ReactNode>[]
  }) => void
  onProgress?: (param: {
    e: ProgressEvent<XMLHttpRequestEventTarget>
    option: UploadOptions
    percentage: React.ReactNode
  }) => void
  onFailure?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    fileList: FileType<React.ReactNode>[]
  }) => void
  onUpdate?: (fileList: FileType<React.ReactNode>[]) => void
  onOversize?: (
    files: Taro.chooseImage.ImageFile[] | Taro.chooseMedia.ChooseMedia[] | any
  ) => void
  onChange?: (param: { fileList: FileType<React.ReactNode>[] }) => void
  beforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void
  beforeDelete?: (file: FileItem, files: FileType<React.ReactNode>[]) => boolean
  onFileItemClick?: (file: FileItem) => void
}

const defaultProps = {
  ...ComponentDefaults,
  url: '',
  maxCount: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  mediaType: ['image', 'video'],
  camera: 'back',
  uploadIcon: null,
  uploadLabel: '',
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
  previewUrl: '',
  xhrState: 200,
  timeout: 1000 * 30,
  preview: true,
  deletable: true,
  maxDuration: 10,
  beforeDelete: (file: FileItem, files: FileType<string>[]) => {
    return true
  },
} as UploaderProps

export class FileItem {
  status: FileItemStatus = 'ready'

  message = '准备中..'

  uid: string = Date.now().toString()

  name?: string

  url?: string

  type?: string

  path?: string

  percentage: string | number = 0

  formData: any = {}
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
    accept,
    name,
    camera,
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
    data,
    preview,
    deletable,
    maxCount,
    maxFileSize,
    mediaType,
    className,
    autoUpload,
    sizeType,
    sourceType,
    maxDuration,
    onStart,
    onDelete,
    onChange,
    onFileItemClick,
    onProgress,
    onSuccess,
    onUpdate,
    onFailure,
    onOversize,
    beforeXhrUpload,
    beforeDelete,
    ...restProps
  } = { ...defaultProps, ...props }
  const [fileList, setFileList] = useState<any>(defaultValue || [])
  const [uploadQueue, setUploadQueue] = useState<Promise<UploaderTaro>[]>([])

  useEffect(() => {
    if (value) {
      setFileList(value)
    }
  }, [value])

  const classes = classNames(className, 'nut-uploader')

  useImperativeHandle(ref, () => ({
    submit: () => {
      Promise.all(uploadQueue).then((res) => {
        res.forEach((i) => i.uploadTaro(uploadFile, getEnv()))
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

  const _chooseImage = () => {
    if (disabled) {
      return
    }
    if (Taro.getEnv() === 'WEB') {
      const el = document.getElementById('taroChooseImage')
      if (el) {
        el?.setAttribute('accept', accept)
      } else {
        const obj = document.createElement('input')
        obj.setAttribute('type', 'file')
        obj.setAttribute('id', 'taroChooseImage')
        obj.setAttribute('accept', accept)
        obj.setAttribute(
          'style',
          'position: fixed; top: -4000px; left: -3000px; z-index: -300;'
        )
        document.body.appendChild(obj)
      }
    }
    if (getEnv() === 'WEAPP' && chooseMedia) {
      // chooseMedia 目前只支持微信小程序原生，其余端全部使用 chooseImage API
      chooseMedia({
        /** 最多可以选择的文件个数 */
        count: multiple ? (maxCount as number) * 1 - fileList.length : 1,
        /** 文件类型 */
        mediaType: mediaType as any,
        /** 图片和视频选择的来源 */
        sourceType,
        /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 */
        maxDuration,
        /** 仅对 mediaType 为 image 时有效，是否压缩所选文件 */
        sizeType: [],
        /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 */
        camera,
        /** 接口调用失败的回调函数 */
        fail: (res: any) => {
          onFailure && onFailure(res)
        },
        /** 接口调用成功的回调函数 */
        success: onChangeMedia,
      })
    } else {
      chooseImage({
        // 选择数量
        count: multiple ? (maxCount as number) * 1 - fileList.length : 1,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType,
        sourceType,
        success: onChangeImage,
        fail: (res: any) => {
          onFailure && onFailure(res)
        },
      })
    }
  }

  const executeUpload = (fileItem: FileItem, index: number) => {
    const uploadOption = new UploadOptions()
    uploadOption.name = name
    uploadOption.url = url
    uploadOption.fileType = fileItem.type
    uploadOption.formData = fileItem.formData
    uploadOption.timeout = timeout * 1
    uploadOption.method = method
    uploadOption.xhrState = xhrState
    uploadOption.headers = headers
    uploadOption.taroFilePath = fileItem.path
    uploadOption.beforeXhrUpload = beforeXhrUpload

    uploadOption.onStart = (option: UploadOptions) => {
      clearUploadQueue(index)
      setFileList((fileList: FileType<React.ReactNode>[]) => {
        fileList.forEach((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'ready'
            item.message = locale.uploader.readyUpload
          }
        })
        return [...fileList]
      })
      onStart && onStart(option)
    }

    uploadOption.onProgress = (e: any, option: UploadOptions) => {
      setFileList((fileList: FileType<React.ReactNode>[]) => {
        fileList.forEach((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'uploading'
            item.message = locale.uploader.uploading
            item.percentage = e.progress
            onProgress && onProgress({ e, option, percentage: item.percentage })
          }
        })
        return [...fileList]
      })
    }

    uploadOption.onSuccess = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      setFileList((fileList: FileType<React.ReactNode>[]) => {
        onUpdate && onUpdate(fileList)
        fileList.forEach((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'success'
            item.message = locale.uploader.success
            item.responseText = responseText
          }
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
      setFileList((fileList: FileType<React.ReactNode>[]) => {
        fileList.forEach((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'error'
            item.message = locale.uploader.error
            item.responseText = responseText
          }
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

    const task = new UploaderTaro(uploadOption)
    if (props.autoUpload) {
      task.uploadTaro(uploadFile, getEnv())
    } else {
      uploadQueue.push(
        new Promise((resolve, reject) => {
          resolve(task)
        })
      )
      setUploadQueue(uploadQueue)
    }
  }

  const readFile = <T extends TFileType>(files: T[]) => {
    files.forEach((file: T, index: number) => {
      let fileType = file.type
      const filepath = (file.tempFilePath || file.path) as string
      const fileItem = new FileItem()
      if (file.fileType) {
        fileType = file.fileType
      } else {
        const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i
        if (
          !fileType &&
          (imgReg.test(filepath) || filepath.includes('data:image'))
        ) {
          fileType = 'image'
        }
      }

      fileItem.path = filepath
      fileItem.name = filepath
      fileItem.status = 'ready'
      fileItem.type = fileType
      fileItem.uid = `${fileItem.uid}_${index}`
      if (autoUpload) {
        fileItem.message = locale.uploader.readyUpload
      } else {
        fileItem.message = locale.uploader.waitingUpload
      }

      if (getEnv() === 'WEB') {
        const formData = new FormData()
        for (const [key, value] of Object.entries(data)) {
          formData.append(key, value as any)
        }
        formData.append(name, file.originalFileObj as Blob)
        fileItem.name = file.originalFileObj?.name
        fileItem.type = file.originalFileObj?.type
        fileItem.formData = formData
      } else {
        fileItem.formData = data as any
      }
      if (preview) {
        fileItem.url = fileType === 'video' ? file.thumbTempFilePath : filepath
      }

      fileList.push(fileItem as any)
      setFileList([...fileList])
      executeUpload(fileItem, index)
    })
  }

  const filterFiles = <T extends TFileType>(files: T[]) => {
    const maximum = (props.maxCount as number) * 1
    const maximize = (props.maxFileSize as number) * 1
    const oversizes = new Array<T>()
    const filterFile = files.filter((file: T) => {
      if (file.size > maximize) {
        oversizes.push(file)
        return false
      }
      return true
    })
    if (oversizes.length) {
      onOversize && onOversize(files as any)
    }

    const currentFileLength = filterFile.length + fileList.length
    if (currentFileLength > maximum) {
      filterFile.splice(filterFile.length - (currentFileLength - maximum))
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

  const onChangeMedia = (res: Taro.chooseMedia.SuccessCallbackResult) => {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    const { tempFiles } = res
    const _files: Taro.chooseMedia.ChooseMedia[] = filterFiles(tempFiles)
    readFile(_files)
    onChange && onChange({ fileList })
  }

  const onChangeImage = (res: Taro.chooseImage.SuccessCallbackResult) => {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    const { tempFiles } = res
    const _files: Taro.chooseImage.ImageFile[] = filterFiles(tempFiles)
    readFile(_files)
    onChange && onChange({ fileList })
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
              <Button className="nut-uploader__input" onClick={_chooseImage} />
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
                            : item.loadingIcon || <Loading color="#fff" />)}

                        <div className="nut-uploader__preview__progress__msg">
                          {item.message}
                        </div>
                      </div>
                    )
                  )}
                  {item.type.includes('image') ? (
                    <>
                      {item.url && (
                        <Image
                          className="nut-uploader__preview-img__c"
                          style={{ objectFit: fit }}
                          mode="aspectFit"
                          src={item.url}
                          onClick={() => handleItemClick(item)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <Image
                          className="nut-uploader__preview-img__c"
                          mode="aspectFit"
                          src={previewUrl}
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
            {uploadIcon || <Photograph size="20px" color="#808080" />}
            <span className="nut-uploader__icon-tip">{uploadLabel}</span>
          </div>
          <Button className="nut-uploader__input" onClick={_chooseImage} />
        </div>
      )}
    </div>
  )
}

export const Uploader = React.forwardRef(InternalUploader)

Uploader.defaultProps = defaultProps
Uploader.displayName = 'NutUploader'
