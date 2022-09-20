import React, { useState, useEffect, useRef, FunctionComponent } from 'react'
import classNames from 'classnames'
import { ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import bem from '@/utils/bem'
import Icon from '@/packages/icon/index.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface InfiniteloadingProps extends IComponent {
  hasMore: boolean
  threshold: number
  upperThreshold: number
  containerId: string
  useWindow: boolean
  useCapture: boolean
  isOpenRefresh: boolean
  pullIcon: string
  pullTxt: string
  loadIcon: string
  loadTxt: string
  loadMoreTxt: string
  className: string
  style: React.CSSProperties
  refresh: (param: () => void) => void
  loadMore: (param: () => void) => void
  scrollChange: (param: number) => void
}

declare let window: Window & { webkitRequestAnimationFrame: any }

const defaultProps = {
  ...ComponentDefaults,
  hasMore: true,
  threshold: 200,
  upperThreshold: 40,
  containerId: '',
  useWindow: true,
  useCapture: false,
  isOpenRefresh: false,
  pullIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  pullTxt: '松开刷新',
  loadIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  loadTxt: '加载中···',
  loadMoreTxt: '哎呀，这里是底部了啦',
} as InfiniteloadingProps

export const Infiniteloading: FunctionComponent<
  Partial<InfiniteloadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    hasMore,
    threshold,
    upperThreshold,
    containerId,
    useWindow,
    useCapture,
    isOpenRefresh,
    pullIcon,
    pullTxt,
    loadIcon,
    loadTxt,
    loadMoreTxt,
    className,
    refresh,
    loadMore,
    scrollChange,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const [isInfiniting, setIsInfiniting] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)
  const refreshTop = useRef<HTMLDivElement>(null)
  const scrollEl = useRef<Window | HTMLElement | (Node & ParentNode)>(window)
  const scrollHeight = useRef(0)
  const scrollTop = useRef(0)
  const direction = useRef('down')
  const isTouching = useRef(false)
  const refreshMaxH = useRef(0)
  const y = useRef(0)
  const distance = useRef(0)

  const b = bem('infiniteloading')
  const classes = classNames(className, b())

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
      .boundingClientRect((rect) => {
        scrollHeight.current = rect.height
      })
      .exec()
  }

  const getStyle = () => {
    return {
      height: distance.current < 0 ? `0px` : `${distance.current}px`,
      transition: isTouching.current
        ? `height 0s cubic-bezier(0.25,0.1,0.25,1)`
        : `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
    }
  }

  const getParentElement = (el: string) => {
    return Taro.createSelectorQuery().select(
      containerId ? `#${containerId} #${el}` : `#${el}`
    )
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
    scrollChange && scrollChange(e.detail.scrollTop)
  }

  const lower = () => {
    if (direction.current == 'up' || !hasMore || isInfiniting) {
      return false
    }
    setIsInfiniting(true)
    loadMore && loadMore(infiniteDone)
  }

  return (
    <ScrollView
      className={classes}
      scrollY
      id="scroller"
      style={{ height: '100%' }}
      onScroll={scrollAction}
      onScrollToLower={lower}
    >
      <div className="nut-infinite-top" ref={refreshTop} style={getStyle()}>
        <div className="top-box">
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            className="top-img"
            name={pullIcon}
          />
          <span className="top-text">
            {locale.infiniteloading.pullRefreshText || pullTxt}
          </span>
        </div>
      </div>
      <div className="nut-infinite-container">{children}</div>
      <div className="nut-infinite-bottom">
        {isInfiniting ? (
          <div className="bottom-box">
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              className="bottom-img"
              name={loadIcon}
            />
            <div className="bottom-text">
              {locale.infiniteloading.loadText || loadTxt}
            </div>
          </div>
        ) : (
          !hasMore && (
            <div className="tips">
              {locale.infiniteloading.loadMoreText || loadMoreTxt}
            </div>
          )
        )}
      </div>
    </ScrollView>
  )
}

Infiniteloading.defaultProps = defaultProps
Infiniteloading.displayName = 'NutInfiniteloading'
