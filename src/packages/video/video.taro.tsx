import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Video as VideoTaro, View } from '@tarojs/components'
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

const classPrefix = `nut-video`
export const Video: FunctionComponent<Partial<TaroVideoProps>> = (props) => {
  const {
    source,
    options,
    className,
    style,
    onPlay,
    onPause,
    onPlayEnd,
    ...restProps
  } = mergeProps(defaultProps, props)
  const classes = classNames(classPrefix, className)

  return (
    <View className={classes} style={style}>
      <VideoTaro
        className={`${classPrefix}-player`}
        muted={options.muted}
        autoplay={options.autoplay}
        loop={options.loop}
        poster={options.poster}
        controls={options.controls}
        src={source.src}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onPlayEnd}
        {...restProps}
      />
    </View>
  )
}

Video.displayName = 'NutVideo'
