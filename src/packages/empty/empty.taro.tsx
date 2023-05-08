import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
  description: ReactNode
  status: 'empty' | 'error' | 'network'
}

const defaultProps = {
  ...ComponentDefaults,
  description: '',
  imageSize: '',
  status: 'empty',
} as EmptyProps

const classPrefix = `nut-empty`
export const Empty: FunctionComponent<
  Partial<EmptyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  defaultProps.description = locale.noData || defaultProps.description
  const {
    image,
    imageSize,
    description,
    children,
    className,
    status,
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
    <div className={`${classPrefix} ${className}`} {...rest}>
      <>
        <div className={`${classPrefix}__image`} style={imgStyle}>
          {imageNode}
        </div>
        {typeof description === 'string' ? (
          <div className={`${classPrefix}__description`}>{description}</div>
        ) : (
          description
        )}
        {children}
      </>
    </div>
  )
}

Empty.defaultProps = defaultProps
Empty.displayName = 'NutEmpty'
