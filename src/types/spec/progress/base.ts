import { BaseProps } from '../../base/props'

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
}
