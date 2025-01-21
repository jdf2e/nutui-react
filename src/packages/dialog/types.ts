import { ReactNode, ForwardRefExoticComponent, PropsWithChildren } from 'react'
import type { MouseEvent } from 'react'
import { OverlayProps } from '@/packages/overlay/types'
import { BasicComponent } from '@/utils/typings'

export type DialogConfigType = {
  prefixCls?: string
  simple?: boolean
}

export type DialogCloseIconPosition = 'top-right' | 'top-left' | 'bottom'
export type DialogFooterDirection = 'horizontal' | 'vertical'
export interface ContentProps extends BasicComponent {
  visible: boolean
  title: ReactNode
  header: ReactNode
  footer: ReactNode
  close: ReactNode
  footerDirection: DialogFooterDirection
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void
}
export interface DialogWrapProps
  extends OverlayProps,
    Omit<ContentProps, 'onClick'> {
  visible: boolean
  overlay: boolean
  overlayStyle: React.CSSProperties
  overlayClassName: string
  onCancel: () => void
  onClose: () => void
  onOverlayClick: (e: React.MouseEvent<Element, MouseEvent>) => boolean | void
}

export interface DialogBasicProps extends DialogWrapProps {
  content?: ReactNode
  confirmText?: ReactNode
  cancelText?: ReactNode
  hideConfirmButton?: boolean
  hideCancelButton?: boolean
  disableConfirmButton?: boolean
  closeIconPosition?: DialogCloseIconPosition
  closeIcon?: boolean | ReactNode
  beforeClose?: () => boolean
  beforeCancel?: () => boolean
  onConfirm?: (e?: MouseEvent<HTMLButtonElement>) => PromiseLike<any> | void
}

export interface DialogConfirmProps extends DialogBasicProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: string
}

export type DialogReturnProps = {
  update: (newConfig: DialogConfirmProps) => void
  close: () => void
}

export interface DialogComponent
  extends ForwardRefExoticComponent<PropsWithChildren<DialogBasicProps>> {
  confirm: (props: DialogConfirmProps) => DialogReturnProps
  alert: (props: DialogConfirmProps) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<() => void> = []
