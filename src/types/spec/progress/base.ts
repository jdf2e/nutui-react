import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type ProgressMode = 'default' | 'video'
export type ProgressStatus = 'static' | 'paused'

export interface BaseProgress extends BaseProps {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
  lazy: boolean
  delay: number
  borderRadius: string
  fontSize: string
  activeMode: string
  duration: number
  ariaLabel: string
  onActiveEnd: () => void

  /** 进度条展示模式:default 普通进度条,video 视频风格进度条 */
  mode?: ProgressMode
  /** video 模式下的播放状态:static 播放中,paused 暂停 */
  status?: ProgressStatus
  /** video 模式下是否允许拖动滑块调整进度 */
  draggable?: boolean
  /** video 模式下是否显示滑块 */
  showThumb?: boolean
  /** video 模式下 paused 状态时滑块中央展示的图标 */
  pausedIcon?: ReactNode
  /** 进度值最小值 */
  min?: number
  /** 进度值最大值 */
  max?: number
  /** 拖动时的步长,未设置时按像素连续变化 */
  step?: number
  /** 拖动结束后进度值变化的回调 */
  onChange?: (percent: number) => void
  /** 拖动开始时的回调 */
  onDragStart?: (percent: number) => void
  /** 拖动过程中的回调 */
  onDragging?: (percent: number) => void
  /** 拖动结束时的回调 */
  onDragEnd?: (percent: number) => void
}
