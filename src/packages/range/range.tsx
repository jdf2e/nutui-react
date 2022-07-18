import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  CSSProperties,
} from 'react'
import bem from '@/utils/bem'
import { useTouch } from '../../utils/useTouch'
import { useRect } from '../../utils/useRect'
import Toast from '@/packages/toast'
import { useConfig } from '@/packages/configprovider'

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
} as RangeProps

let startValue: any
let currentValue: any

export const Range: FunctionComponent<
  Partial<RangeProps> & React.HTMLAttributes<HTMLDivElement>
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
    min,
    max,
    step,
    modelValue,
    button,
    change,
    dragStart,
    dragEnd,
  } = { ...defaultProps, ...props }
  const [buttonIndex, SetButtonIndex] = useState(0)
  const [initValue, SetInitValue] = useState<number | number[] | any>()

  const [dragStatus, SetDragStatus] = useState('start' || 'draging' || '')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)
  const rangeBem = bem('range')

  useEffect(() => {
    if (modelValue) {
      if (!range && (modelValue < min || modelValue > max)) {
        SetInitValue(0)
        Toast.text(`${modelValue} ${locale.range.rangeText}`)
        return
      }
      SetInitValue(modelValue)
    }
  }, [modelValue])

  const scope = () => {
    return Number(max) - Number(min)
  }

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
    return {
      width: calcMainAxis(),
      left: calcOffset(),
      background: activeColor,
      transition: dragStatus ? 'none' : undefined,
    }
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

    if (end && !isSameValue(value, startValue)) {
      change && change(value)
    }
  }

  const onTouchStart = (event: TouchEvent) => {
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
      dragStart && dragStart()
    }

    touch.move(event)

    SetDragStatus('draging')

    const rect = useRect(root.current)
    const delta = touch.deltaX
    const total = rect.width
    const diff = (delta / total) * scope()

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
    <div className={`nut-range-container ${className || ''}`}>
      {!hiddenRange ? <div className="min">{+min}</div> : null}
      <div
        ref={root}
        style={wrapperStyle()}
        className={`${rangeBem()} ${disabled ? rangeBem('disabled') : ''} ${
          !hiddenRange ? rangeBem('show-number') : ''
        }`}
      >
        <div className="nut-range-bar" style={barStyle()}>
          {range ? (
            [0, 1].map((item, index) => {
              return (
                <div
                  role="slider"
                  key={index}
                  className={`${
                    index == 0 ? 'nut-range-button-wrapper-left' : ''
                  }
              ${index == 1 ? 'nut-range-button-wrapper-right' : ''}`}
                  tabIndex={disabled ? -1 : 0}
                  aria-valuemin={+min}
                  aria-valuenow={curValue(index)}
                  aria-valuemax={+max}
                  aria-orientation="horizontal"
                  onTouchStart={(e: any) => {
                    e.preventDefault
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
              onTouchStart={(e: any) => {
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
    </div>
  )
}

Range.defaultProps = defaultProps
Range.displayName = 'NutRange'
