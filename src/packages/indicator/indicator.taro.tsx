import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'

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
  const { total, current, children, className, direction, style } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames({
    [`${classPrefix}-vertical`]: direction === 'vertical',
  })
  const classPrefixV =
    direction === 'vertical' ? `${classPrefix}-vertical` : classPrefix
  const renderElement = () => {
    const childs: ReactNode[] = []
    for (let item = 0; item < total; item++) {
      childs.push(
        item === current ? (
          children || (
            <View
              key={item}
              className={`${classPrefix}-dot ${classPrefix}-active ${classPrefixV}-dot ${classPrefixV}-active`}
            />
          )
        ) : (
          <View
            key={item}
            className={`${classPrefix}-dot ${classPrefixV}-dot`}
          />
        )
      )
    }
    return childs
  }
  return (
    <View className={classNames(classPrefix, classes, className)} style={style}>
      {renderElement()}
    </View>
  )
}

Indicator.displayName = 'NutIndicator'
