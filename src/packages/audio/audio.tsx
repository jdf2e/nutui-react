import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ReactEventHandler,
} from 'react'
import { Service } from '@nutui/icons-react'
import classNames from 'classnames'
import Range from '@/packages/range'
import Button from '@/packages/button'
import { useConfig } from '@/packages/configprovider'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AudioProps extends BasicComponent {
  src: string
  muted: boolean
  autoplay: boolean
  loop: boolean
  preload: string
  type: string
  onBack: (e: HTMLAudioElement) => void
  onForward: (e: HTMLAudioElement) => void
  onPause: ((e: HTMLAudioElement) => void) & ReactEventHandler<HTMLAudioElement>
  onEnd: (e: HTMLAudioElement) => void
  onMute: (e: HTMLAudioElement) => void
  onCanPlay: ((e: HTMLAudioElement) => void) &
    ReactEventHandler<HTMLAudioElement>
}

const defaultProps = {
  ...ComponentDefaults,
  src: '',
  muted: false,
  autoplay: false,
  loop: false,
  preload: 'auto',
  type: 'progress',
  onBack: (e: HTMLAudioElement) => {}, // type 为 progress时生效
  onForward: (e: HTMLAudioElement) => {}, // type 为 progress时生效
  onPause: (e) => {},
  onEnd: (e: HTMLAudioElement) => {},
  onMute: (e: HTMLAudioElement) => {},
  onCanPlay: (e: HTMLAudioElement) => {},
} as AudioProps
export const Audio: FunctionComponent<
  Partial<AudioProps> & React.HTMLAttributes<HTMLElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    src,
    style,
    muted,
    autoplay,
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

  const AudioRef = useRef<HTMLAudioElement>(null)
  const statusRef = useRef({
    currentTime: 0,
    currentDuration: '00:00:00',
    percent: 0,
    duration: '00:00:00',
    second: 0,
    hanMuted: props.muted,
    playing: props.autoplay,
    handPlaying: false,
  })
  const classPrefix = 'nut-audio'
  const warn = console.warn
  const handleEnded = (e: any) => {
    if (props.loop) {
      warn(locale.audio.tips || 'onPlayEnd事件在loop=false时才会触发')
    } else {
      props.onEnd && props.onEnd(e)
    }
  }

  function watch() {
    if (AudioRef && AudioRef.current) {
      const current = AudioRef.current
      current.addEventListener('play', () => {
        setPlaying(true)
      })
    }
  }
  useEffect(() => {
    watch()
  }, [])

  useEffect(() => {}, [currentDuration])
  const handleStatusChange = () => {
    setPlaying(!playing)
    if (playing) {
      AudioRef && AudioRef.current && AudioRef.current.pause()
    } else {
      AudioRef && AudioRef.current && AudioRef.current.play()
    }
  }
  const renderIcon = () => {
    return (
      <div className={`${classPrefix}__icon`}>
        <div
          className={classNames(
            `${classPrefix}__icon-box`,
            playing ? `${classPrefix}__icon-play` : `${classPrefix}__icon-stop`
          )}
          onClick={handleStatusChange}
        >
          <Service className={playing ? 'nut-icon-loading' : ''} />
        </div>
      </div>
    )
  }

  const handleBack = () => {
    if (statusRef.current.currentTime > 0 && AudioRef.current) {
      statusRef.current.currentTime--
      AudioRef.current.currentTime = statusRef.current.currentTime
      props.onBack && props.onBack(AudioRef.current)
    }
  }
  const handleForward = () => {
    if (AudioRef.current) {
      statusRef.current.currentTime++
      AudioRef.current.currentTime = statusRef.current.currentTime
      props.onForward && props.onForward(AudioRef.current)
    }
  }
  const handleMute = () => {
    if (AudioRef.current) {
      AudioRef.current.muted = !AudioRef.current.muted
      props.onMute && props.onMute(AudioRef.current)
    }
  }
  const handlePause = (e: HTMLAudioElement) => {
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
  const renderProgerss = () => {
    return (
      <>
        <div className={`${classPrefix}__progress`}>
          <div className="time">{currentDuration}</div>
          <div className={`${classPrefix}__progress-bar-wrapper`}>
            <Range
              modelValue={percent}
              hiddenTag
              hiddenRange
              inactive-color="#cccccc"
              active-color="#fa2c19"
            />
          </div>
          <div className="time">
            {AudioRef.current
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
            type={
              AudioRef.current && AudioRef.current.muted ? 'default' : 'primary'
            }
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
        className={`${classPrefix}__none-container`}
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

  const handleCanplay = (e: any) => {
    setIsCanPlay(true)
    if (props.autoplay && !playing) {
      AudioRef && AudioRef.current && AudioRef.current.play()
    }
    if (AudioRef.current) {
      statusRef.current.second = AudioRef.current.duration || 0
      props.onCanPlay && props.onCanPlay(e)
    }
  }
  const onTimeupdate = (e: any) => {
    const time = parseInt(e.target.currentTime)
    const formated = formatSeconds(`${time}`)
    statusRef.current.currentDuration = formated
    setPercent((time / statusRef.current.second) * 100)
    setCurrentDuration(formated)
    statusRef.current.currentTime = time
  }
  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      {renderAudio()}
      <audio
        className="audioMain"
        controls={type === 'controls'}
        ref={AudioRef}
        src={src}
        muted={muted}
        preload={preload}
        loop={loop}
        onPause={(e: any) => handlePause(e)}
        onEnded={(e: React.SyntheticEvent<HTMLAudioElement, Event>) =>
          handleEnded(e)
        }
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
