import { ITouchEvent } from '@tarojs/components'
import { BaseSwitch } from '../base/swtich'

type UnionEvent = React.MouseEvent<Element, MouseEvent> | ITouchEvent
export interface TaroSwitchProps extends BaseSwitch<UnionEvent> {}
