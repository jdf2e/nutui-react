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
    return (
      <div
        style={
          {
            '--nutui-indicator-current': current,
            '--nutui-indicator-total': total,
          } as React.CSSProperties
        }
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
