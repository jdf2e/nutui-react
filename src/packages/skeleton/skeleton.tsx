import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Avatar from '@/packages/avatar'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type avatarShape = 'round' | 'square'
export interface SkeletonProps extends BasicComponent {
  animated: boolean
  rows: number
  title: boolean
  avatar: boolean
  avatarSize: string
  round: boolean
  visible: boolean
  avatarShape: avatarShape
}
const defaultProps = {
  ...ComponentDefaults,
  rows: 1,
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
    animated,
    rows,
    title,
    avatar,
    avatarSize,
    round,
    visible,
    children,
    avatarShape,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-skeleton'
  const classes = classNames(className, classPrefix)
  const blockClass = classNames({
    block: true,
    'block--round': round,
  })
  const avatarClass = classNames({
    avatar: true,
    [`avatar--${avatarShape}`]: avatarShape,
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
        <div className={classes} {...rest}>
          {animated && <div className={`${classPrefix}__animation`} />}
          <div className={`${classPrefix}__content`}>
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
              <div className={blockClass} />
            ) : (
              <div className={`${classPrefix}__content-line`}>
                {title && <div className={`${classPrefix}__title`} />}
                {repeatLines(rows).map((item, index) => {
                  return <div className={blockClass} key={index} />
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
