import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ArrowDown, ArrowUp } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { OptionItem, MenuItem } from '@/packages/menuitem/menuitem.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type MenuTriggerType = 'NORMAL' | 'REF'
export type MenuCallBackFunction = (
  index: number,
  from?: MenuTriggerType
) => void

export interface MenuProps extends BasicComponent {
  activeColor: string
  overlay: boolean
  closeOnOverlayClick: boolean
  scrollFixed: boolean | string | number
  lockScroll: boolean
  icon: React.ReactNode
  children: React.ReactNode
  onOpen: MenuCallBackFunction
  onClose: MenuCallBackFunction
}

const defaultProps = {
  ...ComponentDefaults,
  activeColor: '',
  closeOnOverlayClick: true,
  scrollFixed: false,
  lockScroll: true,
  overlay: true,
  icon: null,
  onOpen: (index: number, from: 'NORMAL' | 'REF') => {},
  onClose: (index: number, from: 'NORMAL' | 'REF') => {},
} as MenuProps
export const Menu: FunctionComponent<Partial<MenuProps>> & {
  Item: typeof MenuItem
} = (props) => {
  const {
    className,
    icon,
    scrollFixed,
    lockScroll,
    overlay,
    closeOnOverlayClick,
    children,
    activeColor,
    onClose,
    onOpen,
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
  const toggleMenuItem: MenuCallBackFunction = (index, from = 'NORMAL') => {
    showMenuItem[index] = !showMenuItem[index]
    if (showMenuItem[index]) {
      onOpen && onOpen(index, from)
    } else {
      onClose && onClose(index, from)
    }
    const temp = showMenuItem.map((i: boolean, idx) =>
      idx === index ? i : false
    )
    setShowMenuItem([...temp])
  }
  const hideMenuItem: MenuCallBackFunction = (index, from = 'NORMAL') => {
    showMenuItem[index] = false
    setShowMenuItem([...showMenuItem])
    onClose && onClose(index, from)
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
          overlay,
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
        const { title, options, value, defaultValue, disabled, direction } =
          child.props
        const selected = options?.filter(
          (option: OptionItem) =>
            option.value === (value !== undefined ? value : defaultValue)
        )
        const finallyTitle = () => {
          if (title) return title
          if (menuItemTitle && menuItemTitle[index]) return menuItemTitle[index]
          if (selected && selected.length && selected[0].text)
            return selected[0].text
          return ''
        }
        return (
          <View
            className={classNames(
              'nut-menu-title ',
              `nut-menu-title-${index}`,
              {
                active: showMenuItem[index],
                disabled,
              },
              className
            )}
            style={{ color: showMenuItem[index] ? activeColor : '' }}
            key={index}
            onClick={() => {
              if ((!options || !options.length) && !child.props.children) return
              !disabled && toggleMenuItem(index)
            }}
          >
            <View className="nut-menu-title-text">{finallyTitle()}</View>
            {icon ||
              (direction === 'up' ? (
                <ArrowUp className="nut-menu-title-icon" size="12px" />
              ) : (
                <ArrowDown className="nut-menu-title-icon" size="12px" />
              ))}
          </View>
        )
      }
      return null
    })
  }
  return (
    <View
      {...rest}
      className={classNames(`nut-menu`, className, {
        'scroll-fixed': isScrollFixed,
      })}
      ref={menuRef}
    >
      <View
        className={classNames('nut-menu-bar', {
          opened: showMenuItem.includes(true),
        })}
      >
        {menuTitle()}
      </View>
      {cloneChildren()}
    </View>
  )
}

Menu.displayName = 'NutMenu'
Menu.Item = MenuItem
