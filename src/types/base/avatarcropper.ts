import { BaseProps } from './baseprops'

export type AvatarCropperToolbarPosition = 'top' | 'bottom'
export type AvatarCropperShape = 'square' | 'round'

export interface BaseAvatarCropper extends BaseProps {
  maxZoom: number
  space: number
  toolbar: React.ReactNode[]
  toolbarPosition: AvatarCropperToolbarPosition
  editText: React.ReactNode
  shape: AvatarCropperShape
  onConfirm: (e: any) => void
  onCancel: () => void
}
