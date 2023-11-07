import React, {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import classNames from 'classnames'
import { getSystemInfoSync, usePageScroll } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CSSTransition } from 'react-transition-group'
import { Check } from '@nutui/icons-react-taro'
import { Overlay } from '@/packages/overlay/overlay.taro'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export interface OptionItem {
  text: string
  value: string | number
}

export interface MenuItemProps extends BasicComponent {
  title: React.ReactNode
  options: OptionItem[]
  disabled: boolean
  columns: number
  icon: React.ReactNode
  closeOnClickAway: boolean
  direction: string
  activeTitleClass: string
  inactiveTitleClass: string
  value: string | number
  defaultValue: string | number
  onChange: (event: any) => void
  children: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  columns: 1,
  direction: 'down',
  icon: null,
  closeOnClickAway: true,
  activeTitleClass: '',
  inactiveTitleClass: '',
  onChange: (value: OptionItem) => undefined,
} as MenuItemProps
export const MenuItem = forwardRef((props: Partial<MenuItemProps>, ref) => {
  const {
    className,
    style,
    options,
    value,
    defaultValue,
    columns,
    title,
    icon,
    direction,
    onChange,
    activeTitleClass,
    inactiveTitleClass,
    closeOnClickAway,
    children,
    activeColor,
    show,
    parent,
    index,
  } = {
    ...defaultProps,
    ...props,
  } as any

  const [showPopup, setShowPopup] = useState(show)
  const [innerValue, setValue] = usePropsValue({
    defaultValue,
    value,
    finalValue: undefined,
    onChange: (v) => {
      const [option] = options.filter((o: any) => o.value === v)
      onChange?.(option)
    },
  })
  useEffect(() => {
    setShowPopup(show)
  }, [show])
  useEffect(() => {
    getParentOffset()
  }, [showPopup])

  const windowHeight = useMemo(() => getSystemInfoSync().windowHeight, [])
  const updateItemOffset = useCallback(() => {
    if (!parent.lockScroll) return
    const p = parent.menuRef.current
    getRectByTaro(p).then((rect: any) => {
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
    toggle: (s: boolean) => {
      const from = 'REF'
      s ? parent.toggleMenuItem(index, from) : parent.hideMenuItem(index, from)
    },
  }))

  const getIconCName = (optionVal: string | number, value: string | number) => {
    return classNames({
      [activeTitleClass]: optionVal === value,
      [inactiveTitleClass]: optionVal !== value,
    })
  }
  const setTitle = (text: string) => {
    if (!title) {
      parent.updateTitle(text, index)
    }
  }
  const handleClick = (item: OptionItem) => {
    parent.toggleMenuItem(index)
    setTitle(item.text)
    setValue(item.value)
  }
  const [position, setPosition] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  })
  const getParentOffset = () => {
    setTimeout(async () => {
      const p = parent.menuRef.current
      const rect = await getRectByTaro(p)
      setPosition({
        height: rect.height,
        top: rect.top,
      })
    }, 100)
  }
  const isShow = () => {
    if (showPopup) return {}
    return { display: 'none' }
  }

  const getPosition = (): CSSProperties => {
    return direction === 'down'
      ? {
          top: `${position.top + position.height}px`,
          bottom: '0',
          height: 'initial',
        }
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
      }
    }
    return {
      height: `${getSystemInfoSync().windowHeight - position.top}px`,
      top: 'auto',
      ...isShow(),
    }
  }

  return (
    <View className="nut-menu-item-container">
      {closeOnClickAway ? (
        <View
          className={`placeholder-element ${classNames({
            up: direction === 'up',
          })}`}
          style={placeholderStyle()}
          onClick={() => parent.toggleMenuItem(index)}
        />
      ) : null}
      {parent.overlay ? (
        <Overlay
          className="nut-menu__overlay"
          style={getPosition()}
          lockScroll={parent.lockScroll}
          visible={showPopup}
          closeOnOverlayClick={parent.closeOnOverlayClick}
          onClick={() => {
            parent.closeOnOverlayClick && parent.hideMenuItem(index)
          }}
        />
      ) : null}
      <View
        className={classNames(className, {
          'nut-menu-item__wrap': direction === 'down',
          'nut-menu-item__wrap-up': direction !== 'down',
        })}
        style={{
          ...style,
          ...isShow(),
        }}
      >
        <CSSTransition
          in={showPopup}
          timeout={100}
          classNames={direction === 'down' ? 'menu-item' : 'menu-item-up'}
        >
          <View className="nut-menu-item__content">
            {options?.map((item: any, index: any) => {
              return (
                <View
                  className={`nut-menu-item__option ${classNames({
                    active: item.value === innerValue,
                  })}`}
                  key={item.text}
                  style={{
                    flexBasis: `${100 / columns}%`,
                  }}
                  onClick={() => {
                    handleClick(item)
                  }}
                >
                  {item.value === innerValue ? (
                    <>
                      {icon || (
                        <Check
                          color={activeColor}
                          size={10}
                          className={getIconCName(item.value, value)}
                        />
                      )}
                    </>
                  ) : null}
                  <View
                    className={getIconCName(item.value, value)}
                    style={{
                      color: `${item.value === innerValue ? activeColor : ''}`,
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
    </View>
  )
})

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
