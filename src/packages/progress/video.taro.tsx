import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { createSelectorQuery } from '@tarojs/taro'
import { useUuid } from '@/hooks/use-uuid'
import { web } from '@/utils/taro/platform'
import { TaroProgressProps } from '@/types'

type RectLike = { left: number; width: number }

const defaultProps = {
  percent: 0,
  mode: 'video',
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

export const VideoProgress: FunctionComponent<
  Partial<TaroProgressProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const {
    className,
    style,
    percent = 0,
    status = 'static',
    draggable = false,
    showThumb = true,
    pausedIcon,
    min = 0,
    max = 100,
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
  const progressRef = useRef<any>(null)

  const minVal = min ?? 0
  const maxVal = max ?? 100
  const range = Math.max(maxVal - minVal, 1)
  const normalized = clamp(((percent - minVal) / range) * 100, 0, 100)

  const [dragging, setDragging] = useState(false)
  const [previewPercent, setPreviewPercent] = useState(normalized)
  const rectRef = useRef<RectLike | null>(null)
  const draggingRef = useRef(false)
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
      if (!draggable) return
      if (!e.touches || e.touches.length === 0) return
      const clientX = e.touches[0].clientX
      draggingRef.current = true
      lastClientXRef.current = clientX
      setDragging(true)
      const rect = await measureRect()
      if (!draggingRef.current) return
      rectRef.current = rect
      const pct = percentFromClientX(lastClientXRef.current)
      setPreviewPercent(pct)
      onDragStart?.(minVal + (pct / 100) * range)
      emitChange(pct)
    },
    [draggable, minVal, range, step]
  )

  const handleTouchMove = useCallback(
    (e: ITouchEvent) => {
      if (!draggingRef.current) return
      if (!e.touches || e.touches.length === 0) return
      const clientX = e.touches[0].clientX
      lastClientXRef.current = clientX
      if (!rectRef.current) return
      const pct = percentFromClientX(clientX)
      setPreviewPercent(pct)
      onDragging?.(minVal + (pct / 100) * range)
      emitChange(pct)
    },
    [minVal, range, step, onDragging]
  )

  const handleTouchEnd = useCallback(
    (e: ITouchEvent) => {
      if (!draggingRef.current) return
      const touch = e.changedTouches && e.changedTouches[0]
      const pct = touch ? percentFromClientX(touch.clientX) : previewPercent
      draggingRef.current = false
      setDragging(false)
      rectRef.current = null
      onDragEnd?.(minVal + (pct / 100) * range)
    },
    [minVal, range, step, previewPercent, onDragEnd]
  )

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

VideoProgress.displayName = 'NutVideoProgress'
