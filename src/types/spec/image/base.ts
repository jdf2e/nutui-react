import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { FixAutoComplete } from '../../helpers/fix-string-literal-union'
import { Align, PositionY, SimpleValue } from '../../base/atoms'

export type ImageFit = FixAutoComplete<
  'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
>
export type ImagePosition = FixAutoComplete<Align | PositionY>

export interface BaseImage extends BaseProps {
  src: string
  fit: ImageFit
  position: ImagePosition
  alt: string
  width: string | number
  height: string | number
  radius: SimpleValue
  error: ReactNode
  loading: ReactNode
  lazy: boolean
  draggable: boolean
  onLoad: () => void
  onError: () => void
  onClick: (e: any) => void
}
