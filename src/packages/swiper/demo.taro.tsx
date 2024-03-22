import React from 'react'
import '@/packages/swiper/demo.scss'
import Taro from '@tarojs/taro'
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
import Demo9 from './demos/taro/demo9'

const SwiperDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      asyc: '异步加载(3s)',
      size: '自定义大小',
      indicator: '自定义指示器',
      btns: '手动切换',
      vertical: '垂直方向',
      horizontalCenter: '水平居中展示（无指示器）',
      verticalCenter: '垂直居中展示',
      multiItems: '一屏多个数据时',
    },
    'en-US': {
      basic: 'Basic Usage',
      asyc: 'Asynchronous loading(3s)',
      size: 'Custom size',
      indicator: 'Custom indicator',
      btns: 'Manual switching',
      vertical: 'Vertical direction',
      horizontalCenter: 'Horizontal center display(no indicator)',
      verticalCenter: 'Vertical center display',
      multiItems: 'many datas in a frame',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} padding`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.asyc}</h2>
        <Demo2 />
        <h2>{translated.size}</h2>
        <Demo3 />
        <h2>{translated.indicator}</h2>
        <Demo4 />
        <h2>{translated.btns}</h2>
        <Demo5 />
        <h2>{translated.vertical}</h2>
        <Demo6 />
        <h2>{translated.horizontalCenter}</h2>
        <Demo7 />
        <h2>{translated.verticalCenter}</h2>
        <Demo8 />
        <h2>{translated.multiItems}</h2>
        <Demo9 />
      </div>
    </>
  )
}

export default SwiperDemo
