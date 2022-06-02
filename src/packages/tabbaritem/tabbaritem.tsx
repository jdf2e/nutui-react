import React, { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import bem from '@/utils/bem'
import Icon from '@/packages/icon'

export interface TabbarItemProps {
  tabTitle: string
  icon: string
  href: string
  to: object | string
  num: string | number
  active: boolean
  activeColor: string
  unactiveColor: string
  index: number
  handleClick: (idx: number) => void
}
const defaultProps = {
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

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (props) => {
  const { tabTitle, icon, href, to, num, active, activeColor, unactiveColor, index, handleClick } =
    {
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
  }, [active])

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
        {num && num <= 99 && <div className={`${bIcon('tips', [bIcon('num')])}`}>{num}</div>}
        {num && num >= 100 && <div className={`${bIcon('tips', [bIcon('nums')])}`}>99+</div>}
        {icon && (
          <div>
            <Icon size={20} name={icon} />
          </div>
        )}
        <div className={bIcon({ 'nav-word': true }, [bIcon({ 'big-word': !icon })])}>
          {tabTitle}
        </div>
      </div>
    </div>
  )
}
