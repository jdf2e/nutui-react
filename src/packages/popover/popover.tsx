import React, {
  CSSProperties,
  FunctionComponent,
  ReactPortal,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { createPortal } from 'react-dom'
import Popup from '@/packages/popup'
import { PopupProps } from '@/packages/popup/popup'
import { getRect } from '@/utils/use-client-rect'
import { ComponentDefaults } from '@/utils/typings'
import useClickAway from '@/utils/use-click-away'
import { canUseDom } from '@/utils/can-use-dom'
import { getAllScrollableParents } from '@/utils/get-scroll-parent'
import { PopoverTheme, PopoverLocation, List } from './types'

export interface PopoverProps extends PopupProps {
  list: List[]
  theme: PopoverTheme
  location: PopoverLocation | string
  visible: boolean
  offset: string[] | number[]
  arrowOffset: number
  targetId: string
  showArrow: boolean
  closeOnOutsideClick: boolean
  closeOnActionClick: boolean
  children?: React.ReactNode
  onClick: () => void
  onOpen: () => void
  onClose: () => void
  onSelect: (item: List, index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  list: [],
  theme: 'light',
  location: 'bottom',
  visible: false,
  offset: [0, 12],
  arrowOffset: 0,
  targetId: '',
  showArrow: true,
  closeOnOutsideClick: true,
  closeOnActionClick: true,
  overlay: false,
  onClick: () => {},
  onOpen: () => {},
  onClose: () => {},
}

const classPrefix = `nut-popover`
export const Popover: FunctionComponent<
  Partial<PopoverProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
> = (props) => {
  const {
    children,
    list,
    theme,
    location,
    visible,
    offset,
    arrowOffset,
    targetId,
    overlay,
    closeOnOutsideClick,
    closeOnActionClick,
    className,
    showArrow,
    style,
    onClick,
    onOpen,
    onClose,
    onSelect,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const popoverRef = useRef<HTMLDivElement>(null)
  const popoverContentRef = useRef<HTMLDivElement>(null)
  const [showPopup, setShowPopup] = useState(false)
  const [rootPosition, setRootPosition] = useState<{
    width: number
    height: number
    left: number
    top: number
    right: number
  }>()

  useEffect(() => {
    setShowPopup(visible)
    if (visible) {
      setTimeout(() => {
        getContentWidth()
      }, 0)
    }
  }, [visible, location])

  const update = useRef((e: any) => {
    getContentWidth()
  })
  useEffect(() => {
    if (visible) {
      scrollableParents.forEach((parent) => {
        parent.addEventListener('scroll', update.current, { passive: true })
      })
    } else {
      scrollableParents.forEach((parent) =>
        parent.removeEventListener('scroll', update.current)
      )
    }
  }, [visible])

  let element: Element | null = null
  let targetSet = []
  if (canUseDom && targetId) {
    element = document.querySelector(`#${targetId}`) as Element
    targetSet = [element, popoverContentRef.current]
  } else {
    targetSet = [popoverRef.current, popoverContentRef.current]
  }
  useClickAway(
    () => {
      props.onClick?.()
      onClose?.()
    },
    targetSet as Element[],
    'touchstart',
    true,
    visible,
    closeOnOutsideClick
  )

  const scrollableParents = useMemo(() => {
    return getAllScrollableParents((element || popoverRef.current) as Element)
  }, [element, popoverRef.current])

  const getContentWidth = () => {
    const rect = getRect(
      targetId
        ? (document.querySelector(`#${targetId}`) as Element)
        : (popoverRef.current as Element)
    )
    setRootPosition({
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top:
        rect.top +
        Math.max(document.documentElement.scrollTop, document.body.scrollTop),
      right: rect.right,
    })
  }

  const classes = classNames(
    {
      [`${classPrefix}`]: true,
      [`${classPrefix}-${theme}`]: theme === 'dark',
    },
    className
  )

  const popoverArrow = () => {
    const prefixCls = 'nut-popover-arrow'
    const direction = location.split('-')[0]
    return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}-${location}`
  }

  const getRootPosition = () => {
    const styles: CSSProperties = {}
    if (!rootPosition) return {}
    const contentWidth = popoverContentRef.current?.clientWidth as number
    const contentHeight = popoverContentRef.current?.clientHeight as number
    const { width, height, left, top, right } = rootPosition
    const direction = location.split('-')[0]
    const skew = location.split('-')[1]
    let cross = 0
    let parallel = 0
    if (Array.isArray(offset) && offset.length === 2) {
      cross += +offset[1]
      parallel += +offset[0]
    }
    if (width) {
      if (['bottom', 'top'].includes(direction)) {
        const h =
          direction === 'bottom' ? height + cross : -(contentHeight + cross)
        styles.top = `${top + h}px`

        if (!skew) {
          styles.left = `${-(contentWidth - width) / 2 + left + parallel}px`
        }
        if (skew === 'start') {
          styles.left = `${left + parallel}px`
        }
        if (skew === 'end') {
          styles.left = `${right + parallel}px`
        }
      }
      if (['left', 'right'].includes(direction)) {
        const contentW =
          direction === 'left' ? -(contentWidth + cross) : width + cross
        styles.left = `${left + contentW}px`
        if (!skew) {
          styles.top = `${
            top - contentHeight / 2 + height / 2 - 4 + parallel
          }px`
        }
        if (skew === 'start') {
          styles.top = `${top + parallel}px`
        }
        if (skew === 'end') {
          styles.top = `${top + height + parallel}px`
        }
      }
    }
    return styles
  }

  const arrowStyle = () => {
    const styles: CSSProperties = {}
    const direction = location.split('-')[0]
    const skew = location.split('-')[1]
    const base = 16

    if (props.arrowOffset !== 0) {
      if (['bottom', 'top'].includes(direction)) {
        if (!skew) {
          styles.left = `calc(50% + ${arrowOffset}px)`
        }
        if (skew === 'start') {
          styles.left = `${base + arrowOffset}px`
        }
        if (skew === 'end') {
          styles.right = `${base - arrowOffset}px`
        }
      }

      if (['left', 'right'].includes(direction)) {
        if (!skew) {
          styles.top = `calc(50% - ${arrowOffset}px)`
        }
        if (skew === 'start') {
          styles.top = `${base - arrowOffset}px`
        }
        if (skew === 'end') {
          styles.bottom = `${base + arrowOffset}px`
        }
      }
    }
    return styles
  }

  const handleSelect = (item: List, index: number) => {
    if (!item.disabled) {
      onSelect?.(item, index)
    }
    if (closeOnActionClick) {
      props.onClick?.()
      onClose?.()
    }
  }
  return (
    <>
      {!targetId && (
        <div
          className="nut-popover-wrapper"
          ref={popoverRef}
          onClick={() => {
            props.onClick?.()
            if (!visible) {
              onOpen?.()
            } else {
              onClose?.()
            }
          }}
          style={style}
        >
          {Array.isArray(children) ? children[0] : children}
        </div>
      )}
      {
        createPortal(
          <div className={classes} style={getRootPosition()}>
            <Popup
              className={`nut-popover-content nut-popover-content-${location}`}
              visible={showPopup}
              overlay={overlay}
              position="default"
              lockScroll={false}
              {...rest}
            >
              <div
                className="nut-popover-content-group"
                ref={popoverContentRef}
              >
                {showArrow && (
                  <div className={popoverArrow()} style={arrowStyle()} />
                )}
                {Array.isArray(children) ? children[1] : null}
                {list.map((item, index) => {
                  return (
                    <div
                      className={classNames(
                        {
                          'nut-popover-menu-item': true,
                          'nut-popover-menu-disabled': item.disabled,
                        },
                        item.className
                      )}
                      key={item.key || index}
                      onClick={() => handleSelect(item, index)}
                    >
                      {item.icon ? (
                        <div className="nut-popover-menu-item-icon">
                          {item.icon}
                        </div>
                      ) : null}
                      <div className="nut-popover-menu-item-name">
                        {item.name}
                      </div>
                      {item.action && item.action.icon ? (
                        <div
                          className="nut-popover-menu-item-action-icon"
                          onClick={(e) => item.action?.onClick?.(e)}
                        >
                          {item.action.icon}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </Popup>
          </div>,
          document.body
        ) as ReactPortal
      }
    </>
  )
}

Popover.defaultProps = defaultProps
Popover.displayName = 'NutPopover'
