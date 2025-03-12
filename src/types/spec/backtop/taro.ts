import { ITouchEvent } from '@tarojs/components'
import { PageScrollObject } from '@tarojs/taro'
import { BaseBackTop } from './base'
import { TaroHoverButtonProps } from '../hoverbutton/taro'

export interface TaroBackTopProps
  extends TaroHoverButtonProps,
    Omit<BaseBackTop, 'onClick'> {
  scrollRes?: PageScrollObject
  onClick: (event: ITouchEvent) => void
}
