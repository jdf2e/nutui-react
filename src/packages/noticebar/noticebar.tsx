import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  MouseEvent,
  CSSProperties,
} from 'react'

import classNames from 'classnames'
import Icon from '@/packages/icon'
import bem from '@/utils/bem'
import { getRect } from '../../utils/useClientRect'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface NoticeBarProps extends IComponent {
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
  close?: (list?: any) => void
  click?: (item?: any) => void
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
  Partial<NoticeBarProps> & React.HTMLAttributes<HTMLDivElement>
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

  useEffect(() => {
    if (direction === 'vertical') {
      if (children) {
        const arr: string[] | any = []
        React.Children.map(children, (child) => {
          arr.push((child as any).props.children)
        })
        scrollList.current = [].concat(arr)
      } else {
        scrollList.current = [].concat(list)
      }
      setTimeout(() => {
        complexAm ? startRoll() : startRollEasy()
      }, Number(standTime))
    } else {
      initScrollWrap(text)
    }
    return () => {
      // 销毁事件
      clearInterval(timer)
      startRoll()
      startRollEasy()
    }
  }, [])

  const cloneChild = (listItem: string, listIndex: number) => {
    return React.Children.map(children, function (child: any, index: number) {
      if (child && index === listIndex) {
        return React.cloneElement(child, {
          key: listIndex,
          children: listItem,
        })
      }
      return null
    })
  }

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
  }

  const onClickIcon = (event: MouseEvent) => {
    event.stopPropagation()
    SetShowNoticeBar(!closeMode)
    close && close(event)
  }

  const onAnimationEnd = () => {
    SetFirstRound(false)
    setTimeout(() => {
      SetDuration((offsetWidth + wrapWidth) / speed)
      SetAnimationClass('play-infinite')
    }, 0)
  }

  /**
   * 滚动方式一
   */
  const startRollEasy = () => {
    showhorseLamp()
    const timerCurr = setInterval(
      showhorseLamp,
      ~~(height / speed / 4) * 1000 + Number(standTime)
    )
    SetTimer(timerCurr)
  }
  const showhorseLamp = () => {
    SetAnimate(true)
    setTimeout(() => {
      scrollList.current.push(scrollList.current[0])
      scrollList.current.shift()
      SetAnimate(false)
    }, ~~(height / speed / 4) * 1000)
  }

  const startRoll = () => {
    const timerCurr = setInterval(() => {
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
  const go = (item: any) => {
    click && click(item)
  }

  const handleClickIcon = () => {
    close && close(scrollList[0])
  }

  const iconShow = () => {
    if (leftIcon === 'close') {
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
    height: direction === 'vertical' ? `${height}px` : '',
  }

  const duringTime = ~~(height / speed / 4)
  const horseLampStyle = {
    transform: complexAm ? `translateY(${distance}px)` : '',
    transition: animate
      ? `all ${duringTime === 0 ? ~~(height / speed) : duringTime}s`
      : '',
    marginTop: animate ? `-${height}px` : '',
  }

  const b = bem('noticebar')
  const noticebarClass = classNames({
    'nut-noticebar-page': true,
    withicon: closeMode,
    close: closeMode,
    wrapable,
  })

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
      {scrollList.current.length > 0 && direction === 'vertical' ? (
        <div className="nut-noticebar-vertical" style={barStyle}>
          {children ? (
            <div className="horseLamp_list" style={horseLampStyle}>
              {scrollList.current.map((item: string, index: number) => {
                return cloneChild(item, index)
              })}
            </div>
          ) : (
            <ul className="horseLamp_list" style={horseLampStyle}>
              {scrollList.current.map((item: string, index: number) => {
                return (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                    className="horseLamp_list_item"
                    style={{ height }}
                    key={index}
                    onClick={() => {
                      go(item)
                    }}
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          )}
          <div
            className="go"
            onClick={() => {
              handleClickIcon()
            }}
          >
            {rightIcon ||
              (closeMode ? (
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  name="cross"
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
