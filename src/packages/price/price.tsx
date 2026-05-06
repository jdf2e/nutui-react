import React, { FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index'
import { WebPriceProps, PriceColorEnum } from '@/types'
import { shouldRenderPriceAsRaw } from '@/utils/should-render-price-raw'

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
} as WebPriceProps
export const Price: FunctionComponent<Partial<WebPriceProps>> = (props) => {
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
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-price'

  const rtl = useRtl()
  const isRenderPriceRaw = useMemo(
    () =>
      typeof originalPrice === 'string' &&
      shouldRenderPriceAsRaw(originalPrice),
    [originalPrice]
  )

  const price = useMemo(() => {
    if (isRenderPriceRaw) return ''
    return originalPrice.toString().replace(/[^\d.]/g, '')
  }, [originalPrice, isRenderPriceRaw])

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
      <div
        className={classNames([
          `${classPrefix}-symbol`,
          `${classPrefix}-symbol-${size}`,
          {
            [`${classPrefix}-line`]: line,
            [`${classPrefix}-rtl`]: rtl,
          },
        ])}
        style={priceColorStyle}
        dangerouslySetInnerHTML={{ __html: symbol || '' }}
      />
    )
  }

  const renderRawContent = () => <>{originalPrice}</>
  const renderInner = () => {
    return (
      <>
        {symbol && position === 'before' ? renderSymbol() : null}
        <div
          className={`${classPrefix}-integer ${classPrefix}-integer-${size} ${
            line ? `${classPrefix}-line` : ''
          }`}
          style={priceColorStyle}
        >
          {formatThousands(price)}
        </div>
        {digits !== 0 ? (
          <>
            {checkPoint(price) || digits ? (
              <div
                className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
                  line ? `${classPrefix}-line` : ''
                }`}
                style={priceColorStyle}
              >
                .
              </div>
            ) : null}
            <div
              className={`${classPrefix}-decimal ${classPrefix}-decimal-${size} ${
                line ? `${classPrefix}-line` : ''
              }`}
              style={priceColorStyle}
            >
              {formatDecimal(price)}
            </div>
          </>
        ) : null}

        {symbol && position === 'after' ? renderSymbol() : null}
      </>
    )
  }

  return (
    <div
      className={`${classPrefix} ${classPrefix}-${isCustomPriceColor ? 'custom' : color} ${className}`}
      style={style}
      {...rest}
    >
      {isRenderPriceRaw ? renderRawContent() : renderInner()}
    </div>
  )
}

Price.displayName = 'NutPrice'
