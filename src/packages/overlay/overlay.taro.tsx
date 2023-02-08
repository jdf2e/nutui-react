import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { View, ITouchEvent } from '@tarojs/components'

export interface OverlayProps {
  zIndex: number
  duration: number
  overlayClass: string
  overlayStyle: React.CSSProperties
  closeOnClickOverlay: boolean
  visible: boolean
  lockScroll: boolean
  onClick: (event: ITouchEvent) => void
}
export const defaultOverlayProps = {
  zIndex: 2000,
  duration: 0.3,
  overlayClass: '',
  closeOnClickOverlay: true,
  visible: false,
  lockScroll: true,
  overlayStyle: {},
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    zIndex,
    duration,
    overlayClass,
    closeOnClickOverlay,
    visible,
    lockScroll,
    overlayStyle,
    onClick,
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }
  const [show, setShow] = useState(visible)
  const renderRef = useRef(true)
  const intervalRef = useRef(0)

  useEffect(() => {
    visible && setShow(visible)
    lock()
  }, [visible])

  useEffect(() => {
    return () => {
      clearTimeout(intervalRef.current)
      document.body.classList.remove('nut-overflow-hidden')
    }
  }, [])

  const b = bem('overlay')

  const classes = classNames(
    {
      'overlay-fade-leave-active': !renderRef.current && !visible,
      'overlay-fade-enter-active': visible,
      'first-render': renderRef.current && !visible,
      'hidden-render': !visible,
    },
    overlayClass,
    b('')
  )

  const styles = {
    zIndex,
    animationDuration: `${props.duration}s`,
    ...overlayStyle,
  }

  const lock = () => {
    if (lockScroll && visible) {
      document.body.classList.add('nut-overflow-hidden')
    } else {
      document.body.classList.remove('nut-overflow-hidden')
    }
  }

  const handleClick = (event: ITouchEvent) => {
    if (closeOnClickOverlay) {
      onClick && onClick(event)
      renderRef.current = false
      const id = window.setTimeout(() => {
        setShow(!visible)
      }, duration * 1000 * 0.8)
      intervalRef.current = id
    }
  }

  return (
    <>
      <View
        className={classes}
        style={styles}
        {...(rest as any)}
        catchMove={lockScroll}
        onClick={handleClick}
      >
        {children}
      </View>
    </>
  )
}

Overlay.defaultProps = defaultOverlayProps
Overlay.displayName = 'NutOverlay'
