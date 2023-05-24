import React, { FunctionComponent, useRef } from 'react'
import { TriangleDown, TriangleUp } from '@nutui/icons-react-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TrendArrowProps extends BasicComponent {
  value: number
  digits: number
  symbol: boolean
  zero: boolean
  arrowLeft: boolean
  syncColor: boolean
  color: string
  riseColor: string
  dropColor: string
  riseIcon: React.ReactNode
  downIcon: React.ReactNode
}
const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  digits: 2,
  symbol: false,
  zero: false,
  arrowLeft: false,
  syncColor: true,
  color: '#333',
  riseColor: '#fa2c19',
  dropColor: '#64b578',
  riseIcon: null,
  downIcon: null,
} as TrendArrowProps

export const TrendArrow: FunctionComponent<
  Partial<TrendArrowProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    value,
    digits,
    symbol,
    zero,
    arrowLeft,
    syncColor,
    color,
    riseColor,
    dropColor,
    riseIcon,
    downIcon,
    className,
    style,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-trendarrow'
  const handleClick = () => {}
  const rateTrend = useRef(value > 0)

  const myFixed = (num: any, digit = 2) => {
    if (Object.is(parseFloat(num), NaN)) {
      return console.log(`传入的值：${num}不是一个数字`)
    }
    num = parseFloat(num)
    // eslint-disable-next-line no-restricted-properties
    const numPow = Math.pow(10, digit)
    return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit)
  }

  const calcStyle = (() => {
    const arrowColor = rateTrend.current ? riseColor : dropColor
    const textEquArrowColor = syncColor ? arrowColor : color
    const style = {
      color: value === 0 ? color : textEquArrowColor,
    }
    return style
  })()

  const calcRate = (() => {
    rateTrend.current = value > 0
    const absRate = Math.abs(value)
    if (!zero && value === 0) {
      return '--'
    }
    const resultRate = `${
      // eslint-disable-next-line no-nested-ternary
      symbol && value !== 0 ? (rateTrend.current ? '+' : '-') : ''
    }${myFixed(Number(absRate), digits)}%`

    return resultRate
  })()

  const calcIconProps = (() => {
    const iconProps = {
      color: rateTrend.current ? riseColor : dropColor,
    }
    return iconProps
  })()

  const renderContent = (arrowLeft: boolean) => {
    const classNameSuffix = !arrowLeft ? 'icon-after' : 'icon-before'
    return (
      <span
        className={`${classPrefix}__${classNameSuffix} ${classPrefix}__value`}
        style={calcStyle}
      >
        {calcRate}
      </span>
    )
  }
  return (
    <div
      className={`${classPrefix} ${className}`}
      {...rest}
      onClick={handleClick}
    >
      {!arrowLeft && renderContent(!arrowLeft)}
      {Number(value) !== 0 && (
        <>
          {rateTrend.current ? (
            <>{riseIcon || <TriangleUp color={calcIconProps.color} />}</>
          ) : (
            <>{downIcon || <TriangleDown color={calcIconProps.color} />}</>
          )}
        </>
      )}
      {arrowLeft && renderContent(!arrowLeft)}
    </div>
  )
}

TrendArrow.defaultProps = defaultProps
TrendArrow.displayName = 'NutTrendArrow'
