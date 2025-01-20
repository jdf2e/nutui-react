import React, {
  FunctionComponent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScroll } from '@/utils/use-lock-scroll'
import { OverlayProps } from './types'

export const defaultOverlayProps: OverlayProps = {
  ...ComponentDefaults,
  zIndex: 1000,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: () => {},
  afterShow: () => {},
  afterClose: () => {},
}
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
  } = { ...defaultOverlayProps, ...props }

  const classPrefix = 'nut-overlay'
  const [innerVisible, setInnerVisible] = useState(visible)
  const nodeRef = useRef(null)

  useEffect(() => {
    setInnerVisible(visible)
  }, [visible])

  const shouldLockScroll = !innerVisible ? false : lockScroll
  useLockScroll(nodeRef, shouldLockScroll)
  const classes = classNames(classPrefix, className)
  const styles = {
    ...style,
    zIndex,
  }

  const handleClick = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={`${classPrefix}-slide`}
      unmountOnExit
      timeout={duration}
      in={innerVisible}
      onEntered={afterShow}
      onExited={afterClose}
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
  )
}

Overlay.displayName = 'NutOverlay'
