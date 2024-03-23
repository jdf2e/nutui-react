import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
    poster:
      'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
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
export default Demo4
