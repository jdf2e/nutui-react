import * as React from 'react'
import Notification, { NotificationProps } from './Notification'
import { Loading } from '@nutui/icons-react'

let messageInstance: any = null
export interface ToastProps {
  id?: string
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  title?: string
  maskClickable?: boolean
  size?: string | number
  icon?: 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode
  content?: React.ReactNode
  onClose?: () => void
  cover?: boolean
  coverColor?: string
  closeOnClickOverlay?: boolean
  maskClassName?: string
  maskStyle?: React.CSSProperties
  contentClassName?: string
  contentStyle?: React.CSSProperties
}

const options: ToastProps = {
  id: '',
  duration: 1.5, // 时长,duration为0则一直展示
  position: 'center',
  title: '',
  maskClickable: true, // 是否允许背景点击
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  onClose: () => {},
  cover: false, // 是否展示透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
  closeOnClickOverlay: false, // 是否点击遮罩可关闭
  contentClassName: '',
}

function getInstance(
  props: NotificationProps,
  callback: (notification: any) => void
) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }

  Notification.newInstance(props, (notification: any) => {
    return callback && callback(notification)
  })
}

function notice(opts: any) {
  function close() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
      opts.onClose && opts.onClose()
    }
  }
  const opts2 = { ...options, ...opts, onClose: close }
  getInstance(opts2, (notification: any) => {
    messageInstance = notification
  })
}
const errorMsg = (msg: any) => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg cannot be null')
  }
}

function show(option: ToastProps) {
  errorMsg(option.content)
  return notice({
    ...option,
  })
}

function config(
  config: Pick<ToastProps, 'duration' | 'position' | 'maskClickable'>
) {
  if (config.duration !== undefined) {
    options.duration = config.duration
  }
  if (config.position !== undefined) {
    options.position = config.position
  }
  if (config.maskClickable !== undefined) {
    options.maskClickable = config.maskClickable
  }
}

export default {
  show,
  config,
  text(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, type: 'text', ...option })
  },
  success(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, icon: 'success', type: 'success', ...option })
  },
  fail(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, icon: 'failure', type: 'fail', ...option })
  },
  loading(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, icon: <Loading />, type: 'loading', ...option })
  },
  warn(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, icon: 'tips', type: 'warn', ...option })
  },
  customIcon(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, ...option })
  },
  clear() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
