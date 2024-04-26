export type Data = any

export interface VirtualListState {
  startOffset: number // 可视区域距离顶部的偏移量
  startIndex: number // 可视区域开始索引
  overStart: number
  endIndex: number // 可视区域结束索引
}

export interface PositionType {
  index: number // 缓存索引
  top?: number // 每一页距离顶部的位置
  height?: number // 页面高度
  bottom: number // 每一页底部距离顶部的高度
  width?: number
  left?: number
  right: number
}
