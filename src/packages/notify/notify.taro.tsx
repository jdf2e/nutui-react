import React, { useState, useEffect, FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { View } from '@tarojs/components'
import { Close } from '@nutui/icons-react-taro'
import { web } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'
import { ComponentDefaults } from '@/utils/typings'
import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
} from '@/hooks/use-custom-event'
import { mergeProps } from '@/utils/merge-props'
import { TaroNotifyProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  id: '',
  distance: 8,
  navHeight: 57,
  position: 'top',
  visible: false,
  closeable: false,
  leftIcon: null,
  rightIcon: null,
  duration: 3000,
  onClose: () => {},
  onClick: () => {},
} as TaroNotifyProps

const classPrefix = 'nut-notify'

export const Notify: FunctionComponent<Partial<TaroNotifyProps>> & {
  open: typeof open
  close: typeof close
} = (props: Partial<TaroNotifyProps>) => {
  const {
    id,
    style,
    children,
    distance,
    navHeight,
    closeable,
    leftIcon,
    rightIcon,
    position,
    visible,
    duration,
    className,
    onClose,
    onClick,
  } = mergeProps(defaultProps, props)

  useCustomEvent(id as string, (status: boolean) => {
    status ? show() : hide()
  })

  let timer: number | null
  const [showNotify, setShowNotify] = useState(false)
  useEffect(() => {
    if (visible) {
      show()
    } else {
      hide()
    }
  }, [visible])

  const show = () => {
    setShowNotify(true)
    clearTimer()
    if (duration) {
      timer = window.setTimeout(() => {
        hide()
      }, duration)
    }
  }
  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const hide = () => {
    setShowNotify(false)
    onClose()
  }

  const getDistance = useMemo(() => {
    if (position === 'top') {
      return {
        top: pxTransform(
          web() ? Number(distance) + navHeight : Number(distance)
        ),
      }
    }
    return { bottom: pxTransform(Number(distance)) }
  }, [distance, position])

  const classes = classNames({
    [`${classPrefix}`]: true,
    [`${className}`]: true,
  })

  const handleClick = () => {
    onClick?.()
  }

  const handleClickIcon = () => {
    hide()
  }

  return (
    <CSSTransition
      in={showNotify}
      timeout={300}
      classNames="fade"
      unmountOnExit
      appear
      position={position}
      id={id}
    >
      <View
        className={classes}
        style={{ ...style, ...getDistance }}
        onClick={handleClick}
      >
        {leftIcon ? (
          <View className={`${classPrefix}-left-icon`}>{leftIcon}</View>
        ) : null}
        <View
          className={classNames({
            [`${classPrefix}-content`]: true,
            [`${classPrefix}-ellipsis`]: closeable || rightIcon,
            [`${classPrefix}-layout-left`]: leftIcon || rightIcon,
          })}
        >
          {children}
        </View>
        {rightIcon || closeable ? (
          <View
            className={`${classPrefix}-right-icon`}
            onClick={handleClickIcon}
          >
            {rightIcon || (closeable ? <Close size={12} /> : null)}
          </View>
        ) : null}
      </View>
    </CSSTransition>
  )
}

export function open(selector: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, true)
}

export function close(selector: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, false)
}

Notify.displayName = 'NutNotify'
Notify.open = open
Notify.close = close
