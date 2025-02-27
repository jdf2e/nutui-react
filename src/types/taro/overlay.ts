import { ITouchEvent } from '@tarojs/components'
import { BaseOverlay } from '../base/overlay'

export interface TaroOverlayProps extends Omit<BaseOverlay, 'onClick'> {
  onClick: (event: ITouchEvent) => void
}
