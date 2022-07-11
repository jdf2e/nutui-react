import { CSSProperties, ReactNode, ForwardRefExoticComponent, PropsWithChildren } from 'react'

export type DialogConfigType = {
  prefixCls?: string
  simple?: boolean
}

export interface DialogProps {
  className?: string
  style?: CSSProperties
  visible?: boolean
  title?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  okText?: ReactNode
  cancelText?: ReactNode
  mask?: boolean
  noOkBtn?: boolean
  noCancelBtn?: boolean
  okBtnDisabled?: boolean
  noFooter?: boolean
  closeOnClickOverlay?: boolean
  cancelAutoClose?: boolean
  textAlign?: any
  footerDirection?: string
  lockScroll?: boolean
  onClosed?: () => void
  onOk?: (e?: MouseEvent) => Promise<any> | void
  onCancel?: () => void
  onConfirm?: (e?: MouseEvent) => Promise<any> | void
}

export type DialogReturnProps = { update: Function; close: Function }

export interface ConfirmProps extends DialogProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: string
}

export interface DialogComponent extends ForwardRefExoticComponent<PropsWithChildren<DialogProps>> {
  confirm: (props: ConfirmProps) => DialogReturnProps
  alert: (props: ConfirmProps) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<Function> = []
