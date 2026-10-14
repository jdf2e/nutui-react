/**
 * InfiniteLoading 内置图标，按 type 选择：
 * - 常规通用：type="default" 使用
 * - 常规白色：type="primary" 反白模式使用
 *
 * 「加载中」「上滑更多加载」用 gif 动图，「没有更多了」用静态图（结束态不需要动画）。
 *
 * 设计另外提供的 agent / 大促主题图标不内置，
 * 使用方通过 renderIcon(status) 传入即可，参考 demos 中的自定义图标示例。
 */

// 加载中 / 上滑更多加载：gif 动图
export const INFINITE_LOADING_DEFAULT_ICON =
  'https://img13.360buyimg.com/imagetools/jfs/t1/531639/14/4869/43793/0050ef01F4f6336ae/03e60c80c8d6f2c2.gif'

export const INFINITE_LOADING_PRIMARY_ICON =
  'https://img12.360buyimg.com/imagetools/jfs/t1/527356/20/8165/39241/0050ef01F49480769/03e60c80c89c376d.gif'

// 没有更多了：静态图
export const INFINITE_LOADING_DEFAULT_COMPLETE_ICON =
  'https://img13.360buyimg.com/imagetools/jfs/t1/525417/10/9591/5691/6ab3a20aF0e7ab1e8/03e60c80c8445b3c.png'

export const INFINITE_LOADING_PRIMARY_COMPLETE_ICON =
  'https://img10.360buyimg.com/imagetools/jfs/t1/534112/12/2201/5384/6ab3a20aF1cd9c153/03e60c80c83e65e6.png'
