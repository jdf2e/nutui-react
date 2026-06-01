import React, { CSSProperties, useCallback, useMemo } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { Loading } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import { WebButtonProps } from '@/types'

const prefixCls = 'nut-button'

const defaultProps: Partial<WebButtonProps> = {
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

export const Button = React.forwardRef<
  HTMLButtonElement,
  Partial<WebButtonProps>
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

  return (
    <button
      {...rest}
      ref={ref}
      type={nativeType}
      className={buttonClassNames}
      style={{ ...getStyle, ...style }}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      onClick={handleClick}
    >
      <div className="nut-button-wrap">
        {loading && <Loading className="nut-icon-loading" aria-hidden="true" />}
        {!loading && icon}
        {children && (
          <div
            className={classNames({
              'nut-button-text': icon || loading,
              'nut-button-text-right': rightIcon,
            })}
          >
            <div className="nut-button-title">{children}</div>
            {description && (
              <div className="nut-button-desc">{description}</div>
            )}
          </div>
        )}
        {rightIcon}
      </div>
    </button>
  )
})

Button.displayName = 'NutButton'
