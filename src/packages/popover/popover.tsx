import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import Trigger from './Trigger'
import Icon from '@/packages/icon'
import Overlay from '@/packages/overlay'
import { getRect } from '../../utils/useClientRect'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export type PopoverTheme = 'light' | 'dark'

export type PopoverLocation =
  | 'bottom'
  | 'top'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'

export interface List {
  name: string
  icon?: string
  disabled?: boolean
}

export interface PopoverProps extends IComponent {
  list: List[]
  theme: PopoverTheme
  location: PopoverLocation | string
  visible: boolean
  offset: string | number
  className: string
  style?: CSSProperties
  children?: React.ReactNode
  onClick: (e: React.MouseEvent) => void
  onChoose: (item: List, index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  list: [],
  theme: 'light',
  location: 'bottom',
  visible: false,
  offset: 20,
  className: '',
  onClick: (e: React.MouseEvent) => {},
  onChoose: (item, index) => {},
} as PopoverProps
export const Popover: FunctionComponent<
  Partial<PopoverProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    list,
    theme,
    location,
    visible,
    offset,
    className,
    style,
    onClick,
    onChoose,
    iconClassPrefix,
    iconFontClassName,
    ...reset
  } = {
    ...defaultProps,
    ...props,
  }

  const goodItem = useRef(null)
  setTimeout(() => {
    if (goodItem.current && getRect(goodItem.current)) {
      setElWidth((getRect(goodItem.current) as any).width)
      setElHeight((getRect(goodItem.current) as any).height)
    }
  })

  const [classes, setClasses] = useState('')
  const [elWidth, setElWidth] = useState(0)
  const [elHeight, setElHeight] = useState(0)
  const [popoverContent, setPopoverContent] = useState('')
  const [popoverArrow, setPopoverArrow] = useState('')
  useEffect(() => {
    setClasses(classesSelf())
    setPopoverContent(popoverContentSelf())
    setPopoverArrow(popoverArrowSelf())
  }, [list, theme])
  const getStyle = () => {
    const offNumer = Number(offset) ? Number(offset) : 0
    const style: CSSProperties = {}
    if (location.includes('top')) {
      style.bottom = `${elHeight + offNumer}px`
    } else if (location.includes('right')) {
      style.left = `${elWidth + offNumer}px`
    } else if (location.includes('left')) {
      style.right = `${elWidth + offNumer}px`
    } else {
      style.top = `${elHeight + offNumer}px`
    }
    return style
  }

  const classesSelf = () => {
    const prefixCls = 'nut-popover'
    return `${prefixCls} ${theme ? `${prefixCls}--${theme}` : ''}`
  }
  const popoverContentSelf = () => {
    const prefixCls = 'popover-content'
    return `${prefixCls}-show ${prefixCls} ${
      location ? `${prefixCls}--${location}` : ''
    }`
  }

  const filter = () => {
    const ms = ['top', 'bottom', 'left', 'right']
    return ms.filter((m) => location.includes(m))[0]
  }
  const popoverArrowSelf = () => {
    const prefixCls = 'popover-arrow'
    return `${prefixCls} ${prefixCls}-${filter()} ${
      location ? `${prefixCls}--${location}` : ''
    }`
  }

  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const handleChoose = (item: List, index: number) => {
    if (!item.disabled) {
      onChoose(item, index)
    }
  }
  return (
    <>
      <div
        className={`${classes} ${className}`}
        style={{ ...style }}
        {...reset}
      >
        <Trigger forwardedRef={goodItem}>
          <div onClick={(e) => handleClick(e)}>
            {Array.isArray(children) ? children[0] : children}

            {visible ? (
              <div className={`${popoverContent}`} style={getStyle()}>
                <div className={`${popoverArrow}`} />
                {Array.isArray(children) ? children[1] : ''}
                {list.map((item: List, i: number) => {
                  return (
                    <div
                      key={item.name}
                      className={`popover-menu-item ${
                        item.disabled ? 'disabled' : ''
                      }`}
                      onClick={() => {
                        handleChoose(item, i)
                      }}
                    >
                      {item.icon ? (
                        <Icon
                          classPrefix={iconClassPrefix}
                          fontClassName={iconFontClassName}
                          className="popover-menu-item-img"
                          name={item.icon}
                        />
                      ) : (
                        ''
                      )}
                      <div className="popover-menu-item-name">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
        </Trigger>
      </div>

      {visible ? (
        <Overlay
          visible={visible}
          onClick={(e) => handleClick(e)}
          style={{ background: 'transparent' }}
        />
      ) : (
        ''
      )}
    </>
  )
}

Popover.defaultProps = defaultProps
Popover.displayName = 'NutPopover'
