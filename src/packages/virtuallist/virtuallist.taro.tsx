import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ScrollView } from '@tarojs/components'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
// import { VirtualListState, PositionType } from './type'
import {
  initPositinoCache,
  getListTotalSize,
  binarySearch,
  getEndIndex,
  updateItemSize,
} from './utils'

export interface VirtualListState {
  startOffset: number // 可视区域距离顶部的偏移量
  startIndex: number // 可视区域开始索引
  overStart: number
  endIndex: number // 可视区域结束索引
}

export interface PositionType {
  index: number | any // 缓存索引
  top?: number | any // 每一页距离顶部的位置
  height?: number | any // 页面高度
  bottom: number | any // 每一页底部距离顶部的高度
  width?: number | any
  left?: number | any
  right: number | any
}

// export interface BasicVirtualListProps {
//   className?: string
//   style?: React.CSSProperties
//   sourceData: Array<Data> // 获取数据
//   containerSize?: number // 容器大小
//   ItemRender?: React.FC<any> // virtual 列表父节点渲染的函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
//   itemSize?: number // 预估高度
//   itemEqualSize?: boolean // item 固定大小，默认是true
//   horizontal?: boolean // true为水平的，false为垂直的， 默认为false
//   overscan?: number // 除了视窗里面默认的元素, 还需要额外渲染的, 避免滚动过快, 渲染不及时,默认是2
//   handleScroll?: (...args: any[]) => any // 滑动到底部执行的函数
//   onScroll?: (...args: any[]) => any // 滑动到底部执行的函数
//   key?: string // 遍历时生成item 的唯一key,默认是index,建议传入resources的数据具体的某个唯一值的字段
//   locale?: { [key in string]: string }
// }

export type VirtualListProps = {
  className?: string | any
  style?: React.CSSProperties
  sourceData: any // 获取数据
  containerSize?: number // 容器大小
  ItemRender?: any // virtual 列表父节点渲染的函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
  itemSize?: number // 预估高度
  itemEqualSize?: boolean // item 固定大小，默认是true
  horizontal?: boolean // true为水平的，false为垂直的， 默认为false
  overscan?: number // 除了视窗里面默认的元素, 还需要额外渲染的, 避免滚动过快, 渲染不及时,默认是2
  handleScroll?: (...args: any[]) => any // 滑动到底部执行的函数
  onScroll?: (...args: any[]) => any // 滑动到底部执行的函数
  key?: any // 遍历时生成item 的唯一key,默认是index,建议传入resources的数据具体的某个唯一值的字段
  locale?: any
}
const defaultProps = {
  sourceData: [],
  itemEqualSize: true,
  itemSize: 200,
  horizontal: false,
  overscan: 2,
} as VirtualListProps

export const VirtualList: FunctionComponent<
  VirtualListProps & React.HTMLAttributes<HTMLDivElement>
