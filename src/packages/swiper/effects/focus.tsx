import React, { ReactNode, useEffect } from 'react'
import { animated } from '@react-spring/web'
import { getRefValue, useRefState } from '@/utils/use-ref-state'
import { useRtl } from '@/packages/configprovider'

export interface FocusEffect {
  name: 'focus'
  scale: number
}

type DefaultEffect = {
  children: ReactNode
  springs: any
  isVertical: boolean
  loop: boolean
  count: number
  current: React.MutableRefObject<number>
  swiperDirection: React.MutableRefObject<number>
  effect: FocusEffect
  transforms: React.MutableRefObject<number[]>
  dragging: boolean
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
export const focusEffect = (args: DefaultEffect) => {
  return React.Children.map(args.children, (child, index) => {
    const rtl = useRtl()
    const position = rtl ? 'right' : 'left'
    const {
      isVertical,
      springs,
      transforms,
      loop,
      count,
      swiperDirection,
      dragging,
      current,
      effect,
    } = args
    return (
      <animated.div
        className="nut-swiper-slide"
        style={{
          [isVertical ? 'y' : 'x']: springs[isVertical ? 'y' : 'x'].to(
            (position: number) => {
              return getPerSlidePosition(index, position, loop, count)
            }
          ),
          [isVertical ? 'top' : position]: `-${index * 100}%`,
          scale: springs.s.to((ss: number) => {
            const scales = getRefValue(transforms)
            if (!scales) return 1
            const scale = scales[index]
            const currentRefValue = getRefValue(current)
            if (dragging === false) ss = 0
            const ps = ss * scale
            if (index === currentRefValue) {
              return Math.max(scale - ps, effect.scale)
            }
            if (index === currentRefValue + swiperDirection.current) {
              return Math.min(scale + ps, 1)
            }
            return scale
          }),
        }}
      >
        {child}
      </animated.div>
    )
  })
}

export const useList = (
  effect: FocusEffect | undefined,
  count: number,
  current: React.MutableRefObject<number>
): [React.MutableRefObject<number[]>, (p: number[]) => void] => {
  const [transforms, setTransforms] = useRefState<number[]>([])
  useEffect(() => {
    setTransforms(
      Array.from({ length: count })
        .fill(1)
        .map((scale: any, index) =>
          index !== getRefValue(current)
            ? scale * (effect ? effect.scale : 1)
            : scale
        )
    )
  }, [count])
  return [transforms, setTransforms]
}

export const updateTransform = (
  transforms: React.MutableRefObject<number[]>,
  setTransforms: any,
  effect: FocusEffect,
  page: number
) => {
  setTransforms(
    getRefValue(transforms).map((s, index) =>
      // eslint-disable-next-line no-nested-ternary
      page === index ? 1 : effect ? effect.scale : 1
    )
  )
}
