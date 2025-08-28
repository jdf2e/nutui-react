import { useEffect, useRef, useState } from 'react'

export interface VirtualScrollOptions {
  // 数据总条数
  total: number
  // 可视区域高度
  viewportHeight: number
  // 每行默认高度（当无法获取实际高度时使用）
  itemHeight: number
  // 预加载的行数（可视区域外上下额外渲染的行数）
  overscan?: number
  // 是否启用动态高度（如果为true，将尝试获取每行的实际高度）
  dynamicHeight?: boolean
}

export interface VirtualScrollResult {
  // 可视区域内的行索引范围
  visibleRange: [number, number]
  // 容器总高度
  totalHeight: number
  // 当前滚动位置的偏移量
  offsetY: number
  // 滚动事件处理函数
  onScroll: (event: React.UIEvent) => void
  // 容器引用
  containerRef: React.RefObject<HTMLDivElement>
  // 滚动到指定索引的方法
  scrollTo: (index: number) => void
  // 更新指定行高度的方法
  updateItemHeight: (index: number, height: number) => void
  // 获取行元素引用的方法
  getRowRef: (index: number) => (element: HTMLElement | null) => void
}

/**
 * 虚拟滚动Hook
 * @param options 虚拟滚动配置选项
 * @returns 虚拟滚动状态和方法
 */
export function useVirtualScroll(
  options: VirtualScrollOptions
): VirtualScrollResult {
  const {
    total,
    viewportHeight,
    itemHeight,
    overscan = 5,
    dynamicHeight = false,
  } = options

  // 高度缓存，用于存储每行的实际高度
  const [heightCache, setHeightCache] = useState<Record<number, number>>({})

  // 行元素引用缓存
  const rowRefs = useRef<Record<number, HTMLElement | null>>({})

  // 计算总高度（考虑动态高度）
  const calculateTotalHeight = () => {
    if (!dynamicHeight) {
      return total * itemHeight
    }

    let height = 0
    for (let i = 0; i < total; i++) {
      height += heightCache[i] || itemHeight
    }
    return height
  }

  const totalHeight = calculateTotalHeight()

  // 容器引用
  const containerRef = useRef<HTMLDivElement>(null)

  // 当前滚动位置
  const [scrollTop, setScrollTop] = useState(0)

  // 使用ref保存当前的滚动位置，以便在滚动事件处理函数中访问最新值
  const scrollTopRef = useRef(scrollTop)
  scrollTopRef.current = scrollTop

  // 使用ref保存当前的数据总量，以便在滚动事件处理函数中访问最新值
  const totalRef = useRef(total)
  totalRef.current = total

  // 使用useEffect监听total变化，确保数据更新时重新计算
  useEffect(() => {
    // 当数据总量变化时，如果当前滚动位置超出了新的总高度，则调整滚动位置
    if (containerRef.current && scrollTop > totalHeight) {
      // 如果当前滚动位置超出了新的总高度，则滚动到顶部
      containerRef.current.scrollTop = 0
      setScrollTop(0)
    } else if (containerRef.current) {
      // 即使滚动位置没有超出范围，也触发一次滚动事件，确保可视区域正确更新
      const scrollEvent = new UIEvent('scroll', { bubbles: true })
      containerRef.current.dispatchEvent(scrollEvent)
    }
  }, [total, totalHeight, scrollTop])

  // 计算可视区域内的行索引范围（考虑动态高度）
  const calculateVisibleRange = () => {
    if (!dynamicHeight) {
      // 固定高度的简单计算
      const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
      const end = Math.min(
        total - 1,
        Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan
      )
      return [start, end] as [number, number]
    }

    // 动态高度的计算
    let currentHeight = 0
    let startIndex = 0
    let endIndex = 0

    // 找到起始索引
    for (let i = 0; i < total; i++) {
      const rowHeight = heightCache[i] || itemHeight
      if (currentHeight + rowHeight > scrollTop) {
        startIndex = Math.max(0, i - overscan)
        break
      }
      currentHeight += rowHeight
    }

    // 找到结束索引
    currentHeight = 0
    for (let i = 0; i < total; i++) {
      const rowHeight = heightCache[i] || itemHeight
      currentHeight += rowHeight
      if (currentHeight > scrollTop + viewportHeight) {
        endIndex = Math.min(total - 1, i + overscan)
        break
      }

      // 如果到达最后一行，设置结束索引为最后一行
      if (i === total - 1) {
        endIndex = total - 1
      }
    }

    return [startIndex, endIndex] as [number, number]
  }

  const visibleRange = calculateVisibleRange()

  // 计算偏移量（考虑动态高度）
  const calculateOffsetY = () => {
    if (!dynamicHeight) {
      return visibleRange[0] * itemHeight
    }

    let offset = 0
    for (let i = 0; i < visibleRange[0]; i++) {
      offset += heightCache[i] || itemHeight
    }
    return offset
  }

  const offsetY = calculateOffsetY()

  // 使用防抖优化滚动事件处理
  const scrollTimerRef = useRef<number | null>(null)

  // 滚动事件处理函数
  const onScroll = (event: React.UIEvent) => {
    console.log('scroll', event)
    const { scrollTop } = event.target as HTMLDivElement

    // 立即更新滚动位置，确保渲染不延迟
    setScrollTop(scrollTop)

    // 清除之前的定时器
    if (scrollTimerRef.current !== null) {
      window.clearTimeout(scrollTimerRef.current)
    }

    // 设置新的定时器，在滚动停止后再次触发更新
    scrollTimerRef.current = window.setTimeout(() => {
      // 确保使用最新的滚动位置
      const currentScrollTop = (event.target as HTMLDivElement).scrollTop
      if (currentScrollTop !== scrollTopRef.current) {
        setScrollTop(currentScrollTop)
      }
      scrollTimerRef.current = null
    }, 100) // 100ms的防抖延迟
  }

  // 手动设置滚动位置的方法（考虑动态高度）
  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const targetIndex = Math.min(Math.max(0, index), totalRef.current - 1) // 确保不会滚动到超出范围的位置

      let targetScrollTop = 0
      if (!dynamicHeight) {
        targetScrollTop = targetIndex * itemHeight
      } else {
        // 计算目标位置的滚动偏移
        for (let i = 0; i < targetIndex; i++) {
          targetScrollTop += heightCache[i] || itemHeight
        }
      }

      containerRef.current.scrollTop = targetScrollTop
      setScrollTop(targetScrollTop) // 立即更新状态，确保渲染不延迟
    }
  }

  // 更新指定行高度的方法
  const updateItemHeight = (index: number, height: number) => {
    if (heightCache[index] !== height) {
      setHeightCache((prev) => ({
        ...prev,
        [index]: height,
      }))
    }
  }

  // 获取行元素引用的方法
  const getRowRef = (index: number) => (element: HTMLElement | null) => {
    if (element && dynamicHeight) {
      rowRefs.current[index] = element

      // 如果高度发生变化，更新高度缓存
      const currentHeight = element.getBoundingClientRect().height
      if (heightCache[index] !== currentHeight) {
        updateItemHeight(index, currentHeight)
      }
    }
  }

  return {
    visibleRange,
    totalHeight,
    offsetY,
    onScroll,
    containerRef,
    scrollTo,
    updateItemHeight,
    getRowRef,
  }
}
