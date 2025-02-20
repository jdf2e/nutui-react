import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  FunctionComponent,
} from 'react'
import Taro, { useReady, createSelectorQuery } from '@tarojs/taro'
import classNames from 'classnames'
import { Canvas } from '@tarojs/components'
import { getWindowInfo } from '@/utils/get-system-info'
import { Button } from '@/packages/button/button.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useTouch } from '@/utils/use-touch'
import { clamp, preventDefault } from '@/utils'

export type AvatarCropperToolbarPosition = 'top' | 'bottom'
export type AvatarCropperSizeType = 'original' | 'compressed'
export type AvatarCropperSourceType = 'album' | 'camera'
export type AvatarCropperShape = 'square' | 'round'

export interface AvatarCropperProps extends BasicComponent {
  maxZoom: number
  space: number
  toolbar: React.ReactNode[]
  toolbarPosition: AvatarCropperToolbarPosition
  editText: React.ReactNode | string
  sizeType: AvatarCropperSizeType[]
  sourceType: AvatarCropperSourceType[]
  shape: AvatarCropperShape
  onConfirm: (e: string) => void
  onCancel: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  maxZoom: 3,
  space: 10,
  toolbar: [
    <Button type="danger" key="cancel">
      Cancel
    </Button>,
    <Button key="reset">Reset</Button>,
    <Button key="rotate">Rotate</Button>,
    <Button type="success" key="confirm">
      Confirm
    </Button>,
  ],
  toolbarPosition: 'bottom',
  editText: 'Edit',
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  shape: 'square',
} as AvatarCropperProps

