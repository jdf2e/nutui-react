import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

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
export interface EmptyProps {
  image: ReactNode
  imageSize: number | string
  description: ReactNode
  className: string
}

const defaultProps = {
  description: '无内容',
  image: 'empty',
  imageSize: '',
  className: '',
} as EmptyProps

export const Empty: FunctionComponent<
  Partial<EmptyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  defaultProps.description = locale.noData || defaultProps.description
  const { image, imageSize, description, children, className, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const [imgStyle, setImgStyle] = useState<any>({})
  const b = bem('empty')

  let imageNode = image
  if (typeof image === 'string') {
    const isHttpUrl =
      image.startsWith('https://') ||
      image.startsWith('http://') ||
      image.startsWith('//')
    const imageUrl = isHttpUrl ? image : defaultStatus[image]
    imageNode = <img className="img" src={imageUrl} alt="empty" />
  }
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
    <div className={`${b()} ${className}`} {...rest}>
      <>
        <div className={b('image')} style={imgStyle}>
          {imageNode}
        </div>
        {typeof description === 'string' ? (
          <div className={b('description')}>{description}</div>
        ) : (
          { description }
        )}
        {children}
      </>
    </div>
  )
}

Empty.defaultProps = defaultProps
Empty.displayName = 'NutEmpty'
