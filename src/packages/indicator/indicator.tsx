import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import './indicator.scss'
import bem from '@/utils/bem'
import classNames from 'classnames'

export interface IndicatorProps {
  size: number
  current: number
  block: boolean
  align: 'left' | 'right' | 'center'
  fillZero: boolean
}
const defaultProps = {
  size: 3,
  current: 1,
  block: false,
  align: 'center',
  fillZero: true,
} as IndicatorProps

export const Indicator: FunctionComponent<
  Partial<IndicatorProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { size, current, block, align, fillZero, children, className, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('indicator')
  const classes = classNames(
    {
      [`${b('block')}`]: block,
      [`${b('align')}__${align}`]: block && align,
    },
    b('')
  )
  const renderEles = () => {
    let childs: ReactNode[] = []
    for (let item = 1; item <= size; item++) {
      childs.push(
        item == current ? (
          <div key={item} className={b('number')}>
            {fillZero && item < 10 ? `0${item}` : item}
          </div>
        ) : (
          <div key={item} className={b('dot')}></div>
        )
      )
    }
    return childs
  }
  useEffect(() => {}, [])
  return (
    <div className={`${classes} ${className}`} {...rest}>
      {renderEles()}
    </div>
  )
}

Indicator.defaultProps = defaultProps
Indicator.displayName = 'NutIndicator'
