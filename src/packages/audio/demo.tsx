import React, { useState } from 'react'
import { PlayCircleFill, PoweroffCircleFill } from '@nutui/icons-react'
import { useTranslate } from '@/sites/assets/locale'
import { Audio } from './audio'
import './demo.scss'
import Cell from '../cell'

interface T {
  basic: string
  progress: string
  none: string
  control: string
}

const AudioDemo = () => {
  const [translated] = useTranslate<T>({
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
  const [duration, setDuration] = useState(0)
  const [voiceIcon, setVoiceIcon] = useState<any>(PlayCircleFill)
  const audioElement = document.querySelectorAll('audio')[2]
  if (audioElement) {
    audioElement.addEventListener('playing', (e) => {
      setVoiceIcon(PoweroffCircleFill)
    })
    audioElement.addEventListener('pause', (e) => {
      setVoiceIcon(PlayCircleFill)
    })
  }
  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Cell>
        <Audio
          autoPlay={false}
          src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="icon"
          loop={false}
          preload="auto"
          muted={false}
          onEnd={() => alert('ended!')}
        />
      </Cell>
      <h2>{translated.progress}</h2>
      <Cell>
        <Audio
          autoPlay={false}
          style={{ fontSize: '20px' }}
          src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="progress"
          preload="auto"
          muted={false}
          onMute={(e) => {
            console.log('progress audio muted', e)
          }}
          onForward={() => console.log('forward')}
          onPause={(e) => {
            console.log('progress audio paused', e)
          }}
          onEnd={() => alert('progress audio ended!')}
        />
      </Cell>
      <h2>{translated.none}</h2>
      <Cell>
        <Audio
          className="custom-voice-audio"
          id="custom-voice-audio"
          autoPlay={false}
          src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="none"
          preload="auto"
          onCanPlay={(e: any) => {
            console.log('none-canplay', e)
            setDuration(e?.target?.duration.toFixed(0) || 0)
          }}
        >
          <div className="nut-voice">
            {voiceIcon}
            <div>{duration}&quot;</div>
          </div>
        </Audio>
      </Cell>
      <h2>{translated.control}</h2>
      <Cell>
        <Audio
          autoPlay={false}
          src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="controls"
          preload="auto"
          muted={false}
          onPause={(e) => {
            console.log('paused', e)
          }}
          onEnd={() => alert('ended!')}
        />
      </Cell>
    </div>
  )
}
export default AudioDemo
