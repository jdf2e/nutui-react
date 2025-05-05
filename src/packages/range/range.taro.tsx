import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import { useTouch } from '@/hooks/use-touch'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { getRectInMultiPlatform } from '@/utils/taro/get-rect'
import { useRtl } from '../configprovider/index.taro'
import { harmony } from '@/utils/taro/platform'
import { TaroRangeProps, RangeValue } from '@/types'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  ...ComponentDefaults,
  range: false,
  min: 0,
  max: 100,
  step: 1,
  vertical: false,
  marks: {},
} as TaroRangeProps

const isHm = harmony()
const classPrefix = 'nut-range'
const verticalClassPrefix = `${classPrefix}-vertical`

const isSameValue = (newValue: RangeValue, oldValue: RangeValue) =>
  JSON.stringify(newValue) === JSON.stringify(oldValue)

const handleOverlap = (value: number[]) =>
  value[0] > value[1] ? value.slice(0).reverse() : value

export const Range: FunctionComponent<
  Partial<TaroRangeProps> &
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
  } = mergeProps(defaultProps, props)

  const rtlClassPrefix = useMemo(
    () => `rtl-${vertical ? verticalClassPrefix : classPrefix}`,
    [vertical]
  )
  const [buttonIndex, setButtonIndex] = useState(0)
  const [dragStatus, setDragStatus] = useState('start')
  const touch = useTouch()
  const root = useRef<HTMLDivElement>(null)
  const [marksList, setMarksList] = useState<number[]>([])
  const [startValue, setStartValue] = useState<any>(0)
  const scope = useMemo(() => {
    if (max <= min) {
      console.log('max 的值需要大于 min的值')
      return 0
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
    [`${classPrefix}-native`]: isHm,
  })
  const containerClasses = classNames(
    `${classPrefix}-container`,
    {
      [`${classPrefix}-container-native`]: isHm,
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
    return isRange(modelVal)
      ? `${((modelVal[1] - modelVal[0]) * 100) / scope}%`
      : `${((modelVal - min) * 100) / scope}%`
  }, [current, isRange, min, scope])

  const calcOffset = useCallback(() => {
    const modelVal = current as any
    return isRange(modelVal) ? `${((modelVal[0] - min) * 100) / scope}%` : '0%'
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

  const handleClick = useCallback(
    async (event: any) => {
      if (disabled || !root.current) return

      setDragStatus('')
      const rect = await getRectInMultiPlatform(root.current)
      const x = event.detail?.x ?? event.clientX

      let delta = x - rect.left
      let total = rect.width

      if (vertical) {
        const y = event.detail?.y ?? event.clientY
        delta = y - rect.top
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
      if (disabled) return
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
      // @TODO RN、鸿蒙端垂直滑动时，页面会一同滑动，待解决
      if (disabled || !root.current) return

      if (dragStatus === 'start') onStart && onStart()
      touch.move(event)
      setDragStatus('draging')

      const rect = await getRectInMultiPlatform(root.current)
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
    if (disabled) return
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

  const buttonNumberTransform = useMemo(() => {
    return vertical ? 'translate(100%, -50%)' : 'translate(-50%, -100%)'
  }, [vertical])

  const renderButton = useCallback(
    (index?: number) => (
      <>
        {button || (
          <View
            className={classNames(`${classPrefix}-button`, {
              [`${verticalClassPrefix}-button`]: vertical,
              [`${rtlClassPrefix}-button`]: rtl,
            })}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {currentDescription !== null && (
              <Text
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
              </Text>
            )}
          </View>
        )}
      </>
    ),
    [
      button,
      buttonNumberTransform,
      curValue,
      currentDescription,
      rtl,
      rtlClassPrefix,
      vertical,
    ]
  )
  const renderMarks = useCallback(() => {
    if (marksList.length <= 0) return null
    const markcls = classNames(`${classPrefix}-mark`, {
      [`${verticalClassPrefix}-mark`]: vertical,
      [`${rtlClassPrefix}-mark`]: rtl,
      [`${vertical ? verticalClassPrefix : classPrefix}-mark-hm`]: isHm,
    })
    const textcls = classNames(`${classPrefix}-mark-text`, {
      [`${verticalClassPrefix}-mark-text`]: vertical,
    })
    return (
      <View className={markcls}>
        {marksList.map((mark: any) => (
          <View
            key={mark}
            className={markClassName(mark)}
            style={marksStyle(mark)}
          >
            <Text className={textcls}>
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
        ))}
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

  const renderRangeButton = useCallback(() => {
    return [0, 1].map((_, index) => {
      const isLeft = index === 0
      const suffix = isLeft ? 'left' : 'right'
      const cls = classNames(`${classPrefix}-button-wrapper-${suffix}`, {
        [`${verticalClassPrefix}-button-wrapper-${suffix}`]: vertical,
        [`${rtlClassPrefix}-button-wrapper-${suffix}`]: rtl,
      })

      return (
        <View
          key={index}
          className={cls}
          style={{
            transform: 'translate(-50%, -50%)',
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
        </View>
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

  const renderSingleButton = useCallback(
    () => (
      <View
        catchMove
        className={classNames(`${classPrefix}-button-wrapper`, {
          [`${verticalClassPrefix}-button-wrapper`]: vertical,
        })}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {renderButton()}
      </View>
    ),
    [onTouchEnd, onTouchMove, onTouchStart, renderButton, vertical]
  )

  const renderButtonWrapper = useCallback(() => {
    return range ? renderRangeButton() : renderSingleButton()
  }, [renderRangeButton, renderSingleButton, range])

  return (
    <View className={containerClasses} style={style}>
      {minDescription !== null && (
        <Text className={`${classPrefix}-min`}>{minDescription || min}</Text>
      )}
      <View ref={root} className={classes} onClick={handleClick}>
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
