import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'
import { render, unmount } from '@/utils/render'

export interface NotificationProps {
  id?: string
  style?: React.CSSProperties
  icon: string | null
  iconSize: string
  msg: string | React.ReactNode
  bottom: string
  duration: number
  center: boolean
  type: string
  title: string
  customClass: string
  size: string | number
  textAlignCenter: boolean
  // loadingRotate: boolean
  bgColor: string
  cover: boolean
  coverColor: string
  closeOnClickOverlay: boolean
  onClose: () => void
  // className?: string
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
      iconSize,
      title,
      msg,
      bottom,
      center,
      bgColor,
      coverColor,
      textAlignCenter,
      size,
      customClass,
      cover,
      type,
    } = this.props
    const toastBem = bem('toast')

    const classes = classNames({
      'nut-toast-center': center,
      'nut-toast-has-icon': icon,
      'nut-toast-cover': cover,
      'nut-toast-loading': type === 'loading',
      [`${customClass}`]: true,
      [`nut-toast-${size}`]: true,
    })
    return (
      <>
        <div
          className={`${toastBem()} ${classes}`}
          id={`toast-${id}`}
          style={{
            bottom: center ? 'auto' : `${bottom}`,
            backgroundColor: cover ? coverColor : '',
            ...style,
          }}
          onClick={() => {
            this.clickCover()
          }}
        >
          <div
            className={toastBem('inner')}
            style={{
              textAlign: textAlignCenter ? 'center' : 'left',
              backgroundColor: bgColor,
            }}
          >
            {icon ? (
              <p className={toastBem('icon-wrapper')}>
                <Icon name={icon || ''} color="#ffffff" size={iconSize} />
              </p>
            ) : null}
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
