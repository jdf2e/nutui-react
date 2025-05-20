import React, {
  FunctionComponent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useSpring, animated } from '@react-spring/web'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScroll } from '@/hooks/use-lock-scroll'
import { WebOverlayProps } from '@/types'

export const defaultOverlayProps: WebOverlayProps = {
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
  Partial<WebOverlayProps> & React.HTMLAttributes<HTMLDivElement>
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
  const classes = classNames(classPrefix, `${classPrefix}-slide`, className)
  const styles = {
    ...style,
    zIndex,
  }

  const handleClick = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
  }

  const springProps = useSpring({
    opacity: innerVisible ? 1 : 0,
    config: { duration },
    onRest: () => {
      if (innerVisible) {
        afterShow()
      } else {
        afterClose()
      }
    },
  })

  return (
    innerVisible && (
      <animated.div
        ref={nodeRef}
        className={classes}
        style={{ ...styles, ...springProps }}
        {...rest}
        onClick={handleClick}
      >
        {children}
      </animated.div>
    )
  )
}

Overlay.displayName = 'NutOverlay'
