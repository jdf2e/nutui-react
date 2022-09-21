import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  CSSProperties,
  useCallback,
} from 'react'
import { useTouch } from '../../utils/useTouch'
import { getRectByTaro } from '../../utils/useClientRect'
import Toast from '@/packages/toast/index.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

type SliderValue = number | number[]
export interface RangeProps {
  className: string
  style: CSSProperties
  range: boolean
  disabled: boolean
  activeColor: string
  inactiveColor: string
  buttonColor: string
  hiddenRange: boolean
  hiddenTag: boolean
  min: number | string
  max: number | string
  step: number | string
  modelValue: SliderValue
  button: React.ReactNode
  vertical: boolean
  marks: Record<string, unknown>
  change?: (value: number) => void
  dragStart?: () => void
  dragEnd?: () => void
}
const defaultProps = {
  range: false,
  hiddenRange: false,
  hiddenTag: false,
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
  Partial<RangeProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    range,
    disabled,
    activeColor,
    inactiveColor,
    buttonColor,
    hiddenRange,
    hiddenTag,
    modelValue,
    button,
    vertical,
    marks,
    change,
    dragStart,
    dragEnd,
  } = { ...defaultProps, ...props }

  let { min, max, step } = { ...defaultProps, ...props }
  min = Number(min)
  max = Number(max)
  step = Number(step)

  const [buttonIndex, SetButtonIndex] = useState(0)
  const [initValue, SetInitValue] = useState<number | number[] | any>()

  const [dragStatus, SetDragStatus] = useState('start' || 'draging' || '')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)

  const [marksList, SetMarksList] = useState([])

  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }

  useEffect(() => {
    if (modelValue) {
      if (!range && (modelValue < min || modelValue > max)) {
        SetInitValue(0)
        // Toast.text(`${modelValue} ${locale.range.rangeText}`)
        toastShow(`${modelValue} ${locale.range.rangeText}`)
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
    return Number(max) - Number(min)
  }

  const classes = useCallback(() => {
    const prefixCls = 'nut-range'
    return [
      prefixCls,
      `${disabled ? `${prefixCls}-disabled` : ''}`,
      `${vertical ? `${prefixCls}-vertical` : ''}`,
      `${!hiddenRange ? `${prefixCls}-show-number` : ''}`,
    ]
      .filter(Boolean)
      .join(' ')
  }, [disabled, vertical, hiddenRange])

  const containerClasses = useCallback(() => {
    const prefixCls = 'nut-range-container'
    return [prefixCls, `${vertical ? `${prefixCls}-vertical` : ''}`, className]
      .filter(Boolean)
      .join(' ')
  }, [vertical, className])

  const markClassName = useCallback(
    (mark: any) => {
      const classPrefix = 'nut-range-mark'
      let lowerBound: any = Number(min)
      let upperBound: any = Number(max)
      if (range) {
        const [left, right] = modelValue as any
        lowerBound = left
        upperBound = right
      } else {
        upperBound = modelValue
      }
      const isActive = mark <= upperBound && mark >= lowerBound
      return [
        `${classPrefix}-text`,
        `${isActive ? `${classPrefix}-text-active` : ''}`,
      ]
        .filter(Boolean)
        .join(' ')
    },
    [range, modelValue, min, max]
  )

  const [rangeName, setRangeName] = useState(classes())
  const [containerName, setContainerName] = useState(containerClasses())

  useEffect(() => {
    setRangeName(classes())
    setContainerName(containerClasses())
  }, [classes, containerClasses])

  const wrapperStyle = () => {
    return {
      background: inactiveColor,
    }
  }
  const buttonStyle = () => {
    return {
      borderColor: buttonColor,
    }
  }

  const isRange = (val: any) => {
    return !!range && Array.isArray(val)
  }

  const calcMainAxis = () => {
    const modelVal = initValue || initValue === 0 ? initValue : modelValue
    if (isRange(modelVal)) {
      return `${((modelVal[1] - modelVal[0]) * 100) / scope()}%`
    }
    return `${((modelVal - Number(min)) * 100) / scope()}%`
  }

  const calcOffset = () => {
    const modelVal = initValue || initValue === 0 ? initValue : modelValue
    if (isRange(modelVal)) {
      return `${((modelVal[0] - Number(min)) * 100) / scope()}%`
    }
    return `0%`
  }

  const barStyle = () => {
    if (vertical) {
      return {
        height: calcMainAxis(),
        top: calcOffset(),
        background: activeColor,
        transition: dragStatus ? 'none' : undefined,
      }
    }
    return {
      width: calcMainAxis(),
      left: calcOffset(),
      background: activeColor,
      transition: dragStatus ? 'none' : undefined,
    }
  }

  const marksStyle = (mark: any) => {
    let style: any = {
      left: `${((mark - Number(min)) / scope()) * 100}%`,
    }
    if (vertical) {
      style = {
        top: `${((mark - Number(min)) / scope()) * 100}%`,
      }
    }
    return style
  }
  const tickStyle = (mark: any) => {
    let lowerBound: any = Number(min)
    let upperBound: any = Number(max)
    if (range) {
      const [left, right] = modelValue as any
      lowerBound = left
      upperBound = right
    }
    const isActive = mark <= upperBound && mark >= lowerBound
    const style: any = {
      background: !isActive ? inactiveColor : activeColor,
    }

    return style
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
      change && change(value)
    }
  }

  const click = async (event: any) => {
    if (disabled || !root.current) {
      return
    }
    SetDragStatus('')
    const rect = await getRectByTaro(root.current)
    let delta = event.detail.x - rect.left
    let total = rect.width
    if (vertical) {
      delta = event.detail.y - rect.top
      total = rect.height
    }
    const value = Number(min) + (delta / total) * scope()
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

  const onTouchMove = async (event: TouchEvent) => {
    if (disabled || !root.current) {
      return
    }
    if (dragStatus === 'start') {
      dragStart && dragStart()
    }

    touch.move(event)

    SetDragStatus('draging')

    const rect = await getRectByTaro(root.current)
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
      dragEnd && dragEnd()
    }
    SetDragStatus('')
  }

  const curValue = (idx?: number) => {
    const modelVal = initValue || initValue === 0 ? initValue : modelValue
    const value = typeof idx === 'number' ? modelVal[idx] : modelVal
    return value
  }

  return (
    <div className={`${containerName}`}>
      {!hiddenRange ? <div className="min">{+min}</div> : null}
      <div
        ref={root}
        style={wrapperStyle()}
        className={`${rangeName}`}
        onClick={(e) => {
          click(e)
        }}
      >
        {marksList.length > 0 ? (
          <div className="nut-range-mark">
            {marksList.map((marks: any) => {
              return (
                <span
                  key={marks}
                  className={markClassName(marks)}
                  style={marksStyle(marks)}
                >
                  {marks}
                  <span className="nut-range-tick" style={tickStyle(marks)} />
                </span>
              )
            })}
          </div>
        ) : null}

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
                  aria-orientation="horizontal"
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
                  {button || (
                    <div className="nut-range-button" style={buttonStyle()}>
                      {!hiddenTag ? (
                        <div className="number">{curValue(index)}</div>
                      ) : null}
                    </div>
                  )}
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
              aria-orientation="horizontal"
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
              {button || (
                <div className="nut-range-button" style={buttonStyle()}>
                  {!hiddenTag ? (
                    <div className="number">{curValue()}</div>
                  ) : null}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {!hiddenRange ? <div className="max">{+max}</div> : null}
      <Toast
        type="text"
        visible={show}
        msg={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      />
    </div>
  )
}

Range.defaultProps = defaultProps
Range.displayName = 'NutRange'
