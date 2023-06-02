import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Video as VideoTaro, BaseEventOrig } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface VideoProps extends BasicComponent {
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
  ...ComponentDefaults,
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
export const Video: FunctionComponent<
  Partial<VideoProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onPause' | 'onPlay'>
> = (props) => {
  const {
    children,
    source,
    options,
    className,
    onPlay,
    onPause,
    onPlayEnd,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames(className, classPrefix)

  return (
    <div className={classes} {...restProps}>
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
      />
    </div>
  )
}

Video.defaultProps = defaultProps
Video.displayName = 'NutVideo'
