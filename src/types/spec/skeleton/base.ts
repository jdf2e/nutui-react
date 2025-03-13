import { BaseProps } from '../../base/props'
import { SimpleValue, UIRound, UISize } from '../../base/atoms'

export type avatarShape = 'round' | 'square'
export interface BaseSkeleton extends BaseProps {
  rows: number
  size: Extract<UISize, 'small' | 'normal' | 'large'>
  width: SimpleValue
  height: SimpleValue
  shape: UIRound | 'circle'
  animated: boolean
  duration: number
  inline: boolean
  visible: boolean
}

// 不支持行内布局
// 单独设置 avatar ，需要 row 设置为 0
// 头像和文本行布局，不便于在复杂场景调整布局
// 设置宽度和高度不够灵活
