import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
  ReactNode,
} from 'react'
import type { TouchEvent } from 'react'
import classNames from 'classnames'
import { useTouch } from '@/utils/use-touch'
import { getRect } from '@/utils/use-client-rect'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { RangeMark, RangeValue } from './types'
import { useRtl } from '../configprovider'

export interface RangeProps extends BasicComponent {
  value: RangeValue
  defaultValue: RangeValue
  range: boolean
  disabled: boolean
  min: number
  max: number
  step: number
  minDescription: ReactNode
  maxDescription: ReactNode
  button: ReactNode
  vertical: boolean
  marks: Record<string, ReactNode> | RangeMark[]
  currentDescription: ((value: RangeValue) => ReactNode) | null
  onChange: (value: RangeValue) => void
  onStart: () => void
  onEnd: (value: RangeValue) => void
}

const defaultProps = {
  ...ComponentDefaults,
  range: false,
  min: 0,
  max: 100,
  step: 1,
  vertical: false,
  marks: {},
} as RangeProps

const classPrefix = 'nut-range'
const verticalClassPrefix = `${classPrefix}-vertical`

const isSameValue = (newValue: RangeValue, oldValue: RangeValue) => {
  return JSON.stringify(newValue) === JSON.stringify(oldValue)
}

const handleOverlap = (value: number[]) => {
  if (value[0] > value[1]) {
    return value.slice(0).reverse()
  }
  return value
}

export const Range: FunctionComponent<
  Partial<RangeProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onClick' | 'onChange' | 'defaultValue'
    >
