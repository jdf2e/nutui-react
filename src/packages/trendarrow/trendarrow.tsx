import React, { FunctionComponent, useRef } from 'react'
import { TriangleDown, TriangleUp } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TrendArrowProps extends BasicComponent {
  value: number
  digits: number
  symbol: boolean
  zero: boolean
  left: boolean
  sync: boolean
  color: string
  riseColor: string
  dropColor: string
  riseIcon: React.ReactNode
  dropIcon: React.ReactNode
}
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
} as TrendArrowProps

export const TrendArrow: FunctionComponent<
  Partial<TrendArrowProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    value,
    digits,
    symbol,
    zero,
    left,
    sync,
    color,
    riseColor,
    dropColor,
    riseIcon,
    dropIcon,
    className,
    style,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-trendarrow'
  const rateTrend = useRef(value > 0)

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
    const arrowColor = rateTrend.current ? riseColor : dropColor
    const textEquArrowColor = sync ? arrowColor : color
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
          {rateTrend.current ? (
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
