import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { Checked } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type TextType = 'icon' | 'text'

export interface ProgressProps extends BasicComponent {
  percent: number
  fillColor: string
  color: string
  strokeWidth: string
  textColor: string
  showText: boolean
  textInside: boolean
  textBackground: string
  textType: TextType
  status: boolean
  icon: ReactNode
  children: ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  percent: 0,
  fillColor: '#f3f3f3',
  color: 'linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)',
  strokeWidth: '',
  textColor: '',
  showText: true,
  textInside: false,
  textBackground: 'linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)',
  textType: 'text',
  status: false,
  icon: null,
  children: undefined,
} as ProgressProps

export const Progress: FunctionComponent<
  Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    percent,
    fillColor,
    color,
    strokeWidth,
    textColor,
    showText,
    textInside,
    textBackground,
    textType,
    status,
    icon,
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
    [`${classPrefix}-active`]: status,
  })

  const classesText = `${classPrefix}-text`

  const classesInsideText = classNames({
    [`${classPrefix}-text`]: true,
    [`${classPrefix}-insidetext`]: true,
  })

  const classesTextInner = classNames({
    [`${classPrefix}-text__inner`]: true,
  })

  const stylesOuter: React.CSSProperties = {
    height: `${strokeWidth}px`,
    background: `${fillColor}`,
  }

  const stylesInner: React.CSSProperties = {
    width: `${percent}%`,
    background: `${color}`,
  }

  const stylesInsideText: React.CSSProperties = {
    left: `${percent}%`,
    background: textBackground || color,
  }

  const stylesInsideIcon: React.CSSProperties = {
    left: `${percent}%`,
  }

  return (
    <div className={`${classes} ${className}`} style={style} {...rest}>
      <div className={classesOuter} style={stylesOuter}>
        <div className={classesInner} style={stylesInner}>
          {showText && textInside && (
            <>
              {children ? (
                <div className={classesInsideText} style={stylesInsideIcon}>
                  {children}
                </div>
              ) : (
                <div className={classesInsideText} style={stylesInsideText}>
                  <span
                    className={classesTextInner}
                    style={{ color: textColor }}
                  >
                    {percent}%
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {showText && !textInside && (
        <div className={classesText}>
          {textType === 'text' && (
            <span className={classesTextInner} style={{ color: textColor }}>
              {percent}%
            </span>
          )}
          {textType === 'icon' && (
            <>{icon || <Checked width={16} height={16} color="#439422" />}</>
          )}
        </div>
      )}
    </div>
  )
}

Progress.defaultProps = defaultProps
Progress.displayName = 'NutProgress'
