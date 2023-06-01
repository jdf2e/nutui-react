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

export interface InfiniteloadingProps extends BasicComponent {
  hasMore: boolean
  upperThreshold: number
  containerId: string
  isOpenRefresh: boolean
  pullIcon: ReactNode
  pullText: string
  loadIcon: ReactNode
  loadingText: string
  loadMoreText: string
  onRefresh: (param: () => void) => void
  onLoadMore: (param: () => void) => void
  onScrollChange: (param: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  hasMore: true,
  upperThreshold: 40,
  containerId: '',
  isOpenRefresh: false,
  pullIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  pullText: '松开刷新',
  loadIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  loadingText: '加载中···',
  loadMoreText: '哎呀，这里是底部了啦',
} as InfiniteloadingProps

const classPrefix = `nut-infiniteloading`
export const Infiniteloading: FunctionComponent<
  Partial<InfiniteloadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    hasMore,
    upperThreshold,
    containerId,
    isOpenRefresh,
    pullIcon,
    pullText,
    loadIcon,
    loadingText,
    loadMoreText,
    className,
    onRefresh,
    onLoadMore,
    onScrollChange,
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
    refreshMaxH.current = upperThreshold
    setTimeout(() => {
      getScrollHeight()
    }, 200)
  }, [hasMore, isInfiniting])

  /** 获取需要滚动的距离 */
  const getScrollHeight = () => {
    const parentElement = getParentElement('scroller')
    parentElement
      .boundingClientRect((rect: any) => {
        scrollHeight.current = rect.height
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
    return createSelectorQuery().select(
      containerId ? `#${containerId} #${el}` : `#${el}`
    )
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
    onScrollChange && onScrollChange(e.detail.scrollTop)
  }

  const lower = () => {
    if (direction.current == 'up' || !hasMore || isInfiniting) {
      return false
    }
    setIsInfiniting(true)
    onLoadMore && onLoadMore(infiniteDone)
  }

  const touchStart = (event: any) => {
    if (scrollTop.current == 0 && !isTouching.current && isOpenRefresh) {
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
          {pullIcon && <>{pullIcon}</>}
          <span className="top-text">
            {pullText || locale.infiniteloading.pullRefreshText}
          </span>
        </div>
      </div>
      <div className="nut-infinite-container">{children}</div>
      <div className="nut-infinite-bottom">
        {isInfiniting ? (
          <div className="bottom-box">
            {loadIcon && <>{loadIcon}</>}
            <div className="bottom-text">
              {loadingText || locale.infiniteloading.loadText}
            </div>
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

Infiniteloading.defaultProps = defaultProps
Infiniteloading.displayName = 'NutInfiniteloading'
