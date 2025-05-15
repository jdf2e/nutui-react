import { ReactNode } from 'react'

export type ShortPasswordRef = {
  open: () => void
  close: () => void
}

export type BaseShortPassword<POPUP_PROPS = any> = POPUP_PROPS & {
  value: string
  visible: boolean
  plain: boolean
  title: ReactNode
  description: ReactNode
  tips: ReactNode
  hideFooter: boolean
  length: number
  error: ReactNode
  autoFocus: boolean
  onFocus: () => void
  onChange: (value: string) => void
  onConfirm: (value: string) => void
  onCancel: () => void
  onClose: () => void
  onTips: () => void
  onComplete: (value: string) => void
}
