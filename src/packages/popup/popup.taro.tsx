import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactElement,
  ReactPortal,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import { View, ITouchEvent } from '@tarojs/components'
import { getRectInMultiPlatformWithoutCache } from '@/utils/taro/get-rect'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'
import Overlay from '@/packages/overlay/index.taro'
import { useLockScrollTaro } from '@/hooks/taro/use-lock-scoll'
import { TaroPopupProps } from '@/types'
import { harmony } from '@/utils/taro/platform'
import { pxTransform } from '@/utils/taro/px-transform'

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
  minHeight: '26%',
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
  } = { ...defaultProps, ...props }
  let innerIndex = zIndex || _zIndex
  const [index, setIndex] = useState(innerIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')
  const nodeRef = useLockScrollTaro(innerVisible && lockScroll)

  const rootRect = useRef<any>(null)
  const touchStartRef = useRef(0)
  const touchMoveDistanceRef = useRef(0)
  const heightRef = useRef(0)
  const isTouching = useRef(false)

  const classPrefix = 'nut-popup'
  const overlayStyles = {
    ...overlayStyle,
  }
  const contentZIndex = harmony() ? index + 1 : index // 解决harmony层级问题
  const popStyles = { zIndex: contentZIndex, minHeight, ...style }
  const popClassName = classNames(
    classPrefix,
    {
      [`${classPrefix}-round`]: round || position === 'bottom',
      [`${classPrefix}-${position}`]: true,
    },
    className
  )

  const open = () => {
    if (!innerVisible) {
      // 当高度改变后，再次打开时，将高度置为初始高度
      if (resizable && nodeRef.current && heightRef.current) {
        nodeRef.current.style.height = `${heightRef.current}px`
      }
      setInnerVisible(true)
      setIndex(++innerIndex)
    }
    if (destroyOnClose) {
      setShowChildren(true)
    }
    onOpen && onOpen()
  }

  const close = () => {
    if (innerVisible) {
      setInnerVisible(false)
      if (destroyOnClose) {
        setTimeout(() => {
          setShowChildren(false)
        }, Number(duration))
      }
      onClose && onClose()
    }
  }

  const handleOverlayClick = (e: ITouchEvent) => {
    e.stopPropagation()
    if (closeOnOverlayClick && onOverlayClick(e)) {
      close()
    }
  }

  const handleCloseIconClick = (e: ITouchEvent) => {
    onCloseIconClick(e) && close()
  }

  const renderCloseIcon = () => {
    const closeClasses = classNames(
      `${classPrefix}-title-right`,
      `${classPrefix}-title-right-${closeIconPosition}`
    )
    return (
      <>
        {closeable && (
          <View className={closeClasses} onClick={handleCloseIconClick}>
            {React.isValidElement(closeIcon) ? closeIcon : <Close />}
          </View>
        )}
      </>
    )
  }

  const renderTitle = () => {
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
  }

  const handleTouchStart = async (event: ITouchEvent) => {
    if (!resizable || !nodeRef.current) return
    // 开始touch，记录下touch的pageY，用以判断是向上滑动还是向下滑动
    touchStartRef.current = event.touches[0].pageY
    // 标记开始滑动
    isTouching.current = true
    // 标记当前popup的高度
    const rect = await getRectInMultiPlatformWithoutCache(nodeRef.current)
    rootRect.current = rect
    heightRef.current =
      nodeRef.current?.offsetHeight || rootRect.current?.height || 0
    // console.log(
    //   'touchstart',
    //   touchStartRef.current,
    //   heightRef.current, //
    //   rootRect.current,
    //   nodeRef.current?.offsetHeight, //
    //   nodeRef.current.style.height //
    // )
    onTouchStart?.(heightRef.current, event)
  }

  const handleTouchMove = (event: ITouchEvent) => {
    if (!resizable || !nodeRef.current || !rootRect.current) return
    event.stopPropagation()

    // move过程中，当前的pageY 与 start值比较
    touchMoveDistanceRef.current =
      event.touches[0].pageY - touchStartRef.current

    const handleMove = () => {
      const currentHeight = heightRef.current - touchMoveDistanceRef.current
      nodeRef.current.style.height = pxTransform(currentHeight)
      if (touchMoveDistanceRef.current > 0 && isTouching.current) {
        // 向下滑动
        onTouchMove?.(currentHeight, event, 'down')
        // console.log('向下', nodeRef.current.style.height)
      } else {
        // 向上滑动
        onTouchMove?.(currentHeight, event, 'up')
        console.log(
          '向上',
          heightRef.current,
          touchMoveDistanceRef.current,
          currentHeight
        )
      }
    }
    requestAnimationFrame(handleMove)
  }

  const handleTouchEnd = (event: ITouchEvent) => {
    if (!resizable || !nodeRef.current || !rootRect.current) return
    console.log('touchend', event)
    isTouching.current = false
    const currentHeight = heightRef.current - touchMoveDistanceRef.current
    onTouchEnd?.(currentHeight, event)
  }

  const renderContent = () => {
    return (
      <View
        ref={nodeRef}
        style={popStyles}
        className={popClassName}
        onClick={onClick}
        catchMove={lockScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {renderTitle()}
        {showChildren ? children : null}
      </View>
    )
  }
  const renderPop = () => {
    return (
      <CSSTransition
        nodeRef={nodeRef}
        classNames={transitionName}
        mountOnEnter
        unmountOnExit={destroyOnClose}
        timeout={duration}
        in={innerVisible}
        onEntered={afterShow}
        onExited={afterClose}
      >
        {renderContent()}
      </CSSTransition>
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

  useEffect(() => {
    visible ? open() : close()
  }, [visible])

  useEffect(() => {
    setTransitionName(transition || `${classPrefix}-slide-${position}`)
  }, [position, transition])

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
