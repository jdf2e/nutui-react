import React, {
  useState,
  FunctionComponent,
  useContext,
  useEffect,
  useImperativeHandle,
} from 'react'
import { DataContext } from '@/packages/swiper/UserContext'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './swiperitem.scss'

interface SwiperitemProps {
  direction?: string
  size?: 0
}

interface IStyle {
  width?: string
  height?: string
  transform?: string
}

const defaultProps = {
  direction: 'horizontal',
} as SwiperitemProps

export const Swiperitem = React.forwardRef<
  HTMLDivElement,
  Partial<SwiperitemProps> & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const propSteps = { ...defaultProps, ...props }
  const { children, direction, size } = propSteps
  const parent: any = useContext(DataContext)
  const [offset, setOffset] = useState(0)
  const b = bem('swiper-item')
  const classes = classNames(b(''))

  useImperativeHandle<HTMLDivElement, any>(ref, () => ({
    changeOffset: (num: number) => {
      setOffset(num)
    },
  }))
  const style = () => {
    const style: IStyle = {}
    const _direction = parent?.propSwiper.direction || direction
    const _size = parent?.size || size
    if (_size) {
      style[_direction === 'horizontal' ? 'width' : 'height'] = `${_size}px`
    }
    if (offset) {
      style['transform'] = `translate3D${
        _direction === 'horizontal' ? `(${offset}px,0,0)` : `(0,${offset}px,0)`
      }`
    }
    return style
  }

  return (
    <div className={classes} style={style()}>
      {children}
    </div>
  )
})
Swiperitem.defaultProps = defaultProps
Swiperitem.displayName = 'NutSwiperitem'
