import React, {
  useState,
  useRef,
  CSSProperties,
  FunctionComponent,
} from 'react'

import { createInnerAudioContext, InnerAudioContext } from '@tarojs/taro'
import { Service } from '@nutui/icons-react-taro'
import Range from '@/packages/range/index.taro'
import Button from '@/packages/button/index.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AudioProps extends BasicComponent {
  className?: string
  style?: CSSProperties
  url: string
  autoplay?: boolean
  loop?: boolean
  type: string
  onFastBack?: (ctx: InnerAudioContext) => void
  onForward?: (ctx: InnerAudioContext) => void
  onPause?: any
  onPlay?: any
  onPlayEnd?: (ctx: InnerAudioContext) => void
  onCanPlay?: (ctx: InnerAudioContext) => void
}

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  url: '',
  style: {},
  autoplay: false,
  loop: false,
  type: 'progress',
  onFastBack: (ctx: InnerAudioContext) => {}, // type 为 progress时生效
  onForward: (ctx: InnerAudioContext) => {}, // type 为 progress时生效
  onPause: (ctx: InnerAudioContext) => {},
  onPlay: (ctx: InnerAudioContext) => {},
  onPlayEnd: (ctx: InnerAudioContext) => {},
  onCanPlay: (ctx: InnerAudioContext) => {},
} as AudioProps
export const Audio: FunctionComponent<
  Partial<AudioProps> &
    (React.HTMLAttributes<HTMLDivElement> | InnerAudioContext)
> = (props) => {
  const classPrefix = 'nut-audio'
  const { locale } = useConfig()
  const {
    className,
    url,
    style,
    autoplay,
    loop,
    type,
    onFastBack,
    onForward,
    onPause,
    onPlay,
    onPlayEnd,
    onCanPlay,
    children,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  } as any

  const [playing, setPlaying] = useState(false)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [percent, setPercent] = useState(0)
  const [isCanPlay, setIsCanPlay] = useState(false)
  const [currentDuration, setCurrentDuration] = useState('00:00:00')

  const statusRef = useRef({
    currentTime: 0,
    currentDuration: '00:00:00',
    percent: 0,
  })

  const audioRef = useRef(createInnerAudioContext())
  const audioCtx = audioRef.current
  audioCtx.src = url
  audioCtx.autoplay = autoplay || false
  audioCtx.loop = loop || false
  audioCtx.onPause(() => {
    onPause?.(audioCtx)
  })
  audioCtx.onEnded(() => {
    if (loop) {
      console.warn(locale.audio.tips || 'onPlayEnd事件在loop=false时才会触发')
    } else {
      onPlayEnd?.(audioCtx)
    }
  })
  audioCtx.onPlay(() => {
    const { duration } = audioCtx
    setTotalSeconds(Math.floor(duration))
    onPlay?.(audioCtx)
  })
  audioCtx.onCanplay(() => {
    const intervalID = setInterval(() => {
      if (audioCtx.duration !== 0) {
        setTotalSeconds(audioCtx.duration)
        clearInterval(intervalID)
      }
    }, 500)
    setIsCanPlay(true)
    onCanPlay?.(audioCtx)
  })
  audioCtx.onTimeUpdate(() => {
    const time = parseInt(`${audioCtx.currentTime}`)
    const formated = formatSeconds(`${time}`)
    statusRef.current.currentDuration = formated
    setPercent((time / totalSeconds) * 100)
    setCurrentDuration(formatSeconds(audioCtx.currentTime.toString()))
  })

  audioCtx.onError((res) => {
    console.warn('onError', res.errCode, res.errMsg)
  })

  function formatSeconds(value: string) {
    if (!value) {
      return '00:00:00'
    }
    const time = parseInt(value)
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time - hours * 3600) / 60)
    const secondss = time - hours * 3600 - minutes * 60
    let result = ''
    result += `${`0${hours.toString()}`.slice(-2)}:`
    result += `${`0${minutes.toString()}`.slice(-2)}:`
    result += `0${secondss.toString()}`.slice(-2)
    return result
  }

  const handleBack = () => {
    const currentTime = Math.floor(audioCtx.currentTime)
    statusRef.current.currentTime = Math.max(currentTime - 1, 0)
    setCurrentDuration(formatSeconds(statusRef.current.currentTime.toString()))
    audioCtx.seek(statusRef.current.currentTime)
    onFastBack?.(audioCtx)
  }

  const handleForward = () => {
    const currentTime = Math.floor(audioCtx.currentTime)
    statusRef.current.currentTime = Math.min(currentTime + 1, audioCtx.duration)
    setCurrentDuration(formatSeconds(statusRef.current.currentTime.toString()))
    audioCtx.seek(statusRef.current.currentTime)
    onForward?.(audioCtx)
  }

  const handleStatusChange = () => {
    setPlaying(!playing)
    if (!playing) {
      audioCtx.play()
    } else {
      audioCtx.pause()
    }
  }

  const renderIcon = () => {
    return (
      <div className={`${classPrefix}-icon`}>
        <div
          className={`${classPrefix}-icon-box} ${
            playing ? `${classPrefix}-icon-play}` : `${classPrefix}-icon-stop}`
          }`}
          onClick={handleStatusChange}
        >
          <Service className={playing ? 'nut-icon-loading' : ''} />
        </div>
      </div>
    )
  }

  const renderProgerss = () => {
    return (
      <>
        <div className={`${classPrefix}-progress`}>
          <div className="time">{currentDuration}</div>
          <div className={`${classPrefix}-progress-bar-wrapper`}>
            <Range
              value={percent}
              onChange={(val: any) => setPercent(val)}
              currentDescription={null}
              maxDescription={null}
              minDescription={null}
              inactive-color="#cccccc"
              active-color="#fa2c19"
            />
          </div>
          <div className="time">
            {formatSeconds(`${totalSeconds}`) || '00:00:00'}
          </div>
        </div>
        <div
          className={
            isCanPlay ? 'custom-button-group' : 'custom-button-group-disable'
          }
        >
          <Button
            type="primary"
            size="small"
            className="back"
            onClick={handleBack}
          >
            {locale.audio.back || '快退'}
          </Button>
          <Button
            type="primary"
            size="small"
            className="start"
            onClick={handleStatusChange}
          >
            {playing
              ? `${locale.audio.pause || '暂停'}`
              : `${locale.audio.start || '开始'}`}
          </Button>
          <Button type="primary" size="small" onClick={handleForward}>
            {locale.audio.forward || '快进'}
          </Button>
        </div>
      </>
    )
  }

  const renderNone = () => {
    return (
      <div
        className={`${classPrefix}-none-container`}
        onClick={handleStatusChange}
      >
        {children}
      </div>
    )
  }

  const renderAudio = () => {
    switch (type) {
      case 'icon':
        return renderIcon()
      case 'progress':
        return renderProgerss()
      case 'none':
        return renderNone()
      default:
        return null
    }
  }

  return (
    <div className={`${classPrefix} ${className}`} style={style} {...rest}>
      {renderAudio()}
    </div>
  )
}

Audio.displayName = 'NutAudio'
