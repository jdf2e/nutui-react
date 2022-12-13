import React, { FunctionComponent, useState, useEffect } from 'react'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Icon from '@/packages/icon/index.taro'

export interface ImageProps {
  className: string
  style: React.CSSProperties
  src: string
  fit: ImageFit
  position: ImagePosition
  alt: string
  width: string
  height: string
  round: boolean
  radius: string | number
  showError: boolean
  showLoading: boolean
  slotLoding: React.ReactNode
  slotError: React.ReactNode | string
  onClick?: (e: MouseEvent) => void
  onLoad?: () => void
  onError?: () => void
}

const defaultProps = {
  fit: 'fill',
  position: 'center',
  alt: '',
  width: 'center',
  height: '',
  round: false,
  showError: true,
  showLoading: true,
} as ImageProps

export type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | string
export type ImagePosition =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | string

export const Image: FunctionComponent<
  Partial<ImageProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onLoad' | 'onError'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    className,
    style,
    src,
    fit,
    position,
    alt,
    width,
    height,
    round,
    radius,
    showError,
    showLoading,
    slotError,
    slotLoding,
    onClick,
    onLoad,
    onError,
  } = { ...defaultProps, ...props }
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (src) {
      setIsError(false)
      setLoading(true)
    }
  }, [src])

  // 图片加载
  const load = () => {
    setLoading(false)
    onLoad && onLoad()
  }
  // 图片加载失败
  const error = () => {
    setIsError(true)
    setLoading(false)
    onError && onError()
  }

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }
  const stylebox = {
    height: height ? pxCheck(height) : '',
    width: width ? pxCheck(width) : '',
    overflow: radius !== undefined && radius !== null ? 'hidden' : '',
    borderRadius:
      radius !== undefined && radius !== null ? pxCheck(radius) : '',
  }

  const styles: any = {
    objectFit: fit,
    objectPosition: position,
    ...style,
  }

  const imageClick = (event: any) => {
    onClick && onClick(event)
  }

  return (
    <div
      className={`nut-image ${round ? 'nut-image-round' : ''}`}
      style={stylebox}
      onClick={(e: any) => {
        imageClick(e)
      }}
    >
      <img
        className="nut-img"
        style={styles}
        src={src}
        alt={alt}
        onLoad={load}
        onError={error}
      />
      {showLoading && loading ? (
        <div className="nut-img-loading">
          {slotLoding || children || <Icon name="image" />}
        </div>
      ) : null}

      {showError && isError && !loading ? (
        <div className="nut-img-error">
          {slotError || children || <Icon name="image-error" />}
        </div>
      ) : null}
    </div>
  )
}

Image.defaultProps = defaultProps
Image.displayName = 'NutImage'
