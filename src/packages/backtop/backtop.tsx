import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import type { MouseEvent } from 'react'
import { Top } from '@nutui/icons-react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import requestAniFrame from '@/utils/raf'
import { useRtl } from '@/packages/configprovider'

declare const window: any

export interface BackTopProps extends BasicComponent {
  target: string
  threshold: number
  zIndex: number
  duration: number
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  target: '',
  threshold: 200,
  zIndex: 900,
  duration: 1000,
} as BackTopProps

export const BackTop: FunctionComponent<
  Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const rtl = useRtl()
  const {
    children,
    target,
    threshold,
    zIndex,
    className,
    duration,
    style,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-backtop'
  const [backTop, SetBackTop] = useState(false)
  const [scrollTop, SetScrollTop] = useState(0)
  let startTime = 0
  const scrollEl: any = useRef<any>(null)
  useEffect(() => {
    init()
    return () => removeEventListener()
  }, [])

  const init = () => {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target) as HTMLElement | Window
    } else {
      scrollEl.current = window
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
    const showBtn = top >= threshold
    SetBackTop(showBtn)
  }

  const scroll = (y = 0) => {
    if (scrollEl.current instanceof Window) {
      window.scrollTo(0, y)
    } else {
      scrollEl.current.scrollTop = y
      window.scrollTo(0, y)
    }
  }

  const scrollAnimation = () => {
    let cid = requestAniFrame(function fn() {
      const t = duration - Math.max(0, startTime - +new Date() + duration / 2)
      const y = (t * -scrollTop) / duration + scrollTop
      scroll(y)
      cid = requestAniFrame(fn)
      if (t === duration || y === 0) {
        window.cancelAnimationFrame(cid)
      }
    })
  }

  const initCancelAniFrame = () => {
    window.cancelAnimationFrame = window.webkitCancelAnimationFrame
  }

  function addEventListener() {
    scrollEl.current?.addEventListener('scroll', scrollListener, false)
    scrollEl.current?.addEventListener('resize', scrollListener, false)
  }

  function removeEventListener() {
    scrollEl.current?.removeEventListener('scroll', scrollListener, false)
    scrollEl.current?.removeEventListener('resize', scrollListener, false)
  }

  const goTop = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e)
    const otime = +new Date()
    startTime = otime
    duration > 0 ? scrollAnimation() : scroll()
  }

  const styles =
    Object.keys(style || {}).length !== 0
      ? {
          zIndex,
          ...style,
        }
      : {
          [rtl ? 'left' : 'right']: '10px',
          bottom: '20px',
          zIndex,
        }

  return (
    <div
      className={classNames(
        classPrefix,
        {
          show: backTop,
        },
        className
      )}
      style={styles}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children || <Top width={19} height={19} className="nut-backtop-main" />}
    </div>
  )
}

BackTop.displayName = 'NutBackTop'
