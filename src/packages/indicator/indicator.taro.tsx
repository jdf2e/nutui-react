import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { View, ViewProps } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { TaroIndicatorProps, IndicatorType } from '@/types'

const defaultProps = {
  total: 2,
  current: 0,
  direction: 'horizontal',
  color: 'primary',
  type: 'anchor',
} as TaroIndicatorProps

const classPrefix = `nut-indicator`

export const Indicator: FunctionComponent<
  Partial<TaroIndicatorProps> & ViewProps
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
    [`${classPrefix}-white`]: color === 'default',
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
              className={`${classPrefix}-dot ${classPrefix}-dot-${item} ${classPrefix}-dot-active`}
            />
          )
        ) : (
          <View
            key={item}
            className={`${classPrefix}-dot ${classPrefix}-dot-${item}`}
          />
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
          transform: `${direction === 'vertical' ? 'translateY' : 'translateX'}(${pxTransform(current * stride)})`,
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
    if (type === 'dualScreen' || type === 'slide') {
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
