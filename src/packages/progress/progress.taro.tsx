import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Taro, { PageInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { pxTransform } from '@/utils/taro/px-transform'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider/index.taro'
import { useUuid } from '@/hooks/use-uuid'
import { harmony, web } from '@/utils/taro/platform'
import { TaroProgressProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
  lazy: false,
  delay: 0,
} as TaroProgressProps

export const Progress: FunctionComponent<
  Partial<TaroProgressProps> & React.HTMLAttributes<HTMLDivElement>
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
    // tc
    showInfo,
    borderRadius,
    fontSize,
    activeColor,
    backgroundColor,
    active,
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
  const effectiveShowText = props.showText ?? showInfo ?? defaultProps.showText
  const effectiveColor = props.color ?? activeColor ?? defaultProps.color
  const effectiveBgColor =
    props.background ?? backgroundColor ?? defaultProps.background
  const effectiveAnimated = props.animated ?? active ?? defaultProps.animated
  const classesInner = classNames({
    [`${classPrefix}-inner`]: true,
    [`${classPrefix}-active`]: effectiveAnimated,
  })

  const [displayPercent, setDispalyPercent] = useState(percent)
  const getStyles = () => {
    // 基础样式
    const baseStyles = {
      height: strokeWidth && pxTransform(Number(strokeWidth)),
      borderRadius:
        borderRadius && pxTransform(parseInt(borderRadius.toString())),
    }
    const transitionStyle = {
      transition: `width ${duration || 300}ms ease-in-out`,
    }

    return {
      outer: {
        width: '100%',
        backgroundColor: effectiveBgColor,
        ...baseStyles,
      },
      inner: {
        width: `${displayPercent}%`,
        background: effectiveColor || '#FF0F23',
        ...baseStyles,
        ...transitionStyle,
      },
    }
  }

  const { outer: stylesOuter, inner: stylesInner } = getStyles()

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
    } else if (!harmony()) {
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
    if (!harmony()) {
      return Math.floor((`${percent}%`.length * 9) / 2)
    }
    return Math.floor((`${percent}%`.length * 9 + 4) / 2)
  }
  const computeInnerStyle = () => {
    const style: any = {
      backgroundColor: effectiveColor || '#ff0f23',
      fontSize: fontSize && pxTransform(parseInt(fontSize.toString())),
    }
    if (harmony()) {
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
      aria-label={ariaLabel}
      {...(rest as any)}
    >
      <View className={`${classPrefix}-outer`} style={stylesOuter}>
        <View
          className={classesInner}
          style={{ ...stylesInner, position: 'relative' }}
          onTransitionEnd={onActiveEnd}
        />
      </View>
      {effectiveShowText && (
        <View
          className={`${classPrefix}-text`}
          style={{ fontSize: fontSize && parseInt(fontSize.toString()) }}
        >
          {children || `${percent}%`}
        </View>
      )}
    </View>
  )
}

Progress.displayName = 'NutProgress'
