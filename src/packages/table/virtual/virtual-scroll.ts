import { useEffect, useRef, useState } from 'react'
import { useThrottle } from './hooks'

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

  // 当前滚动位置 - 使用ref而不是state来避免不必要的重渲染
  const scrollTopRef = useRef(0)
  // 创建一个状态，但仅用于触发重新渲染，不直接用于计算
  const [scrollTopState, setScrollTopState] = useState(0)

  // 使用ref保存当前的数据总量，以便在滚动事件处理函数中访问最新值
  const totalRef = useRef(total)
  totalRef.current = total

  // 使用useEffect监听total变化，确保数据更新时重新计算
  useEffect(() => {
    // 当数据总量变化时，如果当前滚动位置超出了新的总高度，则调整滚动位置
    if (containerRef.current && scrollTopRef.current > totalHeight) {
      // 如果当前滚动位置超出了新的总高度，则滚动到顶部
      containerRef.current.scrollTop = 0
      scrollTopRef.current = 0
      setScrollTopState(0)
    } else if (containerRef.current) {
      // 即使滚动位置没有超出范围，也触发一次滚动事件，确保可视区域正确更新
      const scrollEvent = new UIEvent('scroll', { bubbles: true })
      containerRef.current.dispatchEvent(scrollEvent)
    }
  }, [total, totalHeight])

  // 计算可视区域内的行索引范围（考虑动态高度）
  const calculateVisibleRange = () => {
    const currentScrollTop = scrollTopRef.current

    if (!dynamicHeight) {
      // 固定高度的简单计算
      const start = Math.max(
        0,
        Math.floor(currentScrollTop / itemHeight) - overscan
      )
      const end = Math.min(
        total - 1,
        Math.ceil((currentScrollTop + viewportHeight) / itemHeight) + overscan
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
      if (currentHeight + rowHeight > currentScrollTop) {
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
      if (currentHeight > currentScrollTop + viewportHeight) {
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

  // 滚动事件处理函数 - 使用节流优化
  const handleScrollUpdate = (currentScrollTop: number) => {
    // 如果滚动位置与当前引用值相同，则不更新
    if (currentScrollTop === scrollTopRef.current) {
      return
    }

    // 立即更新ref值，这不会触发重新渲染
    scrollTopRef.current = currentScrollTop

    // 触发状态更新以重新渲染可视区域
    // 使用函数形式的setState，确保我们总是基于最新状态更新
    setScrollTopState((prev) => {
      // 只有当滚动位置真正变化时才更新状态
      if (Math.abs(prev - scrollTopRef.current) > 1) {
        return scrollTopRef.current
      }
      return prev
    })
  }

  // 使用节流优化滚动事件处理，在快速滚动时降低更新频率
  const throttledScrollHandler = useThrottle(handleScrollUpdate, 16, {
    leading: true,
    trailing: true,
  })

  // 滚动事件处理函数
  const onScroll = (event: React.UIEvent) => {
    // 获取当前滚动位置
    const scrollContainer = event.target as HTMLDivElement
    const currentScrollTop = scrollContainer.scrollTop

    // 使用节流函数处理滚动更新
    throttledScrollHandler(currentScrollTop)
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

      // 设置DOM元素的滚动位置
      containerRef.current.scrollTop = targetScrollTop

      // 更新ref值
      scrollTopRef.current = targetScrollTop

      // 触发状态更新以重新渲染
      setScrollTopState(targetScrollTop)
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
