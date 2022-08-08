import React, { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import bem from '@/utils/bem'
import Icon from '@/packages/icon'

export interface TabbarItemProps {
  dot: boolean
  size: string | number
  classPrefix: string
  tabTitle: string
  icon: string
  href: string
  to: any
  num: string | number
  active: boolean
  activeColor: string
  unactiveColor: string
  index: number
  handleClick: (idx: number) => void
}
const defaultProps = {
  dot: false,
  size: '',
  classPrefix: 'nutui-iconfont',
  tabTitle: '',
  icon: '',
  href: '',
  to: '',
  num: '',
  active: false,
  activeColor: '',
  unactiveColor: '',
  index: 0,
  handleClick: (idx) => {},
} as TabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (
  props
) => {
  const {
    dot,
    size,
    classPrefix,
    tabTitle,
    icon,
    href,
    to,
    num,
    active,
    activeColor,
    unactiveColor,
    index,
    handleClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('tabbar-item')
  const bIcon = bem('tabbar-item__icon-box')
  const history = useHistory()

  useEffect(() => {
    if (active && href) {
      window.location.href = href
      return
    }
    if (active && to) {
      history.push(to)
    }
  }, [active, history, href, to])

  return (
    <div
      className={`${b({ active })}`}
      style={{
        color: active ? activeColor : unactiveColor,
      }}
      onClick={() => {
        handleClick(index)
      }}
    >
      <div className={`${bIcon()}`}>
        {!dot ? (
          <>
            {num && num <= 99 && (
              <div className={`${bIcon('tips', [bIcon('num')])}`}>{num}</div>
            )}
            {num && num >= 100 && (
              <div className={`${bIcon('tips', [bIcon('nums')])}`}>99+</div>
            )}
          </>
        ) : (
          <div className={`${bIcon('dot')}`} />
        )}

        {icon && (
          <div>
            <Icon size={size} name={icon} classPrefix={classPrefix} />
          </div>
        )}
        <div
          className={bIcon({ 'nav-word': true }, [
            bIcon({ 'big-word': !icon }),
          ])}
        >
          {tabTitle}
        </div>
      </div>
    </div>
  )
}
