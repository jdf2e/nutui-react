import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

const SkeletonDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '标题',
      ea3bc18a: '正文',
      '02a53df5': '模拟头像',
      '0a001122': '标题段落',
      '07d62d5c': '显示子组件',
    },
    'zh-TW': {
      '84aa6bce': '标题',
      ea3bc18a: '正文',
      '02a53df5': '模拟头像',
      '0a001122': '標題段落',
      '07d62d5c': '显示子组件',
    },
    'en-US': {
      '84aa6bce': 'Title',
      ea3bc18a: 'Paragraph',
      '02a53df5': 'Mock Avatar',
      '0a001122': 'Heading Paragraph',
      '07d62d5c': 'Show Subcomponents',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Demo1 />
        <h2>{translated.ea3bc18a}</h2>
        <Demo2 />
        <h2>{translated['02a53df5']}</h2>
        <Demo3 />
        <h2>{translated['0a001122']}</h2>
        <Demo4 />
        <h2>{translated['07d62d5c']}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default SkeletonDemo
