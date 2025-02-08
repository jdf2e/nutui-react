import React, {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
} from 'react'
import classNames from 'classnames'
import { usePageScroll } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CSSTransition } from 'react-transition-group'
import { Check } from '@nutui/icons-react-taro'
import { getWindowInfo } from '@/utils/get-system-info'
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
  titleIcon: React.ReactNode
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
  titleIcon: null,
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
  const cssRef = useRef(null)
  useEffect(() => {
    setShowPopup(show)
  }, [show])

  const getParentOffset = useCallback(() => {
    setTimeout(async () => {
      const p = parent.menuRef.current
      const rect = await getRectByTaro(p)
      setPosition({
        height: rect.height,
        top: rect.top,
      })
    }, 100)
  }, [parent.menuRef])

  useEffect(() => {
    getParentOffset()
  }, [showPopup, getParentOffset])

  const windowHeight = useMemo(() => getWindowInfo().windowHeight, [])
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
  }, [direction, windowHeight, parent.lockScroll, parent.menuRef])

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
          bottom: `${getWindowInfo().windowHeight - position.top}px`,
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
      height: `${getWindowInfo().windowHeight - position.top}px`,
      top: 'auto',
      ...isShow(),
    }
  }

  return (
    <View className="nut-menu-container">
      {closeOnClickAway ? (
        <View
          className={`nut-menu-placeholder-element ${classNames({
            up: direction === 'up',
          })}`}
          style={placeholderStyle()}
          onClick={() => parent.toggleMenuItem(index)}
        />
      ) : null}
      {parent.overlay ? (
        <Overlay
          className="nut-menu-container-overlay"
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
        className={classNames(
          {
            'nut-menu-container-wrap': direction === 'down',
            'nut-menu-container-wrap-up': direction !== 'down',
          },
          className
        )}
        style={{
          ...style,
          ...isShow(),
        }}
      >
        <CSSTransition
          nodeRef={cssRef}
          in={showPopup}
          timeout={100}
          classNames={
            direction === 'down'
              ? 'nut-menu-container-down'
              : 'nut-menu-container-up'
          }
        >
          <View className="nut-menu-container-content">
            {options?.map((item: any, index: any) => {
              return (
                <View
                  className={`nut-menu-container-item ${classNames({
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
                      {icon ? (
                        React.cloneElement(icon, {
                          className: `nut-menu-container-item-icon ${icon.props.className || ''}`,
                        })
                      ) : (
                        <Check
                          color={activeColor}
                          size={16}
                          className={`nut-menu-container-item-icon ${getIconCName(item.value, value)}`}
                        />
                      )}
                    </>
                  ) : null}
                  <View
                    className={`nut-menu-container-item-title ${getIconCName(item.value, value)}`}
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

MenuItem.displayName = 'NutMenuItem'