const classPrefix = `nut-avatar-cropper`
export const AvatarCropper: FunctionComponent<Partial<AvatarCropperProps>> = (
  props
) => {
  const { locale } = useConfig()
  defaultProps.toolbar = [
    <Button type="danger" key="cancel">
      {locale.cancel}
    </Button>,
    <Button key="reset">{locale.reset}</Button>,
    <Button key="rotate">{locale.avatarCropper.rotate}</Button>,
    <Button type="success" key="confirm">
      {locale.confirm}
    </Button>,
  ]
  defaultProps.editText = locale.edit
  const {
    children,
    toolbar,
    maxZoom,
    space,
    toolbarPosition,
    editText,
    sizeType,
    sourceType,
    shape,
    className,
    style,
    onConfirm,
    onCancel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  interface DrawImage {
    src: string | HTMLImageElement
    x: number
    y: number
    width: number
    height: number
  }

  interface CanvasAll {
    canvasId: string
    cropperCanvas: any | null
    cropperCanvasContext: Taro.CanvasContext | null
  }

  const cls = classNames(
    classPrefix,
    'taro',
    className,
    shape === 'round' && 'round'
  )
  const toolbarPositionCls = classNames(
    `${classPrefix}-popup-toolbar`,
    toolbarPosition
  )
  const [visible, setVisible] = useState(false)
  const [moving, setMoving] = useState(false)
  const [zooming, setZooming] = useState(false)

  const systemInfo = getWindowInfo()
  // 支付宝基础库2.7.0以上支持，需要开启支付宝小程序canvas2d
  const showAlipayCanvas2D = useMemo(() => {
    return (
      Taro.getEnv() === 'ALIPAY' &&
      parseInt((Taro as any).SDKVersion.replace(/\./g, '')) >= 270
    )
  }, [])
  const showPixelRatio = Taro.getEnv() === 'WEB' || showAlipayCanvas2D
  // 设备像素比
  const pixelRatio = showPixelRatio ? systemInfo.pixelRatio : 1
  const [state, setState] = useState({
    defScale: 1,
    scale: 1,
    angle: 0,
    moveX: 0,
    moveY: 0,
    displayWidth: systemInfo.windowWidth * pixelRatio,
    displayHeight: systemInfo.windowHeight * pixelRatio,
    cropperWidth: systemInfo.windowWidth * pixelRatio - space * pixelRatio * 2,
    cropperHeight: systemInfo.windowWidth * pixelRatio - space * pixelRatio * 2,
  })
  const defDrawImage: DrawImage = {
    src: '', // 规定要使用的图像
    x: 0, // 在画布上x的坐标位置
    y: 0, // 在画布上y的坐标位置
    width: 0, // 要使用的图像的宽度
    height: 0, // 要使用的图像的高度
  }
  const [drawImage, setDrawImg] = useState({ ...defDrawImage })
  const [canvasAll, setCanvasAll] = useState<CanvasAll>({
    canvasId: `canvas-${Date.now()}`,
    cropperCanvas: null,
    cropperCanvasContext: null,
  })

  useReady(() => {
    if (showAlipayCanvas2D) {
      const { canvasId } = canvasAll
      createSelectorQuery()
        .select(`#${canvasId}`)
        .node(({ node: canvas }) => {
          canvas.width = state.displayWidth
          canvas.height = state.displayHeight
          setCanvasAll({ ...canvasAll, cropperCanvas: canvas })
        })
        .exec()
    }
  })

  useEffect(() => {
    setCanvasAll({
      ...canvasAll,
      cropperCanvasContext: Taro.createCanvasContext(canvasAll.canvasId),
    })
  }, [])

  const touch = useTouch()

  const highlightStyle = useMemo(() => {
    const width = `${state.cropperWidth / pixelRatio}px`
    const height = width
    return {
      width,
      height,
      borderRadius: shape === 'round' ? '50%' : '',
    }
  }, [pixelRatio, state.cropperWidth])

  // 是否是横向
  const isAngle = useMemo(() => {
    return state.angle === 90 || state.angle === 270
  }, [state.angle])

  const canvasStyle = useMemo(() => {
    return {
      width: `${state.displayWidth / pixelRatio}px`,
      height: `${state.displayHeight / pixelRatio}px`,
    }
  }, [pixelRatio, state.displayHeight, state.displayWidth])

  // 最大横向移动距离
  const maxMoveX = useMemo(() => {
    const { displayWidth, scale, cropperWidth } = state
    if (isAngle) {
      return Math.max(0, (drawImage.height * scale - cropperWidth) / 2)
    }
    return Math.max(0, (displayWidth * scale - cropperWidth) / 2)
  }, [drawImage.height, isAngle, state])

  // 最大纵向移动距离
  const maxMoveY = useMemo(() => {
    const { displayWidth, scale, cropperWidth } = state
    if (isAngle) {
      return Math.max(0, (displayWidth * scale - cropperWidth) / 2)
    }
    return Math.max(0, (drawImage.height * scale - cropperWidth) / 2)
  }, [drawImage.height, isAngle, state])

  // base64转图片
  const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = dataURL
    })
  }

  // base64转图片(canvasImage)
  const dataURLToCanvasImage = (
    canvas: any,
    dataURL: string
  ): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = canvas.createImage()
      img.onload = () => resolve(img)
      img.src = dataURL
    })
  }

  const canvas2dDraw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const { src, width, height, x, y } = drawImage
      if (!ctx || !src) return
      const {
        moveX,
        moveY,
        scale,
        angle,
        displayWidth,
        displayHeight,
        cropperWidth,
      } = state
      ctx.clearRect(0, 0, displayWidth, displayHeight)
      ctx.fillStyle = '#666'
      ctx.fillRect(0, 0, displayWidth, displayHeight)
      ctx.fillStyle = '#000'
      ctx.fillRect(
        space * pixelRatio,
        (displayHeight - cropperWidth) / 2,
        cropperWidth,
        cropperWidth
      )

      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY)
      ctx.rotate((Math.PI / 180) * angle)
      ctx.scale(scale, scale)
      ctx.drawImage(src as HTMLImageElement, x, y, width, height)
    },
    [drawImage, state]
  )

  // web绘制
  const webDraw = useCallback(() => {
    const canvasDom: HTMLElement | null = document.getElementById(
      canvasAll.canvasId
    )
    let canvas = canvasDom as HTMLCanvasElement
    if (canvasDom?.tagName !== 'CANVAS') {
      canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement
    }
    if (!canvas) return
    canvas.width = state.displayWidth
    canvas.height = state.displayHeight
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas2dDraw(ctx)
  }, [canvas2dDraw])

  const alipayDraw = useCallback(() => {
    const ctx = canvasAll.cropperCanvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D
    ctx && ctx.resetTransform()
    canvas2dDraw(ctx)
  }, [canvas2dDraw, canvasAll.cropperCanvas])

  // 绘制显示的canvas内容
  const draw = useCallback(() => {
    if (Taro.getEnv() === 'WEB') {
      webDraw()
      return
    }
    if (showAlipayCanvas2D) {
      alipayDraw()
      return
    }
    const { src, width, height, x, y } = drawImage
    const {
      moveX,
      moveY,
      scale,
      angle,
      displayWidth,
      displayHeight,
      cropperWidth,
    } = state
    const { cropperCanvasContext } = canvasAll
    const ctx = cropperCanvasContext
    if (!ctx) return
    // 绘制背景
    ctx.clearRect(0, 0, displayWidth, displayHeight)
    ctx.fillStyle = '#666'
    ctx.setFillStyle('#666')
    ctx.fillRect(0, 0, displayWidth, displayHeight)
    ctx.stroke()
    ctx.fill()
    ctx.fillStyle = '#000'
    ctx.setFillStyle('#000')
    ctx.fillRect(
      space,
      (displayHeight - cropperWidth) / 2,
      cropperWidth,
      cropperWidth
    )
    ctx.stroke()
    ctx.fill()

    // 绘制偏移量
    ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY)
    ctx.rotate((Math.PI / 180) * angle)
    ctx.scale(scale, scale)
    ctx.drawImage(src as string, x, y, width, height)
    ctx.draw()
  }, [drawImage, state.scale, state.angle, state.moveX, state.moveY])

  useEffect(() => {
    if (Math.abs(state.moveX) > maxMoveX) {
      setState({ ...state, moveX: maxMoveX })
    }
    if (Math.abs(state.moveY) > maxMoveY) {
      setState({ ...state, moveY: maxMoveY })
    }
    draw()
  }, [state, maxMoveX, maxMoveY, draw])

  // 设置绘制图片
  const setDrawImgInfo = async (
    image: Taro.getImageInfo.SuccessCallbackResult
  ) => {
    const { displayWidth, cropperWidth } = state
    const copyDrawImg = { ...defDrawImage }
    const { width: imgWidth, height: imgHeight } = image
    copyDrawImg.src = image.path
    if (Taro.getEnv() === 'WEB') {
      copyDrawImg.src = await dataURLToImage(image.path)
    }
    if (showAlipayCanvas2D) {
      copyDrawImg.src = await dataURLToCanvasImage(
        canvasAll.cropperCanvas,
        image.path
      )
    }

    const isPortrait = imgHeight > imgWidth
    const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth

    copyDrawImg.width = displayWidth
    copyDrawImg.height = isPortrait ? displayWidth / rate : displayWidth * rate
    copyDrawImg.x = -copyDrawImg.width / 2
    copyDrawImg.y = -copyDrawImg.height / 2

    setDrawImg(copyDrawImg)

    const scale =
      cropperWidth / (isPortrait ? copyDrawImg.width : copyDrawImg.height)
    setState({ ...state, defScale: scale })
    resetScale(scale)
  }

  const chooseImage = () => {
    Taro.chooseImage({
      count: 1,
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType,
      sourceType,
      success: (res: Taro.chooseImage.SuccessCallbackResult) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        const { tempFiles } = res
        !!tempFiles.length && imageChange(tempFiles[0])
      },
    })
  }

  interface TFileType {
    size: number
    type?: string
    tempFilePath?: string
    path: string
  }

  const imageChange = async (file: TFileType) => {
    Taro.getImageInfo({
      src: file.path,
    }).then((res: Taro.getImageInfo.SuccessCallbackResult) => {
      setVisible(true)
      setDrawImgInfo(res)
    })
  }

  const resetScale = (scale?: number) => {
    setState({
      ...state,
      moveX: 0,
      moveY: 0,
      angle: 0,
      scale: scale || state.defScale,
      defScale: scale || state.defScale,
    })
  }

  const setScale = (scale: number) => {
    scale = clamp(scale, +0.3, +maxZoom + 1)
    if (scale !== state.scale) {
      setState({ ...state, scale })
    }
  }

  // 计算两个点的距离
  const getDistance = (touches: React.TouchList) =>
    Math.sqrt(
      (touches[0].clientX - touches[1].clientX) ** 2 +
        (touches[0].clientY - touches[1].clientY) ** 2
    )
  const [startMove, setStartMove] = useState({
    startMoveX: 0,
    startMoveY: 0,
    startScale: 0,
    startDistance: 0,
  })
  const { startMoveX, startMoveY, startScale, startDistance } = startMove

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const { touches } = event
    const { offsetX } = touch

    touch.start(event)
    const fingerNum = touches?.length
    setStartMove({
      ...startMove,
      startMoveX: state.moveX,
      startMoveY: state.moveY,
    })
    setMoving(fingerNum === 1)
    setZooming(fingerNum === 2 && !offsetX.current)

    if (fingerNum === 2 && !offsetX.current) {
      setStartMove({
        ...startMove,
        startScale: state.scale,
        startDistance: getDistance(event.touches),
      })
    }
  }

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const { touches } = event

    touch.move(event)

    if (moving || zooming) {
      preventDefault(event, true)
    }

    if (moving) {
      const { deltaX, deltaY } = touch
      const moveX = deltaX.current * state.scale + startMoveX
      const moveY = deltaY.current * state.scale + startMoveY
      setState({
        ...state,
        moveX: clamp(moveX, -maxMoveX, maxMoveX),
        moveY: clamp(moveY, -maxMoveY, maxMoveY),
      })
    }

    if (zooming && touches.length === 2) {
      const distance = getDistance(touches)
      const scale = (startScale * distance) / startDistance

      setScale(scale)
    }
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    let stopPropagation = false

    if (moving || zooming) {
      stopPropagation = !(
        moving &&
        startMoveX === state.moveX &&
        startMoveY === state.moveY
      )

      if (!event.touches.length) {
        if (zooming) {
          setState({
            ...state,
            moveX: clamp(state.moveX, -maxMoveX, maxMoveX),
            moveY: clamp(state.moveY, -maxMoveY, maxMoveY),
          })
          setZooming(false)
        }

        setMoving(false)

        setStartMove({
          ...startMove,
          startMoveX: 0,
          startMoveY: 0,
          startScale: state.defScale,
        })

        if (state.scale < state.defScale) {
          resetScale()
        }

        if (state.scale > maxZoom) {
          setState({ ...state, scale: +maxZoom })
        }
      }
    }

    preventDefault(event, stopPropagation)

    touch.reset()
  }

  const reset = () => {
    setState({ ...state, angle: 0 })
  }

  const rotate = () => {
    if (state.angle === 270) {
      setState({ ...state, angle: 0 })
      return
    }
    setState({ ...state, angle: state.angle + 90 })
  }

  const cancel = (isEmit = true) => {
    setVisible(false)
    resetScale()
    isEmit && onCancel && onCancel()
  }

  // web裁剪图片
  const confirmWEB = () => {
    const { cropperWidth, displayHeight } = state
    const canvasDom: HTMLElement | null = document.getElementById(
      canvasAll.canvasId
    )
    let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement
    if (canvasDom?.tagName !== 'CANVAS') {
      canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement
    }
    const width = cropperWidth
    const height = cropperWidth
    // 创建一个新的canvas元素，用于裁剪后的内容
    const croppedCanvas = document.createElement('canvas')
    const croppedCtx = croppedCanvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D

    // 设置新canvas的大小与裁剪区域相同
    croppedCanvas.width = width
    croppedCanvas.height = height
    // 使用drawImage方法将原canvas中指定区域的内容绘制到新canvas上
    canvas &&
      croppedCtx.drawImage(
        canvas,
        space * pixelRatio,
        (displayHeight - cropperWidth) / 2,
        width,
        height,
        0,
        0,
        width,
        height
      )

    // 将裁剪后的内容转换为图片格式
    const imageDataURL = croppedCanvas.toDataURL('image/png')
    onConfirm && onConfirm(imageDataURL)
    cancel(false)
  }

  // 支付宝基础库2.7.0以上支持，需要开启支付宝小程序canvas2d
  const confirmALIPAY = () => {
    const { cropperWidth, displayHeight } = state
    const { cropperCanvas } = canvasAll
    Taro.canvasToTempFilePath({
      canvas: cropperCanvas,
      x: props.space,
      y: (displayHeight - cropperWidth) / 2,
      width: cropperWidth,
      height: cropperWidth,
      destWidth: cropperWidth,
      destHeight: cropperWidth,
      success: async (res: Taro.canvasToTempFilePath.SuccessCallbackResult) => {
        const filePath = res.tempFilePath
        onConfirm && onConfirm(filePath)
        cancel(false)
      },
    })
  }

  // 裁剪图片
  const confirm = () => {
    if (Taro.getEnv() === 'WEB') {
      confirmWEB()
      return
    }
    if (showAlipayCanvas2D) {
      confirmALIPAY()
      return
    }
    const { cropperWidth, displayHeight } = state
    const { canvasId } = canvasAll
    // 将编辑后的canvas内容转成图片
    Taro.canvasToTempFilePath({
      canvasId,
      x: props.space,
      y: (displayHeight - cropperWidth) / 2,
      width: cropperWidth,
      height: cropperWidth,
      destWidth: cropperWidth * systemInfo.pixelRatio,
      destHeight: cropperWidth * systemInfo.pixelRatio,
      success: async (res: Taro.canvasToTempFilePath.SuccessCallbackResult) => {
        const filePath = res.tempFilePath
        onConfirm && onConfirm(filePath)
        cancel(false)
      },
    })
  }

  const ToolBar = () => {
    const actions = [cancel, reset, rotate, confirm]
    return (
      <div className={`${classPrefix}-popup-toolbar-flex`}>
        {actions.map((action, index) => (
          <div
            key={index}
            className={`${classPrefix}-popup-toolbar-item`}
            onClick={(_e) => action()}
          >
            {toolbar[index]}
          </div>
        ))}
      </div>
    )
  }

  const CropperPopup = () => {
    const { canvasId } = canvasAll
    return (
      <div
        className={`${classPrefix}-popup`}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <Canvas
          id={canvasId}
          canvas-id={canvasId}
          type={showAlipayCanvas2D ? '2d' : undefined}
          style={canvasStyle}
          className={`${classPrefix}-popup-canvas`}
        />
        <div
          className={`${classPrefix}-popup-highlight`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="highlight" style={highlightStyle} />
        </div>
        <div className={toolbarPositionCls}>
          <ToolBar />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={cls} {...rest} style={style}>
        {children}
        <div className="nut-avatar-cropper-edit-text" onClick={chooseImage}>
          {editText}
        </div>
      </div>
      {CropperPopup()}
    </>
  )
}
AvatarCropper.displayName = 'NutAvatarCropper'
