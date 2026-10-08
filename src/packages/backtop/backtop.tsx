import type { MouseEvent } from 'react'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { Top } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import requestAniFrame, { cancelRaf } from '@/utils/raf'
import { WebBackTopProps } from '@/types'
import { UI_BOTTOM_DISTANCE } from '@/utils/constants'

const defaultProps = {
  ...ComponentDefaults,
  target: '',
  threshold: 200,
  zIndex: 900,
  duration: 1000,
} as WebBackTopProps

export const BackTop: FunctionComponent<
  Partial<WebBackTopProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
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
    tabbarHeight,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-backtop'
  const [backTop, setBackTop] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const startTime = useRef<number>(0)
  const rafId = useRef<number | null>(null)
  const cls = classNames(
    classPrefix,
    {
      [`${classPrefix}-show`]: backTop,
    },
    className
  )
  const scrollEl = useRef<HTMLElement | Window | null>(null)

  const scrollListener = useCallback(() => {
    let top = 0
    if (scrollEl.current instanceof Window) {
      top = scrollEl.current.scrollY
    } else if (scrollEl.current) {
      top = scrollEl.current.scrollTop
    }
    setScrollTop(top)
    setBackTop(top >= threshold)
  }, [threshold])

  const init = useCallback(() => {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target)
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
      if (rafId.current) {
        cancelRaf(rafId.current)
        rafId.current = null
      }
    }
  }, [init, scrollListener])

  const scroll = useCallback((y = 0) => {
    if (scrollEl.current instanceof Window) {
      window.scrollTo(0, y)
    } else if (scrollEl.current) {
      scrollEl.current.scrollTop = y
      window.scrollTo(0, y)
    }
  }, [])

  const scrollAnimation = useCallback(() => {
    if (rafId.current) {
      cancelRaf(rafId.current)
      rafId.current = null
    }
    const initialScrollTop = scrollTop
    const fn = () => {
      const elapsed = +new Date() - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress
      const y = initialScrollTop * (1 - ease)
      scroll(y)
      if (progress < 1 && y > 0) {
        rafId.current = requestAniFrame(fn)
      } else {
        scroll(0)
        rafId.current = null
      }
    }
    rafId.current = requestAniFrame(fn)
  }, [duration, scroll, scrollTop])

  const goTop = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      onClick?.(e)
      const otime = +new Date()
      startTime.current = otime
      duration > 0 ? scrollAnimation() : scroll()
    },
    [duration, onClick, scroll, scrollAnimation]
  )

  const content =
    children || (icon ?? <Top className={`${classPrefix}-icon`} />)

  const baseStyle: React.CSSProperties = {
    zIndex,
    ...style,
  }

  if (tabbarHeight) {
    const bottom = tabbarHeight + UI_BOTTOM_DISTANCE
    baseStyle.bottom = `${bottom}px`
  }

  return (
    <div className={cls} style={baseStyle} onClick={goTop} {...rest}>
      {content}
    </div>
  )
}

BackTop.displayName = 'NutBackTop'
