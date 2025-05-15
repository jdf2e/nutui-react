import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { IndicatorType, WebIndicatorProps } from '@/types'

const defaultProps = {
  total: 2,
  current: 0,
  direction: 'horizontal',
  color: 'primary',
  type: 'anchor',
} as WebIndicatorProps

const classPrefix = `nut-indicator`

export const Indicator: FunctionComponent<Partial<WebIndicatorProps>> = (
  props
) => {
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
    const trackWidth: number = 21
    const sliderWidth: number = 6
    const stride = (trackWidth - sliderWidth) / (total - 1)
    return (
      <div
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
    if (type === 'dualScreen' || type === 'slide') {
      return `${classPrefix}-fixed-width`
    }
    return ''
  }

  return (
    <div
      className={classNames(classPrefix, classes, maybeFixedWidth(), className)}
      {...rest}
    >
      {renderByType(type)}
    </div>
  )
}

Indicator.displayName = 'NutIndicator'
