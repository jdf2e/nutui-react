import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import { ITouchEvent, View } from '@tarojs/components'
import {
  defaultOverlayProps,
  OverlayProps,
} from '@/packages/overlay/overlay.taro'
import Overlay from '@/packages/overlay/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScrollTaro } from '@/utils/use-lock-scoll-taro'

type Teleport = HTMLElement | (() => HTMLElement) | null

export interface PopupProps extends OverlayProps {
  position: string
  transition: string
  overlayStyle: React.CSSProperties
  overlayClassName: string
  closeable: boolean
  closeIconPosition: string
  closeIcon: ReactNode
  left: ReactNode
  title: ReactNode
  description: ReactNode
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

// 默认1000，参看variables
const _zIndex = 1100

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

  const popClassName = classNames(
    {
      [`${classPrefix}`]: true,
      [`${classPrefix}-round`]: round || position === 'bottom',
      [`${classPrefix}-${position}`]: true,
    },
    className
  )

  const closeClasses = classNames({
    [`${classPrefix}-title-right`]: true,
    [`${classPrefix}-title-right-${closeIconPosition}`]: true,
  })

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
                <div className={`${classPrefix}-title-title`}>
                  {title}
                  {description && (
                    <div className={`${classPrefix}-title-description`}>
                      {description}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {closeable && (
            <View className={closeClasses} onClick={onHandleClickCloseIcon}>
              {React.isValidElement(closeIcon) ? closeIcon : <Close />}
            </View>
          )}
        </View>
      )
    }
    if (closeable) {
      return (
        <>
          {closeable && (
            <View className={closeClasses} onClick={onHandleClickCloseIcon}>
              {React.isValidElement(closeIcon) ? closeIcon : <Close />}
            </View>
          )}
        </>
      )
    }
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
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <View
          ref={refObject}
          style={popStyles}
          className={popClassName}
          onClick={onHandleClick}
          catchMove={lockScroll}
        >
          {renderTitle()}
          {showChildren ? children : ''}
        </View>
      </CSSTransition>
    )
  }

  const renderNode = () => {
    return (
      <View catchMove>
        {overlay ? (
          <Overlay
            style={overlayStyles}
            className={overlayClassName}
            visible={innerVisible}
            closeOnOverlayClick={closeOnOverlayClick}
            lockScroll={lockScroll}
            duration={duration}
            onClick={onHandleClickOverlay}
          />
        ) : null}
        {renderPop()}
      </View>
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

Popup.displayName = 'NutPopup'
