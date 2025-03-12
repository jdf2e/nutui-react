import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { FullPosition, SimpleValue } from '../../base/atoms'

export interface TourList {
  target: Element | string
  content?: string
  location?: FullPosition
  popoverOffset?: number[]
  arrowOffset?: number
}

export type TourType = 'step' | 'tile'

export interface BaseTour extends BaseProps {
  visible: boolean
  type: TourType
  location: FullPosition
  mask: boolean
  maskWidth: SimpleValue
  maskHeight: SimpleValue
  offset: number[]
  list: TourList[]
  title: ReactNode
  next: ReactNode
  prev: ReactNode
  complete: ReactNode
  showPrev: boolean
  closeOnOverlayClick: boolean
  onClose: (e: any) => void
  onChange: (value: number) => void
}
