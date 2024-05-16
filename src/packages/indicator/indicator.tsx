import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'

export interface IndicatorProps {
  total: number
  current: number
  direction: string
}
const defaultProps = {
  total: 3,
  current: 0,
  direction: 'horizontal',
} as IndicatorProps

const classPrefix = `nut-indicator`

export const Indicator: FunctionComponent<
  Partial<IndicatorProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { total, current, children, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames({
    [`${classPrefix}-vertical`]: direction === 'vertical',
  })
  const renderElement = () => {
    const childs: ReactNode[] = []
    for (let item = 0; item < total; item++) {
      childs.push(
        item === current ? (
          children || (
            <div
              key={item}
              className={`${classPrefix}-dot ${classPrefix}-active`}
            />
          )
        ) : (
          <div key={item} className={`${classPrefix}-dot`} />
        )
      )
    }
    return childs
  }
  return (
    <div className={classNames(classPrefix, classes, className)} {...rest}>
      {renderElement()}
    </div>
  )
}

Indicator.displayName = 'NutIndicator'
