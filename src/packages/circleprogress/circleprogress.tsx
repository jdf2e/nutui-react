import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { isObject } from '@/utils'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface Color {
  [key: string]: string
}
export interface CircleProgressProps extends BasicComponent {
  percent: string | number
  strokeWidth?: string | number
  radius?: number | string
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
  color?: Record<string, string> | string
  background?: string
  clockwise?: boolean
}
const defaultProps = {
  ...ComponentDefaults,
  strokeWidth: 5,
  radius: 50,
  strokeLinecap: 'round',
  color: '#fa2c19',
  background: '#e5e9f2',
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
    strokeWidth,
    color,
    background,
    style,
    strokeLinecap,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }

  const classes = classNames(classPrefix, className)
  const refRandomId = Math.random().toString(36).slice(-8)

  const styles: React.CSSProperties = {
    height: `${Number(radius) * 2}px`,
    width: `${Number(radius) * 2}px`,
    ...style,
  }

  const pathStyle = {
    stroke: background,
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
    if (!isObject(color)) {
      return
    }
    const colorArr = Object.keys(color).sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    )
    const stopArr: Record<string, string>[] = []
    colorArr.forEach((item) => {
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
            {stop()?.map((item: Record<string, string>, index) => {
              return (
                <stop key={index} offset={item.key} stopColor={item.value} />
              )
            })}
          </linearGradient>
        </defs>
        <path
          className="nut-circleprogress-path"
          d={path()}
          style={pathStyle}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <path
          className="nut-circleprogress-hover"
          style={hoverStyle()}
          d={path()}
          fill="none"
          strokeLinecap={strokeLinecap}
          transform="rotate(90,50,50)"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="nut-circleprogress-text">{children}</div>
    </div>
  )
}

CircleProgress.displayName = 'NutCircleProgress'
