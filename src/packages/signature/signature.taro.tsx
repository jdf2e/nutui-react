import React, { FunctionComponent, useRef, useState } from 'react'
import Taro, { CanvasContext, useReady } from '@tarojs/taro'
// import { Canvas } from '@tarojs/components'
import Button from '@/packages/button/index.taro'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

interface FileType {
  /** jpg 图片 */
  jpg: any
  /** png 图片 */
  png: any
}
export interface SignatureProps {
  canvasId: string
  type: keyof FileType
  lineWidth: number
  strokeStyle: string
  unSupportTpl: string
  className: string
  confirm?: (dataurl: string) => void
  clear?: () => void
}
const defaultProps = {
  canvasId: 'weappCanvas',
  type: 'png',
  lineWidth: 2,
  strokeStyle: '#000',
  className: '',
} as SignatureProps

export const Signature: FunctionComponent<
  Partial<SignatureProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    canvasId,
    type,
    lineWidth,
    strokeStyle,
    unSupportTpl,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('signature')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const ctx = useRef<CanvasContext | null>(null)

  const startEventHandler = (event: any) => {
    event.preventDefault()
    if (ctx.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
    }
  }

  const moveEventHandler = (event: any) => {
    event.preventDefault()

    if (ctx.current) {
      ctx.current.lineTo(event.changedTouches[0].x, event.changedTouches[0].y)
      ctx.current.stroke()
    }
  }

  const endEventHandler = (event: any) => {
    event.preventDefault()
  }

  const clear = () => {
    if (ctx.current) {
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
    props.clear && props.clear()
  }

  const confirm = () => {
    onSave()
  }

  const onSave = () => {
    Taro.createSelectorQuery()
      .select(`#${canvasId}`)
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        Taro.canvasToTempFilePath({
          canvas: res[0].node,
          fileType: props.type,
          success: (res) => {
            clear()
            props.confirm && props.confirm(res.tempFilePath)
          },
          fail: (res) => {
            console.log('保存失败')
          },
        })
      })
  }

  useReady(() => {
    initCanvas()
  })

  //   useEffect(() => {
  //     eventCenter.once((getCurrentInstanceTaro() as any).router.onReady, () => {
  const initCanvas = () => {
    Taro.createSelectorQuery()
      .select(`#${canvasId}`)
      .fields(
        {
          node: true,
          size: true,
        },
        (res) => {
          const canvas = res.node
          canvas.current = canvas
          ctx.current = canvas.getContext('2d')
          setCanvasWidth(res.width)
          setCanvasHeight(res.height)

          if (ctx.current) {
            ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
            ctx.current.beginPath()
            ctx.current.lineWidth = lineWidth as number
            ctx.current.strokeStyle = strokeStyle as string
          }
        }
      )
      .exec()
  }
  //     })
  //   }, [])

  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div className={`${b('inner')}`} ref={wrapRef}>
        <canvas
          id={canvasId}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line react/no-unknown-property
          canvasId={canvasId}
          // eslint-disable-next-line react/no-unknown-property
          disableScroll
          type="2d"
          onTouchStart={startEventHandler}
          onTouchMove={moveEventHandler}
          onTouchEnd={endEventHandler}
        />
      </div>

      <Button className={`${b('btn')}`} type="default" onClick={() => clear()}>
        {locale.signature.reSign}
      </Button>
      <Button
        className={`${b('btn')}`}
        type="primary"
        onClick={() => confirm()}
      >
        {locale.confirm}
      </Button>
    </div>
  )
}

Signature.defaultProps = defaultProps
Signature.displayName = 'NutSignature'
