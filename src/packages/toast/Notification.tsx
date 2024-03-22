import * as React from 'react'
import classNames from 'classnames'
import { Check, Loading, Failure, Tips } from '@nutui/icons-react'
import { render, unmount } from '@/utils/render'
import Overlay from '@/packages/overlay/index'
import { BasicComponent } from '@/utils/typings'
import { ToastWordBreak } from './toast'

export interface NotificationProps extends BasicComponent {
  id?: string
  icon: 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode
  content: string | React.ReactNode
  duration: number
  position?: 'top' | 'center' | 'bottom'
  title: string
  size: string | number
  closeOnOverlayClick: boolean
  lockScroll: boolean
  contentClassName?: string
  contentStyle?: React.CSSProperties
  wordBreak?: ToastWordBreak
  onClose: () => void
}
export interface NotificationState {
  show: boolean
}
const classPrefix = 'nut-toast'

export default class Notification extends React.PureComponent<
  NotificationProps,
  NotificationState
> {
  static newInstance: (properties: NotificationProps, callback: any) => void

  private closeTimer: number | undefined

  constructor(props: NotificationProps) {
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
      let iconNode = null
      switch (icon) {
        case 'success':
          iconNode = <Check />
          break
        case 'loading':
          iconNode = <Loading className="nut-icon-loading" />
          break
        case 'fail':
          iconNode = <Failure />
          break
        case 'warn':
          iconNode = <Tips />
          break
        default:
          break
      }
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
    } = this.props

    const { show } = this.state

    const classes = classNames({
      'nut-toast-has-icon': icon,
      [`nut-toast-${size}`]: true,
    })
    return (
      <>
        <Overlay
          visible={show}
          style={style}
          className={`${classPrefix}-overlay-default ${className}`}
          onClick={() => {
            this.clickCover()
          }}
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
        >
          <div className={`${classPrefix} ${classes}`} id={`toast-${id}`}>
            <div
              className={`${classPrefix}-inner ${classPrefix}-${position} ${contentClassName} ${wordBreak}`}
              style={contentStyle}
            >
              {this.renderIcon()}
              {title ? (
                <div className={`${classPrefix}-title`}>{title}</div>
              ) : null}
              <span className={`${classPrefix}-text`}>{content}</span>
            </div>
          </div>
        </Overlay>
      </>
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
