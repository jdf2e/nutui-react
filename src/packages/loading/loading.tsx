import React, { useRef } from 'react'
import classNames from 'classnames'
import {
  Loading as IconLoading,
  Loading1 as IconLoading1,
} from '@nutui/icons-react'
import Lottie, { LottieProps } from '../lottie'
import { ComponentDefaults } from '@/utils/typings'
import { LoadingProps, LoadingRef } from './types'
import { mergeProps } from '@/utils/merge-props' // 方便以后扩展设置为键值对形式

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
    const loadingLottieRef = useRef<LottieProps | null>(null)
    // @ts-ignore
    // const loadingLottieRef: React.MutableRefObject<LottieProps | null> =
    //   useRef()
    const mergedLottieProps = mergeProps(defaultLottieProps, lottieProps)
    React.useImperativeHandle(ref, () => loadingLottieRef)

    const classPrefix = 'nut-loading'
    const getLoadingIcon = () => {
      if (!rest.jsonData) {
        console.warn('Lottie animation requires jsonData prop')
      }
      if (rest.type === 'lottie') {
        return (
          <Lottie
            {...mergedLottieProps}
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
