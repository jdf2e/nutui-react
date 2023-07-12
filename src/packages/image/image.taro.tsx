import React, {
  FunctionComponent,
  useState,
  ReactNode,
  useCallback,
  CSSProperties,
} from 'react'
import { Image as TImage, ImageProps as TImageProps } from '@tarojs/components'
import { ImageError, Image as ImageIcon } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { BaseEventOrig } from '@tarojs/components/types/common'

export interface ImageProps extends Omit<TImageProps, 'style'> {
  style?: CSSProperties
  width: string | number
  height: string | number
  radius: string | number
  error: boolean | ReactNode
  loading: boolean | ReactNode
}

const defaultProps = {
  src: '',
  error: true,
  loading: true,
} as ImageProps

export const Image: FunctionComponent<Partial<ImageProps>> = (props) => {
  const classPrefix = 'nut-image'
  const {
    className,
    style,
    src,
    width,
    height,
    radius,
    error,
    loading,
    onLoad,
    onError,
    ...rest
  } = { ...defaultProps, ...props }
  const [innerLoading, setInnerLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // 图片加载
  const handleLoad = (e: BaseEventOrig<TImageProps.onLoadEventDetail>) => {
    setIsError(false)
    setInnerLoading(false)
    onLoad && onLoad(e)
  }
  // 图片加载失败
  const handleError = (e: BaseEventOrig<TImageProps.onErrorEventDetail>) => {
    if (src) {
      setIsError(true)
      setInnerLoading(false)
      onError && onError(e)
    }
  }

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }
  const containerStyle = {
    height: height ? pxCheck(height) : '',
    width: width ? pxCheck(width) : '',
    overflow: radius !== undefined && radius !== null ? 'hidden' : '',
    borderRadius:
      radius !== undefined && radius !== null ? pxCheck(radius) : '',
  }

  const imgStyle: any = {
    ...style,
  }

  const renderErrorImg = useCallback(() => {
    if (!isError) return null
    if (typeof error === 'boolean' && error === true && !innerLoading) {
      return (
        <div className="nut-img-error">
          <ImageError />
        </div>
      )
    }
    if (React.isValidElement(error) && !innerLoading) {
      return <div className="nut-img-error">{error}</div>
    }
    return null
  }, [error, isError, innerLoading])

  const renderLoading = useCallback(() => {
    if (!loading) return null
    if (typeof loading === 'boolean' && loading === true && innerLoading) {
      return (
        <div className="nut-img-loading">
          <ImageIcon />
        </div>
      )
    }
    if (React.isValidElement(loading) && innerLoading) {
      return <div className="nut-img-loading">{loading}</div>
    }
    return null
  }, [loading, innerLoading])
  return (
    <div className={classNames(classPrefix, className)} style={containerStyle}>
      <TImage
        {...rest}
        className="nut-img"
        style={imgStyle}
        src={src}
        onLoad={(e) => handleLoad(e)}
        onError={(e) => handleError(e)}
      />
      {renderLoading()}
      {renderErrorImg()}
    </div>
  )
}

Image.defaultProps = defaultProps
Image.displayName = 'NutImage'
