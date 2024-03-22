import React from 'react'
import { Audio } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <>
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
    </>
  )
}
export default Demo2
