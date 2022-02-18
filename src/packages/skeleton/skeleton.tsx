import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Avatar from '@/packages/avatar'
import bem from '@/utils/bem'
import './skeleton.scss'

type avatarShape = 'round' | 'square'
export interface SkeletonProps {
  width: number
  height: number
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
}
const defaultProps = {
  width: 100,
  height: 100,
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
    ['blockClass']: true,
    ['blockClass--round']: round,
  })
  const avatarClass = classNames({
    ['avatarClass']: true,
    [`avatarClass--${avatarShape}`]: avatarShape,
  })

  const repeatLines = (num: number) => {
    let items = []
    for (let i = 0; i < num; i++) {
      items.push(i)
    }
    return items
  }

  const getStyle = () => {
    return {
      width: avatarSize,
      height: avatarSize,
    }
  }

  return (
    <>
      {loading ? (
        <div>{children}</div>
      ) : (
        <div className={classes} {...restProps}>
          <div className="skeleton-animation"></div>
          <div className="content">
            {avatar && (
              <Avatar
                className={avatarClass}
                bgColor="rgb(239, 239, 239)"
                style={getStyle()}
              ></Avatar>
            )}
            {row === 1 ? (
              <div
                className={blockClass}
                style={{ width: `${width}px`, height: `${height}px` }}
              ></div>
            ) : (
              <div className="content-line">
                {title && <div className="title"></div>}
                {repeatLines(row).map((item, index) => {
                  return (
                    <div
                      className={`${blockClass} lines`}
                      key={index}
                      style={{ width: `${width}px`, height: `${height}px` }}
                    ></div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

Skeleton.defaultProps = defaultProps
Skeleton.displayName = 'NutSkeleton'
