import React, { FunctionComponent, useEffect } from 'react'
import { useConfig } from '@/packages/configprovider'
import Icon from '@/packages/icon'

export interface MenuProps {
  className: string
  style: React.CSSProperties
  activeColor: string
  closeOnClickOverlay: boolean
  scrollFixed: boolean | string | number
  titleClassName: string
  lockScroll: boolean
  titleIcon: string
  children: React.ReactNode
}

const defaultProps = {
  activeColor: '#F2270C',
  closeOnClickOverlay: true,
  scrollFixed: false,
  titleClassName: '',
  lockScroll: true,
  titleIcon: '',
} as MenuProps
export const Menu: FunctionComponent<Partial<MenuProps>> = (props) => {
  const { locale } = useConfig()
  const { className, style, titleIcon, scrollFixed, children } = {
    ...defaultProps,
    ...props,
  }

  const onScroll = () => {}

  useEffect(() => {
    if (scrollFixed) {
      window.addEventListener('scroll', onScroll)
    }
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const direction = 'up'

  return (
    <div className="nut-menu">
      <div className="nut-menu__bar">
        <div className="nut-menu__item">
          <div className="nut-menu__title">
            <div className="nut-menu__title-text">x</div>
            <Icon
              name={
                titleIcon || (direction === 'up' ? 'arrow-up' : 'down-arrow')
              }
            />
          </div>
        </div>
        <div className="nut-menu__item">
          <div className="nut-menu__title">
            <div className="nut-menu__title-text">x</div>
            <Icon
              name={
                titleIcon || (direction === 'up' ? 'arrow-up' : 'down-arrow')
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Menu.defaultProps = defaultProps
Menu.displayName = 'NutMenu'
