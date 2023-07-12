import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Check } from '@nutui/icons-react'
import { Overlay } from '../overlay/overlay'
import useClickAway from '@/utils/use-click-away'
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

  const [showPopup, setShowPopup] = useState(show)
  const [innerValue, setValue] = useState(value)
  useEffect(() => {
    setShowPopup(show)
  }, [show])
  useEffect(() => {
    getParentOffset()
  }, [showPopup])

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

  const isShow = () => {
    if (showPopup) return {}
    return { display: 'none' }
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

  const getPosition = (): CSSProperties => {
    return direction === 'down'
      ? {
          top: `${position.top + position.height}px`,
          bottom: '0',
          height: 'initial',
        }
      : {
          bottom: `${window.innerHeight - position.top}px`,
          top: 'auto',
          height: 'initial',
        }
  }

  const micRef = useRef<HTMLDivElement>(null)
  const targetSet = [micRef.current]
  useClickAway(
    () => {
      parent.hideMenuItem(index)
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    targetSet,
    'click',
    false,
    showPopup,
    closeOnClickAway
  )

  return (
    <div
      className="nut-menu-item-container"
      ref={micRef}
      // style={{ position: 'absolute', left: 0, right: 0 }}
    >
      <Overlay
        className="nut-menu__overlay"
        style={getPosition()}
        lockScroll={parent.lockScroll}
        visible={showPopup}
        closeOnOverlayClick={parent.closeOnOverlayClick}
        onClick={() => {
          parent.closeOnOverlayClick && parent.toggleMenuItem(index)
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
          in={showPopup}
          timeout={100}
          classNames={direction === 'down' ? 'menu-item' : 'menu-item-up'}
        >
          <div className="nut-menu-item__content">
            {options?.map((item: any) => {
              return (
                <div
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
                    <i>
                      {icon || (
                        <Check
                          color={activeColor}
                          className={getIconCName(item.value, value)}
                        />
                      )}
                    </i>
                  ) : null}
                  <div
                    className={getIconCName(item.value, value)}
                    style={{
                      color: `${item.value === innerValue ? activeColor : ''}`,
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
    </div>
  )
})

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
