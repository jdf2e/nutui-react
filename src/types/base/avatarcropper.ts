import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { PositionY, UIRound } from '@/types'

export type AvatarCropperSizeType = 'original' | 'compressed'
export type AvatarCropperSourceType = 'album' | 'camera'
export interface BaseAvatarCropper extends BaseProps {
  maxZoom: number
  space: number
  toolbar: ReactNode[]
  toolbarPosition: PositionY
  editText: ReactNode
  shape: UIRound
  onConfirm: (e: any) => void
  onCancel: () => void
}
