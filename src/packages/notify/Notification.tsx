import * as React from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Close } from '@nutui/icons-react'
import { render as reactRender, unmount } from '@/utils/render'
import { WebNotifyProps } from '@/types'

export interface NotificationProps extends WebNotifyProps {
  message: React.ReactNode
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
    this.props?.onClose()
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
      id,
      style,
      message,
      leftIcon,
      rightIcon,
      closeable,
      className,
      position,
      distance,
      navHeight,
    } = this.props
    const { show } = this.state
    const classes = classNames(classPrefix, className)
    const getDistance = () => {
      if (position === 'top') {
        return { top: `${distance + navHeight}px` }
      }
      return { bottom: `${distance}px` }
    }
    return (
      <>
        <CSSTransition
          in={show}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear
          position={position}
          id={id}
        >
          <div
            className={classes}
            style={{ ...style, ...getDistance() }}
            onClick={this.clickCover}
          >
            {leftIcon ? (
              <div className={`${classPrefix}-left-icon`}>{leftIcon}</div>
            ) : null}
            <div
              className={classNames({
                [`${classPrefix}-content`]: true,
                [`${classPrefix}-ellipsis`]: closeable || rightIcon,
                [`${classPrefix}-layout-left`]: leftIcon || rightIcon,
              })}
            >
              {message}
            </div>
            {rightIcon || closeable ? (
              <div className={`${classPrefix}-right-icon`} onClick={this.close}>
                {rightIcon || (closeable ? <Close /> : null)}
              </div>
            ) : null}
          </div>
        </CSSTransition>
      </>
    )
  }
}

Notification.newInstance = (properties, callback) => {
  const element = document.createElement('div')

  const id = properties.id ? properties.id : `${Date.now()}`

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
