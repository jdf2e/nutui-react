import React from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import { LoadingRef, WebLoadingProps } from '@/types' // 方便以后扩展设置为键值对形式

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
  lottieProps: {},
} as WebLoadingProps

export const Loading = React.forwardRef<LoadingRef, Partial<WebLoadingProps>>(
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
      <div
        className={classNames(
          classPrefix,
          direction === 'vertical' ? `${classPrefix}-vertical` : '',
          className
        )}
        style={style}
      >
        <div className={iconboxClassName()}>{icon || getLoadingIcon()}</div>
        {children ? (
          <div className={`${classPrefix}-text`}>{children}</div>
        ) : null}
      </div>
    )
  }
)

Loading.displayName = 'NutLoading'
