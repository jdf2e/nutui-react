import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  useMemo,
  ReactNode,
} from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import { Close, Notice } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { NoticeBarAlign } from './types'
import { useRtl } from '@/packages/configprovider/index.taro'

export interface NoticeBarProps extends BasicComponent {
  align: NoticeBarAlign
  direction: string
  list: any
  duration: number
  height: number
  content: string
  closeable: boolean
  wrap: boolean
  leftIcon: ReactNode
  rightIcon: ReactNode
  right: ReactNode
  delay: string | number
  scrollable: boolean | null
  speed: number
  close?: (event: any) => void
  click?: (event: any) => void
  onClose?: (event: any) => void
  onClick?: (event: any) => void
  onItemClick?: (event: any, value: any) => void
}

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
} as NoticeBarProps
export const NoticeBar: FunctionComponent<
  Partial<NoticeBarProps> &
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
  let active = 0
  const [ready, setReady] = useState(false)
  const container = useRef<any>(null)
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
  }, [])

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
      const warpRes = await getRectByTaro(wrapRef.current)
      const contentRes = await getRectByTaro(contentRef.current)
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
  const init = (active = +0) => {
    if (!container?.current) return
    setTimeout(async () => {
      const rects = await getRectByTaro(container?.current)
      const _active = Math.max(Math.min(childCount - 1, active), 0)
      const _height = rects?.height
      trackSize = childCount * Number(_height)
      const targetOffset = getOffset(_active)
      swiperRef.current.moving = true
      if (ready) {
        swiperRef.current.moving = false
      }
      active = _active
      setRect(rects)
      setOffset(targetOffset)
      setReady(true)
    }, 0)
  }

  useEffect(() => {
    if (ready) {
      stopAutoPlay()
      autoplay()
    }
    return () => {
      setReady(false)
    }
  }, [ready])

  useEffect(() => {
    if (isVertical && children) {
      init()
      stopAutoPlay()
      autoplay()
    }
  }, [children, container?.current])

  // 清除定时器
  const stopAutoPlay = () => {
    clearTimeout(swiperRef.current.autoplayTimer)
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
    // 如果循环，调整开头结尾图片位置
    if (Array.isArray(children) && children[0] && targetOffset !== minOffset) {
      const rightBound = targetOffset < minOffset
      childOffset[0] = rightBound ? trackSize : 0
    }
    if (
      Array.isArray(children) &&
      children[childCount - 1] &&
      targetOffset !== 0
    ) {
      const leftBound = targetOffset > 0
      childOffset[childCount - 1] = leftBound ? -trackSize : 0
    }
    setChildOffset(childOffset)
    active = targetActive
    setOffset(targetOffset)
    getStyle(targetOffset)
  }

  // 下一页
  const next = () => {
    resettPosition()
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

  const getStyle = (moveOffset = offset) => {
    const target = innerRef.current
    if (!target) {
      return
    }
    let _offset = 0
    // 容器高度-元素高度
    const val = (rect?.height || 0) - height
    _offset = moveOffset + Number(active === childCount - 1 && val / 2)

    target.style.transitionDuration = `${
      swiperRef.current.moving ? 0 : duration
    }ms`
    target.style.height = `${Number(height) * childCount}px`
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
    if (pace) {
      const _active = active + pace
      return range(_active, -1, childCount)
    }
    return active
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
  const resettPosition = () => {
    swiperRef.current.moving = true
    if (active <= -1) {
      move({ pace: childCount })
    }
    if (active >= childCount) {
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
      {showNoticeBar && scrollList.current.length > 0 && isVertical ? (
        <View
          className="nut-noticebar-vertical"
          style={barStyle}
          ref={container}
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
