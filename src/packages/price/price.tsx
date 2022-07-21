import React, { FunctionComponent } from 'react'

import bem from '@/utils/bem'

export interface PriceProps {
  price: number | string
  needSymbol: boolean
  symbol: string
  decimalDigits: number
  thousands: boolean
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  price: 0,
  needSymbol: true,
  symbol: '&yen;',
  decimalDigits: 2,
  thousands: false,
  className: '',
} as PriceProps
export const Price: FunctionComponent<Partial<PriceProps>> = (props) => {
  const {
    price,
    needSymbol,
    symbol,
    decimalDigits,
    thousands,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('price')
  const showSymbol = () => {
    return { __html: (needSymbol ? symbol : '') || '' }
  }
  const checkPoint = (price: string | number) => {
    return String(price).indexOf('.') > 0
  }
  const formatThousands = (num: any) => {
    if (Number(num) == 0) {
      num = 0
    }
    if (checkPoint(num)) {
      num = Number(num).toFixed(decimalDigits)
      num =
        typeof num.split('.') === 'string' ? num.split('.') : num.split('.')[0]
    } else {
      num = num.toString()
    }
    if (thousands) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
    return num
  }
  const formatDecimal = (decimalNum: any) => {
    if (Number(decimalNum) == 0) {
      decimalNum = 0
    }

    if (checkPoint(decimalNum)) {
      decimalNum = Number(decimalNum).toFixed(decimalDigits)
      decimalNum =
        typeof decimalNum.split('.') === 'string' ? 0 : decimalNum.split('.')[1]
    } else {
      decimalNum = 0
    }
    const result = `0.${decimalNum}`
    const resultFixed = Number(result).toFixed(decimalDigits)
    return String(resultFixed).substring(2, resultFixed.length)
  }
  return (
    <div className={`${b()} ${className}`} {...rest}>
      {needSymbol ? (
        <div
          className={`${b('symbol')}`}
          dangerouslySetInnerHTML={showSymbol()}
        />
      ) : null}
      <div className={`${b('big')}`}>{formatThousands(price)}</div>
      <div className={`${b('point')}`}>.</div>
      <div className={`${b('small')}`}>{formatDecimal(price)}</div>
    </div>
  )
}

Price.defaultProps = defaultProps
Price.displayName = 'NutPrice'
