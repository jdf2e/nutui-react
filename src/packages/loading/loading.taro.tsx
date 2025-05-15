import React from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { LoadingRef, LoadingType, TaroLoadingProps } from '@/types'

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
} as TaroLoadingProps
const defaultLottieProps = {
  loop: true,
  autoplay: true,
}
export const Loading = React.forwardRef<LoadingRef, Partial<TaroLoadingProps>>(
  (props, ref) => {
    const { className, style, children, direction, icon, ...rest } = {
      ...defaultProps,
      ...props,
    }

    const classPrefix = 'nut-loading'
    const getLoadingIcon = () => {
      const LoadingIcon = loadingMap[rest.type] || IconLoading1
      return <LoadingIcon className={`${classPrefix}-icon`} />
    }
    const iconboxClassName = () => {
      return !icon ? `${classPrefix}-icon-box` : ''
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
