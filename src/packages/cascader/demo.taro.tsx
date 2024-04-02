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

const CascaderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '自定义属性名称',
      title2: '动态加载',
      title3: '部分数据动态加载',
      title4: '自动转换',
      title5: '自定义样式',
    },
    'zh-TW': {
      basic: '基础用法',
      title1: '自定義屬性名稱',
      title2: '動態加載',
      title3: '部分數據動態加載',
      title4: '自動轉換',
      title5: '自定義样式',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom Attribute Name',
      title2: 'Async Loading',
      title3: 'Async Loading Of Partial Data',
      title4: 'Automatic Data Conversion',
      title5: 'Customize CSS',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <Demo2 />
        <h2>{translated.title2}</h2>
        <Demo3 />
        <h2>{translated.title3}</h2>
        <Demo4 />
        <h2>{translated.title4}</h2>
        <Demo5 />
        <h2>{translated.title5}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default CascaderDemo
