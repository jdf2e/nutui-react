import * as React from 'react'
import Notification, { NotificationProps } from './Notification'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

let messageInstance: any = null

export type ToastPosition = 'top' | 'bottom' | 'center'
export type ToastIcon =
  | 'success'
  | 'fail'
  | 'loading'
  | 'warn'
  | React.ReactNode
export type ToastWordBreak = 'normal' | 'break-all' | 'break-word'

export interface ToastProps extends BasicComponent {
  id?: string
  duration?: number
  position?: ToastPosition
  title?: string
  closeOnOverlayClick?: boolean
  lockScroll?: boolean
  size?: string | number
  icon?: ToastIcon
  content?: React.ReactNode
  onClose?: () => void
  contentClassName?: string
  contentStyle?: React.CSSProperties
  wordBreak?: ToastWordBreak
}

let options: ToastProps = {
  ...ComponentDefaults,
  id: '',
  duration: 2, // 时长,duration为0则一直展示
  position: 'center',
  title: '',
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  onClose: () => {},
  closeOnOverlayClick: false, // 是否点击遮罩可关闭
  lockScroll: false,
  contentClassName: '',
  wordBreak: 'break-all',
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

function show(option: ToastProps | string) {
  if (typeof option === 'string') {
    errorMsg(option)
    return notice({ content: option })
  }
  errorMsg(option.content)
  return notice({
    ...option,
  })
}

function config(config: ToastProps) {
  options = { ...options, ...config }
}

export default {
  show,
  config,
  clear() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
