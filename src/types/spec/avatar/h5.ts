import { BaseAvatar, BaseAvatarGroup } from './base'

export interface WebAvatarProps extends Omit<BaseAvatar, 'onClick'> {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface WebAvatarGroupProps extends BaseAvatarGroup {}
