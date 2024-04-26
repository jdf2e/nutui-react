import React, { useContext } from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/swiper/context'

export interface SwiperItemProps {
  direction?: string
  size?: 0
}

interface Style {
  width?: string
  height?: string
  transform?: string
}

const defaultProps = {
  direction: 'horizontal',
} as SwiperItemProps

export const SwiperItem = React.forwardRef<
  HTMLDivElement,
  Partial<SwiperItemProps> & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const classPrefix = 'nut-swiper-item'
  const _props = { ...defaultProps, ...props }
  const { className, style, children, direction, size } = _props
  const parent: any = useContext(DataContext)
  const classes = classNames(classPrefix, className)

  const getStyle = () => {
    const style: Style = {}
    const _direction = parent?.propSwiper.direction || direction
    const _size = parent?.size || size
    if (_size) {
      style[_direction === 'horizontal' ? 'width' : 'height'] = `${_size}px`
    }
    return style
  }
  return (
    <div className={classes} style={{ ...style, ...getStyle() }}>
      {children}
    </div>
  )
})
SwiperItem.defaultProps = defaultProps
SwiperItem.displayName = 'NutSwiperItem'
