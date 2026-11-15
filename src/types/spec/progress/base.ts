import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type ProgressMode = 'default' | 'video'
export type ProgressStatus = 'static' | 'paused'

export interface BaseProgress extends BaseProps {
  /** 百分比 / Percentage */
  percent: number
  /** 进度条背景颜色 / Progress bar background color */
  background: string
  /** 进度条线条颜色 / Progress bar line color */
  color: string
  /** 进度条宽度 / Progress bar stroke width */
  strokeWidth: string
  /** 是否显示文字内容 / Whether to show text */
  showText: boolean
  /** 是否展示动画效果 / Whether to display animation */
  animated: boolean
  /** 每次进入可视区展示进度条动画 / Play animation when entering viewport */
  lazy: boolean
  /** 延迟数据加载时长，单位 ms / Delay duration in ms */
  delay: number
  /** 进度条圆角大小 / Corner radius of progress bar */
  borderRadius: string
  /** 进度文字大小 / Progress text font size */
  fontSize: string
  /** 动画播放方式 / Animation playback mode */
  activeMode: string
  /** 动画完成时间（单位：毫秒） / Animation duration in ms */
  duration: number
  /** 无障碍标签 / Accessible aria-label */
  ariaLabel: string
  /** 动画完成后的回调函数 / Callback after animation completes */
  onActiveEnd: () => void

  /** 进度条展示模式:default 普通进度条,video 视频风格进度条 / Display mode */
  mode?: ProgressMode
  /** video 模式下的播放状态:static 播放中,paused 暂停 / Playback status in video mode */
  status?: ProgressStatus
  /** video 模式下是否允许拖动滑块调整进度 / Whether thumb is draggable in video mode */
  draggable?: boolean
  /** video 模式下是否显示滑块 / Whether to show thumb in video mode */
  showThumb?: boolean
  /** video 模式下 paused 状态时滑块中央展示的图标 / Icon displayed in thumb when paused */
  pausedIcon?: ReactNode
  /** 进度值最小值 / Minimum value */
  min?: number
  /** 进度值最大值 / Maximum value */
  max?: number
  /** 拖动时的步长,未设置时按像素连续变化 / Drag step */
  step?: number
  /** 进度值变化的回调，拖动过程中连续触发 / Callback on percent change */
  onChange?: (percent: number) => void
  /** 拖动开始时的回调 / Callback on drag start */
  onDragStart?: (percent: number) => void
  /** 拖动过程中的回调 / Callback during dragging */
  onDragging?: (percent: number) => void
  /** 拖动结束时的回调 / Callback on drag end */
  onDragEnd?: (percent: number) => void
}
