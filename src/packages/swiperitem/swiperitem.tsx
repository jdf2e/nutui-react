import React from 'react'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typings'

export interface SwiperItemProps extends BasicComponent {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => undefined,
} as SwiperItemProps

export const SwiperItem = (props: SwiperItemProps) => {
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
