import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TabbarItemProps extends BasicComponent {
  dot: boolean
  title: ReactNode
  icon: ReactNode
  href: string
  to: any
  num: string | number
  active: boolean
  activeColor: string
  inactiveColor: string
  index: number
  handleClick: (idx: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  dot: false,
  title: '',
  icon: null,
  href: '',
  to: '',
  num: '',
  active: false,
  activeColor: '',
  inactiveColor: '',
  index: 0,
  handleClick: (idx) => {},
} as TabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (
  props
) => {
  const {
    dot,
    className,
    style,
    title,
    icon,
    href,
    to,
    num,
    active,
    activeColor,
    inactiveColor,
    index,
    handleClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-tabbar-item'
  const boxPrefix = `${classPrefix}__icon-box`

  useEffect(() => {
    if (active && href) {
      window.location.href = href
      return
    }
    if (active && to) {
      Taro.navigateTo({
        url: to,
      })
    }
  }, [active, href, to])

  return (
    <div
      className={classNames(className, classPrefix, {
        [`${classPrefix}--active`]: active,
      })}
      style={{
        color: active ? activeColor : inactiveColor,
        ...style,
      }}
      onClick={() => {
        handleClick(index)
      }}
    >
      <div className={boxPrefix}>
        {!dot ? (
          <>
            {num && num <= 99 && (
              <div
                className={classNames(
                  `${boxPrefix}__tips`,
                  `${boxPrefix}__num`
                )}
              >
                {num}
              </div>
            )}
            {num && num >= 100 && (
              <div
                className={classNames(
                  `${boxPrefix}__tips`,
                  `${boxPrefix}__nums`
                )}
              >
                99+
              </div>
            )}
          </>
        ) : (
          <div
            className={classNames(`${boxPrefix}__tips`, `${boxPrefix}__dot`)}
          />
        )}
        {icon || null}
      </div>
      {title && (
        <div
          className={classNames(boxPrefix, `${boxPrefix}--nav-word`, {
            [`${boxPrefix}--big-word`]: !icon,
          })}
        >
          {title}
        </div>
      )}
    </div>
  )
}
