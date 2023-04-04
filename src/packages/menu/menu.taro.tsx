import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { RectDown, RectUp } from '@nutui/icons-react-taro'
import { OptionItem } from '@/packages/menuitem/menuitem.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface MenuProps extends BasicComponent {
  className: string
  style: React.CSSProperties
  activeColor: string
  closeOnClickOverlay: boolean
  scrollFixed: boolean | string | number
  lockScroll: boolean
  titleIcon: React.ReactNode
  children: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  style: {},
  activeColor: '',
  closeOnClickOverlay: true,
  scrollFixed: false,
  lockScroll: true,
  titleIcon: null,
} as MenuProps
export const Menu: FunctionComponent<Partial<MenuProps>> = (props) => {
  const {
    className,
    titleIcon,
    scrollFixed,
    lockScroll,
    closeOnClickOverlay,
    children,
    activeColor,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const parentRef = useRef(null)

  const onScroll = () => {}

  useEffect(() => {
    if (scrollFixed) {
      window.addEventListener('scroll', onScroll)
    }
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [itemShow, setItemShow] = useState<boolean[]>([])
  const [itemTitle, setItemTitle] = useState<string[]>([])
  const toggleItemShow = (index: number) => {
    itemShow[index] = !itemShow[index]
    const temp = itemShow.map((i: boolean, idx) => (idx === index ? i : false))
    setItemShow([...temp])
  }
  const hideItemShow = (index: number) => {
    itemShow[index] = false
    setItemShow([...itemShow])
  }
  const updateTitle = (text: string, index: number) => {
    itemTitle[index] = text
    setItemTitle([...itemTitle])
  }
  const parent = () => {
    return parentRef
  }
  const cloneChildren = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child as any, {
        showPopup: itemShow[index],
        orderKey: index,
        activeColor,
        parent: {
          closeOnClickOverlay,
          lockScroll,
          toggleItemShow,
          updateTitle,
          hideItemShow,
          parent,
        },
      })
    })
  }

  return (
    <div className={`nut-menu ${className}`} {...rest} ref={parentRef}>
      <div className="nut-menu-relative">
        <div
          className={`nut-menu__bar ${
            itemShow.includes(true) ? 'opened' : ''
          } ${className}`}
        >
          {React.Children.toArray(children).map((child, index) => {
            if (!child) return null
            const { disabled, title, value, direction, options, className } = (
              child as any
            ).props as any
            const currentTitle = options?.filter(
              (option: OptionItem) => option.value === value
            )

            function finallyTitle() {
              if (title) return title
              if (itemTitle && itemTitle[index]) return itemTitle[index]
              if (currentTitle && currentTitle[0] && currentTitle[0].text)
                return currentTitle[0].text
              return ''
            }

            return (
              <div
                className={`nut-menu__item ${classNames({
                  active: itemShow[index],
                  disabled,
                })} ${className}`}
                style={{ color: itemShow[index] ? activeColor : '' }}
                key={index}
                onClick={() => {
                  !disabled && toggleItemShow(index)
                }}
              >
                <div
                  className={`nut-menu__title ${classNames({
                    active: itemShow[index],
                    disabled,
                  })}`}
                >
                  <div className="nut-menu__title-text">{finallyTitle()}</div>
                  {titleIcon || (
                    <>
                      {direction === 'up' ? (
                        <RectUp className="nut-menu__title-icon" size="14px" />
                      ) : (
                        <RectDown
                          className="nut-menu__title-icon"
                          size="14px"
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {cloneChildren()}
      </div>
    </div>
  )
}

Menu.defaultProps = defaultProps
Menu.displayName = 'NutMenu'
