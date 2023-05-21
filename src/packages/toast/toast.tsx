import * as React from 'react'
import Notification, { NotificationProps } from './Notification'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

let messageInstance: any = null
export interface ToastProps extends BasicComponent {
  id?: string
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  title?: string
  closeOnOverlayClick?: boolean
  size?: string | number
  icon?: 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode
  content?: React.ReactNode
  onClose?: () => void
  contentClassName?: string
  contentStyle?: React.CSSProperties
}

const options: ToastProps = {
  ...ComponentDefaults,
  id: '',
  duration: 2, // 时长,duration为0则一直展示
  position: 'center',
  title: '',
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  onClose: () => {},
  closeOnOverlayClick: false, // 是否点击遮罩可关闭
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

function config(
  config: Pick<ToastProps, 'duration' | 'position' | 'closeOnOverlayClick'>
) {
  if (config.duration !== undefined) {
    options.duration = config.duration
  }
  if (config.position !== undefined) {
    options.position = config.position
  }
  if (config.closeOnOverlayClick !== undefined) {
    options.closeOnOverlayClick = config.closeOnOverlayClick
  }
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
