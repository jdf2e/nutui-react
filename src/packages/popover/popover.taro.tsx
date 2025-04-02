import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { nextTick } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { ArrowRadius } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import { TaroPopoverProps, PopoverList, WrapperPosition } from '@/types'
import pxTransform from '@/utils/px-transform'
import useUuid from '@/hooks/use-uuid'

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
  Partial<TaroPopoverProps> &
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
  const [popWidth, setPopWidth] = useState(0)
  const [popHeight, setPopHeight] = useState(0)
  const [wrapperPosition, setWrapperPosition] = useState<WrapperPosition>()
  useEffect(() => {
    setShowPopup(visible)
    if (visible) {
      getWrapperPosition()
    }
  }, [visible])

  const uid = useUuid()
  const popoverId = `popover-${uid}`

  const getWrapperPosition = async () => {
    nextTick(async () => {
      const rect = targetId
        ? await getRectByTaro(document.querySelector(`#${targetId}`), targetId)
        : await getRectByTaro(popoverRef.current, popoverId)
      const { width, height, right, left, top } = rect
      setWrapperPosition({
        width,
        height,
        left: rtl ? right : left,
        top,
        right: rtl ? left : right,
      })
      getPopoverContentW()
    })
  }

  const getPopoverContentW = async () => {
    nextTick(async () => {
      const rectContent = await getRectByTaro(popoverContentRef.current)
      setPopWidth(rectContent.width)
      setPopHeight(rectContent.height)
    })
  }

  const clickAway = () => {
    if (closeOnOutsideClick) {
      onClick?.()
      onClose?.()
    }
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
        styles.top = pxTransform(top + h)

        if (!skew) {
          styles[dir] = pxTransform(
            -(popWidth - width) / 2 + wrapperPosition[dir] + parallel
          )
        }
        if (skew === 'left') {
          styles.left = pxTransform(left + parallel)
        }
        if (skew === 'right') {
          styles.left = pxTransform(right + parallel)
        }
      }
      if (['left', 'right'].includes(direction)) {
        const contentW =
          direction === 'left' ? -(popWidth + cross) : width + cross
        styles.left = pxTransform(left + contentW)
        if (!skew) {
          styles.top = pxTransform(
            top - popHeight / 2 + height / 2 - 4 + parallel
          )
        }
        if (skew === 'top') {
          styles.top = pxTransform(top + parallel)
        }
        if (skew === 'bottom') {
          styles.top = pxTransform(top + height + parallel)
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
        <View
          className="nut-popover-wrapper"
          ref={popoverRef}
          id={popoverId}
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
      <View className={classes} style={{ ...getPopoverPosition(), ...style }}>
        <Popup
          className={`nut-popover-content nut-popover-content-${location}`}
          position="none"
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
            {Array.isArray(children) ? children[1] : null}
            {list.map((item, index) => {
              return (
                <View
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
                    <View className="nut-popover-item-icon">{item.icon}</View>
                  )}
                  <Text className="nut-popover-item-name">{item.name}</Text>
                  {item.action?.icon && (
                    <View
                      className="nut-popover-item-action-icon"
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
