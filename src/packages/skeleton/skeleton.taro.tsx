import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { TaroSkeletonProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  rows: 1,
  animated: true,
  visible: false,
  size: 'normal',
  shape: 'round',
  duration: 0.4,
} as TaroSkeletonProps
export const Skeleton: FunctionComponent<Partial<TaroSkeletonProps>> = (
  props
) => {
  const {
    className,
    width,
    height,
    shape,
    animated,
    rows,
    visible,
    size,
    duration,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-skeleton'
  const classes = classNames(classPrefix, className)

  const repeatCount = (num: number) => {
    return Array.from({ length: num }, (v, i) => i)
  }

  function shapeStyle(): CSSProperties {
    if (shape === 'circle') return { borderRadius: '50%' }
    if (shape === 'square') return { borderRadius: '0' }
    return {}
  }

  function durationStyle() {
    if (typeof duration !== 'undefined')
      return {
        // duration 为扫光时长,叠加固定 1s 停顿构成完整循环周期
        animationDuration: `${duration + 1}s`,
      }
    return {}
  }

  return (
    <>
      {visible ? (
        children
      ) : (
        <View className={classes} {...rest}>
          {repeatCount(rows).map((item, index) => {
            const contentClass = `${classPrefix}-content ${classPrefix}-content-${size} ${classPrefix}-content-${size}-${index}`
            return (
              <View
                className={`${contentClass}`}
                key={index}
                style={{ width, height, ...shapeStyle() }}
              >
                {animated && (
                  <View
                    className={`${classPrefix}-animation`}
                    style={durationStyle()}
                  />
                )}
              </View>
            )
          })}
        </View>
      )}
    </>
  )
}

Skeleton.displayName = 'NutSkeleton'
