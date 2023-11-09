import React, {
  FunctionComponent,
  useState,
  useEffect,
  MouseEventHandler,
  MouseEvent,
  ReactElement,
  ReactPortal,
  ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import { OverlayProps, defaultOverlayProps } from '@/packages/overlay/overlay'
import Overlay from '@/packages/overlay'
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
  left: ReactNode
  title: ReactNode
  subtitle: ReactNode
  destroyOnClose: boolean
  portal: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onOverlayClick: (e: MouseEvent) => boolean | void
  onCloseIconClick: (e: MouseEvent) => boolean | void
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
  onOverlayClick: (e: MouseEvent) => true,
  onCloseIconClick: (e: MouseEvent) => true,
  ...defaultOverlayProps,
} as PopupProps

// 默认1000，参看variables
let _zIndex = 1100

export const Popup: FunctionComponent<
  Partial<PopupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
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
    subtitle,
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
  const nodeRef = React.useRef(null)
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
    [`${classPrefix}-round`]: round || position === 'bottom',
    [`${classPrefix}`]: true,
    [`${classPrefix}-${position}`]: true,
    [`${className || ''}`]: true,
  })

  const closeClasses = classNames({
    [`${classPrefix}-title-right`]: true,
    [`${classPrefix}-title-right--${closeIconPosition}`]: true,
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

  const onHandleClickOverlay = (e: MouseEvent) => {
    e.stopPropagation()
    if (closeOnOverlayClick) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && close()
    }
  }

  const onHandleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    onClick && onClick(e)
  }

  const onHandleClickCloseIcon: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent
  ) => {
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
    if (left || title || subtitle) {
      return (
        <div className={`${classPrefix}-title`}>
          {position === 'bottom' && (
            <>
              {left && (
                <div className={`${classPrefix}-title-left`}>{left}</div>
              )}
              {(title || subtitle) && (
                <div className={`${classPrefix}-title-title`}>
                  {title}
                  {subtitle && (
                    <div className={`${classPrefix}-title-title--subtitle`}>
                      {subtitle}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {closeable && (
            <div className={closeClasses} onClick={onHandleClickCloseIcon}>
              {React.isValidElement(closeIcon) ? closeIcon : <Close />}
            </div>
          )}
        </div>
      )
    }
    if (closeable) {
      return (
        <>
          {closeable && (
            <div className={closeClasses} onClick={onHandleClickCloseIcon}>
              {React.isValidElement(closeIcon) ? closeIcon : <Close />}
            </div>
          )}
        </>
      )
    }
  }
  const renderPop = () => {
    return (
      <CSSTransition
        nodeRef={nodeRef}
        classNames={transitionName}
        unmountOnExit
        timeout={duration}
        in={innerVisible}
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <div
          ref={nodeRef}
          style={popStyles}
          className={popClassName}
          onClick={onHandleClick}
        >
          {renderTitle()}
          {showChildren ? children : ''}
        </div>
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
              zIndex={zIndex}
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
