import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import '@/packages/popover/demo.scss'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo41 from './demos/taro/demo4-1'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const PopoverDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '选项配置',
      title2: '自定义内容',
      title3: '位置自定义：多条数据',
      title6: '位置自定义：单条数据',
      title4: '自定义目标元素',
      content: '自定义内容',
      contentColor: '自定义颜色',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Option Configuration',
      title2: 'Custom Content',
      title3: 'Custom Location: multi datas',
      title6: 'Custom Location: one data',
      title4: 'Custom Target Element',
      content: 'Custom Content',
      contentColor: 'Custom Color',
    },
    'zh-TW': {
      title: '基礎用法',
      title1: '選項配置',
      title2: '自定義內容',
      title3: '位置自定義：多條資料',
      title6: '位置自定義：單一資料',
      title4: '自定義目標元素',
      content: '自定義內容',
      contentColor: '自定義顏色',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <Demo2 />
        <h2>{translated.content}</h2>
        <Demo3 />
        <h2 className="demoClass">{translated.title3}</h2>
        <Demo4 />
        <h2>{translated.title6}</h2>
        <Demo41 />
        <h2>{translated.title4}</h2>
        <Demo5 />
        <h2>{translated.contentColor}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default PopoverDemo
