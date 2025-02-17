import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import { Data, PositionType } from './types'
import { initPositinoCache, updateItemSize } from './utils'
import { getWindowInfo } from '@/utils/get-system-info'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface VirtualListProps extends BasicComponent {
  list: Array<Data>
  containerHeight: number
  itemRender: (data: any, dataIndex: number, index: number) => ReactNode
  itemHeight: number
  margin: number
  itemEqual: boolean
  overscan: number
  onScroll: () => void
  key: string
}

const defaultProps = {
  ...ComponentDefaults,
  list: [] as Array<Data>,
  itemHeight: 66,
  margin: 10,
  itemEqual: true,
  overscan: 2,
} as VirtualListProps

export const VirtualList: FunctionComponent<Partial<VirtualListProps>> = (
  props
) => {
  const {
    list,
    itemRender,
    itemHeight,
    margin,
    itemEqual,
    overscan,
    key,
    onScroll,
    className,
    containerHeight: origContainerHeight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const clientHeight = useMemo(
    () => getWindowInfo().windowHeight - 5 || 667,
    []
  )

  const containerHeight = useMemo(
    () => origContainerHeight ?? clientHeight,
    [origContainerHeight, clientHeight]
  )

  const [startOffset, setStartOffset] = useState(0)
  const start = useRef(0)

  // 虚拟列表容器ref
  const scrollRef = useRef<HTMLDivElement>(null)
  // 虚拟列表显示区域ref
  const itemsRef = useRef<HTMLDivElement>(null)
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
    const pos = initPositinoCache(itemHeight + margin, list.length)
    setPositions(pos)
  }, [itemHeight, list])

  // 可视区域总高度
  const getContainerHeight = () => {
    // 初始首页列表高度
    const initH = (itemHeight + margin) * list.length
    // 未设置containerHeight高度，判断首页高度小于设备高度时，滚动容器高度为首页数据高度，减5为分页触发的偏移量
    return initH < clientHeight
      ? initH + overscan * (itemHeight + margin) - 5
      : Math.min(containerHeight, clientHeight) // Math.min(containerHeight, clientHeight)
  }
  // 可视区域条数
  const visibleCount = () => {
    return Math.ceil(getContainerHeight() / (itemHeight + margin)) + overscan
  }

  const end = () => {
    return start.current + visibleCount()
  }

  const listHeight = () => {
    return list.length * (itemHeight + margin)
  }

  const visibleData = () => {
    return list.slice(start.current, Math.min(end(), list.length))
  }

  const updateTotalSize = useCallback(() => {
    if (!itemsRef.current) return
    const items: HTMLCollection = itemsRef.current.children
    if (!items.length) return
    // 更新缓存
    updateItemSize(positions, items, 'height', margin)
  }, [positions])

  // 滚动监听
  const listScroll = (e: any) => {
    const scrollTop = e.target.scrollTop
    if (scrollTop <= 0) {
      e.target.scrollTop = 0
      return setStartOffset(0)
    }
    if (!itemEqual) {
      updateTotalSize()
    }
    start.current = Math.floor(scrollTop / (itemHeight + margin))
    setStartOffset(scrollTop - (scrollTop % (itemHeight + margin)))
    const endIndex = end()
    // list 变动说明触底
    if (endIndex > list.length - 1) {
      onScroll && onScroll()
    }
  }

  return (
    <View
      className={classNames('nut-virtualList-box', className)}
      {...rest}
      style={{
        height: containerHeight ? `${offSetSize}px` : '',
      }}
    >
      <ScrollView
        scrollY
        bounces={false}
        type="list"
        ref={scrollRef}
        className="nut-virtuallist"
        style={{
          height: `${getContainerHeight()}px`,
        }}
        onScroll={listScroll}
      >
        <View
          className="nut-virtuallist-phantom"
          style={{ height: `${listHeight()}px` }}
        />
        <View
          className="nut-virtuallist-container"
          ref={itemsRef}
          style={{ transform: `translate3d(0, ${startOffset}px, 0)` }}
        >
          {visibleData().map((data: any, index: number) => {
            const dataIndex = start.current + index
            const keyVal = key && data[key] ? data[key] : dataIndex
            return (
              <View
                data-index={`${dataIndex}`}
                className="nut-virtuallist-item"
                key={`${keyVal}`}
                style={{
                  height: `${itemEqual ? `${itemHeight}px` : 'auto'}`,
                }}
              >
                {itemRender ? itemRender(data, dataIndex, index) : data}
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

VirtualList.displayName = 'NutVirtualList'
