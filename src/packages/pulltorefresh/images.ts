/**
 * PullToRefresh 内置默认图标（gif 动图）。
 *
 * 设计共提供 6 套图标，组件只内置其中两套作为开箱即用的默认值：
 * - 常规通用：type="default" 使用
 * - 常规白色：type="primary" 反白模式使用
 *
 * 其余 4 套（常规 agent / 常规大促 / 大促通用 / 大促 agent）不内置，
 * 使用方通过 renderIcon(status) 自行返回即可，参考 demos 中的自定义图标示例。
 */
export const PULL_TO_REFRESH_DEFAULT_ICON =
  'https://img13.360buyimg.com/imagetools/jfs/t1/531639/14/4869/43793/0050ef01F4f6336ae/03e60c80c8d6f2c2.gif'

export const PULL_TO_REFRESH_PRIMARY_ICON =
  'https://img12.360buyimg.com/imagetools/jfs/t1/527356/20/8165/39241/0050ef01F49480769/03e60c80c89c376d.gif'
