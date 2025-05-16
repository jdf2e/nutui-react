import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider'
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
    percent,
    background,
    color,
    strokeWidth,
    showText,
    animated,
    children,
    lazy,
    delay,
    borderRadius,
    fontSize,
    activeMode,
    duration,
    ariaLabel,
    onActiveEnd,
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
    height: `${strokeWidth}px`,
    borderRadius: borderRadius && parseInt(borderRadius.toString()),
    background,
  }

  const [displayPercent, setDispalyPercent] = useState(0)

  const stylesInner: React.CSSProperties = {
    width: `${displayPercent}%`,
    background: color || '#FF0F23',
    borderRadius: borderRadius && parseInt(borderRadius.toString()),
    transition: `width ${duration || 300}ms ease-in-out`,
  }

  useEffect(() => {
    let timer: any = null
    if (activeMode === 'backwards') {
      setDispalyPercent(0)
      timer = setTimeout(() => {
        setDispalyPercent(percent)
      }, duration || 300)
    } else {
      setDispalyPercent(percent)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [percent, activeMode, duration])

  const [intersecting, setIntersecting] = useState(false)

  const progressRef = useRef(null)
  const observer: any = useRef(null)
  const initObserver = () => {
    const options = {
      threshold: [0],
      rootMargin: '0px',
    }
    observer.current = new IntersectionObserver((entires, self) => {
      entires.forEach((item) => {
        setIntersecting(item.isIntersecting)
      })
    }, options)
    observer.current.observe(progressRef.current)
  }

  const resetObserver = () => {
    observer.current.disconnect && observer.current.disconnect()
  }

  useEffect(() => {
    if (lazy) {
      setTimeout(() => {
        if (intersecting) {
          setDispalyPercent(percent)
        } else {
          setDispalyPercent(0)
        }
      }, delay)
    }
  }, [intersecting])

  useEffect(() => {
    lazy && initObserver()
    let timer: any = null
    if (delay) {
      setDispalyPercent(0)
      timer = setTimeout(() => {
        setDispalyPercent(percent)
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
