import React, { ReactElement, ReactHTML } from 'react'
import bem from '@/utils/bem'

export interface IconProps {
  name: string
  size: string | number
  classPrefix: string
  color: string
  tag: keyof ReactHTML
  onClick: (e: MouseEvent) => void
  fontClassName: string
  className: string
  style: React.CSSProperties
  children: React.ReactNode
}

const defaultProps = {
  name: '',
  size: '',
  classPrefix: 'nut-icon',
  fontClassName: 'nutui-iconfont',
  color: '',
  tag: 'i',
  onClick: (e: MouseEvent) => {},
  className: '',
} as IconProps

function pxCheck(value: string | number): string {
  if (value === '') {
    return value
  }
  if (Number.isNaN(Number(value))) {
    return String(value)
  }
  return `${value}px`
}

export function Icon<T>(props: Partial<IconProps> & T): ReactElement {
  const {
    name,
    size,
    classPrefix,
    color,
    tag,
    children,
    className,
    fontClassName,
    style,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const isImage = name ? name.indexOf('/') !== -1 : false
  const type = isImage ? 'img' : tag
  const b = bem('icon')

  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }
  const hasSrc = () => {
    if (isImage) return { src: name }
    return {}
  }

  const styles: any = {}
  const checkedSize: any = pxCheck(size)
  if (checkedSize) {
    styles.width = styles.height = styles.fontSize = checkedSize
  }

  return React.createElement<any>(
    type,
    {
      className: isImage
        ? `${b('img')} ${className || ''} `
        : `${fontClassName} ${b(null)} ${classPrefix}-${name} ${
            className || ''
          }`,
      style: {
        color,
        ...styles,
        ...style,
      },
      ...rest,
      onClick: handleClick,
      ...hasSrc(),
    },
    children
  )
}

Icon.defaultProps = defaultProps
Icon.displayName = 'NutIcon'
