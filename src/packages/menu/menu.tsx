import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ArrowDown2, ArrowUp2 } from '@nutui/icons-react'
import { OptionItem, MenuItem } from '@/packages/menuitem/menuitem'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface MenuProps extends BasicComponent {
  activeColor: string
  closeOnOverlayClick: boolean
  scrollFixed: boolean | string | number
  lockScroll: boolean
  icon: React.ReactNode
  children: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  activeColor: '',
  closeOnOverlayClick: true,
  scrollFixed: false,
  lockScroll: true,
  icon: null,
} as MenuProps
export const Menu: FunctionComponent<Partial<MenuProps>> & {
  Item: typeof MenuItem
} = (props) => {
  const {
    className,
    icon,
    scrollFixed,
    lockScroll,
    closeOnOverlayClick,
    children,
    activeColor,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const menuRef = useRef(null)
  const [isScrollFixed, setIsScrollFixed] = useState(false)

  const getScrollTop = (el: Element | Window) => {
    return Math.max(0, 'scrollTop' in el ? el.scrollTop : el.pageYOffset)
  }
  const onScroll = () => {
    const { scrollFixed } = props

    const scrollTop = getScrollTop(window)
    const isFixed =
      scrollTop > (typeof scrollFixed === 'boolean' ? 30 : Number(scrollFixed))
    setIsScrollFixed(isFixed)
  }

  useEffect(() => {
    if (scrollFixed) {
      window.addEventListener('scroll', onScroll)
    }
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [showMenuItem, setShowMenuItem] = useState<boolean[]>([])
  const [menuItemTitle, setMenuItemTitle] = useState<string[]>([])
  const toggleMenuItem = (index: number) => {
    showMenuItem[index] = !showMenuItem[index]
    const temp = showMenuItem.map((i: boolean, idx) =>
      idx === index ? i : false
    )
    setShowMenuItem([...temp])
  }
  const hideMenuItem = (index: number) => {
    showMenuItem[index] = false
    setShowMenuItem([...showMenuItem])
  }
  const updateTitle = (text: string, index: number) => {
    menuItemTitle[index] = text
    setMenuItemTitle([...menuItemTitle])
  }

  const cloneChildren = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child as any, {
        ...(child as any).props,
        show: showMenuItem[index],
        index,
        activeColor,
        parent: {
          closeOnOverlayClick,
          lockScroll,
          toggleMenuItem,
          updateTitle,
          hideMenuItem,
          menuRef,
        },
      })
    })
  }
  const menuTitle = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const { title, options, value, disabled, direction } = child.props
        const selected = options?.filter(
          (option: OptionItem) => option.value === value
        )
        const finallyTitle = () => {
          if (title) return title
          if (menuItemTitle && menuItemTitle[index]) return menuItemTitle[index]
          if (selected && selected.length && selected[0].text)
            return selected[0].text
          return ''
        }
        return (
          <div
            className={classNames('nut-menu__item ', className, {
              active: showMenuItem[index],
              disabled,
            })}
            style={{ color: showMenuItem[index] ? activeColor : '' }}
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              !disabled && toggleMenuItem(index)
            }}
          >
            <div
              className={classNames('nut-menu__title ', {
                active: showMenuItem[index],
                disabled,
              })}
            >
              <div className="nut-menu__title-text">{finallyTitle()}</div>
              {icon ||
                (direction === 'up' ? (
                  <ArrowUp2 className="nut-menu__title-icon" />
                ) : (
                  <ArrowDown2 className="nut-menu__title-icon" />
                ))}
            </div>
          </div>
        )
      }
      return null
    })
  }
  return (
    <div
      {...rest}
      className={classNames(`nut-menu`, className, {
        'scroll-fixed': isScrollFixed,
      })}
      ref={menuRef}
    >
      <div className="nut-menu-relative">
        <div
          className={classNames('nut-menu__bar', {
            opened: showMenuItem.includes(true),
          })}
        >
          {menuTitle()}
        </div>
        {cloneChildren()}
      </div>
    </div>
  )
}

Menu.defaultProps = defaultProps
Menu.displayName = 'NutMenu'
Menu.Item = MenuItem
