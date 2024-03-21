import React from 'react'
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

const CollapseDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      header1: '基础用法',
      controll: '受控方式',
      header2: '无icon样式，绑定点击事件',
      header3: '手风琴模式',
      header4: '自定义折叠图标',
      header5: '自定义 title 与 extra',
      header6: '动态改变数据',
    },
    'zh-TW': {
      header1: '基礎用法',
      controll: '受控方式',
      header2: '無icon樣式，綁定點擊事件',
      header3: '手風琴模式',
      header4: '自定義折疊圖標',
      header5: '自定義 title 與 extra',
      header6: '動態改變數據',
    },
    'en-US': {
      header1: 'Basic Usage',
      controll: 'Controlled',
      header2: 'No icon style',
      header3: 'accordion Mode',
      header4: 'Custom collapse Icon',
      header5: 'Custom title and extra',
      header6: 'Change Data',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo full ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.header1}</h2>
        <Demo1 />

        <h2>{translated.controll}</h2>
        <Demo2 />

        <h2>{translated.header2}</h2>
        <Demo3 />

        <h2>{translated.header3}</h2>
        <Demo4 />

        <h2>{translated.header4}</h2>
        <Demo5 />

        <h2>{translated.header5}</h2>
        <Demo6 />

        <h2>{translated.header6}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default CollapseDemo
