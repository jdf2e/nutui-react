import React, { CSSProperties, useCallback, useMemo } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import {
  ButtonProps as MiniProgramButtonProps,
  View,
  Button as TaroButton,
} from '@tarojs/components'
import { Loading } from '@nutui/icons-react-taro'
import { getEnv } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { harmonyAndRn } from '@/utils/platform-taro'

type OmitMiniProgramButtonProps = Omit<
  MiniProgramButtonProps,
  'size' | 'type' | 'onClick' | 'style'
>

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonSize = 'xlarge' | 'large' | 'normal' | 'small' | 'mini'
export type ButtonShape = 'square' | 'round'
export type ButtonFill = 'solid' | 'outline' | 'dashed' | 'none'

export interface ButtonProps
  extends BasicComponent,
    OmitMiniProgramButtonProps {
  color: string
  shape: ButtonShape
  type: ButtonType
  size: ButtonSize
  fill: ButtonFill
  block: boolean
  loading: boolean
  disabled: boolean
  icon: React.ReactNode
  rightIcon: React.ReactNode
  nativeType: 'submit' | 'reset' // | 'button'
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const prefixCls = 'nut-button'

const defaultProps: Partial<ButtonProps> = {
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
export const Button = React.forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (props, ref) => {
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
          if (harmonyAndRn()) {
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

    if (getEnv() === 'WEB') {
      ;(rest as any).type = rest.formType
    }
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/button-has-type
      <TaroButton
        {...rest}
        ref={ref}
        formType={nativeType}
        className={buttonClassNames}
        style={{ ...getStyle, ...style }}
        onClick={(e) => handleClick(e as any)}
      >
        <View className="nut-button-wrap">
          {loading && <Loading className="nut-icon-loading" />}
          {!loading && icon}
          {children && (
            <View
              className={`nut-button-children nut-button-${size}-children nut-button-${type}-children ${!(props.fill || disabled || loading) ? '' : `nut-button-${type}${props.fill ? `-${fill}` : ''}${disabled || loading ? '-disabled' : ''}`}${icon || loading ? ` nut-button-text` : ''}${
                rightIcon ? ' nut-button-text-right' : ''
              }`}
              style={harmonyAndRn() ? getContStyle : {}}
            >
              {children}
            </View>
          )}
          {rightIcon}
        </View>
      </TaroButton>
    )
  }
)

Button.displayName = 'NutButton'
