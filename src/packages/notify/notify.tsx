import * as React from 'react'
import Notification, { NotificationProps } from './Notification'
import { ComponentDefaults } from '@/utils/typings'
import { WebNotifyProps } from '@/types'

let messageInstance: any = null

const options: WebNotifyProps = {
  ...ComponentDefaults,
  id: '',
  duration: 3000,
  type: 'danger',
  position: 'top',
  onClose: () => {},
  onClick: () => {},
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
  opts = { ...options, ...opts }
  getInstance(opts, (notification: any) => {
    messageInstance = notification
  })
}

const errorMsg = (message: any) => {
  if (!message) {
    console.warn('[NutUI Notify]: message不能为空')
  }
}

export default {
  text(message: string | React.ReactNode, option = {}) {
    errorMsg(message)
    return notice({ message, type: 'base', ...option })
  },
  success(message: string | React.ReactNode, option = {}) {
    errorMsg(message)
    return notice({ message, type: 'success', ...option })
  },
  primary(message: string | React.ReactNode, option = {}) {
    errorMsg(message)
    return notice({ message, type: 'primary', ...option })
  },
  danger(message: string | React.ReactNode, option = {}) {
    errorMsg(message)
    return notice({ message, type: 'danger', ...option })
  },
  warn(message: string | React.ReactNode, option = {}) {
    errorMsg(message)
    return notice({ message, type: 'warning', ...option })
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
