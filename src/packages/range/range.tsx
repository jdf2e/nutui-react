import type { TouchEvent } from 'react'
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { useTouch } from '@/hooks/use-touch'
import { getRect } from '@/utils/get-rect'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { useRtl } from '../configprovider'
import { WebRangeProps, RangeValue } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  range: false,
  min: 0,
  max: 100,
  step: 1,
  vertical: false,
} as WebRangeProps

const classPrefix = 'nut-range'
const verticalClassPrefix = `${classPrefix}-vertical`

const isSameValue = (newValue: RangeValue, oldValue: RangeValue) => {
  return JSON.stringify(newValue) === JSON.stringify(oldValue)
}

export const Range: FunctionComponent<
  Partial<WebRangeProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onClick' | 'onChange' | 'defaultValue'
    >
> = (props) => {
  const rtl = useRtl()
  const {
    className,
    style,
    vertical,
    min,
    max,
    step,
    value,
    defaultValue,
    onChange,
    onStart,
    onEnd,
  } = { ...defaultProps, ...props }

  const [dragStatus, setDragStatus] = useState('start')
  const touch = useTouch()
  const nodeRef = useRef<HTMLDivElement>(null)
  const [startValue, setStartValue] = useState<any>(0)
  const scope = useMemo(() => {
    if (max < min || max === min) {
      console.log('max 的值需要大于 min的值')
    }
    return max - min
  }, [max, min])

  const handleChange = (value: RangeValue) => {
    onChange && onChange(value)
  }
  const [current, setCurrent] = usePropsValue<RangeValue>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: handleChange,
  })

  const classes = classNames(classPrefix, {
    [verticalClassPrefix]: vertical,
  })

  const containerClasses = classNames(
    `${classPrefix}-container`,
    {
      [`${verticalClassPrefix}-container`]: vertical,
    },
    className
  )

  const calcMainAxis = useCallback(() => {
    const modelVal = current as any
    return `${((modelVal - min) * 100) / scope}%`
  }, [current, min, scope])

  const calcOffset = useCallback(() => {
    return `0%`
  }, [])

  const barStyle = useCallback(() => {
    if (vertical) {
      return {
        height: calcMainAxis(),
        top: calcOffset(),
        transition: dragStatus ? 'none' : undefined,
      }
    }
    const dir = rtl ? 'right' : 'left'
    return {
      width: calcMainAxis(),
      [dir]: calcOffset(),
      transition: dragStatus ? 'none' : undefined,
    }
  }, [calcMainAxis, calcOffset, dragStatus, rtl, vertical])

  const format = useCallback(
    (value: number) => {
      value = Math.max(+min, Math.min(value, +max))
      return Math.round(value / +step) * +step
    },
    [max, min, step]
  )

  const updateValue = useCallback(
    (value: any, end?: boolean) => {
      value = format(value)
      if (!isSameValue(value, current)) {
        setCurrent(value)
      }
      end && onEnd && onEnd(value)
    },
    [current, format, onEnd, setCurrent]
  )

  const onTouchStart = useCallback(
    (event: any) => {
      touch.start(event)
      setStartValue(format(current as number))

      setDragStatus('start')
    },
    [current, format, touch]
  )

  const onTouchMove = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      event.stopPropagation()
      if (!nodeRef.current) {
        return
      }
      if (dragStatus === 'start') {
        onStart && onStart()
      }
      touch.move(event)
      setDragStatus('draging')
      const rect = getRect(nodeRef.current)
      let delta = touch.deltaX.current
      let total = rect.width
      let diff = (delta / total) * scope
      diff = rtl ? -diff : diff
      if (vertical) {
        delta = touch.deltaY.current
        total = rect.height
        diff = (delta / total) * scope
      }
      const newValue = startValue + diff
      updateValue(newValue)
    },
    [dragStatus, onStart, rtl, scope, startValue, touch, updateValue, vertical]
  )

  const onTouchEnd = useCallback(() => {
    if (dragStatus === 'draging') {
      updateValue(current, true)
    }
    setDragStatus('')
  }, [current, dragStatus, updateValue])

  const renderSingleButton = useCallback(() => {
    return (
      <div
        className={classNames(`${classPrefix}-button-wrapper`, {
          [`${verticalClassPrefix}-button-wrapper`]: vertical,
        })}
        style={{
          // @ts-ignore
          transform: 'translate(-50%, -50%)',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      />
    )
  }, [onTouchEnd, onTouchMove, onTouchStart, vertical])

  return (
    <div className={containerClasses} style={style}>
      <div ref={nodeRef} className={classes}>
        <div
          className={`${classPrefix}-bar ${classPrefix}-bar-animate`}
          style={barStyle()}
        >
          {renderSingleButton()}
        </div>
      </div>
    </div>
  )
}

Range.displayName = 'NutRange'
