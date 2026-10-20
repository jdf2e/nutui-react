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
import { useLockScroll } from '@/hooks/use-lock-scroll'
import { WebOverlayProps } from '@/types'
import { useConfig } from '@/packages/configprovider'

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
    ariaLabel,
    ...rest
  } = { ...defaultOverlayProps, ...props }

  const classPrefix = 'nut-overlay'
  const [innerVisible, setInnerVisible] = useState(visible)
  const nodeRef = useRef(null)
  const { locale } = useConfig()

  useEffect(() => {
    setInnerVisible(visible)
  }, [visible])

  const shouldLockScroll = !innerVisible ? false : lockScroll
  useLockScroll(nodeRef, shouldLockScroll)
  const classes = classNames(classPrefix, className)
  const durationMs = Number(duration)
  // 动画时长与 duration 联动：仅在非默认值时写入 CSS 变量
  const durationStyle =
    Number.isFinite(durationMs) &&
    durationMs >= 0 &&
    durationMs !== defaultOverlayProps.duration
      ? ({
          '--nutui-overlay-animation-duration': `${durationMs}ms`,
        } as React.CSSProperties)
      : {}
  const styles = {
    ...durationStyle,
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
        {...(closeOnOverlayClick
          ? { ariaLabel: ariaLabel || locale.mask }
          : {})}
      >
        {children}
      </div>
    </CSSTransition>
  )
}

Overlay.displayName = 'NutOverlay'
