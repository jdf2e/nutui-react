import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup/index.taro'
import Taro from '@tarojs/taro'
import { getRect, getRectByTaro } from '@/utils/use-client-rect'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
  key?: string
  name: string
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
}

export interface PopoverProps extends BasicComponent {
  list: List[]
  location: PopoverLocation | string
  visible: boolean
  offset: string[] | number[]
  targetId: string
  background: string
  color: string
  showArrow: boolean
  duration: string | number
  overlay: boolean
  overlayClassName: string
  overlayStyle: React.CSSProperties
  closeOnClickOutside: boolean
  closeOnClickAction: boolean
  closeOnOverlayClick: boolean
  children?: React.ReactNode
  onClick: () => void
  onOpen: () => void
  onClose: () => void
  onSelect: (item: List, index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  list: [],
  location: 'bottom',
  visible: false,
  offset: [0, 12],
  targetId: '',
  className: '',
  background: '',
  color: '',
  showArrow: true,
  duration: 0.3,
  overlay: false,
  overlayClassName: '',
  overlayStyle: {},
  closeOnClickOutside: true,
  closeOnClickAction: true,
  closeOnOverlayClick: true,
  onClick: () => {},
  onOpen: () => {},
  onClose: () => {},
  onSelect: (item, index) => {},
} as PopoverProps

const classPrefix = `nut-popover`
export const Popover: FunctionComponent<
  Partial<PopoverProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
> = (props) => {
  const {
    children,
    list,
    location,
    visible,
    offset,
    targetId,
    overlay,
    overlayStyle,
    overlayClassName,
    closeOnClickOutside,
    closeOnClickAction,
    closeOnOverlayClick,
    className,
    showArrow,
    style,
    background,
    color,
    onClick,
    onOpen,
    onClose,
    onSelect,
    ...reset
  } = {
    ...defaultProps,
    ...props,
  }

  const popoverRef = useRef<any>(null)
  const popoverContentRef = useRef<any>(null)

  const [showPopup, setShowPopup] = useState(false)
  const [elWidth, setElWidth] = useState(0)
  const [elHeight, setElHeight] = useState(0)
  const [rootPosition, setRootPosition] =
    useState<{
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
  }, [visible])

  const getContentWidth = async () => {
    let rect
    if (targetId) {
      if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
        rect = getRect(document.querySelector(`#${targetId}`) as Element)
      } else {
        rect = await getRectTaro(targetId)
      }
    } else {
      rect = await getRectByTaro(popoverRef.current)
    }

    setRootPosition({
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top: rect.top,
      right: rect.right,
    })
    setTimeout(() => {
      getPopoverContentW()
    }, 300)
  }

  const getRectTaro = async (targetId: any): Promise<any> => {
    return new Promise((resolve) => {
      const query = Taro.createSelectorQuery()
      query.select(`#${targetId}`) &&
        query.select(`#${targetId}`).boundingClientRect()
      query.exec(function (res: any) {
        resolve(res[0])
      })
    })
  }

  const getPopoverContentW = async () => {
    let rectContent = await getRectByTaro(popoverContentRef.current)
    setElWidth(rectContent.width)
    setElHeight(rectContent.height)
  }

  const clickAway = () => {
    if (closeOnClickOutside) {
      props.onClick && props.onClick()
      onClose && onClose()
    }
  }

  const classes = classNames(
    {
      [`${classPrefix}`]: true,
    },
    className
  )

  const customStyle = () => {
    const styles: CSSProperties = {}
    if (background) {
      styles.background = background
    }

    if (color) {
      styles.color = color
    }

    return styles
  }

  const popoverArrow = () => {
    const prefixCls = 'nut-popover-arrow'
    const loca = location
    const direction = loca.split('-')[0]
    return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}--${loca}`
  }

  const popoverArrowStyle = () => {
    const styles: CSSProperties = {}
    const { background } = props
    const direction = location.split('-')[0]
    if (background) {
      styles[`border${upperCaseFirst(direction)}Color` as any] = background
    }
    return styles
  }

  const upperCaseFirst = (str: string) => {
    var str = str.toLowerCase()
    str = str.replace(
      /\b\w+\b/g,
      (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
    )
    return str
  }

  const getRootPosition = () => {
    let styles: CSSProperties = {}
    if (!rootPosition) {
      styles.visibility = 'hidden'
      return styles
    }

    const contentWidth = elWidth
    const contentHeight = elHeight

    const { width, height, left, top, right } = rootPosition

    const direction = location.split('-')[0]
    const skew = location.split('-')[1]

    let cross = 0
    let parallel = 0
    if (Array.isArray(offset) && offset.length == 2) {
      cross += +offset[1]
      parallel += +offset[0]
    }

    if (width) {
      if (['bottom', 'top'].includes(direction)) {
        const h =
          direction == 'bottom' ? height + cross : -(contentHeight + cross)

        styles.top = `${top + h}px`

        if (!skew) {
          styles.left = `${-(contentWidth - width) / 2 + left + parallel}px`
        }
        if (skew == 'start') {
          styles.left = `${left + parallel}px`
        }
        if (skew == 'end') {
          styles.left = `${right + parallel}px`
        }
      }
      if (['left', 'right'].includes(direction)) {
        const contentW =
          direction == 'left' ? -(contentWidth + cross) : width + cross
        styles.left = `${left + contentW}px`
        if (!skew) {
          styles.top = `${
            top - contentHeight / 2 + height / 2 - 4 + parallel
          }px`
        }
        if (skew == 'start') {
          styles.top = `${top + parallel}px`
        }
        if (skew == 'end') {
          styles.top = `${top + height + parallel}px`
        }
      }
    }

    if (elWidth === 0) {
      styles.visibility = 'hidden'
    } else {
      styles.visibility = 'initial'
    }
    return styles
  }

  const handleSelect = (item: List, index: number) => {
    if (!item.disabled) {
      onSelect(item, index)
    }
    if (closeOnClickAction) {
      props.onClick && props.onClick()
      onClose && onClose()
    }
  }
  return (
    <>
      {!targetId && (
        <div
          className="nut-popover-wrapper"
          ref={popoverRef}
          onClick={() => {
            props.onClick && props.onClick()
            if (!visible) {
              onOpen && onOpen()
            } else {
              onClose && onClose()
            }
          }}
          style={style}
        >
          {Array.isArray(children) ? children[0] : children}
        </div>
      )}
      <div className={classes} style={getRootPosition()}>
        <Popup
          className={`nut-popover-content nut-popover-content--${location}`}
          style={customStyle()}
          position="default"
          overlay={overlay}
          overlayStyle={overlayStyle}
          overlayClassName={overlayClassName}
          closeOnOverlayClick={closeOnOverlayClick}
          visible={showPopup}
        >
          <div className="nut-popover-content-group" ref={popoverContentRef}>
            {showArrow && (
              <div className={popoverArrow()} style={popoverArrowStyle()}></div>
            )}
            {Array.isArray(children) ? children[1] : ''}
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
                  key={item.key}
                  onClick={() => handleSelect(item, index)}
                >
                  {item.icon ? item.icon : null}
                  <div className="nut-popover-menu-item-name">{item.name}</div>
                </div>
              )
            })}
          </div>
        </Popup>
        {showPopup && (
          <div
            className="nut-popover-content-bg"
            onClick={clickAway}
            onTouchMove={clickAway}
          ></div>
        )}
      </div>
    </>
  )
}

Popover.defaultProps = defaultProps
Popover.displayName = 'NutPopover'
