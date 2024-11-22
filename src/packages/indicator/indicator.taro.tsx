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
    const trackWidth: number = 21
    const sliderWidth: number = 6
    const stride = (trackWidth - sliderWidth) / (total - 1)
    return (
      <View
        style={{
          transform: `${direction === 'vertical' ? 'translateY' : 'translateX'}(${current * stride}px)`,
        }}
        className={`${classPrefix}-line ${classPrefix}-line-active`}
      />
    )
  }
  const renderByType = (type: IndicatorType) => {
    switch (type) {
      case 'slide':
        return renderLineElement()
      default:
        return renderDotElement()
    }
  }

  function maybeFixedWidth() {
    if (total === 2 || type === 'slide') {
      return `${classPrefix}-fixed-width`
    }
    return ''
  }

  return (
    <View
      className={classNames(classPrefix, classes, maybeFixedWidth(), className)}
      {...rest}
    >
      {renderByType(type)}
    </View>
  )
}

Indicator.displayName = 'NutIndicator'
