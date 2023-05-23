import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
} from 'react'
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

  const numerArr = useMemo(getShowNumber, [value, length, thousands])

  const setNumberTransform = () => {
    if (countupRef.current) {
      const numberItems = countupRef.current.querySelectorAll(
        '.nut-countup__number'
      )
      const numberFilterArr: Array<string> = numerArr.filter(
        (item: string) => !Number.isNaN(Number(item))
      )
      Object.keys(numberItems).forEach((key) => {
        const elem = numberItems[Number(key)] as HTMLElement
        const idx = Number(numberFilterArr[Number(key)])
        if ((idx || idx === 0) && elem) {
          // 计算规则：父元素和实际列表高度的百分比，分割成20等份
          const transform = `translate(0, -${(idx === 0 ? 10 : idx) * 5}%)`
          elem.style.transform = transform
          elem.style.webkitTransform = transform
        }
      })
    }
  }

  const numberEaseStyle: CSSProperties = {
    transition: `transform ${duration}s ease-in-out`,
  }

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      setNumberTransform()
    }, delay)
    return () => {
      window.clearTimeout(timerRef.current)
    }
  }, [numerArr])

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
                  style={numberEaseStyle}
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
