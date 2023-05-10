import React, {
  Children,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  Swiper as TaroSwiper,
  SwiperItem as TaroSwiperItem,
  SwiperProps as TaroSwiperProps,
  View,
} from '@tarojs/components'
import classNames from 'classnames'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { Indicator } from '../indicator/indicator.taro'

export interface SwiperProps extends Omit<TaroSwiperProps, 'ref'> {
  width: number
  height: number
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  autoplay: boolean
  loop: boolean
  defaultValue: number
}

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  autoplay: false,
  loop: false,
  defaultValue: 0,
} as SwiperProps

const classPrefix = 'nut-swiper'
export const Swiper = forwardRef((props: Partial<SwiperProps>, ref) => {
  const {
    width,
    height,
    className,
    children,
    indicator,
    loop,
    duration,
    direction,
    defaultValue,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [current, setCurrent] = useState(defaultValue)
  const childrenCount = useRef(Children.toArray(children).length)
  const renderIndicator = () => {
    if (React.isValidElement(indicator)) return indicator
    if (indicator === true) {
      return (
        <div
          className={classNames({
            [`${classPrefix}__pagination`]: true,
            [`${classPrefix}__pagination-vertical`]: direction === 'vertical',
          })}
        >
          <Indicator
            current={current}
            total={childrenCount.current}
            direction={direction}
          />
        </div>
      )
    }
    return null
  }
  const handleOnChange: CommonEventFunction<TaroSwiperProps.onChangeEventDetail> =
    (value) => {
      setCurrent(value.detail.current)
    }
  useImperativeHandle(ref, () => ({
    to: (value: number) => {
      setCurrent(value)
    },
    next: () => {
      if (loop) {
        setCurrent((current + 1) % childrenCount.current)
      } else {
        setCurrent(current + 1 >= childrenCount.current ? current : current + 1)
      }
    },
    prev: () => {
      if (loop) {
        let next = current - 1
        next = next < 0 ? childrenCount.current + next : next
        setCurrent(next % childrenCount.current)
      } else {
        setCurrent(current - 1 <= 0 ? 0 : current - 1)
      }
    },
  }))
  return (
    <View
      className={classNames(classPrefix, className)}
      style={{
        width: !width ? '100%' : `${width}px`,
        height: !height ? '150px' : `${height}px`,
      }}
    >
      <View
        className="nut-swiper__inner"
        style={{
          width: !width ? '100%' : `${width}px`,
          height: !height ? '150px' : `${height}px`,
        }}
      >
        <TaroSwiper
          current={current}
          circular={loop}
          vertical={direction === 'vertical'}
          indicatorDots={false}
          onChange={handleOnChange}
          style={{
            width: !width ? '100%' : `${width}px`,
            height: !height ? '150px' : `${height}px`,
          }}
          {...rest}
        >
          {Children.toArray(children).map((child, index) => (
            <TaroSwiperItem key={index}>{child}</TaroSwiperItem>
          ))}
        </TaroSwiper>
      </View>
      {renderIndicator()}
    </View>
  )
})

Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
