import * as React from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { render as reactRender, unmount } from '@/utils/render'
import { BasicComponent } from '@/utils/typings'

export interface NotificationProps extends BasicComponent {
  id: string
  message: string | React.ReactNode
  duration: number
  type: string
  position: string
  onClose: () => void
  onClick: () => void
}

interface State {
  show: boolean
}

const classPrefix = 'nut-notify'

export default class Notification extends React.PureComponent<
  NotificationProps,
  State
> {
  private closeTimer: number | undefined

  static newInstance: (properties: NotificationProps, callback: any) => void

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
      }, duration)
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = -1
    }
  }

  clickCover() {
    this.props.onClick()
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  render() {
    const { style, message, type, className, position } = this.props
    const { show } = this.state
    const classes = classNames({
      [`${classPrefix}-popup-top`]: position === 'top',
      [`${classPrefix}-popup-bottom`]: position === 'bottom',
      [`${classPrefix}`]: true,
      [`${classPrefix}-${type}`]: true,
    })
    return (
      <>
        <CSSTransition
          in={show}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear
          position={position}
        >
          <div
            className={`${classes} ${className}`}
            style={style}
            onClick={this.clickCover}
          >
            {message}
          </div>
        </CSSTransition>
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
        setTimeout(() => {
          unmount(element)
          element &&
            element.parentNode &&
            element.parentNode.removeChild(element)
        }, 300)
      },
    })
  }

  reactRender(<Notification {...properties} ref={ref} />, element)
}
