import React, { useMemo, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typings'
import Indicator from '@/packages/indicator'

export interface SwiperProps extends BasicComponent {
  direction: 'horizontal' | 'vertical'
  indicator: any
  loop: boolean
  duration: number
  autoplay: boolean
  defaultValue: number
  touchable: boolean
  onChange: any
}

export const Swiper = (props: SwiperProps) => {
  const classPrefix = 'nut-swiper'
  const {
    children,
    direction = 'horizontal',
    indicator = true,
    loop = false,
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
    config: { tension: 200, friction: 30 },
  }))
  const [current, setCurrent] = useState(0)

  const to = (index: number, immediate = false) => {
    const targetIndex = bound(index, 0, count - 1)
    api.start({
      // 这里需要统一成百分比
      [isVertical ? 'y' : 'x']: -targetIndex * 100,
      immediate,
    })
    setCurrent(targetIndex)
  }

  const getSlideSize = () => {
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
        console.log('offset', offset)
        api.start({
          [isVertical ? 'y' : 'x']: -((offset / slideSize) * 100),
          immediate: true,
        })
      }
    },
    {
      transform: ([x, y]) => [-x, -y],
      from: () => {
        // 由百分比转换到像素
        const slideSize = getSlideSize()
        const x = (springs.x.get() / 100) * slideSize
        const y = (springs.y.get() / 100) * slideSize
        return [-x, -y]
      },
      bounds: () => {
        const slideSize = getSlideSize()
        if (isVertical) {
          return { top: 0, bottom: (count - 1) * slideSize }
        }
        return { left: 0, right: (count - 1) * slideSize }
      },
      rubberband: true,
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
        })}
      >
        <Indicator current={current} total={count} direction={direction} />
      </div>
    )
  }
  const renderSlides = () => {
    // if (loop)
    return (
      <div
        className={classNames('nut-swiper-inner', {
          'nut-swiper-inner-vertical': direction === 'vertical',
        })}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <animated.div
              className="nut-swiper-slide"
              style={{
                [isVertical ? 'y' : 'x']: springs[isVertical ? 'y' : 'x'].to(
                  (position) => {
                    return `${index * 100 + position}%`
                  }
                ),
                [isVertical ? 'top' : 'left']: `-${index * 100}%`,
              }}
            >
              {child}
            </animated.div>
          )
        })}
      </div>
    )
    // return (
    //   <animated.div
    //     className={classNames('nut-swiper-inner', {
    //       'nut-swiper-inner-vertical': direction === 'vertical',
    //     })}
    //     style={{
    //       [isVertical ? 'y' : 'x']: springs[isVertical ? 'y' : 'x'].to(
    //         (position) => {
    //           return `${position}%`
    //         }
    //       ),
    //     }}
    //   >
    //     {React.Children.map(children, (child, index) => {
    //       return <div className="nut-swiper-slide">{child}</div>
    //     })}
    //   </animated.div>
    // )
  }
  return (
    <div className="nut-swiper" {...bind()}>
      <div className="nut-swiper-stage" ref={stageRef}>
        {renderSlides()}
      </div>
      {renderIndicator()}
    </div>
  )
}
