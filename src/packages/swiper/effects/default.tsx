import React, { ReactNode } from 'react'
import { animated, SpringValue } from '@react-spring/web'
import { useRtl } from '@/packages/configprovider'

type DefaultEffect = {
  children: ReactNode
  getSpringsAxis: () => SpringValue<number>
  isVertical: boolean
  loop: boolean
  count: number
}
const getPerSlidePosition = (
  index: number,
  position: number,
  loop: boolean,
  count: number
) => {
  const currentPosition = index * 100 + position
  if (loop) {
    const cycle = count * 100
    const shift = cycle / 2
    const nextPosition = (currentPosition + shift) % cycle
    const shiftedPosition =
      (nextPosition < 0 ? nextPosition + cycle : nextPosition) - shift
    return `${shiftedPosition}%`
  }

  return `${currentPosition}%`
}
export const defaultEffect = (args: DefaultEffect) => {
  return React.Children.map(args.children, (child, index) => {
    const { isVertical, getSpringsAxis, loop, count } = args
    const rtl = useRtl()
    const position = rtl ? 'right' : 'left'
    return (
      <animated.div
        className="nut-swiper-slide"
        style={{
          [isVertical ? 'y' : 'x']: getSpringsAxis().to((position) => {
            return getPerSlidePosition(index, position, loop, count)
          }),
          [isVertical ? 'top' : position]: `-${index * 100}%`,
        }}
      >
        {child}
      </animated.div>
    )
  })
}
