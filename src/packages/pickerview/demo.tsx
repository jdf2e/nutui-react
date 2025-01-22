import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

const PickerViewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
      adjustHeight: '自适应高度',
      multiColumn: '多列',
      controlled: '受控',
      tiled: '平铺',
    },
    'en-US': {
      title: 'Basic Usage',
      adjustHeight: 'Adjust Height',
      multiColumn: 'Multi Column',
      controlled: 'Controlled',
      tiled: 'Tiled',
    },
    'zh-TW': {
      title: '基礎用法',
      adjustHeight: '自適應高度',
      multiColumn: '多列',
      controlled: '受控',
      tiled: '平鋪',
    },
  })
  return (
    <div className="demo">
      <h2>{translated.title}</h2>
      <Demo1 />
      <h2>{translated.controlled}</h2>
      <Demo4 />
      <h2>{translated.adjustHeight}</h2>
      <Demo2 />
      <h2>{translated.multiColumn}</h2>
      <Demo3 />
      <h2>{translated.tiled}</h2>
      <Demo5 />
    </div>
  )
}

export default PickerViewDemo
