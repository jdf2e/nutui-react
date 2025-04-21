import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Video as VideoTaro, VideoProps, View } from '@tarojs/components'
import { mergeProps } from '@/utils/merge-props'
import { TaroVideoProps } from '@/types'

const defaultProps = {
  source: {
    type: {},
    src: '',
  },
  options: {
    controls: true,
    muted: false,
    autoplay: false,
    poster: '',
    playsinline: false,
    loop: false,
  },
} as TaroVideoProps

const classPrefix = 'nut-video'

export const Video: FunctionComponent<Partial<TaroVideoProps & VideoProps>> = (
  props
) => {
  const {
    source,
    options,
    className,
    style,
    src,
    muted,
    loop,
    poster,
    controls,
    autoplay,
    onPlay,
    onPause,
    onPlayEnd,
    ...restProps
  } = mergeProps(defaultProps, props)

  const classes = classNames(classPrefix, className)

  const effectiveControls =
    props.options?.controls ?? controls ?? options.controls

  return (
    <View className={classes} style={style}>
      <VideoTaro
        className={`${classPrefix}-player`}
        muted={options.muted || muted}
        autoplay={options.autoplay || autoplay}
        loop={options.loop || loop}
        poster={options.poster || poster}
        controls={effectiveControls}
        src={source.src || (src as string)}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onPlayEnd}
        {...restProps}
      />
    </View>
  )
}

Video.displayName = 'NutVideo'
