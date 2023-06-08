import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface ProgressProps extends BasicComponent {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
  delay: number
}

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
  delay: 0,
} as ProgressProps

export const Progress: FunctionComponent<
  Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    percent,
    background,
    color,
    strokeWidth,
    showText,
    animated,
    children,
    delay,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-progress'

  const classesInner = classNames({
    [`${classPrefix}-inner`]: true,
    [`${classPrefix}-active`]: animated,
  })

  const stylesOuter: React.CSSProperties = {
    height: `${strokeWidth}px`,
    background,
  }

  const [displayPercent, setDispalyPercent] = useState(0)

  const stylesInner: React.CSSProperties = {
    width: `${displayPercent}%`,
    background: color,
  }

  useEffect(() => {
    setDispalyPercent(percent)
  }, [percent])

  useEffect(() => {
    let timer: any = null
    if (delay) {
      setDispalyPercent(0)
      timer = setTimeout(() => {
        setDispalyPercent(percent)
      }, delay)
    }
    return () => {
      timer && clearTimeout(timer)
    }
  }, [])

  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div className={`${classPrefix}-outer`} style={stylesOuter}>
        <div className={classesInner} style={stylesInner}>
          {showText && (
            <div
              className={`${classPrefix}-text`}
              style={{ left: `${displayPercent}%` }}
            >
              {children || (
                <div
                  className={`${classPrefix}-text__inner`}
                  style={{
                    background: color,
                  }}
                >
                  {percent}%
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = defaultProps
Progress.displayName = 'NutProgress'
