import {
  AvatarCropperSizeType,
  AvatarCropperSourceType,
  BaseAvatarCropper,
} from './base'

export interface TaroAvatarCropperProps extends BaseAvatarCropper {
  sizeType: AvatarCropperSizeType[]
  sourceType: AvatarCropperSourceType[]
}
