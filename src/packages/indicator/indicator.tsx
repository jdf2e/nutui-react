import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'

export type IndicatorType = 'anchor' | 'slide'
export type IndicatorColor = 'primary' | 'white'

export interface IndicatorProps {
  total: number
  current: number
  direction: string
  color: IndicatorColor
  type: IndicatorType
}

const defaultProps = {
  total: 2,
  current: 0,
  direction: 'horizontal',
  color: 'primary',
  type: 'anchor',
} as IndicatorProps

const classPrefix = `nut-indicator`

export const Indicator: FunctionComponent<
  Partial<IndicatorProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    color,
    type,
    total,
    current,
    children,
    className,
    direction,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames({
    [`${classPrefix}-vertical`]: direction === 'vertical',
    [`${classPrefix}-white`]: color === 'white',
    [`${classPrefix}-track`]: type === 'slide',
  })

  const renderDotElement = () => {
    const childs: ReactNode[] = []
    for (let item = 0; item < total; item++) {
      childs.push(
        item === current ? (
          children || (
            <div
              key={item}
              className={`${classPrefix}-dot ${classPrefix}-dot-active`}
            />
          )
        ) : (
          <div key={item} className={`${classPrefix}-dot`} />
        )
      )
    }
    return childs
  }
  const renderLineElement = () => {
    const childs: ReactNode[] = []
    for (let item = 0; item < total; item++) {
      childs.push(
        item === 0 ? (
          children || (
            <div
              key={item}
              style={{
                transform: `${direction === 'vertical' ? 'translateY' : 'translateX'}(${current * 100}%)`,
              }}
              className={`${classPrefix}-line ${classPrefix}-line-active`}
            />
          )
        ) : (
          <div key={item} className={`${classPrefix}-line`} />
        )
      )
    }
    return childs
  }
  const renderByType = (type: IndicatorType) => {
    switch (type) {
      case 'slide':
        return renderLineElement()
      default:
        return renderDotElement()
    }
  }

  return (
    <div className={classNames(classPrefix, classes, className)} {...rest}>
      {renderByType(type)}
    </div>
  )
}

Indicator.displayName = 'NutIndicator'
