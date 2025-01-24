import React, {
  FunctionComponent,
  MouseEvent,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react'
import { defaultOverlayProps, OverlayProps } from '@/packages/overlay/overlay'
import Overlay from '@/packages/overlay'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScroll } from '@/utils/use-lock-scroll'

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
const _zIndex = 1100

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
  const nodeRef = React.useRef<HTMLDivElement | null>(null)
  let innerIndex = zIndex || _zIndex
  const [index, setIndex] = useState(innerIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')

  useLockScroll(nodeRef, innerVisible && lockScroll)

  const classPrefix = 'nut-popup'
  const overlayStyles = {
    ...overlayStyle,
    '--nutui-overlay-zIndex': index,
  }
  const popStyles = { ...style, zIndex: index }
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

  const handleOverlayClick = (e: MouseEvent) => {
    e.stopPropagation()
    if (closeOnOverlayClick && onOverlayClick(e)) {
      close()
    }
  }

  const handleCloseIconClick = (e: MouseEvent) => {
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
          <div className={closeClasses} onClick={handleCloseIconClick}>
            {React.isValidElement(closeIcon) ? closeIcon : <Close />}
          </div>
        )}
      </>
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
        <div
          ref={nodeRef}
          style={popStyles}
          className={popClassName}
          onClick={onClick}
        >
          {renderTitle()}
          {showChildren ? children : null}
        </div>
      </CSSTransition>
    )
  }

  const renderNode = () => {
    return (
      <>
        {overlay && (
          <Overlay
            style={overlayStyles}
            className={overlayClassName}
            visible={innerVisible}
            closeOnOverlayClick={closeOnOverlayClick}
            lockScroll={lockScroll}
            duration={duration}
            onClick={handleOverlayClick}
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

  const resolveContainer = (getContainer: Teleport | undefined) =>
    (typeof getContainer === 'function' ? getContainer() : getContainer) ||
    document.body

  const renderToContainer = (getContainer: Teleport, node: ReactElement) => {
    if (getContainer) {
      const container = resolveContainer(getContainer)
      return createPortal(node, container) as ReactPortal
    }
    return node
  }

  return <>{renderToContainer(portal as Teleport, renderNode())}</>
}

Popup.displayName = 'NutPopup'
