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
import bem from '@/utils/bem'
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
  maximum: string | number
  sizeType: (keyof sizeType)[]
  sourceType: (keyof sourceType)[]
  mediaType: (keyof mediaType)[]
  camera: string
  maximize: number
  defaultFileList: FileType<string>[]
  listType: string
  uploadIcon: React.ReactNode
  uploadIconSize: string | number
  uploadIconTip: string
  name: string
  accept: string
  disabled: boolean
  autoUpload: boolean
  multiple: boolean
  timeout: number
  data: object
  method: string
  xhrState: number | string
  headers: object
  isPreview: boolean
  isDeletable: boolean
  className: string
  defaultImg: string
  maxDuration: number
  style: React.CSSProperties
  onStart?: (option: UploadOptions) => void
  onRemove?: (file: FileItem, fileList: FileType<string>[]) => void
  onSuccess?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    fileList: FileType<string>[]
  }) => void
  onProgress?: (param: {
    e: ProgressEvent<XMLHttpRequestEventTarget>
    option: UploadOptions
    percentage: string | number
  }) => void
  onFailure?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
    fileList: FileType<string>[]
  }) => void
  onUpdate?: (fileList: FileType<string>[]) => void
  onOversize?: (
    files: Taro.chooseImage.ImageFile[] | Taro.chooseMedia.ChooseMedia[] | any
  ) => void
  onChange?: (param: { fileList: FileType<string>[] }) => void
  onBeforeXhrUpload?: (xhr: XMLHttpRequest, options: any) => void
  onBeforeDelete?: (file: FileItem, files: FileType<string>[]) => boolean
  onFileItemClick?: (file: FileItem) => void
}

const defaultProps = {
  ...ComponentDefaults,
  url: '',
  maximum: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  mediaType: ['image', 'video'],
  camera: 'back',
  uploadIcon: null,
  uploadIconSize: '',
  uploadIconTip: '',
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
  isPreview: true,
  isDeletable: true,
  maxDuration: 10,
  onBeforeDelete: (file: FileItem, files: FileType<string>[]) => {
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
    uploadIconSize,
    uploadIconTip,
    accept,
    name,
    camera,
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
    data,
    isPreview,
    isDeletable,
    maximum,
    maximize,
    mediaType,
    className,
    autoUpload,
    sizeType,
    sourceType,
    maxDuration,
    onStart,
    onRemove,
    onChange,
    onFileItemClick,
    onProgress,
    onSuccess,
    onUpdate,
    onFailure,
    onOversize,
    onBeforeXhrUpload,
    onBeforeDelete,
    ...restProps
  } = { ...defaultProps, ...props }
  const [fileList, setFileList] = useState<FileType<string>[]>([])
  const [uploadQueue, setUploadQueue] = useState<Promise<UploaderTaro>[]>([])

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
    if (getEnv() === 'WEAPP') {
      // chooseMedia 目前只支持微信小程序原生，其余端全部使用 chooseImage API
      chooseMedia({
        /** 最多可以选择的文件个数 */
        count: multiple ? (maximum as number) * 1 - fileList.length : 1,
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
        count: multiple ? (maximum as number) * 1 - fileList.length : 1,
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
    uploadOption.beforeXhrUpload = onBeforeXhrUpload

    uploadOption.onStart = (option: UploadOptions) => {
      clearUploadQueue(index)
      setFileList((fileList: FileType<string>[]) => {
        fileList.map((item) => {
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
      setFileList((fileList: FileType<string>[]) => {
        fileList.map((item) => {
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
      setFileList((fileList: FileType<string>[]) => {
        onUpdate && onUpdate(fileList)
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'success'
            item.message = locale.uploader.success
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
      setFileList((fileList: FileType<string>[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'error'
            item.message = locale.uploader.error
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

      if (autoUpload) {
        fileItem.message = locale.uploader.readyUpload
      } else {
        fileItem.message = locale.uploader.waitingUpload
      }

      if (getEnv() === 'WEB') {
        const formData = new FormData()
        for (const [key, value] of Object.entries(data)) {
          formData.append(key, value)
        }
        formData.append(name, file.originalFileObj as Blob)
        fileItem.name = file.originalFileObj?.name
        fileItem.type = file.originalFileObj?.type
        fileItem.formData = formData
      } else {
        fileItem.formData = data as any
      }
      if (isPreview) {
        fileItem.url = fileType == 'video' ? file.thumbTempFilePath : filepath
      }

      fileList.push(fileItem as any)
      setFileList([...fileList])
      executeUpload(fileItem, index)
    })
  }

  const filterFiles = <T extends TFileType>(files: T[]) => {
    const maximum = (props.maximum as number) * 1
    const maximize = (props.maximize as number) * 1
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
    onRemove && onRemove(file, fileList)
    setFileList([...fileList])
  }

  const onDelete = (file: FileItem, index: number) => {
    clearUploadQueue(index)
    funcInterceptor(onBeforeDelete, {
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
            {maximum > fileList.length && (
              <Button className="nut-uploader__input" onClick={_chooseImage} />
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
                  {isDeletable && (
                    <Failure
                      color="rgba(0,0,0,0.6)"
                      className="close"
                      onClick={() => onDelete(item, index)}
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
                          mode="aspectFit"
                          src={item.url}
                          onClick={() => handleItemClick(item)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {defaultImg ? (
                        <Image
                          className="nut-uploader__preview-img__c"
                          mode="aspectFit"
                          src={defaultImg}
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

              {listType === 'list' && (
                <div className="nut-uploader__preview-list">
                  <div
                    className={`nut-uploader__preview-img__file__name ${item.status}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <LinkIcon />
                    &nbsp;{item.name}
                  </div>
                  {isDeletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader__preview-img__file__del"
                      onClick={() => onDelete(item, index)}
                    />
                  )}
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
        <div
          className={`nut-uploader__upload ${listType} ${
            disabled ? 'nut-uploader__upload-disabled' : ''
          }`}
        >
          <div className="nut-uploader__icon">
            {uploadIcon || <Photograph size={uploadIconSize} color="#808080" />}
            <span className="nut-uploader__icon-tip">{uploadIconTip}</span>
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
