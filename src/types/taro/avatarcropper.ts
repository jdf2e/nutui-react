import {
  AvatarCropperSizeType,
  AvatarCropperSourceType,
  BaseAvatarCropper,
} from '../base/avatarcropper'

export interface TaroAvatarCropperProps extends BaseAvatarCropper {
  sizeType: AvatarCropperSizeType[]
  sourceType: AvatarCropperSourceType[]
}
