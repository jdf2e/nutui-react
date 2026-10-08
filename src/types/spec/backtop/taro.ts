import { ITouchEvent } from '@tarojs/components'
import { PageScrollObject } from '@tarojs/taro'
import { BaseBackTop } from './base'

export interface TaroBackTopProps extends Omit<BaseBackTop, 'onClick'> {
  scrollRes?: PageScrollObject
  onClick?: (event: ITouchEvent) => void
}
