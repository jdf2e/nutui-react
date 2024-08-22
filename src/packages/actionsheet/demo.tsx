import React from 'react'
import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const ActionSheetDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '74fc5d8a': '基础用法',
      c3a08064: '选项状态',
      c3a08065: '自定义内容',
      c3a08066: '自定义key',
    },
    'zh-TW': {
      '74fc5d8a': '基礎用法',
      c3a08064: '選項狀態',
      c3a08065: '自定義內容',
      c3a08066: '自定義key',
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      c3a08064: 'Option Status',
      c3a08065: 'Custom content',
      c3a08066: 'Custom key',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['74fc5d8a']}</h2>
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <h2>{translated.c3a08064}</h2>
        <Demo4 />
        <h2>{translated.c3a08065}</h2>
        <Demo5 />
        <h2>{translated.c3a08066}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default ActionSheetDemo
