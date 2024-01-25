import React, { useState, useEffect, useRef, FunctionComponent } from 'react'
import type { SyntheticEvent } from 'react'
import { Service } from '@nutui/icons-react'
import classNames from 'classnames'
import Range from '@/packages/range'
import Button from '@/packages/button'
import { useConfig } from '@/packages/configprovider'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AudioProps extends BasicComponent {
  src: string
  muted: boolean
  autoPlay: boolean
  loop: boolean
  preload: string
  type: string
  onBack: (e: HTMLAudioElement) => void
  onForward: (e: HTMLAudioElement) => void
  onPause: (e: SyntheticEvent<HTMLAudioElement>) => void
  onEnd: (e: SyntheticEvent<HTMLAudioElement>) => void
  onMute: (e: HTMLAudioElement) => void
  onCanPlay: (e: SyntheticEvent<HTMLAudioElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  src: '',
  muted: false,
  autoPlay: false,
  loop: false,
  preload: 'auto',
  type: 'progress',
  onBack: (e: HTMLAudioElement) => {}, // type 为 progress时生效
  onForward: (e: HTMLAudioElement) => {}, // type 为 progress时生效
  onPause: (e: SyntheticEvent<HTMLAudioElement>) => {},
  onEnd: (e: SyntheticEvent<HTMLAudioElement>) => {},
  onMute: (e: HTMLAudioElement) => {},
  onCanPlay: (e: SyntheticEvent<HTMLAudioElement>) => {},
} as AudioProps
export const Audio: FunctionComponent<
  Partial<AudioProps> & React.HTMLAttributes<HTMLElement>
> = (props) => {
  const classPrefix = 'nut-audio'
  const { locale } = useConfig()
  const {
    className,
    src,
    style,
    muted,
    autoPlay,
    loop,
    preload,
    type,
    onBack,
    onForward,
    onPause,
    onEnd,
    onMute,
    onCanPlay,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [playing, setPlaying] = useState(false)
  const [percent, setPercent] = useState(0)
  const [isCanPlay, setIsCanPlay] = useState(false)
  const [currentDuration, setCurrentDuration] = useState('00:00:00')

  const audioRef = useRef<HTMLAudioElement>(null)
  const statusRef = useRef({
    currentTime: 0,
    currentDuration: '00:00:00',
    percent: 0,
    duration: '00:00:00',
    second: 0,
    hanMuted: props.muted,
    playing: props.autoPlay,
    handPlaying: false,
  })

  const handleEnded = (e: SyntheticEvent<HTMLAudioElement>) => {
    if (props.loop) {
      console.warn(locale.audio.tips || 'onPlayEnd事件在loop=false时才会触发')
    } else {
      props.onEnd && props.onEnd(e)
    }
  }

  function watch() {
    if (audioRef && audioRef.current) {
      const current = audioRef.current
      current.addEventListener('play', () => {
        setPlaying(true)
      })
    }
  }
  useEffect(() => {
    watch()
  }, [])

  const onTimeupdate = (e: SyntheticEvent<HTMLAudioElement>) => {
    const time = parseInt(String((e.target as HTMLAudioElement).currentTime))
    const formated = formatSeconds(`${time}`)
    statusRef.current.currentDuration = formated
    setPercent((time / statusRef.current.second) * 100)
    setCurrentDuration(formated)
    statusRef.current.currentTime = time
  }

  const handleCanplay = (e: SyntheticEvent<HTMLAudioElement>) => {
    setIsCanPlay(true)
    if (props.autoPlay && !playing) {
      audioRef.current?.play()
    }
    if (audioRef.current) {
      statusRef.current.second = audioRef.current.duration || 0
      props.onCanPlay && props.onCanPlay(e)
    }
  }

  const handleBack = () => {
    if (statusRef.current.currentTime > 0 && audioRef.current) {
      statusRef.current.currentTime--
      audioRef.current.currentTime = statusRef.current.currentTime
      props.onBack && props.onBack(audioRef.current)
    }
  }
  const handleForward = () => {
    if (audioRef.current) {
      statusRef.current.currentTime++
      audioRef.current.currentTime = statusRef.current.currentTime
      props.onForward && props.onForward(audioRef.current)
    }
  }
  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      props.onMute && props.onMute(audioRef.current)
    }
  }
  const handlePause = (e: SyntheticEvent<HTMLAudioElement>) => {
    setPlaying(false)
    props.onPause && props.onPause(e)
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

  // useEffect(() => {}, [currentDuration])
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
          <div className="time">{currentDuration}</div>
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
            {audioRef.current
              ? formatSeconds(`${statusRef.current.second}`)
              : '00:00:00'}
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
          <Button
            type={audioRef?.current?.muted ? 'default' : 'primary'}
            size="small"
            onClick={handleMute}
          >
            {locale.audio.mute || '静音'}
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
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      {renderAudio()}
      <audio
        className="audioMain"
        controls={type === 'controls'}
        ref={audioRef}
        src={src}
        muted={muted}
        preload={preload}
        loop={loop}
        onPause={(e) => handlePause(e)}
        onEnded={(e) => handleEnded(e)}
        onCanPlay={(e) => handleCanplay(e)}
        onTimeUpdate={(e) => onTimeupdate(e)}
      >
        <track kind="captions" />
      </audio>
    </div>
  )
}

Audio.defaultProps = defaultProps
Audio.displayName = 'NutAudio'
