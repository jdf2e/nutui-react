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
import Demo8 from './demos/taro/demo8'

const PickerDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      defaultSelected: '默认选中项',
      controlled: '受控',
      tileDesc: '平铺展示',
      multipleColumns: '多列样式',
      cascade: '多级联动',
      async: '异步获取',
      theme: '自定义主题',
    },
    'zh-TW': {
      basic: '基础用法',
      defaultSelected: '默認選中項',
      controlled: '受控',
      tileDesc: '平鋪展示',
      multipleColumns: '多列樣式',
      cascade: '多級聯動',
      async: '異步獲取',
      theme: '自定義主题',
    },
    'en-US': {
      basic: 'Basic Usage',
      defaultSelected: 'Default Index',
      controlled: 'Controlled',
      tileDesc: 'Tile',
      multipleColumns: 'Multiple Columns',
      cascade: 'Cascade',
      async: 'Async',
      theme: 'Custom Theme',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.defaultSelected}</h2>
        <Demo2 />
        <h2>{translated.controlled}</h2>
        <Demo3 />
        <h2>{translated.multipleColumns}</h2>
        <Demo4 />
        <h2>{translated.tileDesc}</h2>
        <Demo5 />
        <h2>{translated.cascade}</h2>
        <Demo6 />
        <h2>{translated.async}</h2>
        <Demo7 />
        <h2>{translated.theme}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default PickerDemo
