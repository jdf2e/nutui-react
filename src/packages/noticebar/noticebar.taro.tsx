import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import { Close, Notice } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { getRectInMultiPlatform } from '@/utils/taro/get-rect'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import { TaroNoticeBarProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  align: 'left',
  direction: 'horizontal',
  list: [],
  duration: 1000,
  height: 40,
  content: '',
  closeable: false,
  wrap: false,
  leftIcon: <Notice size={16} />,
  rightIcon: null,
  right: null,
  delay: 1,
  scrollable: null,
  speed: 50,
} as TaroNoticeBarProps
export const NoticeBar: FunctionComponent<
  Partial<TaroNoticeBarProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const rtl = useRtl()
  const {
    children,
    className,
    style,
    align,
    direction,
    list,
    duration,
    height,
    content,
    closeable,
    wrap,
    leftIcon,
    rightIcon,
    right,
    delay,
    scrollable,
    speed,
    close,
    click,
    onClose,
    onClick,
    onItemClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-noticebar'
  const wrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [showNoticeBar, SetShowNoticeBar] = useState(true)
  const scrollList: any = useRef([])
  const [wrapWidth, SetWrapWidth] = useState(0)
  const [firstRound, SetFirstRound] = useState(true)
  const [animationDuration, SetAnimationDuration] = useState(0)
  const [offsetWidth, SetOffsetW] = useState(0)
  const [animationClass, SetAnimationClass] = useState('')
  const [animate, SetAnimate] = useState(false)
  const [timer, SetTimer] = useState(0)
  const [isCanScroll, SetIsCanScroll] = useState<null | boolean>(null)
  const isVertical = direction === 'vertical'
  const [rect, setRect] = useState(null as any | null)
  const activeRef = useRef(0)
  const [ready, setReady] = useState(false)
  const container = useRef<any>(null)
  const [isContainerReady, setIsContainerReady] = useState(false)
  const innerRef = useRef<any>(null)
  const swiperRef = useRef<any>({
    moving: false,
    autoplayTimer: null,
    width: 0,
    height: 0,
    offset: 0,
    size: 0,
  })

  const [childOffset, setChildOffset] = useState<any[]>([])
  const [offset, setOffset] = useState(0)
  const { childs, childCount } = useMemo(() => {
    let childCount = 0
    const childs: any = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return null
      childCount++
      return child
    })
    return {
      childs,
      childCount,
    }
  }, [children])
  // 滚动消息的总高度
  let trackSize = childCount * Number(height)
  // 设置最小偏移量（最后一条的偏移位置）
  const minOffset = (() => {
    if (rect) {
      const base = isVertical ? rect.height : rect.width
      return base - Number(height) * childCount
    }
    return 0
  })()

  useEffect(() => {
    if (isVertical) {
      if (children) {
        scrollList.current = [].concat(childs)
      } else {
        scrollList.current = [].concat(list)
        startRollEasy()
      }
    } else {
      initScrollWrap(content)
    }
    return () => {
      // 销毁事件
      clearInterval(timer)
    }
  }, [childs])

  useEffect(() => {
    initScrollWrap(content)
  }, [content])

  useEffect(() => {
    if (list && list.length) {
      scrollList.current = [].concat(list)
    }
  }, [list])

  const initScrollWrap = (value: string) => {
    if (showNoticeBar === false) {
      return
    }
    setTimeout(async () => {
      if (!wrapRef.current || !contentRef.current) {
        return
      }
      const warpRes = await getRectInMultiPlatform(wrapRef.current)
      const contentRes = await getRectInMultiPlatform(contentRef.current)
      const wrapW = warpRes.width
      const offsetW = contentRes.width
      const canScroll =
        align === 'left' && scrollable == null ? offsetW > wrapW : scrollable
      SetIsCanScroll(canScroll)
      if (canScroll) {
        SetWrapWidth(wrapW)
        SetOffsetW(offsetW)
        SetAnimationDuration(offsetW / speed)
        SetAnimationClass('play')
      } else {
        SetAnimationClass('')
      }
    }, 0)
  }
  const handleClick = (event: ITouchEvent) => {
    click && click(event)
    onClick && onClick(event)
  }

  const onClickIcon = (event: ITouchEvent) => {
    event.stopPropagation()
    SetShowNoticeBar(!closeable)
    close && close(event)
    onClose && onClose(event)
  }

  const onAnimationEnd = () => {
    SetFirstRound(false)
    setTimeout(() => {
      SetAnimationDuration((offsetWidth + wrapWidth) / speed)
      SetAnimationClass('play-infinite')
    }, 0)
  }

  const startRollEasy = () => {
    showhorseLamp()
    const time =
      height / speed / 4 < 1
        ? Number((height / speed / 4).toFixed(1)) * 1000
        : ~~(height / speed / 4) * 1000
    const timerCurr = window.setInterval(showhorseLamp, time + Number(duration))
    SetTimer(timerCurr)
  }
  const showhorseLamp = () => {
    SetAnimate(true)
    const time =
      height / speed / 4 < 1
        ? Number((height / speed / 4).toFixed(1)) * 1000
        : ~~(height / speed / 4) * 1000
    setTimeout(() => {
      scrollList.current.push(scrollList.current[0])
      scrollList.current.shift()
      SetAnimate(false)
    }, time)
  }

  // 点击滚动单元
  const handleClickIcon = (event: ITouchEvent) => {
    event.stopPropagation()
    SetShowNoticeBar(!closeable)
    close && close(event)
    onClose && onClose(event)
  }

  const isEllipsis = () => {
    if (isCanScroll == null && align === 'left') {
      return wrap
    }
    return !isCanScroll && !wrap
  }

  const contentStyle = {
    animationDelay: `${firstRound ? delay : 0}s`,
    animationDuration: `${animationDuration}s`,
    transform: `translateX(${firstRound ? 0 : `${rtl ? -wrapWidth : wrapWidth}px`})`,
  }

  const barStyle = {
    height: isVertical ? `${height}px` : '',
  }

  const duringTime =
    height / speed / 4 < 1
      ? Number((height / speed / 4).toFixed(1))
      : ~~(height / speed / 4)
  const noDuring =
    height / speed < 1 ? (height / speed).toFixed(1) : ~~(height / speed)
  const horseLampStyle = {
    transition: animate
      ? `all ${duringTime === 0 ? noDuring : duringTime}s`
      : '',
    marginTop: animate ? `-${height}px` : '',
  }

  // 垂直自定义滚动方式
  const init = (activeIndex = 0) => {
    if (!container?.current) return
    setTimeout(async () => {
      const rects = await getRectInMultiPlatform(container?.current)
      const _active = Math.max(Math.min(childCount - 1, activeIndex), 0)
      const _height = rects?.height
      trackSize = childCount * Number(_height)
      const targetOffset = getOffset(_active)

      activeRef.current = _active
      setRect(rects)
      setOffset(targetOffset)
      setChildOffset(new Array(childCount).fill(0))

      // 关闭动画并立即设置样式
      swiperRef.current.moving = true
      setStyle(targetOffset, rects)

      swiperRef.current.moving = false
      setReady(true)
    }, 0)
  }

  useEffect(() => {
    if (ready) {
      autoplay()
    }
    return () => {
      setReady(false)
    }
  }, [ready])

  useEffect(() => {
    if (isVertical && children && isContainerReady) {
      stopAutoPlay()
      setReady(false)
      init()
    }
  }, [children, isContainerReady])

  // 清除定时器
  const stopAutoPlay = () => {
    clearTimeout(swiperRef.current.autoplayTimer)
    swiperRef.current.moving = false
    swiperRef.current.autoplayTimer = null
  }
  // 定时轮播
  const autoplay = () => {
    if (childCount <= 1) return
    stopAutoPlay()
    swiperRef.current.autoplayTimer = setTimeout(
      () => {
        next()
        autoplay()
      },
      Number(duration) + 100 * speed
    )
  }

  // 切换方法
  const move = ({ pace = 0, offset = 0 }) => {
    if (childCount <= 1) return
    const targetActive = getActive(pace)
    // 父级容器偏移量
    const targetOffset = getOffset(targetActive, offset)

    // 循环滚动，调整开头结尾图片位置
    setChildOffset((prevChildOffset) => {
      const newChildOffset = [...prevChildOffset]

      if (
        Array.isArray(children) &&
        children[0] &&
        targetOffset !== minOffset
      ) {
        const rightBound = targetOffset < minOffset
        newChildOffset[0] = rightBound ? trackSize : 0
      }
      if (
        Array.isArray(children) &&
        children[childCount - 1] &&
        targetOffset !== 0
      ) {
        const leftBound = targetOffset > 0
        newChildOffset[childCount - 1] = leftBound ? -trackSize : 0
      }

      return newChildOffset
    })

    activeRef.current = targetActive
    setOffset(targetOffset)
    setStyle(targetOffset)
  }

  // 下一页
  const next = () => {
    resetPosition()
    requestFrame(() => {
      requestFrame(() => {
        swiperRef.current.moving = false
        move({
          pace: 1,
        })
      })
    })
  }
  const handleItemClick = (event: ITouchEvent, value: any) => {
    onItemClick && onItemClick(event, value)
  }

  const setStyle = (moveOffset = offset, currentRect = rect) => {
    const target = innerRef.current
    if (!target) {
      return
    }
    let _offset = 0
    const containerHeight = currentRect?.height || height
    const val = containerHeight - Number(height)

    _offset =
      moveOffset + Number(activeRef.current === childCount - 1 && val / 2)

    target.style.transitionDuration = `${
      swiperRef.current.moving ? 0 : duration
    }ms`
    target.style.height = `${Number(height) * (childCount + 1)}px`
    target.style.transform = `translate3D(0,${_offset}px,0)`
  }

  // 无缝滚动第一个元素位移控制
  const itemStyle = (index: any) => {
    const style: any = {}
    if (height) {
      style.height = `${height}px`
      style.lineHeight = `${height}px`
    }
    const offset = childOffset[index]
    if (offset) {
      style.transform = `translate3D(0,${offset}px,0)`
    }
    return style
  }

  // 确定当前active 元素
  const getActive = (pace: number) => {
    const currentActive = activeRef.current
    if (pace) {
      const _active = currentActive + pace
      return range(_active, -1, childCount)
    }
    return currentActive
  }
  // 计算位移
  const getOffset = (active: number, offset = 0) => {
    const currentPosition: any = active * Number(height)
    const targetOffset: any = offset - currentPosition
    return targetOffset
  }
  // 浏览器 帧 事件
  const requestFrame = (fn: FrameRequestCallback) => {
    window.requestAnimationFrame.call(window, fn)
  }
  // 取值 方法
  const range = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
  }
  // 重置首尾位置信息
  const resetPosition = () => {
    const currentActive = activeRef.current
    swiperRef.current.moving = true
    if (currentActive <= -1) {
      move({ pace: childCount })
    }
    if (currentActive >= childCount) {
      move({ pace: -childCount })
    }
  }

  const noticebarClass = classNames({
    [`${classPrefix}-box`]: true,
    [`${classPrefix}-box-wrapable`]: wrap,
    [`${classPrefix}-box-${align}`]: true,
  })

  const cls = classNames(classPrefix, className)

  useEffect(() => {
    return () => {
      stopAutoPlay()
    }
  }, [])

  const hasVerticalContent = useMemo(() => {
    if (!isVertical) return false
    if (children) return childs?.length > 0
    return list?.length > 0
  }, [isVertical, childs, list, children])

  const containerRefCallback = useCallback((ref: any) => {
    container.current = ref
    setIsContainerReady(true)
  }, [])

  return (
    <View className={cls} style={style}>
      {showNoticeBar && direction === 'horizontal' ? (
        <View className={noticebarClass} style={barStyle} onClick={handleClick}>
          {leftIcon ? (
            <View className="nut-noticebar-box-left-icon">{leftIcon}</View>
          ) : null}
          <View ref={wrapRef} className="nut-noticebar-box-wrap">
            <View
              ref={contentRef}
              className={`nut-noticebar-box-wrap-content ${animationClass} ${
                isEllipsis() ? 'nut-ellipsis' : ''
              }`}
              style={contentStyle}
              onAnimationEnd={onAnimationEnd}
            >
              {children}
              {content}
            </View>
          </View>
          {right ? (
            <View className="nut-noticebar-box-right">{right}</View>
          ) : null}
          {closeable || rightIcon ? (
            <View
              className="nut-noticebar-box-right-icon"
              onClick={onClickIcon}
            >
              {rightIcon || <Close size={12} />}
            </View>
          ) : null}
        </View>
      ) : null}
      {showNoticeBar && hasVerticalContent && isVertical ? (
        <View
          className="nut-noticebar-vertical"
          style={barStyle}
          ref={containerRefCallback}
          onClick={handleClick}
        >
          {leftIcon ? (
            <View className="nut-noticebar-box-left-icon">{leftIcon}</View>
          ) : null}
          {children ? (
            <View className="nut-noticebar-box-wrap" ref={innerRef}>
              {scrollList.current.map((item: string, index: number) => {
                return (
                  <View
                    style={itemStyle(index)}
                    key={index}
                    onClick={(e) => {
                      handleItemClick(e, item)
                    }}
                  >
                    {item}
                  </View>
                )
              })}
            </View>
          ) : (
            <View
              className="nut-noticebar-box-horseLamp-list"
              style={horseLampStyle}
            >
              {scrollList.current.map((item: string, index: number) => {
                return (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <View
                    className="nut-noticebar-box-horseLamp-list-item"
                    style={{ height }}
                    key={index}
                    onClick={(e) => {
                      handleItemClick(e, item)
                    }}
                  >
                    {item}
                  </View>
                )
              })}
            </View>
          )}
          <View
            className="nut-noticebar-box-right-icon"
            onClick={(e) => {
              handleClickIcon(e)
            }}
          >
            {rightIcon || (closeable ? <Close size={12} /> : null)}
          </View>
        </View>
      ) : null}
    </View>
  )
}

NoticeBar.displayName = 'NutNoticeBar'
