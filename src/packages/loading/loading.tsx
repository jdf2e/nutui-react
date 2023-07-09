import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type LoadingType = 'spinner' | 'circular'

export interface LoadingProps extends BasicComponent {
  // loading的类型
  type: LoadingType
  // loading的颜色
  color: string
  // loading的大小 下面会把size转成width和height
  size: number | string
  // 文字的大小
  textSize: number | string
  // 文字的颜色
  textColor: string
  // 是否竖向排列loading图标和文字
  vertical: boolean
  // 自定义图标
  icon?: JSX.Element
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
  color: '#9EA9AF',
  size: 32,
  textColor: '#9EA9AF',
  textSize: 14,
  vertical: false,
} as LoadingProps
export const Loading: FunctionComponent<
  Partial<LoadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    children,
    color,
    size,
    textColor,
    textSize,
    vertical,
    icon,
    ...rest
  } = {
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
        vertical ? `${classPrefix}-vertical` : ''
      )}
      style={style}
    >
      <div className={`${classPrefix}-icon`}>
        {icon || <CurLoadingIcon color={color} width={size} height={size} />}
      </div>
      {children ? (
        <div
          className={`${classPrefix}-text`}
          style={{
            fontSize: `${parseInt(textSize.toString())}px`,
            color: textColor,
          }}
        >
          {children}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

Loading.defaultProps = defaultProps
Loading.displayName = 'NutLoading'
