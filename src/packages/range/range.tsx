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
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type SliderValue = number | number[]
export interface RangeProps extends BasicComponent {
  range: boolean
  disabled: boolean
  min: number
  max: number
  step: number
  minDescription: ReactNode
  maxDescription: ReactNode
  modelValue: SliderValue
  button: ReactNode
  vertical: boolean
  marks: Record<string, unknown>
  currentDescription: ((value: SliderValue) => ReactNode) | null
  onChange: (value: number) => void
  onStart: () => void
  onEnd: () => void
}
const defaultProps = {
  ...ComponentDefaults,
  range: false,
  min: 0,
  max: 100,
  step: 1,
  modelValue: 0,
  vertical: false,
  marks: {},
} as RangeProps

let startValue: any
let currentValue: any

export const Range: FunctionComponent<
  Partial<RangeProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    range,
    disabled,
    modelValue,
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
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-range'
  const [buttonIndex, SetButtonIndex] = useState(0)
  const [initValue, SetInitValue] = useState<number | number[] | any>()
  const [dragStatus, SetDragStatus] = useState('start' || 'draging' || '')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)
  const [marksList, SetMarksList] = useState([])

  useEffect(() => {
    if (typeof modelValue === 'number') {
      if (!range && (modelValue < min || modelValue > max)) {
        SetInitValue(0)
        console.warn(`${modelValue} ${locale.range.rangeText}`)
        return
      }
      SetInitValue(modelValue)
    }
  }, [modelValue])

  useEffect(() => {
    if (marks) {
      const marksKeys = Object.keys(marks)
      const list: any = marksKeys
        .map(parseFloat)
        .sort((a, b) => a - b)
        .filter((point) => point >= min && point <= max)
      SetMarksList(list)
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
      if (range && Array.isArray(modelValue)) {
        lowerBound = modelValue[0]
        upperBound = modelValue[1]
      } else {
        upperBound = modelValue as number
      }
      const isActive = mark <= upperBound && mark >= lowerBound
      return [
        `${classPrefix}-text`,
        `${isActive ? `${classPrefix}-text-active` : ''}`,
      ].join(' ')
    },
    [range, modelValue, min, max]
  )

  const isRange = (val: any) => {
    return !!range && Array.isArray(val)
  }

  const calcMainAxis = () => {
    const modelVal = initValue || initValue === 0 ? initValue : modelValue
    if (isRange(modelVal)) {
      return `${((modelVal[1] - modelVal[0]) * 100) / scope()}%`
    }
    return `${((modelVal - min) * 100) / scope()}%`
  }

  const calcOffset = () => {
    const modelVal = initValue || initValue === 0 ? initValue : modelValue
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
    if (range && Array.isArray(initValue)) {
      return mark <= initValue[1] && mark >= initValue[0]
    }
    return mark <= initValue
  }

  const format = (value: number) => {
    value = Math.max(+min, Math.min(value, +max))
    return Math.round(value / +step) * +step
  }

  const isSameValue = (newValue: SliderValue, oldValue: SliderValue) => {
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
    const modelVal = initValue || initValue === 0 ? initValue : modelValue

    if (!isSameValue(value, modelVal)) {
      SetInitValue(value)
    }

    if ((marks || end) && !isSameValue(value, startValue)) {
      onChange && onChange(value)
    }
  }

  const click = (event: any) => {
    if (disabled || !root.current) {
      return
    }
    SetDragStatus('')
    const rect = getRect(root.current)
    let delta = event.clientX - rect.left
    let total = rect.width
    if (vertical) {
      delta = event.clientY - rect.top
      total = rect.height
    }
    const value = min + (delta / total) * scope()
    currentValue = initValue || initValue === 0 ? initValue : modelValue
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
    currentValue = initValue || initValue === 0 ? initValue : modelValue
    if (isRange(currentValue)) {
      startValue = currentValue.map(format)
    } else {
      startValue = format(currentValue)
    }

    SetDragStatus('start')
  }

  const onTouchMove = (event: TouchEvent) => {
    if (disabled || !root.current) {
      return
    }
    if (dragStatus === 'start') {
      onStart && onStart()
    }

    touch.move(event)

    SetDragStatus('draging')

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
      onEnd && onEnd()
    }
    SetDragStatus('')
  }

  const curValue = (idx?: number) => {
    const modelVal = initValue || initValue === 0 ? initValue : modelValue
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
                      SetButtonIndex(index)
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
