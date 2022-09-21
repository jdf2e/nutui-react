import React, {
  FunctionComponent,
  useState,
  useEffect,
  MouseEventHandler,
  MouseEvent,
  ReactElement,
  ReactPortal,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import { OverlayProps, defaultOverlayProps } from '@/packages/overlay/overlay'
import Icon from '@/packages/icon'
import Overlay from '@/packages/overlay'
import bem from '@/utils/bem'
import { ComponentDefaults, IComponent } from '@/utils/typings'

type Teleport = HTMLElement | (() => HTMLElement) | null

export interface PopupProps extends OverlayProps, IComponent {
  position: string
  transition: string
  style: React.CSSProperties
  popClass: string
  closeable: boolean
  closeIconPosition: string
  closeIcon: string
  destroyOnClose: boolean
  teleport: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onClick: (e: MouseEvent) => void
  onOpened: (e: HTMLElement) => void
  onClosed: (e: HTMLElement) => void
  onClickOverlay: (e: MouseEvent) => void
  onClickCloseIcon: (e: MouseEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'center',
  transition: '',
  style: {},
  popClass: '',
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  destroyOnClose: true,
  teleport: null,
  overlay: true,
  round: false,
  onOpen: () => {},
  onClose: () => {},
  onClick: (e: MouseEvent) => {},
  onOpened: (e: HTMLElement) => {},
  onClosed: (e: HTMLElement) => {},
  onClickOverlay: (e: MouseEvent) => {},
  onClickCloseIcon: (e: MouseEvent) => {},
  ...defaultOverlayProps,
} as PopupProps

let _zIndex = 2000

export const Popup: FunctionComponent<
  Partial<PopupProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    visible,
    overlay,
    closeOnClickOverlay,
    overlayStyle,
    overlayClass,
    zIndex,
    lockScroll,
    duration,
    closeable,
    closeIconPosition,
    closeIcon,
    style,
    transition,
    round,
    position,
    popClass,
    className,
    destroyOnClose,
    teleport,
    onOpen,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onOpened,
    onClosed,
    onClick,
    iconClassPrefix,
    iconFontClassName,
  } = props

  const [index, setIndex] = useState(zIndex || _zIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')

  const b = bem('popup')

  const baseStyle = {
    zIndex: index,
    animationDuration: `${duration}s`,
  }

  const overlayStyles = {
    ...overlayStyle,
    ...baseStyle,
  }

  const popStyles = {
    ...style,
    ...baseStyle,
  }

  const classes = classNames(
    {
      round,
      [`popup-${position}`]: true,
      [`${popClass}`]: true,
      [`${className}`]: true,
    },
    b('')
  )

  const closeClasses = classNames({
    'nutui-popup__close-icon': true,
    [`nutui-popup__close-icon--${closeIconPosition}`]: true,
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
          onClose && onClose()
        }, Number(duration) * 1000)
      }
    }
  }

  const onHandleClickOverlay = (e: MouseEvent) => {
    if (closeOnClickOverlay) {
      onClickOverlay && onClickOverlay(e)
      close()
    }
  }

  const onHandleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    onClick && onClick(e)
  }

  const onHandleClickCloseIcon: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent
  ) => {
    onClickCloseIcon && onClickCloseIcon(e)
    close()
  }

  const onHandleOpened: EnterHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    onOpened && onOpened(e)
  }

  const onHandleClosed: ExitHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    onClosed && onClosed(e)
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

  const renderPop = () => {
    return (
      <CSSTransition
        classNames={transitionName}
        unmountOnExit
        timeout={500}
        in={innerVisible}
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <div style={popStyles} className={classes} onClick={onHandleClick}>
          {showChildren ? children : ''}
          {closeable ? (
            <div className={closeClasses} onClick={onHandleClickCloseIcon}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={closeIcon}
                size="12px"
              />
            </div>
          ) : (
            ''
          )}
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
              overlayClass={overlayClass}
              visible={innerVisible}
              closeOnClickOverlay={closeOnClickOverlay}
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
    setTransitionName(transition || `popup-slide-${position}`)
  }, [position])

  return <>{renderToContainer(teleport as Teleport, renderNode())}</>
}

Popup.defaultProps = defaultProps
Popup.displayName = 'NutPopup'
