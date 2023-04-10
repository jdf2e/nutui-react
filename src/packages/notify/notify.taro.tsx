import React, { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import bem from '@/utils/bem'

export interface NotifyProps {
  id?: string
  style?: React.CSSProperties
  duration: number
  type: string
  className: string
  position: string
  visible: boolean
  onClose: () => void
  onClick: () => void
}

const defaultProps = {
  id: '',
  duration: 3000, // 时长
  type: 'danger',
  className: '',
  position: 'top',
  visible: false,
  onClose: () => {},
  onClick: () => {},
} as unknown as NotifyProps

export const Notify: FunctionComponent<
  Partial<NotifyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    id,
    children,
    style,
    type,
    className,
    position,
    visible,
    duration,
    onClose,
    onClick,
    ...rest
  } = { ...defaultProps, ...props }

  let timer: number | null
  const [showNotify, SetShow] = useState(false)
  useEffect(() => {
    if (visible) {
      SetShow(true)
      show()
    } else {
      hide()
    }
  }, [visible])

  const clickHandle = () => {
    onClick()
  }

  const show = () => {
    clearTimer()
    if (duration) {
      timer = window.setTimeout(() => {
        hide()
      }, duration)
    }
  }
  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const hide = () => {
    SetShow(false)
    if (id) {
      const element = document.getElementById(id)
      element && element.parentNode && element.parentNode.removeChild(element)
    }
    onClose()
  }

  const notifyBem = bem('notify')

  const classes = classNames({
    'nut-notify--popup-top': position === 'top',
    'nut-notify--popup-bottom': position === 'bottom',
    'nut-notify': true,
    [`nut-notify--${type}`]: true,
  })
  return (
    <>
      <CSSTransition
        in={showNotify}
        timeout={300}
        classNames="fade"
        unmountOnExit
        appear
        position={position}
        id={id}
      >
        <div
          className={`${classes} ${className}`}
          style={style}
          onClick={clickHandle}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  )
}

Notify.defaultProps = defaultProps
Notify.displayName = 'NutNotify'
