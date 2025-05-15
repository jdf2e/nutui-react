import { BaseUploader } from './base'

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

export interface TaroUploaderProps extends BaseUploader {
  sizeType: (keyof sizeType)[]
  sourceType: (keyof sourceType)[]
  mediaType: (keyof mediaType)[]
  camera: string
  maxDuration: number
}
