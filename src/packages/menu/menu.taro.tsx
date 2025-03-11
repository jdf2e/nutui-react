import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { ArrowDown, ArrowUp } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { MenuItem } from '@/packages/menuitem/menuitem.taro'
import { ComponentDefaults } from '@/utils/typings'
import { MenuCallBack, MenuOptionItem, TaroMenuProps } from '@/types'

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
} as TaroMenuProps
export const Menu: FunctionComponent<Partial<TaroMenuProps>> & {
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
  const [showMenuItem, setShowMenuItem] = useState<boolean[]>([])
  const [menuItemTitle, setMenuItemTitle] = useState<string[]>([])
  const [isScrollFixed, setIsScrollFixed] = useState(false)
  const cls = classNames(`nut-menu`, className, {
    'scroll-fixed': isScrollFixed,
  })

  const getScrollTop = (el: Element | Window) => {
    return Math.max(
      0,
      el === window ? window.scrollY : (el as Element).scrollTop
    )
  }
  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop(window)
    const isFixed =
      scrollTop > (typeof scrollFixed === 'boolean' ? 30 : Number(scrollFixed))
    setIsScrollFixed(isFixed)
  }, [scrollFixed])

  useEffect(() => {
    if (scrollFixed) {
      window.addEventListener('scroll', onScroll)
    }
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollFixed, onScroll])

  const toggleMenuItem: MenuCallBack = (index, from = 'NORMAL') => {
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
  const hideMenuItem: MenuCallBack = (index, from = 'NORMAL') => {
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
        const {
          title,
          titleIcon,
          options,
          value,
          defaultValue,
          disabled,
          direction,
        } = child.props
        const selected = options?.filter(
          (option: MenuOptionItem) =>
            option.value === (value !== undefined ? value : defaultValue)
        )
        const finallyTitle = () => {
          if (title) return title
          if (menuItemTitle && menuItemTitle[index]) return menuItemTitle[index]
          if (selected && selected.length && selected[0].text)
            return selected[0].text
          return ''
        }
        const finallyIcon = () => {
          if (titleIcon) return titleIcon
          if (icon) return icon
          return direction === 'up' ? (
            <ArrowUp
              className="nut-menu-title-icon"
              width="12px"
              height="12px"
            />
          ) : (
            <ArrowDown
              className="nut-menu-title-icon"
              width="12px"
              height="12px"
            />
          )
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
            {finallyIcon()}
          </View>
        )
      }
      return null
    })
  }
  return (
    <View {...rest} className={cls} ref={menuRef}>
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
