import React, { FunctionComponent } from 'react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface PriceProps extends BasicComponent {
  price: number | string
  symbol: string
  digits: number
  thousands: boolean
  position: string
  size: string
  line: boolean
}

const defaultProps = {
  ...ComponentDefaults,
  price: 0,
  symbol: '&yen;',
  digits: 2,
  thousands: false,
  position: 'before',
  size: 'large',
  line: false,
} as PriceProps
export const Price: FunctionComponent<Partial<PriceProps>> = (props) => {
  const {
    price,
    symbol,
    digits,
    thousands,
    position,
    size,
    line,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-price'

  const showSymbol = () => {
    return { __html: symbol || '' }
  }

  const checkPoint = (price: string | number) => {
    return String(price).indexOf('.') > 0
  }

  const formatThousands = (num: any) => {
    if (Number(num) === 0) {
      num = 0
    }
    if (checkPoint(num)) {
      num = Number(num).toFixed(digits)
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
      decimalNum = Number(decimalNum).toFixed(digits)
      decimalNum =
        typeof decimalNum.split('.') === 'string'
          ? 0
          : decimalNum.split('.')[1] || 0
    } else {
      decimalNum = 0
    }
    const result = `0.${decimalNum}`
    const resultFixed = Number(result).toFixed(digits)
    return String(resultFixed).substring(2, resultFixed.length)
  }

  const renderSymbol = () => {
    return (
      <div
        className={`${classPrefix}-symbol ${classPrefix}-symbol-${size}`}
        dangerouslySetInnerHTML={showSymbol()}
      />
    )
  }

  return (
    <div
      className={`${classPrefix} ${
        line ? `${classPrefix}-line` : ''
      } ${className}`}
      style={style}
      {...rest}
    >
      {symbol && position === 'before' ? renderSymbol() : null}
      <div className={`${classPrefix}-integer ${classPrefix}-integer-${size}`}>
        {formatThousands(price)}
      </div>
      {digits !== 0 ? (
        <div
          className={`${classPrefix}-decimal ${classPrefix}-decimal-${size}`}
        >
          .
        </div>
      ) : null}
      <div className={`${classPrefix}-decimal ${classPrefix}-decimal-${size}`}>
        {formatDecimal(price)}
      </div>
      {symbol && position === 'after' ? renderSymbol() : null}
    </div>
  )
}

Price.displayName = 'NutPrice'
