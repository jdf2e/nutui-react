import React, { Children, useImperativeHandle, useMemo, useState } from 'react'
import {
  Swiper as TaroSwiper,
  SwiperItem as TSwiperItem,
  SwiperProps as TSwiperProps,
  View,
} from '@tarojs/components'
import classNames from 'classnames'
import { CommonEventFunction } from '@tarojs/components/types/common'
import Indicator from '@/packages/indicator/index.taro'
import { pxTransform } from '@/utils/taro/px-transform'
import { TaroSwiperProps } from '@/types'

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  autoPlay: false,
  autoplay: false,
  loop: false,
  defaultValue: 0,
  style: {},
} as TaroSwiperProps

const classPrefix = 'nut-swiper'
export const Swiper = React.forwardRef(
  (props: Partial<TaroSwiperProps>, ref) => {
    const {
      width,
      height,
      className,
      children,
      indicator,
      indicatorDots,
      loop,
      circular,
      autoPlay,
      autoplay,
      duration,
      vertical,
      direction,
      defaultValue,
      current,
      onChange,
      style,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    }
    const [innerValue, setInnerValue] = useState(current || defaultValue)
    const childrenCount = useMemo(() => {
      let c = 0
      React.Children.map(children, (child, index) => {
        c += 1
      })
      return c
    }, [children])
    const renderIndicator = () => {
      if (React.isValidElement(indicator)) return indicator
      if (indicator || indicatorDots) {
        return (
          <View
            className={classNames({
              [`${classPrefix}-indicator`]: true,
              [`${classPrefix}-indicator-vertical`]:
                direction === 'vertical' || vertical,
            })}
          >
            <Indicator
              current={innerValue}
              total={childrenCount}
              direction={vertical ? 'vertical' : direction}
            />
          </View>
        )
      }
      return null
    }
    const handleOnChange: CommonEventFunction<
      TSwiperProps.onChangeEventDetail
    > = (value) => {
      setInnerValue(value.detail.current)
    }
    useImperativeHandle(ref, () => ({
      to: (value: number) => {
        setInnerValue(value)
      },
      next: () => {
        if (loop) {
          setInnerValue((innerValue + 1) % childrenCount)
        } else {
          setInnerValue(
            innerValue + 1 >= childrenCount ? innerValue : innerValue + 1
          )
        }
      },
      prev: () => {
        if (loop) {
          let next = innerValue - 1
          next = next < 0 ? childrenCount + next : next
          setInnerValue(next % childrenCount)
        } else {
          setInnerValue(innerValue - 1 <= 0 ? 0 : innerValue - 1)
        }
      },
    }))
    return (
      <View
        className={classNames(classPrefix, className)}
        style={{
          ...style,
          width: !width ? '100%' : width,
          height: !height ? pxTransform(150) : height,
        }}
      >
        <View
          className="nut-swiper-inner"
          style={{
            width: !width ? '100%' : width,
            height: !height ? pxTransform(150) : height,
          }}
        >
          <TaroSwiper
            current={innerValue}
            circular={loop}
            autoplay={autoplay || autoPlay}
            vertical={direction === 'vertical' || vertical}
            indicatorDots={false}
            onChange={(e) => {
              handleOnChange(e)
              props.onChange?.(e)
            }}
            style={{
              width: !width ? '100%' : width,
              height: !height ? pxTransform(150) : height,
            }}
            {...rest}
          >
            {Children.toArray(children).map((child, index) => {
              let className
              if (React.isValidElement(child)) {
                className = child.props.className
              }
              return (
                <TSwiperItem className={className} key={index}>
                  {child}
                </TSwiperItem>
              )
            })}
          </TaroSwiper>
        </View>
        {renderIndicator()}
      </View>
    )
  }
)

Swiper.displayName = 'NutSwiper'
