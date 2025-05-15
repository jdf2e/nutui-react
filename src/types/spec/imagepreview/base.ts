import { ReactNode } from 'react'
import { EdgePosition, PositionY, SimpleValue } from '../../base/atoms'
import { BaseProps } from '../../base/props'

export interface PreviewImageOption {
  src: string
  index?: number
}

export interface PreviewVideoOption {
  source: {
    src: string
    type: string
  }
  options: {
    muted: boolean
    controls: boolean
  }
  index?: number
}

export type ImagePreviewCloseIconPosition =
  | Extract<EdgePosition, 'top-right' | 'top-left'>
  | Extract<PositionY, 'bottom'>

export interface BaseImagePreview<
  IMAGE_SOURCE = PreviewImageOption,
  VIDEO_SOURCE = PreviewVideoOption,
> extends BaseProps {
  images: Array<IMAGE_SOURCE>
  videos: Array<VIDEO_SOURCE>
  visible: boolean
  autoPlay: SimpleValue
  value?: number
  defaultValue: number
  closeOnContentClick: boolean
  pagination: boolean
  indicator: boolean
  indicatorColor: string
  closeIcon: ReactNode
  closeIconPosition: ImagePreviewCloseIconPosition
  onClose: () => void
  onChange: (value: number) => void
}
