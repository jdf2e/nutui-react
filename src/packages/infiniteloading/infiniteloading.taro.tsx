import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { ScrollView, View } from '@tarojs/components'
import { createSelectorQuery } from '@tarojs/taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type InfiniteLoadingStatusType =
  | 'load'
  | 'loadMore'
  | 'networkException'
  | 'overtimeException'
export interface InfiniteLoadingProps extends BasicComponent {
  hasMore: boolean
  threshold: number
  target: string
  status: InfiniteLoadingStatusType
  reverse: boolean
  pullRefresh: boolean
  pullingText: ReactNode
  loadingText: ReactNode
  loadMoreText: ReactNode
  networkExceptionText: ReactNode
  overtimeExceptionText: ReactNode
  onRefresh: () => Promise<void>
  onLoadMore: () => Promise<void>
  onScroll: (param: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  hasMore: true,
  threshold: 40,
  status: 'load',
  reverse: false,
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
    status,
    reverse,
    pullRefresh,
    pullingText,
    loadingText,
    loadMoreText,
    networkExceptionText,
    overtimeExceptionText,
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
  const isTouching = useRef(false)
  const y = useRef(0)
  const refreshMaxH = useRef(0)
  const distance = useRef(0)

  const classes = classNames(
    classPrefix,
    className,
    `${reverse ? `${classPrefix}-reverse` : ''}`
  )

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
    scrollTop.current = e.target?.scrollTop
    if (e.target.scrollTop <= 0) {
      // 滚动到最顶部
      e.target.scrollTop = 0
    }
    onScroll && onScroll(e.target.scrollTop)
  }

  const lower = async () => {
    if (!hasMore || isInfiniting) {
      return false
    }
    setIsInfiniting(true)
    await onLoadMore?.()
    infiniteDone()
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

  const touchEnd = async () => {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0
      setTopDisScoll(0)
    } else {
      await onRefresh?.()
      refreshDone()
    }
  }
  const refresh = async () => {
    if (status === 'networkException') {
      setIsInfiniting(true)
      await onLoadMore?.()
      setIsInfiniting(false)
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
      <View
        className={`${classPrefix}-top`}
        ref={refreshTop}
        style={getStyle()}
      >
        <View className={`${classPrefix}-top-tips`}>
          {pullingText || locale.infiniteloading.pullRefreshText}
        </View>
      </View>
      <View className={`${classPrefix}-container`}>{children}</View>
      <View className={`${classPrefix}-bottom`}>
        {isInfiniting ? (
          <View className={`${classPrefix}-bottom-tips`}>
            {loadingText || locale.infiniteloading.loadText}
          </View>
        ) : (
          <>
            {status !== 'load' && (
              <View className={`${classPrefix}-bottom-tips`} onClick={refresh}>
                {props?.[`${status}Text`] ||
                  locale.infiniteloading[`${status}Text`]}
              </View>
            )}
          </>
        )}
      </View>
    </ScrollView>
  )
}

InfiniteLoading.defaultProps = defaultProps
InfiniteLoading.displayName = 'NutInfiniteLoading'
