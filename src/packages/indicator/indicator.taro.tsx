import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'

export interface IndicatorProps {
  total: number
  current: number
  fillZero: boolean
  vertical: boolean
}
const defaultProps = {
  total: 3,
  current: 1,
  fillZero: true,
  vertical: false,
} as IndicatorProps

export const Indicator: FunctionComponent<
  Partial<IndicatorProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { total, current, fillZero, children, className, vertical, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('indicator')
  const classes = classNames(
    {
      [`${b('vertical')}`]: vertical,
    },
    b('')
  )
  const renderEles = () => {
    const childs: ReactNode[] = []
    for (let item = 1; item <= total; item++) {
      childs.push(
        item === current ? (
          <div key={item} className={b('number')}>
            {fillZero && item < 10 ? `0${item}` : item}
          </div>
        ) : (
          <div key={item} className={b('dot')} />
        )
      )
    }
    return childs
  }
  useEffect(() => {}, [])
  return (
    <div className={classNames(classes, className)} {...rest}>
      {renderEles()}
    </div>
  )
}

Indicator.defaultProps = defaultProps
Indicator.displayName = 'NutIndicator'
