import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Image, ScrollView, View } from '@tarojs/components'
import { createSelectorQuery } from '@tarojs/taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { runWithMinimumDuration } from '@/utils/run-with-minimum-duration'
import { InfiniteLoadingStatus, TaroInfiniteLoadingProps } from '@/types'
import { pxTransform } from '@/utils/taro/px-transform'
import {
  INFINITE_LOADING_DEFAULT_COMPLETE_ICON,
  INFINITE_LOADING_DEFAULT_ICON,
  INFINITE_LOADING_PRIMARY_COMPLETE_ICON,
  INFINITE_LOADING_PRIMARY_ICON,
} from './images'

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  hasMore: true,
  threshold: 200,
  target: '',
  pullRefresh: false,
  minimumLoadingTime: 200,
} as TaroInfiniteLoadingProps

const classPrefix = `nut-infiniteloading`
export const InfiniteLoading: FunctionComponent<
  Partial<TaroInfiniteLoadingProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    type,
    hasMore,
    threshold,
    target,
    pullRefresh,
    pullingText,
    pullUpText,
    loadingText,
    loadMoreText,
    minimumLoadingTime,
    iconStyle,
    renderIcon,
    className,
    onRefresh,
    onLoadMore,
    onScroll,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [isInfiniting, setIsInfiniting] = useState(false)
  const loadingRef = useRef(false)
  const [topDisScoll, setTopDisScoll] = useState(0)
  const refreshTop = useRef<HTMLDivElement>(null)
  const scrollHeight = useRef(0)
  const scrollTop = useRef(0)
  const isTouching = useRef(false)
  const y = useRef(0)
  const refreshMaxH = useRef(0)
  const distance = useRef(0)

  let status: InfiniteLoadingStatus = 'complete'
  if (isInfiniting) {
    status = 'loading'
  } else if (hasMore) {
    status = 'idle'
  }
  const classes = classNames(
    classPrefix,
    `${classPrefix}-taro`,
    className,
    `${classPrefix}-${type}`
  )

  useEffect(() => {
    refreshMaxH.current = 40
    const timer = setTimeout(() => {
      getScrollHeight()
    }, 200)
    return () => clearTimeout(timer)
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
      height: topDisScoll < 0 ? pxTransform(0) : pxTransform(topDisScoll),
      transition: `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
    }
  }

  const getParentElement = (el: string) => {
    return createSelectorQuery().select(target ? `#${target} #${el}` : `#${el}`)
  }

  const infiniteDone = () => {
    loadingRef.current = false
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
    if (!hasMore || loadingRef.current) {
      return false
    }
    loadingRef.current = true
    setIsInfiniting(true)
    try {
      await runWithMinimumDuration(onLoadMore, minimumLoadingTime)
    } finally {
      infiniteDone()
    }
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
      isTouching.current = false
    } else {
      await onRefresh?.()
      refreshDone()
    }
  }

  function getBottomTipsText() {
    if (isInfiniting) {
      return loadingText || locale.infiniteloading.loadText
    }
    if (!hasMore) {
      return loadMoreText || locale.infiniteloading.loadMoreText
    }
    return pullUpText || locale.infiniteloading.pullUpText
  }

  // 内置图标按 type 与 status 取：加载中用 gif 动图，没有更多了用静态图
  function getBuiltInIconSrc() {
    const isPrimary = type === 'primary'
    if (status === 'complete') {
      return isPrimary
        ? INFINITE_LOADING_PRIMARY_COMPLETE_ICON
        : INFINITE_LOADING_DEFAULT_COMPLETE_ICON
    }
    return isPrimary
      ? INFINITE_LOADING_PRIMARY_ICON
      : INFINITE_LOADING_DEFAULT_ICON
  }

  // 使用方可通过 renderIcon 完全接管内置图标
  function getBottomTipsIcon() {
    if (renderIcon) {
      return renderIcon(status)
    }
    return <Image src={getBuiltInIconSrc()} />
  }

  return (
    <ScrollView
      {...rest}
      className={classes}
      data-status={status}
      scrollY
      lowerThreshold={threshold}
      id="scroller"
      type="list"
      style={{ height: '100%' }}
      onScroll={scrollAction}
      onScrollToLower={lower}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      <View className="nut-infinite-top" ref={refreshTop} style={getStyle()}>
        <View className="nut-infinite-top-tips">
          {pullingText || locale.infiniteloading.pullRefreshText}
        </View>
      </View>
      <View className="nut-infinite-container">{children}</View>
      <View className="nut-infinite-bottom">
        <View className="nut-infinite-bottom-tips">
          <View className="nut-infinite-bottom-icon" style={iconStyle}>
            {getBottomTipsIcon()}
          </View>
          <View className="nut-infinite-bottom-text">
            {getBottomTipsText()}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

InfiniteLoading.displayName = 'NutInfiniteLoading'
