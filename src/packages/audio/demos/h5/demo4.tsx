import React from 'react'
import { Audio } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
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
    </>
  )
}
export default Demo4
