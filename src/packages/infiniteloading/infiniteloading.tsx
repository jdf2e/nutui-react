import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { InfiniteLoadingType } from './types'

export interface InfiniteLoadingProps extends BasicComponent {
  type: InfiniteLoadingType
  hasMore: boolean
  threshold: number
  target: string
  capture: boolean
  pullRefresh: boolean
  pullingText: ReactNode
  loadingText: ReactNode
  loadMoreText: ReactNode
  onRefresh: () => Promise<void>
  onLoadMore: () => Promise<void>
  onScroll: (param: number) => void
}

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
} as InfiniteLoadingProps

const classPrefix = `nut-infiniteloading`
export const InfiniteLoading: FunctionComponent<
  Partial<InfiniteLoadingProps> &
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
    loadingText,
    loadMoreText,
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
  const scroller = useRef<HTMLDivElement>(null)
  const refreshTop = useRef<HTMLDivElement>(null)
  const scrollEl = useRef<Window | HTMLElement | null>(null)
  const isTouching = useRef(false)
  const beforeScrollTop = useRef(0)
  const refreshMaxH = useRef(0)
  const y = useRef(0)
  const distance = useRef(0)

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
  }, [hasMore, isInfiniting, onLoadMore])

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
    if (!isScrollAtBottom() || !hasMore || isInfiniting) {
      return
    }
    setIsInfiniting(true)
    await onLoadMore?.()
    infiniteDone()
  }

  const infiniteDone = () => {
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

  return (
    <div
      className={classes}
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
        {isInfiniting ? (
          <div className="nut-infinite-bottom-tips">
            {loadingText || locale.infiniteloading.loadText}
          </div>
        ) : (
          !hasMore && (
            <div className="nut-infinite-bottom-tips">
              {loadMoreText || locale.infiniteloading.loadMoreText}
            </div>
          )
        )}
      </div>
    </div>
  )
}

InfiniteLoading.displayName = 'NutInfiniteLoading'
