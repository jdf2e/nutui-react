import React, { useEffect, useRef, FunctionComponent } from 'react'

export interface VideoProps {
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
    disabled?: boolean
    loop?: boolean
  }
  play: (e: HTMLVideoElement) => void
  pause: (e: HTMLVideoElement) => void
  playend: (e: HTMLVideoElement) => void
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
    disabled: false,
    loop: false,
  },
} as VideoProps
export const Video: FunctionComponent<
  Partial<VideoProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, source, options, play, pause, playend } = {
    ...defaultProps,
    ...props,
  }
  const rootRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // init()
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
        videoRef.setAttribute(
          'playsinline',
          JSON.stringify(options.playsinline)
        )
        videoRef.setAttribute(
          'webkit-playsinline',
          JSON.stringify(options.playsinline)
        )
        videoRef.setAttribute('x5-video-player-type', 'h5-page')
        videoRef.setAttribute('x5-video-player-fullscreen', 'false')
      }
      videoRef.addEventListener('play', () => {
        play && play(videoRef)
      })
      videoRef.addEventListener('pause', () => {
        pause && pause(videoRef)
      })
      videoRef.addEventListener('ended', () => {
        videoRef.currentTime = 0
        playend && playend(videoRef)
      })
    }
  }

  return (
    <div className="nut-video">
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
