import React, { FunctionComponent, useEffect, useState } from 'react'
import './notify.scss'
import classNames from 'classnames'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

export interface NotifyProps {
  id: string
  color: string
  msg: string
  duration: number
  className: string
  background: string
  type: string
  showPopup: boolean
  onClick: () => void
  onClose: () => void
  unmount: (id: any) => void
}
const defaultProps = {
  color: '',
  msg: '',
  duration: 3000,
  className: '',
  background: '',
  type: 'danger',
  showPopup: false,
} as NotifyProps
export const Notify: FunctionComponent<
  Partial<NotifyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    id,
    color,
    msg,
    duration,
    className,
    background,
    type,
    showPopup,
    onClick,
    onClose,
    unmount,
  } = {
    ...defaultProps,
    ...props,
  }

  let timer: null | number = null
  const [mounted, SetMounted] = useState(false)

  useEffect(() => {
    SetMounted(true)
    return () => {
      clearTimer()
      unmount && unmount(id)
      onClose && onClose()
    }
  }, [])

  useEffect(() => {
    if (duration) {
      show()
    }
  }, [duration])

  const clickCover = () => {
    onClick && onClick()
  }
  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const hide = () => {
    SetMounted(false)
  }
  const show = () => {
    clearTimer()
    if (duration) {
      timer = setTimeout(() => {
        hide()
      }, duration)
    }
  }

  // if (duration) {
  //   show();
  // }
  const classes = classNames({
    ['popup-top']: true,
    ['nut-notify']: true,
    [`nut-notify--${type}`]: true,
    className,
  })

  return mounted ? (
    <React.Fragment>
      <div className={classes} style={{ color: `${color}`, background: `${background}` }}>
        {children ? children : msg}
      </div>
    </React.Fragment>
  ) : null
}

Notify.defaultProps = defaultProps
Notify.displayName = 'NutNotify'
