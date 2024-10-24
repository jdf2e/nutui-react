import React, { useState, useEffect, FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
} from '@/utils/use-custom-event'
import { mergeProps } from '@/utils/merge-props'

export type NotifyPosition = 'top' | 'bottom'
export type NotifyType = 'primary' | 'success' | 'danger' | 'warning'

export interface NotifyProps extends BasicComponent {
  id?: string
  duration: number
  type: NotifyType
  position: NotifyPosition
  visible: boolean
  onClose: () => void
  onClick: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  id: '',
  duration: 3000,
  type: 'danger',
  position: 'top',
  visible: false,
  onClose: () => {},
  onClick: () => {},
} as NotifyProps

const classPrefix = 'nut-notify'

export const Notify: FunctionComponent<Partial<NotifyProps>> & {
  open: typeof open
  close: typeof close
} = (props: Partial<NotifyProps>) => {
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
  } = mergeProps(defaultProps, props)

  useCustomEvent(id as string, (status: boolean) => {
    status ? show() : hide()
  })

  let timer: number | null
  const [showNotify, setShowNotify] = useState(false)
  const cssRef = useRef(null)
  useEffect(() => {
    if (visible) {
      show()
    } else {
      hide()
    }
  }, [visible])

  const clickHandle = () => {
    onClick()
  }

  const show = () => {
    setShowNotify(true)
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
    setShowNotify(false)
    onClose()
  }

  const classes = classNames({
    [`${classPrefix}-popup-top`]: position === 'top',
    [`${classPrefix}-popup-bottom`]: position === 'bottom',
    [`${classPrefix}`]: true,
    [`${classPrefix}-${type}`]: true,
  })
  return (
    <>
      <CSSTransition
        nodeRef={cssRef}
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

export function open(selector: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, true)
}

export function close(selector: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, false)
}

Notify.displayName = 'NutNotify'
Notify.open = open
Notify.close = close
