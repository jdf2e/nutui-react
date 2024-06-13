import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
  useMemo,
} from 'react'
import { pxTransform } from '@tarojs/taro'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { useTouch } from '@/utils/use-touch'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { RangeMark, RangeValue } from './types'
import { useRtl } from '../configprovider/index.taro'
import { harmonyAndRn, rn } from '@/utils/platform-taro'

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

const isRn = rn()
const isNative = harmonyAndRn()
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

const getRect = async (ref: HTMLDivElement) => {
  if (isRn) {
    const rect = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    }
    await new Promise((resolve) => {
      // @ts-ignore
      ref.measure(
        (
          xPos: number,
          yPos: number,
          measureWidth: number,
          measureHeight: number,
          pageX: number,
          pageY: number
        ) => {
          rect.width = measureWidth
          rect.height = measureHeight
          rect.left = pageX
          rect.top = pageY
          resolve(rect)
        }
      )
    })

    return rect
  }

  const rect = await getRectByTaro(ref)
  return rect
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
  const scope = useMemo(() => max - min, [max, min])

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
  }, [marks, max, min])

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
          classNames.push(`${verticalClassPrefix}-text-wrapper-active`)
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
    if (isRange(modelVal)) {
      return `${((modelVal[1] - modelVal[0]) * 100) / scope}%`
    }
    return `${((modelVal - min) * 100) / scope}%`
  }, [current, isRange, min, scope])

  const calcOffset = useCallback(() => {
    const modelVal = current as any
    if (isRange(modelVal)) {
      return `${((modelVal[0] - min) * 100) / scope}%`
    }
    return `0%`
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
    async (event: any) => {
      if (disabled || !root.current) {
        return
      }
      setDragStatus('')
      const rect = await getRect(root.current)
      let delta = (event.detail.x ? event.detail.x : event.clientX) - rect.left
      let total = rect.width
      if (vertical) {
        delta = (event.detail.y ? event.detail.y : event.clientY) - rect.top
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
    async (event: any) => {
      // @TODO RN 端垂直滑动时，页面会一同滑动，待解决
      if (disabled || !root.current) {
        return
      }
      if (dragStatus === 'start') {
        onStart && onStart()
      }

      touch.move(isRn ? event.nativeEvent : event)

      setDragStatus('draging')

      const rect = await getRect(root.current)
      if (!rect) return
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
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(0, -100%, 0)'
      const buttonNumberTransformRn = [
        { translateX: pxTransform(vertical ? 26 : 0) },
        { translateY: pxTransform(vertical ? 0 : -26) },
      ]

      return (
        <View>
          {button || (
            <View
              className={classNames(`${classPrefix}-button`, {
                [`${verticalClassPrefix}-button`]: vertical,
                [`${rtlClassPrefix}-button`]: rtl,
              })}
              style={isNative ? { borderRadius: pxTransform(13) } : {}}
            >
              {currentDescription !== null && (
                <Text
                  className={classNames(`${classPrefix}-button-number`, {
                    [`${verticalClassPrefix}-button-number`]: vertical,
                    [`${rtlClassPrefix}-button-number`]: rtl,
                  })}
                  style={{
                    // @ts-ignore
                    transform: isRn
                      ? buttonNumberTransformRn
                      : buttonNumberTransform,
                  }}
                >
                  {currentDescription
                    ? currentDescription(curValue(index))
                    : curValue(index)}
                </Text>
              )}
            </View>
          )}
        </View>
      )
    },
    [button, curValue, currentDescription, rtl, rtlClassPrefix, vertical]
  )

  const renderMarks = useCallback(() => {
    if (marksList.length <= 0) return null
    return (
      <View
        className={classNames(`${classPrefix}-mark`, {
          [`${verticalClassPrefix}-mark`]: vertical,
          [`${rtlClassPrefix}-mark`]: rtl,
        })}
      >
        {marksList.map((mark: any) => {
          return (
            <View
              key={mark}
              className={markClassName(mark)}
              style={marksStyle(mark)}
            >
              <Text
                className={`${vertical ? verticalClassPrefix : classPrefix}-mark-text`}
              >
                {Array.isArray(marks) ? marksRef.current[mark] : marks[mark]}
              </Text>
              <View
                className={classNames(
                  `${vertical ? verticalClassPrefix : classPrefix}-tick`,
                  {
                    [`${vertical ? verticalClassPrefix : classPrefix}-tick-active`]:
                      tickClass(mark),
                    [`${rtlClassPrefix}-tick`]: rtl,
                  }
                )}
              />
            </View>
          )
        })}
      </View>
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
    // @TODO 支持变量
    const wrapperTransformRN = [
      { translateX: pxTransform(vertical ? -12 : 13) },
      { translateY: pxTransform(vertical ? 13 : -13) },
    ]
    const wrapperTransform = vertical
      ? 'translate3d(-50%, 50%, 0)'
      : 'translate3d(50%, -50%, 0)'

    return isRn ? wrapperTransformRN : wrapperTransform
  }, [vertical])

  const renderButtonWrapper = useCallback(() => {
    if (range)
      return [0, 1].map((item, index) => {
        const isLeft = index === 0

        // @TODO 支持变量
        const transform = `translate3d(${isLeft || vertical ? '-' : ''}50%, ${vertical && !isLeft ? '' : '-'}50%, 0)`
        const transformRn = [
          {
            translateX: pxTransform(isLeft || vertical ? -12 : 13),
          },
          {
            translateY: pxTransform(vertical && !isLeft ? 13 : -13),
          },
        ]
        const suffix = isLeft ? 'left' : 'right'

        return (
          <View
            key={index}
            className={classNames(`${classPrefix}-button-wrapper-${suffix}`, {
              [`${verticalClassPrefix}-button-wrapper-${suffix}`]: vertical,
              [`${rtlClassPrefix}-button-wrapper-${suffix}`]: rtl,
            })}
            style={{
              // @ts-ignore
              transform: isRn ? transformRn : transform,
            }}
            onTouchStart={(e: any) => {
              if (typeof index === 'number') {
                // 实时更新当前拖动的按钮索引
                setButtonIndex(index)
              }
              onTouchStart(e)
            }}
            onTouchMove={(e) => onTouchMove(e)}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
            onClick={(e) => !isRn && e.stopPropagation()}
          >
            {renderButton(index)}
          </View>
        )
      })

    return (
      <View
        catchMove
        className={classNames(`${classPrefix}-button-wrapper`, {
          [`${verticalClassPrefix}-button-wrapper`]: vertical,
        })}
        style={{
          // @ts-ignore
          transform: getWrapperTransform(),
        }}
        onTouchStart={(e) => onTouchStart(e)}
        onTouchMove={(e) => onTouchMove(e)}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={(e) => !isRn && e.stopPropagation()}
      >
        {renderButton()}
      </View>
    )
  }, [
    getWrapperTransform,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    range,
    renderButton,
    rtl,
    rtlClassPrefix,
    vertical,
  ])

  return (
    <View
      className={classNames(
        `${classPrefix}-container`,
        {
          [`${classPrefix}-container-native`]: isNative,
          [`${verticalClassPrefix}-container`]: vertical,
        },
        className
      )}
      style={style}
    >
      {minDescription !== null && (
        <Text className={`${classPrefix}-min`}>{minDescription || min}</Text>
      )}
      <View
        ref={root}
        className={classNames(classPrefix, {
          [`${classPrefix}-disabled`]: disabled,
          [verticalClassPrefix]: vertical,
          [`${classPrefix}-native`]: isNative,
        })}
        onClick={(e) => click(e)}
      >
        {renderMarks()}

        <View className={`${classPrefix}-bar`} style={barStyle()}>
          {renderButtonWrapper()}
        </View>
      </View>
      {maxDescription !== null && (
        <Text className={`${classPrefix}-max`}>{maxDescription || max}</Text>
      )}
    </View>
  )
}

Range.displayName = 'NutRange'
