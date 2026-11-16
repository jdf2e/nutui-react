import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Cell from '@/packages/cell'
import './demo.scss'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const VideoProgressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法 (静态播放)',
      paused: '暂停状态与自定义图标',
      draggable: '手势拖拽寻道',
    },
    'zh-TW': {
      basic: '基礎用法 (靜態播放)',
      paused: '暫停狀態與自定義圖標',
      draggable: '手勢拖拽尋道',
    },
    'en-US': {
      basic: 'Basic Usage (Static Playback)',
      paused: 'Paused State & Custom Icon',
      draggable: 'Gesture Drag & Seek',
    },
  })

  return (
    <>
      <div className="demo demo-videoprogress">
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.paused}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.draggable}</h2>
        <Cell>
          <Demo3 />
        </Cell>
      </div>
    </>
  )
}

export default VideoProgressDemo
