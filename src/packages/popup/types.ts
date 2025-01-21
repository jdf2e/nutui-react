import React, { ReactNode } from 'react'
import { OverlayProps } from '@/packages/overlay/types'

export type Teleport = HTMLElement | (() => HTMLElement) | null
export interface PopupProps extends OverlayProps {
  position: string
  transition: string
  overlayStyle: React.CSSProperties
  overlayClassName: string
  closeable: boolean
  closeIconPosition: string
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
  onOverlayClick: (e: React.MouseEvent) => boolean | undefined
  onCloseIconClick: (e: React.MouseEvent) => boolean | undefined
}
