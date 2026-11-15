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
import { TaroVideoProgressProps } from '@/types'

type RectLike = { left: number; width: number }

export type VideoProgressProps = Partial<TaroVideoProgressProps> &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'onDragStart' | 'onDragEnd'
  >

const defaultProps = {
  percent: 0,
  status: 'static',
  draggable: false,
  showThumb: true,
  min: 0,
  max: 100,
} as TaroVideoProgressProps

const clamp = (val: number, min: number, max: number) => {
  if (Number.isNaN(val)) return min
  if (val < min) return min
  if (val > max) return max
  return val
}

export const VideoProgress: FunctionComponent<VideoProgressProps> = (props) => {
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

  const classPrefix = 'nut-videoprogress'
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
        .boundingClientRect((res: any) => {
          if (res && res.width) {
            resolve({ left: res.left, width: res.width })
          } else {
            resolve(null)
          }
        })
        .exec()
    })
  }

  const percentFromClientX = (clientX: number, rect: RectLike | null) => {
    if (!rect || rect.width === 0) return normalized
    const raw = ((clientX - rect.left) / rect.width) * 100
    return clamp(applyStep(raw), 0, 100)
  }

  const emitChange = (pct: number) => {
    const raw = minVal + (pct / 100) * range
    const value = Math.round(raw * 1e6) / 1e6
    onChange?.(value)
  }

  const handleTouchStart = async (e: ITouchEvent) => {
    if (!draggable) return
    const touch = e.touches[0] || (e as any).changedTouches?.[0]
    if (!touch) return
    const rect = await measureRect()
    rectRef.current = rect
    draggingRef.current = true
    lastClientXRef.current = touch.clientX
    setDragging(true)
    const pct = percentFromClientX(touch.clientX, rect)
    setPreviewPercent(pct)
    onDragStart?.(minVal + (pct / 100) * range)
    emitChange(pct)
  }

  const handleTouchMove = useCallback(
    (e: ITouchEvent) => {
      if (!draggable || !draggingRef.current) return
      const touch = e.touches[0]
      if (!touch) return
      lastClientXRef.current = touch.clientX
      const pct = percentFromClientX(touch.clientX, rectRef.current)
      setPreviewPercent(pct)
      onDragging?.(minVal + (pct / 100) * range)
      emitChange(pct)
    },
    [draggable, minVal, range, step, onDragging, onChange]
  )

  const handleTouchEnd = useCallback(
    (e: ITouchEvent) => {
      if (!draggable || !draggingRef.current) return
      const touch = (e as any).changedTouches?.[0]
      const clientX = touch ? touch.clientX : lastClientXRef.current
      const pct = percentFromClientX(clientX, rectRef.current)
      draggingRef.current = false
      setDragging(false)
      rectRef.current = null
      onDragEnd?.(minVal + (pct / 100) * range)
    },
    [draggable, minVal, range, step, onDragEnd]
  )

  const rootCls = classNames(
    classPrefix,
    'nut-progress--video',
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
        <View className={`${classPrefix}-icon nut-progress-icon`}>
          {pausedIcon}
        </View>
      )}
      <View className={`${classPrefix}-track nut-progress-track`}>
        <View
          className={`${classPrefix}-fill nut-progress-fill`}
          style={{ width: `${displayValue}%` }}
        />
        {showThumb && (
          <View
            className={`${classPrefix}-thumb nut-progress-thumb`}
            style={{ left: `${displayValue}%` }}
          />
        )}
      </View>
    </View>
  )
}

VideoProgress.displayName = 'NutVideoProgress'
