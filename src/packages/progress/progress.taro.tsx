import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Taro, { PageInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider/index.taro'
import useUuid from '@/utils/use-uuid'
import { harmony, harmonyAndRn, rn, web } from '@/utils/platform-taro'

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
    width: '100%',
    backgroundColor: background,
  }

  const [displayPercent, setDispalyPercent] = useState(percent)

  const stylesInner: React.CSSProperties = {
    width: `${displayPercent}%`,
    background: color || '#FF0F23',
  }

  if (strokeWidth) {
    stylesOuter.height = pxTransform(Number(strokeWidth))
    stylesInner.height = pxTransform(Number(strokeWidth))
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
      lazy && resetObserver()
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
  const resetObserver = (observer: any = null) => {
    if (web()) {
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
    if (web()) {
      handleWebObserver()
    } else if (!harmonyAndRn()) {
      handleOtherObserver()
    }
  }, [])
  const getTextStyle = () => {
    return rtl ? { right: '100%' } : { left: '100%' }
  }
  const computeRight = () => {
    if (children) {
      return 0
    }
    if (!harmonyAndRn()) {
      return Math.floor((`${percent}%`.length * 9) / 2)
    }
    if (rn()) {
      return `${percent}%`.length * 9 + 4
    }
    return Math.floor((`${percent}%`.length * 9 + 4) / 2)
  }
  const computeInnerStyle = () => {
    const style: any = {
      backgroundColor: color || '#ff0f23',
    }
    if (harmonyAndRn()) {
      style.width = harmony()
        ? pxTransform(`${percent}%`.length * 9 + 4)
        : `${percent}%`.length * 9 + 4
    }
    return style
  }
  return (
    <View
      ref={progressRef}
      id={selector}
      className={classNames(classPrefix, className)}
      style={style}
      {...(rest as any)}
    >
      <View className={`${classPrefix}-outer`} style={stylesOuter}>
        <View
          className={classesInner}
          style={{ ...stylesInner, position: 'relative' }}
        >
          {showText && (
            <View
              style={{
                position: 'relative',
                [rtl ? 'left' : 'right']: computeRight(),
              }}
            >
              <View
                className={`${classPrefix}-text`}
                style={{
                  ...getTextStyle(),
                  height:
                    // eslint-disable-next-line no-nested-ternary
                    harmony()
                      ? pxTransform(strokeWidth ? Number(strokeWidth) + 8 : 18)
                      : strokeWidth
                        ? Number(strokeWidth) + 8
                        : 18,
                  position: 'absolute',
                  top: -(strokeWidth
                    ? (Number(strokeWidth) + 8 - 9) / 2 + 5
                    : 9),
                }}
              >
                {children || (
                  <View
                    className={`${classPrefix}-text-inner`}
                    style={computeInnerStyle()}
                  >
                    {`${percent}%`}
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

Progress.displayName = 'NutProgress'
