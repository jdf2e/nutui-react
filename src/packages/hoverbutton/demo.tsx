import React, { useState } from 'react'
import { Cell } from '@nutui/nutui-react'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const HoverButtonDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      show: '展示',
      basic: '基础用法',
      customNode: '自定义内容',
      multiButtons: '多个按钮',
      hasTabbar: '有底部导航栏的情况',
      customZIndex: '自定义层级',
      customSpacing: '自定义间距',
    },
    'zh-TW': {
      show: '展示',
      basic: '基礎用法',
      customNode: '自定義內容',
      multiButtons: '多個按鈕',
      hasTabbar: '有底部導航欄的情況',
      customZIndex: '自定義層級',
      customSpacing: '自定義間距',
    },
    'en-US': {
      show: 'Show ',
      basic: 'Basic Usage',
      customNode: 'Custom Node',
      multiButtons: 'Multiple Buttons',
      hasTabbar: 'With Tabbar',
      customZIndex: 'Custom Z-Index',
      customSpacing: 'Custom Spacing',
    },
  })
  const [curDemo, setCurDemo] = useState('customNode')

  return (
    <>
      <div className="demo" style={{ paddingBottom: '100px' }}>
        <h2>{translated.basic}</h2>
        <Cell
          title={`${translated.show}${translated.basic}`}
          onClick={() => {
            setCurDemo('basic')
          }}
        />
        {curDemo === 'basic' && <Demo1 />}

        <h2>{translated.multiButtons}</h2>
        <Cell
          title={`${translated.show}${translated.multiButtons}`}
          onClick={() => {
            setCurDemo('multiButtons')
          }}
        />
        {curDemo === 'multiButtons' && <Demo2 />}

        <h2>{translated.hasTabbar}</h2>
        <Cell
          title={`${translated.show}${translated.hasTabbar}`}
          onClick={() => {
            setCurDemo('hasTabbar')
          }}
        />
        {curDemo === 'hasTabbar' && <Demo3 />}

        <h2>{translated.customZIndex}</h2>
        <Cell
          title={`${translated.show}${translated.customZIndex}`}
          onClick={() => {
            setCurDemo('customZIndex')
          }}
        />
        {curDemo === 'customZIndex' && <Demo4 />}

        <h2>{translated.customSpacing}</h2>
        <Cell
          title={`${translated.show}${translated.customSpacing}`}
          onClick={() => {
            setCurDemo('customSpacing')
          }}
        />
        {curDemo === 'customSpacing' && <Demo5 />}
        <h2>{translated.customNode}</h2>
        <Cell
          title={`${translated.show}${translated.customNode}`}
          onClick={() => {
            setCurDemo('customNode')
          }}
        />
        {curDemo === 'customNode' && <Demo6 />}
      </div>
    </>
  )
}

export default HoverButtonDemo
