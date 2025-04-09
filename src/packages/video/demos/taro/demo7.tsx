import React, { useState } from 'react'
import { Cell, Video, Button, pxTransform } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)

  const changeVideo = () => {
    setSource({ ...source, src: 'https://vjs.zencdn.net/v/oceans.mp4' })
  }
  return (
    <>
      <Cell style={{ padding: 0 }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: pxTransform(163) }}
        />
      </Cell>
      <Button
        type="primary"
        style={{ marginBottom: pxTransform(60) }}
        onClick={changeVideo}
      >
        视频切换
      </Button>
    </>
  )
}
export default Demo7
