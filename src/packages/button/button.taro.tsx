import React, { CSSProperties, useCallback, useMemo } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
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
    onClick,
    ...rest
  } = { ...defaultProps, ...props }

  const getStyle = useMemo(() => {
    const style: CSSProperties = {}
    if (color) {
      if (props.fill === 'outline' || props.fill === 'dashed') {
        style.color = color
        if (!color?.includes('gradient')) {
          style.borderColor = color
        }
      } else {
        style.color = '#fff'
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
        style.color = '#fff'
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
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${shape}-${size}`]: shape && size,
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
    // @ts-ignore
    // <TaroButton
    <View
      {...rest}
      ref={ref}
      // formType={formType || nativeType}
      className={buttonClassNames}
      style={{ ...getStyle, ...style }}
      onClick={(e) => handleClick(e as any)}
    >
      <View className="nut-button-wrap">
        {loading && <Loading ariaHidden className="nut-icon-loading" />}
        {!loading && icon}
        {children && (
          <View
            className={`nut-button-children nut-button-${size}-children nut-button-${type}-children ${!(props.fill || disabled || loading) ? '' : `nut-button-${type}${props.fill ? `-${fill}` : ''}${disabled || loading ? '-disabled' : ''}`}${icon || loading ? ` nut-button-text` : ''}${
              rightIcon ? ' nut-button-text-right' : ''
            }`}
            style={harmony() ? getContStyle : {}}
          >
            {children}
          </View>
        )}
        {rightIcon}
      </View>
    </View>
    // </TaroButton>
  )
})

Button.displayName = 'NutButton'
