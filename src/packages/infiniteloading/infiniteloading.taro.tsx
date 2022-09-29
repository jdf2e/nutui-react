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
  upperThreshold: number
  containerId: string
  isOpenRefresh: boolean
  pullIcon: string
  pullTxt: string
  loadIcon: string
  loadTxt: string
  loadMoreTxt: string
  className: string
  style: React.CSSProperties
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
  pullTxt: '松开刷新',
  loadIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  loadTxt: '加载中···',
  loadMoreTxt: '哎呀，这里是底部了啦',
} as InfiniteloadingProps

interface BaseTouchEvent<TouchDetail> {
  /** 触摸事件，当前停留在屏幕中的触摸点信息的数组 */
  touches: Array<TouchDetail>

  /** 触摸事件，当前变化的触摸点信息的数组 */
  changedTouches: Array<TouchDetail>

  preventDefault: any
}
interface ITouchEvent extends BaseTouchEvent<any> {}

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
    pullTxt,
    loadIcon,
    loadTxt,
    loadMoreTxt,
    className,
    onRefresh,
    onLoadMore,
    onScrollChange,
    iconClassPrefix,
    iconFontClassName,
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
      height: topDisScoll < 0 ? `0px` : `${topDisScoll}px`,
      transition: `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
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
      // style={{ height: '100%' }}
      onScroll={scrollAction}
      onScrollToLower={lower}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
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
            {pullTxt || locale.infiniteloading.pullRefreshText}
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
              {loadTxt || locale.infiniteloading.loadText}
            </div>
          </div>
        ) : (
          !hasMore && (
            <div className="tips">
              {loadMoreTxt || locale.infiniteloading.loadMoreText}
            </div>
          )
        )}
      </div>
    </ScrollView>
  )
}

Infiniteloading.defaultProps = defaultProps
Infiniteloading.displayName = 'NutInfiniteloading'
