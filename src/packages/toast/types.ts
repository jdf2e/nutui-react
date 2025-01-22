import { OverlayProps } from '@/packages/overlay/types'

export type ToastPosition = 'top' | 'bottom' | 'center'
export type ToastIcon =
  | 'success'
  | 'fail'
  | 'loading'
  | 'warn'
  | React.ReactNode
export type ToastWordBreak = 'normal' | 'break-all' | 'break-word'
export type ToastSize = 'small' | 'base' | 'large'

export interface ToastProps extends Omit<OverlayProps, 'onClick'> {
  id: string
  position: ToastPosition
  title: string
  size: ToastSize
  icon: ToastIcon
  content: React.ReactNode
  contentClassName: string
  contentStyle: React.CSSProperties
  wordBreak: ToastWordBreak
  onClose: () => void
}
