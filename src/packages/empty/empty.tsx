import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { EmptyAction } from '@/packages/empty/index'

import Button from '../button'
import { getButtonType } from '@/packages/empty/utils'

type statusOptions = {
  [key: string]: string
}

const defaultStatus: statusOptions = {
  empty:
    'https://storage.360buyimg.com/imgtools/30186cfda0-0d3eee40-c0ac-11ee-9382-9125782aa3b8.png',
  error:
    'https://storage.360buyimg.com/imgtools/f3278d0ebb-0ce360c0-c0ac-11ee-8375-193101bb1a46.png',
  network:
    'https://storage.360buyimg.com/imgtools/43c30f7e29-0d483d10-c0ac-11ee-bec4-eb4d2a09a51d.png',
}

export interface EmptyProps extends BasicComponent {
  image?: ReactNode
  imageSize: number | string
  title: ReactNode
  description: ReactNode
  size: 'small' | 'base'
  status: 'empty' | 'error' | 'network'
  actions: Array<EmptyAction>
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  imageSize: '',
  size: 'base',
  status: 'empty',
  actions: [],
} as EmptyProps

const classPrefix = `nut-empty`
export const Empty: FunctionComponent<
  Partial<EmptyProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    image,
    imageSize,
    title,
    description,
    children,
    className,
    size,
    status,
    actions,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [imgStyle, setImgStyle] = useState<any>({})

  const imageUrl = image || defaultStatus[status]
  const imageNode =
    typeof imageUrl === 'string' ? (
      <img className="img" src={imageUrl} alt="empty" />
    ) : (
      imageUrl
    )

  useEffect(() => {
    setImgStyle(() => {
      if (typeof imageSize !== 'number' && typeof imageSize !== 'string') {
        return {}
      }
      if (typeof imageSize === 'number') {
        return {
          width: `${imageSize}px`,
          height: `${imageSize}px`,
        }
      }
      return {
        width: imageSize,
        height: imageSize,
      }
    })
  }, [imageSize])
  const classes = classNames({
    [`${classPrefix}-${size}`]: size !== 'base',
  })
  const cls = classNames(classPrefix, classes, className)

  return (
    <div className={cls} {...rest}>
      <div className={`${classPrefix}-image`} style={imgStyle}>
        {imageNode}
      </div>
      {typeof title === 'string' && title ? (
        <div className={`${classPrefix}-title`}>{title}</div>
      ) : (
        title
      )}
      {typeof description === 'string' ? (
        <div className={`${classPrefix}-description`}>{description}</div>
      ) : (
        description
      )}
      {actions.length > 0 && (
        <div className={`${classPrefix}-actions`}>
          {actions.map((item, index) => {
            return (
              <Button
                className={classNames({
                  [`${classPrefix}-actions-right`]: actions.length === 1,
                  [`${classPrefix}-actions-left`]:
                    actions.length > 1 && index === 0,
                })}
                style={item.style}
                type={getButtonType(actions, index)}
                size={item.size || 'small'}
                fill={item.fill || 'outline'}
                disabled={item.disabled || false}
                key={`action-${index}`}
                onClick={item.onClick || (() => undefined)}
              >
                {item?.text}
              </Button>
            )
          })}
        </div>
      )}
      {children}
    </div>
  )
}

Empty.displayName = 'NutEmpty'
