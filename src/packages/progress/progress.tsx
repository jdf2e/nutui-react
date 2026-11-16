import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider'
import { WebProgressProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
  lazy: false,
  delay: 0,
} as WebProgressProps

export const Progress: FunctionComponent<
  Partial<WebProgressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const rtl = useRtl()
  const {
    className,
    style,
    percent = 0,
    background,
    color,
    strokeWidth,
    showText,
    borderRadius,
    fontSize,
    children,
    animated,
    lazy,
    delay,
    activeMode,
    duration,
    onActiveEnd,
    ariaLabel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-progress'

  const classesInner = classNames({
    [`${classPrefix}-inner`]: true,
    [`${classPrefix}-active`]: animated,
  })

  const stylesOuter: React.CSSProperties = {
    height: strokeWidth && `${strokeWidth}px`,
    borderRadius: borderRadius && parseInt(borderRadius.toString()),
    background,
  }

  const [displayPercent, setDisplayPercent] = useState(percent)

  const stylesInner: React.CSSProperties = {
    width: `${displayPercent}%`,
    background: color || 'var(--nutui-color-primary, #ff0f23)',
    borderRadius: borderRadius && parseInt(borderRadius.toString()),
    transition: `width ${duration || 300}ms ease-in-out`,
  }

  useEffect(() => {
    let timer: any = null
    if (activeMode === 'backwards') {
      setDisplayPercent(0)
      timer = setTimeout(() => {
        setDisplayPercent(percent)
      }, duration || 300)
    } else {
      setDisplayPercent(percent)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [percent, activeMode, duration])

  const [intersecting, setIntersecting] = useState(false)

  const progressRef = useRef<HTMLDivElement | null>(null)
  const observer: any = useRef(null)
  const initObserver = () => {
    const options = {
      threshold: [0],
      rootMargin: '0px',
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        setIntersecting(item.isIntersecting)
      })
    }, options)
    if (progressRef.current) {
      observer.current.observe(progressRef.current)
    }
  }

  const resetObserver = () => {
    observer.current?.disconnect?.()
  }

  useEffect(() => {
    if (lazy) {
      setTimeout(() => {
        if (intersecting) {
          setDisplayPercent(percent)
        } else {
          setDisplayPercent(0)
        }
      }, delay)
    }
  }, [intersecting, lazy, percent, delay])

  useEffect(() => {
    lazy && initObserver()
    let timer: any = null
    if (delay) {
      setDisplayPercent(0)
      timer = setTimeout(() => {
        setDisplayPercent(percent)
      }, delay)
    }

    return () => {
      lazy && resetObserver()
      timer && clearTimeout(timer)
    }
  }, [])

  return (
    <div
      ref={progressRef}
      className={classNames(classPrefix, className)}
      style={style}
      aria-label={ariaLabel}
      {...rest}
    >
      <div className={`${classPrefix}-outer`} style={stylesOuter}>
        <div
          className={classesInner}
          style={stylesInner}
          onTransitionEnd={() => {
            onActiveEnd?.()
          }}
        />
      </div>
      {showText && (
        <div
          className={`${classPrefix}-text`}
          style={{ fontSize: fontSize && parseInt(fontSize.toString()) }}
        >
          {children || `${percent}%`}
        </div>
      )}
    </div>
  )
}

Progress.displayName = 'NutProgress'
