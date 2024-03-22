import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Taro, { PageInstance } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider/index.taro'

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
  const timestamp = lazy && Date.now().toString(36) // 将时间戳转换为36进制字符串
  const randomString = lazy && Math.random().toString(36).substring(2, 15)
  const [selector, setSelector] = useState('')
  const classesInner = classNames({
    [`${classPrefix}-inner`]: true,
    [`${classPrefix}-active`]: animated,
    [selector]: lazy,
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
  const webObserver: any = useRef(null)

  const resetObserver = () => {
    webObserver.current.disconnect && webObserver.current.disconnect()
  }
  useEffect(() => {
    if (lazy) {
      setTimeout(() => {
        if (intersecting) {
          setDispalyPercent(percent)
        } else {
          setDispalyPercent(0.01)
        }
      }, delay)
    }
  }, [intersecting])

  useEffect(() => {
    if (Taro.getEnv() === 'WEB') {
      if (lazy) {
        const options = {
          threshold: [0],
          rootMargin: '0px',
        }
        webObserver.current = new IntersectionObserver((entires, self) => {
          entires.forEach((item) => {
            if (item.isIntersecting) {
              setIntersecting(true)
            } else {
              setIntersecting(false)
            }
          })
        }, options)
        webObserver.current.observe(progressRef.current)
      }
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
    }
    const temp = `${classPrefix}-lazy-${Date.now().toString(36)}${Math.random().toString(36).substring(2, 15)}`
    setSelector(temp)
    let observer: any = null
    if (lazy) {
      const options = {
        thresholds: [0],
        observeAll: true,
      }

      observer = Taro.createIntersectionObserver(
        Taro.getCurrentInstance().page as PageInstance,
        options
      )
      observer
        .relativeToViewport({ top: 0 })
        .observe(`.${temp}`, (res: any) => {
          if (res.intersectionRatio > 0) {
            setIntersecting(true)
          } else {
            setIntersecting(false)
          }
        })
    }
    let timer: any = null
    if (delay) {
      setDispalyPercent(0)
      timer = setTimeout(() => {
        setDispalyPercent(percent)
      }, delay)
    }

    return () => {
      observer && observer.disconnect()
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

Progress.defaultProps = defaultProps
Progress.displayName = 'NutProgress'
