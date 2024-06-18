import React from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface HoverButtonItemProps extends BasicComponent {
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  icon: null,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as HoverButtonItemProps

const classPrefix = 'nut-hoverbutton-item'

export const HoverButtonItem = (props: Partial<HoverButtonItemProps>) => {
  const { className, style, icon, onClick } = {
    ...defaultProps,
    ...props,
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <div
      className={classNames([`${classPrefix}-container`, className])}
      style={style}
      onClick={handleClick}
    >
      <div className={`${classPrefix}-icon`}>
        {React.isValidElement(icon)
          ? React.cloneElement(icon, {
              // @ts-ignore
              size: 20,
            })
          : icon}
      </div>
    </div>
  )
}

HoverButtonItem.displayName = 'NutHoverButtonItem'
