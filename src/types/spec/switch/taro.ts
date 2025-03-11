import { ITouchEvent } from '@tarojs/components'
import { BaseSwitch } from './base'

type UnionEvent = React.MouseEvent<Element, MouseEvent> | ITouchEvent
export interface TaroSwitchProps extends BaseSwitch<UnionEvent> {}
