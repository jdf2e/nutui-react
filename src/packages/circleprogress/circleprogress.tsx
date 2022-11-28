import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { isObject } from '@/utils'
import bem from '@/utils/bem'

export interface Color {
  [key: string]: string
}
export interface CircleProgressProps {
  progress: string | number
  strokeWidth?: string | number
  radius?: number | string
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined
  circleColor?: object | string
  pathColor?: string
  clockwise?: boolean
  className?: string
}
const defaultProps = {
  strokeWidth: 5,
  radius: 50,
  strokeLinecap: 'round',
  circleColor: '',
  pathColor: '',
  clockwise: true,
} as CircleProgressProps

export const CircleProgress: FunctionComponent<
  CircleProgressProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    progress,
    className,
    radius,
    pathColor,
    clockwise,
    circleColor,
    strokeWidth,
    style,
    strokeLinecap,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('circleprogress')
  const classes = classNames(className, b(''))
  const refRandomId = Math.random().toString(36).slice(-8)

  const styles: React.CSSProperties = {
    height: `${Number(radius) * 2}px`,
    width: `${Number(radius) * 2}px`,
    ...style,
  }

  const pathStyle = {
    stroke: pathColor,
  }

  const hoverStyle = () => {
    const perimeter = 283
    const offset = (perimeter * Number(progress)) / 100
    return {
      stroke: isObject(circleColor) ? `url(#${refRandomId})` : circleColor,
      strokeDasharray: `${offset}px ${perimeter}px`,
    }
  }

  const path = () => {
    const isWise = clockwise ? 1 : 0
    return `M 50 50 m -45 0 a 45 45 0 1 ${isWise} 90 0  a 45 45 0 1 ${isWise} -90 0`
  }

  const hoverColor = () => {
    return isObject(circleColor) ? `url(#${refRandomId})` : circleColor
  }

  const stop = () => {
    if (!isObject(circleColor)) {
      return
    }
    const color = circleColor as Color
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
        <path
          className="nut-circleprogress-path"
          style={pathStyle}
          d={path()}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <path
          className="nut-circleprogress-hover"
          style={hoverStyle()}
          d={path()}
          fill="none"
          stroke={hoverColor()}
          strokeLinecap={strokeLinecap}
          transform="rotate(90,50,50)"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="nut-circleprogress-text">
        {children || <div>{progress}%</div>}
      </div>
    </div>
  )
}

CircleProgress.defaultProps = defaultProps
CircleProgress.displayName = 'NutCircleProgress'
