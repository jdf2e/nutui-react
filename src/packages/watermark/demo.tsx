import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'

const WaterMarkDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      part: '局部用法',
    },
    'zh-TW': {
      basic: '基礎用法',
      part: '局部用法',
    },
    'en-US': {
      basic: 'Basic Usage',
      part: 'Part Usage',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.part}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default WaterMarkDemo
