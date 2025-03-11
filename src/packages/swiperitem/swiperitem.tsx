import React from 'react'
import classNames from 'classnames'
import { WebSwiperItemProps } from '@/types'

const defaultProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => undefined,
} as WebSwiperItemProps

export const SwiperItem = (props: WebSwiperItemProps) => {
  const classPrefix = 'nut-swiper-item'
  const { className, style, children } = { ...defaultProps, ...props }
  const classes = classNames(classPrefix, className)

  return (
    <div className={classes} onClick={props.onClick} style={style}>
      {children}
    </div>
  )
}
SwiperItem.displayName = 'NutSwiperItem'
