import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Align, EdgePosition, VAlign } from '../../base/atoms'
import { BaseOverlay } from '@/types'

export type PopupCloseIconPosition = Extract<
  EdgePosition,
  'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
>
export type PopupPosition = Exclude<Align | VAlign, 'middle'> | 'none'

export interface BasePopup extends BaseProps, BaseOverlay {
  position: PopupPosition
  transition: string
  closeable: boolean
  closeIconPosition: PopupCloseIconPosition
  closeIcon: ReactNode
  left?: ReactNode
  title?: ReactNode
  description?: ReactNode
  destroyOnClose: boolean
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onOverlayClick: (e: any) => boolean | void
  onCloseIconClick: (e: any) => boolean | void
}
