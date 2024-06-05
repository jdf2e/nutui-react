import React, { useState } from 'react'
import { Button } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
// import Demo5 from './demos/h5/demo5'

const HoverDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      show: '展示',
      basic: '基础用法',
      multiButtons: '多个按钮',
      hasTabbar: '有底部导航栏的情况',
      customZIndex: '自定义层级',
      customSpacing: '自定义间距',
    },
    'zh-TW': {
      show: '展示',
      basic: '基礎用法',
      multiButtons: '多個按鈕',
      hasTabbar: '有底部導航欄的情況',
      customZIndex: '自定義層級',
      customSpacing: '自定義間距',
    },
    'en-US': {
      show: 'Show ',
      basic: 'Basic Usage',
      multiButtons: 'Multiple Buttons',
      hasTabbar: 'With Tabbar',
      customZIndex: 'Custom Z-Index',
      customSpacing: 'Custom Spacing',
    },
  })
  const [curDemo, setCurDemo] = useState('basic')

  return (
    <>
      <Header />
      <>
        <h2>{translated.basic}</h2>
        <Button
          block
          onClick={() => {
            setCurDemo('basic')
          }}
        >
          {`${translated.show}${translated.basic}`}
        </Button>
        {curDemo === 'basic' && <Demo1 />}

        <h2>{translated.multiButtons}</h2>
        <Button
          block
          onClick={() => {
            setCurDemo('multiButtons')
          }}
        >
          {`${translated.show}${translated.multiButtons}`}
        </Button>
        {curDemo === 'multiButtons' && <Demo2 />}

        <h2>{translated.hasTabbar}</h2>
        <Button
          block
          onClick={() => {
            setCurDemo('hasTabbar')
          }}
        >
          {`${translated.show}${translated.hasTabbar}`}
        </Button>
        {curDemo === 'hasTabbar' && <Demo3 />}

        <h2>{translated.customZIndex}</h2>
        <Button
          block
          onClick={() => {
            setCurDemo('customZIndex')
          }}
        >
          {`${translated.show}${translated.customZIndex}`}
        </Button>
        {curDemo === 'customZIndex' && <Demo4 />}

        {/* <h2>{translated.customSpacing}</h2> */}
        {/* <Demo5 /> */}
      </>
    </>
  )
}

export default HoverDemo
