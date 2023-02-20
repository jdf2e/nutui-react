import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createSelectorQuery } from '@tarojs/taro'
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
      transition: `transform ${easeSpeed}s ease-in-out`,
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
      }, delaySpeed)
    } else {
      setNumerArr(getShowNumber())
    }
    return () => {
      window.clearTimeout(timerRef.current)
    }
  }, [endNumber])

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
                <span className={b('number')} style={numberEaseStyle(idx)}>
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
