import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Taro, { PageInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { pxTransform } from '@/utils/taro/px-transform'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
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
    percent = 0,
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
    onActiveEnd,
    ariaLabel,
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

  const [displayPercent, setDisplayPercent] = useState(percent)
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
        background: effectiveColor || 'var(--nutui-color-primary, #ff0f23)',
        ...baseStyles,
        ...transitionStyle,
      },
    }
  }

  const { outer: stylesOuter, inner: stylesInner } = getStyles()

  const handlePercent = () => {
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
  const progressRef = useRef(null)
  const webObserver: any = useRef(null)
  const uuid = useUuid()
  const selector = `${classPrefix}-lazy-${uuid}`
  const resetObserver = (observer: any = null) => {
    if (web()) {
      webObserver.current?.disconnect?.()
    } else {
      observer?.disconnect?.()
    }
  }

  useEffect(() => {
    if (lazy) {
      setTimeout(() => {
        if (intersecting) {
          setDisplayPercent(percent)
        } else {
          setDisplayPercent(0.01)
        }
      }, delay)
    }
  }, [intersecting, lazy, percent, delay])

  const handleWebObserver = () => {
    if (lazy) {
      webObserver.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((item) => {
            setIntersecting(item.isIntersecting)
          })
        },
        {
          threshold: [0],
          rootMargin: '0px',
        }
      )
      if (progressRef.current) {
        webObserver.current.observe(progressRef.current)
      }
    }
    handlePercent()
  }

  const handleOtherObserver = () => {
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
          {children || `${displayPercent}%`}
        </View>
      )}
    </View>
  )
}

Progress.displayName = 'NutProgress'
