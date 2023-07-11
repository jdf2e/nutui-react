import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { getSystemInfoSync, usePageScroll } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Icon from '@/packages/icon/index.taro'
import { Overlay } from '../overlay/overlay.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface OptionItem {
  text: string
  value: string | number
}

export interface MenuItemProps extends BasicComponent {
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
export const MenuItem = forwardRef((props: Partial<MenuItemProps>, ref) => {
  const mergedProps = { ...defaultProps, ...props }
  const {
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
  const windowHeight = useMemo(() => getSystemInfoSync().windowHeight, [])

  const updateItemOffset = useCallback(() => {
    const p = parent.parent().current
    p.getBoundingClientRect().then((rect: any) => {
      if (rect) {
        setPosition({
          height: rect.height,
          top: rect.top,
        })
      }
    })
  }, [direction, windowHeight])
  usePageScroll(updateItemOffset)

  useImperativeHandle<any, any>(ref, () => ({
    toggle: parent.toggleItemShow,
  }))

  const getIconCName = (optionVal: string | number, value: string | number) => {
    return classNames({
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
      : {
          bottom: `${getSystemInfoSync().windowHeight - position.top}px`,
          top: '0',
          height: 'initial',
        }
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
      height: `${getSystemInfoSync().windowHeight - position.top}px`,
      top: 'auto',
      ...isShow(),
      ...style,
    }
  }

  return (
    <>
      <View
        className={`placeholder-element ${classNames({
          up: direction === 'up',
        })}`}
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
      <View
        className={
          direction === 'down'
            ? 'nut-menu-item__wrap'
            : 'nut-menu-item__wrap-up'
        }
        style={{
          // ...getPosition(),
          ...isShow(),
        }}
      >
        <CSSTransition
          in={_showPopup}
          timeout={100}
          classNames={direction === 'down' ? 'menu-item' : 'menu-item-up'}
        >
          <View className="nut-menu-item__content">
            {options?.map((item, index) => {
              return (
                <View
                  className={`nut-menu-item__option ${classNames({
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
                  <View
                    className={getIconCName(item.value, value)}
                    style={{
                      color: `${item.value === _value ? activeColor : ''}`,
                    }}
                  >
                    {item.text}
                  </View>
                </View>
              )
            })}
            {children}
          </View>
        </CSSTransition>
      </View>
    </>
  )
})

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
