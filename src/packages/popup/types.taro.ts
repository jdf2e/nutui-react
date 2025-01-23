import { ITouchEvent } from '@tarojs/components'
import { PopupProps as PopupWebProps } from './types'

export type { CloseIconPosition, Teleport } from './types'
export type PopupProps = Omit<
  PopupWebProps,
  'onOverlayClick' | 'onCloseIconClick' | 'onClick'
> & {
  onClick: (event: ITouchEvent) => void
  onOverlayClick: (e: ITouchEvent) => boolean | void
  onCloseIconClick: (e: ITouchEvent) => boolean | void
}
