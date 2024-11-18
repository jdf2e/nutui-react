import React from 'react'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import { useTranslate } from '@/sites/assets/locale'

const SegmentedDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      uncontrolled: '非受控',
      controlled: '受控',
      optionItems: '设置图标',
    },
  })
  return (
    <div className="demo">
      <h2>{translated.uncontrolled}</h2>
      <Demo1 />
      <h2>{translated.controlled}</h2>
      <Demo2 />
      <h2>{translated.optionItems}</h2>
      <Demo3 />
    </div>
  )
}

export default SegmentedDemo
