import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { useTouch } from '../../utils/use-touch'
import { getRect } from '../../utils/use-client-rect'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

type RangeValue = number | number[]
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
  marks: Record<string, unknown>
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

let currentValue: any

export const Range: FunctionComponent<
  Partial<RangeProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onClick' | 'onChange' | 'defaultValue'
    >
> = (props) => {
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
  const [buttonIndex, setButtonIndex] = useState(0)
  const [dragStatus, setDragStatus] = useState('start' || 'draging' || '')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)
  const [marksList, setMarksList] = useState([])

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

  useEffect(() => {
    if (marks) {
      const marksKeys = Object.keys(marks)
      const list: any = marksKeys
        .map(parseFloat)
        .sort((a, b) => a - b)
        .filter((point) => point >= min && point <= max)
      setMarksList(list)
    }
  }, [marks])

  const scope = () => {
    return max - min
  }

  const classes = classNames(classPrefix, {
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-vertical`]: vertical,
  })

  const containerClasses = classNames(`${classPrefix}-container`, className, {
    [`${classPrefix}-container-vertical`]: vertical,
  })

  const markClassName = useCallback(
    (mark: any) => {
      const classPrefix = 'nut-range-mark'
      let lowerBound = min
      let upperBound = max
      if (range && Array.isArray(current)) {
        lowerBound = current[0]
        upperBound = current[1]
      } else {
        upperBound = current as number
      }
      const isActive = mark <= upperBound && mark >= lowerBound
      return [
        `${classPrefix}-text`,
        `${isActive ? `${classPrefix}-text-active` : ''}`,
      ].join(' ')
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
    return {
      width: calcMainAxis(),
      left: calcOffset(),
      transition: dragStatus ? 'none' : undefined,
    }
  }

  const marksStyle = (mark: any) => {
    let style: any = {
      left: `${((mark - min) / scope()) * 100}%`,
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

    if ((marks || end) && !isSameValue(value, startValue)) {
      onChange && onChange(value)
    }
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
    currentValue = current as any
    if (isRange(currentValue)) {
      const [left, right] = currentValue as any
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

  const onTouchStart = (event: any) => {
    if (disabled) {
      return
    }
    touch.start(event)
    currentValue = current as any
    if (isRange(currentValue)) {
      setStartValue(currentValue.map(format))
    } else {
      setStartValue(format(currentValue))
    }

    setDragStatus('start')
  }

  const onTouchMove = (event: TouchEvent) => {
    if (disabled || !root.current) {
      return
    }
    if (dragStatus === 'start') {
      onStart && onStart()
    }

    touch.move(event)

    setDragStatus('draging')

    const rect = getRect(root.current)
    let delta = touch.deltaX
    let total = rect.width
    let diff = (delta / total) * scope()

    if (vertical) {
      delta = touch.deltaY
      total = rect.height
      diff = (delta / total) * scope()
    }

    if (isRange(startValue)) {
      currentValue[buttonIndex] = startValue[buttonIndex] + diff
    } else {
      currentValue = startValue + diff
    }
    updateValue(currentValue)
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (disabled) {
      return
    }
    if (dragStatus === 'draging') {
      updateValue(currentValue, true)
      onEnd && onEnd(currentValue)
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
          <div className="nut-range-button">
            {currentDescription !== null && (
              <div className="number">
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
        <div className="min">{minDescription || min}</div>
      )}
      <div
        ref={root}
        className={classes}
        onClick={(e) => {
          click(e)
        }}
      >
        {marksList.length > 0 && (
          <div className="nut-range-mark">
            {marksList.map((marks: any) => {
              return (
                <span
                  key={marks}
                  className={markClassName(marks)}
                  style={marksStyle(marks)}
                >
                  {marks}
                  <span
                    className={classNames('nut-range-tick', {
                      active: tickClass(marks),
                    })}
                  />
                </span>
              )
            })}
          </div>
        )}

        <div className="nut-range-bar" style={barStyle()}>
          {range ? (
            [0, 1].map((item, index) => {
              return (
                <div
                  role="slider"
                  key={index}
                  className={`${
                    index === 0 ? 'nut-range-button-wrapper-left' : ''
                  }
                  ${index === 1 ? 'nut-range-button-wrapper-right' : ''}`}
                  tabIndex={disabled ? -1 : 0}
                  aria-valuemin={+min}
                  aria-valuenow={curValue(index)}
                  aria-valuemax={+max}
                  aria-orientation={vertical ? 'vertical' : 'horizontal'}
                  onTouchStart={(e: any) => {
                    if (typeof index === 'number') {
                      // 实时更新当前拖动的按钮索引
                      setButtonIndex(index)
                    }
                    onTouchStart(e)
                  }}
                  onTouchMove={(e: any) => {
                    onTouchMove(e)
                  }}
                  onTouchEnd={(e: any) => {
                    onTouchEnd(e)
                  }}
                  onTouchCancel={(e: any) => {
                    onTouchEnd(e)
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  {renderButton(index)}
                </div>
              )
            })
          ) : (
            <div
              role="slider"
              className="nut-range-button-wrapper"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={+min}
              aria-valuenow={curValue()}
              aria-valuemax={+max}
              aria-orientation={vertical ? 'vertical' : 'horizontal'}
              onTouchStart={(e) => {
                onTouchStart(e)
              }}
              onTouchMove={(e: any) => {
                onTouchMove(e)
              }}
              onTouchEnd={(e: any) => {
                onTouchEnd(e)
              }}
              onTouchCancel={(e: any) => {
                onTouchEnd(e)
              }}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              {renderButton()}
            </div>
          )}
        </div>
      </div>
      {maxDescription !== null && (
        <div className="max">{maxDescription || max}</div>
      )}
    </div>
  )
}

Range.defaultProps = defaultProps
Range.displayName = 'NutRange'
