import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import {
  Video as VideoTaro,
  VideoProps as VideoPropsTaro,
  BaseEventOrig,
  View,
} from '@tarojs/components'

export interface VideoProps extends Omit<VideoPropsTaro, 'src'> {
  source: {
    type: string
    src: string
  }
  options: {
    controls?: boolean
    muted?: boolean
    autoplay?: boolean
    poster?: string
    playsinline?: boolean
    loop?: boolean
  }
  onPlay: (event: BaseEventOrig<any>) => void
  onPause: (event: BaseEventOrig<any>) => void
  onPlayEnd: (event: BaseEventOrig<any>) => void
}

const defaultProps = {
  source: {
    type: {},
    src: '',
  },
  options: {
    controls: true,
    muted: false, // 默认不是静音
    autoplay: false,
    poster: '',
    playsinline: false,
    loop: false,
  },
} as VideoProps

const classPrefix = `nut-video`
export const Video: FunctionComponent<Partial<VideoProps>> = (props) => {
  const {
    children,
    source,
    options,
    className,
    style,
    onPlay,
    onPause,
    onPlayEnd,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames(classPrefix, className)

  return (
    <View className={classes} style={style}>
      <VideoTaro
        className="nut-video-player"
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
