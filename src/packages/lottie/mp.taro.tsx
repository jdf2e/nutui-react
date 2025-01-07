import React, { useImperativeHandle, useRef } from 'react'
import {
  createSelectorQuery,
  getEnv,
  getSystemInfoSync,
  useReady,
  useUnload,
} from '@tarojs/taro'
import lottie from 'lottie-miniprogram'
import useUuid from '@/utils/use-uuid'
import { LottieProps } from './types'

export const Lottie = React.forwardRef((props: LottieProps, ref: any) => {
  const uuid = useUuid()
  const id = `nutLottie-${uuid}`
  const animation = useRef<any>()
  const inited = useRef(false)

  const {
    source,
    loop = true,
    autoPlay = true,
    onComplete,
    style,
    speed = 1,
  } = props
  const setSpeed = () => {
    if (animation.current) {
      animation.current.setSpeed(Math.abs(speed))
      animation.current.setDirection(speed > 0 ? 1 : -1)
    }
  }
  useImperativeHandle(ref, () => animation.current || {})
  const dpr = useRef(getSystemInfoSync().pixelRatio)
  useReady(() => {
    createSelectorQuery()
      .select(`#${id}`)
      .fields(
        {
          node: true,
          size: true,
        },
        (res) => {
          try {
            const canvas = res.node
            const context = canvas.getContext('2d')

            // scale canvas to adapt dpr
            if (
              style &&
              style.width !== undefined &&
              style.height !== undefined
            ) {
              canvas.width = parseFloat(style.width.toString()) * dpr.current
              canvas.height = parseFloat(style.height.toString()) * dpr.current
              context.scale(dpr.current, dpr.current)
            }

            lottie.setup(canvas)
            animation.current = lottie.loadAnimation({
              animationData: source,
              loop,
              autoplay: autoPlay,
              rendererSettings: {
                context,
              },
            })
            onComplete &&
              animation.current.addEventListener('complete', onComplete)
            setSpeed()
            inited.current = true
          } catch (error) {
            console.error(error)
          }
        }
      )
      .exec()
  })
  useUnload(() => {
    onComplete &&
      animation.current &&
      animation.current.removeEventListener('complete', onComplete)
    animation.current && animation.current.destroy()
  })

  return getEnv() === 'WEAPP' || getEnv() === 'JD' ? (
    <canvas
      id={id}
      // @ts-ignore
      // eslint-disable-next-line react/no-unknown-property
      canvasId={id}
      // eslint-disable-next-line react/no-unknown-property
      disalbeScroll
      type="2d"
      style={style}
    />
  ) : (
    <canvas
      id={id}
      // eslint-disable-next-line react/no-unknown-property
      canvas-id={id}
      // eslint-disable-next-line react/no-unknown-property
      disalbe-scroll
      style={style}
    />
  )
})

Lottie.displayName = 'NutLottie'
