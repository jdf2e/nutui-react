import { ScrollViewProps } from '@tarojs/components'
import { BaseInfiniteLoading } from '../base/infiniteloading'

export interface TaroInfiniteLoadingProps
  extends BaseInfiniteLoading,
    Omit<ScrollViewProps, 'style' | 'type' | 'onScroll'> {}
