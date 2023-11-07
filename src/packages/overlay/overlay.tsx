import React, {
  useState,
  useEffect,
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  useRef,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useLockScroll } from '@/utils/use-lock-scroll'

export interface OverlayProps extends BasicComponent {
  zIndex: number
  duration: number
  closeOnOverlayClick: boolean
  visible: boolean
  lockScroll: boolean
  onClick: (event: MouseEvent) => void
  afterShow: () => void
  afterClose: () => void
}

export const defaultOverlayProps = {
  ...ComponentDefaults,
  zIndex: 1000,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: (event: MouseEvent) => {},
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    zIndex,
    duration,
    className,
    closeOnOverlayClick,
    visible,
    lockScroll,
    style,
    afterShow,
    afterClose,
    onClick,
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }

  const [innerVisible, setInnerVisible] = useState(visible)

  const classPrefix = `nut-overlay`

  const nodeRef = useRef(null)

  useEffect(() => {
    if (visible) {
      setInnerVisible(true)
    } else {
      setInnerVisible(false)
    }
  }, [visible])

  useLockScroll(nodeRef, !!props.lockScroll && innerVisible)

  const classes = classNames(className, classPrefix)

  const styles = {
    ...style,
  }

  const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
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

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        classNames={`${classPrefix}-slide`}
        unmountOnExit
        timeout={duration}
        in={innerVisible}
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <div
          ref={nodeRef}
          className={classes}
          style={styles}
          {...rest}
          onClick={handleClick}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  )
}

Overlay.defaultProps = defaultOverlayProps
Overlay.displayName = 'NutOverlay'
