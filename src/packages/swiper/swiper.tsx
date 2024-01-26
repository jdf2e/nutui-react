import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typings'
import Indicator from '@/packages/indicator'
import { getRefValue, useRefState } from '@/utils/use-ref-state'

export interface FocusEffect {
  name: 'focus'
  scale: number
}

export interface SwiperProps extends BasicComponent {
  direction: 'horizontal' | 'vertical'
  indicator: any
  loop: boolean
  duration: number
  autoplay: boolean
  defaultValue: number
  touchable: boolean
  effect: FocusEffect
  slideSize: number
  onChange: (index: number) => void
}

export const Swiper = (props: SwiperProps) => {
  const classPrefix = 'nut-swiper'
  const {
    children,
    direction = 'horizontal',
    indicator = true,
    loop = false,
    effect,
    autoplay,
    touchable,
    defaultValue = 0,
    duration = 3000,
  } = props
  const isVertical = direction === 'vertical'
  const count = useMemo(() => {
    let c = 0
    React.Children.map(children, (child, index) => {
      c += 1
    })
    return c
  }, [children])
  const stageRef = useRef<HTMLDivElement>(null)
  const [springs, api] = useSpring(() => ({
    x: 0,
    y: 0,
    s: 0,
    reset: () => {
      console.log('reset')
    },
    config: { tension: 200, friction: 30 },
  }))
  const timeoutRef = useRef<number | null>(null)
  const [dragging, setDragging] = useState(false)
  const [current, setCurrent] = useRefState(defaultValue)

  const swiperDirection = useRef(1)
  const [focusScales, setFocusScales] = useRefState<number[]>([])
  useEffect(() => {
    console.log('effect', effect)
    setFocusScales(
      Array.from({ length: count })
        .fill(1)
        .map((scale: any, index) =>
          index !== getRefValue(current)
            ? scale * (effect ? effect.scale : 1)
            : scale
        )
    )
  }, [count])

  // 自动播放
  const runTimeSwiper = () => {
    timeoutRef.current = window.setTimeout(() => {
      console.log('timer running')
      next()
      runTimeSwiper()
    }, duration)
  }
  useEffect(() => {
    if (!autoplay || dragging) return
    console.log('effect')
    runTimeSwiper()

    return () => {
      console.log('clear timer')
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [autoplay, duration, dragging, count])

  const to = (index: number, immediate = false) => {
    console.log('to index', index)
    let targetIndex = bound(index, 0, count - 1)
    if (loop) {
      const cycleIndex = index % count
      targetIndex = cycleIndex < 0 ? cycleIndex + count : cycleIndex
    }
    setCurrent(targetIndex)
    props.onChange?.(targetIndex)

    setFocusScales(
      getRefValue(focusScales).map((s, index) =>
        targetIndex === index ? 1 : effect ? effect.scale : 1
      )
    )

    api.start({
      // 这里需要统一成百分比
      [isVertical ? 'y' : 'x']: -index * 100,
      s: 0,
      immediate,
    })
  }
  const getSpringsAxis = () => {
    return springs[isVertical ? 'y' : 'x']
  }
  const next = () => {
    to(Math.round(-getSpringsAxis().get() / 100) + 1)
  }
  const prev = () => {
    to(Math.round(-getSpringsAxis().get() / 100) - 1)
  }
  const getSlideSize = () => {
    if (props.slideSize) return props.slideSize
    if (stageRef.current) {
      if (isVertical) return stageRef.current.offsetHeight
      return stageRef.current.offsetWidth
    }
    // 考虑怎么转换为百分比
    return 0
  }
  const bound = (v: number, min: number, max: number) => {
    if (min !== undefined) {
      v = Math.max(v, min)
    }
    if (max !== undefined) {
      v = Math.min(v, max)
    }
    return v
  }
  const bind = useDrag(
    (state) => {
      const axis = Number(isVertical)
      const slideSize = getSlideSize()
      const offset = state.offset[axis]

      setDragging(!!state.dragging)
      // console.log('delta', state.distance)

      const distance = state.distance[axis]
      swiperDirection.current = state.direction[axis]

      if (state.last) {
        // 计算位置
        const swipeDirection = state.direction[axis]
        const velocity = state.velocity[axis]
        const minIndex = Math.floor(offset / slideSize)
        const maxIndex = minIndex + 1
        const index = Math.round(
          (offset + velocity * 2000 * swipeDirection) / slideSize
        )
        // console.log(index, maxIndex, maxIndex)
        to(bound(index, minIndex, maxIndex))
      } else {
        // 实时移动，换算百分比
        api.start({
          [isVertical ? 'y' : 'x']: -((offset / slideSize) * 100),
          s: distance / slideSize,
          immediate: true,
        })
      }
    },
    {
      enabled: touchable,
      transform: ([x, y]) => [-x, -y],
      from: () => {
        // 由百分比转换到像素
        const slideSize = getSlideSize()
        const x = (springs.x.get() / 100) * slideSize
        const y = (springs.y.get() / 100) * slideSize
        return [-x, -y]
      },
      bounds: () => {
        if (loop) return {}
        const slideSize = getSlideSize()
        if (isVertical) {
          return { top: 0, bottom: (count - 1) * slideSize }
        }
        return { left: 0, right: (count - 1) * slideSize }
      },
      rubberband: true,
    }
  )

  const effectStyle = (index: number) => {
    if (effect) {
      if (effect.name === 'focus') {
        return springs.s.to((ss) => {
          const scales = getRefValue(focusScales)
          if (!scales) return 1
          const scale = scales[index]
          const currentRefValue = getRefValue(current)
          // if (index === 1) {
          //   console.log('index', index)
          //   console.log('ss', ss)
          //   console.log('current', currentRefValue)
          //   console.log('scale', scale)
          // }

          if (dragging === false) ss = 0

          const ps = ss * scale
          if (index === currentRefValue) {
            return Math.max(scale - ps, effect.scale)
          }
          if (index === currentRefValue + swiperDirection.current) {
            return Math.min(scale + ps, 1)
          }
          return scale
        })
      }
    }
    return 1
  }

  const renderIndicator = () => {
    if (React.isValidElement(indicator)) return indicator
    if (!indicator) return null
    return (
      <div
        className={classNames({
          [`${classPrefix}-indicator`]: true,
          [`${classPrefix}-indicator-vertical`]: isVertical,
        })}
      >
        <Indicator
          current={getRefValue(current)}
          total={count}
          direction={direction}
        />
      </div>
    )
  }

  const getPerSlidePosition = (
    index: number,
    position: number,
    loop: boolean
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
  const renderSlides = () => {
    return (
      <div
        ref={stageRef}
        className={classNames('nut-swiper-inner', {
          'nut-swiper-inner-vertical': isVertical,
        })}
        style={{
          ...(props.slideSize
            ? { [isVertical ? 'height' : 'width']: `${props.slideSize}px` }
            : {}),
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <animated.div
              className="nut-swiper-slide"
              style={{
                [isVertical ? 'y' : 'x']: getSpringsAxis().to((position) => {
                  return getPerSlidePosition(index, position, loop)
                }),
                [isVertical ? 'top' : 'left']: `-${index * 100}%`,
                scale: effectStyle(index),
              }}
            >
              {child}
            </animated.div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="nut-swiper" {...bind()}>
      {renderSlides()}
      {renderIndicator()}
    </div>
  )
}
