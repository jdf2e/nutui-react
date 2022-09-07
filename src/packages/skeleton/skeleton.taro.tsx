import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Avatar from '@/packages/avatar/index.taro'
import bem from '@/utils/bem'

type avatarShape = 'round' | 'square'
export interface SkeletonProps {
  width: string
  height: string
  animated: boolean
  row: number
  title: boolean
  avatar: boolean
  className?: string
  style?: React.CSSProperties
  avatarSize: string
  round: boolean
  loading: boolean
  avatarShape: avatarShape
  children?: React.ReactNode
}
const defaultProps = {
  width: '100px',
  height: '100px',
  row: 1,
  animated: false,
  title: false,
  avatar: false,
  round: false,
  avatarSize: '50px',
  loading: false,
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
    loading,
    children,
    avatarShape,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('skeleton')
  const classes = classNames(className, b())
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
      {loading ? (
        <div>{children}</div>
      ) : (
        <div className={classes} {...restProps}>
          {animated && <div className="skeleton-animation" />}
          <div className="nut-skeleton-content">
            {avatar && (
              <Avatar
                className={avatarClass}
                bgColor="rgb(239, 239, 239)"
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
