import React, {
  useState,
  useEffect,
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  useRef,
} from 'react'
import { CSSTransition } from 'react-transition-group'
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
  const classPrefix = `nut-overlay`

  const [innerVisible, setInnerVisible] = useState(visible)

  const nodeRef = useRef(null)

  useEffect(() => {
    setInnerVisible(!visible)
  }, [visible])

  useLockScroll(nodeRef, !!lockScroll && innerVisible)

  const classes = classNames(classPrefix, className)

  const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
  }

  return (
    <>
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
          style={style}
          {...rest}
          onClick={handleClick}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  )
}

Overlay.displayName = 'NutOverlay'
