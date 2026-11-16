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
  top?: ReactNode
  description?: ReactNode
  destroyOnClose: boolean
  overlay: boolean
  round: boolean
  /** 折叠屏居中弹层分区；auto 时 Hybrid 下跟随铰链（微弯居左，展平居中） */
  segment?: 'left' | 'right' | 'center' | 'auto'
  resizable: boolean
  minHeight: string
  onOpen: () => void
  onClose: () => void
  onOverlayClick: (e: any) => boolean | void
  onCloseIconClick: (e: any) => boolean | void
  onTouchMove: (height: number, e: any, direction: 'up' | 'down') => void
  onTouchStart: (height: number, e: any) => void
  onTouchEnd: (height: number, e: any) => void
  closeAriaLabel?: string
}
