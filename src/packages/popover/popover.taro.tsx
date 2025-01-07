import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import Taro, { createSelectorQuery } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArrowRadius } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import { PopupProps } from '@/packages/popup/popup.taro'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { ComponentDefaults } from '@/utils/typings'
import { getRect } from '@/utils/use-client-rect'
import { PopoverTheme, PopoverLocation, PopoverList } from './types'
import { useRtl } from '@/packages/configprovider/index.taro'

export interface PopoverProps extends PopupProps {
  list: PopoverList[]
  theme: PopoverTheme | string
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
  onSelect: (item: PopoverList, index: number) => void
}
export interface RootPosition {
  width: number
  height: number
  left: number
  top: number
  right: number
}
const defaultProps = {
  ...ComponentDefaults,
  list: [],
  theme: 'light',
  location: 'bottom',
  visible: false,
  offset: [0, 8],
  arrowOffset: 0,
  targetId: '',
  className: '',
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
  const [elWidth, setElWidth] = useState(0)
  const [elHeight, setElHeight] = useState(0)
  const [rootPosition, setRootPosition] = useState<RootPosition>()
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

    createSelectorQuery()
      .selectViewport()
      .scrollOffset(async (res) => {
        const distance = res.scrollTop

        if (targetId) {
          if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
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
          left: rtl ? rect.right : rect.left,
          top: rect.top + distance,
          right: rtl ? rect.left : rect.right,
        })
      })
      .exec()
    setTimeout(() => {
      getPopoverContentW()
    }, 300)
  }

  const getRectTaro = async (targetId: any): Promise<any> => {
    return new Promise((resolve) => {
      createSelectorQuery()
        .select(`#${targetId}`)
        .boundingClientRect()
        .exec((res: any) => {
          resolve(res[0])
        })
    })
  }

  const getPopoverContentW = async () => {
    const rectContent = await getRectByTaro(popoverContentRef.current)
    setElWidth(rectContent.width)
    setElHeight(rectContent.height)
  }

  const clickAway = () => {
    if (closeOnOutsideClick) {
      onClick && onClick()
      onClose && onClose()
    }
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
    return `${prefixCls} ${prefixCls}-${location.split('-')[0]} ${prefixCls}-${location}`
  }

  const getRootPosition = () => {
    const styles: CSSProperties = {}
    if (!rootPosition) {
      styles.visibility = 'hidden'
      return styles
    }
    const { width, height, left, top, right } = rootPosition
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
        const h = direction === 'bottom' ? height + cross : -(elHeight + cross)
        styles.top = `${top + h}px`

        if (!skew) {
          styles[dir] =
            `${-(elWidth - width) / 2 + rootPosition[dir] + parallel}px`
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
          direction === 'left' ? -(elWidth + cross) : width + cross
        styles.left = `${left + contentW}px`
        if (!skew) {
          styles.top = `${top - elHeight / 2 + height / 2 - 4 + parallel}px`
        }
        if (skew === 'start') {
          styles.top = `${top + parallel}px`
        }
        if (skew === 'end') {
          styles.top = `${top + height + parallel}px`
        }
      }
    }

    styles.visibility = elWidth === 0 ? 'hidden' : 'initial'
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
        if (skew === 'start') {
          styles[dir] = `${base + arrowOffset}px`
        }
        if (skew === 'end') {
          styles[dir2] = `${base - arrowOffset}px`
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
        <View
          className="nut-popover-wrapper"
          ref={popoverRef}
          onClick={() => {
            props?.onClick?.()
            if (!visible) {
              onOpen?.()
            } else {
              onClose?.()
            }
          }}
          style={style}
        >
          {Array.isArray(children) ? children[0] : children}
        </View>
      )}
      <View className={classes} style={getRootPosition()}>
        <Popup
          className={`nut-popover-content nut-popover-content-${location}`}
          position="default"
          overlay={overlay}
          visible={showPopup}
          {...rest}
        >
          <View className="nut-popover-content-group" ref={popoverContentRef}>
            {showArrow && (
              <View className={popoverArrow()} style={popoverArrowStyle()}>
                <ArrowRadius width={8} height={4} />
              </View>
            )}
            {Array.isArray(children) ? children[1] : ''}
            {list.map((item, index) => {
              return (
                <View
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
                  {item.icon && (
                    <View className="nut-popover-menu-item-icon">
                      {item.icon}
                    </View>
                  )}
                  <View className="nut-popover-menu-item-name">
                    {item.name}
                  </View>
                  {item.action && item.action.icon && (
                    <View
                      className="nut-popover-menu-item-action-icon"
                      onClick={(e) => item.action?.onClick?.(e)}
                    >
                      {item.action.icon}
                    </View>
                  )}
                </View>
              )
            })}
          </View>
        </Popup>
        {showPopup && closeOnOutsideClick && (
          <View
            className="nut-popover-content-bg"
            onClick={clickAway}
            onTouchMove={clickAway}
          />
        )}
      </View>
    </>
  )
}

Popover.displayName = 'NutPopover'
