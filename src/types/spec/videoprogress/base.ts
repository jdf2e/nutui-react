import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type VideoProgressStatus = 'static' | 'paused'

export interface BaseVideoProgress extends BaseProps {
  /** 进度百分比 (0-100) / Progress percentage */
  percent?: number
  /** 播放状态: static 播放中, paused 暂停 / Playback status */
  status?: VideoProgressStatus
  /** 是否允许拖动滑块调整进度 / Whether thumb is draggable */
  draggable?: boolean
  /** 是否显示滑块 / Whether to show thumb */
  showThumb?: boolean
  /** 暂停状态下展示在滑块中央的自定义图标 / Custom icon when paused */
  pausedIcon?: ReactNode
  /** 最小值，默认 0 / Minimum value */
  min?: number
  /** 最大值，默认 100 / Maximum value */
  max?: number
  /** 步长 / Step */
  step?: number
  /** 进度值变化时的回调 / Callback on percent change */
  onChange?: (percent: number) => void
  /** 拖动开始回调 / Callback on drag start */
  onDragStart?: (percent: number) => void
  /** 拖动中回调 / Callback during dragging */
  onDragging?: (percent: number) => void
  /** 拖动结束回调 / Callback on drag end */
  onDragEnd?: (percent: number) => void
  /** 无障碍标签 / Accessible aria-label */
  ariaLabel?: string
}