> = (props: VirtualListProps) => {
  const {
    sourceData = [],
    ItemRender,
    itemEqualSize = true,
    itemSize = 200,
    horizontal = false,
    overscan = 2,
    key,
    handleScroll,
    onScroll,
    className,
    containerSize,
    ...rest
  } = props
  const sizeKey = horizontal ? 'width' : 'height'
  const scrollKey = horizontal ? 'scrollLeft' : 'scrollTop'
  const offsetKey = horizontal ? 'left' : 'top'

  const [scrollY, setScrollY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  const { locale } = useConfig()
  // 虚拟列表容器ref
  const scrollRef = useRef<HTMLDivElement>(null)
  // 虚拟列表显示区域ref
  const itemsRef = useRef<HTMLUListElement>(null)
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
  // 列表总大小
  const [listTotalSize, setListTotalSize] = useState<number>(99999999)
  // 可视区域条数
  const [visibleCount, setVisibleCount] = useState<number>(0)
  const [offSetSize, setOffSetSize] = useState<number>(containerSize || 0)
  const [options, setOptions] = useState<VirtualListState>({
    startOffset: 0, // 可视区域距离顶部的偏移量
    startIndex: 0, // 可视区域开始索引
    overStart: 0,
    endIndex: 10, // 可视区域结束索引
  })
  const ItemRenderTpl = ({ data }: any) => {
    return <p>{data}</p>
  }
  // 列表位置信息
  useEffect(() => {
    console.log('list', itemSize, sourceData.length)
    const pos = initPositinoCache(itemSize, sourceData.length)
    setPositions(pos)
    const totalSize = getListTotalSize(pos, horizontal)
    setListTotalSize(totalSize)
    console.log('pos', pos, totalSize)
  }, [sourceData, itemSize, horizontal])

  const getElement = useCallback(() => {
    return scrollRef.current?.parentElement || document.body
  }, [])

  useEffect(() => {
    if (containerSize) return
    const size = horizontal
      ? getElement().offsetWidth
      : getElement().offsetHeight
    setOffSetSize(size)
  }, [getElement, horizontal, containerSize])

  useEffect(() => {
    // 初始-计算visibleCount
    if (offSetSize === 0) return
    const count = Math.ceil(offSetSize / itemSize) + overscan

    setVisibleCount(count)
    setOptions((options) => {
      return { ...options, endIndex: count }
    })
  }, [getElement, horizontal, itemSize, overscan, offSetSize])

  const updateTotalSize = useCallback(() => {
    if (!itemsRef.current) return
    const items: HTMLCollection = itemsRef.current.children
    if (!items.length) return
    // 更新缓存
    updateItemSize(positions, items, sizeKey)
    const totalSize = getListTotalSize(positions, horizontal)
    setListTotalSize(totalSize)
  }, [positions, sizeKey, horizontal])

  const scroll = useCallback(() => {
    requestAnimationFrame((e) => {
      const scrollSize = getElement()[scrollKey]
      const startIndex = binarySearch(positions, scrollSize, horizontal)
      const overStart = startIndex - overscan > -1 ? startIndex - overscan : 0
      // const offSetSize = horizontal ? getElement().offsetWidth : getElement().offsetHeight
      if (!itemEqualSize) {
        updateTotalSize()
      }
      const endIndex = getEndIndex({
        sourceData,
        startIndex,
        visibleCount,
        itemEqualSize,
        positions,
        offSetSize,
        sizeKey,
        overscan,
      })
      const startOffset = positions[startIndex][offsetKey] as number
      console.log('scroll22', startOffset, startIndex, overStart, endIndex)
      setOptions({ startOffset, startIndex, overStart, endIndex })
      // 无限下滑
      if (endIndex > sourceData.length - 1) {
        console.log('lastpage1')
        if (onScroll) {
          onScroll()
        } else if (handleScroll) {
          handleScroll()
        }
      }
    })
  }, [
    positions,
    getElement,
    sourceData,
    visibleCount,
    itemEqualSize,
    updateTotalSize,
    offsetKey,
    sizeKey,
    scrollKey,
    horizontal,
    overscan,
    handleScroll,
    offSetSize,
  ])

  //   useEffect(() => {
  //     const element = getElement()
  //     element.addEventListener('scroll', scroll, false)
  //     return () => {
  //       element.removeEventListener('scroll', scroll, false)
  //     }
  //   }, [getElement, scroll])

  const listViewScroll = (e: any) => {
    const target = e.target as Element
    const { scrollTop } = target
    console.log('scroll1', target, scrollTop)
    // scroll()
    // scrollRef.current.scrollY = Math.floor(scrollTop)
    // setScrollY(scrollTop)
    // for (let i = 0; i < listHeight.length - 1; i++) {
    //   const height1 = listHeight[i]
    //   const height2 = listHeight[i + 1]
    //   if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
    //     setCurrentIndex(i)
    //     state.current.diff = height2 - state.current.scrollY
    //     return
    //   }
    // }
    const scrollSize = getElement()[scrollKey]
    const startIndex = binarySearch(positions, scrollSize, horizontal)
    const overStart = startIndex - overscan > -1 ? startIndex - overscan : 0
    // const offSetSize = horizontal ? getElement().offsetWidth : getElement().offsetHeight
    if (!itemEqualSize) {
      updateTotalSize()
    }
    const endIndex = getEndIndex({
      sourceData,
      startIndex,
      visibleCount,
      itemEqualSize,
      positions,
      offSetSize,
      sizeKey,
      overscan,
    })
    const startOffset = positions[startIndex][offsetKey] as number
    setOptions({ startOffset, startIndex, overStart, endIndex })
    // 无限下滑
    if (endIndex > sourceData.length - 1) {
      if (onScroll) {
        onScroll()
      } else if (handleScroll) {
        handleScroll()
      }
    }

    // setCurrentIndex(listHeight.length - 2)
  }

  return (
    <div
      className={
        className ? `${className} nut-virtualList-box` : 'nut-virtualList-box'
      }
      {...rest}
      style={{
        [sizeKey]: containerSize ? `${offSetSize}px` : '',
      }}
    >
      {/* <div
        ref={scrollRef}
        className={horizontal ? 'nut-horizontal-box' : 'nut-vertical-box'}
        style={{
          position: 'relative',
          [sizeKey]: `${listTotalSize}px`,
        }}
      > */}
      <ScrollView
        scrollTop={scrollTop}
        scrollY
        ref={scrollRef}
        className={horizontal ? 'nut-horizontal-box' : 'nut-vertical-box'}
        style={{
          position: 'relative',
          [sizeKey]: `${listTotalSize}px`,
        }}
        //   className={
        //     horizontal
        //       ? 'nut-virtuallist-items nut-horizontal-items'
        //       : 'nut-virtuallist-items nut-vertical-items'
        //   }
        //   ref={itemsRef}
        //   style={{
        //     transform: horizontal
        //       ? `translate3d(${options.startOffset}px,0,0)`
        //       : `translate3d(0,${options.startOffset}px,0)`,
        //   }}
        //   className={b('list__inner')}
        //   ref={listview}
        onScroll={listViewScroll}
      >
        <ul
          className={
            horizontal
              ? 'nut-virtuallist-items nut-horizontal-items'
              : 'nut-virtuallist-items nut-vertical-items'
          }
          ref={itemsRef}
          style={{
            transform: horizontal
              ? `translate3d(${options.startOffset}px,0,0)`
              : `translate3d(0,${options.startOffset}px,0)`,
          }}
        >
          {sourceData
            // .slice(options.overStart, options.endIndex)
            .map((data: any, index: number) => {
              //   console.log(
              //     'map',
              //     sourceData,
              //     sourceData.slice(options.overStart, options.endIndex),
              //     data
              //   )
              const { startIndex, overStart } = options
              const dataIndex = overStart + index
              const styleVal = dataIndex < startIndex ? 'none' : 'block'
              const keyVal = key && data[key] ? data[key] : dataIndex

              return (
                <li
                  ref={dataIndex && dataIndex === 0 ? firstItemRef : null}
                  data-index={`${dataIndex}`}
                  className={`nut-virtuallist-item ${
                    dataIndex % 2 === 0 ? 'even' : 'odd'
                  }`}
                  key={`${keyVal}`}
                  style={{
                    display: styleVal,
                  }}
                >
                  {ItemRender ? (
                    <ItemRenderTpl data={data} index={`${dataIndex}`} />
                  ) : (
                    data
                  )}
                </li>
              )
            })}
        </ul>
      </ScrollView>
      {/* </div> */}
    </div>
  )
}

VirtualList.defaultProps = defaultProps
VirtualList.displayName = 'NutVirtualList'
