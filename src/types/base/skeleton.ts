import { BaseProps } from './baseprops'
import { UIRound } from './baseatom'

export interface BaseSkeleton extends BaseProps {
  animated: boolean
  rows: number
  title: boolean
  avatar: boolean
  avatarSize: string
  visible: boolean
  avatarShape: UIRound
}
