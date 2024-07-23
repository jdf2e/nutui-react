import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type LoadingType = 'spinner' | 'circular'
export type LoadingDirection = 'horizontal' | 'vertical'

export interface LoadingProps extends BasicComponent {
  type: LoadingType
  direction: LoadingDirection
  icon?: ReactNode
}

// 方便以后扩展设置为键值对形式
const loadingMap = {
  circular: IconLoading1,
  spinner: IconLoading,
}

const defaultProps = {
  ...ComponentDefaults,
  // 对比一下,个人感觉还是Loading1比较好看一些,所以用它作为了默认的loading图标
  type: 'circular',
  direction: 'horizontal',
} as LoadingProps
export const Loading: FunctionComponent<
  Partial<LoadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { className, style, children, direction, icon, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-loading'
  const CurLoadingIcon = loadingMap[rest.type] || IconLoading1

  return (
    <View
      className={classNames(
        classPrefix,
        direction === 'vertical' ? `${classPrefix}-vertical` : '',
        className
      )}
      style={style}
    >
      <View className={`${classPrefix}-icon-box`}>
        {icon || <CurLoadingIcon className={`${classPrefix}-icon`} />}
      </View>
      {children ? (
        <View className={`${classPrefix}-text`}>{children}</View>
      ) : (
        ''
      )}
    </View>
  )
}

Loading.displayName = 'NutLoading'
