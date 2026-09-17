import React, {
  FunctionComponent,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider'
import { WebProgressProps } from '@/types'

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
} as WebProgressProps

const clamp = (val: number, min: number, max: number) => {
  if (Number.isNaN(val)) return min
  if (val < min) return min
  if (val > max) return max
  return val
}

export const Progress: FunctionComponent<
  Partial<WebProgressProps> &
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
    borderRadius,
    fontSize,
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
    background: color || 'var(--nutui-color-primary, #ff0f23)',
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

  const progressRef = useRef<HTMLDivElement | null>(null)
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
    if (mode === 'video') return undefined
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

  // ==== video mode ====
  const minVal = min ?? 0
  const maxVal = max ?? 100
  const range = Math.max(maxVal - minVal, 1)
  const normalized = clamp(((percent - minVal) / range) * 100, 0, 100)

  const [dragging, setDragging] = useState(false)
  const [previewPercent, setPreviewPercent] = useState(normalized)
  const rafId = useRef<number | null>(null)
  const rectRef = useRef<DOMRect | null>(null)

  useEffect(() => {
    if (!dragging) {
      setPreviewPercent(normalized)
    }
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

  const percentFromClientX = (clientX: number): number => {
    const rect = rectRef.current || progressRef.current?.getBoundingClientRect()
    if (!rect || rect.width === 0) return normalized
    const raw = ((clientX - rect.left) / rect.width) * 100
    return clamp(applyStep(raw), 0, 100)
  }

  const emitChange = (pct: number) => {
    const raw = minVal + (pct / 100) * range
    const value = Math.round(raw * 1e6) / 1e6
    onChange?.(value)
  }

  const handleMove = useCallback(
    (clientX: number) => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const pct = percentFromClientX(clientX)
        setPreviewPercent(pct)
        onDragging?.(minVal + (pct / 100) * range)
        emitChange(pct)
      })
    },
    [minVal, range, step, onDragging, onChange]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => handleMove(e.clientX),
    [handleMove]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 0) return
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  const cleanupDragListeners = () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
  }

  function handleMouseUp(e: MouseEvent) {
    const pct = percentFromClientX(e.clientX)
    setDragging(false)
    rectRef.current = null
    onDragEnd?.(minVal + (pct / 100) * range)
    cleanupDragListeners()
  }

  function handleTouchEnd(e: TouchEvent) {
    const touch = e.changedTouches[0]
    const pct = touch ? percentFromClientX(touch.clientX) : previewPercent
    setDragging(false)
    rectRef.current = null
    onDragEnd?.(minVal + (pct / 100) * range)
    cleanupDragListeners()
  }

  const startDrag = (clientX: number) => {
    if (!draggable) return
    rectRef.current = progressRef.current?.getBoundingClientRect() || null
    setDragging(true)
    const pct = percentFromClientX(clientX)
    setPreviewPercent(pct)
    onDragStart?.(minVal + (pct / 100) * range)
    emitChange(pct)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)
  }

  const handleMouseDown = (e: ReactMouseEvent) => {
    if (mode !== 'video') return
    e.preventDefault()
    startDrag(e.clientX)
  }

  const handleTouchStart = (e: ReactTouchEvent) => {
    if (mode !== 'video') return
    if (e.touches.length === 0) return
    startDrag(e.touches[0].clientX)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (mode !== 'video' || !draggable) return
    const inc = step && step > 0 ? (step / range) * 100 : 1
    let next = normalized
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        next = clamp(normalized - inc, 0, 100)
        break
      case 'ArrowRight':
      case 'ArrowUp':
        next = clamp(normalized + inc, 0, 100)
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = 100
        break
      default:
        return
    }
    e.preventDefault()
    emitChange(next)
  }

  useEffect(() => {
    return () => cleanupDragListeners()
  }, [])

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
      <div
        ref={progressRef}
        className={rootCls}
        style={style}
        role="slider"
        aria-label={ariaLabel}
        aria-valuemin={minVal}
        aria-valuemax={maxVal}
        aria-valuenow={clamp(percent, minVal, maxVal)}
        tabIndex={draggable ? 0 : -1}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {status === 'paused' && pausedIcon && (
          <div className={`${classPrefix}-icon`}>{pausedIcon}</div>
        )}
        <div className={`${classPrefix}-track`}>
          <div
            className={`${classPrefix}-fill`}
            style={{ width: `${displayValue}%` }}
          />
          {showThumb && (
            <div
              className={`${classPrefix}-thumb`}
              style={{ left: `${displayValue}%` }}
            />
          )}
        </div>
      </div>
    )
  }

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

Progress.displayName = 'NutProgress'
