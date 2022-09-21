import React, { FunctionComponent, useEffect, useState, useRef } from 'react'

import Icon from '@/packages/icon'
import { IComponent, ComponentDefaults } from '@/utils/typings'

declare const window: any

export interface BackTopProps extends IComponent {
  className?: string
  bottom: number
  right: number
  elId: string
  distance: number
  zIndex: number
  isAnimation: boolean
  duration: number
  children?: HTMLElement | any
  style?: React.CSSProperties
  onClick?: (event: MouseEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  bottom: 20,
  right: 10,
  elId: 'body',
  distance: 200,
  zIndex: 10,
  isAnimation: true,
  duration: 1000,
} as BackTopProps

export const BackTop: FunctionComponent<
  Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    bottom,
    right,
    elId,
    distance,
    zIndex,
    isAnimation,
    className,
    duration,
    style,
    onClick,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const [backTop, SetBackTop] = useState(false)
  const [scrollTop, SetScrollTop] = useState(0)
  let startTime = 0
  const scrollEl: any = useRef<any>(null)
  // 初始化
  useEffect(() => {
    init()

    return () => removeEventListener()
  }, [])

  const init = () => {
    if (elId && document.getElementById(elId)) {
      scrollEl.current = document.getElementById(elId) as HTMLElement | Window
    }
    addEventListener()
    initCancelAniFrame()
  }
  const scrollListener = () => {
    let top: any = null
    if (scrollEl.current instanceof Window) {
      top = scrollEl.current.pageYOffset
      SetScrollTop(top)
    } else {
      top = scrollEl.current.scrollTop
      SetScrollTop(top)
    }
    const showBtn = top >= distance

    SetBackTop(showBtn)
  }

  const scroll = (y = 0) => {
    if (scrollEl.current instanceof Window) {
      window.scrollTo(0, y)
    } else {
      scrollEl.current.scrollTop = y
    }
  }

  const scrollAnimation = () => {
    let cid = requestAniFrame()(function fn() {
      const t = duration - Math.max(0, startTime - +new Date() + duration / 2)
      const y = (t * -scrollTop) / duration + scrollTop
      scroll(y)
      cid = requestAniFrame()(fn)
      if (t === duration || y === 0) {
        window.cancelAnimationFrame(cid)
      }
    })
  }

  const initCancelAniFrame = () => {
    window.cancelAnimationFrame = window.webkitCancelAnimationFrame
  }
  // 防频
  const requestAniFrame = () => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback: any) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  // 监听事件
  function addEventListener() {
    scrollEl.current?.addEventListener('scroll', scrollListener, false)
    scrollEl.current?.addEventListener('resize', scrollListener, false)
  }
  // 移除监听事件
  function removeEventListener() {
    scrollEl.current?.removeEventListener('scroll', scrollListener, false)
    scrollEl.current?.removeEventListener('resize', scrollListener, false)
  }
  // 返回顶部点击事件
  const goTop = (e: any) => {
    onClick && onClick(e)
    const otime = +new Date()
    startTime = otime
    isAnimation && duration > 0 ? scrollAnimation() : scroll()
  }

  const backTopClass = {
    right: `${right}px`,
    bottom: `${bottom}px`,
    zIndex,
  }

  return (
    <div
      className={`nut-backtop ${backTop ? 'show' : ''} ${className || ''}`}
      style={{ ...backTopClass, ...style }}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children || (
        <Icon
          classPrefix={iconClassPrefix}
          fontClassName={iconFontClassName}
          size="19px"
          className="nut-backtop-main"
          name="top"
        />
      )}
    </div>
  )
}

BackTop.defaultProps = defaultProps
BackTop.displayName = 'NutBackTop'
