import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { UIType } from '../../base/atoms'

export type PullToRefreshType = Extract<UIType, 'default' | 'primary'>
export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export interface BasePullToRefresh extends BaseProps {
  onRefresh: () => Promise<any>
  type: PullToRefreshType
  pullingText: ReactNode
  canReleaseText: ReactNode
  refreshingText: ReactNode
  completeText: ReactNode
  completeDelay: number
  headHeight: number
  threshold: number
  disabled: boolean
  renderIcon: (status: PullStatus) => ReactNode
  renderText: (status: PullStatus) => ReactNode
}
