import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ScrollView } from '@tarojs/components'
import { getSystemInfoSync } from '@tarojs/taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { PositionType, VirtualListState } from './type'
import { binarySearch, initPositinoCache, updateItemSize } from './utils'

export type VirtualListProps = {
  className?: string | any
  style?: React.CSSProperties
  list: any // 获取数据
  containerHeight?: number // 容器大小
  ItemRender?: any // virtual 列表父节点渲染的函数，默认为 (items, ref) => <div ref={ref}>{items}</div>
  itemEqual?: boolean // item 固定大小，默认是true
  itemHeight?: number // 预估元素高度
  overscan?: number // 除了视窗里面默认的元素, 还需要额外渲染的, 避免滚动过快, 渲染不及时,默认是2
  onScroll?: (...args: any[]) => any // 滑动到底部执行的函数
  key?: any // 遍历时生成item 的唯一key,默认是index,建议传入resources的数据具体的某个唯一值的字段
  locale?: any
}
const defaultProps = {
  list: [],
  itemHeight: 66,
  itemEqual: true,
  overscan: 2,
} as VirtualListProps

const clientHeight = getSystemInfoSync().windowHeight - 5 || 667
const clientWidth = getSystemInfoSync().windowWidth || 375

export const VirtualList: FunctionComponent<
  VirtualListProps & React.HTMLAttributes<HTMLDivElement>
> = (props: VirtualListProps) => {
  const {
    list = [],
    ItemRender,
    itemHeight = 66,
    itemEqual = true,
    overscan = 2,
    key,
    onScroll,
    className,
    containerHeight = clientHeight,
    ...rest
  } = props
  //   const sizeKey = horizontal ? 'width' : 'height'
  //   const scrollKey = horizontal ? 'scrollLeft' : 'scrollTop'
  //   const offsetKey = horizontal ? 'left' : 'top'

  const [startOffset, setStartOffset] = useState(0)
  const [start, setStart] = useState(0)

  const { locale } = useConfig()
  // 虚拟列表容器ref
  const scrollRef = useRef<HTMLDivElement>(null)
  // 虚拟列表显示区域ref
  const itemsRef = useRef<HTMLDivElement>(null)
  const firstItemRef = useRef(null)
  // 列表位置信息
  const [positions, setPositions] = useState<PositionType[]>([
    {
      index: 0,
      left: 0,
      top: 0,
      bottom: 0,
      width: 0,
      height: 0,
      right: 0,
    },
  ])

  const [offSetSize, setOffSetSize] = useState<number>(containerHeight || 0)
  const [options, setOptions] = useState<VirtualListState>({
    startOffset: 0, // 可视区域距离顶部的偏移量
    startIndex: 0, // 可视区域开始索引
    overStart: 0,
    endIndex: 10, // 可视区域结束索引
  })

  //   初始计算可视区域展示数量
  useEffect(() => {
    setPositions((options) => {
      return { ...options, endIndex: visibleCount() }
    })
  }, [itemHeight, overscan, offSetSize])

  useEffect(() => {
    if (containerHeight) return

    setOffSetSize(getContainerHeight())
  }, [containerHeight])

  useEffect(() => {
    const pos = initPositinoCache(itemHeight, list.length)

    setPositions(pos)
  }, [itemHeight, list])

  // 可视区域总高度
  const getContainerHeight = () => {
    // 初始首页列表高度
    const initH = itemHeight * list.length
    // 未设置containerHeight高度，判断首页高度小于设备高度时，滚动容器高度为首页数据高度，减5为分页触发的偏移量
    return initH < clientHeight
      ? initH + overscan * itemHeight - 5
      : Math.min(containerHeight, clientHeight) // Math.min(containerHeight, clientHeight)
  }
  // 可视区域条数
  const visibleCount = () => {
    return Math.ceil(getContainerHeight() / itemHeight) + overscan
  }

  const end = () => {
    return start + visibleCount()
  }

  const listHeight = () => {
    return list.length * itemHeight
  }

  const visibleData = () => {
    return list.slice(start, Math.min(end(), list.length))
  }

  const updateTotalSize = useCallback(() => {
    if (!itemsRef.current) return
    const items: HTMLCollection = itemsRef.current.children
    if (!items.length) return
    // 更新缓存
    updateItemSize(positions, items, 'height')
  }, [positions])

  // 滚动监听
  const listScroll = (e: any) => {
    const scrollTop = e.detail ? e.detail.scrollTop : e.target.scrollTop
    const scrollSize = Math.floor(scrollTop)
    const startIndex = binarySearch(positions, scrollSize, false)

    const overStart = startIndex - overscan > -1 ? startIndex - overscan : 0
    const endIndex = end()
    if (!itemEqual) {
      updateTotalSize()
    }
    setStart(Math.floor(scrollTop / itemHeight))

    setOptions({ startOffset, startIndex, overStart, endIndex })

    if (end() > list.length - 1) {
      onScroll && onScroll()
    }
    setStartOffset(scrollTop - (scrollTop % itemHeight))
  }

  return (
    <div
      className={
        className ? `${className} nut-virtualList-box` : 'nut-virtualList-box'
      }
      {...rest}
      style={{
        height: containerHeight ? `${offSetSize}px` : '',
      }}
    >
      <ScrollView
        scrollY
        type="list"
        ref={scrollRef}
        className="nut-virtuallist"
        style={{
          height: `${getContainerHeight()}px`,
        }}
        onScroll={listScroll}
      >
        <div
          className="nut-virtuallist-phantom"
          style={{ height: `${listHeight()}px` }}
        />
        <div
          className="nut-virtuallist-container"
          ref={itemsRef}
          style={{ transform: `translate3d(0, ${startOffset}px, 0)` }}
        >
          {visibleData().map((data: any, index: number) => {
            const { overStart } = options
            const dataIndex = overStart + index
            const keyVal = key && data[key] ? data[key] : dataIndex
            return (
              <div
                ref={dataIndex === 0 ? firstItemRef : null}
                data-index={`${dataIndex}`}
                className="nut-virtuallist-item"
                key={`${data}`}
                style={{
                  height: `${itemEqual ? `${itemHeight}px` : 'auto'}`,
                }}
              >
                {ItemRender ? (
                  <ItemRender data={data} index={`${index}`} />
                ) : (
                  data
                )}
              </div>
            )
          })}
        </div>
      </ScrollView>
    </div>
  )
}

VirtualList.defaultProps = defaultProps
VirtualList.displayName = 'NutVirtualList'
