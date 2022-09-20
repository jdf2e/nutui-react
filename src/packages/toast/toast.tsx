import * as React from 'react'
import Notification, { NotificationProps } from './Notification'

let messageInstance: any = null
export interface ToastProps {
  id?: string
  msg: string
  style?: React.CSSProperties
  duration: number
  center: boolean
  type: string
  title: string
  customClass?: string
  bottom: string
  size: string | number
  icon: string | null
  iconSize: string
  textAlignCenter: boolean
  loadingRotate: boolean
  bgColor: string
  onClose: () => void
  cover: boolean
  coverColor: string
  closeOnClickOverlay: boolean
}

const options: ToastProps = {
  msg: '',
  id: '',
  style: {},
  duration: 1.5, // 时长,duration为0则一直展示
  center: true, // toast是否居中展示
  type: 'text',
  title: '',
  customClass: '', // 自定义样式名
  bottom: '30px', // center为false时生效，距离底部位置
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  iconSize: '20',
  textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
  loadingRotate: true, // 未实现
  bgColor: 'rgba(0, 0, 0, .8)',
  onClose: () => {},
  cover: false, // 是否展示透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
  closeOnClickOverlay: false, // 是否点击遮罩可关闭
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

export default {
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
    return notice({ msg, icon: 'loading', type: 'loading', ...option })
  },
  warn(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, icon: 'tips', type: 'warn', ...option })
  },
  customIcon(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg)
    return notice({ msg, ...option })
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
