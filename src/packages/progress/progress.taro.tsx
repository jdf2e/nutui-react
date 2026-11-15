import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Taro, { PageInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { TaroProgressProps } from '@/types'
import { harmony, web } from '@/utils/taro/platform'
import { useRtl } from '@/packages/configprovider/index.taro'
import { useUuid } from '@/hooks/use-uuid'
import { VideoProgress } from './video.taro'

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
  lazy: false,
  delay: 0,
  mode: 'default',
} as TaroProgressProps

const BaseProgress: FunctionComponent<
  Partial<TaroProgressProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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
    mode,
    status,
    draggable,
    showThumb,
    pausedIcon,
    min,
    max,
    step,
    onChange,
    onDragStart,
    onDragging,
    onDragEnd,
    ariaLabel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-progress'
  const selector = useUuid()
  const [dispalyPercent, setDispalyPercent] = useState(percent)

  const effectiveColor = color
  const effectiveShowText = showText

  const stylesInner: React.CSSProperties = {
    width: `${dispalyPercent}%`,
    background: effectiveColor || 'var(--nutui-color-primary, #ff0f23)',
    borderRadius: borderRadius && parseInt(borderRadius.toString()),
    transition: `width ${duration || 300}ms ease-in-out`,
  }

  const stylesOuter = {
    height: strokeWidth && `${strokeWidth}px`,
    borderRadius: borderRadius && parseInt(borderRadius.toString()),
    background,
  }

  const classesInner = classNames(`${classPrefix}-inner`, {
    [`${classPrefix}-active`]: animated,
  })

  const [intersecting, setIntersecting] = useState(false)
  const progressRef = useRef<any>(null)
  const webObserver: any = useRef(null)

  const handlePercent = () => {
    let timer: any = null
    if (delay) {
      setDispalyPercent(0.01)
      timer = setTimeout(() => {
        setDispalyPercent(percent)
      }, delay)
    } else {
      setDispalyPercent(percent)
    }
    return () => {
      timer && clearTimeout(timer)
      webObserver.current && webObserver.current.disconnect()
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

export const Progress: FunctionComponent<
  Partial<TaroProgressProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Video: typeof VideoProgress
} = (props) => {
  if (props.mode === 'video') {
    return <VideoProgress {...props} />
  }
  return <BaseProgress {...props} />
}

Progress.Video = VideoProgress
Progress.displayName = 'NutProgress'
