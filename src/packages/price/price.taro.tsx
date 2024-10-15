import React, { FunctionComponent } from 'react'
import { Text } from '@tarojs/components'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'

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
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-price'

  const rtl = useRtl()

  const replaceSpecialChar = (url: string) => {
    url = url.replace(/&quot;/g, '"')
    url = url.replace(/&amp;/g, '&')
    url = url.replace(/&lt;/g, '<')
    url = url.replace(/&gt;/g, '>')
    url = url.replace(/&nbsp;/g, ' ')
    url = url.replace(/&yen;/g, '¥')
    return url
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
      <Text
        className={classNames([
          `${classPrefix}-symbol`,
          `${classPrefix}-symbol-${size}`,
          {
            [`${classPrefix}-line`]: line,
            [`${classPrefix}-rtl`]: rtl,
          },
        ])}
      >
        {symbol ? replaceSpecialChar(symbol) : ''}
      </Text>
    )
  }

  return (
    <Text
      className={`${classPrefix} ${
        line ? `${classPrefix}-line` : ''
      } ${className}`}
      style={style}
    >
      {symbol && position === 'before' ? renderSymbol() : null}
      <Text
        className={`${classPrefix}-integer ${classPrefix}-integer-${size} ${
          line ? `${classPrefix}-line` : ''
        }`}
      >
        {formatThousands(price)}
      </Text>
      {digits !== 0 ? (
        <Text
          className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
            line ? `${classPrefix}-line` : ''
          }`}
        >
          .
        </Text>
      ) : null}
      <Text
        className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
          line ? `${classPrefix}-line` : ''
        }`}
      >
        {formatDecimal(price)}
      </Text>
      {symbol && position === 'after' ? renderSymbol() : null}
    </Text>
  )
}

Price.displayName = 'NutPrice'
