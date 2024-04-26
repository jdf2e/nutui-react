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
import Demo9 from './demos/taro/demo9'
import Demo10 from './demos/taro/demo10'

const GridDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      columns: '自定义列数',
      square: '正方形格子',
      gap: '格子间距',
      reverse: '内容翻转',
      horizontal: '内容横向',
      reverseHorizontal: '内容翻转 + 横向',
      iconStyle: '图标颜色/大小',
      customContent: '自定义内容',
      event: '点击子项事件',
    },
    'zh-TW': {
      basic: '基础用法',
      columns: '自定義列數',
      square: '正方形格子',
      gap: '格子間距',
      reverse: '內容翻轉',
      horizontal: '內容橫向',
      reverseHorizontal: '內容翻轉 + 橫向',
      iconStyle: '圖標顏色/大小',
      customContent: '自定義內容',
      event: '點擊子項事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      columns: 'Column Num',
      square: 'Square',
      gap: 'Gap',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      reverseHorizontal: 'Reverse & Horizontal',
      iconStyle: 'Icon Style',
      customContent: 'Custom Content',
      event: 'Grid Item Click',
    },
  })

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ marginBottom: '100px' }}
      >
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.columns}</h2>
        <Demo2 />
        <h2>{translated.square}</h2>
        <Demo3 />
        <h2>{translated.gap}</h2>
        <Demo4 />
        <h2>{translated.reverse}</h2>
        <Demo5 />
        <h2>{translated.horizontal}</h2>
        <Demo6 />
        <h2>{translated.reverseHorizontal}</h2>
        <Demo7 />
        <h2>{translated.iconStyle}</h2>
        <Demo8 />
        <h2>{translated.customContent}</h2>
        <Demo9 />
        <h2>{translated.event}</h2>
        <Demo10 />
      </div>
    </>
  )
}

export default GridDemo
