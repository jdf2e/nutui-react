import React, {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useRef,
  useEffect,
} from 'react'
import classNames from 'classnames'
import Taro, { chooseImage, getEnv, chooseMedia } from '@tarojs/taro'
import { Failure, Photograph } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Button from '@/packages/button/index.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { funcInterceptor } from '@/utils/interceptor'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { FileItem } from './types'
import { usePropsValue } from '@/utils/use-props-value'
import { Preview } from '@/packages/uploader/preview.taro'

interface sizeType {
  /** 原图 */
  original: string
  /** compressed */
  compressed: string
}

interface sourceType {
  /** 从相册选图 */
  album: string
  /** 使用相机 */
  camera: string
}

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
  maxCount: string | number
  sizeType: (keyof sizeType)[]
  sourceType: (keyof sourceType)[]
  mediaType: (keyof mediaType)[]
  camera: string
  maxFileSize: number
  defaultValue?: FileItem[]
  value?: FileItem[]
  previewType: 'picture' | 'list'
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  uploadIcon?: React.ReactNode
  deleteIcon?: React.ReactNode
  uploadLabel?: React.ReactNode
  name: string
  accept: string
  disabled: boolean
  autoUpload: boolean
  multiple: boolean
  preview: boolean
  deletable: boolean
  className: string
  previewUrl?: string
  maxDuration: number
  style: React.CSSProperties
  onDelete?: (file: FileItem, files: FileItem[]) => void
  onOversize?: (
    files: Taro.chooseImage.ImageFile[] | Taro.chooseMedia.ChooseMedia[] | any
  ) => void
  onOverCount?: (count: number) => void
  onChange?: (files: FileItem[]) => void
  upload: (
    files: Taro.chooseImage.ImageFile | Taro.chooseMedia.ChooseMedia | any
  ) => Promise<FileItem>
  beforeUpload?: (
    files: Taro.chooseImage.ImageFile[] | Taro.chooseMedia.ChooseMedia[] | any
  ) => Promise<File[]>
  beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
  onFileItemClick?: (file: FileItem, index: number) => void
  onUploadQueueChange?: (tasks: FileItem[]) => void
}

