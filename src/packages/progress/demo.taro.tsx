import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const ProgressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '设置颜色与宽度',
      noShowPercentage: '显示百分比',
      customContent: '自定义显示内容',
      customSize: '自定义尺寸',
      statusDisplay: '状态显示',
      dynamicChange: '动态改变',
      lazy: '延迟加载数据',
      activeMode: '设置动画时长与播放方式',
    },
    'zh-TW': {
      basic: '基礎用法',
      customStyle: '設置顏色與寬度',
      noShowPercentage: '顯示百分比',
      customContent: '自定義顯示內容',
      customSize: '自定義尺寸',
      statusDisplay: '狀態顯示',
      dynamicChange: '動態改變',
      lazy: '延遲加載數據',
      activeMode: '設置動畫時長與播放方式',
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Show Percentage',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      lazy: 'Delay Time',
      activeMode: 'Duration And Animation Mode',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.customStyle}</h2>
        <Demo2 />
        <h2>{translated.noShowPercentage}</h2>
        <Demo3 />
        <h2>{translated.customContent}</h2>
        <Demo4 />
        <h2>{translated.customSize}</h2>
        <Demo5 />
        <h2>{translated.statusDisplay}</h2>
        <Demo6 />
        <h2>{translated.dynamicChange}</h2>
        <Demo7 />
        <h2>{translated.lazy}</h2>
        <Demo8 />
        <h2>{translated.activeMode}</h2>
        <Demo9 />
      </div>
    </>
  )
}

export default ProgressDemo
