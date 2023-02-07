import * as React from 'react'
import * as ReactDOM from 'react-dom'

import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import bem from '@/utils/bem'
import { render } from '@/utils/render'

export interface NotificationProps {
  id: string
  style: React.CSSProperties
  msg: string
  color: string
  duration: number
  type: string
  className: string
  background: string
  children: React.ReactNode
  position: string
  isWrapTeleport: boolean
  onClosed: () => void
  onClick: () => void
}

interface State {
  show: boolean
}

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
    this.props.onClosed()
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
    const {
      children,
      style,
      msg,
      color,
      background,
      type,
      className,
      position,
      isWrapTeleport,
    } = this.props
    const { show } = this.state
    const notifyBem = bem('notify')

    const classes = classNames({
      'nut-notify--popup-top': position === 'top',
      'nut-notify--popup-bottom': position === 'bottom',
      'nut-notify': true,
      [`nut-notify--${type}`]: true,
    })
    return (
      <>
        <CSSTransition
          in={this.state.show}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear
          position={position}
          isWrapTeleport={isWrapTeleport}
        >
          <div
            className={`${classes} ${className}`}
            style={{
              color: `${color || ''}`,
              background: `${background || ''}`,
            }}
            onClick={this.clickCover}
          >
            {children || msg}
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
          ReactDOM.unmountComponentAtNode(element)
          element &&
            element.parentNode &&
            element.parentNode.removeChild(element)
        }, 300)
      },
    })
  }

  render(<Notification {...properties} ref={ref} />, element)
}
