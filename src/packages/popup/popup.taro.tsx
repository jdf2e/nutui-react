import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactElement,
  ReactPortal,
  useRef,
  useMemo,
  useCallback,
} from 'react'
import { nextTick } from '@tarojs/taro'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import type { ITouchEvent, CommonEventFunction } from '@tarojs/components'
import ConfigurableCSSTransition from '@/utils/taro/ConfigurableCSSTransition'
import { getRectInMultiPlatformWithoutCache } from '@/utils/taro/get-rect'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'
import Overlay from '@/packages/overlay/index.taro'
import { useLockScrollTaro } from '@/hooks/taro/use-lock-scoll'
import { TaroPopupProps } from '@/types'
import { harmony } from '@/utils/taro/platform'
import { pxTransform } from '@/utils/taro/px-transform'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

const defaultProps: TaroPopupProps = {
  ...defaultOverlayProps,
  position: 'center',
  transition: '',
  overlayStyle: {},
  overlayClassName: '',
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  destroyOnClose: false,
  portal: null,
  overlay: true,
  round: false,
  resizable: false,
  minHeight: '',
  onOpen: () => {},
  onClose: () => {},
  onOverlayClick: () => true,
  onCloseIconClick: () => true,
  onTouchStart: () => {},
  onTouchMove: () => {},
  onTouchEnd: () => {},
}

// 默认1000，参看variables
const _zIndex = 1100

export const Popup: FunctionComponent<
  Partial<TaroPopupProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onClick' | 'title' | 'onTouchStart' | 'onTouchMove' | 'onTouchEnd'
    >
