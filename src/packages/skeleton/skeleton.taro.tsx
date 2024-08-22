import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Avatar from '@/packages/avatar/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
    [`avatar-${avatarShape}`]: avatarShape,
  })

  const repeatLines = (num: number) => {
    return Array.from({ length: num }, (v, i) => i)
  }

  const getStyle = () => {
    if (avatarSize) {
      return {
        width: avatarSize,
        height: avatarSize,
      }
    }
    return {
      width: '50px',
      height: '50px',
    }
  }

  return (
    <>
      {visible ? (
        <>{children}</>
      ) : (
        <div className={classes} {...rest}>
          {animated && <div className={`${classPrefix}-animation`} />}
          <div className={`${classPrefix}-content`}>
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
              <div className={`${classPrefix}-block`} />
            ) : (
              <div className={`${classPrefix}-content-line`}>
                {title && <div className={`${classPrefix}-title`} />}
                {repeatLines(rows).map((item, index) => {
                  return <div className={`${classPrefix}-block`} key={index} />
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

Skeleton.displayName = 'NutSkeleton'
