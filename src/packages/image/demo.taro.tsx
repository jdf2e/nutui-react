import React from 'react'
import Taro from '@tarojs/taro'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lazyload: '图片懒加载',
      imageText: 'Image + text 模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      lazyload: 'Lazyload',
      imageText: 'Image + text ',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.circle}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.loading}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.error}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.imageText}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.fill}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo6 />
        </Cell>
        <h2>{translated.position}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo7 />
        </Cell>
        <h2>{translated.lazyload}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default ImageDemo
