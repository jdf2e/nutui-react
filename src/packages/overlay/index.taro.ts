import { ITouchEvent } from '@tarojs/components'
import { Overlay } from './overlay.taro'

import { OverlayProps as OverlayWebProps } from './types'

export type OverlayProps = OverlayWebProps & {
  onClick: (event: ITouchEvent) => void
}

export default Overlay
