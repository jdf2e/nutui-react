import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider'

export interface ProgressProps extends BasicComponent {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
  lazy: boolean
  delay: number
}

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
  lazy: false,
  delay: 0,
} as ProgressProps

export const Progress: FunctionComponent<
  Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>
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
    background,
  }

  const [displayPercent, setDispalyPercent] = useState(0)

  const stylesInner: React.CSSProperties = {
    width: `${displayPercent}%`,
    background: color,
  }

  useEffect(() => {
    setDispalyPercent(percent)
  }, [percent])

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
      {...rest}
    >
      <div className={`${classPrefix}-outer`} style={stylesOuter}>
        <div className={classesInner} style={stylesInner}>
          {showText && (
            <div
              className={`${classPrefix}-text`}
              style={
                rtl
                  ? { right: `${displayPercent}%` }
                  : { left: `${displayPercent}%` }
              }
            >
              {children || (
                <div
                  className={`${classPrefix}-text-inner`}
                  style={{
                    background: color,
                  }}
                >
                  {percent}%
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Progress.displayName = 'NutProgress'
