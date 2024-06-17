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
import { pxCheck } from '@/utils/px-check'
import { harmonyAndRn } from '@/utils/platform-taro'

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

  const containerStyle = {
    // eslint-disable-next-line no-nested-ternary
    height: height
      ? Taro.getEnv() === 'RN'
        ? height
        : pxCheck(height)
      : Taro.getEnv() === 'WEB'
        ? ''
        : '100%',
    // eslint-disable-next-line no-nested-ternary
    width: width
      ? Taro.getEnv() === 'RN'
        ? width
        : pxCheck(width)
      : Taro.getEnv() === 'WEB'
        ? ''
        : '100%',
    overflow: radius !== undefined && radius !== null ? 'hidden' : '',
    borderRadius:
      // eslint-disable-next-line no-nested-ternary
      radius != null ? (Taro.getEnv() === 'RN' ? radius : pxCheck(radius)) : '',
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
        <View className="nut-img-error">
          <ImageError />
        </View>
      )
    }
    if (React.isValidElement(error) && !innerLoading) {
      return <View className="nut-img-error">{error}</View>
    }
    return null
  }, [error, isError, innerLoading])

  const renderLoading = useCallback(() => {
    if (!loading) return null
    if (typeof loading === 'boolean' && loading === true && innerLoading) {
      return (
        <View className="nut-img-loading">
          <ImageIcon />
        </View>
      )
    }
    if (React.isValidElement(loading) && innerLoading) {
      return <View className="nut-img-loading">{loading}</View>
    }
    return null
  }, [loading, innerLoading])
  return (
    <View className={classNames(classPrefix, className)} style={containerStyle}>
      <TImage
        {...rest}
        className="nut-img"
        style={imgStyle}
        src={src}
        onLoad={(e) => handleLoad(e)}
        onError={(e) => handleError(e)}
      />
      {!harmonyAndRn() && (
        <>
          {renderLoading()}
          {renderErrorImg()}
        </>
      )}
    </View>
  )
}

Image.displayName = 'NutImage'
