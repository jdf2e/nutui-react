import LottieReact, { LottieRefCurrentProps } from 'lottie-react'
import React, { useImperativeHandle, useRef } from 'react'
import { LottieProps } from './types'

export const Lottie = React.forwardRef(
  (props: Partial<LottieProps>, ref: any) => {
    const loadingLottieRef = useRef<LottieRefCurrentProps>(null)
    const { style, source, autoPlay, ...rest } = props
    useImperativeHandle(ref, () => {
      return loadingLottieRef.current
    })
    return (
      <LottieReact
        {...rest}
        lottieRef={loadingLottieRef}
        animationData={source}
        style={style}
      />
    )
  }
)
Lottie.displayName = 'NutLottie'
