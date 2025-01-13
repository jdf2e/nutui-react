import React, {
  FunctionComponent,
  useState,
  ReactNode,
  useCallback,
  CSSProperties,
} from 'react'
import Taro from '@tarojs/taro'
import {
  Image as TImage,
  ImageProps as TImageProps,
  View,
} from '@tarojs/components'
import { Image as ImageIcon, ImageError } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { BaseEventOrig } from '@tarojs/components/types/common'
import pxTransform from '@/utils/px-transform'

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

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : pxTransform(+value)
  }

  // 图片加载
  const handleLoad = (e: BaseEventOrig<TImageProps.onLoadEventDetail>) => {
    setIsError(false)
    setInnerLoading(false)
    onLoad && onLoad(e)
  }
  const handleError = (e: BaseEventOrig<TImageProps.onErrorEventDetail>) => {
    if (src) {
      setIsError(true)
      setInnerLoading(false)
      onError && onError(e)
    }
  }

  const containerStyle = {
    // eslint-disable-next-line no-nested-ternary
    height: height ? pxCheck(height) : Taro.getEnv() === 'WEB' ? '' : '100%',
    // eslint-disable-next-line no-nested-ternary
    width: width ? pxCheck(width) : Taro.getEnv() === 'WEB' ? '' : '100%',
    overflow: radius !== undefined && radius !== null ? 'hidden' : '',
    borderRadius:
      // eslint-disable-next-line no-nested-ternary
      radius !== undefined && radius != null ? pxCheck(radius) : '',
  }

  const imgStyle: any = {
    ...style,
    width,
    height,
  }

  const renderErrorImg = useCallback(() => {
    if (!isError) return null
    if (typeof error === 'boolean' && error === true && !innerLoading) {
      return (
        <View className={`${classPrefix}-error`}>
          <ImageError />
        </View>
      )
    }
    if (React.isValidElement(error) && !innerLoading) {
      return <View className={`${classPrefix}-error`}>{error}</View>
    }
    return null
  }, [error, isError, innerLoading])

  const renderLoading = useCallback(() => {
    if (!loading) return null
    if (typeof loading === 'boolean' && loading === true && innerLoading) {
      return (
        <View className={`${classPrefix}-loading`}>
          <ImageIcon />
        </View>
      )
    }
    if (React.isValidElement(loading) && innerLoading) {
      return <View className={`${classPrefix}-loading`}>{loading}</View>
    }
    return null
  }, [loading, innerLoading])
  return (
    <View className={classNames(classPrefix, className)} style={containerStyle}>
      <TImage
        {...rest}
        className={`${classPrefix}-default ${className ? `${className}-image` : ''}`}
        style={imgStyle}
        src={src}
        onLoad={(e) => handleLoad(e)}
        onError={(e) => handleError(e)}
      />
      <>
        {renderLoading()}
        {renderErrorImg()}
      </>
    </View>
  )
}

Image.displayName = 'NutImage'
