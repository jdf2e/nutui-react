import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
} from 'react'

import bem from '@/utils/bem'

export interface CountUpProps {
  maxLen: number
  endNumber: string
  delaySpeed?: number
  easeSpeed: number
  thousands: boolean
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  maxLen: 0,
  endNumber: '',
  delaySpeed: 300,
  easeSpeed: 1,
  thousands: false,
  className: '',
} as CountUpProps
export const CountUp: FunctionComponent<Partial<CountUpProps>> = (props) => {
  const {
    maxLen,
    endNumber,
    delaySpeed,
    easeSpeed,
    className,
    thousands,
    ...reset
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('countup')
  const countupRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef(0)
  const numbers = Array.from({ length: 10 }, (v, i) => i)

  const getShowNumber = () => {
    const splitArr = endNumber.split('.')
    const intNumber =
      maxLen && splitArr[0].length < maxLen
        ? (Array(maxLen).join('0') + splitArr[0]).slice(-maxLen)
        : splitArr[0]
    const currNumber = `${
      thousands ? intNumber.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : intNumber
    }${splitArr[1] ? '.' : ''}${splitArr[1] || ''}`
    return currNumber.split('')
  }

  const numerArr = getShowNumber()

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
    transition: `transform ${easeSpeed}s ease-in-out`,
  }

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      setNumberTransform()
    }, delaySpeed)
    return () => {
      window.clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    setNumberTransform()
  }, [numerArr])

  return (
    <div className={`${b()} ${className}`} ref={countupRef}>
      <ul className={b('list')}>
        {numerArr.map((item: string, idx: number) => {
          return (
            <li
              className={`${b('listitem', {
                number: !Number.isNaN(Number(item)),
              })}`}
              key={idx}
            >
              {!Number.isNaN(Number(item)) ? (
                <span className={b('number')} style={numberEaseStyle}>
                  {[...numbers, ...numbers].map((number, subidx) => {
                    return <span key={subidx}>{number}</span>
                  })}
                </span>
              ) : (
                <span className={b('separator')}>{item}</span>
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
