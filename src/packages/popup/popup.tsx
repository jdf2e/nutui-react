import React, {
  FunctionComponent,
  ReactElement,
  ReactPortal,
  useEffect,
  useState,
  useRef,
} from 'react'
import type { TouchEvent } from 'react'

import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react'
import { defaultOverlayProps } from '@/packages/overlay/overlay'
import Overlay from '@/packages/overlay'
import { useLockScroll } from '@/hooks/use-lock-scroll'
import { WebPopupProps } from '@/types'
import { useConfig } from '@/packages/configprovider'

const defaultProps: WebPopupProps = {
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
  overlayProps: {},
  animated: true,
}

// 默认1000，参看variables
const _zIndex = 1100

export const Popup: FunctionComponent<
  Partial<WebPopupProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'title' | 'onTouchStart' | 'onTouchMove' | 'onTouchEnd'
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
    overlayProps,
    animated,
  } = { ...defaultProps, ...props }
  const nodeRef = React.useRef<HTMLDivElement | null>(null)
  const topNodeRef = React.useRef<HTMLDivElement | null>(null)
  let innerIndex = zIndex || _zIndex
  const [index, setIndex] = useState(innerIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')

  const touchStartRef = useRef(0)
  const touchMoveDistanceRef = useRef(0)
  const heightRef = useRef(0)
  // 首次可调整时记录的默认高度
  const defaultHeightRef = useRef(0)
  const isTouching = useRef(false)
  const role = 'dialog'
  const { locale } = useConfig()
  const transitionDuration = animated ? Number(duration) : 0

  useLockScroll(nodeRef, innerVisible && lockScroll)

  const classPrefix = 'nut-popup'
  const overlayStyles = {
    ...overlayStyle,
  }
  const popStyles = {
    ...style,
    zIndex: index,
    minHeight,
  }

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
      if (
        position === 'bottom' &&
        resizable &&
        nodeRef.current &&
        heightRef.current
      ) {
        nodeRef.current.style.height = `${defaultHeightRef.current}px`
      }
      setInnerVisible(true)
      setIndex(++innerIndex)
    }
    if (destroyOnClose) {
      setShowChildren(true)
    }
    onOpen && onOpen()
  }

  useEffect(() => {
    if (topNodeRef.current && nodeRef.current) {
      topNodeRef.current.style.bottom = `${nodeRef.current?.clientHeight}px`
    }
  }, [innerVisible])

  const close = () => {
    if (innerVisible) {
      setInnerVisible(false)
      if (destroyOnClose) {
        setTimeout(() => {
          setShowChildren(false)
        }, transitionDuration)
      }
      onClose && onClose()
    }
  }

  const handleOverlayClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation()
    if (closeOnOverlayClick && onOverlayClick(e)) {
      close()
    }
  }

  const handleCloseIconClick = (e: React.MouseEvent | React.KeyboardEvent) => {
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
          <div
            className={closeClasses}
            onClick={handleCloseIconClick}
            role="button"
            aria-label={closeAriaLabel || locale.close}
            tabIndex={0}
          >
            {React.isValidElement(closeIcon) ? (
              closeIcon
            ) : (
              <Close aria-hidden="true" />
            )}
          </div>
        )}
      </>
    )
  }

  const renderTop = () => {
    if (!top) return null
    return (
      <div className={`${classPrefix}-bottom-top`} ref={topNodeRef}>
        {top}
      </div>
    )
  }

  const renderTitle = () => {
    if (left || title || description) {
      return (
        <div className={`${classPrefix}-title`}>
          {position === 'bottom' && (
            <>
              {left && (
                <div className={`${classPrefix}-title-left`}>{left}</div>
              )}
              {(title || description) && (
                <div className={`${classPrefix}-title-wrapper`}>
                  {title && (
                    <div className={`${classPrefix}-title-title`}>{title}</div>
                  )}
                  {description && (
                    <div
                      className={`${classPrefix}-title-description ${title ? `${classPrefix}-title-description-gap` : ''}`}
                    >
                      {description}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {renderCloseIcon()}
        </div>
      )
    }
    if (closeable) {
      return renderCloseIcon()
    }
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (position !== 'bottom' || !resizable || !nodeRef.current) return
    // 开始touch，记录下touch的pageY，用以判断是向上滑动还是向下滑动
    touchStartRef.current = event.touches[0].pageY
    // 标记开始滑动
    isTouching.current = true
    // 标记当前popup的高度
    heightRef.current = nodeRef.current?.offsetHeight || 0
    if (!defaultHeightRef.current) defaultHeightRef.current = heightRef.current
    onTouchStart?.(heightRef.current, event)
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (position !== 'bottom' || !resizable || !nodeRef.current) return
    event.stopPropagation()

    // move过程中，当前的pageY 与 start值比较
    touchMoveDistanceRef.current =
      event.touches[0].pageY - touchStartRef.current

    const min =
      typeof minHeight === 'number'
        ? minHeight
        : parseInt(String(minHeight || 0), 10) || 0
    const currentHeight = Math.max(
      min,
      heightRef.current - touchMoveDistanceRef.current
    )

    nodeRef.current.style.height = `${currentHeight}px`
    // 向下滑动
    if (touchMoveDistanceRef.current > 0) {
      onTouchMove?.(currentHeight, event, 'down')
    } else {
      // 向上滑动
      onTouchMove?.(currentHeight, event, 'up')
    }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (position !== 'bottom' || !resizable || !nodeRef.current) return
    isTouching.current = false
    const min =
      typeof minHeight === 'number'
        ? minHeight
        : parseInt(String(minHeight || 0), 10) || 0
    const currentHeight = Math.max(
      min,
      heightRef.current - touchMoveDistanceRef.current
    )
    onTouchEnd?.(currentHeight, event)
  }

  const renderPop = () => {
    return (
      <CSSTransition
        nodeRef={nodeRef}
        classNames={transitionName}
        mountOnEnter
        unmountOnExit={destroyOnClose}
        timeout={transitionDuration}
        in={innerVisible}
        onEntered={afterShow}
        onExited={afterClose}
      >
        <div
          ref={nodeRef}
          style={popStyles}
          className={popClassName}
          onClick={onClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          role={role}
        >
          {renderTop()}
          {renderTitle()}
          {showChildren && children}
        </div>
      </CSSTransition>
    )
  }

  const renderNode = () => {
    return (
      <>
        {overlay && (
          <Overlay
            zIndex={index}
            style={overlayStyles}
            className={overlayClassName}
            visible={innerVisible}
            closeOnOverlayClick={closeOnOverlayClick}
            lockScroll={lockScroll}
            duration={transitionDuration}
            onClick={handleOverlayClick}
            {...overlayProps}
          />
        )}
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
