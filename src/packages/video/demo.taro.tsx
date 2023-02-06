import React, { useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Button, Video } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'
import '@/packages/video/demo.scss'

interface T {
  '84aa6bce': string
  a5a25e88: string
  '19875a3f': string
  fcdac2ed: string
  '200baa8c': string
  '5ec0e561': string
  a6e0b0cf: string
}
const VideoDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      a5a25e88: '自动播放',
      '19875a3f': '初始化静音',
      fcdac2ed: '视频封面海报设置',
      '200baa8c': '行内播放',
      '5ec0e561': '设置视频为背景图',
      a6e0b0cf: '视频切换',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      a5a25e88: '自動播放',
      '19875a3f': '初始化靜音',
      fcdac2ed: '視頻封面海報設置',
      '200baa8c': '行內播放',
      '5ec0e561': '設置視頻為背景圖',
      a6e0b0cf: '視頻切換',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      a5a25e88: 'Auto play',
      '19875a3f': 'Initialize mute',
      fcdac2ed: 'Video cover poster settings',
      '200baa8c': 'play inline',
      '5ec0e561': 'Set video as background',
      a6e0b0cf: 'Video switching',
    },
  })

  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const [source1, setSource1] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const options1 = {
    autoplay: true,
    muted: true,
    controls: true,
  }
  const options2 = {
    muted: true,
    controls: true,
  }
  const options3 = {
    controls: true,
    poster:
      'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
  }
  const options4 = {
    controls: true,
    playsinline: true,
  }
  const options5 = {
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

  const changeVideo = () => {
    setSource1({ ...source1, src: 'https://vjs.zencdn.net/v/oceans.mp4' })
  }
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-video`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Cell className="video-cell">
          <Video
            source={source}
            options={options}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <h2>{translated.a5a25e88}</h2>
        <Cell className="video-cell">
          <Video
            source={source}
            options={options1}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <h2>{translated['19875a3f']}</h2>
        <Cell className="video-cell">
          <Video
            source={source}
            options={options2}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <h2>{translated.fcdac2ed}</h2>
        <Cell className="video-cell">
          <Video
            source={source}
            options={options3}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <h2>{translated['200baa8c']}</h2>
        <Cell className="video-cell">
          <Video
            source={source}
            options={options4}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <h2>{translated['5ec0e561']}</h2>
        <Cell className="video-cell">
          <Video
            source={source}
            options={options5}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <h2>{translated.a6e0b0cf}</h2>
        <Cell className="video-cell">
          <Video
            source={source1}
            options={options}
            onPlayFuc={play}
            onPauseFuc={pause}
            onPlayend={playend}
          />
        </Cell>
        <Button type="primary" className="video-m-b" onClick={changeVideo}>
          {translated.a6e0b0cf}
        </Button>
      </div>
    </>
  )
}

export default VideoDemo
