import { ReactNode, ForwardRefExoticComponent, PropsWithChildren } from 'react'
import type { MouseEvent } from 'react'

export type DialogConfigType = {
  prefixCls?: string
  simple?: boolean
}

export interface BasicDialogProps {
  visible?: boolean
  title?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  confirmText?: ReactNode
  cancelText?: ReactNode
  overlay?: boolean
  hideConfirmButton?: boolean
  hideCancelButton?: boolean
  disableConfirmButton?: boolean
  closeOnOverlayClick?: boolean
  footerDirection?: string
  lockScroll?: boolean
  beforeClose?: () => boolean
  beforeCancel?: () => boolean
  onClose?: () => void
  onConfirm?: (e?: MouseEvent<HTMLButtonElement>) => Promise<() => void> | void
  onCancel?: () => void
  onClick?: () => void
  onOverlayClick?: () => void
}

export type DialogReturnProps = {
  update: (newConfig: ConfirmProps) => void
  close: () => void
}

export interface ConfirmProps extends BasicDialogProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: string
}

export interface DialogComponent
  extends ForwardRefExoticComponent<PropsWithChildren<BasicDialogProps>> {
  confirm: (props: ConfirmProps) => DialogReturnProps
  alert: (props: ConfirmProps) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<() => void> = []
