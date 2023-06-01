import React, {
  useRef,
  useState,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SignatureProps extends BasicComponent {
  type: 'png' | 'jpg'
  lineWidth: number
  strokeStyle: string
  unsupported: string
  onConfirm?: (canvas: HTMLCanvasElement, dataurl: string) => void
  onClear?: () => void
}
const defaultProps = {
  ...ComponentDefaults,
  type: 'png',
  lineWidth: 2,
  strokeStyle: '#000',
  unsupported: '对不起，当前浏览器不支持Canvas，无法使用本控件！',
} as SignatureProps
const InternalSignature: ForwardRefRenderFunction<
  unknown,
  Partial<SignatureProps>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    type,
    lineWidth,
    strokeStyle,
    unsupported,
    className,
    style,
    onConfirm,
    onClear,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = `nut-signature`
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  const isCanvasSupported = () => {
    const elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  const isSupportTouch = 'ontouchstart' in window
  const events = isSupportTouch
    ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
    : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']

  useEffect(() => {
    if (isCanvasSupported() && canvasRef.current && wrapRef.current) {
      ctx.current = canvasRef.current.getContext('2d')
      setCanvasWidth(wrapRef.current.offsetWidth)
      setCanvasHeight(wrapRef.current.offsetHeight)
      addEvent()
    }
  }, [])

  const startEventHandler = (event: any) => {
    event.preventDefault()
    if (ctx.current && canvasRef.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
      canvasRef.current.addEventListener(events[1], moveEventHandler, false)
      canvasRef.current.addEventListener(events[2], endEventHandler, false)
      canvasRef.current.addEventListener(events[3], leaveEventHandler, false)
    }
  }

  const addEvent = () => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener(events[0], startEventHandler, false)
    }
  }

  const moveEventHandler = (event: any) => {
    event.preventDefault()

    const evt = isSupportTouch ? event.touches[0] : event
    if (canvasRef.current && ctx.current) {
      const coverPos = canvasRef.current.getBoundingClientRect()
      const mouseX = evt.clientX - coverPos.left
      const mouseY = evt.clientY - coverPos.top

      ctx.current.lineTo(mouseX, mouseY)
      ctx.current.stroke()
    }
  }

  const endEventHandler = (event: any) => {
    event.preventDefault()
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(events[1], moveEventHandler, false)
      canvasRef.current.removeEventListener(events[2], endEventHandler, false)
    }
  }
  const leaveEventHandler = (event: any) => {
    event.preventDefault()
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(events[1], moveEventHandler, false)
      canvasRef.current.removeEventListener(events[2], endEventHandler, false)
    }
  }
  const handleClearBtn = () => {
    if (canvasRef.current && ctx.current) {
      canvasRef.current.addEventListener(events[2], endEventHandler, false)
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
    onClear && onClear()
  }

  const onSave = (canvas: HTMLCanvasElement) => {
    let dataurl
    switch (type) {
      case 'png':
        dataurl = canvas.toDataURL('image/png')
        break
      case 'jpg':
        dataurl = canvas.toDataURL('image/jpeg', 0.8)
        break
      default:
        dataurl = canvas.toDataURL('image/png')
    }
    handleClearBtn()
    onConfirm && onConfirm(canvas, dataurl as string)
  }

  useImperativeHandle(ref, () => ({
    confirm: () => {
      onSave(canvasRef.current as HTMLCanvasElement)
    },
    clear: () => {
      handleClearBtn()
    },
  }))
  return (
    <div className={`${classPrefix} ${className}`} style={style} {...rest}>
      <div className={`${classPrefix}__inner`} ref={wrapRef}>
        {isCanvasSupported() ? (
          <canvas ref={canvasRef} height={canvasHeight} width={canvasWidth} />
        ) : (
          <p className={`${classPrefix}__unsopport}`}>
            {locale.signature.unsupported || unsupported}
          </p>
        )}
      </div>
    </div>
  )
}

export const Signature =
  React.forwardRef<unknown, Partial<SignatureProps>>(InternalSignature)
Signature.defaultProps = defaultProps
Signature.displayName = 'NutSignature'
