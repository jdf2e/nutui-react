import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import Badge from '../badge'
import { BadgeProps } from '../badge/badge'

export interface TabbarItemProps extends BadgeProps {
  title: ReactNode
  icon: ReactNode
  href: string
  active: boolean
  activeColor: string
  inactiveColor: string
  index: number
  handleClick: (idx: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  icon: null,
  href: '',
  active: false,
  index: 0,
  handleClick: (idx) => {},
} as TabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (
  props
) => {
  const {
    className,
    style,
    title,
    icon,
    href,
    active,
    activeColor,
    inactiveColor,
    index,
    handleClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-tabbar-item'
  const tabbarItemClass = classNames(className, classPrefix, {
    [`${classPrefix}--active`]: active,
  })
  const boxPrefix = `${classPrefix}__icon-box`
  const titleClass = classNames(boxPrefix, `${boxPrefix}--nav-word`, {
    [`${boxPrefix}--big-word`]: !icon,
  })

  useEffect(() => {
    if (active && href) {
      window.location.href = href
    }
  }, [active, href])

  return (
    <div
      className={tabbarItemClass}
      style={{
        color: active ? activeColor : inactiveColor,
        ...style,
      }}
      onClick={() => handleClick(index)}
    >
      {icon ? (
        <>
          <Badge {...rest}>
            <div className={boxPrefix}>{icon}</div>
          </Badge>
          <div className={titleClass}>{title}</div>
        </>
      ) : (
        <Badge {...rest}>
          <div className={titleClass}>{title}</div>
        </Badge>
      )}
    </div>
  )
}
