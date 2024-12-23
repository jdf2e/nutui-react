import React, { useState, useRef } from 'react'
import { Cell, Video } from '@nutui/nutui-react'

const Demo2 = () => {
  const [source] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    autoplay: true,
    muted: true,
    controls: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)

  const rootRef = useRef<HTMLVideoElement>(null)
  setTimeout(() => {
    rootRef?.current?.pause()
  }, 2000)

  setTimeout(() => {
    rootRef?.current?.play()
  }, 4000)

  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          ref={rootRef}
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
export default Demo2
