import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  FunctionComponent,
} from 'react'
import classNames from 'classnames'
import Button from '@/packages/button'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useTouch } from '@/utils/use-touch'
import { clamp, preventDefault } from '@/utils'
import { getRect } from '@/utils/use-client-rect'
import { useConfig } from '@/packages/configprovider'

export type AvatarCropperToolbarPosition = 'top' | 'bottom'
export type AvatarCropperShape = 'square' | 'round'
export interface AvatarCropperProps extends BasicComponent {
  maxZoom: number
  space: number
  toolbar: React.ReactNode[]
  toolbarPosition: AvatarCropperToolbarPosition
  editText: React.ReactNode | string
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
    maxZoom,
    space,
    toolbar,
    toolbarPosition,
    editText,
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

  const cls = classNames(classPrefix, className, shape === 'round' && 'round')
  const toolbarPositionCls = classNames(
    `${classPrefix}-popup-toolbar`,
    toolbarPosition
  )
  const inputImageRef = useRef<HTMLInputElement>(null)
  const cropperPopupRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visible, setVisible] = useState(false)
  const [moving, setMoving] = useState(false)
  const [zooming, setZooming] = useState(false)

  const [state, setState] = useState({
    defScale: 1,
    scale: 1,
    angle: 0,
    moveX: 0,
    moveY: 0,
    displayWidth: 0,
    displayHeight: 0,
  })
  const defDrawImage = {
    img: new Image(), // 规定要使用的图像
    sx: 0, // 开始剪切的 x 坐标位置
    sy: 0, // 开始剪切的 y 坐标位置
    swidth: 0, // 被剪切区域的宽度
    sheight: 0, // 被剪切区域的高度
    x: 0, // 在画布上x的坐标位置
    y: 0, // 在画布上y的坐标位置
    width: 0, // 要使用的图像的宽度
    height: 0, // 要使用的图像的高度
  }
  const [drawImage, setDrawImg] = useState({ ...defDrawImage })
  const devicePixelRatio = window.devicePixelRatio || 1
  const touch = useTouch()
  const highlightStyle = useMemo(() => {
    const width = `${drawImage.swidth / devicePixelRatio}px`
    const height = width
    return {
      width,
      height,
      borderRadius: shape === 'round' ? '50%' : '',
    }
  }, [devicePixelRatio, drawImage.swidth])

  // 是否是横向
  const isAngle = useMemo(() => {
    return state.angle === 90 || state.angle === 270
  }, [state.angle])

  // 最大横向移动距离
  const maxMoveX = useMemo(() => {
    const { swidth, height } = drawImage
    if (isAngle) {
      return Math.max(0, (height * state.scale - swidth) / 2)
    }
    return Math.max(0, (state.displayWidth * state.scale - swidth) / 2)
  }, [state.scale, state.displayWidth, drawImage, isAngle])

  // 最大纵向移动距离
  const maxMoveY = useMemo(() => {
    const { swidth, height } = drawImage
    if (isAngle) {
      return Math.max(0, (state.displayWidth * state.scale - swidth) / 2)
    }
    return Math.max(0, (height * state.scale - swidth) / 2)
  }, [state.scale, state.displayWidth, drawImage, isAngle])

  // 文件转base64
  const fileToDataURL = (file: Blob): Promise<any> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = (e) => resolve((e.target as FileReader).result)
      reader.readAsDataURL(file)
    })
  }

  // base64转图片
  const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = dataURL
    })
  }

  // 绘制
  const draw = useCallback(() => {
    const { img, width, height, x, y, swidth } = drawImage
    const { moveX, moveY, scale, angle, displayWidth, displayHeight } = state
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = displayWidth
    canvas.height = displayHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#666'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#000'
    ctx.fillRect(
      space * devicePixelRatio,
      (canvas.height - swidth) / 2,
      swidth,
      swidth
    )

    ctx.translate(canvas.width / 2 + moveX, canvas.height / 2 + moveY)
    ctx.rotate((Math.PI / 180) * angle)
    ctx.scale(scale, scale)
    ctx.drawImage(img, x, y, width, height)
  }, [drawImage, state, devicePixelRatio, space])

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
  const setDrawImgs = (image: HTMLImageElement) => {
    const rect = getRect(cropperPopupRef.current as Element)
    if (!rect) return
    const { width: clientWidth, height: clientHeight } = rect
    const canvasWidth = (state.displayWidth = clientWidth * devicePixelRatio)
    const canvasHeight = (state.displayHeight = clientHeight * devicePixelRatio)

    const copyDrawImg = { ...defDrawImage }
    const { width: imgWidth, height: imgHeight } = image
    copyDrawImg.img = image

    const isPortrait = imgHeight > imgWidth
    const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth

    copyDrawImg.width = canvasWidth
    copyDrawImg.height = isPortrait ? canvasWidth / rate : canvasWidth * rate
    copyDrawImg.x = -copyDrawImg.width / 2
    copyDrawImg.y = -copyDrawImg.height / 2

    copyDrawImg.swidth = canvasWidth - space * 2 * devicePixelRatio
    copyDrawImg.sheight = isPortrait
      ? copyDrawImg.swidth / rate
      : copyDrawImg.swidth * rate
    copyDrawImg.sx = space * devicePixelRatio
    copyDrawImg.sy = (canvasHeight - copyDrawImg.swidth) / 2

    setDrawImg(copyDrawImg)

    const scale =
      copyDrawImg.swidth / (isPortrait ? copyDrawImg.width : copyDrawImg.height)
    setState({ ...state, defScale: scale })
    resetScale(scale)
  }

  const inputImageChange = async (event: Event) => {
    setVisible(true)
    const $el = event.target as HTMLInputElement
    const { files } = $el
    if (!files?.length) return
    const base64 = await fileToDataURL(files[0])
    const image = await dataURLToImage(base64)

    setDrawImgs(image)
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

  const cancel = (isEmit: boolean = true) => {
    setVisible(false)
    resetScale()
    inputImageRef.current && (inputImageRef.current.value = '')
    isEmit && onCancel && onCancel()
  }

  // 裁剪图片
  const confirm = () => {
    const canvas = canvasRef.current
    const { sx, sy, swidth } = drawImage
    const width = swidth
    const height = swidth
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
      croppedCtx.drawImage(canvas, sx, sy, width, height, 0, 0, width, height)

    // 将裁剪后的内容转换为图片格式
    const imageDataURL = croppedCanvas.toDataURL('image/png')
    onConfirm && onConfirm(imageDataURL)
    cancel(false)
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
    return (
      <div
        ref={cropperPopupRef}
        className={`${classPrefix}-popup`}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <canvas ref={canvasRef} className={`${classPrefix}-popup-canvas`} />
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
        <input
          ref={inputImageRef}
          type="file"
          accept="image/*"
          className={`${classPrefix}-input`}
          onChange={(e: any) => inputImageChange(e)}
          aria-label={locale.avatarCropper.selectImage}
        />
        <div className="nut-avatar-cropper-edit-text">{editText}</div>
      </div>
      {CropperPopup()}
    </>
  )
}

AvatarCropper.displayName = 'NutAvatarCropper'
