import React, { CSSProperties, useCallback, useMemo } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import {
  View,
  // Button as TaroButton,
} from '@tarojs/components'
import { Loading } from '@nutui/icons-react-taro'
import { ComponentDefaults } from '@/utils/typings'
import { harmony } from '@/utils/taro/platform'
import { TaroButtonProps } from '@/types'

const prefixCls = 'nut-button'

const defaultProps: Partial<TaroButtonProps> = {
  ...ComponentDefaults,
  color: '',
  type: 'default',
  size: 'normal',
  shape: 'round',
  fill: 'outline',
  loading: false,
  disabled: false,
  block: false,
  icon: null,
  rightIcon: null,
  onClick: (e: MouseEvent<HTMLButtonElement>) => {},
}
export const Button = React.forwardRef<
  HTMLButtonElement,
  Partial<TaroButtonProps>
>((props, ref) => {
  const {
    color,
    shape,
    fill,
    loading,
    disabled,
    type,
    size,
    block,
    icon,
    rightIcon,
    children,
    className,
    style,
    // formType,
    nativeType,
    description,
    onClick,
    ...rest
  } = { ...defaultProps, ...props }

  const mappedSize = useMemo(() => {
    if (!size) return 'normal'
    const sizeMap: Record<string, string> = {
      '48': 'xlarge',
      '40': 'large',
      '32': 'normal',
      '28': 'small',
      '24': 'mini',
    }
    return sizeMap[size] || size
  }, [size])

  const getStyle = useMemo(() => {
    const style: CSSProperties = {}
    if (color) {
      if (props.fill === 'outline' || props.fill === 'dashed') {
        style.color = color
        if (!color?.includes('gradient')) {
          style.borderColor = color
        }
      } else {
        style.color = 'var(--nutui-color-primary-text, #fff)'
        if (harmony()) {
          style.backgroundColor = color
        }
        style.background = color
        style.borderColor = 'transparent'
      }
    }
    return style
  }, [color, props.fill])

  const getContStyle = useMemo(() => {
    const style: CSSProperties = {}
    if (props.color) {
      if (props.fill === 'outline' || props.fill === 'dashed') {
        style.color = color
      } else {
        style.color = 'var(--nutui-color-primary-text, #fff)'
        style.background = 'transparent'
        style.borderColor = 'transparent'
      }
    }
    return style
  }, [color, props.fill, props.color])

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!loading && !disabled && onClick) {
        onClick(e)
      }
    },
    [loading, disabled, onClick]
  )

  const buttonClassNames = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-${type}-solid`]: type === 'primary' && !props.fill,
      [`${prefixCls}-${fill}`]: props.fill,
      [`${prefixCls}-${type}-${fill}`]: props.fill,
      [`${prefixCls}-${mappedSize}`]: mappedSize,
      [`${prefixCls}-has-desc`]: !!description,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-disabled`]: disabled || loading,
      [`${prefixCls}-${type}${props.fill ? `-${fill}` : ''}-disabled`]:
        disabled || loading,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icononly`]: !children,
    },
    className
  )

  // if (getEnv() === 'WEB') {
  //   ;(rest as any).type = formType
  // }
  return (
    // <TaroButton>
    // @ts-ignore
    <View
      {...rest}
      ref={ref}
      // formType={formType || nativeType}
      className={buttonClassNames}
      style={{ ...getStyle, ...style }}
      ariaRole="button"
      role="button"
      ariaDisabled={disabled || loading}
      aria-disabled={disabled || loading}
      ariaBusy={loading}
      aria-busy={loading}
      onClick={(e) => handleClick(e as any)}
    >
      <View className="nut-button-wrap">
        {loading && <Loading className="nut-icon-loading" aria-hidden="true" />}
        {!loading && icon}
        {children && (
          <View
            className={classNames(
              'nut-button-children',
              `nut-button-${mappedSize}-children`,
              `nut-button-${type}-children`,
              {
                'nut-button-text': icon || loading,
                'nut-button-text-right': rightIcon,
              }
            )}
            style={harmony() ? getContStyle : {}}
          >
            {description ? (
              <View className="nut-button-title">{children}</View>
            ) : (
              children
            )}
            {description && (
              <View className="nut-button-desc">{description}</View>
            )}
          </View>
        )}
        {rightIcon}
      </View>
    </View>
    // </TaroButton>
  )
})

Button.displayName = 'NutButton'
