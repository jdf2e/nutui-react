import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type LoadingType = 'spinner' | 'circular'
export type DirectionType = 'horizontal' | 'vertical'

export interface LoadingProps extends BasicComponent {
  // loading的类型
  type: LoadingType
  // loading图标和文字的排列方式
  direction: DirectionType
  // 自定义图标
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

  // 样式class前缀
  const classPrefix = 'nut-loading'

  const CurLoadingIcon = loadingMap[rest.type] || IconLoading1

  return (
    <div
      className={classNames(
        classPrefix,
        className,
        direction === 'vertical' ? `${classPrefix}-vertical` : ''
      )}
      style={style}
    >
      <div className={`${classPrefix}-icon-box`}>
        {icon || <CurLoadingIcon className={`${classPrefix}-icon`} />}
      </div>
      {children ? <div className={`${classPrefix}-text`}>{children}</div> : ''}
    </div>
  )
}

Loading.defaultProps = defaultProps
Loading.displayName = 'NutLoading'
