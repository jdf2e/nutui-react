import React, { useEffect, useRef, FunctionComponent } from 'react'
import classNames from 'classnames'
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
  onPlay: (e: HTMLVideoElement) => void
  onPause: (e: HTMLVideoElement) => void
  onPlayEnd: (e: HTMLVideoElement) => void
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
  const rootRef = useRef<HTMLVideoElement>(null)
  const classes = classNames(className, classPrefix)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    if (rootRef.current) {
      const videoRef = rootRef.current
      if (options.autoplay) {
        setTimeout(() => {
          videoRef.play()
        }, 200)
      }
      if (options.playsinline) {
        videoRef.setAttribute('playsinline', String(options.playsinline))
        videoRef.setAttribute('webkit-playsinline', String(options.playsinline))
        videoRef.setAttribute('x5-video-player-type', 'h5-page')
        videoRef.setAttribute('x5-video-player-fullscreen', 'false')
      }
      videoRef.addEventListener('play', () => {
        onPlay && onPlay(videoRef)
      })
      videoRef.addEventListener('pause', () => {
        onPause && onPause(videoRef)
      })
      videoRef.addEventListener('ended', () => {
        videoRef.currentTime = 0
        onPlayEnd && onPlayEnd(videoRef)
      })
    }
  }

  return (
    <div className={classes} {...restProps}>
      <video
        className="nut-video-player"
        muted={options.muted}
        autoPlay={options.autoplay}
        loop={options.loop}
        poster={options.poster}
        controls={options.controls}
        ref={rootRef}
        src={source.src}
      >
        <source src={source.src} type={source.type} />
        <track kind="captions" />
      </video>
    </div>
  )
}

Video.defaultProps = defaultProps
Video.displayName = 'NutVideo'
