import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Avatar from '@/packages/avatar/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

const DEFAULT_ROW_WIDTH = '100%'
const DEFAULT_LAST_ROW_WIDTH = '70%'

const addUnit = (value?: string | number): string | undefined => {
  if (value === undefined || value === null) {
    return undefined
  }
  value = String(value)
  return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value
}

type avatarShape = 'round' | 'square'
export interface SkeletonProps extends BasicComponent {
  animated: boolean
  rows: number
  title: boolean
  avatar: boolean
  avatarSize: string
  visible: boolean
  avatarShape: avatarShape
  rowWidth?: number | string | (number | string)[]
  rowHeight?: number | string | (number | string)[]
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
  rowWidth: '100%',
  rowHeight: '',
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
    rowWidth,
    rowHeight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-skeleton'
  const classes = classNames(className, classPrefix)
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

  const getRowWidth = (index: number) => {
    const { rowWidth } = props

    if (rowWidth === DEFAULT_ROW_WIDTH && index === +rows - 1 && index !== 0) {
      return DEFAULT_LAST_ROW_WIDTH
    }

    if (Array.isArray(rowWidth)) {
      return rowWidth[index]
    }

    return rowWidth
  }
  const getRowHeight = (index: number) => {
    const { rowHeight } = props

    if (Array.isArray(rowHeight)) {
      return rowHeight[index]
    }

    return rowHeight
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
              <div className={`${classPrefix}__block`} />
            ) : (
              <div className={`${classPrefix}__content-line`}>
                {title && <div className={`${classPrefix}__title`} />}
                {repeatLines(rows).map((item, index) => {
                  const width = addUnit(getRowWidth(index))
                  const height = addUnit(getRowHeight(index))
                  return <div className={`${classPrefix}__block`} key={index} />
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
