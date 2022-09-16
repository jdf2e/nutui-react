import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
} from 'react'
import classNames from 'classnames'
import Icon from '@/packages/icon/index.taro'
import Button from '@/packages/button/index.taro'
import Taro from '@tarojs/taro'
import { Upload, UploadOptions } from './upload'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

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
  /** 使用前置摄像头(仅H5纯浏览器使用) */
  user: string
  /** 使用后置摄像头(仅H5纯浏览器) */
  environment: string
}

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface UploaderProps extends IComponent {
  url: string
  maximum: string | number
  sizeType: (keyof sizeType)[]
  sourceType: (keyof sourceType)[]
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
  data: object
  method: string
  xhrState: number | string
  headers: object
  withCredentials: boolean
  isPreview: boolean
  isDeletable: boolean
  capture: boolean
  className: string
  defaultImg: string
  style: React.CSSProperties
  start?: (option: UploadOptions) => void
  removeImage?: (file: FileItem, fileList: FileItem[]) => void
  success?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
  }) => void
  progress?: (param: {
    e: ProgressEvent<XMLHttpRequestEventTarget>
    option: UploadOptions
  }) => void
  failure?: (param: {
    responseText: XMLHttpRequest['responseText']
    option: UploadOptions
  }) => void
  update?: (fileList: any[]) => void
  oversize?: (file: Taro.chooseImage.ImageFile[]) => void
  change?: (param: { fileList: any[] }) => void
  beforeUpload?: (file: any[]) => Promise<any[]>
  beforeXhrUpload?: (
    file: Taro.chooseImage.ImageFile[]
  ) => Promise<Taro.chooseImage.ImageFile[]>
  beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
  fileItemClick?: (file: FileItem) => void
}

