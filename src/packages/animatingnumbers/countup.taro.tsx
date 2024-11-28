import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react'
import { View, Text } from '@tarojs/components'
import { createSelectorQuery } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'

export interface CountUpProps extends BasicComponent {
  length: number
  value: string
  delay?: number
  duration: number
  thousands: boolean
}
const defaultProps = {
  ...ComponentDefaults,
  length: 0,
  value: '',
  delay: 300,
  duration: 1,
  thousands: false,
} as CountUpProps
export const CountUp: FunctionComponent<Partial<CountUpProps>> = (props) => {
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
      createSelectorQuery()
        .selectAll('.nut-countup-listitem')
        .node((numberItems: any) => {
          const transformArrCache: CSSProperties[] = []
          Object.keys(numberItems).forEach((key: any) => {
            const elem = numberItems[Number(key)] as HTMLElement
            const idx = Number(numberArr[Number(key)])
            const enabled =
              elem && typeof idx === 'number' && !Number.isNaN(idx)
            if (enabled) {
              // 计算规则：父元素和实际列表高度的百分比，分割成20等份
              const transform =
                idx || idx === 0
                  ? `translate(0, -${(idx === 0 ? 10 : idx) * 5}%)`
                  : ''
              transformArrCache.push({
                transitionDuration: `${duration}s`,
                transform,
              } as CSSProperties)
            }
          })
          setTransformArr([...transformArrCache])
        })
        .exec()
    }
  }, [numberArr])

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
