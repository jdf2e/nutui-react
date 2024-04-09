import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const IndicatorDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customNode: '自定义节点',
      custom: '自定义',
      vertical: '竖向展示',
    },
    'zh-TW': {
      basic: '基礎用法',
      customNode: '自定义节点',
      custom: '自定义',
      vertical: '豎向展示',
    },
    'en-US': {
      basic: 'Basic usage',
      customNode: 'Custom Node',
      custom: 'Custom',
      vertical: 'Vertical display',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.customNode}</h2>
        <Demo2 />

        <h2>{translated.custom}</h2>
        <Demo3 />

        <h2>{translated.vertical}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default IndicatorDemo
