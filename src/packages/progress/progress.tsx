import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider'
import { WebProgressProps } from '@/types'
import { VideoProgress } from './video'

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
  lazy: false,
  delay: 0,
  mode: 'default',
} as WebProgressProps

const BaseProgress: FunctionComponent<
  Partial<WebProgressProps> &
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

  const [dispalyPercent, setDispalyPercent] = useState(percent)

  const stylesInner: React.CSSProperties = {
    width: `${dispalyPercent}%`,
    background: color || 'var(--nutui-color-primary, #ff0f23)',
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
          setDispalyPercent(percent)
        } else {
          setDispalyPercent(0)
        }
      }, delay)
    }
  }, [intersecting, lazy, percent, delay])

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

export const Progress: FunctionComponent<
  Partial<WebProgressProps> &
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
