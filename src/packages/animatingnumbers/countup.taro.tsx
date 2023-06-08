import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createSelectorQuery } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
    ...reset
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-countup'
  const countupRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef(0)
  const numbers = Array.from({ length: 10 }, (v, i) => i)

  const getShowNumber = () => {
    const splitArr = value.split('.')
    const intNumber =
      length && splitArr[0].length < length
        ? (Array(length).join('0') + splitArr[0]).slice(-length)
        : splitArr[0]
    const currNumber = `${
      thousands ? intNumber.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : intNumber
    }${splitArr[1] ? '.' : ''}${splitArr[1] || ''}`
    return currNumber.split('')
  }

  const [numerArr, setNumerArr] = useState<string[]>([])

  const [transformArr, setTransformArr] = useState<Array<string>>([])
  const isLoaded = useRef(false)

  const setNumberTransform = () => {
    if (countupRef.current && numerArr.length) {
      const query = createSelectorQuery()
        .selectAll('.nut-countup__listitem')
        .node((numberItems: any) => {
          const transformArrCache: string[] = []
          Object.keys(numberItems).forEach((key: any) => {
            const elem = numberItems[Number(key)] as HTMLElement
            const idx = Number(numerArr[Number(key)])
            if (elem) {
              // 计算规则：父元素和实际列表高度的百分比，分割成20等份
              const transform =
                idx || idx === 0
                  ? `translate(0, -${(idx === 0 ? 10 : idx) * 5}%)`
                  : ''
              transformArrCache.push(transform)
            }
          })
          setTransformArr([...transformArrCache])
        })
        .exec()
    }
  }

  const numberEaseStyle = (idx: number) => {
    return {
      transition: `transform ${duration}s ease-in-out`,
      transform: transformArr[idx] ? transformArr[idx] : null,
    } as CSSProperties
  }

  useEffect(() => {
    setNumberTransform()
  }, [numerArr])

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true
      timerRef.current = window.setTimeout(() => {
        setNumerArr(getShowNumber())
      }, delay)
    } else {
      setNumerArr(getShowNumber())
    }
    return () => {
      window.clearTimeout(timerRef.current)
    }
  }, [value])

  return (
    <div className={`${classPrefix} ${className}`} ref={countupRef}>
      <ul className={`${classPrefix}__list`}>
        {numerArr.map((item: string, idx: number) => {
          return (
            <li
              className={`${classPrefix}__listitem ${
                !Number.isNaN(Number(item))
                  ? `${classPrefix}__listitem--number`
                  : ''
              }`}
              key={idx}
            >
              {!Number.isNaN(Number(item)) ? (
                <span
                  className={`${classPrefix}__number`}
                  style={numberEaseStyle(idx)}
                >
                  {[...numbers, ...numbers].map((number, subidx) => {
                    return <span key={subidx}>{number}</span>
                  })}
                </span>
              ) : (
                <span className={`${classPrefix}__separator`}>{item}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CountUp.defaultProps = defaultProps
CountUp.displayName = 'NutCountUp'
