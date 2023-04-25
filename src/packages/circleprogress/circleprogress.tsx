import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { isObject } from '@/utils'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface Color {
  [key: string]: string
}
export interface CircleProgressProps extends BasicComponent {
  percent: string | number
  radius?: number | string
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
  color?: object | string
  clockwise?: boolean
}
const defaultProps = {
  ...ComponentDefaults,
  radius: 50,
  strokeLinecap: 'round',
  color: '',
  clockwise: true,
} as CircleProgressProps

const classPrefix = `nut-circleprogress`
export const CircleProgress: FunctionComponent<
  CircleProgressProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>
> = (props) => {
  const {
    children,
    percent,
    className,
    radius,
    clockwise,
    color,
    style,
    strokeLinecap,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }

  const classes = classNames(className, classPrefix)
  const refRandomId = Math.random().toString(36).slice(-8)

  const styles: React.CSSProperties = {
    height: `${Number(radius) * 2}px`,
    width: `${Number(radius) * 2}px`,
    ...style,
  }

  const hoverStyle = () => {
    const perimeter = 283
    const offset = (perimeter * Number(percent)) / 100
    return {
      stroke: isObject(color) ? `url(#${refRandomId})` : color,
      strokeDasharray: `${offset}px ${perimeter}px`,
    }
  }

  const path = () => {
    const isWise = clockwise ? 1 : 0
    return `M 50 50 m -45 0 a 45 45 0 1 ${isWise} 90 0  a 45 45 0 1 ${isWise} -90 0`
  }

  const stop = () => {
    if (!isObject(props.color)) {
      return
    }
    const color = props.color as Color
    const colorArr = Object.keys(color).sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    )
    const stopArr: object[] = []
    colorArr.map((item) => {
      const obj = {
        key: '',
        value: '',
      }
      obj.key = item
      obj.value = color[item]
      stopArr.push(obj)
    })
    return stopArr
  }

  return (
    <div className={classes} style={styles} {...restProps}>
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id={refRandomId} x1="100%" y1="0%" x2="0%" y2="0%">
            {stop()?.map((item: any, index) => {
              return (
                <stop key={index} offset={item.key} stopColor={item.value} />
              )
            })}
          </linearGradient>
        </defs>
        <path className="nut-circleprogress-path" d={path()} fill="none" />
        <path
          className="nut-circleprogress-hover"
          style={hoverStyle()}
          d={path()}
          fill="none"
          strokeLinecap={strokeLinecap}
          transform="rotate(90,50,50)"
        />
      </svg>
      <div className="nut-circleprogress-text">{children}</div>
    </div>
  )
}

CircleProgress.defaultProps = defaultProps
CircleProgress.displayName = 'NutCircleProgress'
