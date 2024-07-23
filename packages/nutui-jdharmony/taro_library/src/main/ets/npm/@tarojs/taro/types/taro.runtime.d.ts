// @ts-nocheck
import type { options } from '../../runtime'

import Taro from './index'

declare module './index' {
  interface TaroStatic {
    options: typeof options
  }
}
