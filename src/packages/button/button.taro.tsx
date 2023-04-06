import React, { CSSProperties, useCallback } from 'react'
import classNames from 'classnames'
import { ButtonProps as MiniProgramButtonProps } from '@tarojs/components'
import { Loading } from '@nutui/icons-react-taro'
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
  onClick: (e: MouseEvent) => void
}

const prefixCls = 'nut-button'

const defaultProps = {
  ...ComponentDefaults,
  color: '',
  type: 'default',
  size: 'normal',
  shape: 'round',
  fill: 'solid',
  loading: false,
  disabled: false,
  block: false,
  icon: null,
  onClick: (e: MouseEvent) => {},
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
      children,
      onClick,
      className,
      style,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    }
    const getStyle = useCallback(() => {
      const style: CSSProperties = {}
      if (props.color) {
        if (fill && fill === 'outline') {
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

    const handleClick = (e: any) => {
      if (!loading && !disabled && onClick) {
        onClick(e)
      }
    }

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/button-has-type
      <button
        {...rest}
        ref={ref}
        className={classNames(
          prefixCls,
          className,
          props.type ? `${prefixCls}--${type}` : null,
          props.fill ? `${prefixCls}--${fill}` : null,
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
        <div className="nut-button__warp">
          {loading && <Loading className="nut-icon-loading" />}
          {!loading && icon ? icon : null}
          {children && (
            <div className={icon || loading ? 'nut-button-text' : ''}>
              {children}
            </div>
          )}
        </div>
      </button>
    )
  }
)

Button.displayName = 'NutButton'
