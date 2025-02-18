import React, { CSSProperties, useCallback, useMemo } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { Loading } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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

export interface ButtonProps extends BasicComponent {
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
  id: string
  nativeType: 'submit' | 'reset' | 'button'
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
  nativeType: 'button',
  onClick: () => {},
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
          style.background = color
          style.borderColor = 'transparent'
        }
      }
      return style
    }, [color, props.fill])

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
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-disabled`]: disabled || loading,
        [`${prefixCls}-${type}${props.fill ? `-${fill}` : ''}-disabled`]:
          disabled || loading,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-icononly`]: !children,
      },
      className
    )

    return (
      <button
        {...rest}
        ref={ref}
        type={nativeType}
        className={buttonClassNames}
        style={{ ...getStyle, ...style }}
        onClick={handleClick}
      >
        <div className="nut-button-wrap">
          {loading && <Loading className="nut-icon-loading" />}
          {!loading && icon}
          {children && (
            <div
              className={`${props.fill || disabled || loading ? `nut-button-${type}${props.fill ? `-${fill}` : ''}${disabled || loading ? '-disabled' : ''}` : ''}${icon || loading ? ' nut-button-text' : ''}${
                rightIcon ? ' nut-button-text-right' : ''
              }`}
            >
              {children}
            </div>
          )}
          {rightIcon}
        </div>
      </button>
    )
  }
)

Button.displayName = 'NutButton'
