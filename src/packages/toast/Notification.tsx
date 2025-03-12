import * as React from 'react'
import classNames from 'classnames'
import { Failure, Loading, Success, Tips } from '@nutui/icons-react'
import { render, unmount } from '@/utils/render'
import Overlay from '@/packages/overlay/index'
import { WebToastProps } from '@/types'

export interface NotificationState {
  show: boolean
}

const classPrefix = 'nut-toast'
type ToastNativeProps = Partial<WebToastProps>

export default class Notification extends React.PureComponent<
  ToastNativeProps,
  NotificationState
> {
  static newInstance: (properties: ToastNativeProps, callback: any) => void

  private closeTimer: number | undefined

  constructor(props: ToastNativeProps) {
    super(props)
    this.close = this.close.bind(this)
    this.startCloseTimer = this.startCloseTimer.bind(this)
    this.clearCloseTimer = this.clearCloseTimer.bind(this)
    this.clickCover = this.clickCover.bind(this)
    this.state = {
      show: true,
    }
  }

  close() {
    this.setState({
      show: false,
    })
    this.clearCloseTimer()
    if (this.props.id) {
      const element = document.getElementById(this.props.id)
      element && element.parentNode && element.parentNode.removeChild(element)
    }
    this.props.onClose && this.props.onClose()
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
      const iconNode = {
        success: <Success />,
        fail: <Failure />,
        warn: <Tips />,
        loading: <Loading className="nut-icon-loading" />,
      }[icon]
      return <p className={`${classPrefix}-icon-wrapper`}>{iconNode}</p>
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
      closeOnOverlayClick,
      lockScroll,
      style,
      className,
      contentClassName,
      contentStyle,
      wordBreak,
      zIndex,
    } = this.props
    const { show } = this.state
    const classes = classNames({
      'nut-toast-has-icon': icon,
    })
    return (
      <Overlay
        visible={show}
        style={style}
        zIndex={zIndex}
        className={`${classPrefix}-overlay-default ${className}`}
        onClick={() => this.clickCover()}
        closeOnOverlayClick={closeOnOverlayClick}
        lockScroll={lockScroll}
      >
        <div className={`${classPrefix} ${classes}`} id={`toast-${id}`}>
          <div
            className={classNames(
              `${classPrefix}-inner`,
              `${classPrefix}-${position}`,
              contentClassName,
              `${classPrefix}-inner-${size}`,
              `${classPrefix}-inner-${wordBreak}`,
              {
                [`${classPrefix}-inner-descrption`]: content,
              }
            )}
            style={{
              ...contentStyle,
            }}
          >
            {this.renderIcon()}
            {title && <div className={`${classPrefix}-title`}>{title}</div>}
            {content && (
              <span className={`${classPrefix}-text`}>{content}</span>
            )}
          </div>
        </div>
      </Overlay>
    )
  }
}

Notification.newInstance = (properties, callback) => {
  const element = document.createElement('div')
  const id = properties.id ? properties.id : `${new Date().getTime()}`
  element.id = id
  properties.id = id
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
