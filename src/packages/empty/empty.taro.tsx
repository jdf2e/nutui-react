import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import classNames from 'classnames'
import { View, Image } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { Button } from '@/packages/button/button.taro'
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
    // ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [imgStyle, setImgStyle] = useState<any>({})

  const imageUrl = image || getEmptyStatusImage(status)
  const imageNode =
    typeof imageUrl === 'string' ? (
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        src={imageUrl}
      />
    ) : (
      imageUrl
    )

  useEffect(() => {
    setImgStyle(() => {
      if (!imageSize) {
        return {}
      }
      if (typeof imageSize !== 'number') {
        return {
          width: imageSize,
          height: imageSize,
        }
      }
      return {
        width: `${imageSize}px`,
        height: `${imageSize}px`,
      }
    })
  }, [imageSize])
  const cls = classNames(classPrefix, `${classPrefix}--${size}`, className)

  const imageBlock = (
    <View className={`${classPrefix}-image`} style={imgStyle}>
      {imageNode}
    </View>
  )

  const titleBlock =
    typeof title === 'string' && title ? (
      <View className={`${classPrefix}-title`}>{title}</View>
    ) : (
      title
    )

  const descriptionBlock =
    typeof description === 'string' ? (
      <View className={`${classPrefix}-description`}>{description}</View>
    ) : (
      description
    )

  return (
    <View className={cls} style={style}>
      {size === 'partial' ? (
        <View className={`${classPrefix}-partial-body`}>
          {imageBlock}
          <View className={`${classPrefix}-content`}>
            {titleBlock}
            {descriptionBlock}
          </View>
        </View>
      ) : (
        <>
          {imageBlock}
          {titleBlock}
          {descriptionBlock}
        </>
      )}
      {actions.length ? (
        <View className={`${classPrefix}-actions`}>
          {actions.map((action, index) => {
            const { text, ...rest } = action
            return (
              <View className={`${classPrefix}-action`} key={index}>
                <Button {...rest}>{action?.text}</Button>
              </View>
            )
          })}
        </View>
      ) : null}
      {children}
    </View>
  )
}

Empty.displayName = 'NutEmpty'
