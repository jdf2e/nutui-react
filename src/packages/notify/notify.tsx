import * as React from 'react'
import Notification, { NotificationProps } from './Notification'
import { ComponentDefaults } from '@/utils/typings'
import { WebNotifyProps } from '@/types'

let messageInstance: any = null

const options: WebNotifyProps = {
  ...ComponentDefaults,
  id: '',
  position: 'top',
  distance: 8,
  navHeight: 57,
  closeable: false,
  leftIcon: null,
  rightIcon: null,
  duration: 3000,
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
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
