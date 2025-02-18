import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index'
import { PriceProps } from './types'

const defaultProps = {
  ...ComponentDefaults,
  color: 'primary',
  price: 0,
  symbol: '&yen;',
  digits: 2,
  thousands: false,
  position: 'before',
  size: 'normal',
  line: false,
} as PriceProps
export const Price: FunctionComponent<Partial<PriceProps>> = (props) => {
  const {
    color,
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

  const rtl = useRtl()

  const checkPoint = (price: string | number) => {
    return String(price).indexOf('.') > 0
  }

  const formatThousands = (num: any) => {
    if (Number(num) === 0) {
      num = 0
    }
    if (checkPoint(num)) {
      num = num.toString()
      num =
        typeof num.split('.') === 'string' ? num.split('.') : num.split('.')[0]
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
        className={classNames([
          `${classPrefix}-symbol`,
          `${classPrefix}-symbol-${size}`,
          {
            [`${classPrefix}-line`]: line,
            [`${classPrefix}-rtl`]: rtl,
          },
        ])}
        dangerouslySetInnerHTML={{ __html: symbol || '' }}
      />
    )
  }

  return (
    <div
      className={`${classPrefix} ${classPrefix}-${color} ${className}`}
      style={style}
      {...rest}
    >
      {symbol && position === 'before' ? renderSymbol() : null}
      <div
        className={`${classPrefix}-integer ${classPrefix}-integer-${size} ${
          line ? `${classPrefix}-line` : ''
        }`}
      >
        {formatThousands(price)}
      </div>
      {digits ? (
        <>
          <div
            className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
              line ? `${classPrefix}-line` : ''
            }`}
          >
            .
          </div>
          <div
            className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
              line ? `${classPrefix}-line` : ''
            }`}
          >
            {formatDecimal(price)}
          </div>
        </>
      ) : null}

      {symbol && position === 'after' ? renderSymbol() : null}
    </div>
  )
}

Price.displayName = 'NutPrice'
