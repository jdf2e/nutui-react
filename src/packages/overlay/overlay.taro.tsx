import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScrollTaro } from '@/hooks/taro/use-lock-scoll'
import { TaroOverlayProps } from '@/types'
import ConfigurableCSSTransition from '@/utils/taro/ConfigurableCSSTransition'

export const defaultOverlayProps: TaroOverlayProps = {
  ...ComponentDefaults,
  zIndex: 1000,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: () => {},
  afterShow: () => {},
  afterClose: () => {},
}
export const Overlay: FunctionComponent<
  Partial<TaroOverlayProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    zIndex,
    duration,
    className,
    closeOnOverlayClick,
    visible,
    lockScroll,
    style,
    afterShow,
    afterClose,
    onClick,
    ...rest
  } = { ...defaultOverlayProps, ...props }

  const classPrefix = 'nut-overlay'
  const [innerVisible, setInnerVisible] = useState(visible)
  const nodeRef = useLockScrollTaro(!!lockScroll && innerVisible)

  useEffect(() => {
    setInnerVisible(visible)
  }, [visible])

  const classes = classNames(classPrefix, className)
  const durationMs = Number(duration)
  // 动画时长与 duration 联动：仅在非默认值时写入 CSS 变量
  const durationStyle =
    Number.isFinite(durationMs) &&
    durationMs >= 0 &&
    durationMs !== defaultOverlayProps.duration
      ? ({
          '--nutui-overlay-animation-duration': `${durationMs}ms`,
        } as React.CSSProperties)
      : {}
  const styles = {
    zIndex,
    ...durationStyle,
    ...style,
  }

  const handleClick = (e: ITouchEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
  }

  const renderOverlay = () => (
    <View
      ref={nodeRef}
      className={classes}
      style={styles}
      {...(rest as any)}
      catchMove={lockScroll}
      onClick={handleClick}
    >
      {children}
    </View>
  )

  return (
    <ConfigurableCSSTransition
      nodeRef={nodeRef}
      classNames={`${classPrefix}-slide`}
      unmountOnExit
      timeout={Number(duration)}
      in={innerVisible}
      onEntered={afterShow}
      onExited={afterClose}
    >
      {renderOverlay()}
    </ConfigurableCSSTransition>
  )
}

Overlay.displayName = 'NutOverlay'
