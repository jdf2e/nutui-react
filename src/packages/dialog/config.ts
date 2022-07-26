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
  textAlign?: string
  footerDirection?: string
  lockScroll?: boolean
  onClosed?: () => void
  onOk?: (e?: MouseEvent) => Promise<() => void> | void
  onCancel?: () => void
  onClickSelf?: () => void
  onConfirm?: (e?: MouseEvent) => Promise<() => void> | void
}

export type DialogReturnProps = {
  update: (newConfig: ConfirmProps) => void
  close: () => void
}

export interface ConfirmProps extends DialogProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: string
}

export interface DialogComponent
  extends ForwardRefExoticComponent<PropsWithChildren<DialogProps>> {
  confirm: (props: ConfirmProps) => DialogReturnProps
  alert: (props: ConfirmProps) => DialogReturnProps
  config: (config: DialogConfigType) => void
  destroyAll: () => void
}

export const destroyList: Array<() => void> = []
