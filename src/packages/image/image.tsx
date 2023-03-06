import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { useConfig } from '@/packages/configprovider'
import Icon from '@/packages/icon'

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
  isLazy?: boolean
  loadingImg?: string
  errorImg?: string
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
  isLazy: false,
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
    isLazy,
    loadingImg,
    errorImg,
    onClick,
    onLoad,
    onError,
  } = { ...defaultProps, ...props }
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [_src, setSrc] = useState('')

  useEffect(() => {
    if (src) {
      setSrc(src)
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

  // 图片懒加载
  const observer: any = useRef(null)
  const initObserver = () => {
    const imgs = document.querySelectorAll('.nut-img.lazyload')
    const options = {
      threshold: [0], // 交会处
      rootMargin: '0px', // 对视口进行收缩和扩张
    }
    // 监听dom是否在视口内
    observer.current = new IntersectionObserver((entires, self) => {
      // entires为监听的节点数组对象
      entires.forEach((item) => {
        // isIntersecting是当前监听元素交叉区域是否在可视区域指定的阈值内返回的是一个布尔值
        if (item.isIntersecting) {
          setTimeout(() => {
            const img: any = item.target
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
            }
            // 资源加载后停止监听
            observer.current.unobserve(item.target)
          }, 300)
        }
      })
    }, options)
    imgs.forEach((item) => {
      observer.current.observe(item)
    })
  }

  // 使用disconnect将取消的Observer实例中的所有监听
  const resetObserver = () => {
    observer.current.disconnect && observer.current.disconnect()
  }

  useEffect(() => {
    isLazy && initObserver()

    return () => {
      isLazy && resetObserver()
    }
  }, [isLazy])

  const loadingBg = {
    backgroundImage: loadingImg ? `url('${loadingImg}')` : '',
  }
  const errorBg = {
    backgroundImage: errorImg ? `url('${errorImg}')` : '',
  }

  const imageClick = (event: any) => {
    onClick && onClick(event)
  }

  return (
    <div
      className={`nut-image ${round ? 'nut-image-round' : ''} ${
        className || ''
      }`}
      style={stylebox}
      onClick={(e: any) => {
        imageClick(e)
      }}
    >
      {isLazy ? (
        <img
          className="nut-img lazyload"
          style={styles}
          data-src={_src}
          alt={alt}
          loading="lazy"
          onLoad={load}
          onError={error}
        />
      ) : (
        <img
          className="nut-img"
          style={styles}
          src={_src}
          alt={alt}
          onLoad={load}
          onError={error}
        />
      )}
      {loading && showLoading ? (
        <div className="nut-img-loading" style={loadingBg}>
          {!loadingImg && (slotLoding || children || <Icon name="image" />)}
        </div>
      ) : null}

      {isError && showError && !loading ? (
        <div className="nut-img-error" style={errorBg}>
          {!errorImg && (slotError || children || <Icon name="image-error" />)}
        </div>
      ) : null}
    </div>
  )
}

Image.defaultProps = defaultProps
Image.displayName = 'NutImage'
