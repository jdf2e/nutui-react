import * as React from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { render, unmount } from '@/utils/render'

export interface NotificationProps {
  id?: string
  style?: React.CSSProperties
  icon: React.ReactNode
  msg: string | React.ReactNode
  duration: number
  position?: 'top' | 'center' | 'bottom'
  type: string
  title: string
  className: string
  size: string | number
  cover: boolean
  coverColor: string
  closeOnClickOverlay: boolean
  onClose: () => void
}

export default class Notification extends React.PureComponent<NotificationProps> {
  static newInstance: (properties: NotificationProps, callback: any) => void

  private closeTimer: number | undefined

  constructor(props: NotificationProps) {
    super(props)
    this.close = this.close.bind(this)
    this.startCloseTimer = this.startCloseTimer.bind(this)
    this.clearCloseTimer = this.clearCloseTimer.bind(this)
    this.close = this.close.bind(this)
    this.clickCover = this.clickCover.bind(this)
  }

  close() {
    this.clearCloseTimer()
    this.props.onClose()
  }

  startCloseTimer() {
    const { duration } = this.props
    if (duration) {
      this.closeTimer = window.setTimeout(() => {
        this.close()
      }, duration * 1000)
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = -1
    }
  }

  clickCover() {
    const { closeOnClickOverlay } = this.props
    if (closeOnClickOverlay) {
      this.close()
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  render() {
    const {
      id,
      style,
      icon,
      title,
      msg,
      position,
      coverColor,
      size,
      className,
      cover,
      type,
    } = this.props
    const toastBem = bem('toast')

    const classes = classNames({
      'nut-toast-has-icon': icon,
      'nut-toast-cover': cover,
      'nut-toast-loading': type === 'loading',
      [`nut-toast-${size}`]: true,
    })
    return (
      <>
        <div
          className={`${toastBem()} ${classes} ${className}`}
          id={`toast-${id}`}
          style={{
            backgroundColor: cover ? coverColor : '',
            ...style,
          }}
          onClick={() => {
            this.clickCover()
          }}
        >
          <div className={`${toastBem('inner')} nut-toast-${position}`}>
            {icon ? <p className={toastBem('icon-wrapper')}>{icon}</p> : null}
            {title ? <div className="nut-toast-title">{title}</div> : null}
            <span className={toastBem('text')}>{msg}</span>
          </div>
        </div>
      </>
    )
  }
}

Notification.newInstance = (properties, callback) => {
  const element = document.createElement('div')
  if (properties.id) {
    element.setAttribute('id', `${properties.id}`)
  }
  document.body.appendChild(element)

  let called = false

  function ref(instance: any) {
    if (called) {
      return
    }
    called = true

    callback({
      component: instance,
      destroy() {
        unmount(element)
        element && element.parentNode && element.parentNode.removeChild(element)
      },
    })
  }

  render(<Notification {...properties} ref={ref} />, element)
}