const defaultProps = {
  ...ComponentDefaults,
  url: '',
  maximum: 9,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
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
  isPreview: true,
  isDeletable: true,
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
    sizeType,
    sourceType,
    start,
    removeImage,
    change,
    fileItemClick,
    progress,
    success,
    update,
    failure,
    oversize,
    beforeUpload,
    beforeXhrUpload,
    beforeDelete,
    ...restProps
  } = { ...defaultProps, ...props }
  const [fileList, setFileList] = useState<any>([])
  const [uploadQueue, setUploadQueue] = useState<Promise<Upload>[]>([])

  useEffect(() => {
    console.log('defaultFileList', defaultFileList)
    if (defaultFileList) {
      setFileList(defaultFileList)
    }
  }, [defaultFileList])

  const b = bem('uploader')
  const classes = classNames(className, b(''))

  useImperativeHandle(ref, () => ({
    submit: () => {
      Promise.all(uploadQueue).then((res) => {
        res.forEach((i) => i.uploadTaro(Taro.uploadFile, Taro.getEnv()))
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

  const chooseImage = () => {
    if (disabled) {
      return
    }
    Taro.chooseImage({
      // 选择数量
      count: (maximum as number) * 1 - fileList.length,
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: sizeType,
      sourceType: sourceType,
      success: onChange,
    })
  }

  const executeUpload = (fileItem: FileItem, index: number) => {
    console.log('executeUpload fileItem', fileItem, index)

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

    console.log('uploadOption', uploadOption)

    uploadOption.onStart = (option: UploadOptions) => {
      clearUploadQueue(index)
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'ready'
            item.message = locale.uploader.readyUpload
          }
        })
        return [...fileList]
      })
      start && start(option)
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
          }
        })
        return [...fileList]
      })
      progress && progress({ e, option })
    }

    uploadOption.onSuccess = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        update && update(fileList)
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'success'
            item.message = locale.uploader.success
          }
        })
        return [...fileList]
      })
      success &&
        success({
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
        })
        return [...fileList]
      })
      failure &&
        failure({
          responseText,
          option,
        })
    }

    const task = new Upload(uploadOption)
    if (props.autoUpload) {
      task.uploadTaro(Taro.uploadFile, Taro.getEnv())
    } else {
      uploadQueue.push(
        new Promise((resolve, reject) => {
          resolve(task)
        })
      )
      setUploadQueue(uploadQueue)
    }
  }

  const readFile = (files: Taro.chooseImage.ImageFile[]) => {
    const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i
    files.forEach((file: Taro.chooseImage.ImageFile, index: number) => {
      let fileType = file.type
      const fileItem = new FileItem()
      if (!fileType && imgReg.test(file.path)) {
        fileType = 'image'
      }
      fileItem.path = file.path
      fileItem.name = file.path
      fileItem.status = 'ready'
      fileItem.message = locale.uploader.readyUpload
      fileItem.type = fileType

      if (Taro.getEnv() == 'WEB') {
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
        fileItem.url = file.path
      }

      fileList.push(fileItem)
      setFileList([...fileList])
      executeUpload(fileItem, index)
    })
  }

  const filterFiles = (files: Taro.chooseImage.ImageFile[]) => {
    const maximum = (props.maximum as number) * 1
    const maximize = (props.maximize as number) * 1
    const oversizes = new Array<Taro.chooseImage.ImageFile>()
    const filterFile = files.filter((file: Taro.chooseImage.ImageFile) => {
      if (file.size > maximize) {
        oversizes.push(file)
        return false
      }
      return true
    })
    if (oversizes.length) {
      oversize && oversize(files)
    }

    let currentFileLength = filterFile.length + fileList.length
    if (currentFileLength > maximum) {
      filterFile.splice(filterFile.length - (currentFileLength - maximum))
    }
    return filterFile
  }

  const onDelete = (file: FileItem, index: number) => {
    clearUploadQueue(index)
    if (beforeDelete && beforeDelete(file, fileList)) {
      fileList.splice(index, 1)
      removeImage && removeImage(file, fileList)
      setFileList([...fileList])
    } else {
      console.log(locale.uploader.deleteWord)
    }
  }

  const onChange = (res: Taro.chooseImage.SuccessCallbackResult) => {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    const { tempFiles } = res
    if (beforeUpload) {
      beforeUpload(tempFiles).then((f: Array<Taro.chooseImage.ImageFile>) => {
        const _files: Taro.chooseImage.ImageFile[] = filterFiles(f)
        readFile(_files)
      })
    } else {
      const _files: Taro.chooseImage.ImageFile[] = filterFiles(tempFiles)
      readFile(_files)
    }

    props.change && props.change({ fileList })
  }

  const handleItemClick = (file: FileItem) => {
    fileItemClick && fileItemClick(file)
  }

  return (
    <div className={classes} {...restProps}>
      {children && (
        <div className="nut-uploader__slot">
          <>
            {children}
            {maximum > fileList.length && (
              <Button className="nut-uploader__input" onClick={chooseImage} />
            )}
          </>
        </div>
      )}

      {fileList.length !== 0 &&
        fileList.map((item: any, index: number) => {
          return (
            <div className={`nut-uploader__preview ${listType}`} key={item.uid}>
              {listType == 'picture' && !children && (
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
                          classPrefix={props.iconClassPrefix}
                          fontClassName={props.iconFontClassName}
                          color="#fff"
                          name={`${
                            item.status == 'error' ? 'failure' : 'loading'
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
                      classPrefix={props.iconClassPrefix}
                      fontClassName={props.iconFontClassName}
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
                          onClick={() => handleItemClick(item)}
                        />
                      ) : (
                        <div className="nut-uploader__preview-img__file">
                          <div
                            onClick={() => handleItemClick(item)}
                            className="nut-uploader__preview-img__file__name"
                          >
                            <Icon
                              classPrefix={props.iconClassPrefix}
                              fontClassName={props.iconFontClassName}
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
                      classPrefix={props.iconClassPrefix}
                      fontClassName={props.iconFontClassName}
                      name="link"
                    />
                    &nbsp;{item.name}
                  </div>
                  <Icon
                    classPrefix={props.iconClassPrefix}
                    fontClassName={props.iconFontClassName}
                    color="#808080"
                    className="nut-uploader__preview-img__file__del"
                    name="del"
                    onClick={() => onDelete(item, index)}
                  />
                  {/* 缺少进度条组件，待更新 */}
                </div>
              )}
            </div>
          )
        })}

      {maximum > fileList.length && listType === 'picture' && !children && (
        <div className={`nut-uploader__upload ${listType}`}>
          <Icon
            classPrefix={props.iconClassPrefix}
            fontClassName={props.iconFontClassName}
            size={uploadIconSize}
            color="#808080"
            name={uploadIcon}
          />
          <Button className="nut-uploader__input" onClick={chooseImage} />
        </div>
      )}
    </div>
  )
}

export const Uploader = React.forwardRef(InternalUploader)

Uploader.defaultProps = defaultProps
Uploader.displayName = 'NutUploader'
