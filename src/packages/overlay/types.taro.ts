import { ITouchEvent } from '@tarojs/components'
import { OverlayProps as OverlayWebProps } from './types'

export type OverlayProps = Omit<OverlayWebProps, 'onClick'> & {
  onClick: (event: ITouchEvent) => void
}
