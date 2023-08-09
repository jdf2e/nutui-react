import React, { CSSProperties, useCallback } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { ButtonProps as MiniProgramButtonProps } from '@tarojs/components'
import { Loading } from '@nutui/icons-react-taro'
import { getEnv } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'
export type ButtonFill = 'solid' | 'outline' | 'none'

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
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const prefixCls = 'nut-button'

const defaultProps = {
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
} as ButtonProps
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
      onClick,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    }
    const getStyle = useCallback(() => {
      const style: CSSProperties = {}
      if (props.color) {
        if (props.fill && props.fill === 'outline') {
          style.color = color
          style.background = '#fff'
          if (!color?.includes('gradient')) {
            style.borderColor = color
          }
        } else {
          style.color = '#fff'
          style.background = color
        }
      }
      return style
    }, [color])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (!loading && !disabled && onClick) {
        onClick(e)
      }
    }
    if (getEnv() === 'WEB') {
      ;(rest as any).type = rest.formType
    }
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/button-has-type
      <button
        {...rest}
        // type={Taro.getEnv() === 'WEB''reset'}
        ref={ref}
        className={classNames(
          prefixCls,
          className,
          props.type ? `${prefixCls}--${type}` : null,
          props.fill ? '' : `${prefixCls}--${type}`,
          props.fill ? `${prefixCls}--${fill}` : null,
          children ? '' : `${prefixCls}--icononly`,
          {
            [`${prefixCls}--${size}`]: size,
            [`${prefixCls}--${shape}`]: shape,
            [`${prefixCls}--block`]: block,
            [`${prefixCls}--disabled`]: disabled,
            [`${prefixCls}--loading`]: loading,
          }
        )}
        style={{ ...getStyle(), ...style }}
        onClick={(e) => handleClick(e)}
      >
        <div className="nut-button-warp">
          {loading && <Loading className="nut-icon-loading" />}
          {!loading && icon ? icon : null}
          {children && (
            <div
              className={`${icon || loading ? 'nut-button-text' : ''}  ${
                rightIcon ? 'nut-button-text right' : ''
              }`}
            >
              {children}
            </div>
          )}
          {rightIcon || null}
        </div>
      </button>
    )
  }
)

Button.displayName = 'NutButton'
