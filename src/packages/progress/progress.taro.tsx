import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Taro, { PageInstance } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider/index.taro'
import useUuid from '@/utils/use-uuid'

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
  const handlePercent = () => {
    let timer: any = null
    if (delay) {
      setDispalyPercent(0)
      timer = setTimeout(() => {
        setDispalyPercent(percent)
      }, delay)
    }

    return () => {
      lazy && resetObserver(Taro.getEnv())
      timer && clearTimeout(timer)
    }
  }
  useEffect(() => {
    setDispalyPercent(percent)
  }, [percent])

  const [intersecting, setIntersecting] = useState(false)
  const progressRef = useRef(null)
  const webObserver: any = useRef(null)
  const uuid = useUuid()
  const selector = `${classPrefix}-lazy-${uuid}`
  const resetObserver = (env: string, observer: any = null) => {
    if (env === 'WEB') {
      webObserver.current.disconnect && webObserver.current.disconnect()
    } else {
      observer && observer.disconnect()
    }
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
  const handleWebObserver = () => {
    /// web环境
    if (lazy) {
      webObserver.current = new IntersectionObserver(
        (entires, self) => {
          entires.forEach((item) => {
            setIntersecting(item.isIntersecting)
          })
        },
        {
          threshold: [0],
          rootMargin: '0px',
        }
      )
      webObserver.current.observe(progressRef.current)
    }
    handlePercent()
  }
  const handleOtherObserver = () => {
    // 非web环境
    let observer: any = null
    if (lazy) {
      observer = Taro.createIntersectionObserver(
        Taro.getCurrentInstance().page as PageInstance,
        {
          thresholds: [0],
          observeAll: true,
        }
      )
      observer
        .relativeToViewport({ top: 0 })
        .observe(`#${selector}`, (res: any) => {
          setIntersecting(res.intersectionRatio > 0)
        })
    }
    handlePercent()
  }

  useEffect(() => {
    if (Taro.getEnv() === 'WEB') {
      handleWebObserver()
    } else {
      handleOtherObserver()
    }
  }, [])

  return (
    <div
      ref={progressRef}
      id={selector}
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
