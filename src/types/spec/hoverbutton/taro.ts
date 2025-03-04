import { ITouchEvent } from '@tarojs/components'
import { BaseHoverButton, BaseHoverButtonItem } from './base'

export interface TaroHoverButtonProps extends BaseHoverButton {}

export interface TaroHoverButtonItemProps
  extends Omit<BaseHoverButtonItem, 'onClick'> {
  onClick?: (event: ITouchEvent) => void
}
