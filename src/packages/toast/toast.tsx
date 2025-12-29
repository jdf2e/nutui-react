import { ReactNode } from 'react'
import Notification from './Notification'
import { WebToastProps } from '@/types'
import { defaultOverlayProps } from '@/packages/overlay/overlay'
import { clone } from '@/utils'

type NotificationInstance = {
  component: Notification
  id: number
  destroy: () => void
}

let messageInstance: NotificationInstance | null = null
const messageInstaceSet = new Set<NotificationInstance>()

let defaultProps: WebToastProps = {
  ...defaultOverlayProps,
  id: '',
  position: 'middle',
  title: '',
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  content: '',
  contentClassName: '',
  contentStyle: {},
  wordBreak: 'break-all',
  duration: 2, // 时长,duration为0则一直展示
  closeOnOverlayClick: false, // 是否点击遮罩可关闭
  lockScroll: false,
  zIndex: 1300,
  onClose: () => {},
}

type ToastNativeProps = Partial<WebToastProps>

function getInstance(
  props: ToastNativeProps,
  callback: (notification: NotificationInstance) => void
) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }
  Notification.newInstance(props, (notification: NotificationInstance) => {
    return callback && callback(notification)
  })
}

function notice(opts: ToastNativeProps) {
  function close() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
      opts.onClose && opts.onClose()
    }
  }
  const opts2 = { ...defaultProps, ...opts, onClose: close }
  getInstance(opts2, (notification: NotificationInstance) => {
    const oldInstance = messageInstance ? clone(messageInstance) : null
    if (notification.id === oldInstance?.id) {
      messageInstaceSet.add(oldInstance)
    }
    messageInstance = notification
  })
}

const errorMsg = (msg: ReactNode) => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg cannot be null')
  }
}

function show(option: ToastNativeProps | string) {
  if (typeof option === 'string') {
    errorMsg(option)
    return notice({ content: option })
  }
  errorMsg(option.content)
  return notice({
    ...option,
  })
}

function config(config: ToastNativeProps) {
  defaultProps = { ...defaultProps, ...config }
}

export default {
  show,
  config,
  clear() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
      if (messageInstaceSet?.size) {
        messageInstaceSet.forEach((instance: NotificationInstance) => {
          instance?.destroy()
        })
        messageInstaceSet.clear()
      }
    }
  },
}
