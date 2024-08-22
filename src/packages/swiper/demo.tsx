import React from 'react'
import '@/packages/swiper/demo.scss'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'

interface T {
  basic: string
  focus: string
  asyc: string
  dynamicDel: string
  size: string
  indicator: string
  btns: string
  vertical: string
  horizontalCenter: string
  verticalCenter: string
  multiItems: string
}

const SwiperDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      focus: '焦点轮播',
      asyc: '异步加载(300ms)',
      dynamicDel: '动态加载',
      size: '自定义大小',
      indicator: '自定义指示器',
      btns: '手动切换',
      vertical: '垂直方向',
      horizontalCenter: '水平居中展示',
      verticalCenter: '垂直居中展示',
      multiItems: '一屏多个数据时',
    },
    'en-US': {
      basic: 'Basic Usage',
      focus: 'Focus',
      asyc: 'Asynchronous loading(300ms)',
      dynamicDel: 'Dynamic loading',
      size: 'Custom size',
      indicator: 'Custom indicator',
      btns: 'Manual switching',
      vertical: 'Vertical direction',
      horizontalCenter: 'Horizontal center display',
      verticalCenter: 'Vertical center display',
      multiItems: 'many datas in a frame',
    },
  })
  return (
    <div className="demo padding">
      <h2>{translated.basic}</h2>
      <Demo1 />
      <h2>{translated.focus}</h2>
      <Demo10 />
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
  )
}

export default SwiperDemo
