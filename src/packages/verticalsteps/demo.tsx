import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const StepsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      dot: '基础用法：点状',
      customIcon: '自定义图标',
    },
    'zh-TW': {
      basic: '基础用法',
      dot: '基础用法：点状',
      customIcon: '自定義圖標',
    },
    'en-US': {
      basic: 'Basic usage',
      dot: 'Basic usage: Dot',
      customIcon: 'custom Icon',
    },
  })
  return (
    <>
      <div className="demo full bg-w">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.dot}</h2>
        <Demo2 />
        <h2>{translated.customIcon}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default StepsDemo
