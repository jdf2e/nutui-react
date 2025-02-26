import React, { ReactNode } from 'react'
import { OverlayProps } from '@/packages/overlay/types'

export type Teleport = HTMLElement | (() => HTMLElement) | null
export type PopupPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'none'
export type CloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export interface PopupProps extends OverlayProps {
  position: PopupPosition
  transition: string
  overlayStyle: React.CSSProperties
  overlayClassName: string
  closeable: boolean
  closeIconPosition: CloseIconPosition
  closeIcon: ReactNode
  left?: ReactNode
  title?: ReactNode
  description?: ReactNode
  destroyOnClose: boolean
  portal: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onOverlayClick: (e: React.MouseEvent) => boolean | void
  onCloseIconClick: (e: React.MouseEvent) => boolean | void
}
