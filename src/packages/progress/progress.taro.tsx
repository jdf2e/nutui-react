import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import Taro, { PageInstance, createSelectorQuery } from '@tarojs/taro'
import { ITouchEvent, View } from '@tarojs/components'
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
  mode: 'default',
  status: 'static',
  draggable: false,
  showThumb: true,
  min: 0,
  max: 100,
} as TaroProgressProps

const clamp = (val: number, min: number, max: number) => {
  if (Number.isNaN(val)) return min
  if (val < min) return min
  if (val > max) return max
  return val
}

interface RectLike {
  left: number
  width: number
}

export const Progress: FunctionComponent<
  Partial<TaroProgressProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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
  const progressRef = useRef<any>(null)
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
    if (mode === 'video') return
    if (web()) {
      handleWebObserver()
    } else if (!harmony()) {
      handleOtherObserver()
    }
  }, [])

  // ==== video mode ====
  const minVal = min ?? 0
  const maxVal = max ?? 100
  const range = Math.max(maxVal - minVal, 1)
  const normalized = clamp(((percent - minVal) / range) * 100, 0, 100)

  const [dragging, setDragging] = useState(false)
  const [previewPercent, setPreviewPercent] = useState(normalized)
  const rectRef = useRef<RectLike | null>(null)
  const draggingRef = useRef(false)
  // 记录最近一次触摸的 clientX:await measureRect 期间提前派发的 touchmove
  // 会因 rectRef 尚未就绪而无法正确换算,故缓存坐标,待 rect 就绪后补算
  const lastClientXRef = useRef(0)

  useEffect(() => {
    if (!dragging) setPreviewPercent(normalized)
  }, [normalized, dragging])

  const getState = (): 'static' | 'paused' | 'active' => {
    if (dragging) return 'active'
    if (status === 'paused') return 'paused'
    return 'static'
  }
  const state = getState()

  const applyStep = (pct: number): number => {
    if (!step || step <= 0) return pct
    const stepInPct = (step / range) * 100
    return Math.round(pct / stepInPct) * stepInPct
  }

  const measureRect = (): Promise<RectLike | null> => {
    return new Promise((resolve) => {
      if (web() && progressRef.current?.getBoundingClientRect) {
        const r = progressRef.current.getBoundingClientRect()
        resolve({ left: r.left, width: r.width })
        return
      }
      createSelectorQuery()
        .select(`#${selector}`)
        .boundingClientRect()
        .exec((res: any) => {
          const r = res && res[0]
          if (r) {
            resolve({ left: r.left, width: r.width })
          } else {
            resolve(null)
          }
        })
    })
  }

  const percentFromClientX = (clientX: number): number => {
    const rect = rectRef.current
    if (!rect || rect.width === 0) return normalized
    const raw = ((clientX - rect.left) / rect.width) * 100
    return clamp(applyStep(raw), 0, 100)
  }

  const emitChange = (pct: number) => {
    const raw = minVal + (pct / 100) * range
    const value = Math.round(raw * 1e6) / 1e6
    onChange?.(value)
  }

  const handleTouchStart = useCallback(
    async (e: ITouchEvent) => {
      if (mode !== 'video' || !draggable) return
      if (!e.touches || e.touches.length === 0) return
      const clientX = e.touches[0].clientX
      // 同步置位拖动态:小程序 measureRect 为异步,await 期间已可能派发 touchmove,
      // 若仅依赖异步的 setDragging 会丢弃起步阶段的 touchmove,故用 ref 立即生效供事件判断
      draggingRef.current = true
      lastClientXRef.current = clientX
      setDragging(true)
      const rect = await measureRect()
      // await 期间可能已 touchEnd,此时不应再进入拖动流程
      if (!draggingRef.current) return
      rectRef.current = rect
      // 以最近一次触摸坐标补算,覆盖 await 期间提前派发的 touchmove
      const pct = percentFromClientX(lastClientXRef.current)
      setPreviewPercent(pct)
      onDragStart?.(minVal + (pct / 100) * range)
      emitChange(pct)
    },
    [mode, draggable, minVal, range, step]
  )

  const handleTouchMove = useCallback(
    (e: ITouchEvent) => {
      if (mode !== 'video' || !draggingRef.current) return
      if (!e.touches || e.touches.length === 0) return
      const clientX = e.touches[0].clientX
      lastClientXRef.current = clientX
      // rect 尚未就绪(measureRect 未完成),先缓存坐标,待 touchStart await 结束后补算
      if (!rectRef.current) return
      const pct = percentFromClientX(clientX)
      setPreviewPercent(pct)
      onDragging?.(minVal + (pct / 100) * range)
      emitChange(pct)
    },
    [mode, minVal, range, step, onDragging]
  )

  const handleTouchEnd = useCallback(
    (e: ITouchEvent) => {
      if (mode !== 'video' || !draggingRef.current) return
      const touch = e.changedTouches && e.changedTouches[0]
      const pct = touch ? percentFromClientX(touch.clientX) : previewPercent
      draggingRef.current = false
      setDragging(false)
      rectRef.current = null
      onDragEnd?.(minVal + (pct / 100) * range)
    },
    [mode, minVal, range, step, previewPercent, onDragEnd]
  )

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
      backgroundColor: effectiveColor || 'var(--nutui-color-primary, #ff0f23)',
      fontSize: fontSize && pxTransform(parseInt(fontSize.toString())),
    }
    if (harmony()) {
      style.width = harmony()
        ? pxTransform(`${percent}%`.length * 9 + 4)
        : `${percent}%`.length * 9 + 4
    }
    return style
  }

  if (mode === 'video') {
    const rootCls = classNames(
      classPrefix,
      `${classPrefix}--video`,
      `is-${state}`,
      {
        'is-draggable': draggable,
        'is-dragging': dragging,
      },
      className
    )
    const displayValue = dragging ? previewPercent : normalized
    return (
      <View
        ref={progressRef}
        id={selector}
        className={rootCls}
        style={style}
        aria-label={ariaLabel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        {...(rest as any)}
      >
        {status === 'paused' && pausedIcon && (
          <View className={`${classPrefix}-icon`}>{pausedIcon}</View>
        )}
        <View className={`${classPrefix}-track`}>
          <View
            className={`${classPrefix}-fill`}
            style={{ width: `${displayValue}%` }}
          />
          {showThumb && (
            <View
              className={`${classPrefix}-thumb`}
              style={{ left: `${displayValue}%` }}
            />
          )}
        </View>
      </View>
    )
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