> = (props) => {
  const {
    children,
    visible,
    overlay,
    closeOnOverlayClick,
    overlayStyle,
    overlayClassName,
    zIndex,
    lockScroll,
    duration,
    closeable,
    closeIconPosition,
    closeIcon,
    left,
    title,
    top,
    description,
    style,
    transition,
    round,
    position,
    className,
    destroyOnClose,
    portal,
    resizable,
    minHeight,
    onOpen,
    onClose,
    onOverlayClick,
    onCloseIconClick,
    afterShow,
    afterClose,
    onClick,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    closeAriaLabel,
  } = { ...defaultProps, ...props }
  const { locale } = useConfig()

  const [index, setIndex] = useState(zIndex || _zIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)

  const nodeRef = useLockScrollTaro(
    innerVisible && lockScroll
  ) as React.MutableRefObject<any>
  const topNodeRef = useRef<HTMLDivElement | null>(null)
  const rootRect = useRef<any>(null)
  const touchStartRef = useRef(0)
  const touchMoveDistanceRef = useRef(0)
  const heightRef = useRef(0)
  const defaultHeightRef = useRef(0)
  const isTouching = useRef(false)

  const classPrefix = 'nut-popup'

  const transitionName = useMemo(() => {
    return transition || `${classPrefix}-slide-${position}`
  }, [transition, position])

  const overlayStyles = useMemo(() => {
    return { ...overlayStyle }
  }, [overlayStyle])

  const contentZIndex = useMemo(() => {
    return harmony() ? index + 1 : index // 解决harmony层级问题
  }, [index])

  const popStyles = useMemo(() => {
    return { zIndex: contentZIndex, minHeight, ...style }
  }, [contentZIndex, minHeight, style])

  const popClassName = useMemo(() => {
    return classNames(
      classPrefix,
      {
        [`${classPrefix}-round`]: round || position === 'bottom',
        [`${classPrefix}-${position}`]: true,
      },
      className
    )
  }, [round, position, className])

  const [popupHeight, setPopupHeight] = useState('')
  const [topBottom, setTopBottom] = useState('')

  const getPopupHeight = useCallback(async () => {
    const rect = await getRectInMultiPlatformWithoutCache(nodeRef.current)
    const height = nodeRef.current?.offsetHeight || rect?.height
    setTopBottom(pxTransform(height))
  }, [nodeRef])

  const open = useCallback(() => {
    if (!innerVisible) {
      // 当高度改变后，再次打开时，将高度置为初始高度
      if (
        position === 'bottom' &&
        resizable &&
        nodeRef.current &&
        heightRef.current
      ) {
        setPopupHeight(pxTransform(defaultHeightRef.current))
      }
      setInnerVisible(true)
      setIndex((prev) => prev + 1)
    }
    if (destroyOnClose) {
      setShowChildren(true)
    }
    onOpen?.()
  }, [
    innerVisible,
    position,
    resizable,
    destroyOnClose,
    onOpen,
    nodeRef,
    setInnerVisible,
    setIndex,
    setShowChildren,
  ])

  const close = useCallback(() => {
    if (innerVisible) {
      setInnerVisible(false)
      if (destroyOnClose) {
        setTimeout(() => {
          setShowChildren(false)
        }, Number(duration))
      }
      onClose?.()
    }
  }, [
    innerVisible,
    destroyOnClose,
    duration,
    onClose,
    setInnerVisible,
    setShowChildren,
  ])

  useEffect(() => {
    visible ? open() : close()
  }, [visible, open, close])

  useEffect(() => {
    if (innerVisible && topNodeRef.current && nodeRef.current) {
      nextTick(() => {
        nextTick(() => {
          getPopupHeight()
        })
      })
    }
  }, [innerVisible, getPopupHeight, nodeRef])

  const handleOverlayClick = useCallback(
    (e: ITouchEvent) => {
      e.stopPropagation()
      if (closeOnOverlayClick && onOverlayClick(e)) {
        close()
      }
    },
    [closeOnOverlayClick, onOverlayClick, close]
  )

  const handleCloseIconClick = useCallback(
    (e: ITouchEvent) => {
      onCloseIconClick(e) && close()
    },
    [onCloseIconClick, close]
  )

  const renderCloseIcon = useCallback(() => {
    if (!closeable) return null
    const closeClasses = classNames(
      `${classPrefix}-title-right`,
      `${classPrefix}-title-right-${closeIconPosition}`
    )
    return (
      <View
        className={closeClasses}
        onClick={handleCloseIconClick}
        ariaRole="button"
        ariaLabel={closeAriaLabel || locale.close}
      >
        {React.isValidElement(closeIcon) ? closeIcon : <Close />}
      </View>
    )
  }, [
    closeable,
    closeIconPosition,
    handleCloseIconClick,
    closeAriaLabel,
    locale.close,
    closeIcon,
  ])

  const renderTop = useCallback(() => {
    if (!top) return null
    return (
      <View
        className={`${classPrefix}-bottom-top`}
        ref={topNodeRef}
        style={{ bottom: topBottom }}
      >
        {top}
      </View>
    )
  }, [top, topBottom])

  const renderTitle = useCallback(() => {
    if (left || title || description) {
      return (
        <View className={`${classPrefix}-title`}>
          {position === 'bottom' && (
            <>
              {left && (
                <View className={`${classPrefix}-title-left`}>{left}</View>
              )}
              {(title || description) && (
                <View className={`${classPrefix}-title-wrapper`}>
                  {title && (
                    <View className={`${classPrefix}-title-title`}>
                      {title}
                    </View>
                  )}
                  {description && (
                    <View
                      className={`${classPrefix}-title-description ${title ? `${classPrefix}-title-description-gap` : ''}`}
                    >
                      {description}
                    </View>
                  )}
                </View>
              )}
            </>
          )}
          {renderCloseIcon()}
        </View>
      )
    }
    if (closeable) {
      return renderCloseIcon()
    }
  }, [left, title, description, position, closeable, renderCloseIcon])

  const handleTouchStart: CommonEventFunction = useCallback(
    async (event) => {
      if (position !== 'bottom' || !resizable || !nodeRef.current) return
      const e = event as ITouchEvent
      // 开始touch，记录下touch的pageY，用以判断是向上滑动还是向下滑动
      touchStartRef.current = e.touches[0].pageY
      // 标记开始滑动
      isTouching.current = true
      // 标记当前popup的高度
      const rect = await getRectInMultiPlatformWithoutCache(nodeRef.current)
      rootRect.current = rect
      heightRef.current =
        nodeRef.current?.offsetHeight || rootRect.current?.height || 0
      if (!defaultHeightRef.current)
        defaultHeightRef.current = heightRef.current
      onTouchStart?.(heightRef.current, e)
    },
    [position, resizable, onTouchStart, nodeRef]
  )

  const handleTouchMove: CommonEventFunction = useCallback(
    (event) => {
      if (
        position !== 'bottom' ||
        !resizable ||
        !nodeRef.current ||
        !rootRect.current
      )
        return

      const e = event as ITouchEvent
      e.stopPropagation()

      // 计算位移：move过程中，当前的pageY 与 start值比较
      touchMoveDistanceRef.current = e.touches[0].pageY - touchStartRef.current

      const handleMove = () => {
        const min =
          typeof minHeight === 'number'
            ? minHeight
            : parseInt(String(minHeight || 0), 10) || 0
        const currentHeight = Math.max(
          min,
          heightRef.current - touchMoveDistanceRef.current
        )
        setPopupHeight(pxTransform(currentHeight))
        if (touchMoveDistanceRef.current > 0 && isTouching.current) {
          // 向下滑动
          onTouchMove?.(currentHeight, e, 'down')
        } else {
          // 向上滑动
          onTouchMove?.(currentHeight, e, 'up')
        }
      }
      requestAnimationFrame(handleMove)
    },
    [position, resizable, minHeight, onTouchMove, nodeRef]
  )

  const handleTouchEnd: CommonEventFunction = useCallback(
    (event) => {
      if (
        position !== 'bottom' ||
        !resizable ||
        !nodeRef.current ||
        !rootRect.current
      )
        return
      const e = event as ITouchEvent
      isTouching.current = false
      const min =
        typeof minHeight === 'number'
          ? minHeight
          : parseInt(String(minHeight || 0), 10) || 0
      const currentHeight = Math.max(
        min,
        heightRef.current - touchMoveDistanceRef.current
      )
      onTouchEnd?.(currentHeight, e)
    },
    [position, resizable, minHeight, onTouchEnd, nodeRef]
  )

  const renderPop = () => {
    return (
      <ConfigurableCSSTransition
        nodeRef={nodeRef}
        classNames={transitionName}
        mountOnEnter
        unmountOnExit={destroyOnClose}
        timeout={Number(duration)}
        in={innerVisible}
        onEntered={afterShow}
        onExited={afterClose}
      >
        <View
          ref={nodeRef}
          style={{
            ...popStyles,
            ...(popupHeight ? { height: popupHeight } : {}),
          }}
          className={popClassName}
          onClick={onClick}
          catchMove={lockScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {renderTop()}
          {renderTitle()}
          {showChildren ? children : null}
        </View>
      </ConfigurableCSSTransition>
    )
  }

  const renderNode = () => {
    return (
      <>
        {overlay ? (
          <Overlay
            zIndex={index}
            style={overlayStyles}
            className={overlayClassName}
            visible={innerVisible}
            closeOnOverlayClick={closeOnOverlayClick}
            lockScroll={lockScroll}
            duration={duration}
            onClick={handleOverlayClick}
          />
        ) : null}
        {renderPop()}
      </>
    )
  }

  const resolveContainer = (getContainer: any) =>
    (typeof getContainer === 'function' ? getContainer() : getContainer) ||
    document.body

  const renderToContainer = (getContainer: any, node: ReactElement) => {
    if (getContainer) {
      const container = resolveContainer(getContainer)
      return createPortal(node, container) as ReactPortal
    }
    return node
  }

  return <>{renderToContainer(portal as any, renderNode())}</>
}

Popup.displayName = 'NutPopup'
