import React, { FunctionComponent } from 'react'
import { View } from '@tarojs/components'
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
    // ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-price'

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
    return { __html: symbol ? replaceSpecialChar(symbol) : '' }
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
      <View
        className={`${classPrefix}-symbol ${classPrefix}-symbol-${size}`}
        dangerouslySetInnerHTML={showSymbol()}
      />
    )
  }

  return (
    <View
      className={`${classPrefix} ${
        line ? `${classPrefix}-line` : ''
      } ${className}`}
      style={style}
      // {...rest}
    >
      {symbol && position === 'before' ? renderSymbol() : null}
      <View className={`${classPrefix}-integer ${classPrefix}-integer-${size}`}>
        {formatThousands(price)}
      </View>
      {digits !== 0 ? (
        <View
          className={`${classPrefix}-decimal ${classPrefix}-decimal-${size}`}
        >
          .
        </View>
      ) : null}
      <View className={`${classPrefix}-decimal ${classPrefix}-decimal-${size}`}>
        {formatDecimal(price)}
      </View>
      {symbol && position === 'after' ? renderSymbol() : null}
    </View>
  )
}

Price.defaultProps = defaultProps
Price.displayName = 'NutPrice'
