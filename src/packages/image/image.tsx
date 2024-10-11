import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from 'react'
import { Image as ImageIcon, ImageError } from '@nutui/icons-react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { pxCheck } from '@/utils/px-check'

export interface ImageProps extends BasicComponent {
  src: string
  fit: ImageFit
  position: ImagePosition
  alt: string
  width: string
  height: string
  radius: string | number
  error: boolean | ReactNode
  loading: boolean | ReactNode
  lazy: boolean
  onClick: (e: MouseEvent) => void
  onLoad: () => void
  onError: () => void
}

const defaultProps: Partial<ImageProps> = {
  ...ComponentDefaults,
  fit: 'fill',
  position: 'center',
  alt: '',
  width: '',
  height: '',
  error: true,
  loading: true,
  lazy: false,
}

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

const classPrefix = 'nut-image'

export const Image: FunctionComponent<
  Partial<ImageProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onLoad' | 'onError'>
> = (props) => {
  const {
    className,
    style,
    src,
    fit,
    position,
    alt,
    width,
    height,
    radius,
    error,
    loading,
    lazy,
    draggable,
    onClick,
    onLoad,
    onError,
  } = { ...defaultProps, ...props }
  const [innerLoading, setInnerLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [complete, setComplete] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && !lazy) {
      if (imgRef.current.naturalHeight === 0) {
        handleError()
      } else {
        handleLoad()
      }
    } else {
      // 非 SSR 模式下开启 loading
      setInnerLoading(true)
    }
  }, [imgRef])

  useEffect(() => {
    setComplete(false)
  }, [src])

  const handleLoad = () => {
    if (!complete) {
      setIsError(false)
      setInnerLoading(false)
      onLoad && onLoad()
      setComplete(true)
    }
  }
  const handleError = () => {
    if (!complete) {
      setIsError(true)
      setInnerLoading(false)
      onError && onError()
      setComplete(true)
    }
  }

  const containerStyle = {
    height: height ? pxCheck(height) : '',
    width: width ? pxCheck(width) : '',
    overflow: radius !== undefined && radius !== null ? 'hidden' : '',
    borderRadius:
      radius !== undefined && radius !== null ? pxCheck(radius) : '',
    ...style,
  }

  const imgStyle: any = {
    objectFit: fit,
    objectPosition: position,
    ...style,
  }

  // 图片懒加载
  const observer: any = useRef(null)
  const initObserver = () => {
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
            resetObserver()
          }, 300)
        }
      })
    }, options)
    observer.current.observe(imgRef.current)
  }

  // 使用disconnect将取消的Observer实例中的所有监听
  const resetObserver = () => {
    observer.current.disconnect && observer.current.disconnect()
  }

  useEffect(() => {
    lazy && initObserver()

    return () => {
      lazy && resetObserver()
    }
  }, [lazy])

  const imageClick = (event: any) => {
    onClick && onClick(event)
  }

  const renderErrorImg = useCallback(() => {
    if (!isError) return null
    if (typeof error === 'boolean' && error === true && !innerLoading) {
      return (
        <div className="nut-img-error">
          <ImageError />
        </div>
      )
    }
    if (React.isValidElement(error) && !innerLoading) {
      return <div className="nut-img-error">{error}</div>
    }
    return null
  }, [error, isError])

  const renderLoading = useCallback(() => {
    if (!loading) return null
    if (typeof loading === 'boolean' && loading === true && innerLoading) {
      return (
        <div className="nut-img-loading">
          <ImageIcon />
        </div>
      )
    }
    if (React.isValidElement(loading) && innerLoading) {
      return <div className="nut-img-loading">{loading}</div>
    }
    return null
  }, [loading, innerLoading])

  return (
    <div
      className={classNames(classPrefix, className)}
      style={containerStyle}
      onClick={(e: any) => {
        imageClick(e)
      }}
    >
      {lazy ? (
        <img
          ref={imgRef}
          className="nut-img lazyload"
          style={imgStyle}
          data-src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          draggable={draggable}
        />
      ) : (
        <img
          ref={imgRef}
          className="nut-img"
          style={imgStyle}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          draggable={draggable}
        />
      )}
      {renderLoading()}
      {renderErrorImg()}
    </div>
  )
}

Image.displayName = 'NutImage'
