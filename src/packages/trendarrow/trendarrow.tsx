import React, { FunctionComponent } from 'react'
import { TriangleDown, TriangleUp } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import { WebTrendArrowProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  digits: 2,
  symbol: false,
  zero: false,
  left: false,
  sync: true,
  color: '',
  riseColor: 'var(--nutui-brand-6)',
  dropColor: 'var(--nutui-secondary-1)',
  riseIcon: null,
  dropIcon: null,
} as WebTrendArrowProps

export const TrendArrow: FunctionComponent<
  Partial<WebTrendArrowProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    value = 0,
    digits = 2,
    symbol = false,
    zero = false,
    left = false,
    sync = true,
    color = '',
    riseColor = 'var(--nutui-brand-6)',
    dropColor = 'var(--nutui-secondary-1)',
    riseIcon = null,
    dropIcon = null,
    className,
    style,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-trendarrow'
  const isRise = Number(value) > 0

  const myFixed = (num: any, digit = 2) => {
    if (Object.is(parseFloat(num), NaN)) {
      return console.warn(`传入的值：${num}不是一个数字`)
    }
    num = parseFloat(num)
    // eslint-disable-next-line no-restricted-properties
    const numPow = 10 ** digit
    return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit)
  }

  const calcStyle = (() => {
    const arrowColor = isRise ? riseColor : dropColor
    const textEquArrowColor = sync ? arrowColor : color
    return {
      color: Number(value) === 0 ? color : textEquArrowColor,
    }
  })()

  const calcRate = (() => {
    const absRate = Math.abs(Number(value))
    if (!zero && Number(value) === 0) {
      return '--'
    }
    let prefix = ''
    if (symbol && Number(value) !== 0) {
      prefix = isRise ? '+' : '-'
    }
    return `${prefix}${myFixed(Number(absRate), digits)}%`
  })()

  const calcIconProps = {
    color: isRise ? riseColor : dropColor,
  }

  const renderContent = (left: boolean) => {
    const classNameSuffix = !left ? 'icon-after' : 'icon-before'
    return (
      <span
        className={`${classPrefix}-${classNameSuffix} ${classPrefix}-value`}
        style={calcStyle}
      >
        {calcRate}
      </span>
    )
  }
  return (
    <div className={`${classPrefix} ${className}`} style={style} {...rest}>
      {!left && renderContent(!left)}
      {Number(value) !== 0 && (
        <>
          {isRise ? (
            <>{riseIcon || <TriangleUp color={calcIconProps.color} />}</>
          ) : (
            <>{dropIcon || <TriangleDown color={calcIconProps.color} />}</>
          )}
        </>
      )}
      {left && renderContent(!left)}
    </div>
  )
}

TrendArrow.displayName = 'NutTrendArrow'
