import { ITouchEvent } from '@tarojs/components'
import { BaseDialog, BaseContentProps } from './base'

export interface TaroContentProps extends BaseContentProps {
  onClick: (event: ITouchEvent) => void
  ariaRole: string
  ariaLabel: string
}

export interface TaroDialogProps
  extends Omit<BaseDialog, 'onOverlayClick' | 'onClick'> {
  onClick: (event: ITouchEvent) => void
  onOverlayClick: (event: ITouchEvent) => boolean | void
}
