import React, { FunctionComponent } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Avatar from '@/packages/avatar/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import pxTransform from '@/utils/px-transform'

type avatarShape = 'round' | 'square'

export interface SkeletonProps extends BasicComponent {
  animated: boolean
  rows: number
  title: boolean
  avatar: boolean
  avatarSize: string
  visible: boolean
  avatarShape: avatarShape
}

const defaultProps = {
  ...ComponentDefaults,
  rows: 1,
  animated: false,
  title: false,
  avatar: false,
  avatarSize: '50px',
  visible: false,
  avatarShape: 'round',
} as SkeletonProps
export const Skeleton: FunctionComponent<Partial<SkeletonProps>> = (props) => {
  const {
    className,
    animated,
    rows,
    title,
    avatar,
    avatarSize,
    visible,
    children,
    avatarShape,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-skeleton'
  const classes = classNames(classPrefix, className)
  const avatarClass = classNames({
    [`nut-avatar`]: true,
    [`nut-skeleton-content-avatar`]: true,
    [`avatar-${avatarShape}`]: avatarShape,
  })

  const repeatLines = (num: number) => {
    return Array.from({ length: num }, (v, i) => i)
  }

  const getStyle = () => {
    if (avatarSize) {
      return {
        width: pxTransform(parseInt(avatarSize)),
        height: pxTransform(parseInt(avatarSize)),
      }
    }
    return {
      width: pxTransform(50),
      height: pxTransform(50),
    }
  }

  return (
    <>
      {visible ? (
        <>{children}</>
      ) : (
        <View className={classes} {...rest}>
          {animated && <View className={`${classPrefix}-animation`} />}
          <View className={`${classPrefix}-content`}>
            {avatar && (
              <Avatar
                className={avatarClass}
                background="rgb(239, 239, 239)"
                shape={avatarShape}
                style={getStyle()}
                icon="null"
              />
            )}
            {rows === 1 ? (
              <View className={`${classPrefix}-content-block`} />
            ) : (
              <View className={`${classPrefix}-content-line`}>
                {title && <View className={`${classPrefix}-content-title`} />}
                {repeatLines(rows).map((item, index) => {
                  return (
                    <View
                      className={`${classPrefix}-content-block ${index === repeatLines(rows).length - 1 ? `${classPrefix}-content-block-last-child` : ''}`}
                      key={index}
                    />
                  )
                })}
              </View>
            )}
          </View>
        </View>
      )}
    </>
  )
}

Skeleton.displayName = 'NutSkeleton'
