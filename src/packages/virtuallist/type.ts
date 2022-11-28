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

export interface BasicVirtualListProps {
  className?: string
  style?: React.CSSProperties
  sourceData: Array<Data> // 获取数据
  containerSize?: number // 容器大小
  ItemRender?: React.FC<any> // virtual 列表父节点渲染的函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
  itemSize?: number // 预估高度
  itemEqualSize?: boolean // item 固定大小，默认是true
  horizontal?: boolean // true为水平的，false为垂直的， 默认为false
  overscan?: number // 除了视窗里面默认的元素, 还需要额外渲染的, 避免滚动过快, 渲染不及时,默认是2
  handleScroll?: (...args: any[]) => any // 滑动到底部执行的函数
  onScroll?: (...args: any[]) => any // 滑动到底部执行的函数
  key?: string // 遍历时生成item 的唯一key,默认是index,建议传入resources的数据具体的某个唯一值的字段
  locale?: { [key in string]: string }
}
