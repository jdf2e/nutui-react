import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { ScrollView } from '@tarojs/components'
import { createSelectorQuery } from '@tarojs/taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InfiniteLoadingProps extends BasicComponent {
  hasMore: boolean
  threshold: number
  target: string
  pullRefresh: boolean
  pullingText: ReactNode
  loadingText: ReactNode
  loadMoreText: string
  onRefresh: (param: () => void) => void
  onLoadMore: (param: () => void) => void
  onScroll: (param: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  hasMore: true,
  threshold: 40,
  target: '',
  pullRefresh: false,
} as InfiniteLoadingProps

const classPrefix = `nut-infiniteloading`
export const InfiniteLoading: FunctionComponent<
  Partial<InfiniteLoadingProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    hasMore,
    threshold,
    target,
    pullRefresh,
    pullingText,
    loadingText,
    loadMoreText,
    className,
    onRefresh,
    onLoadMore,
    onScroll,
  } = {
    ...defaultProps,
    ...props,
  }
  const [isInfiniting, setIsInfiniting] = useState(false)
  const [topDisScoll, setTopDisScoll] = useState(0)
  const refreshTop = useRef<HTMLDivElement>(null)
  const scrollHeight = useRef(0)
  const scrollTop = useRef(0)
  const direction = useRef('down')
  const isTouching = useRef(false)
  const y = useRef(0)
  const refreshMaxH = useRef(0)
  const distance = useRef(0)

  const classes = classNames(className, classPrefix)

  useEffect(() => {
    refreshMaxH.current = threshold
    setTimeout(() => {
      getScrollHeight()
    }, 200)
  }, [hasMore, isInfiniting])

  /** 获取需要滚动的距离 */
  const getScrollHeight = () => {
    const parentElement = getParentElement('scroller')
    parentElement
      .boundingClientRect((rect: any) => {
        scrollHeight.current = rect?.height ?? 0
      })
      .exec()
  }

  const getStyle = () => {
    return {
      height: topDisScoll < 0 ? `0px` : `${topDisScoll}px`,
      transition: `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
    }
  }

  const getParentElement = (el: string) => {
    return createSelectorQuery().select(target ? `#${target} #${el}` : `#${el}`)
  }

  const infiniteDone = () => {
    setIsInfiniting(false)
  }

  const refreshDone = () => {
    distance.current = 0
    setTopDisScoll(0)
    isTouching.current = false
  }

  const scrollAction = (e: any) => {
    if (e.detail.scrollTop <= 0) {
      // 滚动到最顶部
      e.detail.scrollTop = 0
    } else if (e.detail.scrollTop >= scrollHeight.current) {
      // 滚动到最底部
      e.detail.scrollTop = scrollHeight.current
    }
    if (
      e.detail.scrollTop > scrollTop.current ||
      e.detail.scrollTop >= scrollHeight.current
    ) {
      direction.current = 'down'
    } else {
      direction.current = 'up'
    }
    scrollTop.current = e.detail.scrollTop
    onScroll && onScroll(e.detail.scrollTop)
  }

  const lower = () => {
    if (direction.current === 'up' || !hasMore || isInfiniting) {
      return false
    }
    setIsInfiniting(true)
    onLoadMore && onLoadMore(infiniteDone)
  }

  const touchStart = (event: any) => {
    if (scrollTop.current === 0 && !isTouching.current && pullRefresh) {
      y.current = event.touches[0].pageY
      isTouching.current = true
    }
  }

  const touchMove = (event: any) => {
    distance.current = event.touches[0].pageY - y.current
    if (distance.current > 0 && isTouching.current) {
      event.preventDefault()
      setTopDisScoll(distance.current)
      if (distance.current >= refreshMaxH.current) {
        distance.current = refreshMaxH.current
        setTopDisScoll(refreshMaxH.current)
      }
    } else {
      distance.current = 0
      setTopDisScoll(0)
      isTouching.current = false
    }
  }

  const touchEnd = () => {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0
      setTopDisScoll(0)
    } else {
      onRefresh && onRefresh(refreshDone)
    }
  }

  return (
    <ScrollView
      className={classes}
      scrollY
      id="scroller"
      type="list"
      style={{ height: '100%' }}
      onScroll={scrollAction}
      onScrollToLower={lower}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      <div className="nut-infinite-top" ref={refreshTop} style={getStyle()}>
        <div className="top-box">
          {pullingText || locale.infiniteloading.pullRefreshText}
        </div>
      </div>
      <div className="nut-infinite-container">{children}</div>
      <div className="nut-infinite-bottom">
        {isInfiniting ? (
          <div className="bottom-box">
            {loadingText || locale.infiniteloading.loadText}
          </div>
        ) : (
          !hasMore && (
            <div className="tips">
              {loadMoreText || locale.infiniteloading.loadMoreText}
            </div>
          )
        )}
      </div>
    </ScrollView>
  )
}

InfiniteLoading.defaultProps = defaultProps
InfiniteLoading.displayName = 'NutInfiniteLoading'
