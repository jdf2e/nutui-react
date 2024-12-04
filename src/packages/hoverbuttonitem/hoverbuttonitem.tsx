import React from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { getIcon } from '@/packages/hoverbuttonitem/utils'

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
  const { className, children, style, icon, onClick } = {
    ...defaultProps,
    ...props,
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(event)
    }
  }

  const renderBody = () => {
    if (icon && !children)
      return <div className={`${classPrefix}-icon`}>{getIcon(icon)}</div>
    if (icon && children) {
      return (
        <>
          <div
            className={classNames({
              [`${classPrefix}-text-icon`]: true,
            })}
          />
          {getIcon(icon)}
          <div
            className={classNames({
              [`${classPrefix}-text`]: true,
            })}
          >
            {children}
          </div>
        </>
      )
    }
  }

  return (
    <div
      className={classNames([`${classPrefix}-container`, className], {
        [`${classPrefix}-container-icontext`]: icon && children,
      })}
      style={style}
      onClick={handleClick}
    >
      {renderBody()}
    </div>
  )
}

HoverButtonItem.displayName = 'NutHoverButtonItem'
