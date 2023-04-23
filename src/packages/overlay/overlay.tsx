import React, {
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface OverlayProps extends BasicComponent {
  zIndex: number
  duration: number
  closeOnOverlayClick: boolean
  visible: boolean
  lockScroll: boolean
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
} as OverlayProps

const classPrefix = `nut-overlay`
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
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }
  const [show, setShow] = useState(visible)
  const renderRef = useRef(true)
  const intervalCloseRef = useRef(0)
  const intervalShowRef = useRef(0)

  useEffect(() => {
    if (visible) {
      intervalShowRef.current = window.setTimeout(() => {
        afterShow && afterShow()
      }, duration * 1000 * 0.8)
      setShow(visible)
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
      'overlay-fade-leave-active': !renderRef.current && !visible,
      'overlay-fade-enter-active': visible,
      'first-render': renderRef.current && !visible,
      'hidden-render': !visible,
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

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (closeOnOverlayClick) {
      props.onClick && props.onClick(e)
      renderRef.current = false
      intervalCloseRef.current = window.setTimeout(() => {
        afterClose && afterClose()
        setShow(!visible)
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
