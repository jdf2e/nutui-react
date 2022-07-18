import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'

export interface DividerProps {
  contentPosition: string
  dashed: boolean
  hairline: boolean
  styles?: React.CSSProperties
  className?: string
  direction?: string
}
const defaultProps = {
  contentPosition: 'center',
  dashed: false,
  hairline: true,
  direction: 'horizontal',
} as DividerProps
export const Divider: FunctionComponent<
  Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    contentPosition,
    dashed,
    hairline,
    styles,
    className,
    direction,
  } = {
    ...defaultProps,
    ...props,
  }
  const dividerBem = bem('divider')
  const classes =
    direction === 'horizontal'
      ? classNames({
          [dividerBem()]: true,
          [dividerBem('center')]: children,
          [dividerBem('left')]: contentPosition === 'left',
          [dividerBem('right')]: contentPosition === 'right',
          [dividerBem('dashed')]: dashed,
          [dividerBem('hairline')]: hairline,
        })
      : classNames({
          [dividerBem()]: true,
          [dividerBem('vertical')]: direction === 'vertical',
        })
  return (
    <div className={`${classes} ${className || ''}`} style={styles}>
      {children}
    </div>
  )
}

Divider.defaultProps = defaultProps
Divider.displayName = 'NutDivider'
