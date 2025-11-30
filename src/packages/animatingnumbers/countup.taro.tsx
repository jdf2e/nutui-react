import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react'
import { View, Text } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { TaroCountUpProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  length: 0,
  value: '',
  delay: 300,
  duration: 1,
  thousands: false,
} as TaroCountUpProps
export const CountUp: FunctionComponent<Partial<TaroCountUpProps>> = (
  props
) => {
  const {
    length,
    value,
    delay,
    duration,
    className,
    thousands,
    style,
    ...rest
  } = mergeProps(defaultProps, props)
  const classPrefix = 'nut-countup'
  const countupRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const numbers = Array.from({ length: 10 }, (v, i) => i)

  const getShowNumber = useCallback(() => {
    const splitArr = value.split('.')
    const intNumber =
      length && splitArr[0].length < length
        ? (Array(length).join('0') + splitArr[0]).slice(-length)
        : splitArr[0]
    const currNumber = `${
      thousands ? intNumber.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : intNumber
    }${splitArr[1] ? '.' : ''}${splitArr[1] || ''}`
    return currNumber.split('')
  }, [length, thousands, value])

  const [numberArr, setNumberArr] = useState<string[]>([])
  const [transformArr, setTransformArr] = useState<CSSProperties[]>([])
  const isLoaded = useRef(false)

  const setNumberTransform = useCallback(() => {
    if (countupRef.current && numberArr.length) {
      // 直接创建与numberArr长度匹配的transform数组
      const newTransformArr: CSSProperties[] = []

      numberArr.forEach((item, idx) => {
        const numValue = Number(item)
        if (!Number.isNaN(numValue)) {
          // 直接使用数字值计算正确的滚动位置
          newTransformArr[idx] = {
            transitionDuration: `${duration}s`,
            transform: `translate(0, -${numValue * 5}%)`,
          }
        }
      })

      setTransformArr(newTransformArr)
    }
  }, [numberArr, duration])

  useEffect(() => {
    if (numberArr.length) {
      if (!isLoaded.current) {
        isLoaded.current = true
        // @ts-ignore
        timerRef.current = setTimeout(() => {
          setNumberTransform()
        }, delay)
      } else {
        setNumberTransform()
      }
    }
    return () => {
      clearTimeout(timerRef.current)
      isLoaded.current = false
    }
  }, [numberArr, delay, setNumberTransform])

  useEffect(() => {
    setNumberArr(getShowNumber())
  }, [value, getShowNumber])

  return (
    <View className={`${classPrefix} ${className}`} ref={countupRef} {...rest}>
      <View className={`${classPrefix}-list`}>
        {numberArr.map((item: string, idx: number) => {
          return (
            <View
              className={`${classPrefix}-listitem ${
                !Number.isNaN(Number(item))
                  ? `${classPrefix}-listitem-number`
                  : ''
              }`}
              key={idx}
            >
              {!Number.isNaN(Number(item)) ? (
                <View
                  className={`${classPrefix}-number`}
                  style={transformArr?.[idx]}
                >
                  {[...numbers, ...numbers].map((number, subidx) => {
                    return (
                      <Text
                        className={`${classPrefix}-number-text`}
                        key={subidx}
                      >
                        {number}
                      </Text>
                    )
                  })}
                </View>
              ) : (
                <View className={`${classPrefix}-separator`}>{item}</View>
              )}
            </View>
          )
        })}
      </View>
    </View>
  )
}

CountUp.displayName = 'NutCountUp'
