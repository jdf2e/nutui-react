import React, { FunctionComponent, useEffect, useState } from 'react'
import classnames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import Popup from '@/packages/popup'
import Icon from '@/packages/icon'

export interface OptionItem {
  text: string
  value: string | number
}

export interface MenuItemProps {
  title: React.ReactNode
  options: OptionItem[]
  disabled: boolean
  columns: number
  optionsIcon: string
  direction: string
  activeClassName: string
  inactiveClassName: string
  fontClassName: string
  iconClassPrefix: string
  value: string | number
  onChange: (event: any) => void
  children: React.ReactNode
}

const defaultProps = {
  columns: 1,
  optionsIcon: 'Check',
  iconClassPrefix: 'nut-icon',
  fontClassName: 'nutui-iconfont',
} as MenuItemProps
export const MenuItem: FunctionComponent<Partial<MenuItemProps>> = (props) => {
  const { locale } = useConfig()
  const mergedProps = { ...defaultProps, ...props }
  const {
    options,
    value,
    columns,
    title,
    iconClassPrefix,
    fontClassName,
    optionsIcon,
    children,
  } = {
    ...defaultProps,
    ...props,
  }
  const {
    lockScroll,
    overlay,
    activeColor,
    closeOnClickOverlay,
    showPopup,
    parent,
    orderKey,
    ref,
  } = mergedProps as any

  const [_showPopup, setShowPopup] = useState(showPopup)
  const [_value, setValue] = useState(value)
  useEffect(() => {
    setShowPopup(showPopup)
  }, [showPopup])

  const getIconCName = (optionVal: string | number, value: string | number) => {
    return classnames({
      activeTitleClass: optionVal === value,
      inactiveTitleClass: optionVal !== value,
    })
  }
  const setTitle = (text: string) => {
    if (!title) {
      parent.updateTitle(text, orderKey)
    }
  }
  const handleClick = (item: OptionItem) => {
    parent.toggleItemShow(orderKey)
    setTitle(item.text)
    setValue(item.value)
  }
  const [offsetTop, setOffsetTop] = useState(0)
  const getParentOffset = () => {
    setTimeout(() => {
      setOffsetTop(
        parent.parent().current.offsetTop + parent.parent().current.offsetHeight
      )
    })
  }

  useEffect(() => {
    getParentOffset()
  }, [])

  const isShow = () => {
    if (_showPopup) return {}
    return { display: 'none' }
  }

  return (
    <>
      <div
        className="placeholder-element"
        style={{ height: `${offsetTop}px`, ...isShow() }}
      />
      <Popup
        style={
          parent.direction === 'down'
            ? { top: `${offsetTop}px` }
            : { bottom: `${offsetTop}px` }
        }
        overlayStyle={
          parent.direction === 'down'
            ? { top: `${offsetTop}px` }
            : { bottom: `${offsetTop}px` }
        }
        className="nut-menu__pop"
        overlayClass="nut-menu__overlay"
        position={parent.direction === 'down' ? 'top' : 'bottom'}
        lockScroll={lockScroll}
        overlay={overlay}
        visible={_showPopup}
        closeOnClickOverlay={closeOnClickOverlay}
        onClose={() => parent.hideItemShow(orderKey)}
      >
        <div className="nut-menu-item__content">
          {options.map((item, index) => {
            return (
              <div
                className={`nut-menu-item__option ${classnames({
                  active: item.value === _value,
                })}`}
                key={item.text}
                style={{
                  flexBasis: `${100 / columns}%`,
                }}
                onClick={() => {
                  handleClick(item)
                }}
              >
                {item.value === _value ? (
                  <Icon
                    className={getIconCName(item.text, value)}
                    name={optionsIcon}
                    classPrefix={iconClassPrefix}
                    fontClassName={fontClassName}
                    color={activeColor}
                  />
                ) : null}
                <div
                  className={getIconCName(item.text, value)}
                  style={{
                    color: `${item.value === _value ? activeColor : ''}`,
                  }}
                >
                  {item.text}
                </div>
              </div>
            )
          })}
          {children}
        </div>
      </Popup>
    </>
  )
}

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
