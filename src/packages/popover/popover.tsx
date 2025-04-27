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
import { ArrowRadius } from '@nutui/icons-react'
import Popup from '@/packages/popup/index'
import { getRect } from '@/utils/get-rect'
import { ComponentDefaults } from '@/utils/typings'
import useClickAway from '@/hooks/use-click-away'
import { canUseDom } from '@/utils/can-use-dom'
import { getAllScrollableParents } from '@/utils/get-scroll-parent'
import { useRtl } from '@/packages/configprovider'
import { WebPopoverProps, PopoverList, WrapperPosition } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  list: [],
  theme: 'light',
  location: 'bottom',
  visible: false,
  offset: [0, 8],
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
  Partial<WebPopoverProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
> = (props) => {
  const rtl = useRtl()
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
  const [wrapperPosition, setWrapperPosition] = useState<WrapperPosition>()
  useEffect(() => {
    setShowPopup(visible)
    if (visible) {
      setTimeout(() => {
        getWrapperPosition()
      }, 0)
    }
  }, [visible, location])

  const update = useRef((e: any) => {
    getWrapperPosition()
  })

  let targetSet = []
  let element: Element | null = null
  if (canUseDom && targetId) {
    element = document.querySelector(`#${targetId}`)
    targetSet = [element, popoverContentRef.current]
  } else {
    targetSet = [popoverRef.current, popoverContentRef.current]
  }
  const scrollableParents = useMemo(() => {
    return getAllScrollableParents(element || popoverRef.current)
  }, [element, popoverRef.current])

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

  useClickAway(
    () => {
      onClick?.()
      onClose?.()
    },
    targetSet as Element[],
    'touchstart',
    true,
    visible,
    closeOnOutsideClick
  )

  const getWrapperPosition = () => {
    const rect = getRect(
      targetId ? document.querySelector(`#${targetId}`) : popoverRef.current
    )
    const distance = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const { width, height, right, left, top } = rect
    setWrapperPosition({
      width,
      height,
      left: rtl ? right : left,
      top: top + distance,
      right: rtl ? left : right,
    })
  }

  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-${theme}`]: theme === 'dark',
    },
    className
  )

  const popoverArrow = () => {
    const prefixCls = 'nut-popover-arrow'
    const direction = location.split('-')[0]
    return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}-${location}`
  }

  const getPopoverPosition = () => {
    const styles: CSSProperties = {}

    if (!wrapperPosition) {
      styles.visibility = 'hidden'
      return styles
    }

    const popWidth = popoverContentRef.current?.clientWidth as number
    const popHeight = popoverContentRef.current?.clientHeight as number
    const { width, height, left, top, right } = wrapperPosition
    const direction = location.split('-')[0]
    const skew = location.split('-')[1]
    let cross = 0
    let parallel = 0
    if (Array.isArray(offset) && offset.length === 2) {
      const rtloffset = rtl ? -offset[0] : offset[0]
      cross += +offset[1]
      parallel += +rtloffset
    }
    if (width) {
      const dir = rtl ? 'right' : 'left'
      if (['bottom', 'top'].includes(direction)) {
        const h = direction === 'bottom' ? height + cross : -(popHeight + cross)
        styles.top = `${top + h}px`

        if (!skew) {
          styles[dir] =
            `${-(popWidth - width) / 2 + wrapperPosition[dir] + parallel}px`
        }
        if (skew === 'left') {
          styles.left = `${left + parallel}px`
        }
        if (skew === 'right') {
          styles.left = `${right + parallel}px`
        }
      }
      if (['left', 'right'].includes(direction)) {
        const contentW =
          direction === 'left' ? -(popWidth + cross) : width + cross
        styles.left = `${left + contentW}px`
        if (!skew) {
          styles.top = `${top - popHeight / 2 + height / 2 - 4 + parallel}px`
        }
        if (skew === 'top') {
          styles.top = `${top + parallel}px`
        }
        if (skew === 'bottom') {
          styles.top = `${top + height + parallel}px`
        }
      }
    }
    styles.visibility = popWidth === 0 ? 'hidden' : 'initial'
    return styles
  }

  const popoverArrowStyle = () => {
    const styles: CSSProperties = {}
    const direction = location.split('-')[0]
    const skew = location.split('-')[1]
    const base = 16

    if (arrowOffset !== 0) {
      const dir = rtl ? 'right' : 'left'
      const dir2 = rtl ? 'left' : 'right'
      if (['bottom', 'top'].includes(direction)) {
        if (!skew) {
          styles[dir] = `calc(50% + ${arrowOffset}px)`
        }
        if (skew === 'left') {
          styles[dir] = `${base + arrowOffset}px`
        }
        if (skew === 'right') {
          styles[dir2] = `${base - arrowOffset}px`
        }
      }

      if (['left', 'right'].includes(direction)) {
        if (!skew) {
          styles.top = `calc(50% - ${arrowOffset}px)`
        }
        if (skew === 'top') {
          styles.top = `${base - arrowOffset}px`
        }
        if (skew === 'bottom') {
          styles.bottom = `${base + arrowOffset}px`
        }
      }
    }
    return styles
  }

  const handleSelect = (item: PopoverList, index: number) => {
    if (!item.disabled) {
      onSelect?.(item, index)
    }
    if (closeOnActionClick) {
      onClick?.()
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
            onClick?.()
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
          <div
            className={classes}
            style={{ ...getPopoverPosition(), ...style }}
          >
            <Popup
              className={`nut-popover-content nut-popover-content-${location}`}
              visible={showPopup}
              overlay={overlay}
              position="none"
              lockScroll={false}
              {...rest}
            >
              <div
                className="nut-popover-content-group"
                ref={popoverContentRef}
              >
                {showArrow && (
                  <div className={popoverArrow()} style={popoverArrowStyle()}>
                    <ArrowRadius width={8} height={4} />
                  </div>
                )}
                {Array.isArray(children) ? children[1] : null}
                {list.map((item, index) => {
                  return (
                    <div
                      className={classNames(
                        {
                          'nut-popover-item': true,
                          'nut-popover-item-disabled': item.disabled,
                        },
                        item.className
                      )}
                      key={item.key || index}
                      onClick={() => handleSelect(item, index)}
                    >
                      {item.icon && (
                        <div className="nut-popover-item-icon">{item.icon}</div>
                      )}
                      <div className="nut-popover-item-name">{item.name}</div>
                      {item.action?.icon && (
                        <div
                          className="nut-popover-item-action-icon"
                          onClick={(e) => item.action?.onClick?.(e)}
                        >
                          {item.action.icon}
                        </div>
                      )}
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

Popover.displayName = 'NutPopover'
