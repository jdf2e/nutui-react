import { ReactNode, ForwardRefExoticComponent, PropsWithChildren } from 'react'
import type { MouseEvent, CSSProperties } from 'react'
import { WebOverlayProps } from '@/types'
import { BasicComponent } from '@/utils/typings'

export type DialogConfigType = {
  prefixCls?: string
  simple?: boolean
}

export type DialogCloseIconPosition = 'top-right' | 'top-left' | 'bottom'
export type DialogFooterDirection = 'horizontal' | 'vertical'
export interface BaseContentProps extends BasicComponent {
  visible: boolean
  title: ReactNode
  header: ReactNode
  footer: ReactNode
  close: ReactNode
  footerDirection: DialogFooterDirection
}
export interface DialogWrapProps
  extends WebOverlayProps,
    Omit<BaseContentProps, 'onClick'> {
  visible: boolean
  overlay: boolean
  overlayStyle: CSSProperties
  overlayClassName: string
  onCancel: () => void
  onClose: () => void
  onOverlayClick: (e: MouseEvent) => boolean | void
}

export interface BaseDialog extends DialogWrapProps {
  content: ReactNode
  confirmText: ReactNode
  cancelText: ReactNode
  hideConfirmButton: boolean
  hideCancelButton: boolean
  disableConfirmButton: boolean
  closeIconPosition: DialogCloseIconPosition
  closeIcon: boolean | ReactNode
  beforeClose: () => boolean
  beforeCancel: () => boolean
  onConfirm: (e?: MouseEvent<HTMLButtonElement>) => PromiseLike<any> | void
}

export type DialogReturnProps = {
  update: (newConfig: Partial<BaseDialog>) => void
  close: () => void
}

export interface DialogComponent
  extends ForwardRefExoticComponent<PropsWithChildren<Partial<BaseDialog>>> {
  confirm: (props: Partial<BaseDialog>) => DialogReturnProps
  alert: (props: Partial<BaseDialog>) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<() => void> = []
