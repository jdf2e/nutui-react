import React, { useRef } from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Lottie from '../lottie/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { LoadingProps, LoadingRef, LoadingType } from './types'
import { mergeProps } from '@/utils/merge-props'
import { LottieProps } from '@/packages/lottie' // 方便以后扩展设置为键值对形式

// 方便以后扩展设置为键值对形式
const loadingMap: { [key in LoadingType]?: any } = {
  circular: IconLoading1,
  spinner: IconLoading,
}

const defaultProps = {
  ...ComponentDefaults,
  // 对比一下,个人感觉还是Loading1比较好看一些,所以用它作为了默认的loading图标
  type: 'circular',
  direction: 'horizontal',
  lottieProps: {},
} as LoadingProps
const defaultLottieProps = {
  loop: true,
  autoplay: true,
}
export const Loading = React.forwardRef<LoadingRef, Partial<LoadingProps>>(
  (props, ref) => {
    const {
      className,
      style,
      children,
      direction,
      icon,
      lottieProps,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    }
    // @ts-ignore
    const loadingLottieRef: React.MutableRefObject<LottieProps | null> =
      useRef()
    const mergedLottieProps = mergeProps(defaultLottieProps, lottieProps)
    React.useImperativeHandle(ref, () => loadingLottieRef)

    const classPrefix = 'nut-loading'
    const getLoadingIcon = () => {
      if (rest.type === 'lottie' && rest.jsonData) {
        return (
          <Lottie
            {...mergedLottieProps}
            // @ts-ignore
            ref={loadingLottieRef}
            source={rest.jsonData}
          />
        )
      }
      const LoadingIcon = loadingMap[rest.type] || IconLoading1
      return <LoadingIcon className={`${classPrefix}-icon`} />
    }
    const iconboxClassName = () => {
      if (rest.type === 'lottie') return `${classPrefix}-lottie-box`
      return `${classPrefix}-icon-box`
    }
    return (
      <View
        className={classNames(
          classPrefix,
          direction === 'vertical' ? `${classPrefix}-vertical` : '',
          className
        )}
        style={style}
      >
        <View className={iconboxClassName()}>{icon || getLoadingIcon()}</View>
        {children ? (
          <View className={`${classPrefix}-text`}>{children}</View>
        ) : null}
      </View>
    )
  }
)

Loading.displayName = 'NutLoading'
