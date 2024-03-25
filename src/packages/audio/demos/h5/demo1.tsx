import React from 'react'
import { Audio } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Audio
        autoPlay={false}
        src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        type="icon"
        loop={false}
        preload="auto"
        muted={false}
        onEnd={() => alert('ended!')}
      />
    </>
  )
}
export default Demo1
