import { BaseProps } from './baseprops'

export type avatarShape = 'round' | 'square'
export interface BaseSkeleton extends BaseProps {
  animated: boolean
  rows: number
  title: boolean
  avatar: boolean
  avatarSize: string
  visible: boolean
  avatarShape: avatarShape
}
