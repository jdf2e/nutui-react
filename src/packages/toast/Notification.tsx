import * as React from 'react'
import classNames from 'classnames'
import { render, unmount } from '@/utils/render'
import Overlay from '@/packages/overlay/index'
import { Check, Loading, Failure, Issue } from '@nutui/icons-react'
import { BasicComponent } from '@/utils/typings'

export interface NotificationProps extends BasicComponent {
  id?: string
  icon: 'success' | 'fail' | 'loading' | 'warn' | React.ReactNode
  content: string | React.ReactNode
  duration: number
  position?: 'top' | 'center' | 'bottom'
  title: string
  size: string | number
  closeOnOverlayClick: boolean
  contentClassName?: string
  contentStyle?: React.CSSProperties
  onClose: () => void
}

const classPrefix = 'nut-toast'

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
          iconNode = <Issue />
          break
      }
      return <p className={`${classPrefix}__icon-wrapper`}>{iconNode}</p>
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
      style,
      className,
      contentClassName,
      contentStyle,
    } = this.props

    const classes = classNames({
      'nut-toast-has-icon': icon,
      [`nut-toast-${size}`]: true,
    })
    return (
      <>
        <Overlay
          visible={true}
          style={style}
          className={`${classPrefix}__overlay-default ${className}`}
          onClick={() => {
            console.log('onclick')
            this.clickCover()
          }}
          closeOnOverlayClick={closeOnOverlayClick}
        >
          <div className={`${classPrefix} ${classes}`} id={`toast-${id}`}>
            <div
              className={`${classPrefix}__inner ${classPrefix}-${position} ${contentClassName}`}
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
