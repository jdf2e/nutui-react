import { ReactNode, ForwardRefExoticComponent, PropsWithChildren } from 'react'
import type { MouseEvent, CSSProperties } from 'react'
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
  onClick: (event: MouseEvent) => void
}
export interface DialogWrapProps
  extends OverlayProps,
    Omit<ContentProps, 'onClick'> {
  visible: boolean
  overlay: boolean
  overlayStyle: CSSProperties
  overlayClassName: string
  onCancel: () => void
  onClose: () => void
  onOverlayClick: (e: MouseEvent) => boolean | void
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
  content: ReactNode
  isNotice: boolean
  noticeType: string
}

export type DialogReturnProps = {
  update: (newConfig: Partial<DialogConfirmProps>) => void
  close: () => void
}

export interface DialogComponent
  extends ForwardRefExoticComponent<
    PropsWithChildren<Partial<DialogBasicProps>>
  > {
  confirm: (props: Partial<DialogConfirmProps>) => DialogReturnProps
  alert: (props: Partial<DialogConfirmProps>) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<() => void> = []
