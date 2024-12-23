import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { Top } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import requestAniFrame, { cancelRaf } from '@/utils/raf'
import HoverButton, { HoverButtonProps } from '@/packages/hoverbutton/index'

export interface BackTopProps extends HoverButtonProps {
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
  const {
    children,
    target,
    threshold,
    zIndex,
    className,
    duration,
    icon,
    style,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-backtop'
  const [backTop, setBackTop] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const startTime = useRef<number>(0)
  const cls = classNames(
    classPrefix,
    {
      [`${classPrefix}-show`]: backTop,
    },
    className
  )
  const scrollEl: any = useRef<any>(null)

  const scrollListener = useCallback(() => {
    let top: any = null
    if (scrollEl.current instanceof Window) {
      top = scrollEl.current.scrollY
    } else {
      top = scrollEl.current.scrollTop
    }
    setScrollTop(top)
    setBackTop(top >= threshold)
  }, [threshold])

  const init = useCallback(() => {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target) as HTMLElement | Window
    } else {
      scrollEl.current = window
    }
    scrollEl.current?.addEventListener('scroll', scrollListener, false)
    scrollEl.current?.addEventListener('resize', scrollListener, false)
  }, [scrollListener, target])

  useEffect(() => {
    init()
    return () => {
      scrollEl.current?.removeEventListener('scroll', scrollListener, false)
      scrollEl.current?.removeEventListener('resize', scrollListener, false)
    }
  }, [init, scrollListener])

  const scroll = useCallback((y = 0) => {
    if (scrollEl.current instanceof Window) {
      window.scrollTo(0, y)
    } else {
      scrollEl.current.scrollTop = y
      window.scrollTo(0, y)
    }
  }, [])

  const scrollAnimation = useCallback(() => {
    let cid = requestAniFrame(function fn() {
      const t =
        duration - Math.max(0, startTime.current - +new Date() + duration / 2)
      const y = (t * -scrollTop) / duration + scrollTop
      scroll(y)
      cid = requestAniFrame(fn)
      if (t === duration || y === 0) {
        cancelRaf(cid)
      }
    })
  }, [duration, scroll, scrollTop, startTime])

  const goTop = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      onClick?.(e)
      const otime = +new Date()
      startTime.current = otime
      duration > 0 ? scrollAnimation() : scroll()
    },
    [duration, onClick, scroll, scrollAnimation]
  )

  return (
    <HoverButton
      className={cls}
      style={{ zIndex, ...style }}
      icon={!children && (icon || <Top />)}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children && (
        <div
          className="nut-hoverbutton-item-container"
          onClick={(e) => {
            goTop(e)
          }}
        >
          {children}
        </div>
      )}
    </HoverButton>
  )
}

BackTop.displayName = 'NutBackTop'
