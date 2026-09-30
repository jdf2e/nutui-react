import { BaseTabbar, BaseTabbarItem } from './base'

export interface TaroTabbarProps extends BaseTabbar {
  /** Android 原生背板采样目标；需与页面背景 View 的 blurId 配对 */
  materialTargetId?: string
}
export interface TaroTabbarItemProps extends BaseTabbarItem {}
