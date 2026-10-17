import React, {
  FunctionComponent,
  MouseEvent,
  ReactElement,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScroll } from '@/hooks/use-lock-scroll'
import { useConfig } from '@/packages/configprovider'
import { WebOverlayProps } from '@/types'

export const defaultOverlayProps: WebOverlayProps = {
  ...ComponentDefaults,
  zIndex: 1000,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  portal: null,
  onClick: () => {},
  afterShow: () => {},
  afterClose: () => {},
}
export const Overlay: FunctionComponent<
  Partial<WebOverlayProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const config = useConfig()
  const {
    children,
    zIndex,
    duration,
    className,
    closeOnOverlayClick,
    visible,
    lockScroll,
    style,
    portal,
    afterShow,
    afterClose,
    onClick,
    ...rest
  } = { ...defaultOverlayProps, ...props }

  const targetPortal =
    props.portal !== undefined ? props.portal : config?.portal

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

  const renderNode = () => (
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

  return <>{renderToContainer(targetPortal as any, renderNode())}</>
}

Overlay.displayName = 'NutOverlay'
