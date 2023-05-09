import React, {
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
} from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
  duration: 0.3,
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
  const classPrefix = `nut-overlay`
  const renderRef = useRef(true)
  const intervalCloseRef = useRef(0)
  const intervalShowRef = useRef(0)

  useEffect(() => {
    if (visible) {
      intervalShowRef.current = window.setTimeout(() => {
        afterShow && afterShow()
      }, duration * 1000 * 0.8)
    }
    lock()
  }, [visible])

  useEffect(() => {
    return () => {
      clearTimeout(intervalCloseRef.current)
      clearTimeout(intervalShowRef.current)
      document.body.classList.remove('nut-overflow-hidden')
    }
  }, [])

  const classes = classNames(
    {
      'nut-overlay-fade-leave-active': !renderRef.current && !visible,
      'nut-overlay-fade-enter-active': visible,
      'nut-overlay-first-render': renderRef.current && !visible,
      'nut-overlay-hidden-render': !visible,
    },
    className,
    classPrefix
  )

  const styles = {
    zIndex,
    animationDuration: `${props.duration}s`,
    ...style,
  }

  const lock = () => {
    if (lockScroll && visible) {
      document.body.classList.add('nut-overflow-hidden')
    } else {
      document.body.classList.remove('nut-overflow-hidden')
    }
  }

  const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
      renderRef.current = false
      intervalCloseRef.current = window.setTimeout(() => {
        afterClose && afterClose()
      }, duration * 1000 * 0.8)
    }
  }

  return (
    <>
      <div className={classes} style={styles} {...rest} onClick={handleClick}>
        {children}
      </div>
    </>
  )
}

Overlay.defaultProps = defaultOverlayProps
Overlay.displayName = 'NutOverlay'
