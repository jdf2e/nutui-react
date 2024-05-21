import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import type { Data, VirtualListState, PositionType } from './types'
import {
  initPositinoCache,
  getListTotalSize,
  binarySearch,
  getEndIndex,
  updateItemSize,
} from './utils'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface VirtualListProps extends BasicComponent {
  list: Array<Data>
  containerHeight: number
  itemRender: (data: any, dataIndex: number, index: number) => ReactNode
  itemHeight: number
  itemEqual: boolean
  direction: 'vertical' | 'horizontal'
  overscan: number
  onScroll: () => void
  key: string
}

const defaultProps = {
  ...ComponentDefaults,
  list: [] as Array<Data>,
  itemHeight: 66,
  itemEqual: true,
  direction: 'vertical',
  overscan: 2,
} as VirtualListProps

export const VirtualList: FunctionComponent<Partial<VirtualListProps>> = (
  props
) => {
  const {
    list,
    itemRender,
    itemEqual,
    itemHeight,
    direction,
    overscan,
    key,
    onScroll,
    className,
    containerHeight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const horizontal = direction === 'horizontal'
  const sizeKey = horizontal ? 'width' : 'height'
  const scrollKey = horizontal ? 'scrollLeft' : 'scrollTop'
  const offsetKey = horizontal ? 'left' : 'top'

  // 虚拟列表容器ref
  const scrollRef = useRef<HTMLDivElement>(null)
  // 虚拟列表显示区域ref
  const itemsRef = useRef<HTMLUListElement>(null)
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
  const [offSetSize, setOffSetSize] = useState<number>(containerHeight || 0)
  const [options, setOptions] = useState<VirtualListState>({
    startOffset: 0, // 可视区域距离顶部的偏移量
    startIndex: 0, // 可视区域开始索引
    overStart: 0,
    endIndex: 10, // 可视区域结束索引
  })

  // 列表位置信息
  useEffect(() => {
    const pos = initPositinoCache(itemHeight, list.length)
    setPositions(pos)
    const totalSize = getListTotalSize(pos, horizontal)
    setListTotalSize(totalSize)
  }, [list, itemHeight, horizontal])
  const getElement = useCallback(() => {
    return scrollRef.current?.parentElement || document.body
  }, [])
  useEffect(() => {
    if (containerHeight) return
    const size = horizontal
      ? getElement().offsetWidth
      : getElement().offsetHeight
    setOffSetSize(size)
  }, [getElement, horizontal, containerHeight])
  useEffect(() => {
    // 初始-计算visibleCount
    if (offSetSize === 0) return
    const count = Math.ceil(offSetSize / itemHeight) + overscan

    setVisibleCount(count)
    setOptions((options) => {
      return { ...options, endIndex: count }
    })
  }, [getElement, horizontal, itemHeight, overscan, offSetSize])

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
      const startIndex = binarySearch(positions, horizontal, scrollSize)
      const overStart = startIndex - overscan > -1 ? startIndex - overscan : 0
      // const offSetSize = horizontal ? getElement().offsetWidth : getElement().offsetHeight
      if (!itemEqual) {
        updateTotalSize()
      }
      const endIndex = getEndIndex({
        list,
        startIndex,
        visibleCount,
        itemEqual,
        positions,
        offSetSize,
        sizeKey,
        overscan,
      })
      const startOffset = positions[startIndex][offsetKey] as number
      setOptions({ startOffset, startIndex, overStart, endIndex })
      // 无限下滑
      if (endIndex > list.length - 1) {
        if (onScroll) {
          onScroll()
        }
      }
    })
  }, [
    positions,
    getElement,
    list,
    visibleCount,
    itemEqual,
    updateTotalSize,
    offsetKey,
    sizeKey,
    scrollKey,
    horizontal,
    overscan,
    offSetSize,
  ])

  useEffect(() => {
    const element = getElement()
    element.addEventListener('scroll', scroll, false)
    return () => {
      element.removeEventListener('scroll', scroll, false)
    }
  }, [getElement, scroll])

  return (
    <div
      className={classNames('nut-virtualList-box', className)}
      {...rest}
      style={{
        [sizeKey]: containerHeight ? `${offSetSize}px` : '',
      }}
    >
      <div
        ref={scrollRef}
        className={classNames({
          'nut-horizontal-box': horizontal,
          'nut-vertical-box': !horizontal,
        })}
        style={{
          position: 'relative',
          [sizeKey]: `${listTotalSize}px`,
        }}
      >
        <ul
          className={classNames('nut-virtuallist-items', {
            'nut-horizontal-items': horizontal,
            'nut-vertical-items': !horizontal,
          })}
          ref={itemsRef}
          style={{
            transform: horizontal
              ? `translate3d(${options.startOffset}px,0,0)`
              : `translate3d(0,${options.startOffset}px,0)`,
          }}
        >
          {list
            .slice(options.overStart, options.endIndex)
            .map((data, index) => {
              const { startIndex, overStart } = options
              const dataIndex = overStart + index
              const styleVal = dataIndex < startIndex ? 'none' : 'block'
              const keyVal = key && data[key] ? data[key] : dataIndex

              return (
                <li
                  data-index={`${dataIndex}`}
                  className="nut-virtuallist-item"
                  key={`${keyVal}`}
                  style={{ display: styleVal }}
                >
                  {itemRender ? itemRender(data, dataIndex, index) : data}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

VirtualList.displayName = 'NutVirtualList'
