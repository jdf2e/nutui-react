/* eslint-disable react/no-unknown-property */
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
  getEnv,
  nextTick,
  createSelectorQuery,
  canvasToTempFilePath,
  CanvasContext,
} from '@tarojs/taro'
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
  onConfirm?: (dataurl: string) => void
  onClear?: () => void
}
const defaultProps = {
  canvasId: 'spcanvas',
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
    confirm,
    clear,
    onConfirm,
    onClear,
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
  const [disalbeScroll] = useState('true')

  const startEventHandler = (event: any) => {
    if (ctx.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
    }
  }

  const moveEventHandler = (event: any) => {
    if (ctx.current) {
      const evt = event.changedTouches[0]
      let mouseX = evt.x || evt.clientX
      let mouseY = evt.y || evt.clientY

      if (getEnv() === 'WEB' && canvasRef.current) {
        const coverPos = canvasRef.current.getBoundingClientRect()
        mouseX = evt.clientX - coverPos.left
        mouseY = evt.clientY - coverPos.top
      }
      nextTick(() => {
        // ctx.current.lineCap = 'round'
        // ctx.current.lineJoin = 'round'
        ctx.current?.lineTo(mouseX, mouseY)
        ctx.current?.stroke()
      })
    }
  }

  const endEventHandler = (event: any) => {}

  const handleClearBtn = () => {
    if (ctx.current) {
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
    clear && clear()
    onClear && onClear()
  }

  const handleConfirmBtn = () => {
    onSave()
  }

  const onSave = () => {
    createSelectorQuery()
      .select(`#${canvasId}`)
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        canvasToTempFilePath({
          canvas: res[0].node,
          fileType: props.type,
          canvasId: `${canvasId}`,
          success: (res) => {
            handleClearBtn()
            confirm && confirm(res.tempFilePath)
            onConfirm && onConfirm(res.tempFilePath)
          },
          fail: (res) => {
            console.log('保存失败')
          },
        })
      })
  }

  const canvasSetting = (canvasDom: any, width: number, height: number) => {
    const canvas = canvasDom
    canvas.current = canvas

    ctx.current = canvas.getContext('2d')
    setCanvasWidth(width)
    setCanvasHeight(height)
    canvas.width = width
    canvas.height = height
    if (ctx.current) {
      ctx.current.clearRect(0, 0, width, height)
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
    }
  }

  const initCanvas = () => {
    nextTick(() => {
      setTimeout(() => {
        if (getEnv() === 'WEAPP' || getEnv() === 'JD') {
          createSelectorQuery()
            .select(`#${canvasId}`)
            .fields(
              {
                node: true,
                size: true,
              },
              (res) => {
                const { node, width, height } = res
                canvasSetting(node, width, height)
              }
            )
            .exec()
        } else {
          const canvasDom: HTMLElement | null = document.getElementById(
            `${canvasId}`
          )
          let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement
          if (canvasDom?.tagName !== 'CANVAS') {
            canvas = canvasDom?.getElementsByTagName(
              'canvas'
            )[0] as HTMLCanvasElement
          }
          canvasSetting(
            canvas,
            canvasDom?.offsetWidth as number,
            canvasDom?.offsetHeight as number
          )
        }
      }, 1000)
    })
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div className={`${b('inner')} spcanvas_WEAPP`} ref={wrapRef}>
        {getEnv() === 'WEAPP' || getEnv() === 'JD' ? (
          <canvas
            id={canvasId}
            ref={canvasRef}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            canvasId={canvasId}
            disalbeScroll
            type="2d"
            onTouchStart={startEventHandler}
            onTouchMove={moveEventHandler}
            onTouchEnd={endEventHandler}
          />
        ) : (
          <canvas
            id={canvasId}
            ref={canvasRef}
            canvas-id={canvasId}
            disalbe-scroll={disalbeScroll}
            onTouchStart={startEventHandler}
            onTouchMove={moveEventHandler}
            onTouchEnd={endEventHandler}
            onTouchCancel={endEventHandler}
          />
        )}
      </div>

      <Button
        className={`${b('btn')}`}
        type="default"
        onClick={() => handleClearBtn()}
      >
        {locale.signature.reSign}
      </Button>
      <Button
        className={`${b('btn')}`}
        type="primary"
        onClick={() => handleConfirmBtn()}
      >
        {locale.confirm}
      </Button>
    </div>
  )
}

Signature.defaultProps = defaultProps
Signature.displayName = 'NutSignature'
