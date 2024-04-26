import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import './demo.scss'

const TourDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '自定义样式',
      title3: '设置偏移量',
      title4: '自定义内容',
      title5: '步骤引导',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Custom Style',
      title3: 'Custom Offset',
      title4: 'Custom Content',
      title5: 'Steps',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Demo1 />
        <h2>{translated.title2}</h2>
        <Demo2 />
        <h2>{translated.title3}</h2>
        <Demo3 />
        <h2>{translated.title4}</h2>
        <Demo4 />
        <h2>{translated.title5}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default TourDemo
