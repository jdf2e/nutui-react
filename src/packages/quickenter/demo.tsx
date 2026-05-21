import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const QuickEnterDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      scrollable: '可滚动',
      customClose: '自定义关闭图标',
    },
    'zh-TW': {
      basic: '基础用法',
      scrollable: '可滚动',
      customClose: '自定义关闭图标',
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollable: 'Scrollable',
      customClose: 'Custom Close Icon',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.scrollable}</h2>
        <Demo2 />

        <h2>{translated.customClose}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default QuickEnterDemo
