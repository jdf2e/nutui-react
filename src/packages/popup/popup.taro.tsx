import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactElement,
  ReactPortal,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import { View, ITouchEvent } from '@tarojs/components'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'
import Overlay from '@/packages/overlay/index.taro'
import { useLockScrollTaro } from '@/hooks/use-lock-scoll-taro'
import { TaroPopupProps } from '@/types'
import { harmony } from '@/utils/platform-taro'

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
  onOpen: () => {},
  onClose: () => {},
  onOverlayClick: () => true,
  onCloseIconClick: () => true,
}

// 默认1000，参看variables
const _zIndex = 1100

export const Popup: FunctionComponent<
  Partial<TaroPopupProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'>
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
    onOpen,
    onClose,
    onOverlayClick,
    onCloseIconClick,
    afterShow,
    afterClose,
    onClick,
  } = { ...defaultProps, ...props }

  let innerIndex = zIndex || _zIndex
  const [index, setIndex] = useState(innerIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')
  const refObject = useLockScrollTaro(innerVisible && lockScroll)
  const classPrefix = 'nut-popup'

  const overlayStyles = {
    ...overlayStyle,
  }
  const contentZIndex = harmony() ? index + 1 : index // 解决harmony层级问题
  const popStyles = { zIndex: contentZIndex, ...style }
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

  const renderContent = () => {
    return (
      <>
        <View
          ref={refObject}
          style={popStyles}
          className={popClassName}
          onClick={onClick}
          catchMove={lockScroll}
        >
          {renderTitle()}
          {showChildren ? children : null}
        </View>
      </>
    )
  }
  const renderPop = () => {
    return (
      <CSSTransition
        nodeRef={refObject}
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
