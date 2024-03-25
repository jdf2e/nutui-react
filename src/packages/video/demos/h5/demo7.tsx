import React, { useState } from 'react'
import { Cell, Video, Button } from '@nutui/nutui-react'

const Demo7 = () => {
  const [source1, setSource1] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)

  const changeVideo = () => {
    setSource1({ ...source1, src: 'https://vjs.zencdn.net/v/oceans.mp4' })
  }
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source1}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
        />
      </Cell>
      <Button
        type="primary"
        style={{ marginBottom: '60px' }}
        onClick={changeVideo}
      >
        视频切换
      </Button>
    </>
  )
}
export default Demo7
