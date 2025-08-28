import { useEffect, useRef, useState } from 'react'

export interface VirtualScrollOptions {
  // 数据总条数
  total: number
  // 可视区域高度
  viewportHeight: number
  // 每行高度
  itemHeight: number
  // 预加载的行数（可视区域外上下额外渲染的行数）
  overscan?: number
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
}

/**
 * 虚拟滚动Hook
 * @param options 虚拟滚动配置选项
 * @returns 虚拟滚动状态和方法
 */
export function useVirtualScroll(
  options: VirtualScrollOptions
): VirtualScrollResult {
  const { total, viewportHeight, itemHeight, overscan = 5 } = options

  // 计算总高度
  const totalHeight = total * itemHeight

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

  // 计算可视区域内的行索引范围
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    total - 1,
    Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan
  )

  // 计算偏移量
  const offsetY = startIndex * itemHeight

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

  // 手动设置滚动位置的方法
  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const targetIndex = Math.min(Math.max(0, index), totalRef.current - 1) // 确保不会滚动到超出范围的位置
      const targetScrollTop = targetIndex * itemHeight
      containerRef.current.scrollTop = targetScrollTop
      setScrollTop(targetScrollTop) // 立即更新状态，确保渲染不延迟
    }
  }

  return {
    visibleRange: [startIndex, endIndex],
    totalHeight,
    offsetY,
    onScroll,
    containerRef,
    scrollTo,
  }
}
