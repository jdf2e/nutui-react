import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactElement,
  ReactPortal,
  ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import { View, ITouchEvent } from '@tarojs/components'

import {
  OverlayProps,
  defaultOverlayProps,
} from '@/packages/overlay/overlay.taro'
import Overlay from '@/packages/overlay/index.taro'
import { ComponentDefaults } from '@/utils/typings'

type Teleport = HTMLElement | (() => HTMLElement) | null

export interface PopupProps extends OverlayProps {
  position: string
  transition: string
  overlayStyle: React.CSSProperties
  overlayClassName: string
  closeable: boolean
  closeIconPosition: string
  closeIcon: ReactNode
  left?: ReactNode
  title?: ReactNode
  destroyOnClose: boolean
  portal: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onOverlayClick: (e: ITouchEvent) => boolean | void
  onCloseIconClick: (e: ITouchEvent) => boolean | void
}

const defaultProps = {
  ...ComponentDefaults,
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
  onOverlayClick: (e: ITouchEvent) => true,
  onCloseIconClick: (e: ITouchEvent) => true,
  ...defaultOverlayProps,
} as PopupProps

let _zIndex = 2000

export const Popup: FunctionComponent<
  Partial<PopupProps> &
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

  const [index, setIndex] = useState(zIndex || _zIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')

  const classPrefix = 'nut-popup'
  const baseStyle = {
    zIndex: index,
  }

  const overlayStyles = {
    ...overlayStyle,
    '--nutui-overlay-zIndex': index,
  }

  const popStyles = {
    ...style,
    ...baseStyle,
  }

  const popClassName = classNames({
    round,
    [`${classPrefix}`]: true,
    [`${classPrefix}-${position}`]: true,
    [`${className || ''}`]: true,
  })

  const closeClasses = classNames({
    [`${classPrefix}__close-icon`]: true,
    [`${classPrefix}__close-icon--${closeIconPosition}`]: true,
  })

  const open = () => {
    if (!innerVisible) {
      setInnerVisible(true)
      setIndex(++_zIndex)
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

  const onHandleClickOverlay = (e: ITouchEvent) => {
    e.stopPropagation()
    if (closeOnOverlayClick) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && close()
    }
  }

  const onHandleClick = (e: ITouchEvent) => {
    onClick && onClick(e)
  }

  const onHandleClickCloseIcon = (e: ITouchEvent) => {
    const closed = onCloseIconClick && onCloseIconClick(e)
    closed && close()
  }

  const onHandleOpened: EnterHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    afterShow && afterShow()
  }

  const onHandleClosed: ExitHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    afterClose && afterClose()
  }

  const resolveContainer = (getContainer: Teleport | undefined) => {
    const container =
      typeof getContainer === 'function' ? getContainer() : getContainer
    return container || document.body
  }

  const renderToContainer = (getContainer: Teleport, node: ReactElement) => {
    if (getContainer) {
      const container = resolveContainer(getContainer)
      return createPortal(node, container) as ReactPortal
    }
    return node
  }

  const renderIcon = () => {
    if (closeable) {
      return (
        <View className={closeClasses} onClick={onHandleClickCloseIcon}>
          {React.isValidElement(closeIcon) ? (
            closeIcon
          ) : (
            <Close width={12} height={12} />
          )}
        </View>
      )
    }
    return null
  }

  const renderTitle = () => {
    return (
      <>
        {position === 'bottom' && (
          <>
            {left && <View className={`${classPrefix}-left-icon`}>{left}</View>}
            {title && <View className={`${classPrefix}-title`}>{title}</View>}
          </>
        )}
      </>
    )
  }
  const renderPop = () => {
    return (
      <CSSTransition
        classNames={transitionName}
        unmountOnExit
        timeout={duration}
        in={innerVisible}
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <View
          style={popStyles}
          className={popClassName}
          onClick={onHandleClick}
        >
          {renderTitle()}
          {renderIcon()}
          {showChildren ? children : ''}
        </View>
      </CSSTransition>
    )
  }

  const renderNode = () => {
    return (
      <>
        {overlay ? (
          <>
            <Overlay
              style={overlayStyles}
              className={overlayClassName}
              visible={innerVisible}
              closeOnOverlayClick={closeOnOverlayClick}
              lockScroll={lockScroll}
              duration={duration}
              onClick={onHandleClickOverlay}
            />
            {renderPop()}
          </>
        ) : (
          <>{renderPop()}</>
        )}
      </>
    )
  }

  useEffect(() => {
    visible && open()
    !visible && close()
  }, [visible])

  useEffect(() => {
    setTransitionName(transition || `${classPrefix}-slide-${position}`)
  }, [position, transition])

  return <>{renderToContainer(portal as Teleport, renderNode())}</>
}

Popup.defaultProps = defaultProps
Popup.displayName = 'NutPopup'
