import React, { forwardRef, ReactNode, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/web'
import { BasicComponent } from '@/utils/typings'
import Indicator, { IndicatorProps } from '@/packages/indicator'
import { SwiperItem } from '@/packages/swiper/item'
import { usePropsValue } from '@/utils/use-props-value'
import { SwiperDirections, SwiperIndicator } from '@/packages/swiper/types'

const classPrefix = 'nut-swiper'

export interface SwiperStackProps extends BasicComponent {
  width: number
  height: number
  defaultValue?: number
  perSlideOffset: number
  slideSize: number
  trackOffset: number
  direction: 'left' | 'right'
  indicator?: ReactNode | SwiperIndicator
  indicatorProps?: IndicatorProps
  onChange: (index: number) => void
}

const defaultProps = {
  slideSize: 80,
  trackOffset: 0,
  perSlideOffset: 8,
  direction: 'left',
  onChange: (index: number) => undefined,
} as SwiperStackProps
export const Stack = forwardRef((props: Partial<SwiperStackProps>, ref) => {
  const {
    trackOffset,
    direction,
    perSlideOffset,
    indicator,
    indicatorProps,
    slideSize,
  } = {
    ...defaultProps,
    ...props,
  }
  const [current, setCurrent] = usePropsValue({
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange: props.onChange,
  })
  const { validChildren, count } = useMemo(() => {
    let count = 0
    const validChildren = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return null
      if (child.type !== SwiperItem) {
        return null
      }
      count++
      return child
    })
    return {
      validChildren,
      count,
    }
  }, [props.children])
  const trackRef = useRef<HTMLDivElement>(null)

  const [{ position }, api] = useSpring(
    () => ({
      position: 0,
      config: { tension: 200, friction: 30 },
    }),
    [count]
  )
  const bind = useDrag(
    (state) => {
      if (!state.last) {
        const offset = state.offset[0]
        console.log(offset)
        api.start({
          position: offset,
        })
      } else {
        // 是否滚动
      }
    },
    {
      from: () => {
        return [position.get(), position.get()]
      },
      triggerAllEvents: true,
      pointer: {
        touch: true,
      },
      rubberband: false,
    }
  )
  const renderIndicator = () => {
    if (!indicator) return undefined
    if (indicator === true) {
      return (
        <div className={classNames(`${classPrefix}-indicator`)}>
          <Indicator
            {...indicatorProps}
            current={current}
            direction={props.direction}
            total={count}
          />
        </div>
      )
    }
    if (React.isValidElement(indicator)) {
      return indicator
    }
    if (typeof indicator === 'function') {
      return indicator(current, count, direction as SwiperDirections)
    }
  }
  const getStyle = () => {
    const s = {}
    if (slideSize) {
      // @ts-ignore
      s['--nutui-swiper-slide-size'] = `${slideSize}%`
    }
    if (trackOffset) {
      // @ts-ignore
      s['--nutui-swiper-track-offset'] = `${trackOffset}%`
    }
    return s
  }
  return (
    <div
      className={classNames(classPrefix, `${classPrefix}-horizontal`)}
      style={{
        ...props.style,
        ...(props.width ? { width: props.width } : {}),
        ...(props.height ? { height: props.height } : {}),
        ...getStyle(),
      }}
    >
      <div className={classNames(`${classPrefix}-track`)} ref={trackRef}>
        <div className={classNames(`${classPrefix}-track-inner`)} {...bind()}>
          {React.Children.map(validChildren, (child, index) => {
            return (
              <animated.div
                className={classNames(`${classPrefix}-slide`)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  left: position.to((p) => {
                    if (index === current) {
                      return `${index * perSlideOffset + p}px`
                    }
                    return `${index * perSlideOffset}px`
                  }),
                  zIndex: count - index,
                  transform: ` translateX(-${index * 100}%) scale(${
                    1 - index * 0.1
                  })`,
                  transformOrigin: 'right center',
                }}
              >
                {child}
              </animated.div>
            )
          })}
        </div>
      </div>
      {renderIndicator()}
    </div>
  )
})

Stack.defaultProps = defaultProps
Stack.displayName = 'NutSwiperStack'
