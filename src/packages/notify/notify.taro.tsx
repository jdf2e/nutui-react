import React, { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import bem from '@/utils/bem'

export interface NotifyProps {
  id?: string
  style?: React.CSSProperties
  msg: string
  color: string
  duration: number
  type: string
  className: string
  background: string
  position: string
  isWrapTeleport: boolean
  visible: boolean
  onClosed: () => void
  onClick: () => void
}

const defaultProps = {
  id: '',
  msg: '',
  color: '',
  duration: 3000, // 时长
  type: 'danger',
  className: '',
  background: '',
  position: 'top',
  isWrapTeleport: true,
  visible: false,
  onClosed: () => {},
  onClick: () => {},
} as unknown as NotifyProps

export const Notify: FunctionComponent<
  Partial<NotifyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    id,
    children,
    style,
    msg,
    color,
    background,
    type,
    className,
    position,
    isWrapTeleport,
    visible,
    duration,
    onClosed,
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
    onClosed()
  }

  const notifyBem = bem('notify')

  const classes = classNames({
    'popup-top': position === 'top',
    'popup-bottom': position === 'bottom',
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
          style={{
            color: `${color || ''}`,
            background: `${background || ''}`,
          }}
          onClick={clickHandle}
        >
          {children || msg}
        </div>
      </CSSTransition>
    </>
  )
}

Notify.defaultProps = defaultProps
Notify.displayName = 'NutNotify'
