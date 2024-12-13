import LottieReact, { LottieRefCurrentProps } from 'lottie-react'
import React, { useImperativeHandle, useRef } from 'react'
import { LottieProps } from './types'

export const Lottie = React.forwardRef((props: LottieProps, ref: any) => {
  const loadingLottieRef = useRef<LottieRefCurrentProps>(null)
  const { style, source } = props
  useImperativeHandle(ref, () => {
    return loadingLottieRef.current
  })
  return (
    <LottieReact
      lottieRef={loadingLottieRef}
      animationData={source}
      style={style}
    />
  )
})
Lottie.displayName = 'NutLottie'
