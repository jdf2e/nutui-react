import { ITouchEvent, ImageProps } from '@tarojs/components'
import { BaseAvatar, BaseAvatarGroup } from './base'

export interface TaroAvatarProps extends Omit<BaseAvatar, 'onClick'> {
  avatarIndex: number
  /** 图片裁剪、缩放的模式，同 Taro Image 的 mode 属性 */
  mode: keyof ImageProps.Mode
  /**
   * @deprecated 请使用 mode 属性代替
   */
  fit: BaseAvatar['fit']
  onClick: (e: ITouchEvent) => void
}

export interface TaroAvatarGroupProps extends BaseAvatarGroup {}
