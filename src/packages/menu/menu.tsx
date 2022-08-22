import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Icon from '@/packages/icon'
import { OptionItem } from '@/packages/menuitem/menuitem'

export interface MenuProps {
  className: string
  style: React.CSSProperties
  activeColor: string
  closeOnClickOverlay: boolean
  scrollFixed: boolean | string | number
  titleClassName: string
  lockScroll: boolean
  titleIcon: string
  direction: 'up' | 'down'
  children: React.ReactNode
}

const defaultProps = {
  className: '',
  style: {},
  activeColor: '#F2270C',
  closeOnClickOverlay: true,
  scrollFixed: false,
  titleClassName: '',
  lockScroll: true,
  titleIcon: '',
  direction: 'down',
} as MenuProps
export const Menu: FunctionComponent<Partial<MenuProps>> = (props) => {
  const { className, style, titleIcon, scrollFixed, direction, children } = {
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

  const [itemShow, setItemShow] = useState<any>([])
  const [itemTitle, setItemTitle] = useState<any>([])
  const childrenArray = React.Children.toArray(children)
  const toggleItemShow = (index: number) => {
    itemShow[index] = !itemShow[index]
    setItemShow([...itemShow])
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
        parent: {
          direction,
          toggleItemShow,
          updateTitle,
          hideItemShow,
          parent,
        },
      })
    })
  }

  return (
    <div className="nut-menu" ref={parentRef}>
      <div
        className={`nut-menu__bar ${
          itemShow.includes(true) ? 'opened' : ''
        } ${className}`}
        style={style}
      >
        {childrenArray.map((child, index) => {
          if (!child) return null
          const { disabled, title, value, options } = (child as any)
            .props as any
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
              className={`nut-menu__item ${itemShow[index] ? 'active' : ''}`}
              key={index}
              onClick={() => {
                !disabled && toggleItemShow(index)
              }}
            >
              <div
                className={`nut-menu__title ${itemShow[index] ? 'active' : ''}`}
              >
                <div className="nut-menu__title-text">{finallyTitle()}</div>
                <Icon
                  name={
                    titleIcon ||
                    (direction === 'up' ? 'arrow-up' : 'down-arrow')
                  }
                />
              </div>
            </div>
          )
        })}
      </div>
      {cloneChildren()}
    </div>
  )
}

Menu.defaultProps = defaultProps
Menu.displayName = 'NutMenu'
