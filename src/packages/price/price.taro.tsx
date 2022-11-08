import React, { FunctionComponent } from 'react'

import bem from '@/utils/bem'

export interface PriceProps {
  price: number | string
  needSymbol: boolean
  symbol: string
  decimalDigits: number
  thousands: boolean
  position: string
  size: string
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  price: 0,
  needSymbol: true,
  symbol: '&yen;',
  decimalDigits: 2,
  thousands: false,
  position: 'before',
  size: 'large',
  className: '',
} as PriceProps
export const Price: FunctionComponent<Partial<PriceProps>> = (props) => {
  const {
    price,
    needSymbol,
    symbol,
    decimalDigits,
    thousands,
    position,
    size,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('price')

  const replaceSpecialChar = (url: string) => {
    url = url.replace(/&quot;/g, '"')
    url = url.replace(/&amp;/g, '&')
    url = url.replace(/&lt;/g, '<')
    url = url.replace(/&gt;/g, '>')
    url = url.replace(/&nbsp;/g, ' ')
    url = url.replace(/&yen;/g, '￥')
    return url
  }

  const showSymbol = () => {
    return { __html: needSymbol ? replaceSpecialChar(symbol) : '' }
  }

  const checkPoint = (price: string | number) => {
    return String(price).indexOf('.') > 0
  }

  const formatThousands = (num: any) => {
    if (Number(num) === 0) {
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
    if (Number(decimalNum) === 0) {
      decimalNum = 0
    }

    if (checkPoint(decimalNum)) {
      decimalNum = Number(decimalNum).toFixed(decimalDigits)
      decimalNum =
        typeof decimalNum.split('.') === 'string'
          ? 0
          : decimalNum.split('.')[1] || 0
    } else {
      decimalNum = 0
    }
    const result = `0.${decimalNum}`
    const resultFixed = Number(result).toFixed(decimalDigits)
    return String(resultFixed).substring(2, resultFixed.length)
  }

  const renderSymbol = () => {
    return (
      <div
        className={`${b('symbol')} ${b(`symbol-${size}`)}`}
        dangerouslySetInnerHTML={showSymbol()}
      />
    )
  }

  return (
    <div className={`${b()} ${className}`} {...rest}>
      {needSymbol && position === 'before' ? renderSymbol() : null}
      <div className={`${b('integer')} ${b(`integer-${size}`)}`}>
        {formatThousands(price)}
      </div>
      {decimalDigits !== 0 ? (
        <div className={`${b('decimal')} ${b(`decimal-${size}`)}`}>.</div>
      ) : null}
      <div className={`${b('decimal')} ${b(`decimal-${size}`)}`}>
        {formatDecimal(price)}
      </div>
      {needSymbol && position === 'after' ? renderSymbol() : null}
    </div>
  )
}

Price.defaultProps = defaultProps
Price.displayName = 'NutPrice'
