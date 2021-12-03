import React, { FunctionComponent, useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import './notify.scss'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

let messageInstance: any = null

export interface NotifyProps {
  id: string
  color?: string
  msg: string
  duration: number
  className?: string
  background?: string
  type: string
  showPopup: boolean
  onClick?: () => void
  onClose?: () => void
  unmount?: (id: any) => void
}
const defaultProps = {
  id: '',
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
  // let newInstance: (properties: NotifyProps, callback: any) => void

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
    // unmount&&unmount(id)

    if (id) {
      console.log(22, id)
      const element = document.getElementById(id)
      // ReactDOM.unmountComponentAtNode(element)
      element && element.parentNode && element.parentNode.removeChild(element)
    }
  }
  const show = () => {
    clearTimer()
    if (duration) {
      timer = setTimeout(() => {
        hide()
      }, duration)
    }
  }

  const classes = classNames({
    ['popup-top']: true,
    ['nut-notify']: true,
    [`nut-notify--${type}`]: true,
    className,
  })

  return mounted ? (
    <div className={classes} style={{ color: `${color || ''}`, background: `${background || ''}` }}>
      {children ? children : msg}
    </div>
  ) : null
}

Notify.defaultProps = defaultProps
Notify.displayName = 'NutNotify'

let idsMap: string[] = []
let optsMap: any[] = []

Notify.newInstance = (properties, callback) => {
  const element = document.createElement('div')
  let id = properties.id ? properties.id : new Date().getTime() + ''

  element.id = id
  properties.id = id
  // idsMap.push(id);
  // optsMap.push(properties);
  document.body.appendChild(element)

  // let called = false
  // function ref(instance: any) {
  //   if (called) {
  //     return
  //   }
  //   called = true

  //   callback({
  //     component: instance,
  //     destroy() {
  //       ReactDOM.unmountComponentAtNode(element)
  //       element && element.parentNode && element.parentNode.removeChild(element)
  //     },
  //   })
  // }

  // console.log('element',element)
  ReactDOM.render(<Notify {...properties} />, element)
}

function getInstance(props: NotifyProps, callback: (notify: any) => void) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }

  Notify.newInstance(props, (notify: any) => {
    return callback && callback(notify)
  })
}
const clearNotify = (id?: string) => {
  if (id) {
    const container = document.getElementById(id)
    optsMap = optsMap.filter((item) => item.id !== id)
    idsMap = idsMap.filter((item) => item !== id)
    if (container) {
      document.body.removeChild(container)
    }
  } else {
    idsMap.forEach((item) => {
      const container = document.getElementById(item)
      if (container) {
        document.body.removeChild(container)
      }
    })
    optsMap = []
    idsMap = []
  }
}

function notice(opts: any) {
  function close() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
  opts.unmount = clearNotify()
  opts = { ...defaultProps, ...opts, onClose: close }
  getInstance(opts, (notification: any) => {
    messageInstance = notification
  })
}
const errorMsg = (msg: any) => {
  if (!msg) {
    console.warn('[NutUI Notify]: msg不能为空')
    return
  }
}

export default {
  text(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, type: 'base', ...option })
  },
  success(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, type: 'success', ...option })
  },
  primary(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, type: 'primary', ...option })
  },
  danger(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, type: 'danger', ...option })
  },
  warn(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, type: 'warning', ...option })
  },
  customIcon(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, ...option })
  },
  hide() {
    clearNotify()
  },
}
