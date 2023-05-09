import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface ProgressProps extends BasicComponent {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
}

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  showText: false,
  animated: false,
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

  const stylesInner: React.CSSProperties = {
    width: `${percent}%`,
    background: color,
  }

  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div className={`${classPrefix}-outer`} style={stylesOuter}>
        <div className={classesInner} style={stylesInner}>
          {showText && (
            <div
              className={`${classPrefix}-text`}
              style={{ left: `${percent}%` }}
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
