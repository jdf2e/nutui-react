import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { View, ITouchEvent } from '@tarojs/components'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface OverlayProps extends BasicComponent {
  zIndex: number
  duration: number
  closeOnOverlayClick: boolean
  visible: boolean
  lockScroll: boolean
  onClick: (event: ITouchEvent) => void
  afterShow: () => void
  afterClose: () => void
}
export const defaultOverlayProps = {
  ...ComponentDefaults,
  zIndex: 2000,
  duration: 0.3,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
} as OverlayProps

const classPrefix = `nut-overlay`
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
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

  const handleClick = (event: ITouchEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(event)
      renderRef.current = false
      intervalCloseRef.current = window.setTimeout(() => {
        afterClose && afterClose()
        setShow(!visible)
      }, duration * 1000 * 0.8)
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
