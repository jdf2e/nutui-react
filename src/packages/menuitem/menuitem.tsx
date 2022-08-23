import React, { FunctionComponent, useEffect, useState } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { useConfig } from '@/packages/configprovider'
// import Popup from '@/packages/popup'
import Icon from '@/packages/icon'
import { Overlay } from '../overlay/overlay'

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
  direction: 'down',
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
    direction,
    children,
  } = {
    ...defaultProps,
    ...props,
  }
  const { lockScroll, activeColor, showPopup, parent, orderKey, ref } =
    mergedProps as any

  const [_showPopup, setShowPopup] = useState(showPopup)
  const [_value, setValue] = useState(value)
  useEffect(() => {
    setShowPopup(showPopup)
  }, [showPopup])
  useEffect(() => {
    getParentOffset()
  }, [_showPopup])

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
  const [position, setPosition] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  })
  const getParentOffset = () => {
    setTimeout(() => {
      const p = parent.parent().current
      const rect = p.getBoundingClientRect()
      console.log(rect, p.offsetTop, window.screenTop)
      setPosition({
        height: rect.height,
        top: rect.top,
      })
    })
  }
  const isShow = () => {
    if (_showPopup) return {}
    return { display: 'none' }
  }

  const getPosition = () => {
    return direction === 'down'
      ? { top: `${position.top + position.height}px` }
      : { bottom: `${window.innerHeight - position.top}px`, top: 'auto' }
  }

  const placeholderStyle = () => {
    if (direction === 'down') {
      return { height: `${position.top + position.height}px`, ...isShow() }
    }
    return {
      height: `${window.innerHeight - position.top}px`,
      top: 'auto',
      ...isShow(),
    }
  }

  return (
    <>
      <div
        className={`placeholder-element ${classnames({
          up: direction === 'up',
        })}`}
        style={placeholderStyle()}
        onClick={() => parent.toggleItemShow(orderKey)}
      />
      <Overlay
        overlayClass="nut-menu__overlay"
        style={getPosition()}
        lockScroll={lockScroll}
        visible={_showPopup}
        closeOnClickOverlay={parent.closeOnClickOverlay}
        onClick={() => {
          parent.closeOnClickOverlay && parent.toggleItemShow(orderKey)
        }}
      />
      <div
        className="nut-menu-item__wrap"
        style={{
          ...getPosition(),
          ...isShow(),
        }}
      >
        <CSSTransition in={_showPopup} timeout={100} classNames="menu-item">
          <div className="nut-menu-item__content">
            {options?.map((item, index) => {
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
        </CSSTransition>
      </div>
    </>
  )
}

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
