import React, { useImperativeHandle, useRef } from 'react'
import {
  createSelectorQuery,
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

  const { source, loop, autoPlay = true, onComplete, style, speed = 1 } = props
  const setSpeed = () => {
    animation.current.setSpeed(Math.abs(speed))
    animation.current.setDirection(speed > 0 ? 1 : -1)
  }
  useImperativeHandle(ref, () => animation.current)
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
              const dpr = getSystemInfoSync().pixelRatio
              canvas.width = parseFloat(style.width) * dpr
              canvas.height = parseFloat(style.height) * dpr
              context.scale(dpr, dpr)
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
    onComplete && animation.current.removeEventListener('complete', onComplete)
    animation.current.destroy()
  })
  return (
    // eslint-disable-next-line react/no-unknown-property
    <canvas id={id} canvasId={id} type="2d" style={{ width: 56, height: 56 }} />
  )
})

Lottie.displayName = 'NutLottie'
