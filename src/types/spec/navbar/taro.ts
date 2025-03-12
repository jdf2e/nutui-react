import { ITouchEvent } from '@tarojs/components'
import { BaseNavBar } from './base'

export interface TaroNavBarProps extends Omit<BaseNavBar, 'onBackClick'> {
  onBackClick: (e: ITouchEvent) => void
}
