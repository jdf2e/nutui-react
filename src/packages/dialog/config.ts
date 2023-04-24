import {
  CSSProperties,
  ReactNode,
  ForwardRefExoticComponent,
  PropsWithChildren,
} from 'react'

export type DialogConfigType = {
  prefixCls?: string
  simple?: boolean
}

export interface BasicDialogProps {
  className?: string
  style?: CSSProperties
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
  cancelAutoClose?: boolean
  footerDirection?: string
  lockScroll?: boolean
  onClose?: () => void
  onConfirm?: (e?: MouseEvent) => Promise<() => void> | void
  onCancel?: () => void
  onClick?: () => void
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
