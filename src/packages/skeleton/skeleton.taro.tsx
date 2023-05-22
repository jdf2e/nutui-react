import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Avatar from '@/packages/avatar/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type avatarShape = 'round' | 'square'
export interface SkeletonProps extends BasicComponent {
  width: string
  height: string
  animated: boolean
  row: number
  title: boolean
  avatar: boolean
  avatarSize: string
  round: boolean
  visible: boolean
  avatarShape: avatarShape
}
const defaultProps = {
  ...ComponentDefaults,
  width: '100px',
  height: '100px',
  row: 1,
  animated: false,
  title: false,
  avatar: false,
  round: false,
  avatarSize: '50px',
  visible: false,
  avatarShape: 'round',
} as SkeletonProps
export const Skeleton: FunctionComponent<Partial<SkeletonProps>> = (props) => {
  const {
    className,
    width,
    height,
    animated,
    row,
    title,
    avatar,
    avatarSize,
    round,
    visible,
    children,
    avatarShape,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-skeleton'
  const classes = classNames(className, classPrefix)
  const blockClass = classNames({
    blockClass: true,
    'blockClass--round': round,
  })
  const avatarClass = classNames({
    avatarClass: true,
    [`avatarClass--${avatarShape}`]: avatarShape,
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
        <div>{children}</div>
      ) : (
        <div className={classes} {...restProps}>
          {animated && <div className="skeleton-animation" />}
          <div className="nut-skeleton-content">
            {avatar && (
              <Avatar
                className={avatarClass}
                background="rgb(239, 239, 239)"
                shape={avatarShape}
                style={getStyle()}
              />
            )}

            {row === 1 && (
              <div className={blockClass} style={{ width, height }} />
            )}

            <div className="skeleton-content-line">
              {title && <div className="skeleton-title" />}
              {repeatLines(row).map((item, index) => {
                return (
                  <div
                    className={blockClass}
                    key={index}
                    style={{ width, height }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Skeleton.defaultProps = defaultProps
Skeleton.displayName = 'NutSkeleton'
