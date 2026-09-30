import { BaseTabbar, BaseTabbarItem } from './base'

export interface TaroTabbarProps extends BaseTabbar {
  /** Android 原生背板采样目标；需与页面背景 View 的 blurId 配对 */
  materialTargetId?: string
  /** iOS 原生背板材质；液态玻璃仅 iOS 26+ 生效，旧版回退渐变模糊 */
  iosMaterial?: 'gradient-blur' | 'liquid-glass'
}
export interface TaroTabbarItemProps extends BaseTabbarItem {}
