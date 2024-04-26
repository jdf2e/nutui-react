import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const TagDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      style: '样式风格',
      customColor: '自定义颜色',
      imageText: '图文',
    },
    'en-US': {
      basic: 'Basic Usage',
      style: 'Style',
      customColor: 'Custom Color',
      imageText: 'image-text',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.style}</h2>
        <Demo2 />

        <h2>{translated.customColor}</h2>
        <Demo3 />

        <h2>{translated.imageText}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default TagDemo
