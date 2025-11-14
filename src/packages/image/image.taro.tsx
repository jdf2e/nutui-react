import React, {
  CSSProperties,
  FunctionComponent,
  useCallback,
  useState,
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
import { pxTransform } from '@/utils/taro/px-transform'
import { TaroImageProps } from '@/types'

const defaultProps = {
  src: '',
  error: true,
  loading: true,
} as TaroImageProps

export const Image: FunctionComponent<Partial<TaroImageProps>> = (props) => {
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
    ...(height ? { height: pxCheck(height) } : {}),
    ...(width ? { width: pxCheck(width) } : {}),
    ...(radius !== undefined && radius !== null
      ? {
          overflow: 'hidden',
          borderRadius: pxCheck(radius),
        }
      : {}),
    ...(style as CSSProperties),
  }

  const imgStyle: any = {
    ...(style as any),
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
    <View
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-basic`]: Taro.getEnv() !== 'WEB',
        },
        className
      )}
      style={containerStyle}
    >
      <TImage
        {...rest}
        className={classNames(
          `${classPrefix}-default`,
          className && `${className}-image`,
          {
            [`${classPrefix}-error`]: isError,
          }
        )}
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
