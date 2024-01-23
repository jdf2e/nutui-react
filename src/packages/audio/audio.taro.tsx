import React, { useState, useRef, FunctionComponent } from 'react'
import { createInnerAudioContext, InnerAudioContext } from '@tarojs/taro'
import { Service } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import Range from '@/packages/range/index.taro'
import Button from '@/packages/button/index.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AudioProps extends BasicComponent {
  src: string
  autoPlay: boolean
  loop: boolean
  type: string
  onBack?: (ctx: InnerAudioContext) => void
  onForward?: (ctx: InnerAudioContext) => void
  onPause?: any
  onPlay?: any
  onEnd?: (ctx: InnerAudioContext) => void
  onCanPlay?: (ctx: InnerAudioContext) => void
}

const defaultProps = {
  ...ComponentDefaults,
  src: '',
  autoPlay: false,
  loop: false,
  type: 'progress',
  onBack: (ctx: InnerAudioContext) => {}, // type 为 progress时生效
  onForward: (ctx: InnerAudioContext) => {}, // type 为 progress时生效
  onPause: (ctx: InnerAudioContext) => {},
  onPlay: (ctx: InnerAudioContext) => {},
  onEnd: (ctx: InnerAudioContext) => {},
  onCanPlay: (ctx: InnerAudioContext) => {},
} as AudioProps
export const Audio: FunctionComponent<
  Partial<AudioProps> &
    Omit<React.HTMLAttributes<HTMLDivElement> | InnerAudioContext, 'onEnded'>
> = (props) => {
  const classPrefix = 'nut-audio'
  const { locale } = useConfig()
  const {
    className,
    src,
    style,
    autoPlay,
    loop,
    type,
    onBack,
    onForward,
    onPause,
    onPlay,
    onEnd,
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

  const statusRef = useRef({
    currentTime: 0,
    currentDuration: '00:00:00',
    percent: 0,
    duration: '00:00:00',
    second: 0,
    playing: props.autoPlay,
    handPlaying: false,
  })

  const audioRef = useRef(createInnerAudioContext())
  audioRef.current.src = src
  audioRef.current.autoplay = autoPlay || false
  audioRef.current.loop = loop || false

  audioRef.current.onCanplay(() => {
    setIsCanPlay(true)
    if (props.autoPlay && !playing) {
      audioRef.current?.play()
    }
    const intervalID = setInterval(() => {
      if (audioRef.current.duration !== 0) {
        setTotalSeconds(audioRef.current.duration)
        clearInterval(intervalID)
      }
    }, 500)
    props.onCanPlay?.(audioRef.current)
  })

  audioRef.current.onPlay(() => {
    const { duration } = audioRef.current
    setTotalSeconds(Math.floor(duration))
    props.onPlay?.(audioRef.current)
  })

  audioRef.current.onPause(() => {
    props.onPause?.(audioRef.current)
  })

  audioRef.current.onEnded(() => {
    if (props.loop) {
      console.warn(locale.audio.tips || 'onPlayEnd事件在loop=false时才会触发')
    } else {
      props.onEnd?.(audioRef.current)
    }
  })

  console.log('cannot move', audioRef.current.currentTime)
  audioRef.current.onTimeUpdate(() => {
    const time = parseInt(`${audioRef.current.currentTime}`)
    const formated = formatSeconds(`${time}`)
    setPercent((time / totalSeconds) * 100)
    statusRef.current.currentDuration = formated
  })

  audioRef.current.onError((res) => {
    console.warn('onError', res.errCode, res.errMsg)
  })
  const handleBack = () => {
    const currentTime = Math.floor(audioRef.current.currentTime)
    statusRef.current.currentTime = Math.max(currentTime - 1, 0)
    audioRef.current.seek(statusRef.current.currentTime)
    statusRef.current.currentDuration = formatSeconds(
      statusRef.current.currentTime.toString()
    )
    props.onBack?.(audioRef.current)
  }
  const handleForward = () => {
    const currentTime = Math.floor(audioRef.current.currentTime)
    statusRef.current.currentTime = Math.min(
      currentTime + 1,
      audioRef.current.duration
    )
    audioRef.current.seek(statusRef.current.currentTime)
    statusRef.current.currentDuration = formatSeconds(
      statusRef.current.currentTime.toString()
    )
    props.onForward?.(audioRef.current)
  }

  const formatSeconds = (value: string) => {
    if (!value) {
      return '00:00:00'
    }
    const time = parseInt(value)
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time - hours * 3600) / 60)
    const seconds = time - hours * 3600 - minutes * 60
    let result = ''
    result += `${`0${hours.toString()}`.slice(-2)}:`
    result += `${`0${minutes.toString()}`.slice(-2)}:`
    result += `0${seconds.toString()}`.slice(-2)
    return result
  }
  const handleStatusChange = () => {
    setPlaying(!playing)
    if (playing) {
      audioRef?.current?.pause()
    } else {
      audioRef?.current?.play()
    }
  }
  const renderIcon = () => {
    return (
      <div className={`${classPrefix}-icon`}>
        <div
          className={classNames(
            `${classPrefix}-icon-box`,
            playing ? `${classPrefix}-icon-play` : `${classPrefix}-icon-stop`
          )}
          onClick={handleStatusChange}
        >
          <Service className={playing ? 'nut-icon-loading' : ''} />
        </div>
      </div>
    )
  }
  const renderProgress = () => {
    return (
      <>
        <div className={`${classPrefix}-progress`}>
          <div className="time">{statusRef.current.currentDuration}</div>
          <div className={`${classPrefix}-progress-bar-wrapper`}>
            <Range
              value={percent}
              onChange={(val: any) => setPercent(val)}
              currentDescription={null}
              maxDescription={null}
              minDescription={null}
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
        return renderProgress()
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

Audio.defaultProps = defaultProps
Audio.displayName = 'NutAudio'
