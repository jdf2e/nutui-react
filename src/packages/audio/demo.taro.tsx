import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, Audio } from '@nutui/nutui-react-taro'
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
  const [duration, setDuration] = useState('0')
  const [voiceIcon, setVoiceIcon] = useState('play-circle-fill')
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} audio-demo`}
      >
        <div>
          <h2>1.Taro原生的Audio组件,1.6.0版本开始，该组件不再维护</h2>
          <h2>
            2.本组件基于Taro.createInnerAudioContext做了封装,由于api的限制,相比于NuiUI-React
            Audio组件,部分属性和事件发生了改动:
            <h2>(1) 属性移除:muted | preload | type = controls </h2>
            <h2>(2) 事件移除:onMute</h2>
            <h2>(3) 事件新增:onPlay</h2>
          </h2>
        </div>

        <h2>type=icon</h2>
        <Cell>
          <Audio
            autoplay={false}
            url="https://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
            type="icon"
            loop={false}
            onPlayEnd={() => console.log('ended!')}
          />
        </Cell>
        <h2>type=progress</h2>
        <Cell>
          <Audio
            autoplay={false}
            style={{ fontSize: '20px' }}
            url="https://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
            type="progress"
            onForward={() => console.log('forward')}
            onPause={(ctx: any) => {
              console.log('progress audio paused', ctx)
            }}
            onPlayEnd={() => console.log('progress audio ended!')}
          />
        </Cell>
        <h2>type=none</h2>
        <Cell>
          <Audio
            className="custom-voice-audio"
            autoplay={false}
            url="https://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
            type="none"
            onPlay={(ctx: any) => {
              setDuration(formatseconds(`${ctx.duration}`))
              setVoiceIcon('poweroff-circle-fill')
            }}
            onPause={(ctx: any) => {
              setVoiceIcon('play-circle-fill')
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100px',
                padding: '8px',
                border: '1px solid var(--nutui-gray-7)',
                borderRadius: '18px',
              }}
            >
              <div>{duration}&quot;</div>
            </div>
          </Audio>
        </Cell>
      </div>
    </>
  )
}
export default AudioDemo
