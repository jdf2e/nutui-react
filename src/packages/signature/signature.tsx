import React, {
  useRef,
  useState,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
  ReactNode,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { canUseDom } from '@/utils/can-use-dom'

export type SignatureType = 'jpg' | 'png'

export interface SignatureProps extends BasicComponent {
  type: SignatureType
  lineWidth: number
  strokeStyle: string
  unsupported: ReactNode
  onConfirm?: (
    canvas: HTMLCanvasElement,
    dataurl: string,
    isSigned?: boolean
  ) => void
  onClear?: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'png',
  lineWidth: 2,
  strokeStyle: '#1a1a1a',
  unsupported: '',
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
  const checkCanvas = () => {
    const elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  const [isCanvasSupported, setIsCanvasSupported] = useState(false)
  const isSignedRef = useRef(false)

  const isSupportTouch = canUseDom ? 'ontouchstart' in window : false
  const events = isSupportTouch
    ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
    : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']

  useEffect(() => {
    setIsCanvasSupported(checkCanvas)
  }, [])

  useEffect(() => {
    if (isCanvasSupported && canvasRef.current && wrapRef.current) {
      ctx.current = canvasRef.current.getContext('2d')
      setCanvasWidth(wrapRef.current.offsetWidth)
      setCanvasHeight(wrapRef.current.offsetHeight)
      addEvent()
    }
  }, [isCanvasSupported])

  const startEventHandler = (event: any) => {
    event.preventDefault()
    isSignedRef.current = true
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
    isSignedRef.current = false
    if (canvasRef.current && ctx.current) {
      canvasRef.current.addEventListener(events[2], endEventHandler, false)
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
    onClear && onClear()
  }

  const onSave = (canvas: HTMLCanvasElement) => {
    let dataurl = ''
    if (!isSignedRef.current) {
      onConfirm && onConfirm(canvas, dataurl as string, isSignedRef.current)
      return
    }
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
    onConfirm && onConfirm(canvas, dataurl as string, isSignedRef.current)
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
      <div className={`${classPrefix}-inner`} ref={wrapRef}>
        <>
          {/* eslint-disable-next-line no-nested-ternary */}
          {isCanvasSupported ? (
            <canvas ref={canvasRef} height={canvasHeight} width={canvasWidth} />
          ) : unsupported ? (
            <>{unsupported}</>
          ) : (
            <p className={`${classPrefix}-unsupport`}>
              {locale.signature.unsupported}
            </p>
          )}
        </>
      </div>
    </div>
  )
}

export const Signature = React.forwardRef<unknown, Partial<SignatureProps>>(
  InternalSignature
)
Signature.displayName = 'NutSignature'
