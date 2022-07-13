import React, { FunctionComponent } from 'react'
import { Icon } from '@/packages/icon/icon'
import classNames from 'classnames'
import bem from '@/utils/bem'

export type ProgressSize = 'small' | 'base' | 'large'
export type TextType = 'icon' | 'text'

export interface ProgressProps {
  isShowPercentage: boolean
  percentage: number
  fillColor: string
  strokeColor: string
  strokeWidth: string
  size: ProgressSize
  textColor: string
  textWidth: string
  showText: boolean
  textInside: boolean
  textBackground: string
  textType: TextType
  status: boolean
  iconName: string
  iconColor: string
  iconSize: string
  rounded: boolean | string
  children: any
}

const defaultProps = {
  isShowPercentage: true,
  percentage: 0,
  fillColor: '#f3f3f3',
  strokeColor: 'linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)',
  strokeWidth: '',
  textColor: '',
  textWidth: '',
  showText: true,
  textInside: false,
  textBackground: 'linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)',
  textType: 'text',
  status: false,
  iconName: 'checked',
  iconColor: '#439422',
  iconSize: '16px',
  rounded: true,
  children: undefined,
} as ProgressProps

export const Progress: FunctionComponent<
  Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    isShowPercentage,
    percentage,
    fillColor,
    strokeColor,
    strokeWidth,
    size,
    textColor,
    textWidth,
    showText,
    textInside,
    textBackground,
    textType,
    status,
    iconName,
    iconColor,
    iconSize,
    rounded,
    children,
  } = { ...defaultProps, ...props }

  const b = bem('progress')

  const classes = classNames(b(''))

  const classesOuter = classNames({
    [`${b('')}-outer`]: true,
    [`${b('')}-${size || 'base'}`]: true,
  })

  const classesInner = classNames({
    [`${b('')}-inner`]: true,
    [`${b('')}-active`]: status,
  })

  const classesText = classNames({
    [`${b('')}-text`]: true,
  })

  const classesInsideText = classNames({
    [`${b('')}-text`]: true,
    [`${b('')}-insidetext`]: true,
  })

  const classesTextInner = classNames({
    [`${b('')}-text__inner`]: true,
  })

  const stylesOuter: React.CSSProperties = {
    height: `${strokeWidth}px`,
    borderRadius: `${rounded ? (rounded === true ? '12px' : rounded) : 0}`,
    background: `${fillColor}`,
  }

  const stylesInner: React.CSSProperties = {
    width: `${percentage}%`,
    borderRadius: `${rounded ? (rounded === true ? '12px' : rounded) : 0}`,
    background: `${strokeColor}`,
  }

  const stylesInsideText: React.CSSProperties = {
    width: `${textWidth}px`,
    left: `${percentage}%`,
    background: `${textBackground ? textBackground : strokeColor ? strokeColor : ''}`,
  }

  const stylesInsideIcon: React.CSSProperties = {
    width: `${textWidth}px`,
    left: `${percentage}%`,
  }

  const stylesText: React.CSSProperties = {
    width: `${textWidth}px`,
  }

  return (
    <>
      <div className={classes}>
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
                      style={{ color: textColor ? textColor : '#fff' }}
                    >
                      {percentage}
                      {isShowPercentage ? '%' : ''}
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {showText && !textInside && (
          <div className={classesText} style={stylesText}>
            {textType == 'text' && (
              <span className={classesTextInner} style={{ color: textColor ? textColor : '#333' }}>
                {percentage}
                {isShowPercentage ? '%' : ''}
              </span>
            )}
            {textType == 'icon' && <Icon size={iconSize} name={iconName} color={iconColor}></Icon>}
          </div>
        )}
      </div>
    </>
  )
}

Progress.defaultProps = defaultProps
Progress.displayName = 'NutProgress'
