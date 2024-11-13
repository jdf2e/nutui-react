import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { View, ViewProps } from '@tarojs/components'

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
  Partial<IndicatorProps> & ViewProps
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
            <View
              key={item}
              className={`${classPrefix}-dot ${classPrefix}-dot-active`}
            />
          )
        ) : (
          <View key={item} className={`${classPrefix}-dot`} />
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
            <View
              key={item}
              style={{
                transform: `translateX(${current * 100}%)`,
              }}
              className={`${classPrefix}-line ${classPrefix}-line-active`}
            />
          )
        ) : (
          <View key={item} className={`${classPrefix}-line`} />
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
    <View className={classNames(classPrefix, classes, className)} {...rest}>
      {renderByType(type)}
    </View>
  )
}

Indicator.displayName = 'NutIndicator'
