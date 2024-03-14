import { ReactNode, ForwardRefExoticComponent, PropsWithChildren } from 'react'
import type { MouseEvent } from 'react'
import { BasicComponent } from '@/utils/typings'

export type DialogConfigType = {
  prefixCls?: string
  simple?: boolean
}

export type DialogCloseIconPosition = 'top-right' | 'top-left' | 'bottom'

export interface DialogBasicProps extends BasicComponent {
  visible?: boolean
  title?: ReactNode
  content?: ReactNode
  header?: ReactNode
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
  closeIconPosition?: DialogCloseIconPosition
  closeIcon?: boolean | ReactNode
  beforeClose?: () => boolean
  beforeCancel?: () => boolean
  onClose?: () => void
  onConfirm?: (e?: MouseEvent<HTMLButtonElement>) => PromiseLike<any> | void
  onCancel?: () => void
  onClick?: () => void
  onOverlayClick?: () => void
}

export type DialogReturnProps = {
  update: (newConfig: DialogConfirmProps) => void
  close: () => void
}

export interface DialogConfirmProps extends DialogBasicProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: string
}

export interface DialogComponent
  extends ForwardRefExoticComponent<PropsWithChildren<DialogBasicProps>> {
  confirm: (props: DialogConfirmProps) => DialogReturnProps
  alert: (props: DialogConfirmProps) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<() => void> = []
