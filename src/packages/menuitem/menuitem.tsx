import React, {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Check } from '@nutui/icons-react'
import { Overlay } from '@/packages/overlay/overlay'
import useClickAway from '@/utils/use-click-away'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { getScrollParent } from '@/utils/get-scroll-parent'

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
  useEffect(() => {
    setShowPopup(show)
  }, [show])

  const getParentOffset = useCallback(() => {
    setTimeout(() => {
      const p = parent.menuRef.current
      if (p) {
        const rect = p.getBoundingClientRect()
        setPosition({
          height: rect.height,
          top: rect.top,
        })
      }
    })
  }, [parent.menuRef])

  useEffect(() => {
    getParentOffset()
  }, [showPopup, getParentOffset])

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

  const isShow = () => {
    if (showPopup) return {}
    return { display: 'none' }
  }
  const [position, setPosition] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  })

  const scrollParent = useMemo(() => {
    return getScrollParent(parent.menuRef, window)
  }, [parent.menuRef])

  useEffect(() => {
    if (!parent.lockScroll) {
      scrollParent?.addEventListener('scroll', getParentOffset, false)
      return () => {
        scrollParent?.removeEventListener('scroll', getParentOffset, false)
      }
    }
  }, [parent.lockScroll, scrollParent, getParentOffset])

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
  const cssRef = useRef(null)
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
    <div className="nut-menu-container" ref={micRef}>
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
      <div
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
          <div className="nut-menu-container-content">
            {options?.map((item: any) => {
              return (
                <div
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
                    <i className="nut-menu-container-item-icon">
                      {icon || (
                        <Check
                          color={activeColor}
                          className={getIconCName(item.value, value)}
                        />
                      )}
                    </i>
                  ) : null}
                  <div
                    className={`nut-menu-container-item-title ${getIconCName(item.value, value)}`}
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

MenuItem.displayName = 'NutMenuItem'
