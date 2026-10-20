import Notification from './Notification'
import { WebToastProps } from '@/types'

let messageInstance: any = null

let defaultProps: WebToastProps = {
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
  hasOverlay: true, // 是否有遮罩层，默认有；传 false 为非阻断式
  overlayStyle: {},
  overlayClassName: '',
  closeOnOverlayClick: false, // 是否点击遮罩可关闭
  lockScroll: false,
  visible: true,
  zIndex: 1300,
  onClose: () => {},
  onClick: () => {},
}

type ToastNativeProps = Partial<WebToastProps>

function getInstance(
  props: ToastNativeProps,
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
  const opts2 = { ...defaultProps, ...opts, onClose: close }
  getInstance(opts2, (notification: any) => {
    messageInstance = notification
  })
}

const errorMsg = (msg: any) => {
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
    }
  },
}
