import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { useConfig } from '@/packages/configprovider'
import { VirtualListProps, VirtualListState, PositionType } from './type'
import {
  initPositinoCache,
  getListTotalSize,
  binarySearch,
  getEndIndex,
  updateItemSize,
} from './utils'

const defaultProps = {} as VirtualListProps

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
    ...rest
  } = props
  const sizeKey = horizontal ? 'width' : 'height'
  const scrollKey = horizontal ? 'scrollLeft' : 'scrollTop'
  const offsetKey = horizontal ? 'left' : 'top'

  const { locale } = useConfig()
  // 虚拟列表容器ref
  const scrollRef = useRef<HTMLDivElement>(null)
  // 虚拟列表显示区域ref
  const itemsRef = useRef<HTMLUListElement>(null)
  const firstItemRef = useRef<HTMLLIElement>(null)
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
  const [listTotalSize, setListTotalSize] = useState<number>(0)
  // 可视区域条数
  const [visibleCount, setVisibleCount] = useState<number>(0)

  const [options, setOptions] = useState<VirtualListState>({
    startOffset: 0, // 可视区域距离顶部的偏移量
    startIndex: 0, // 可视区域开始索引
    overStart: 0,
    endIndex: 10, // 可视区域结束索引
  })
  const getElement = useCallback(() => {
    return scrollRef.current?.parentElement || document.body
  }, [])
  // 列表位置信息
  useEffect(() => {
    const pos = initPositinoCache(itemSize, sourceData.length)
    setPositions(pos)
    const totalSize = getListTotalSize(pos, horizontal)
    setListTotalSize(totalSize)
  }, [sourceData, itemSize, horizontal])

  useEffect(() => {
    // 初始-计算visibleCount
    const offSetSize = horizontal ? getElement().offsetWidth : getElement().offsetHeight
    const count = Math.ceil(offSetSize / itemSize) + overscan
    setVisibleCount(count)
    setOptions((options) => {
      return { ...options, endIndex: count }
    })
  }, [getElement, horizontal, itemSize, overscan])
  const updateTotalSize = useCallback(() => {
    if (!itemsRef.current) return
    const items: HTMLCollection = itemsRef.current.children
    if (!items.length) return
    // 更新缓存
    updateItemSize(positions, items, sizeKey)
    const totalSize = getListTotalSize(positions, horizontal)
    setListTotalSize(totalSize)
  }, [positions, sizeKey, horizontal])

  const onScroll = useCallback(() => {
    requestAnimationFrame((e) => {
      const scrollSize = getElement()[scrollKey]
      const startIndex = binarySearch(positions, scrollSize, horizontal)
      const overStart = startIndex - overscan > -1 ? startIndex - overscan : 0
      const offSetSize = horizontal ? getElement().offsetWidth : getElement().offsetHeight
      if (!itemEqualSize) {
        updateTotalSize()
      }
      let endIndex = getEndIndex({
        sourceData,
        startIndex,
        visibleCount,
        itemEqualSize,
        positions,
        offSetSize,
        sizeKey,
        overscan,
      })
      endIndex += 1
      const startOffset = positions[startIndex][offsetKey] as number
      setOptions({ startOffset, startIndex, overStart, endIndex })
      //无限下滑
      if (endIndex > sourceData.length - 1) {
        handleScroll && handleScroll()
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
  ])

  useEffect(() => {
    const element = getElement()
    element.addEventListener('scroll', onScroll, false)
    return () => {
      element.removeEventListener('scroll', onScroll, false)
    }
  }, [getElement, onScroll])

  return (
    <div
      {...rest}
      ref={scrollRef}
      style={{
        position: 'relative',
        [sizeKey]: `${listTotalSize}px`,
      }}
    >
      <ul
        className={
          horizontal ? 'nut-virtuallist nut-horizontal-items' : 'nut-virtuallist nut-vertical-items'
        }
        ref={itemsRef}
        style={{
          transform: horizontal
            ? `translate3d(${options.startOffset}px,0,0)`
            : `translate3d(0,${options.startOffset}px,0)`,
        }}
      >
        {sourceData.slice(options.overStart, options.endIndex).map((data, index) => {
          const { startIndex, overStart } = options
          const dataIndex = overStart + index
          const styleVal = dataIndex < startIndex ? 'none' : 'block'
          const keyVal = key && data[key] ? data[key] : dataIndex

          return (
            <li
              ref={dataIndex === 0 ? firstItemRef : null}
              data-index={`${dataIndex}`}
              className={
                dataIndex % 2 === 0 ? 'nut-virtuallist-item even' : 'nut-virtuallist-item odd'
              }
              key={`${keyVal}`}
              style={{ display: styleVal }}
            >
              {ItemRender ? <ItemRender data={data} index={`${dataIndex}`} /> : data}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

VirtualList.defaultProps = defaultProps
VirtualList.displayName = 'NutVirtualList'
