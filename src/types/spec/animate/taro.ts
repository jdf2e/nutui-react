import { ITouchEvent } from '@tarojs/components'
import { BaseAnimate } from './base'

export interface TaroAnimateProps extends Omit<BaseAnimate, 'onClick'> {
  onClick: (event: ITouchEvent) => void
}
