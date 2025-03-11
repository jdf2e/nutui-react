import { CSSProperties, ReactNode } from 'react'
import { UISize, VAlign } from '../../base/atoms'

export type ToastIcon = 'success' | 'fail' | 'loading' | 'warn' | ReactNode
export type ToastWordBreak = 'normal' | 'break-all' | 'break-word'
export type ToastSize = Extract<UISize, 'large' | 'small'> | 'base'

export type BaseToast<OVERLAY_PROPS> = OVERLAY_PROPS & {
  id: string
  position: VAlign
  title: string
  size: ToastSize
  icon: ToastIcon
  content: ReactNode
  contentClassName: string
  contentStyle: CSSProperties
  wordBreak: ToastWordBreak
  onClose: () => void
}
