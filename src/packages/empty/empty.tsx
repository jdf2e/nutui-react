import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

import Button from '../button'
import {
  getEmptyStatusImage,
  type EmptyAction,
  type EmptySize,
  type EmptyStatus,
} from '@/types'

export type { EmptyAction, EmptySize, EmptyStatus } from '@/types'

export interface EmptyProps extends BasicComponent {
  image?: ReactNode
  imageSize: number | string
  title: ReactNode
  description: ReactNode
  size: EmptySize
  status: EmptyStatus
  actions: Array<EmptyAction>
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  imageSize: '',
  size: 'half',
  status: 'network',
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
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [imgStyle, setImgStyle] = useState<any>({})

  const imageUrl = image || getEmptyStatusImage(status)
  const imageNode =
    typeof imageUrl === 'string' ? (
      <img
        style={{
          width: '100%',
          height: '100%',
        }}
        src={imageUrl}
        alt="empty"
      />
    ) : (
      imageUrl
    )

  useEffect(() => {
    setImgStyle(() => {
      if (!imageSize) {
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
  const cls = classNames(classPrefix, `${classPrefix}--${size}`, className)

  const imageBlock = (
    <div className={`${classPrefix}-image`} style={imgStyle}>
      {imageNode}
    </div>
  )

  const titleBlock =
    typeof title === 'string' && title ? (
      <div className={`${classPrefix}-title`}>{title}</div>
    ) : (
      title
    )

  const descriptionBlock =
    typeof description === 'string' ? (
      <div className={`${classPrefix}-description`}>{description}</div>
    ) : (
      description
    )

  return (
    <div className={cls} style={style} {...rest}>
      {size === 'partial' ? (
        <div className={`${classPrefix}-partial-body`}>
          {imageBlock}
          <div className={`${classPrefix}-content`}>
            {titleBlock}
            {descriptionBlock}
          </div>
        </div>
      ) : (
        <>
          {imageBlock}
          {titleBlock}
          {descriptionBlock}
        </>
      )}
      {actions.length ? (
        <div className={`${classPrefix}-actions`}>
          {actions.map((action, index) => {
            const { text, ...rest } = action
            return (
              <div className={`${classPrefix}-action`} key={index}>
                <Button {...rest}>{action?.text}</Button>
              </div>
            )
          })}
        </div>
      ) : null}
      {children}
    </div>
  )
}

Empty.displayName = 'NutEmpty'
