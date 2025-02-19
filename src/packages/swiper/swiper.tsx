import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSpring } from '@react-spring/web'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typings'
import Indicator from '@/packages/indicator'
import { getRefValue, useRefState } from '@/utils/use-ref-state'
import { defaultEffect } from '@/packages/swiper/effects/default'
import {
  focusEffect,
  updateTransform,
  useList,
} from '@/packages/swiper/effects/focus'
import { SwiperRef } from '@/packages/swiper/types'

export interface FocusEffect {
  name: 'focus'
  scale: number
}

export interface SwiperProps extends BasicComponent {
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  loop: boolean
  duration: number | string
  autoPlay: boolean | number
  defaultValue: number
  touchable: boolean
  effect: FocusEffect | undefined
  slideSize?: number
  onChange?: (index: number) => void
}

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  loop: false,
  duration: 3000,
  autoPlay: false,
  defaultValue: 0,
  touchable: true,
  effect: undefined,
} as SwiperProps

export const Swiper = React.forwardRef<SwiperRef, Partial<SwiperProps>>(
  (props, ref) => {
    const classPrefix = 'nut-swiper'
    const {
      children,
      direction,
      indicator,
      loop,
      effect,
      autoPlay,
      touchable,
      defaultValue,
      duration,
      style,
      className,
    } = { ...defaultProps, ...props }
    const isVertical = direction === 'vertical'
    const count = useMemo(() => {
      let c = 0
      React.Children.map(children, (child, index) => {
        c += 1
      })
      return c
    }, [children])
    const getSlideSize = () => {
      if (props.slideSize) return props.slideSize
      if (stageRef.current) {
        if (isVertical) return stageRef.current.offsetHeight
        return stageRef.current.offsetWidth
      }
      return 0
    }
    const getSwiperSize = () => {
      if (swiperRef.current) {
        if (isVertical) return swiperRef.current.offsetHeight
        return swiperRef.current.offsetWidth
      }
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
    const timeoutRef = useRef<number | null>(null)
    const [dragging, setDragging] = useState(false)
    const [current, setCurrent] = useRefState(defaultValue)
    const stageRef = useRef<HTMLDivElement>(null)
    const swiperRef = useRef<HTMLDivElement>(null)
    const [springs, api] = useSpring(() => ({
      x: !isVertical ? current.current * 100 * -1 : 0,
      y: isVertical ? current.current * 100 * -1 : 0,
      s: 0,
      reset: () => {},
      config: { tension: 200, friction: 30 },
    }))
    useEffect(() => {
      api.start({
        [isVertical ? 'y' : 'x']: boundIndex(current.current) * -1 * 100,
        immediate: true,
      })
    }, [swiperRef.current])

    const swiperDirection = useRef(1)

    const [transforms, setTransforms] = useList(effect, count, current)

    // 自动播放
    const runTimeSwiper = () => {
      const durationNumber =
        typeof duration === 'string' ? parseInt(duration) : duration
      const d = typeof autoPlay === 'number' ? autoPlay : durationNumber
      timeoutRef.current = window.setTimeout(() => {
        next()
        runTimeSwiper()
      }, d)
    }
    useEffect(() => {
      if (!autoPlay || dragging) return
      runTimeSwiper()

      return () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      }
    }, [autoPlay, duration, dragging, count])

    function boundIndex(current: number) {
      const min = 0
      const max = count - 1
      if (current === max && !loop && props.slideSize) {
        const slideSize = props.slideSize
        const swiperSize = getSwiperSize()
        const ratio = (swiperSize - slideSize) / slideSize
        return bound(current, min, max - ratio)
      }
      return current
    }

    const to = (index: number, immediate = false) => {
      let targetIndex = bound(index, 0, count - 1)
      if (loop) {
        const cycleIndex = index % count
        targetIndex = cycleIndex < 0 ? cycleIndex + count : cycleIndex
      }
      setCurrent(targetIndex)
      props.onChange?.(targetIndex)

      if (effect) {
        updateTransform(transforms, setTransforms, effect, targetIndex)
      }

      api.start({
        // 这里需要统一成百分比
        [isVertical ? 'y' : 'x']:
          (loop ? -index : boundIndex(targetIndex) * -1) * 100,
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
    React.useImperativeHandle(ref, () => ({
      to,
      next,
      prev,
    }))

    const bind = useDrag(
      (state) => {
        const axis = Number(isVertical)
        const slideSize = getSlideSize()
        const offset = state.offset[axis]

        setDragging(!!state.dragging)

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
        triggerAllEvents: true,
        preventScroll: isVertical,
        axis: isVertical ? 'y' : 'x',
        pointer: {
          touch: true,
        },
      }
    )

    const renderIndicator = () => {
      if (React.isValidElement(indicator)) return indicator
      if (!indicator) return null
      return (
        <div
          className={classNames({
            [`${classPrefix}-indicator`]: true,
            [`${classPrefix}-indicator-vertical`]: isVertical,
            [`${classPrefix}-indicator-horizontal`]: !isVertical,
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

    const renderEffect = () => {
      if (!effect)
        return defaultEffect({
          children,
          getSpringsAxis,
          loop,
          count,
          isVertical,
        })
      if (effect && effect.name === 'focus') {
        return focusEffect({
          children,
          springs,
          loop,
          count,
          isVertical,
          effect,
          current,
          swiperDirection,
          dragging,
          transforms,
        })
      }
    }

    const renderSlides = () => {
      return (
        <div
          ref={stageRef}
          className={classNames('nut-swiper-inner', {
            [`${classPrefix}-inner-vertical`]: isVertical,
            [`${classPrefix}-inner-horizontal`]: !isVertical,
          })}
          style={{
            ...(props.slideSize
              ? { [isVertical ? 'height' : 'width']: `${props.slideSize}px` }
              : {}),
          }}
        >
          {renderEffect()}
        </div>
      )
    }
    return (
      <div
        className={classNames(
          classPrefix,
          `${classPrefix}-canmove-${direction}`,
          className
        )}
        style={style}
        ref={swiperRef}
        {...bind()}
      >
        {renderSlides()}
        {renderIndicator()}
      </div>
    )
  }
)

Swiper.displayName = 'NutSwiper'