> = (props) => {
  const rtl = useRtl()
  const {
    className,
    style,
    range,
    disabled,
    button,
    vertical,
    marks,
    minDescription,
    maxDescription,
    currentDescription,
    min,
    max,
    step,
    value,
    defaultValue,
    onChange,
    onStart,
    onEnd,
  } = { ...defaultProps, ...props }

  const rtlClassPrefix = useMemo(
    () => `rtl-${vertical ? verticalClassPrefix : classPrefix}`,
    [vertical]
  )
  const [buttonIndex, setButtonIndex] = useState(0)
  const [dragStatus, setDragStatus] = useState('start' || 'draging' || '')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)
  const [marksList, setMarksList] = useState<number[]>([])
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
  const [exactValue, setExactValue] = useState<RangeValue>(
    () => value || defaultValue || 0
  )
  const marksRef = useRef<{ [key: string]: any }>({})
  useEffect(() => {
    if (marks) {
      if (Array.isArray(marks)) {
        const list = marks
          .sort((a, b) => a.value - b.value)
          .filter((point) => point.value >= min && point.value <= max)
        setMarksList(list.map((mark) => mark.value))
        list.forEach((mark) => {
          marksRef.current[mark.value] =
            mark.label !== undefined ? mark.label : mark.value
        })
      } else {
        const marksKeys = Object.keys(marks)
        const list: any = marksKeys
          .map(parseFloat)
          .sort((a, b) => a - b)
          .filter((point) => point >= min && point <= max)
        setMarksList(list)
      }
    }
  }, [marks, max, min])
  const classes = classNames(classPrefix, {
    [`${classPrefix}-disabled`]: disabled,
    [verticalClassPrefix]: vertical,
  })

  const containerClasses = classNames(
    `${classPrefix}-container`,
    {
      [`${verticalClassPrefix}-container`]: vertical,
    },
    className
  )
  const markClassName = useCallback(
    (mark: any) => {
      const classPrefix = 'nut-range-mark'
      const verticalClassPrefix = 'nut-range-vertical-mark'
      let lowerBound = min
      let upperBound = max
      if (range && Array.isArray(current)) {
        lowerBound = current[0]
        upperBound = current[1]
      } else {
        upperBound = current as number
      }
      const isActive = mark <= upperBound && mark >= lowerBound
      const classNames = [
        `${classPrefix}-text-wrapper`,
        `${isActive ? `${classPrefix}-text-wrapper-active` : ''}`,
      ]

      if (vertical) {
        classNames.push(`${verticalClassPrefix}-text-wrapper`)
        isActive &&
          classNames.push(`${verticalClassPrefix}-text-active-wrapper`)
      }

      if (rtl) {
        classNames.push(`${rtlClassPrefix}-mark-text-wrapper`)
      }

      return classNames.join(' ')
    },
    [min, max, range, current, vertical, rtl, rtlClassPrefix]
  )

  const isRange = useCallback(
    (val: any) => {
      return !!range && Array.isArray(val)
    },
    [range]
  )

  const calcMainAxis = useCallback(() => {
    const modelVal = current as any
    return isRange(modelVal)
      ? `${((modelVal[1] - modelVal[0]) * 100) / scope}%`
      : `${((modelVal - min) * 100) / scope}%`
  }, [current, isRange, min, scope])

  const calcOffset = useCallback(() => {
    const modelVal = current as any
    return isRange(modelVal) ? `${((modelVal[0] - min) * 100) / scope}%` : `0%`
  }, [current, isRange, min, scope])

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

  const marksStyle = useCallback(
    (mark: any) => {
      const dir = rtl ? 'right' : 'left'
      let style: any = {
        [dir]: `${((mark - min) / scope) * 100}%`,
      }
      if (vertical) {
        style = {
          top: `${((mark - min) / scope) * 100}%`,
        }
      }
      return style
    },
    [min, rtl, scope, vertical]
  )

  const tickClass = useCallback(
    (mark: any) => {
      if (range && Array.isArray(current)) {
        return mark <= current[1] && mark >= current[0]
      }
      return mark <= current
    },
    [current, range]
  )

  const format = useCallback(
    (value: number) => {
      value = Math.max(+min, Math.min(value, +max))
      return Math.round(value / +step) * +step
    },
    [max, min, step]
  )

  const updateValue = useCallback(
    (value: any, end?: boolean) => {
      if (isRange(value)) {
        value = handleOverlap(value).map(format)
      } else {
        value = format(value)
      }
      if (!isSameValue(value, current)) {
        setCurrent(value)
      }
      end && onEnd && onEnd(value)
    },
    [current, format, isRange, onEnd, setCurrent]
  )

  const click = useCallback(
    (event: any) => {
      if (disabled || !root.current) {
        return
      }
      setDragStatus('')
      const rect = getRect(root.current)
      let delta = event.clientX - rect.left
      let total = rect.width
      if (vertical) {
        delta = event.clientY - rect.top
        total = rect.height
      }
      const value = min + (delta / total) * scope
      setExactValue(current)
      if (isRange(current)) {
        const [left, right] = current as any
        const middle = (left + right) / 2
        if (value <= middle) {
          updateValue([value, right], true)
        } else {
          updateValue([left, value], true)
        }
      } else {
        updateValue(value, true)
      }
    },
    [current, disabled, isRange, min, scope, updateValue, vertical]
  )

  const onTouchStart = useCallback(
    (event: any) => {
      if (disabled) {
        return
      }
      touch.start(event)
      setExactValue(current)
      if (isRange(current)) {
        setStartValue((current as number[]).map(format))
      } else {
        setStartValue(format(current as number))
      }

      setDragStatus('start')
    },
    [current, disabled, format, isRange, touch]
  )

  const onTouchMove = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      event.stopPropagation()
      if (disabled || !root.current) {
        return
      }
      if (dragStatus === 'start') {
        onStart && onStart()
      }
      touch.move(event)
      setDragStatus('draging')
      const rect = getRect(root.current)
      let delta = touch.deltaX.current
      let total = rect.width
      let diff = (delta / total) * scope
      diff = rtl ? -diff : diff
      if (vertical) {
        delta = touch.deltaY.current
        total = rect.height
        diff = (delta / total) * scope
      }
      let newValue
      if (isRange(startValue)) {
        newValue = (exactValue as number[]).slice()
        newValue[buttonIndex] = startValue[buttonIndex] + diff
      } else {
        newValue = startValue + diff
      }
      setExactValue(newValue)
      updateValue(newValue)
    },
    [
      buttonIndex,
      disabled,
      dragStatus,
      exactValue,
      isRange,
      onStart,
      rtl,
      scope,
      startValue,
      touch,
      updateValue,
      vertical,
    ]
  )

  const onTouchEnd = useCallback(() => {
    if (disabled) {
      return
    }
    if (dragStatus === 'draging') {
      updateValue(current, true)
    }
    setDragStatus('')
  }, [current, disabled, dragStatus, updateValue])

  const curValue = useCallback(
    (idx?: number) => {
      const modelVal = current as any
      const value = typeof idx === 'number' ? modelVal[idx] : modelVal
      return value
    },
    [current]
  )

  const renderButton = useCallback(
    (index?: number) => {
      const buttonNumberTransform = vertical
        ? 'translate(100%, -50%)'
        : 'translate(-50%, -100%)'

      return (
        <>
          {button || (
            <div
              className={classNames(`${classPrefix}-button`, {
                [`${verticalClassPrefix}-button`]: vertical,
                [`${rtlClassPrefix}-button`]: rtl,
              })}
              style={{
                transform: 'translate(-50%, -50%)',
              }}
            >
              {currentDescription !== null && (
                <div
                  className={classNames(`${classPrefix}-button-number`, {
                    [`${verticalClassPrefix}-button-number`]: vertical,
                    [`${rtlClassPrefix}-button-number`]: rtl,
                  })}
                  style={{
                    transform: buttonNumberTransform,
                  }}
                >
                  {currentDescription
                    ? currentDescription(curValue(index))
                    : curValue(index)}
                </div>
              )}
            </div>
          )}
        </>
      )
    },
    [button, curValue, currentDescription, rtl, rtlClassPrefix, vertical]
  )
  const renderMarks = useCallback(() => {
    if (marksList.length <= 0) return null
    const markcls = classNames(`${classPrefix}-mark`, {
      [`${verticalClassPrefix}-mark`]: vertical,
      [`${rtlClassPrefix}-mark`]: rtl,
    })
    const textcls = classNames(`${classPrefix}-mark-text`, {
      [`${verticalClassPrefix}-mark-text`]: vertical,
    })
    return (
      <div className={markcls}>
        {marksList.map((mark: any) => {
          return (
            <span
              key={mark}
              className={markClassName(mark)}
              style={marksStyle(mark)}
            >
              <span className={textcls}>
                {Array.isArray(marks) ? marksRef.current[mark] : marks[mark]}
              </span>
              <span
                className={classNames(
                  `${vertical ? verticalClassPrefix : classPrefix}-tick`,
                  {
                    [`${vertical ? verticalClassPrefix : classPrefix}-tick-active`]:
                      tickClass(mark),
                    [`${rtlClassPrefix}-tick`]: rtl,
                  }
                )}
              />
            </span>
          )
        })}
      </div>
    )
  }, [
    markClassName,
    marks,
    marksList,
    marksStyle,
    rtl,
    rtlClassPrefix,
    tickClass,
    vertical,
  ])

  const getWrapperTransform = useCallback(() => {
    const wrapperTransform = 'translate(-50%, -50%)'
    return wrapperTransform
  }, [])

  const renderRangeButton = useCallback(() => {
    return [0, 1].map((item, index) => {
      const isLeft = index === 0
      const suffix = isLeft ? 'left' : 'right'
      const transform = 'translate(-50%, -50%)'
      const cls = classNames(`${classPrefix}-button-wrapper-${suffix}`, {
        [`${verticalClassPrefix}-button-wrapper-${suffix}`]: vertical,
        [`${rtlClassPrefix}-button-wrapper-${suffix}`]: rtl,
      })

      return (
        <div
          key={index}
          className={cls}
          style={{
            transform,
          }}
          onTouchStart={(e) => {
            setButtonIndex(index)
            onTouchStart(e)
          }}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onClick={(e) => e.stopPropagation()}
        >
          {renderButton(index)}
        </div>
      )
    })
  }, [
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    renderButton,
    vertical,
    rtl,
    rtlClassPrefix,
  ])

  const renderSingleButton = useCallback(() => {
    return (
      <div
        className={classNames(`${classPrefix}-button-wrapper`, {
          [`${verticalClassPrefix}-button-wrapper`]: vertical,
        })}
        style={{
          // @ts-ignore
          transform: getWrapperTransform(),
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {renderButton()}
      </div>
    )
  }, [
    getWrapperTransform,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    renderButton,
    vertical,
  ])

  const renderButtonWrapper = useCallback(() => {
    if (range) {
      return renderRangeButton()
    }
    return renderSingleButton()
  }, [renderRangeButton, renderSingleButton, range])

  return (
    <div className={containerClasses} style={style}>
      {minDescription !== null && (
        <div className={`${classPrefix}-min`}>{minDescription || min}</div>
      )}
      <div ref={root} className={classes} onClick={(e) => click(e)}>
        {renderMarks()}

        <div className={`${classPrefix}-bar`} style={barStyle()}>
          {renderButtonWrapper()}
        </div>
      </div>
      {maxDescription !== null && (
        <div className={`${classPrefix}-max`}>{maxDescription || max}</div>
      )}
    </div>
  )
}

Range.displayName = 'NutRange'
