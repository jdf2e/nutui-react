import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  MouseEvent,
  CSSProperties,
  useMemo,
} from 'react'

import classNames from 'classnames'
import Icon from '@/packages/icon'
import bem from '@/utils/bem'
import { getRect } from '../../utils/useClientRect'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface NoticeBarProps extends BasicComponent {
  // 滚动方向  across 横向 vertical 纵向
  direction: string
  className?: string
  style?: CSSProperties
  list: any
  standTime: number
  complexAm: boolean
  height: number
  text: string
  closeMode: boolean
  wrapable: boolean
  leftIcon: string
  color: string
  background: string
  delay: string | number
  scrollable: boolean | null
  speed: number
  rightIcon?: HTMLElement | any
  close?: (event: any) => void
  click?: (event: any) => void
  onClose?: (event: any) => void
  onClick?: (event: any) => void
  onClickItem?: (event: any, value: any) => void
}

const defaultProps = {
  ...ComponentDefaults,
  // 滚动方向  across 横向 vertical 纵向
  direction: 'across',
  list: [],
  standTime: 1000,
  complexAm: false,
  height: 40,
  text: '',
  closeMode: false,
  wrapable: false,
  leftIcon: '',
  color: '',
  background: '',
  delay: 1,
  scrollable: null,
  speed: 50,
} as NoticeBarProps
export const NoticeBar: FunctionComponent<
  Partial<NoticeBarProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    className,
    style,
    direction,
    list,
    standTime,
    complexAm,
    height,
    text,
    closeMode,
    wrapable,
    leftIcon,
    color,
    background,
    delay,
    scrollable,
    speed,
    rightIcon,
    close,
    click,
    onClose,
    onClick,
    onClickItem,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }

  const wrap = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [showNoticeBar, SetShowNoticeBar] = useState(true)
  const scrollList: any = useRef([])
  const [wrapWidth, SetWrapWidth] = useState(0)
  const [firstRound, SetFirstRound] = useState(true)
  const [duration, SetDuration] = useState(0)
  const [offsetWidth, SetOffsetW] = useState(0)
  const [animationClass, SetAnimationClass] = useState('')
  const [animate, SetAnimate] = useState(false)
  const [distance, SetDistance] = useState(0)
  const [timer, SetTimer] = useState(0)
  const [isCanScroll, SetIsCanScroll] = useState<null | boolean>(null)

  const isVertical = direction === 'vertical'
  const [rect, setRect] = useState(null as any | null)
  let active = 0
  const [vLeftIcon, setLeftIcon] = useState('')
  const [ready, setReady] = useState(false)
  const container = useRef<any>(null)
  const innerRef = useRef<any>(null)
  const _swiper = useRef<any>({
    moving: false,
    autoplayTimer: null,
    width: 0,
    height: 0,
    offset: 0,
    size: 0,
  })

  const [childOffset, setChildOffset] = useState<any[]>([])
  const [offset, setOffset] = useState(0)
  // 获取自定义slot数据内容和总条数
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
      // 兼容老版本无左侧Icon问题
      if (leftIcon !== '') {
        setLeftIcon(leftIcon)
      } else {
        setLeftIcon('close')
      }
      if (children) {
        scrollList.current = [].concat(childs)
      } else {
        scrollList.current = [].concat(list)
        startRollEasy()
      }

      complexAm && startRoll()
    } else {
      initScrollWrap(text)
    }
    return () => {
      // 销毁事件
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    initScrollWrap(text)
  }, [text])

  useEffect(() => {
    if (list && list.length) {
      scrollList.current = [].concat(list)
    }
  }, [list])

  const initScrollWrap = (value: string) => {
    if (showNoticeBar === false) {
      return
    }
    setTimeout(() => {
      if (!wrap.current || !content.current) {
        return
      }
      const wrapW = getRect(wrap.current).width
      const offsetW = getRect(content.current).width
      const canScroll = scrollable == null ? offsetW > wrapW : scrollable
      SetIsCanScroll(canScroll)
      if (canScroll) {
        SetWrapWidth(wrapW)
        SetOffsetW(offsetW)
        SetDuration(offsetW / speed)
        SetAnimationClass('play')
      } else {
        SetAnimationClass('')
      }
    }, 0)
  }
  const handleClick = (event: MouseEvent) => {
    click && click(event)
    onClick && onClick(event)
  }

  const onClickIcon = (event: MouseEvent) => {
    event.stopPropagation()
    SetShowNoticeBar(!closeMode)
    close && close(event)
    onClose && onClose(event)
  }

  const onAnimationEnd = () => {
    SetFirstRound(false)
    setTimeout(() => {
      SetDuration((offsetWidth + wrapWidth) / speed)
      SetAnimationClass('play-infinite')
    }, 0)
  }
  // 滚动时间间隔
  const time =
    height / speed / 4 < 1
      ? Number((height / speed / 4).toFixed(1)) * 1000
      : ~~(height / speed / 4) * 1000
  /**
   * 滚动方式一，普通垂直滚动
   */
  const startRollEasy = () => {
    showhorseLamp()

    const timerCurr = window.setInterval(
      showhorseLamp,
      time + Number(standTime)
    )
    SetTimer(timerCurr)
  }
  const showhorseLamp = () => {
    SetAnimate(true)

    setTimeout(() => {
      scrollList.current.push(scrollList.current[0])
      scrollList.current.shift()
      SetAnimate(false)
    }, time)
  }

  /**
   * 复杂滚动方式
   */

  const startRoll = () => {
    const timerCurr = window.setInterval(() => {
      const chunk = 100
      for (let i = 0; i < chunk; i++) {
        scroll(i, !(i < chunk - 1))
      }
    }, Number(standTime) + 100 * speed)
    SetTimer(timerCurr)
  }
  const scroll = (n: number, last: boolean) => {
    SetAnimate(true)
    setTimeout(() => {
      let long = distance
      long -= height / 100
      SetDistance(long)
      if (last) {
        scrollList.current.push(scrollList.current[0])
        scrollList.current.shift()
        SetDistance(0)
        SetAnimate(false)
      }
    }, n * speed)
  }
  /**
   * 点击滚动单元
   */

  const handleClickIcon = (event: MouseEvent) => {
    event.stopPropagation()
    SetShowNoticeBar(!closeMode)
    close && close(event)
    onClose && onClose(event)
  }

  const iconShow = () => {
    if (leftIcon === 'close' || vLeftIcon === 'close') {
      return false
    }
    return true
  }
  const iconBg = () => {
    let iconBg = ''
    if (leftIcon) {
      iconBg = leftIcon
    }
    return iconBg
  }

  const isEllipsis = () => {
    if (isCanScroll == null) {
      return wrapable
    }
    return !isCanScroll && !wrapable
  }

  const contentStyle = {
    animationDelay: `${firstRound ? delay : 0}s`,
    animationDuration: `${duration}s`,
    transform: `translateX(${firstRound ? 0 : `${wrapWidth}px`})`,
  }

  const barStyle = {
    color,
    background,
    height: isVertical ? `${height}px` : '',
  }

  const duringTime =
    height / speed / 4 < 1
      ? Number((height / speed / 4).toFixed(1))
      : ~~(height / speed / 4)

  const noDuring =
    height / speed < 1 ? (height / speed).toFixed(1) : ~~(height / speed)

  const horseLampStyle = {
    transform: complexAm ? `translateY(${distance}px)` : '',
    transition: animate
      ? `all ${duringTime === 0 ? noDuring : duringTime}s`
      : '',
    marginTop: animate ? `-${height}px` : '',
  }

  /**
   * 垂直自定义滚动方式
   */

  const init = (active = +0) => {
    const rects = getRect(container?.current)
    const _active = Math.max(Math.min(childCount - 1, active), 0)
    const _height = rects.height
    trackSize = childCount * Number(_height)
    const targetOffset = getOffset(_active)
    _swiper.current.moving = true
    if (ready) {
      _swiper.current.moving = false
    }
    active = _active
    setRect(rects)
    setOffset(targetOffset)
    setReady(true)
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
    clearTimeout(_swiper.current.autoplayTimer)
    _swiper.current.autoplayTimer = null
  }
  // 定时轮播
  const autoplay = () => {
    if (childCount <= 1) return
    stopAutoPlay()
    _swiper.current.autoplayTimer = setTimeout(() => {
      next()
      autoplay()
    }, Number(standTime) + 100 * speed)
  }

  // 切换方法
  const move = ({ pace = 0, offset = 0 }) => {
    if (childCount <= 1) return
    const targetActive = getActive(pace)
    // 父级容器偏移量
    const targetOffset = getOffset(targetActive, offset)

    // 循环滚动，调整开头结尾图片位置
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
        _swiper.current.moving = false
        move({
          pace: 1,
        })
      })
    })
  }
  const handleItemClick = (event: MouseEvent, value: any) => {
    onClickItem && onClickItem(event, value)
  }

  const getStyle = (moveOffset = offset) => {
    const target = innerRef.current

    let _offset = 0
    // 容器高度-元素高度
    const val = rect.height - height

    _offset = moveOffset + Number(active === childCount - 1 && val / 2)

    target.style.transitionDuration = `${
      _swiper.current.moving ? 0 : standTime
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
    _swiper.current.moving = true
    if (active <= -1) {
      move({ pace: childCount })
    }
    if (active >= childCount) {
      move({ pace: -childCount })
    }
  }

  const b = bem('noticebar')
  const noticebarClass = classNames({
    'nut-noticebar-page': true,
    withicon: closeMode,
    close: closeMode,
    wrapable,
  })

  useEffect(() => {
    return () => {
      stopAutoPlay()
    }
  }, [])

  return (
    <div className={`${b()} ${className || ''}`} style={style}>
      {showNoticeBar && direction === 'across' ? (
        <div className={noticebarClass} style={barStyle} onClick={handleClick}>
          {iconShow() ? (
            <div
              className="left-icon"
              style={{ backgroundImage: `url(${iconBg() || ''})` }}
            >
              {!iconBg() ? (
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  name="notice"
                  size="16"
                  color={color}
                />
              ) : null}
            </div>
          ) : null}
          <div ref={wrap} className="wrap">
            <div
              ref={content}
              className={`content ${animationClass} ${
                isEllipsis() ? 'nut-ellipsis' : ''
              }`}
              style={contentStyle}
              onAnimationEnd={onAnimationEnd}
            >
              {children}
              {text}
            </div>
          </div>
          {closeMode || rightIcon ? (
            <div className="right-icon" onClick={onClickIcon}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={rightIcon || 'close'}
                color={color}
              />
            </div>
          ) : null}
        </div>
      ) : null}
      {showNoticeBar && scrollList.current.length > 0 && isVertical ? (
        <div
          className="nut-noticebar-vertical"
          style={barStyle}
          ref={container}
          onClick={handleClick}
        >
          {iconShow() ? (
            <div
              className="left-icon"
              style={{ backgroundImage: `url(${iconBg() || ''})` }}
            >
              {!iconBg() ? (
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  name="notice"
                  size="16"
                  color={color}
                />
              ) : null}
            </div>
          ) : null}
          {children ? (
            <>
              <div className="nut-noticebar__inner" ref={innerRef}>
                {scrollList.current.map((item: string, index: number) => {
                  return (
                    <div
                      className="scroll-inner "
                      style={itemStyle(index)}
                      key={index}
                      onClick={(e) => {
                        handleItemClick(e, item)
                      }}
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="horseLamp_list" style={horseLampStyle}>
              {scrollList.current.map((item: string, index: number) => {
                return (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <div
                    className="horseLamp_list_item"
                    style={{ height }}
                    key={index}
                    onClick={(e) => {
                      handleItemClick(e, item)
                    }}
                  >
                    {item}
                  </div>
                )
              })}
            </div>
          )}
          <div
            className="go"
            onClick={(e) => {
              handleClickIcon(e)
            }}
          >
            {rightIcon ||
              (closeMode ? (
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  name={rightIcon || 'close'}
                  color={color}
                  size="11px"
                />
              ) : null)}
          </div>
        </div>
      ) : null}
    </div>
  )
}

NoticeBar.defaultProps = defaultProps
NoticeBar.displayName = 'NutNoticeBar'
