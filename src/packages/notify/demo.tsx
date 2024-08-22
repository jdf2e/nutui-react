import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const NotifyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      t1: '通知类型',
      t2: '自定义样式',
      t3: '自定义时长',
    },
    'en-US': {
      basic: 'Basic Usage',
      t1: 'Notify Type',
      t2: 'Custom Style',
      t3: 'Custom Duration',
    },
  })

  return (
    <>
      <div className="demo" style={{ paddingBottom: '30px' }}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.t1}</h2>
        <Demo2 />
        <h2>{translated.t2}</h2>
        <Demo3 />
        <h2>{translated.t3}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default NotifyDemo
