import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react'

const Demo6 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: false,
    autoplay: true,
    disabled: true,
    muted: true,
    playsinline: true,
    loop: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
        />
      </Cell>
    </>
  )
}
export default Demo6
