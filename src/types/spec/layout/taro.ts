import { ITouchEvent } from '@tarojs/components'
import { BaseCol, BaseRow } from './base'
import { UILayout } from '@/types'

export interface TaroColProps extends BaseCol {}
export interface TaroRowProps extends BaseRow {
  onClick: (
    e: React.MouseEvent<Element, MouseEvent> | ITouchEvent,
    type: UILayout
  ) => void
}
