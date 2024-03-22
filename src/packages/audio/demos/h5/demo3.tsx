import React, { useState } from 'react'
import { Audio } from '@nutui/nutui-react'
import { PlayCircleFill, PoweroffCircleFill } from '@nutui/icons-react'

const Demo3 = () => {
  const [duration, setDuration] = useState(0)
  const [voiceIcon, setVoiceIcon] = useState<any>(<PlayCircleFill />)
  const audioElement = document.querySelectorAll('audio')[2]
  if (audioElement) {
    audioElement.addEventListener('playing', (e) => {
      setVoiceIcon(<PoweroffCircleFill />)
    })
    audioElement.addEventListener('pause', (e) => {
      setVoiceIcon(<PlayCircleFill />)
    })
  }
  return (
    <>
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
          {voiceIcon}
          <div>{duration}&quot;</div>
        </div>
      </Audio>
    </>
  )
}
export default Demo3
