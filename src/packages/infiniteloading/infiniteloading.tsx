import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { runWithMinimumDuration } from '@/utils/run-with-minimum-duration'
import { InfiniteLoadingStatus, WebInfiniteLoadingProps } from '@/types'
import {
  INFINITE_LOADING_DEFAULT_COMPLETE_ICON,
  INFINITE_LOADING_DEFAULT_ICON,
  INFINITE_LOADING_PRIMARY_COMPLETE_ICON,
  INFINITE_LOADING_PRIMARY_ICON,
} from './images'

declare let window: Window & { webkitRequestAnimationFrame: any } & {
  mozRequestAnimationFrame: any
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  hasMore: true,
  threshold: 200,
  target: '',
  capture: false,
  pullRefresh: false,
  minimumLoadingTime: 200,
} as WebInfiniteLoadingProps

const classPrefix = `nut-infiniteloading`
export const InfiniteLoading: FunctionComponent<
  Partial<WebInfiniteLoadingProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    type,
    hasMore,
    threshold,
    target,
    capture,
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
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [isInfiniting, setIsInfiniting] = useState(false)
  const loadingRef = useRef(false)
  const scroller = useRef<HTMLDivElement>(null)
  const refreshTop = useRef<HTMLDivElement>(null)
  const scrollEl = useRef<Window | HTMLElement | null>(null)
  const isTouching = useRef(false)
  const beforeScrollTop = useRef(0)
  const refreshMaxH = useRef(0)
  const y = useRef(0)
  const distance = useRef(0)

  let status: InfiniteLoadingStatus = 'complete'
  if (isInfiniting) {
    status = 'loading'
  } else if (hasMore) {
    status = 'idle'
  }
  const classes = classNames(classPrefix, className, `${classPrefix}-${type}`)

  useEffect(() => {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target)
    } else {
      scrollEl.current = window
    }
    scrollEl.current?.addEventListener('scroll', handleScroll, capture)

    return () => {
      scrollEl.current?.removeEventListener('scroll', handleScroll, capture)
    }
  }, [hasMore, minimumLoadingTime, onLoadMore])

  useEffect(() => {
    const element = scroller.current as HTMLDivElement
    element.addEventListener('touchmove', touchMove, { passive: false })

    return () => {
      element.removeEventListener('touchmove', touchMove, {
        passive: false,
      } as EventListenerOptions)
    }
  }, [])

  const getStyle = () => {
    return {
      height: distance.current < 0 ? `0px` : `${distance.current}px`,
      transition: isTouching.current
        ? `height 0s cubic-bezier(0.25,0.1,0.25,1)`
        : `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
    }
  }

  const handleScroll = async () => {
    if (!isScrollAtBottom() || !hasMore || loadingRef.current) {
      return
    }
    loadingRef.current = true
    setIsInfiniting(true)
    try {
      await runWithMinimumDuration(onLoadMore, minimumLoadingTime)
    } finally {
      infiniteDone()
    }
  }

  const infiniteDone = () => {
    loadingRef.current = false
    setIsInfiniting(false)
  }

  const getRefreshTop = () => {
    return refreshTop.current as HTMLDivElement
  }

  const refreshDone = () => {
    distance.current = 0
    getRefreshTop().style.height = `${distance.current}px`
    isTouching.current = false
  }

  const touchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (beforeScrollTop.current === 0 && !isTouching.current && pullRefresh) {
      y.current = event.touches[0].pageY
      isTouching.current = true
      const childHeight = (getRefreshTop().firstElementChild as HTMLElement)
        .offsetHeight
      refreshMaxH.current = Math.floor(childHeight * 1 + 10)
    }
  }

  const touchMove = (event: any) => {
    distance.current = event.touches[0].pageY - y.current
    if (distance.current > 0 && isTouching.current) {
      event.preventDefault()
      if (distance.current >= refreshMaxH.current) {
        distance.current = refreshMaxH.current
        getRefreshTop().style.height = `${distance.current}px`
      } else {
        getRefreshTop().style.height = `${distance.current}px`
      }
    } else {
      distance.current = 0
      getRefreshTop().style.height = `${distance.current}px`
      isTouching.current = false
    }
  }

  const touchEnd = async () => {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0
      getRefreshTop().style.height = `${distance.current}px`
      isTouching.current = false
    } else {
      await onRefresh?.()
      refreshDone()
    }
  }

  const getWindowScrollTop = () => {
    return window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop
  }

  const calculateTopPosition = (el: HTMLElement): number => {
    return !el
      ? 0
      : el.offsetTop + calculateTopPosition(el.offsetParent as HTMLElement)
  }

  const isScrollAtBottom = () => {
    let offsetDistance = 0
    let resScrollTop = 0
    let direction = 'down'
    const windowScrollTop = getWindowScrollTop()
    if (!target || !document.getElementById(target)) {
      if (scroller.current) {
        offsetDistance =
          calculateTopPosition(scroller.current) +
          scroller.current.offsetHeight -
          windowScrollTop -
          window.innerHeight
      }
      resScrollTop = windowScrollTop
    } else {
      const { scrollHeight, clientHeight, scrollTop } =
        scrollEl.current as HTMLElement
      offsetDistance = scrollHeight - clientHeight - scrollTop
      resScrollTop = scrollTop
    }
    if (beforeScrollTop.current > resScrollTop) {
      direction = 'up'
    } else {
      direction = 'down'
    }
    beforeScrollTop.current = resScrollTop
    onScroll && onScroll(resScrollTop)
    return offsetDistance <= threshold && direction === 'down'
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
    return <img alt="" src={getBuiltInIconSrc()} />
  }

  return (
    <div
      className={classes}
      data-status={status}
      ref={scroller}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      {...restProps}
    >
      <div className="nut-infinite-top" ref={refreshTop} style={getStyle()}>
        <div className="nut-infinite-top-tips">
          {pullingText || locale.infiniteloading.pullRefreshText}
        </div>
      </div>
      <div className="nut-infinite-container">{children}</div>
      <div className="nut-infinite-bottom">
        <div className="nut-infinite-bottom-tips">
          <div className="nut-infinite-bottom-icon" style={iconStyle}>
            {getBottomTipsIcon()}
          </div>
          <div className="nut-infinite-bottom-text">{getBottomTipsText()}</div>
        </div>
      </div>
    </div>
  )
}

InfiniteLoading.displayName = 'NutInfiniteLoading'
