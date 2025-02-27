import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { FixAutoComplete } from '@/types/helpers/fixstringliteralunion'
import { Align, PositionY, SimpleValue } from './baseatom'

export type ImageFit = FixAutoComplete<
  'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
>
export type ImagePosition = FixAutoComplete<Align | PositionY>

export interface BaseImage extends BaseProps {
  src: string
  fit: ImageFit
  position: ImagePosition
  alt: string
  width: string
  height: string
  radius: SimpleValue
  error: ReactNode
  loading: ReactNode
  lazy: boolean
  draggable: boolean
  onLoad: () => void
  onError: () => void
  onClick: (e: any) => void
}
