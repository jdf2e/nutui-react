import React, { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface NotifyProps extends BasicComponent {
  id?: string
  duration: number
  type: string
  position: string
  visible: boolean
  onClose: () => void
  onClick: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  id: '',
  duration: 3000, // 时长
  type: 'danger',
  position: 'top',
  visible: false,
  onClose: () => {},
  onClick: () => {},
} as unknown as NotifyProps

const classPrefix = 'nut-notify'

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

  const classes = classNames({
    [`${classPrefix}--popup-top`]: position === 'top',
    [`${classPrefix}--popup-bottom`]: position === 'bottom',
    [`${classPrefix}`]: true,
    [`${classPrefix}--${type}`]: true,
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
