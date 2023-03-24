import React, {
  CSSProperties,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { ButtonProps as MiniProgramButtonProps } from '@tarojs/components'
import { Loading } from '@nutui/icons-react-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type OmitMiniProgramButtonProps = Omit<
  MiniProgramButtonProps,
  'size' | 'type' | 'onClick'
>
export interface ButtonProps
  extends BasicComponent,
    OmitMiniProgramButtonProps {
  className: string
  color: string
  shape: ButtonShape
  plain: boolean
  loading: boolean
  disabled: boolean
  style: React.CSSProperties
  type: ButtonType
  size: ButtonSize
  block: boolean
  icon: React.ReactNode
  children: any
  onClick: (e: MouseEvent) => void
}

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  color: '',
  shape: 'round',
  plain: false,
  loading: false,
  disabled: false,
  type: 'default',
  size: 'normal',
  block: false,
  icon: '',
  style: {},
  children: undefined,
  onClick: (e: MouseEvent) => {},
} as ButtonProps
export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const {
    color,
    shape,
    plain,
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
    if (color) {
      if (plain) {
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
  }, [color, plain])
  const classes = useCallback(() => {
    const prefixCls = 'nut-button'
    return [
      prefixCls,
      `${type ? `${prefixCls}--${type}` : ''}`,
      `${size ? `${prefixCls}--${size}` : ''}`,
      `${shape ? `${prefixCls}--${shape}` : ''}`,
      `${plain ? `${prefixCls}--plain` : ''}`,
      `${block ? `${prefixCls}--block` : ''}`,
      `${disabled ? `${prefixCls}--disabled` : ''}`,
      `${loading ? `${prefixCls}--loading` : ''}`,
    ]
      .filter(Boolean)
      .join(' ')
  }, [block, disabled, loading, plain, shape, size, type])
  const [btnName, setBtnName] = useState(classes())
  const [btnStyle, setBtnStyle] = useState(getStyle())
  useEffect(() => {
    setBtnName(classes())
    setBtnStyle(getStyle())
  }, [
    className,
    color,
    shape,
    plain,
    loading,
    disabled,
    style,
    type,
    size,
    block,
    icon,
    children,
    onClick,
    classes,
    getStyle,
  ])

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
      className={`${btnName} ${className}`}
      style={{ ...btnStyle, ...style }}
      {...rest}
      onClick={(e) => handleClick(e)}
    >
      <div className="nut-button__warp">
        {loading && <Loading className="nut-icon-loading" />}
        {!loading && icon ? icon : null}
        {children && (
          <div className={icon || loading ? 'text' : ''}>{children}</div>
        )}
      </div>
    </button>
  )
}

Button.defaultProps = defaultProps
Button.displayName = 'NutButton'
