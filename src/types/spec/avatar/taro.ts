import { ITouchEvent } from '@tarojs/components'
import { BaseAvatar, BaseAvatarGroup } from './base'

export interface TaroAvatarProps extends Omit<BaseAvatar, 'onClick'> {
  avatarIndex: number
  onClick: (e: ITouchEvent) => void
}

export interface TaroAvatarGroupProps extends BaseAvatarGroup {}
