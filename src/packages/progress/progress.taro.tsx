import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface ProgressProps extends BasicComponent {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
  children: ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  background: '#f3f3f3',
  color: 'linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)',
  strokeWidth: '',
  showText: false,
  animated: false,
  children: undefined,
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

  const classes = classPrefix

  const classesOuter = classNames({
    [`${classPrefix}-outer`]: true,
    [`${classPrefix}-base`]: true,
  })

  const classesInner = classNames({
    [`${classPrefix}-inner`]: true,
    [`${classPrefix}-active`]: animated,
  })

  const classesInsideText = classNames({
    [`${classPrefix}-text`]: true,
    [`${classPrefix}-insidetext`]: true,
  })

  const classesTextInner = classNames({
    [`${classPrefix}-text__inner`]: true,
  })

  const stylesOuter: React.CSSProperties = {
    height: `${strokeWidth}px`,
    background: `${background}`,
  }

  const stylesInner: React.CSSProperties = {
    width: `${percent}%`,
    background: `${color}`,
  }

  const stylesInsideText: React.CSSProperties = {
    left: `${percent}%`,
    background: color,
  }

  const stylesInsideIcon: React.CSSProperties = {
    left: `${percent}%`,
  }

  return (
    <div className={`${classes} ${className}`} style={style} {...rest}>
      <div className={classesOuter} style={stylesOuter}>
        <div className={classesInner} style={stylesInner}>
          {showText && (
            <>
              {children ? (
                <div className={classesInsideText} style={stylesInsideIcon}>
                  {children}
                </div>
              ) : (
                <div className={classesInsideText} style={stylesInsideText}>
                  <span className={classesTextInner}>{percent}%</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = defaultProps
Progress.displayName = 'NutProgress'
