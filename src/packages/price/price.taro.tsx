import React, { FunctionComponent, useMemo } from 'react'
import { Text, View } from '@tarojs/components'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import { TaroPriceProps, PriceColorEnum } from '@/types'
import { harmony } from '@/utils/taro/platform'

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
} as TaroPriceProps
export const Price: FunctionComponent<Partial<TaroPriceProps>> = (props) => {
  const {
    color,
    price: originalPrice,
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

  const price = useMemo(() => {
    return originalPrice.toString().replace(/[^\d.]/g, '')
  }, [originalPrice])

  const isCustomPriceColor = useMemo(() => {
    const specificPriceColor = Object.values(PriceColorEnum)
    return !specificPriceColor.includes(color as PriceColorEnum)
  }, [color])

  const priceColorStyle = useMemo(() => {
    return isCustomPriceColor
      ? {
          color,
        }
      : {}
  }, [isCustomPriceColor, color])

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
      decimalNum = digits ? Number(decimalNum).toFixed(digits) : `${decimalNum}`
      decimalNum =
        typeof decimalNum.split('.') === 'string'
          ? 0
          : decimalNum.split('.')[1] || ''
    } else {
      decimalNum = ''
    }
    if (digits) {
      const result = `0.${decimalNum}`
      const resultFixed = Number(result).toFixed(digits)
      return String(resultFixed).substring(2, resultFixed.length)
    }
    return decimalNum
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
        style={priceColorStyle}
      >
        {symbol ? replaceSpecialChar(symbol) : ''}
      </Text>
    )
  }
  const renderInner = () => {
    return (
      <>
        {symbol && position === 'before' ? renderSymbol() : null}
        <Text
          className={`${classPrefix}-integer ${classPrefix}-integer-${size} ${
            line ? `${classPrefix}-line` : ''
          }`}
          style={priceColorStyle}
        >
          {formatThousands(price)}
        </Text>
        {digits !== 0 ? (
          <>
            {checkPoint(price) || digits ? (
              <Text
                className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
                  line ? `${classPrefix}-line` : ''
                }`}
                style={priceColorStyle}
              >
                .
              </Text>
            ) : null}
            <Text
              className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
                line ? `${classPrefix}-line` : ''
              }`}
              style={priceColorStyle}
            >
              {formatDecimal(price)}
            </Text>
          </>
        ) : null}

        {symbol && position === 'after' ? renderSymbol() : null}
      </>
    )
  }

  return (
    <>
      {harmony() ? (
        <Text
          className={`${classPrefix} ${classPrefix}-${color} ${className}`}
          style={style}
          ariaLabel={`${
            symbol && position === 'before' ? replaceSpecialChar(symbol) : ''
          }${formatThousands(price)}${
            checkPoint(price) || digits ? '.' : ''
          }${formatDecimal(price)}${
            symbol && position === 'after' ? replaceSpecialChar(symbol) : ''
          }`}
        >
          {renderInner()}
        </Text>
      ) : (
        <View
          className={`${classPrefix} ${classPrefix}-${color} ${className}`}
          style={style}
          ariaLabel={`${
            symbol && position === 'before' ? replaceSpecialChar(symbol) : ''
          }${formatThousands(price)}${
            checkPoint(price) || digits ? '.' : ''
          }${formatDecimal(price)}${
            symbol && position === 'after' ? replaceSpecialChar(symbol) : ''
          }`}
        >
          {renderInner()}
        </View>
      )}
    </>
  )
}

Price.displayName = 'NutPrice'
