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
  /**
   * @deprecated 即将废弃。默认场景下加载完成后直接收起，无需展示完成态；
   * 仅在显式传入该字段时为兼容存量用法而走老的 complete 流程。
   */
  completeText: ReactNode
  /**
   * @deprecated 即将废弃，单位为 ms。仅在传入 completeText 时生效，
   * 用于兼容存量用法；默认场景下加载完成后直接收起。
   */
  completeDelay: number
  headHeight: number
  threshold: number
  disabled: boolean
  renderIcon: (status: PullStatus) => ReactNode
  renderText: (status: PullStatus) => ReactNode
}
