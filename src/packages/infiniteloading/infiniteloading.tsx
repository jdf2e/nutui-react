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

export interface InfiniteLoadingProps extends BasicComponent {
  hasMore: boolean
  threshold: number
  target: string
  capture: boolean
  pullRefresh: boolean
  pullingText: ReactNode
  loadingText: ReactNode
  loadMoreText: ReactNode
  onRefresh: (param: () => void) => void
  onLoadMore: (param: () => void) => void
  onScroll: (param: number) => void
}

declare let window: Window & { webkitRequestAnimationFrame: any } & {
  mozRequestAnimationFrame: any
}

const defaultProps = {
  ...ComponentDefaults,
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
  const scrollEl = useRef<Window | HTMLElement | (Node & ParentNode)>(window)
  const isTouching = useRef(false)
  const beforeScrollTop = useRef(0)
  const refreshMaxH = useRef(0)
  const y = useRef(0)
  const distance = useRef(0)

  const classes = classNames(className, classPrefix)

  useEffect(() => {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target) as HTMLElement | Window
    } else {
      scrollEl.current = window
    }
    scrollEl.current.addEventListener('scroll', handleScroll, capture)

    return () => {
      scrollEl.current.removeEventListener('scroll', handleScroll, capture)
    }
  }, [hasMore, isInfiniting])

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

  const handleScroll = () => {
    requestAniFrame()(() => {
      if (!isScrollAtBottom() || !hasMore || isInfiniting) {
        return false
      }
      setIsInfiniting(true)
      onLoadMore && onLoadMore(infiniteDone)
      return true
    })
  }

  const infiniteDone = () => {
    setIsInfiniting(false)
  }

  const refreshDone = () => {
    distance.current = 0
    ;(
      refreshTop.current as HTMLDivElement
    ).style.height = `${distance.current}px`
    isTouching.current = false
  }

  const touchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (beforeScrollTop.current === 0 && !isTouching.current && pullRefresh) {
      y.current = event.touches[0].pageY
      isTouching.current = true
      const childHeight = (
        (refreshTop.current as HTMLDivElement).firstElementChild as HTMLElement
      ).offsetHeight
      refreshMaxH.current = Math.floor(childHeight * 1 + 10)
    }
  }

  const touchMove = (event: any) => {
    distance.current = event.touches[0].pageY - y.current
    if (distance.current > 0 && isTouching.current) {
      event.preventDefault()
      if (distance.current >= refreshMaxH.current) {
        distance.current = refreshMaxH.current
        ;(
          refreshTop.current as HTMLDivElement
        ).style.height = `${distance.current}px`
      } else {
        ;(
          refreshTop.current as HTMLDivElement
        ).style.height = `${distance.current}px`
      }
    } else {
      distance.current = 0
      ;(
        refreshTop.current as HTMLDivElement
      ).style.height = `${distance.current}px`
      isTouching.current = false
    }
  }

  const touchEnd = () => {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0
      ;(
        refreshTop.current as HTMLDivElement
      ).style.height = `${distance.current}px`
    } else {
      onRefresh && onRefresh(refreshDone)
    }
  }

  const requestAniFrame = () => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function fn(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
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
        <div className="top-box">
          <i className="top-box-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="26"
              viewBox="0 0 36 26"
              fill="none"
            >
              <path
                d="M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z"
                fill="#8C8C8C"
              />
            </svg>
          </i>
          <div>{pullingText || locale.infiniteloading.pullRefreshText}</div>
        </div>
      </div>
      <div className="nut-infinite-container">{children}</div>
      <div className="nut-infinite-bottom">
        {isInfiniting ? (
          <div className="bottom-box">
            <i className="bottom-box-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="2" cy="12" r="2" fill="#8C8C8C" />
                <circle cx="12" cy="12" r="2" fill="#8C8C8C" />
                <circle cx="22" cy="12" r="2" fill="#8C8C8C" />
              </svg>
            </i>
            {loadingText || locale.infiniteloading.loadText}
          </div>
        ) : (
          !hasMore && (
            <div className="bottom-box">
              <i className="bottom-box-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_202_858)">
                    <path
                      d="M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z"
                      fill="#8C8C8C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_202_858">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              {loadMoreText || locale.infiniteloading.loadMoreText}
            </div>
          )
        )}
      </div>
    </div>
  )
}

InfiniteLoading.defaultProps = defaultProps
InfiniteLoading.displayName = 'NutInfiniteLoading'
