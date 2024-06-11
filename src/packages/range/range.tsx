import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
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
    range,
    disabled,
    button,
    vertical,
    marks,
    onChange,
    onStart,
    onEnd,
    minDescription,
    maxDescription,
    currentDescription,
    min,
    max,
    step,
    value,
    defaultValue,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-range'
  const verticalClassPrefix = `${classPrefix}-vertical`
  const rtlClassPrefix = `rtl-${vertical ? verticalClassPrefix : classPrefix}`
  const [buttonIndex, setButtonIndex] = useState(0)
  const [dragStatus, setDragStatus] = useState('start' || 'draging' || '')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)
  const [marksList, setMarksList] = useState<number[]>([])

  const [startValue, setStartValue] = useState<any>(0)

  const handleChange = (value: RangeValue) => {
    onChange && onChange(value)
  }
  const [current, setCurrent] = usePropsValue<RangeValue>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: handleChange,
  })

  const [exactValue, setEaxctValue] = useState<RangeValue>(
    () => value || defaultValue || 0
  )
  const marksRef = useRef<{ [key: string]: any }>({})
  useEffect(() => {
    if (marks) {
      if (Array.isArray(marks)) {
        // 增加变量
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
  }, [marks])

  const scope = () => {
    return max - min
  }

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
        `${classPrefix}-text`,
        `${isActive ? `${classPrefix}-text-active` : ''}`,
      ]

      if (vertical) {
        classNames.push(`${verticalClassPrefix}-text`)
        isActive && classNames.push(`${verticalClassPrefix}-text-active`)
      }

      if (rtl) {
        classNames.push(`${rtlClassPrefix}-mark-text`)
      }

      return classNames.join(' ')
    },
    [range, current, min, max]
  )

  const isRange = (val: any) => {
    return !!range && Array.isArray(val)
  }

  const calcMainAxis = () => {
    const modelVal = current as any
    if (isRange(modelVal)) {
      return `${((modelVal[1] - modelVal[0]) * 100) / scope()}%`
    }
    return `${((modelVal - min) * 100) / scope()}%`
  }

  const calcOffset = () => {
    const modelVal = current as any
    if (isRange(modelVal)) {
      return `${((modelVal[0] - min) * 100) / scope()}%`
    }
    return `0%`
  }

  const barStyle = () => {
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
  }

  const marksStyle = (mark: any) => {
    const dir = rtl ? 'right' : 'left'
    let style: any = {
      [dir]: `${((mark - min) / scope()) * 100}%`,
    }
    if (vertical) {
      style = {
        top: `${((mark - min) / scope()) * 100}%`,
      }
    }
    return style
  }

  const tickClass = (mark: any) => {
    if (range && Array.isArray(current)) {
      return mark <= current[1] && mark >= current[0]
    }
    return mark <= current
  }

  const format = (value: number) => {
    value = Math.max(+min, Math.min(value, +max))
    return Math.round(value / +step) * +step
  }

  const isSameValue = (newValue: RangeValue, oldValue: RangeValue) => {
    return JSON.stringify(newValue) === JSON.stringify(oldValue)
  }

  const handleOverlap = (value: number[]) => {
    if (value[0] > value[1]) {
      return value.slice(0).reverse()
    }
    return value
  }
  const updateValue = (value: any, end?: boolean) => {
    if (isRange(value)) {
      value = handleOverlap(value).map(format)
    } else {
      value = format(value)
    }
    if (!isSameValue(value, current)) {
      setCurrent(value)
    }
    end && onEnd && onEnd(value)
  }

  const click = (event: any) => {
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
    const value = min + (delta / total) * scope()
    setEaxctValue(current)
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
  }

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (disabled) {
      return
    }
    touch.start(event)
    setEaxctValue(current)
    if (isRange(current)) {
      setStartValue((current as number[]).map(format))
    } else {
      setStartValue(format(current as number))
    }

    setDragStatus('start')
  }

  const onTouchMove = (event: TouchEvent<HTMLDivElement>) => {
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
    let diff = (delta / total) * scope()
    diff = rtl ? -diff : diff
    if (vertical) {
      delta = touch.deltaY.current
      total = rect.height
      diff = (delta / total) * scope()
    }
    let newValue
    if (isRange(startValue)) {
      newValue = (exactValue as number[]).slice()
      newValue[buttonIndex] = startValue[buttonIndex] + diff
    } else {
      newValue = startValue + diff
    }
    setEaxctValue(newValue)
    updateValue(newValue)
  }

  const onTouchEnd = () => {
    if (disabled) {
      return
    }
    if (dragStatus === 'draging') {
      updateValue(current, true)
    }
    setDragStatus('')
  }

  const curValue = (idx?: number) => {
    const modelVal = current as any
    const value = typeof idx === 'number' ? modelVal[idx] : modelVal
    return value
  }

  const renderButton = (index?: number) => {
    return (
      <>
        {button || (
          <div
            className={classNames(`${classPrefix}-button`, {
              [`${verticalClassPrefix}-button`]: vertical,
              [`${rtlClassPrefix}-button`]: rtl,
            })}
          >
            {currentDescription !== null && (
              <div
                className={classNames(`${classPrefix}-button-number`, {
                  [`${verticalClassPrefix}-button-number`]: vertical,
                  [`${rtlClassPrefix}-button-number`]: rtl,
                })}
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
  }

  return (
    <div className={containerClasses}>
      {minDescription !== null && (
        <div className={`${classPrefix}-min`}>{minDescription || min}</div>
      )}
      <div ref={root} className={classes} onClick={(e) => click(e)}>
        {marksList.length > 0 && (
          <div
            className={classNames(`${classPrefix}-mark`, {
              [`${verticalClassPrefix}-mark`]: vertical,
              [`${rtlClassPrefix}-mark`]: rtl,
            })}
          >
            {marksList.map((mark: any) => {
              return (
                <span
                  key={mark}
                  className={markClassName(mark)}
                  style={marksStyle(mark)}
                >
                  {Array.isArray(marks) ? marksRef.current[mark] : marks[mark]}
                  <span
                    className={classNames(`${classPrefix}-tick`, {
                      [`${verticalClassPrefix}-tick`]: vertical,
                      [`${vertical ? verticalClassPrefix : classPrefix}-tick-active`]:
                        tickClass(mark),
                      [`${rtlClassPrefix}-tick`]: rtl,
                    })}
                  />
                </span>
              )
            })}
          </div>
        )}

        <div className={`${classPrefix}-bar`} style={barStyle()}>
          {range ? (
            [0, 1].map((item, index) => {
              const isLeft = index === 0
              const isRight = index === 1
              return (
                <div
                  key={index}
                  className={classNames({
                    [`${classPrefix}-button-wrapper-left`]: isLeft,
                    [`${classPrefix}-button-wrapper-right`]: isRight,
                    [`${verticalClassPrefix}-button-wrapper-left`]:
                      isLeft && vertical,
                    [`${verticalClassPrefix}-button-wrapper-right`]:
                      isRight && vertical,
                    [`${rtlClassPrefix}-button-wrapper-left`]: isLeft && rtl,
                    [`${rtlClassPrefix}-button-wrapper-right`]: isRight && rtl,
                  })}
                  onTouchStart={(e) => {
                    if (typeof index === 'number') {
                      // 实时更新当前拖动的按钮索引
                      setButtonIndex(index)
                    }
                    onTouchStart(e)
                  }}
                  onTouchMove={(e) => onTouchMove(e)}
                  onTouchEnd={onTouchEnd}
                  onTouchCancel={onTouchEnd}
                  onClick={(e) => e.stopPropagation()}
                >
                  {renderButton(index)}
                </div>
              )
            })
          ) : (
            <div
              className={classNames(`${classPrefix}-button-wrapper`, {
                [`${verticalClassPrefix}-button-wrapper`]: vertical,
              })}
              onTouchStart={(e) => onTouchStart(e)}
              onTouchMove={(e) => onTouchMove(e)}
              onTouchEnd={onTouchEnd}
              onTouchCancel={onTouchEnd}
              onClick={(e) => e.stopPropagation()}
            >
              {renderButton()}
            </div>
          )}
        </div>
      </div>
      {maxDescription !== null && (
        <div className={`${classPrefix}-max`}>{maxDescription || max}</div>
      )}
    </div>
  )
}

Range.displayName = 'NutRange'
