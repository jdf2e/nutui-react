import type { CSSProperties, ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { UIType } from '../../base/atoms'

export type InfiniteLoadingType = Extract<UIType, 'primary' | 'default'>
export type InfiniteLoadingStatus = 'idle' | 'loading' | 'complete'

export interface InfiniteLoadingIconStyle extends CSSProperties {
  '--nutui-infiniteloading-icon-size'?: string
}

export interface BaseInfiniteLoading extends BaseProps {
  type: InfiniteLoadingType
  hasMore: boolean
  threshold: number
  target: string
  capture: boolean
  pullRefresh: boolean
  pullingText: ReactNode
  pullUpText: ReactNode
  loadingText: ReactNode
  loadMoreText: ReactNode
  minimumLoadingTime: number
  iconStyle?: InfiniteLoadingIconStyle
  renderIcon: (status: InfiniteLoadingStatus) => ReactNode
  onRefresh: () => Promise<void>
  onLoadMore: () => Promise<void>
  onScroll: (param: number) => void
}
