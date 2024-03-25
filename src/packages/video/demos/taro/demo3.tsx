import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    muted: true,
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo3
