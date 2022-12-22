import React, { useState } from 'react'
import { Audio } from './audio'
import Icon from '../icon'
import './demo.scss'
import Cell from '../cell'

const AudioDemo = () => {
  const [duration, setDuration] = useState(0)
  const [voiceIcon, setVoiceIcon] = useState('play-circle-fill')
  const audioElement = document.querySelectorAll('audio')[2]
  if (audioElement) {
    audioElement.addEventListener('playing', (e) => {
      setVoiceIcon('poweroff-circle-fill')
    })
    audioElement.addEventListener('pause', (e) => {
      setVoiceIcon('play-circle-fill')
    })
  }
  return (
    <div className="demo">
      <h2>type=icon</h2>
      <Cell>
        <Audio
          autoplay={false}
          url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="icon"
          loop={false}
          preload="auto"
          muted={false}
          onPlayEnd={() => alert('ended!')}
        />
      </Cell>
      <h2>type=progress</h2>
      <Cell>
        <Audio
          autoplay={false}
          style={{ fontSize: '20px' }}
          url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
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
          onPlayEnd={() => alert('progress audio ended!')}
        />
      </Cell>
      <h2>type=none</h2>
      <Cell>
        <Audio
          className="custom-voice-audio"
          id="custom-voice-audio"
          autoplay={false}
          url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="none"
          preload="auto"
          onCanPlay={(e: any) => {
            console.log('none-canplay', e)
            setDuration(e?.target?.duration.toFixed(0) || 0)
          }}
        >
          <div className="nut-voice">
            <Icon name={voiceIcon} />
            <div>{duration}&quot;</div>
          </div>
        </Audio>
      </Cell>
      <h2>type=controls</h2>
      <Cell>
        <Audio
          autoplay={false}
          url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          type="controls"
          preload="auto"
          muted={false}
          onPause={(e) => {
            console.log('paused', e)
          }}
          onPlayEnd={() => alert('ended!')}
        />
      </Cell>
    </div>
  )
}
export default AudioDemo
