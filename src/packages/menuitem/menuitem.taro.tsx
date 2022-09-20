import React, { FunctionComponent, useEffect, useState } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Icon from '@/packages/icon/index.taro'
import { Overlay } from '../overlay/overlay.taro'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface OptionItem {
  text: string
  value: string | number
}

export interface MenuItemProps extends IComponent {
  className: string
  style: React.CSSProperties
  title: React.ReactNode
  options: OptionItem[]
  disabled: boolean
  columns: number
  optionsIcon: string
  direction: string
  activeTitleClass: string
  inactiveTitleClass: string
  fontClassName: string
  iconClassPrefix: string
  value: string | number
  onChange: (event: any) => void
  children: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  style: {},
  columns: 1,
  direction: 'down',
  optionsIcon: 'Check',
  activeTitleClass: '',
  inactiveTitleClass: '',
  iconClassPrefix: 'nut-icon',
  fontClassName: 'nutui-iconfont',
  onChange: (value: OptionItem) => undefined,
} as MenuItemProps
export const MenuItem: FunctionComponent<Partial<MenuItemProps>> = (props) => {
  const { locale } = useConfig()
  const mergedProps = { ...defaultProps, ...props }
  const {
    className,
    style,
    options,
    value,
    columns,
    title,
    optionsIcon,
    direction,
    onChange,
    activeTitleClass,
    inactiveTitleClass,
    children,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const { activeColor, showPopup, parent, orderKey } = mergedProps as any

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
      [activeTitleClass]: optionVal === value,
      [inactiveTitleClass]: optionVal !== value,
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
    onChange && onChange(item)
  }
  const [position, setPosition] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  })
  const getParentOffset = () => {
    setTimeout(async () => {
      const p = parent.parent().current
      const rect = await p.getBoundingClientRect()
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
      return {
        height: `${position.top + position.height}px`,
        ...isShow(),
        ...style,
      }
    }
    return {
      height: `${window.innerHeight - position.top}px`,
      top: 'auto',
      ...isShow(),
      ...style,
    }
  }

  return (
    <>
      <div
        className={`placeholder-element ${classnames({
          up: direction === 'up',
        })} ${className}`}
        style={placeholderStyle()}
        onClick={() => parent.toggleItemShow(orderKey)}
      />
      <Overlay
        overlayClass="nut-menu__overlay"
        style={getPosition()}
        lockScroll={parent.lockScroll}
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
                      classPrefix={iconClassPrefix}
                      fontClassName={iconFontClassName}
                      className={getIconCName(item.value, value)}
                      name={optionsIcon}
                      color={activeColor}
                    />
                  ) : null}
                  <div
                    className={getIconCName(item.value, value)}
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