const defaultProps = {
  ...ComponentDefaults,
  maxCount: Number.MAX_VALUE,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  mediaType: ['image', 'video'],
  camera: 'back',
  uploadIcon: <Photograph size="20px" color="#808080" />,
  deleteIcon: <Failure color="rgba(0,0,0,0.6)" />,
  uploadLabel: '',
  previewType: 'picture',
  fit: 'cover',
  name: 'file',
  accept: '*',
  disabled: false,
  autoUpload: true,
  multiple: false,
  maxFileSize: Number.MAX_VALUE,
  previewUrl: '',
  preview: true,
  deletable: true,
  maxDuration: 10,
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
    deleteIcon,
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
    previewUrl,
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
    onDelete,
    onChange,
    onFileItemClick,
    onOversize,
    onOverCount,
    beforeUpload,
    upload,
    beforeDelete,
    onUploadQueueChange,
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
  const [uploadQueue, setUploadQueue] = useState<FileItem[]>([])
  const fileListRef = useRef<FileItem[]>([])
  const classes = classNames(className, 'nut-uploader')
  useImperativeHandle(ref, () => ({
    submit: async () => {
      await uploadAction(uploadQueue)
    },
    clear: () => {
      clearUploadQueue()
    },
  }))
  useEffect(() => {
    fileListRef.current = fileList
  }, [fileList])
  useEffect(() => {
    onUploadQueueChange?.(uploadQueue)
  }, [uploadQueue])
  const clearUploadQueue = (index = -1) => {
    if (index > -1) {
      uploadQueue.splice(index, 1)
      setUploadQueue(uploadQueue)
    } else {
      setUploadQueue([])
      setFileList([])
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
    if ((getEnv() === 'WEAPP' || getEnv() === 'JD') && chooseMedia) {
      chooseMedia({
        count: multiple ? (maxCount as number) * 1 - fileList.length : 1,
        /** 文件类型 */
        mediaType: mediaType as any,
        /** 图片和视频选择的来源 */
        sourceType,
        /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 */
        maxDuration,
        /** 仅对 mediaType 为 image 时有效，是否压缩所选文件 */
        sizeType,
        /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 */
        camera,
        success: onChangeMedia,
      })
    } else {
      chooseImage({
        count: multiple ? (maxCount as number) * 1 - fileList.length : 1,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType,
        sourceType,
        success: onChangeImage,
      })
    }
  }
  const uploadAction = async (tasks: FileItem[]) => {
    const taskIds = tasks.map((task) => task.uid)
    const list: FileItem[] = fileListRef.current.map((file: FileItem) => {
      if (taskIds.includes(file.uid)) {
        return {
          ...file,
          status: 'uploading',
          message: locale.uploader.uploading,
        }
      }
      return file
    })
    setFileList(list)
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

  const idCountRef = useRef(0)
  const readFile = async <T extends TFileType>(files: T[]) => {
    const tasks = files.map((file) => {
      let fileType = file.type
      const filepath = (file.tempFilePath || file.path) as string
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
      const info: any = {
        uid: idCountRef.current++,
        status: autoUpload ? 'uploading' : 'ready',
        file,
        message: autoUpload
          ? locale.uploader.uploading
          : locale.uploader.waitingUpload,
        name: getEnv() === 'WEB' ? file.originalFileObj?.name : filepath,
        path: filepath,
        type: getEnv() === 'WEB' ? file.originalFileObj?.type : fileType,
      }
      if (preview) {
        info.url = fileType === 'video' ? file.thumbTempFilePath : filepath
      }
      fileListRef.current = [...fileListRef.current, info]
      setFileList(fileListRef.current)
      return info
    })
    if (!autoUpload) {
      setUploadQueue(tasks)
    } else {
      await uploadAction(tasks)
    }
  }

  const filterFiles = <T extends TFileType>(files: T[]) => {
    const maximum = (maxCount as number) * 1
    const maximize = (maxFileSize as number) * 1
    const oversizes = new Array<T>()
    const filterFile = files.filter((file: T) => {
      if (file.size > maximize) {
        oversizes.push(file)
        return false
      }
      return true
    })
    oversizes.length && onOversize?.(files as any)
    const currentFileLength = filterFile.length + fileList.length
    if (currentFileLength > maximum) {
      onOverCount?.(filterFile.length)
      filterFile.splice(filterFile.length - (currentFileLength - maximum))
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

  const onChangeMedia = async (res: Taro.chooseMedia.SuccessCallbackResult) => {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    const { tempFiles } = res
    const _files: Taro.chooseMedia.ChooseMedia[] = filterFiles(tempFiles)
    if (beforeUpload) {
      beforeUpload(new Array<File>().slice.call(_files)).then(
        (f: Array<File> | boolean) => {
          const _files: File[] = filterFiles(new Array<File>().slice.call(f))
          if (!_files.length) res.tempFiles = []
          readFile(_files)
        }
      )
    } else {
      readFile(_files)
    }
  }

  const onChangeImage = async (res: Taro.chooseImage.SuccessCallbackResult) => {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    const { tempFiles } = res
    const _files: Taro.chooseImage.ImageFile[] = filterFiles(tempFiles)
    let files: File[] = []
    const filesArr = new Array<File>().slice.call(files)
    if (beforeUpload) {
      files = await beforeUpload(filesArr)
    }
    files = filterFiles(filesArr)
    readFile(_files)
  }

  const handleItemClick = (file: FileItem, index: number) => {
    onFileItemClick?.(file, index)
  }
  const renderListUploader = () => {
    return (
      previewType === 'list' && (
        <View className="nut-uploader-slot">
          <>
            <Button size="small" type="primary">
              {locale.uploader.list}
            </Button>
            {Number(maxCount) > fileList.length && (
              <Button className="nut-uploader-input" onClick={_chooseImage} />
            )}
          </>
        </View>
      )
    )
  }
  const renderImageUploader = () => {
    const shouldShow =
      Number(maxCount) > fileList.length && previewType === 'picture'
    return (
      shouldShow && (
        <View
          className={`nut-uploader-upload ${previewType} ${
            disabled ? 'nut-uploader-upload-disabled' : ''
          }`}
        >
          <View className="nut-uploader-icon">
            {uploadIcon}
            <span className="nut-uploader-icon-tip">{uploadLabel}</span>
          </View>
          <Button className="nut-uploader-input" onClick={_chooseImage} />
        </View>
      )
    )
  }
  return (
    <View className={classes} {...restProps}>
      {renderListUploader()}
      <Preview
        {...{
          fileList,
          previewType,
          deletable,
          onDeleteItem,
          handleItemClick,
          previewUrl,
          deleteIcon,
          children,
        }}
      />
      {renderImageUploader()}
    </View>
  )
}

export const Uploader = React.forwardRef(InternalUploader)

Uploader.displayName = 'NutUploader'
