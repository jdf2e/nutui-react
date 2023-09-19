import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { EmptyAction } from '@/packages/empty/index.taro'

import Button from '../button'

type statusOptions = {
  [key: string]: string
}
/**
 * 内置图片地址
 */
const defaultStatus: statusOptions = {
  empty: 'https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png',
  error: 'https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png',
  network: 'https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png',
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
  const { locale } = useConfig()
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
  return (
    <div
      className={`${classPrefix} ${className}${
        size === 'base' ? '' : ` ${classPrefix}-${size}`
      }`}
      {...rest}
    >
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
                className={`${
                  // eslint-disable-next-line no-nested-ternary
                  actions.length > 1
                    ? index === 0
                      ? `${classPrefix}-actions-left`
                      : `${classPrefix}-actions-right`
                    : ''
                }`}
                type={`${
                  actions.length > 1 && index === 0 ? 'default' : 'primary'
                }`}
                size="small"
                fill="outline"
                key={`action-${index}`}
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

Empty.defaultProps = defaultProps
Empty.displayName = 'NutEmpty'
