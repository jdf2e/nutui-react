import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Check } from '@nutui/icons-react'
import { Overlay } from '../overlay/overlay'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
  onChange: (event: any) => void
  children: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  columns: 1,
  direction: 'down',
  icon: null,
  closeOnClickAway: false,
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

  const [_showPopup, setShowPopup] = useState(show)
  const [_value, setValue] = useState(value)
  useEffect(() => {
    setShowPopup(show)
  }, [show])
  useEffect(() => {
    getParentOffset()
  }, [_showPopup])

  useImperativeHandle<any, any>(ref, () => ({
    toggle: parent.toggleMenuItem,
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
    onChange && onChange(item)
  }
  const [position, setPosition] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  })
  const getParentOffset = () => {
    setTimeout(() => {
      const p = parent.menuRef.current
      const rect = p.getBoundingClientRect()
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
        top: 0,
        ...isShow(),
      }
    }
    return {
      height: `${window.innerHeight - position.top}px`,
      bottom: `0px`,
      top: 'auto',
      ...isShow(),
    }
  }

  return (
    <>
      {closeOnClickAway ? (
        <div
          className={`placeholder-element ${classNames({
            up: direction === 'up',
          })}`}
          style={placeholderStyle()}
          onClick={() => parent.toggleMenuItem(index)}
        />
      ) : null}

      <Overlay
        className="nut-menu__overlay"
        style={getPosition()}
        lockScroll={parent.lockScroll}
        visible={_showPopup}
        closeOnOverlayClick={parent.closeOnClickOverlay}
        onClick={() => {
          parent.closeOnClickOverlay && parent.toggleMenuItem(index)
        }}
      />
      <div
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
          in={_showPopup}
          timeout={100}
          classNames={direction === 'down' ? 'menu-item' : 'menu-item-up'}
        >
          <div className="nut-menu-item__content">
            {options?.map((item: any, index: any) => {
              return (
                <div
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
                    <>
                      {icon || (
                        <Check
                          color={activeColor}
                          className={getIconCName(item.value, value)}
                        />
                      )}
                    </>
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
})

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
