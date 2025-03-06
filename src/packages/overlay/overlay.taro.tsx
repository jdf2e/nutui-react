import React, { FunctionComponent, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScrollTaro } from '@/hooks/use-lock-scoll-taro'
import { TaroOverlayProps } from '@/types'

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
  const styles = {
    zIndex,
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
    <CSSTransition
      nodeRef={nodeRef}
      classNames={`${classPrefix}-slide`}
      unmountOnExit
      timeout={duration}
      in={innerVisible}
      onEntered={afterShow}
      onExited={afterClose}
    >
      {renderOverlay()}
    </CSSTransition>
  )
}

Overlay.displayName = 'NutOverlay'
