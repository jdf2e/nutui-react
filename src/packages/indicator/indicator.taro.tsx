import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { View, ViewProps } from '@tarojs/components'
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
    placement,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames({
    [`${classPrefix}-vertical`]: direction === 'vertical',
    [`${classPrefix}-white`]: color === 'default',
    [`${classPrefix}-track`]: type === 'slide',
    [`${classPrefix}-${placement}`]: !!placement,
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
    return (
      <View
        style={{
          '--nutui-indicator-current': current,
          '--nutui-indicator-total': total,
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
