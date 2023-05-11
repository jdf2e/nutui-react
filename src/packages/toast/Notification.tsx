import * as React from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { render, unmount } from '@/utils/render'
import Overlay from '@/packages/overlay/index'
import { IconFont } from '@nutui/icons-react'
// import Icon from '@/packages/icon/index'

export interface NotificationProps {
  id?: string
  icon: 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode
  content: string | React.ReactNode
  duration: number
  position?: 'top' | 'center' | 'bottom'
  title: string
  maskClickable: boolean
  size: string | number
  closeOnOverlayClick: boolean
  maskClassName?: string
  maskStyle?: React.CSSProperties
  contentClassName?: string
  contentStyle?: React.CSSProperties
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
    const { closeOnOverlayClick } = this.props
    if (closeOnOverlayClick) {
      this.close()
    }
  }

  renderIcon() {
    const { icon } = this.props
    if (typeof icon === 'string') {
      const toastBem = bem('toast')
      let iconNode = null
      switch (icon) {
        case 'success':
          iconNode = <IconFont name="success" />
          break
        case 'loading':
          iconNode = <IconFont name="loading" />
          break
        case 'fail':
          iconNode = <IconFont name="failure" />
          break
        case 'warn':
          iconNode = <IconFont name="issue" />
          break
      }
      return <p className={toastBem('icon-wrapper')}>{iconNode}</p>
    }
    return icon
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
      icon,
      title,
      content,
      position,
      size,
      maskClickable,
      maskStyle,
      maskClassName,
      contentClassName,
      contentStyle,
    } = this.props
    const toastBem = bem('toast')

    const classes = classNames({
      'nut-toast-has-icon': icon,
      [`nut-toast-${size}`]: true,
    })
    return (
      <>
        <Overlay
          visible={true}
          style={{
            '--nutui-overlay-bg-color': 'rgba(0,0,0,0)',
            pointerEvents: maskClickable ? 'none' : 'auto',
            ...maskStyle,
          }}
          className={maskClassName}
          onClick={() => {
            this.clickCover()
          }}
        >
          <div className={`${toastBem()} ${classes}`} id={`toast-${id}`}>
            <div
              className={`${toastBem(
                'inner'
              )} nut-toast-${position} ${contentClassName}`}
              style={contentStyle}
            >
              {this.renderIcon()}
              {title ? <div className="nut-toast-title">{title}</div> : null}
              <span className={toastBem('text')}>{content}</span>
            </div>
          </div>
        </Overlay>
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
