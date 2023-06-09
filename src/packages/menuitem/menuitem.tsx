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

  const [_showPopup, setShowPopup] = useState(show)
  const [_value, setValue] = useState(value)
  useEffect(() => {
    setShowPopup(show)
  }, [show])

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
    if (_showPopup) return {}
    return { display: 'none' }
  }

  const getPosition = (): CSSProperties => {
    return direction === 'down'
      ? { position: 'absolute', height: `${window.innerHeight}px` }
      : {
          position: 'absolute',
          bottom: '100%',
          top: 'auto',
          height: `${window.innerHeight}px`,
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
    _showPopup,
    closeOnClickAway
  )

  return (
    <div
      className="nut-menu-item-container"
      ref={micRef}
      style={{ position: 'absolute', left: 0, right: 0 }}
    >
      <Overlay
        className="nut-menu__overlay"
        style={getPosition()}
        lockScroll={parent.lockScroll}
        visible={_showPopup}
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
          in={_showPopup}
          timeout={100}
          classNames={direction === 'down' ? 'menu-item' : 'menu-item-up'}
        >
          <div className="nut-menu-item__content">
            {options?.map((item: any) => {
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
    </div>
  )
})

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
