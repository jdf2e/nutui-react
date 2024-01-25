import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Audio } from '@/packages/nutui.react.taro'
import '@/packages/audio/demo.scss'
import Header from '@/sites/components/header'

const formatseconds = (value: string) => {
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

const AudioDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      progress: '进度条模式',
      none: '自定义模式',
      control: '控件模式',
    },
    'en-US': {
      basic: 'Basic',
      progress: 'Progress Mode',
      none: 'Custom Mode',
      control: 'Control Mode',
    },
  })

  const [duration, setDuration] = useState('0')
  const [voiceIcon, setVoiceIcon] = useState('play-circle-fill')
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} audio-demo`}
      >
        <h2>{translated.basic}</h2>
        <Cell>
          <Audio
            autoPlay={false}
            src="https://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
            type="icon"
            loop={false}
            onEnd={() => console.log('ended!')}
          />
        </Cell>
        <h2>{translated.progress}</h2>
        <Cell>
          <Audio
            autoPlay={false}
            style={{ fontSize: '20px' }}
            src="https://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
            type="progress"
            onForward={() => console.log('forward')}
            onPause={(ctx: any) => {
              console.log('progress audio paused', ctx)
            }}
            onEnd={() => console.log('progress audio ended!')}
          />
        </Cell>
        <h2>{translated.none}</h2>
        <Cell>
          <Audio
            className="custom-voice-audio"
            autoPlay={false}
            src="https://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
            type="none"
            onPlay={(ctx: any) => {
              setDuration(formatseconds(`${ctx.duration}`))
              setVoiceIcon('poweroff-circle-fill')
            }}
            onPause={(ctx: any) => {
              setVoiceIcon('play-circle-fill')
            }}
          >
            <div className="nut-voice">
              <div>{duration}&quot;</div>
            </div>
          </Audio>
        </Cell>
      </div>
    </>
  )
}
export default AudioDemo
