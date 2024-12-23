import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'

const SwipeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      base: '基础用法',
      card: '卡片场景',
      catchMove: '阻止父元素滚动',
      byRef: '通过实例方法控制',
      close: '点击关闭',
      disabled: '禁用滑动',
      event: '事件监听',
      async: '异步控制',
      custom: '自定义内容',
    },
    'zh-TW': {
      base: '基礎用法',
      card: '卡片場景',
      catchMove: '阻止父元素滾動',
      byRef: '通過實例方法控制',
      close: '點擊關閉',
      disabled: '禁用滑動',
      event: '事件監聽',
      async: '異步控制',
      custom: '自定義內容',
    },
    'en-US': {
      base: 'Basic Usage',
      card: 'Card Scenario',
      catchMove: 'Prevent Parent Element Scrolling',
      byRef: 'Control via Instance Methods',
      close: 'Click to Close',
      disabled: 'Disable Sliding',
      event: 'Event Listener',
      async: 'Asynchronous Control',
      custom: 'Custom Content',
    },
  })

  return (
    <>
      <div className="demo full">
        <h2 className="h2">{translated.base}</h2>
        <Demo1 />
        <h2 className="h2">{translated.card}</h2>
        <Demo2 />
        <h2 className="h2">{translated.catchMove}</h2>
        <Demo3 />
        <h2 className="h2">{translated.byRef}</h2>
        <Demo4 />
        <h2 className="h2">{translated.close}</h2>
        <Demo5 />
        <h2 className="h2">{translated.disabled}</h2>
        <Demo6 />
        <h2 className="h2">{translated.event}</h2>
        <Demo7 />
        <h2 className="h2">{translated.async}</h2>
        <Demo8 />
        <h2 className="h2">{translated.custom}</h2>
        <Demo9 />
      </div>
    </>
  )
}

export default SwipeDemo
