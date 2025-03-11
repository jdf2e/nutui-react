import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { UIType } from '../../base/atoms'

export type InfiniteLoadingType = Extract<UIType, 'primary' | 'default'>

export interface BaseInfiniteLoading extends BaseProps {
  type: InfiniteLoadingType
  hasMore: boolean
  threshold: number
  target: string
  capture: boolean
  pullRefresh: boolean
  pullingText: ReactNode
  loadingText: ReactNode
  loadMoreText: ReactNode
  onRefresh: () => Promise<void>
  onLoadMore: () => Promise<void>
  onScroll: (param: number) => void
}
